// Mezcla los Colores - Game Logic
// El Bebe Games - 2-3 Years

class MezclaColoresGame {
    constructor() {
        this.level = 1;
        this.maxLevels = 5;
        this.mixes = 0;
        this.mixesGoal = 5;
        this.timeLeft = 60;
        this.timerInterval = null;
        this.gameActive = false;
        this.drops = [];
        this.puddles = [];
        this.selectedDrop = null;

        // Level configurations
        this.levelConfigs = [
            { mixes: 5, time: 60, puddles: 2 },   // Level 1: 2 puddles, 60s
            { mixes: 6, time: 55, puddles: 3 },   // Level 2: 3 puddles, 55s
            { mixes: 7, time: 50, puddles: 3 },   // Level 3: 7 mixes, 50s
            { mixes: 8, time: 45, puddles: 4 },   // Level 4: 4 puddles, 45s
            { mixes: 10, time: 40, puddles: 4 }   // Level 5: 10 mixes, 40s
        ];

        // Color definitions (R, G, B values)
        this.colors = {
            red: { r: 255, g: 107, b: 107, emoji: '🔴', class: 'drop-red' },
            yellow: { r: 255, g: 217, b: 61, emoji: '🟡', class: 'drop-yellow' },
            blue: { r: 107, g: 203, b: 119, emoji: '🔵', class: 'drop-blue' },
            orange: { r: 255, g: 140, b: 0, emoji: '🟠', class: 'puddle-orange' },
            green: { r: 50, g: 205, b: 50, emoji: '🟢', class: 'puddle-green' },
            purple: { r: 138, g: 43, b: 226, emoji: '🟣', class: 'puddle-purple' }
        };

        // Mixing combinations
        this.mixRules = [
            { colors: ['red', 'yellow'], result: 'orange' },
            { colors: ['yellow', 'blue'], result: 'green' },
            { colors: ['red', 'blue'], result: 'purple' }
        ];

        this.init();
    }

    init() {
        this.loadProgress();
        this.bindEvents();
        this.showInstructions();
    }

    loadProgress() {
        const saved = localStorage.getItem('mezcla-colores-progress');
        if (saved) {
            const data = JSON.parse(saved);
            this.level = data.level || 1;
        }
    }

    saveProgress() {
        localStorage.setItem('mezcla-colores-progress', JSON.stringify({
            level: this.level,
            mixes: this.mixes
        }));
    }

    bindEvents() {
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('next-level-btn').addEventListener('click', () => this.nextLevel());
        document.getElementById('retry-btn').addEventListener('click', () => this.retryLevel());
        document.getElementById('home-btn').addEventListener('click', () => this.goHome());

        // Touch events for drag and drop
        const gameArea = document.getElementById('game-area');
        gameArea.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        gameArea.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        gameArea.addEventListener('touchend', (e) => this.handleTouchEnd(e));
    }

    showInstructions() {
        document.getElementById('instructions-overlay').classList.remove('hidden');
    }

    hideInstructions() {
        document.getElementById('instructions-overlay').classList.add('hidden');
    }

    startGame() {
        this.hideInstructions();
        this.loadLevel();
    }

    loadLevel() {
        const config = this.levelConfigs[this.level - 1];
        this.mixesGoal = config.mixes;
        this.timeLeft = config.time;
        this.mixes = 0;
        this.gameActive = true;

        this.updateHUD();
        this.createPuddles(config.puddles);
        this.spawnDrops();
        this.startTimer();
        this.updateProgressBar();
        this.updateTimerBar();
    }

    createPuddles(count) {
        const container = document.getElementById('puddles-container');
        container.innerHTML = '';
        this.puddles = [];

        // Create puddles
        for (let i = 0; i < count; i++) {
            const puddle = document.createElement('div');
            puddle.className = 'puddle empty';
            puddle.dataset.index = i;
            puddle.innerHTML = '?';
            puddle.addEventListener('touchend', (e) => this.handleDropPuddle(e, i));
            puddle.addEventListener('click', (e) => this.handleDropPuddle(e, i));
            container.appendChild(puddle);

            this.puddles.push({
                element: puddle,
                colors: [],
                filled: false,
                result: null
            });
        }
    }

