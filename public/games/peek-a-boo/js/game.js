// Peek-a-Boo Game - Animales que Salen

class PeekABooGame {
    constructor() {
        // Game State
        this.currentLevel = 1;
        this.doorsOpened = 0;
        this.doorsGoal = 8;
        this.timeRemaining = 30;
        this.gameActive = false;

        // Progress Data
        this.progress = this.loadProgress();

        // Level Configuration
        this.levels = [
            { doors: 8, time: 30 },   // Nivel 1: 8 puertas, 30s
            { doors: 10, time: 35 },  // Nivel 2: 10 puertas, 35s
            { doors: 12, time: 40 },  // Nivel 3: 12 puertas, 40s
            { doors: 15, time: 45 },  // Nivel 4: 15 puertas, 45s
            { doors: 18, time: 50 }   // Nivel 5: 18 puertas, 50s
        ];

        // Animals
        this.animals = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵'];

        // Audio Context
        this.audioContext = null;

        // DOM Elements
        this.elements = {
            level: document.getElementById('level'),
            doorsOpened: document.getElementById('doors-opened'),
            doorsGoal: document.getElementById('doors-goal'),
            timer: document.getElementById('timer'),
            progressFill: document.getElementById('progress-fill'),
            timerBar: document.getElementById('timer-bar'),
            doorsGrid: document.getElementById('doors-grid'),
            animalModal: document.getElementById('animal-modal'),
            animalEmoji: document.getElementById('animal-emoji'),
            closeModal: document.getElementById('close-modal'),
            levelCompleteModal: document.getElementById('level-complete-modal'),
            finalLevel: document.getElementById('final-level'),
            finalDoors: document.getElementById('final-doors'),
            nextLevelBtn: document.getElementById('next-level-btn'),
            timeUpModal: document.getElementById('time-up-modal'),
            timeUpDoors: document.getElementById('time-up-doors'),
            timeUpGoal: document.getElementById('time-up-goal'),
            retryLevelBtn: document.getElementById('retry-level-btn'),
            gameCompleteModal: document.getElementById('game-complete-modal'),
            totalDoorsFinal: document.getElementById('total-doors-final'),
            totalGamesFinal: document.getElementById('total-games-final'),
            playAgainBtn: document.getElementById('play-again-btn')
        };

        // Timer Interval
        this.timerInterval = null;

        this.init();
    }

    init() {
        // Initialize Audio Context
        this.initAudio();

        // Event Listeners
        this.elements.closeModal.addEventListener('click', () => this.hideAnimalModal());
        this.elements.nextLevelBtn.addEventListener('click', () => this.nextLevel());
        this.elements.retryLevelBtn.addEventListener('click', () => this.retryLevel());
        this.elements.playAgainBtn.addEventListener('click', () => this.playAgain());

        // Start Game
        this.startLevel();
    }

    initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API not supported');
        }
    }

    loadProgress() {
        const saved = localStorage.getItem('peek-a-boo-progress');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            unlockedLevels: 1,
            totalGamesPlayed: 0,
            totalDoorsOpened: 0
        };
    }

    saveProgress() {
        localStorage.setItem('peek-a-boo-progress', JSON.stringify(this.progress));
    }

    startLevel() {
        // Get level configuration
        const levelConfig = this.levels[this.currentLevel - 1];
        this.doorsGoal = levelConfig.doors;
        this.timeRemaining = levelConfig.time;
        this.doorsOpened = 0;
        this.gameActive = true;

        // Update HUD
        this.updateHUD();

        // Create doors
        this.createDoors();

        // Start timer
        this.startTimer();
    }

    createDoors() {
        this.elements.doorsGrid.innerHTML = '';

        // Calculate doors to show (2x2 grid, repeat as needed)
        const doorsPerIteration = 4;
        const iterations = Math.ceil(this.doorsGoal / doorsPerIteration);

        for (let i = 0; i < this.doorsGoal; i++) {
            const door = document.createElement('div');
            door.className = 'door';
            door.dataset.index = i;

            // Add door knob
            const knob = document.createElement('div');
            knob.className = 'door-knob';
            door.appendChild(knob);

            // Add question mark
            const question = document.createElement('span');
            question.className = 'door-question';
            question.textContent = '?';
            door.appendChild(question);

            // Click event
            door.addEventListener('click', () => this.openDoor(door));

            this.elements.doorsGrid.appendChild(door);
        }
    }

    openDoor(doorElement) {
        if (!this.gameActive || doorElement.classList.contains('opened')) {
            return;
        }

        // Mark door as opened
        doorElement.classList.add('opened');

        // Get random animal
        const animal = this.animals[Math.floor(Math.random() * this.animals.length)];

        // Play sound
        this.playSound('doorOpen');

        // Show animal modal
        this.showAnimalModal(animal);

        // Update count
        this.doorsOpened++;
        this.progress.totalDoorsOpened++;

        // Update HUD
        this.updateHUD();

        // Check if level complete
        if (this.doorsOpened >= this.doorsGoal) {
            setTimeout(() => this.levelComplete(), 1500);
        }
    }

    showAnimalModal(animal) {
        this.elements.animalEmoji.textContent = animal;
        this.elements.animalModal.classList.add('active');
        this.playSound('animal');
    }

    hideAnimalModal() {
        this.elements.animalModal.classList.remove('active');
    }

    startTimer() {
        // Clear existing timer
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        // Start new timer
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimer();

            if (this.timeRemaining <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    updateTimer() {
        this.elements.timer.textContent = this.timeRemaining;

        // Update timer bar
        const levelConfig = this.levels[this.currentLevel - 1];
        const percentage = (this.timeRemaining / levelConfig.time) * 100;
        this.elements.timerBar.style.width = percentage + '%';

        // Update timer bar color based on remaining time
        this.elements.timerBar.className = 'timer-bar';
        if (percentage < 25) {
            this.elements.timerBar.classList.add('critical');
        } else if (percentage < 50) {
            this.elements.timerBar.classList.add('warning');
        }
    }

    updateHUD() {
        this.elements.level.textContent = this.currentLevel;
        this.elements.doorsOpened.textContent = this.doorsOpened;
        this.elements.doorsGoal.textContent = this.doorsGoal;

        // Update progress bar
        const percentage = (this.doorsOpened / this.doorsGoal) * 100;
        this.elements.progressFill.style.width = percentage + '%';
        this.elements.progressFill.textContent = this.doorsOpened + '/' + this.doorsGoal;
    }

    levelComplete() {
        this.gameActive = false;
        clearInterval(this.timerInterval);

        // Play sound
        this.playSound('levelComplete');

        // Update progress
        if (this.currentLevel >= this.progress.unlockedLevels) {
            this.progress.unlockedLevels = this.currentLevel + 1;
        }
        this.progress.totalGamesPlayed++;
        this.saveProgress();

        // Show level complete modal
        this.elements.finalLevel.textContent = this.currentLevel;
        this.elements.finalDoors.textContent = this.doorsOpened;
        this.elements.levelCompleteModal.classList.add('active');

        // Check if all levels complete
        if (this.currentLevel >= this.levels.length) {
            this.elements.nextLevelBtn.textContent = '¡Juego Completado! 🏆';
            this.elements.nextLevelBtn.onclick = () => this.gameComplete();
        }
    }

    timeUp() {
        this.gameActive = false;
        clearInterval(this.timerInterval);

        // Play sound
        this.playSound('timeUp');

        // Show time up modal
        this.elements.timeUpDoors.textContent = this.doorsOpened;
        this.elements.timeUpGoal.textContent = this.doorsGoal;
        this.elements.timeUpModal.classList.add('active');
    }

    gameComplete() {
        this.elements.levelCompleteModal.classList.remove('active');
        this.elements.totalDoorsFinal.textContent = this.progress.totalDoorsOpened;
        this.elements.totalGamesFinal.textContent = this.progress.totalGamesPlayed;
        this.elements.gameCompleteModal.classList.add('active');
    }

    nextLevel() {
        this.elements.levelCompleteModal.classList.remove('active');
        this.currentLevel++;
        this.startLevel();
    }

    retryLevel() {
        this.elements.timeUpModal.classList.remove('active');
        this.startLevel();
    }

    playAgain() {
        this.elements.gameCompleteModal.classList.remove('active');
        this.currentLevel = 1;
        this.progress.totalGamesPlayed = 0;
        this.progress.totalDoorsOpened = 0;
        this.saveProgress();
        this.startLevel();
    }

    playSound(type) {
        if (!this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        switch (type) {
            case 'doorOpen':
                oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(300, this.audioContext.currentTime + 0.1);
                gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 0.2);
                break;

            case 'animal':
                oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.15);
                oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.3);
                gainNode.gain.setValueAtTime(0.4, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 0.4);
                break;

            case 'levelComplete':
                // Play a happy chord
                const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
                frequencies.forEach((freq, i) => {
                    const osc = this.audioContext.createOscillator();
                    const gain = this.audioContext.createGain();
                    osc.connect(gain);
                    gain.connect(this.audioContext.destination);
                    osc.frequency.setValueAtTime(freq, this.audioContext.currentTime + i * 0.1);
                    gain.gain.setValueAtTime(0.3, this.audioContext.currentTime + i * 0.1);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + i * 0.1 + 0.5);
                    osc.start(this.audioContext.currentTime + i * 0.1);
                    osc.stop(this.audioContext.currentTime + i * 0.1 + 0.5);
                });
                break;

            case 'timeUp':
                oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.5);
                gainNode.gain.setValueAtTime(0.4, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 0.5);
                break;
        }
    }
}

// Start game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PeekABooGame();
});
