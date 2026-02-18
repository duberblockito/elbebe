// Poppit! Burbujas Mágicas - Game Logic
// Target: 1-2 years old children

class BubbleGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.bubbles = [];
        this.particles = [];
        this.isRunning = false;
        this.lastBubbleTime = 0;
        this.bubbleInterval = 800; // ms between bubbles
        this.audioContext = null;

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
            for (let touch of e.changedTouches) {
                this.checkBubblePop(touch.clientX, touch.clientY);
            }
        }, { passive: false });

        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
        }, { passive: false });

        // Mouse support
        this.canvas.addEventListener('mousedown', (e) => {
            this.checkBubblePop(e.clientX, e.clientY);
        });

        this.canvas.addEventListener('mousemove', (e) => {
            if (e.buttons === 1) {
                this.checkBubblePop(e.clientX, e.clientY);
            }
        });

        // Start button
        document.getElementById('startBtn').addEventListener('click', () => {
            this.startGame();
        });
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

    createBubble() {
        const radius = 30 + Math.random() * 40; // 30-70px
        const x = Math.random() * (this.canvas.width - radius * 2) + radius;
        const speed = 1 + Math.random() * 2; // 1-3 pixels per frame
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
                break; // Only pop one bubble per touch
            }
        }
    }

    update() {
        // Create new bubbles periodically
        const now = Date.now();
        if (now - this.lastBubbleTime > this.bubbleInterval) {
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
        this.isRunning = true;
        this.bubbles = [];
        this.particles = [];
        this.lastBubbleTime = Date.now();
        this.gameLoop();
    }
}

// Initialize game when page loads
window.addEventListener('load', () => {
    new BubbleGame();
});