    spawnDrops() {
        const container = document.getElementById('drops-container');
        container.innerHTML = '';
        this.drops = [];

        // Spawn 3 drops at random positions
        const dropColors = ['red', 'yellow', 'blue'];
        for (let i = 0; i < 3; i++) {
            this.createDrop(dropColors[i], i);
        }
    }

    createDrop(colorType, index) {
        const container = document.getElementById('drops-container');
        const drop = document.createElement('div');
        drop.className = `color-drop ${this.colors[colorType].class}`;
        drop.innerHTML = this.colors[colorType].emoji;
        drop.dataset.color = colorType;
        drop.dataset.index = index;

        // Random position
        const x = Math.random() * (window.innerWidth - 60) + 30;
        const y = Math.random() * (window.innerHeight - 200) + 150;
        drop.style.left = x + 'px';
        drop.style.top = y + 'px';

        container.appendChild(drop);

        this.drops.push({
            element: drop,
            color: colorType,
            x: x,
            y: y
        });

        // Make draggable
        this.makeDraggable(drop);
    }

    makeDraggable(element) {
        let startX, startY, initialX, initialY;

        const startDrag = (e) => {
            e.preventDefault();
            this.selectedDrop = element;
            element.classList.add('dragging');

            const touch = e.touches ? e.touches[0] : e;
            startX = touch.clientX;
            startY = touch.clientY;

            initialX = parseFloat(element.style.left);
            initialY = parseFloat(element.style.top);
        };

        const moveDrag = (e) => {
            if (!this.selectedDrop) return;
            e.preventDefault();

            const touch = e.touches ? e.touches[0] : e;
            const dx = touch.clientX - startX;
            const dy = touch.clientY - startY;

            element.style.left = (initialX + dx) + 'px';
            element.style.top = (initialY + dy) + 'px';
        };

        const endDrag = (e) => {
            if (!this.selectedDrop) return;

            element.classList.remove('dragging');
            this.checkDropCollision(element);
            this.selectedDrop = null;
        };

        element.addEventListener('mousedown', startDrag);
        element.addEventListener('touchstart', startDrag);
        document.addEventListener('mousemove', moveDrag);
        document.addEventListener('touchmove', moveDrag, { passive: false });
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
    }

    checkDropCollision(dropElement) {
        const dropRect = dropElement.getBoundingClientRect();
        const dropCenterX = dropRect.left + dropRect.width / 2;
        const dropCenterY = dropRect.top + dropRect.height / 2;

        this.puddles.forEach((puddle, index) => {
            const puddleRect = puddle.element.getBoundingClientRect();
            const puddleCenterX = puddleRect.left + puddleRect.width / 2;
            const puddleCenterY = puddleRect.top + puddleRect.height / 2;

            const distance = Math.sqrt(
                Math.pow(dropCenterX - puddleCenterX, 2) +
                Math.pow(dropCenterY - puddleCenterY, 2)
            );

            // If drop is close enough to puddle
            if (distance < puddleRect.width / 2) {
                this.addColorToPuddle(puddle, dropElement.dataset.color, index);
                this.respawnDrop(dropElement);
            }
        });
    }

    addColorToPuddle(puddle, color, index) {
        // Add color to puddle
        puddle.colors.push(color);
        puddle.element.classList.remove('empty');

        // Update visual
        if (puddle.colors.length === 1) {
            puddle.element.innerHTML = this.colors[color].emoji;
            puddle.element.className = `puddle ${this.colors[color].class}`;
        } else if (puddle.colors.length === 2) {
            // Check if colors can be mixed
            const result = this.mixColors(puddle.colors);
            if (result) {
                this.completeMix(puddle, result, index);
            } else {
                // Invalid combination, reset puddle
                this.resetPuddle(puddle);
                this.playSound('error');
            }
        }

        this.playSound('drop');
    }

