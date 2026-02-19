// Pelota que Rueda - Game Logic

class BallGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();

        // Game state
        this.ball = {
            x: 100,
            y: this.canvas.height / 2,
            radius: 30,
            vx: 0,
            vy: 0,
            friction: 0.98,
            maxSpeed: 8
        };

        this.goal = {
            x: this.canvas.width - 100,
            y: this.canvas.height / 2,
            radius: 40,
            reached: false
        };

        this.obstacles = [];
        this.level = 1;
        this.maxLevels = 5;
        this.score = 0;
        this.totalScore = 0;
        this.timeLeft = 30;
        this.maxTime = 30;
        this.gameRunning = false;
        this.paused = false;

        // Touch/gyro controls
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.gyroEnabled = false;

        // Sound effects (Web Audio API)
        this.audioContext = null;
        this.sounds = {};

        this.init();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.loadProgress();
        this.setupEventListeners();
        this.setupAudio();
        this.showStartScreen();
        this.generateLevel();
        this.render();
    }

    setupAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.createSound('bounce', 300, 'square');
            this.createSound('goal', 600, 'sine');
            this.createSound('win', 800, 'sine');
        } catch (e) {
            console.log('Audio not supported');
        }
    }

    createSound(type, frequency, waveform) {
        this.sounds[type] = { frequency, waveform };
    }

    playSound(type) {
        if (!this.audioContext) return;
        const sound = this.sounds[type];
        if (!sound) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.type = sound.waveform;
        oscillator.frequency.setValueAtTime(sound.frequency, this.audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.3);
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.resizeCanvas());

        // Touch events
        this.canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: false });
        this.canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
        this.canvas.addEventListener('touchend', (e) => this.handleTouchEnd(e));

        // Gyroscope
        if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
            document.getElementById('start-btn').addEventListener('click', () => {
                DeviceOrientationEvent.requestPermission()
                    .then(response => {
                        if (response === 'granted') {
                            this.gyroEnabled = true;
                            window.addEventListener('deviceorientation', (e) => this.handleGyro(e));
                        }
                    })
                    .catch(console.error);
            });
        } else if (window.DeviceOrientationEvent) {
            this.gyroEnabled = true;
            window.addEventListener('deviceorientation', (e) => this.handleGyro(e));
        }

        // Button events
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('next-level-btn').addEventListener('click', () => this.nextLevel());
        document.getElementById('retry-btn').addEventListener('click', () => this.retryLevel());
        document.getElementById('play-again-btn').addEventListener('click', () => this.playAgain());
    }

    handleTouchStart(e) {
        e.preventDefault();
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
    }

    handleTouchMove(e) {
        e.preventDefault();
        if (!this.gameRunning || this.paused) return;

        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;

        const deltaX = (touchX - this.touchStartX) * 0.05;
        const deltaY = (touchY - this.touchStartY) * 0.05;

        this.ball.vx += deltaX;
        this.ball.vy += deltaY;

        // Limit speed
        const speed = Math.sqrt(this.ball.vx ** 2 + this.ball.vy ** 2);
        if (speed > this.ball.maxSpeed) {
            this.ball.vx = (this.ball.vx / speed) * this.ball.maxSpeed;
            this.ball.vy = (this.ball.vy / speed) * this.ball.maxSpeed;
        }

        this.touchStartX = touchX;
        this.touchStartY = touchY;
    }

    handleTouchEnd(e) {
        // Keep momentum
    }

    handleGyro(e) {
        if (!this.gameRunning || this.paused) return;

        const tiltX = (e.beta - 45) * 0.15; // Tilt forward/backward
        const tiltY = (e.gamma) * 0.15; // Tilt left/right

        this.ball.vx += tiltX;
        this.ball.vy += tiltY;

        // Limit speed
        const speed = Math.sqrt(this.ball.vx ** 2 + this.ball.vy ** 2);
        if (speed > this.ball.maxSpeed) {
            this.ball.vx = (this.ball.vx / speed) * this.ball.maxSpeed;
            this.ball.vy = (this.ball.vy / speed) * this.ball.maxSpeed;
        }
    }

    generateLevel() {
        this.obstacles = [];
        this.goal.reached = false;

        // Reset ball position
        this.ball.x = 60;
        this.ball.y = this.canvas.height / 2;
        this.ball.vx = 0;
        this.ball.vy = 0;

        // Set goal position (right side)
        this.goal.x = this.canvas.width - 60;
        this.goal.y = this.canvas.height / 2;

        // Generate obstacles based on level
        const numObstacles = this.level * 2;
        for (let i = 0; i < numObstacles; i++) {
            this.obstacles.push({
                x: 100 + Math.random() * (this.canvas.width - 200),
                y: 50 + Math.random() * (this.canvas.height - 100),
                width: 60 + Math.random() * 40,
                height: 60 + Math.random() * 40,
                color: `hsl(${Math.random() * 360}, 70%, 60%)`
            });
        }

        // Update time limit based on level
        this.maxTime = 25 + this.level * 5;
        this.timeLeft = this.maxTime;

        // Update HUD
        this.updateHUD();
    }

    update() {
        if (!this.gameRunning || this.paused) return;

        // Apply velocity
        this.ball.x += this.ball.vx;
        this.ball.y += this.ball.vy;

        // Apply friction
        this.ball.vx *= this.ball.friction;
        this.ball.vy *= this.ball.friction;

        // Wall collisions
        if (this.ball.x - this.ball.radius < 0) {
            this.ball.x = this.ball.radius;
            this.ball.vx *= -0.7;
            this.playSound('bounce');
        }
        if (this.ball.x + this.ball.radius > this.canvas.width) {
            this.ball.x = this.canvas.width - this.ball.radius;
            this.ball.vx *= -0.7;
            this.playSound('bounce');
        }
        if (this.ball.y - this.ball.radius < 0) {
            this.ball.y = this.ball.radius;
            this.ball.vy *= -0.7;
            this.playSound('bounce');
        }
        if (this.ball.y + this.ball.radius > this.canvas.height) {
            this.ball.y = this.canvas.height - this.ball.radius;
            this.ball.vy *= -0.7;
            this.playSound('bounce');
        }

        // Obstacle collisions
        this.obstacles.forEach(obs => {
            if (this.checkCollision(this.ball, obs)) {
                // Simple bounce
                const centerX = obs.x + obs.width / 2;
                const centerY = obs.y + obs.height / 2;

                if (Math.abs(this.ball.x - centerX) > Math.abs(this.ball.y - centerY)) {
                    this.ball.vx *= -0.8;
                    this.ball.x += (this.ball.x - centerX) > 0 ? 5 : -5;
                } else {
                    this.ball.vy *= -0.8;
                    this.ball.y += (this.ball.y - centerY) > 0 ? 5 : -5;
                }
                this.playSound('bounce');
            }
        });

        // Check if goal reached
        const distToGoal = Math.sqrt(
            Math.pow(this.ball.x - this.goal.x, 2) +
            Math.pow(this.ball.y - this.goal.y, 2)
        );

        if (distToGoal < this.ball.radius + this.goal.radius && !this.goal.reached) {
            this.goalReached();
        }

        // Update timer
        this.timeLeft -= 1 / 60;
        if (this.timeLeft <= 0) {
            this.timeUp();
        }

        this.updateHUD();
        this.updateProgress();
    }

    checkCollision(ball, rect) {
        const closestX = Math.max(rect.x, Math.min(ball.x, rect.x + rect.width));
        const closestY = Math.max(rect.y, Math.min(ball.y, rect.y + rect.height));

        const distX = ball.x - closestX;
        const distY = ball.y - closestY;

        return (distX * distX + distY * distY) < (ball.radius * ball.radius);
    }

    goalReached() {
        this.goal.reached = true;
        this.playSound('goal');
        this.paused = true;

        // Calculate score based on time remaining
        this.score = Math.floor(this.timeLeft * 10);
        this.totalScore += this.score;

        document.getElementById('level-score').textContent = `Puntos: ${this.score}`;

        if (this.level >= this.maxLevels) {
            this.showGameComplete();
        } else {
            this.showLevelComplete();
        }
    }

    timeUp() {
        this.playSound('bounce');
        this.paused = true;
        this.gameRunning = false;
        document.getElementById('final-score').textContent = `Puntos: ${this.totalScore}`;
        document.getElementById('time-up-modal').classList.remove('hidden');
    }

    updateHUD() {
        document.getElementById('level-display').textContent = `Nivel ${this.level}/${this.maxLevels}`;
        document.getElementById('timer-display').textContent = `${Math.ceil(this.timeLeft)}s`;
        document.getElementById('score-display').textContent = `Puntos: ${this.totalScore}`;
    }

    updateProgress() {
        // Timer bar
        const timerPercent = (this.timeLeft / this.maxTime) * 100;
        const timerBar = document.getElementById('timer-bar');
        timerBar.style.width = `${timerPercent}%`;

        // Color change based on time
        if (timerPercent < 25) {
            timerBar.style.background = '#ff6b6b';
        } else if (timerPercent < 50) {
            timerBar.style.background = '#ffd93d';
        } else {
            timerBar.style.background = '#6bff8a';
        }

        // Progress bar (distance to goal)
        const maxDistance = this.canvas.width - 120;
        const currentDistance = Math.sqrt(
            Math.pow(this.ball.x - this.goal.x, 2) +
            Math.pow(this.ball.y - this.goal.y, 2)
        );
        const progressPercent = Math.max(0, 100 - (currentDistance / maxDistance) * 100);
        document.getElementById('progress-bar').style.width = `${progressPercent}%`;
    }

    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw goal
        this.ctx.beginPath();
        this.ctx.arc(this.goal.x, this.goal.y, this.goal.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.goal.reached ? '#00ff88' : '#ffd700';
        this.ctx.fill();
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 4;
        this.ctx.stroke();

        // Draw goal text
        this.ctx.fillStyle = '#333';
        this.ctx.font = 'bold 16px Comic Sans MS';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('META', this.goal.x, this.goal.y + 5);

        // Draw obstacles
        this.obstacles.forEach(obs => {
            this.ctx.fillStyle = obs.color;
            this.ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
            this.ctx.strokeStyle = '#fff';
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(obs.x, obs.y, obs.width, obs.height);
        });

        // Draw ball
        this.ctx.beginPath();
        this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
        const gradient = this.ctx.createRadialGradient(
            this.ball.x - 10, this.ball.y - 10, 5,
            this.ball.x, this.ball.y, this.ball.radius
        );
        gradient.addColorStop(0, '#ff9999');
        gradient.addColorStop(1, '#ff3333');
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 4;
        this.ctx.stroke();

        // Game loop
        this.update();
        requestAnimationFrame(() => this.render());
    }

    showStartScreen() {
        document.getElementById('start-screen').classList.remove('hidden');
    }

    showLevelComplete() {
        document.getElementById('level-complete-modal').classList.remove('hidden');
    }

    showGameComplete() {
        document.getElementById('total-score').textContent = `Puntos Totales: ${this.totalScore}`;
        document.getElementById('game-complete-modal').classList.remove('hidden');
        this.saveProgress();
    }

    startGame() {
        document.getElementById('start-screen').classList.add('hidden');
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        this.gameRunning = true;
        this.paused = false;
        this.startTimer();
    }

    startTimer() {
        const timerInterval = setInterval(() => {
            if (!this.gameRunning || this.paused) {
                clearInterval(timerInterval);
                return;
            }
            this.timeLeft -= 1;
            if (this.timeLeft <= 0) {
                clearInterval(timerInterval);
                this.timeUp();
            }
        }, 1000);
    }

    nextLevel() {
        document.getElementById('level-complete-modal').classList.add('hidden');
        this.level++;
        this.generateLevel();
        this.gameRunning = true;
        this.paused = false;
    }

    retryLevel() {
        document.getElementById('time-up-modal').classList.add('hidden');
        this.totalScore = 0;
        this.generateLevel();
        this.gameRunning = true;
        this.paused = false;
    }

    playAgain() {
        document.getElementById('game-complete-modal').classList.add('hidden');
        this.level = 1;
        this.totalScore = 0;
        this.generateLevel();
        this.gameRunning = true;
        this.paused = false;
    }

    loadProgress() {
        const progress = localStorage.getItem('pelota-rueda-progress');
        if (progress) {
            const data = JSON.parse(progress);
            this.level = data.level || 1;
            this.totalScore = data.totalScore || 0;
        }
    }

    saveProgress() {
        const progress = {
            level: this.level,
            totalScore: this.totalScore,
            completed: true
        };
        localStorage.setItem('pelota-rueda-progress', JSON.stringify(progress));
    }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.game = new BallGame();
});
