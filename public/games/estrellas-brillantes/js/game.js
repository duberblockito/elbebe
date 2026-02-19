// Estrellas Brillantes - Game Logic

class Star {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * (canvas.width - 60) + 30;
        this.y = Math.random() * (canvas.height - 200) + 150;
        this.size = 40 + Math.random() * 30;
        this.twinkle = 0;
        this.twinkleSpeed = 0.02 + Math.random() * 0.03;
        this.color = this.getRandomColor();
        this.active = true;
        this.pulsePhase = Math.random() * Math.PI * 2;
    }

    getRandomColor() {
        const colors = [
            { main: '#FFD700', glow: 'rgba(255, 215, 0, 0.5)' },    // Gold
            { main: '#FFA500', glow: 'rgba(255, 165, 0, 0.5)' },    // Orange
            { main: '#FF6B6B', glow: 'rgba(255, 107, 107, 0.5)' },  // Red
            { main: '#4ECDC4', glow: 'rgba(78, 205, 196, 0.5)' },   // Cyan
            { main: '#FFE66D', glow: 'rgba(255, 230, 109, 0.5)' },  // Yellow
            { main: '#95E1D3', glow: 'rgba(149, 225, 211, 0.5)' },  // Mint
            { main: '#F38181', glow: 'rgba(243, 129, 129, 0.5)' },  // Light Red
            { main: '#AA96DA', glow: 'rgba(170, 150, 218, 0.5)' }   // Purple
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.twinkle += this.twinkleSpeed;
        this.pulsePhase += 0.05;
    }

    draw(ctx) {
        if (!this.active) return;

        const twinkleScale = 0.8 + Math.sin(this.twinkle) * 0.2;
        const pulseSize = Math.sin(this.pulsePhase) * 5;
        const finalSize = (this.size + pulseSize) * twinkleScale;

        // Glow effect
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, finalSize * 2
        );
        gradient.addColorStop(0, this.color.glow);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, finalSize * 2, 0, Math.PI * 2);
        ctx.fill();

        // Star shape
        this.drawStar(ctx, this.x, this.y, 5, finalSize, finalSize / 2, this.color.main);
    }

    drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, color) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);

        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }

        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fill();
    }

    isTouched(x, y) {
        if (!this.active) return false;
        const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
        return distance < this.size * 1.5;
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 10;
        this.vy = (Math.random() - 0.5) * 10;
        this.size = Math.random() * 8 + 4;
        this.color = color;
        this.life = 1;
        this.decay = 0.02 + Math.random() * 0.02;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.2; // gravity
        this.life -= this.decay;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    isDead() {
        return this.life <= 0;
    }
}

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.particles = [];
        this.currentLevel = 1;
        this.starsCollected = 0;
        this.targetStars = 5;
        this.timeLeft = 30;
        this.maxTime = 30;
        this.timerInterval = null;
        this.gameRunning = false;

        // Level configuration
        this.levelConfig = [
            { stars: 5, time: 30 },
            { stars: 8, time: 35 },
            { stars: 10, time: 40 },
            { stars: 12, time: 45 },
            { stars: 15, time: 50 }
        ];

        this.loadProgress();
        this.setupCanvas();
        this.setupEvents();
        this.startGame();
    }

    loadProgress() {
        const saved = localStorage.getItem('estrellas-brillantes-progress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.currentLevel = progress.level || 1;
        }
    }

    saveProgress() {
        localStorage.setItem('estrellas-brillantes-progress', JSON.stringify({
            level: this.currentLevel
        }));
    }

    setupCanvas() {
        const resize = () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);
    }

    setupEvents() {
        const handleTouch = (e) => {
            if (!this.gameRunning) return;

            e.preventDefault();
            const rect = this.canvas.getBoundingClientRect();
            const touch = e.touches ? e.touches[0] : e;
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;

            this.stars.forEach(star => {
                if (star.isTouched(x, y)) {
                    this.collectStar(star);
                }
            });
        };

        this.canvas.addEventListener('touchstart', handleTouch, { passive: false });
        this.canvas.addEventListener('click', handleTouch);

        // Modal buttons
        document.getElementById('nextLevelBtn').addEventListener('click', () => {
            this.hideModals();
            this.nextLevel();
        });

        document.getElementById('retryBtn').addEventListener('click', () => {
            this.hideModals();
            this.restartLevel();
        });

        document.getElementById('homeBtn').addEventListener('click', () => {
            window.location.href = '../../index.html';
        });
    }

    startGame() {
        const config = this.levelConfig[Math.min(this.currentLevel - 1, this.levelConfig.length - 1)];
        this.targetStars = config.stars;
        this.timeLeft = config.time;
        this.maxTime = config.time;
        this.starsCollected = 0;
        this.stars = [];
        this.particles = [];
        this.gameRunning = true;

        // Create stars
        for (let i = 0; i < this.targetStars + 3; i++) { // +3 to ensure enough stars
            this.stars.push(new Star(this.canvas));
        }

        // Start timer
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateUI();

            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);

        this.updateUI();
        this.gameLoop();
    }

    collectStar(star) {
        if (!star.active) return;

        star.active = false;
        this.starsCollected++;

        // Create particles
        for (let i = 0; i < 15; i++) {
            this.particles.push(new Particle(star.x, star.y, star.color.main));
        }

        // Play sound
        this.playMagicSound();

        this.updateUI();

        // Check win condition
        if (this.starsCollected >= this.targetStars) {
            this.levelComplete();
        }
    }

    playMagicSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
            oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.3);

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (e) {
            console.log('Audio not supported');
        }
    }

    updateUI() {
        document.getElementById('level').textContent = this.currentLevel;
        document.getElementById('stars').textContent = this.starsCollected;
        document.getElementById('target').textContent = this.targetStars;
        document.getElementById('timer').textContent = `${this.timeLeft}s`;

        // Update progress bar
        const progress = (this.starsCollected / this.targetStars) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;

        // Update timer bar
        const timerPercent = (this.timeLeft / this.maxTime) * 100;
        document.getElementById('timerBar').style.width = `${timerPercent}%`;
    }

    levelComplete() {
        this.gameRunning = false;
        clearInterval(this.timerInterval);
        document.getElementById('levelCompleteModal').classList.add('active');
    }

    nextLevel() {
        this.currentLevel++;
        this.saveProgress();

        if (this.currentLevel > this.levelConfig.length) {
            this.gameComplete();
        } else {
            this.startGame();
        }
    }

    timeUp() {
        this.gameRunning = false;
        clearInterval(this.timerInterval);
        document.getElementById('timeUpModal').classList.add('active');
    }

    restartLevel() {
        this.startGame();
    }

    gameComplete() {
        this.currentLevel = 1;
        this.saveProgress();
        document.getElementById('gameCompleteModal').classList.add('active');
    }

    hideModals() {
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    }

    gameLoop() {
        if (!this.gameRunning) {
            // Continue rendering particles even when game is paused
            this.render();
            requestAnimationFrame(() => this.gameLoop());
            return;
        }

        // Update stars
        this.stars.forEach(star => star.update());

        // Update particles
        this.particles = this.particles.filter(p => !p.isDead());
        this.particles.forEach(p => p.update());

        this.render();
        requestAnimationFrame(() => this.gameLoop());
    }

    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw stars
        this.stars.forEach(star => star.draw(this.ctx));

        // Draw particles
        this.particles.forEach(p => p.draw(this.ctx));
    }
}

// Start game when page loads
window.addEventListener('load', () => {
    new Game();
});