    mixColors(colorPair) {
        const sorted = [...colorPair].sort();
        const mixRule = this.mixRules.find(rule => {
            const ruleSorted = [...rule.colors].sort();
            return JSON.stringify(ruleSorted) === JSON.stringify(sorted);
        });

        return mixRule ? mixRule.result : null;
    }

    completeMix(puddle, resultColor, index) {
        // Update puddle visual
        puddle.element.innerHTML = this.colors[resultColor].emoji;
        puddle.element.className = `puddle ${this.colors[resultColor].class}`;
        puddle.element.classList.add('filled');
        puddle.filled = true;
        puddle.result = resultColor;

        // Create particles
        this.createParticles(puddle.element, resultColor);

        // Play sound
        this.playSound('mix');

        // Increment counter
        this.mixes++;
        this.updateHUD();
        this.updateProgressBar();

        // Check level completion
        if (this.mixes >= this.mixesGoal) {
            this.levelComplete();
        } else {
            // Reset puddle after a delay
            setTimeout(() => this.resetPuddle(puddle), 1000);
        }

        this.saveProgress();
    }

    resetPuddle(puddle) {
        puddle.colors = [];
        puddle.filled = false;
        puddle.result = null;
        puddle.element.className = 'puddle empty';
        puddle.element.innerHTML = '?';
    }

    respawnDrop(dropElement) {
        // Move drop to random position
        const x = Math.random() * (window.innerWidth - 60) + 30;
        const y = Math.random() * (window.innerHeight - 200) + 150;
        dropElement.style.left = x + 'px';
        dropElement.style.top = y + 'px';

        // Animate respawn
        dropElement.classList.add('mixed');
        setTimeout(() => dropElement.classList.remove('mixed'), 500);
    }

