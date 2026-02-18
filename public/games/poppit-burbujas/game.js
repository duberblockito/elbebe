// Poppit! Burbujas Mágicas - Game Logic
// Target: 1-2 years old children

// Level configuration
const LEVELS = [
    { target: 5,  timeLimit: 30,  bubbleInterval: 1000, minSpeed: 1, maxSpeed: 2 },
    { target: 8,  timeLimit: 35,  bubbleInterval: 900,  minSpeed: 1.5, maxSpeed: 2.5 },
    { target: 10, timeLimit: 40,  bubbleInterval: 800,  minSpeed: 2, maxSpeed: 3 },
    { target: 12, timeLimit: 45,  bubbleInterval: 700,  minSpeed: 2.5, maxSpeed: 3.5 },
    { target: 15, timeLimit: 50,  bubbleInterval: 600,  minSpeed: 3, maxSpeed: 4 }
];

class BubbleGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.bubbles = [];
        this.particles = [];
        this.isRunning = false;
        this.isPaused = false;
        this.lastBubbleTime = 0;
        this.audioContext = null;

        // Game state
        this.gameState = {
            currentLevel: 0,
            bubblesPopped: 0,
            bubblesPoppedInLevel: 0,
            timeRemaining: 0,
            isLevelComplete: false,
            isGameOver: false,
            unlockedLevels: 1
        };

        // Colors for bubbles
        this.colors = [
            '#FF6B6B', // Red
            '#4ECDC4', // Teal
            '#45B7D1', // Blue
            '#96CEB4', // Green
            '#FFEAA7', // Yellow
            '#DDA0DD', // Plum
            '#98D8C8'  // Mint
        ];

        this.resize();
        this.initEventListeners();
        this.loadProgress();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    initEventListeners() {
        window.addEventListener('resize', () => this.resize());

        // Touch support
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (!this.isRunning || this.isPaused) return;
            for (let touch of e.changedTouches) {
                this.checkBubblePop(touch.clientX, touch.clientY);
            }
        }, { passive: false });

        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
        }, { passive: false });

        // Mouse support
        this.canvas.addEventListener('mousedown', (e) => {
            if (!this.isRunning || this.isPaused) return;
            this.checkBubblePop(e.clientX, e.clientY);
        });

        this.canvas.addEventListener('mousemove', (e) => {
            if (!this.isRunning || this.isPaused) return;
            if (e.buttons === 1) {
                this.checkBubblePop(e.clientX, e.clientY);
            }
        });

        // Start button
        document.getElementById('startBtn').addEventListener('click', () => {
            this.startGame();
        });

        // Modal buttons
        document.getElementById('nextLevelBtn').addEventListener('click', () => {
            this.nextLevel();
        });

        document.getElementById('retryLevelBtn').addEventListener('click', () => {
            this.retryLevel();
        });

        document.getElementById('playAgainBtn').addEventListener('click', () => {
            this.restartGame();
        });
    }

    // Progress persistence
    saveProgress() {
        const progress = {
            unlockedLevels: this.gameState.unlockedLevels,
            totalBubblesPopped: this.gameState.bubblesPopped,
            lastPlayed: new Date().toISOString()
        };
        localStorage.setItem('poppit-burbujas-progress', JSON.stringify(progress));
    }

    loadProgress() {
        const saved = localStorage.getItem('poppit-burbujas-progress');
        if (saved) {
            try {
                const progress = JSON.parse(saved);
                this.gameState.unlockedLevels = Math.min(progress.unlockedLevels || 1, LEVELS.length);
                this.gameState.bubblesPopped = progress.totalBubblesPopped || 0;
            } catch (e) {
                console.error('Error loading progress:', e);
            }
        }
    }

    initAudio() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    playPopSound() {
        if (!this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        // Random pitch for variety
        const frequency = 400 + Math.random() * 400; // 400-800 Hz
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(
            frequency * 0.5,
            this.audioContext.currentTime + 0.1
        );

        // Volume envelope
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
            0.01,
            this.audioContext.currentTime + 0.1
        );

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.type = 'sine';
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.15);
    }

    getCurrentLevelConfig() {
        return LEVELS[Math.min(this.gameState.currentLevel, LEVELS.length - 1)];
    }

    createBubble() {
        const levelConfig = this.getCurrentLevelConfig();
        const radius = 30 + Math.random() * 40; // 30-70px
        const x = Math.random() * (this.canvas.width - radius * 2) + radius;
        const speed = levelConfig.minSpeed + Math.random() * (levelConfig.maxSpeed - levelConfig.minSpeed);
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];

        this.bubbles.push({
            x,
            y: this.canvas.height + radius,
            radius,
            speed,
            color,
            opacity: 0.8,
            wobble: Math.random() * Math.PI * 2,
            wobbleSpeed: 0.02 + Math.random() * 0.02
        });
    }

    createParticles(x, y, color, radius) {
        const particleCount = 8 + Math.floor(Math.random() * 5);
        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 / particleCount) * i;
            const speed = 2 + Math.random() * 4;
            const particleRadius = 3 + Math.random() * 4;

            this.particles.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: particleRadius,
                color,
                life: 1.0,
                decay: 0.02 + Math.random() * 0.02
            });
        }
    }

    checkBubblePop(x, y) {
        for (let i = this.bubbles.length - 1; i >= 0; i--) {
            const bubble = this.bubbles[i];
            const dx = x - bubble.x;
            const dy = y - bubble.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < bubble.radius) {
                // Pop the bubble
                this.playPopSound();
                this.createParticles(bubble.x, bubble.y, bubble.color, bubble.radius);
                this.bubbles.splice(i, 1);

                // Update counters
                this.gameState.bubblesPopped++;
                this.gameState.bubblesPoppedInLevel++;

                // Check if level is complete
                const levelConfig = this.getCurrentLevelConfig();
                if (this.gameState.bubblesPoppedInLevel >= levelConfig.target) {
                    this.completeLevel();
                }

                this.updateUI();
                break; // Only pop one bubble per touch
            }
        }
    }

    updateUI() {
        const levelConfig = this.getCurrentLevelConfig();

        // Update level indicator
        document.getElementById('levelText').textContent = `Nivel ${this.gameState.currentLevel + 1}`;

        // Update progress bar
        const progressPercent = Math.min((this.gameState.bubblesPoppedInLevel / levelConfig.target) * 100, 100);
        document.getElementById('progressFill').style.width = `${progressPercent}%`;
        document.getElementById('bubblesPopped').textContent = this.gameState.bubblesPoppedInLevel;
        document.getElementById('bubblesTarget').textContent = levelConfig.target;

        // Update timer bar
        const timerPercent = (this.gameState.timeRemaining / levelConfig.timeLimit) * 100;
        document.getElementById('timerFill').style.width = `${timerPercent}%`;
        document.getElementById('timerText').textContent = `${Math.ceil(this.gameState.timeRemaining)}s`;
    }

    showLevelComplete() {
        this.isPaused = true;
        const levelConfig = this.getCurrentLevelConfig();
        document.getElementById('levelBubblesPopped').textContent = this.gameState.bubblesPoppedInLevel;
        document.getElementById('levelCompleteModal').classList.remove('hidden');
    }

    showTimeUp() {
        this.isPaused = true;
        document.getElementById('timeUpBubblesPopped').textContent = this.gameState.bubblesPoppedInLevel;
        document.getElementById('timeUpModal').classList.remove('hidden');
    }

    showGameComplete() {
        this.isPaused = true;
        document.getElementById('totalBubblesPopped').textContent = this.gameState.bubblesPopped;
        document.getElementById('gameCompleteModal').classList.remove('hidden');
    }

    completeLevel() {
        this.isPaused = true;

        // Save progress
        if (this.gameState.currentLevel + 1 > this.gameState.unlockedLevels) {
            this.gameState.unlockedLevels = this.gameState.currentLevel + 2;
        }
        this.saveProgress();

        // Show level complete modal
        setTimeout(() => {
            this.showLevelComplete();
        }, 500);
    }

    nextLevel() {
        document.getElementById('levelCompleteModal').classList.add('hidden');
        this.gameState.currentLevel++;

        // Check if all levels completed
        if (this.gameState.currentLevel >= LEVELS.length) {
            this.showGameComplete();
            return;
        }

        this.startLevel();
    }

    retryLevel() {
        document.getElementById('timeUpModal').classList.add('hidden');
        this.startLevel();
    }

    restartGame() {
        document.getElementById('gameCompleteModal').classList.add('hidden');
        this.gameState.currentLevel = 0;
        this.gameState.bubblesPopped = 0;
        this.startLevel();
    }

    startLevel() {
        const levelConfig = this.getCurrentLevelConfig();

        // Reset level state
        this.gameState.bubblesPoppedInLevel = 0;
        this.gameState.timeRemaining = levelConfig.timeLimit;
        this.isPaused = false;
        this.isLevelComplete = false;
        this.isGameOver = false;

        // Clear bubbles
        this.bubbles = [];
        this.particles = [];

        // Update UI
        this.updateUI();

        // Start timer
        this.lastTime = Date.now();
    }

    update() {
        if (!this.isRunning || this.isPaused) return;

        const now = Date.now();
        const deltaTime = (now - this.lastTime) / 1000; // Convert to seconds
        this.lastTime = now;

        // Update timer
        this.gameState.timeRemaining -= deltaTime;
        const levelConfig = this.getCurrentLevelConfig();

        if (this.gameState.timeRemaining <= 0) {
            this.gameState.timeRemaining = 0;
            this.updateUI();
            this.showTimeUp();
            return;
        }

        // Create new bubbles periodically
        if (now - this.lastBubbleTime > levelConfig.bubbleInterval) {
            this.createBubble();
            this.lastBubbleTime = now;
        }

        // Update bubbles
        for (let i = this.bubbles.length - 1; i >= 0; i--) {
            const bubble = this.bubbles[i];
            bubble.y -= bubble.speed;
            bubble.wobble += bubble.wobbleSpeed;
            bubble.x += Math.sin(bubble.wobble) * 0.5;

            // Remove bubbles that go off screen
            if (bubble.y < -bubble.radius) {
                this.bubbles.splice(i, 1);
            }
        }

        // Update particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.1; // Gravity
            particle.life -= particle.decay;

            if (particle.life <= 0) {
                this.particles.splice(i, 1);
            }
        }

        // Update UI periodically
        this.updateUI();
    }

    draw() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw bubbles
        for (const bubble of this.bubbles) {
            // Bubble body
            this.ctx.beginPath();
            this.ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = bubble.color;
            this.ctx.globalAlpha = bubble.opacity;
            this.ctx.fill();

            // Bubble shine (reflection)
            this.ctx.beginPath();
            this.ctx.arc(
                bubble.x - bubble.radius * 0.3,
                bubble.y - bubble.radius * 0.3,
                bubble.radius * 0.2,
                0,
                Math.PI * 2
            );
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            this.ctx.fill();

            // Bubble outline
            this.ctx.beginPath();
            this.ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        }

        // Draw particles
        for (const particle of this.particles) {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.life;
            this.ctx.fill();
        }

        this.ctx.globalAlpha = 1.0;
    }

    gameLoop() {
        if (!this.isRunning) return;

        this.update();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }

    startGame() {
        this.initAudio();
        document.getElementById('intro').classList.add('hidden');
        document.getElementById('gameUI').classList.remove('hidden');

        // Reset game state
        this.gameState.currentLevel = 0;
        this.gameState.bubblesPopped = 0;

        this.isRunning = true;
        this.bubbles = [];
        this.particles = [];

        this.startLevel();
        this.gameLoop();
    }
}

// Initialize game when page loads
window.addEventListener('load', () => {
    new BubbleGame();
});
