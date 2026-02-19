/**
 * Dedos Mágicos - Juego Educativo para Bebés (0-1 años)
 * Interacción táctil con trails de colores brillantes
 */

class DedosMagicosGame {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.trails = [];
        this.particles = [];
        this.modeSelection = document.getElementById('mode-selection');
        this.hud = document.getElementById('hud');
        this.progressContainer = document.getElementById('progress-container');
        this.modal = document.getElementById('modal');
        this.modalTitle = document.getElementById('modal-title');
        this.modalMessage = document.getElementById('modal-message');
        this.modalBtn = document.getElementById('modal-btn');

        // Estado del juego
        this.isPlaying = false;
        this.mode = null; // 'free' o 'level'
        this.currentLevel = 1;
        this.maxLevels = 5;
        this.starsCollected = 0;
        this.targetStars = 10;
        this.unlockedLevels = 1;

        // Configuración de colores
        this.colors = [
            { r: 255, g: 100, b: 100 }, // Rojo brillante
            { r: 100, g: 255, b: 100 }, // Verde brillante
            { r: 100, g: 100, b: 255 }, // Azul brillante
            { r: 255, g: 255, b: 100 }, // Amarillo brillante
            { r: 255, g: 100, b: 255 }, // Magenta brillante
            { r: 100, g: 255, b: 255 }, // Cian brillante
            { r: 255, g: 150, b: 50 },  // Naranja brillante
            { r: 150, g: 255, b: 150 }  // Verde lima
        ];

        // Audio context para sonidos sintéticos
        this.audioContext = null;