    createParticles(element, color) {
        const rect = element.getBoundingClientRect();
        const container = document.getElementById('drops-container');

        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = (rect.left + rect.width / 2) + 'px';
            particle.style.top = (rect.top + rect.height / 2) + 'px';
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.background = this.colors[color].class === 'drop-red' ? '#ff6b6b' :
                                 this.colors[color].class === 'drop-yellow' ? '#ffd93d' :
                                 this.colors[color].class === 'drop-blue' ? '#6bcb77' :
                                 color === 'orange' ? '#ffa500' :
                                 color === 'green' ? '#32cd32' : '#9370db';

            const angle = (i / 8) * Math.PI * 2;
            const velocity = 50 + Math.random() * 30;
            particle.style.transform = `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px)`;

            container.appendChild(particle);
            setTimeout(() => particle.remove(), 1000);
        }
    }

    handleDropPuddle(e, index) {
        // Handle click/tap on puddle (alternative to drag)
    }

    handleTouchStart(e) {
        // Touch event handling
    }

    handleTouchMove(e) {
        // Touch event handling
    }

    handleTouchEnd(e) {
        // Touch event handling
    }

    updateHUD() {
        document.getElementById('level-display').textContent = this.level;
        document.getElementById('mixes-display').textContent = this.mixes;
        document.getElementById('goal-display').textContent = `/ ${this.mixesGoal}`;
        document.getElementById('time-display').textContent = this.timeLeft + 's';
    }

    updateProgressBar() {
        const progress = (this.mixes / this.mixesGoal) * 100;
        document.getElementById('progress-bar').style.width = progress + '%';
        document.getElementById('progress-text').textContent = `${this.mixes} / ${this.mixesGoal} mezclas`;
    }

    updateTimerBar() {
        const config = this.levelConfigs[this.level - 1];
        const percentage = (this.timeLeft / config.time) * 100;
        const timerBar = document.getElementById('timer-bar');

        timerBar.style.width = percentage + '%';

        // Update color based on time remaining
        timerBar.classList.remove('safe', 'warning', 'critical');
        if (percentage > 50) {
            timerBar.classList.add('safe');
        } else if (percentage > 25) {
            timerBar.classList.add('warning');
        } else {
            timerBar.classList.add('critical');
        }
    }

    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateHUD();
            this.updateTimerBar();

            if (this.timeLeft <= 0) {
                this.gameOver();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    levelComplete() {
        this.stopTimer();
        this.gameActive = false;

        // Save completed level
        this.saveProgress();

        // Show completion modal
        document.getElementById('level-stats').textContent = `Mezclas: ${this.mixes}/${this.mixesGoal}`;
        document.getElementById('level-complete-overlay').classList.remove('hidden');
        this.playSound('levelComplete');
    }

    nextLevel() {
        document.getElementById('level-complete-overlay').classList.add('hidden');

        if (this.level < this.maxLevels) {
            this.level++;
            this.loadLevel();
            this.saveProgress();
        } else {
            this.gameComplete();
        }
    }

    gameOver() {
        this.stopTimer();
        this.gameActive = false;

        document.getElementById('game-over-stats').textContent = `Mezclas: ${this.mixes}/${this.mixesGoal}`;
        document.getElementById('game-over-overlay').classList.remove('hidden');
        this.playSound('gameOver');
    }

    retryLevel() {
        document.getElementById('game-over-overlay').classList.add('hidden');
        this.loadLevel();
    }

    gameComplete() {
        document.getElementById('final-stats').textContent = `¡Completaste todos los ${this.maxLevels} niveles!`;
        document.getElementById('game-complete-overlay').classList.remove('hidden');
        this.playSound('gameComplete');

        // Reset progress after completing game
        localStorage.setItem('mezcla-colores-progress', JSON.stringify({ level: 1, mixes: 0 }));
    }

    goHome() {
        window.location.href = '../../index.html';
    }

    playSound(type) {
        // Use Web Audio API to generate sounds
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            switch (type) {
                case 'drop':
                    oscillator.frequency.value = 800;
                    oscillator.type = 'sine';
                    gainNode.gain.value = 0.2;
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.1);
                    break;
                case 'mix':
                    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2);
                    oscillator.type = 'triangle';
                    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.3);
                    break;
                case 'error':
                    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
                    oscillator.frequency.linearRampToValueAtTime(150, audioContext.currentTime + 0.2);
                    oscillator.type = 'sawtooth';
                    gainNode.gain.value = 0.2;
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.2);
                    break;
                case 'levelComplete':
                    const notes = [523, 659, 784]; // C5, E5, G5
                    notes.forEach((freq, i) => {
                        setTimeout(() => {
                            const osc = audioContext.createOscillator();
                            const gain = audioContext.createGain();
                            osc.connect(gain);
                            gain.connect(audioContext.destination);
                            osc.frequency.value = freq;
                            osc.type = 'sine';
                            gain.gain.setValueAtTime(0.3, audioContext.currentTime);
                            gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                            osc.start();
                            osc.stop(audioContext.currentTime + 0.3);
                        }, i * 150);
                    });
                    break;
                case 'gameOver':
                    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.5);
                    oscillator.type = 'sawtooth';
                    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.5);
                    break;
                case 'gameComplete':
                    const victoryNotes = [523, 659, 784, 1047]; // C5, E5, G5, C6
                    victoryNotes.forEach((freq, i) => {
                        setTimeout(() => {
                            const osc = audioContext.createOscillator();
                            const gain = audioContext.createGain();
                            osc.connect(gain);
                            gain.connect(audioContext.destination);
                            osc.frequency.value = freq;
                            osc.type = 'sine';
                            gain.gain.setValueAtTime(0.3, audioContext.currentTime);
                            gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
                            osc.start();
                            osc.stop(audioContext.currentTime + 0.4);
                        }, i * 200);
                    });
                    break;
            }
        } catch (e) {
            console.error('Error playing sound:', e);
        }
    }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new MezclaColoresGame();
});