        this.init();
    }

    init() {
        this.resizeCanvas();
        this.loadProgress();
        this.setupEventListeners();
        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    loadProgress() {
        const saved = localStorage.getItem('dedos-magicos-progress');
        if (saved) {
            const data = JSON.parse(saved);
            this.unlockedLevels = data.unlockedLevels || 1;
        }
    }

    saveProgress() {
        const data = {
            unlockedLevels: this.unlockedLevels
        };
        localStorage.setItem('dedos-magicos-progress', JSON.stringify(data));
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.resizeCanvas());

        // Mouse events
        this.canvas.addEventListener('mousedown', (e) => this.handleTouch(e.clientX, e.clientY));
        this.canvas.addEventListener('mousemove', (e) => this.handleTouch(e.clientX, e.clientY));
        this.canvas.addEventListener('mouseup', () => this.handleEndTouch());

        // Touch events (multi-touch)
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            for (let touch of e.touches) {
                this.handleTouch(touch.clientX, touch.clientY);
            }
        });

        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            for (let touch of e.touches) {
                this.handleTouch(touch.clientX, touch.clientY);
            }
        });

        this.canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.handleEndTouch();
        });
    }

    initAudio() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    playTone(frequency, duration) {
        this.initAudio();
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    handleTouch(x, y) {
        if (!this.isPlaying) return;

        // Crear nuevo trail
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.trails.push({
            x: x,
            y: y,
            color: color,
            size: 30 + Math.random() * 20,
            alpha: 1.0,
            age: 0
        });

        // Crear partículas para efecto explosión
        for (let i = 0; i < 3; i++) {
            this.particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                color: color,
                size: 5 + Math.random() * 10,
                alpha: 1.0,
                age: 0
            });
        }

        // Reproducir tono aleatorio en modo niveles
        if (this.mode === 'level') {
            const frequencies = [262, 294, 330, 349, 392, 440, 494, 523]; // Escala de Do mayor
            const freq = frequencies[Math.floor(Math.random() * frequencies.length)];
            this.playTone(freq, 0.1);
        }
    }

    handleEndTouch() {
        // No hay acción específica al soltar
    }

    updateTrails() {
        for (let i = this.trails.length - 1; i >= 0; i--) {
            const trail = this.trails[i];
            trail.age++;
            trail.alpha -= 0.015;
            trail.size *= 0.99;

            if (trail.alpha <= 0 || trail.size < 1) {
                this.trails.splice(i, 1);
            }
        }
    }

    updateParticles() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.1; // Gravedad suave
            particle.age++;
            particle.alpha -= 0.02;
            particle.size *= 0.98;

            if (particle.alpha <= 0 || particle.size < 1) {
                this.particles.splice(i, 1);
            }
        }
    }

    draw() {
        // Limpiar canvas con efecto de trail
        this.ctx.fillStyle = 'rgba(10, 10, 26, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Dibujar partículas
        for (let particle of this.particles) {
            this.ctx.beginPath();
            this.ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );
            this.ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
            this.ctx.fill();
        }

        // Dibujar trails con glow
        for (let trail of this.trails) {
            // Glow effect
            const gradient = this.ctx.createRadialGradient(
                trail.x,
                trail.y,
                0,
                trail.x,
                trail.y,
                trail.size * 2
            );
            gradient.addColorStop(0, `rgba(${trail.color.r}, ${trail.color.g}, ${trail.color.b}, ${trail.alpha})`);
            gradient.addColorStop(0.5, `rgba(${trail.color.r}, ${trail.color.g}, ${trail.color.b}, ${trail.alpha * 0.5})`);
            gradient.addColorStop(1, 'rgba(10, 10, 26, 0)');

            this.ctx.beginPath();
            this.ctx.arc(
                trail.x,
                trail.y,
                trail.size * 2,
                0,
                Math.PI * 2
            );
            this.ctx.fillStyle = gradient;
            this.ctx.fill();

            // Centro brillante
            this.ctx.beginPath();
            this.ctx.arc(
                trail.x,
                trail.y,
                trail.size * 0.5,
                0,
                Math.PI * 2
            );
            this.ctx.fillStyle = `rgba(255, 255, 255, ${trail.alpha * 0.8})`;
            this.ctx.fill();
        }
    }

    animate() {
        if (this.isPlaying) {
            this.updateTrails();
            this.updateParticles();
            this.draw();

            // Contar estrellas aleatorias en modo niveles
            if (this.mode === 'level' && Math.random() < 0.05) {
                this.collectStar();
            }
        }

        requestAnimationFrame(() => this.animate());
    }

    collectStar() {
        this.starsCollected++;
        this.updateHUD();

        if (this.starsCollected >= this.targetStars) {
            this.levelComplete();
        }
    }

    updateHUD() {
        document.getElementById('level-display').textContent = this.currentLevel;
        document.getElementById('stars-display').textContent = this.starsCollected;
        document.getElementById('target-display').textContent = this.targetStars;

        const progress = (this.starsCollected / this.targetStars) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${Math.floor(progress)}%`;
    }

    startFreeMode() {
        this.mode = 'free';
        this.startGame();
    }

    startLevelMode() {
        this.mode = 'level';
        this.startGame();
        this.setupLevel();
    }

    startGame() {
        this.modeSelection.style.display = 'none';
        this.isPlaying = true;
        this.trails = [];
        this.particles = [];

        // Limpiar canvas completamente
        this.ctx.fillStyle = '#0a0a1a';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.mode === 'level') {
            this.hud.style.display = 'flex';
            this.progressContainer.style.display = 'block';
        }
    }

    setupLevel() {
        this.starsCollected = 0;
        this.targetStars = 10 + (this.currentLevel - 1) * 5; // 10, 15, 20, 25, 30 estrellas
        this.updateHUD();
    }

    levelComplete() {
        this.isPlaying = false;

        if (this.currentLevel < this.maxLevels) {
            // Nivel completado, mostrar modal
            this.showModal(
                '¡Nivel Completado! 🎉',
                `¡Genial! Completaste el nivel ${this.currentLevel}`,
                'Siguiente Nivel',
                () => {
                    this.currentLevel++;
                    if (this.currentLevel > this.unlockedLevels) {
                        this.unlockedLevels = this.currentLevel;
                        this.saveProgress();
                    }
                    this.hideModal();
                    this.setupLevel();
                    this.isPlaying = true;
                }
            );
        } else {
            // Juego completado
            this.showModal(
                '¡Juego Completado! 🏆',
                '¡Eres un artista mágico! ¡Completaste todos los niveles!',
                'Volver al Menú',
                () => {
                    this.exitToMenu();
                }
            );
        }
    }

    showModal(title, message, buttonText, callback) {
        this.modalTitle.textContent = title;
        this.modalMessage.textContent = message;
        this.modalBtn.textContent = buttonText;
        this.modal.style.display = 'flex';

        this.modalBtn.onclick = () => {
            callback();
        };
    }

    hideModal() {
        this.modal.style.display = 'none';
    }

    exitToMenu() {
        this.isPlaying = false;
        this.hud.style.display = 'none';
        this.progressContainer.style.display = 'none';
        this.hideModal();
        this.modeSelection.style.display = 'block';
        this.mode = null;
    }
}

// Iniciar juego cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.game = new DedosMagicosGame();
});
