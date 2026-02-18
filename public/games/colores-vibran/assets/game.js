// Colores que Vibran - Game Logic
// Juego sensorial para bebés de 0-1 años con sistema de niveles

class ColoresVibran {
    constructor() {
        this.colorScreen = document.getElementById('color-screen');
        this.vibrationIndicator = document.getElementById('vibration-indicator');
        this.noteDisplay = document.getElementById('note-display');
        this.noteIcon = document.querySelector('.note-icon');
        this.startBtn = document.getElementById('start-btn');
        this.overlay = document.getElementById('game-overlay');

        // HUD elements
        this.levelDisplay = document.getElementById('levelDisplay');
        this.touchesDisplay = document.getElementById('touchesDisplay');
        this.targetDisplay = document.getElementById('targetDisplay');
        this.progressBar = document.getElementById('progressBar');
        this.timerBar = document.getElementById('timerBar');

        // Modal elements
        this.levelCompleteModal = document.getElementById('levelCompleteModal');
        this.gameOverModal = document.getElementById('gameOverModal');
        this.gameCompleteModal = document.getElementById('gameCompleteModal');

        // Game state
        this.isPlaying = false;
        this.noteIndex = 0;
        this.touchTimeout = null;
        this.currentLevel = 0;
        this.touchesInLevel = 0;
        this.timeRemaining = 0;
        this.isPaused = false;
        this.isLevelComplete = false;
        this.isGameOver = false;
        this.timerInterval = null;

        // Paleta de colores brillantes y contrastantes para bebés
        this.colors = [
            '#FF6B9D', // Rosa brillante
            '#4ECDC4', // Turquesa vibrante
            '#FFE66D', // Amarillo brillante
            '#95E1D3', // Verde menta
            '#F38181', // Rojo pastel
            '#AA96DA', // Lavanda vibrante
            '#FCBAD3', // Rosa pastel
            '#A8D8EA', // Azul cielo
            '#FF9F43', // Naranja brillante
            '#EE5A24', // Rojo naranja
            '#00D2D3', // Cyan brillante
            '#54A0FF', // Azul brillante
        ];

        // Escala musical ascendente (Do Re Mi Fa Sol La Si Do)
        this.notes = [
            261.63, // Do4
            293.66, // Re4
            329.63, // Mi4
            349.23, // Fa4
            392.00, // Sol4
            440.00, // La4
            493.88, // Si4
            523.25, // Do5
        ];

        // Sistema de niveles progresivos (similar a burbujas-magicas)
        this.levels = [
            { target: 5, timeLimit: 30, name: "Nivel 1", name_en: "Level 1" },
            { target: 8, timeLimit: 35, name: "Nivel 2", name_en: "Level 2" },
            { target: 10, timeLimit: 40, name: "Nivel 3", name_en: "Level 3" },
            { target: 12, timeLimit: 45, name: "Nivel 4", name_en: "Level 4" },
            { target: 15, timeLimit: 50, name: "Nivel 5", name_en: "Level 5" },
        ];

        // Persistent progress
        this.progress = {
            unlockedLevels: 1,
            totalGamesPlayed: 0,
            totalTouches: 0
        };

        this.audioContext = null;
        this.loadProgress();
        this.init();
    }

    init() {
        // Event listeners
        this.startBtn.addEventListener('click', () => this.startGame());
        this.startBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.startGame();
        });

        // Touch/click listeners for color screen
        this.colorScreen.addEventListener('click', (e) => this.handleTouch(e));
        this.colorScreen.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.handleTouch(e);
        });

        // Setup button listeners
        this.setupButtonListeners();

        // Initialize random color
        this.randomizeColor();
    }

    setupButtonListeners() {
        // Next level button
        const nextLevelBtn = document.getElementById('nextLevelBtn');
        if (nextLevelBtn) {
            nextLevelBtn.addEventListener('click', () => this.nextLevel());
            nextLevelBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.nextLevel();
            });
        }

        // Retry button
        const retryBtn = document.getElementById('retryBtn');
        if (retryBtn) {
            retryBtn.addEventListener('click', () => this.retryLevel());
            retryBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.retryLevel();
            });
        }

        // Menu button
        const menuBtn = document.getElementById('menuBtn');
        if (menuBtn) {
            menuBtn.addEventListener('click', () => this.goToMenu());
            menuBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.goToMenu();
            });
        }
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem('colores-vibran-progress');
            if (saved) {
                this.progress = JSON.parse(saved);
            }
        } catch (e) {
            console.warn('Could not load progress:', e);
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('colores-vibran-progress', JSON.stringify(this.progress));
        } catch (e) {
            console.warn('Could not save progress:', e);
        }
    }

    startGame() {
        this.isPlaying = true;
        this.overlay.style.display = 'none';
        this.progress.totalGamesPlayed++;
        this.saveProgress();

        // Initialize AudioContext on user interaction
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        // Resume AudioContext if suspended
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }

        // Start level 1
        this.startLevel(0);
    }

    startLevel(levelIndex) {
        if (levelIndex >= this.levels.length) {
            this.showGameComplete();
            return;
        }

        this.currentLevel = levelIndex;
        this.touchesInLevel = 0;
        this.timeRemaining = this.levels[levelIndex].timeLimit;
        this.isPaused = false;
        this.isLevelComplete = false;
        this.isGameOver = false;

        // Clear any existing timer
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        // Start timer
        this.timerInterval = setInterval(() => this.updateTimer(), 100);

        // Update HUD
        this.updateUI();

        // Hide all modals
        this.hideAllModals();
    }

    updateTimer() {
        if (this.isPaused || this.isLevelComplete || this.isGameOver) {
            return;
        }

        this.timeRemaining -= 0.1;
        this.updateUI();

        if (this.timeRemaining <= 0) {
            this.checkGameOver();
        }
    }

    handleTouch(event) {
        if (!this.isPlaying || this.isPaused || this.isLevelComplete || this.isGameOver) {
            return;
        }

        // Debounce touches (prevent too rapid changes)
        if (this.touchTimeout) return;

        this.touchTimeout = setTimeout(() => {
            this.touchTimeout = null;
        }, 100);

        // Change background color
        this.randomizeColor();

        // Play musical note
        this.playNote();

        // Vibrate screen
        this.vibrateScreen();

        // Show note icon
        this.showNoteIcon();

        // Count touch for level progression
        this.touchesInLevel++;
        this.progress.totalTouches++;
        this.saveProgress();

        // Update UI
        this.updateUI();

        // Check if level is complete
        this.checkLevelComplete();
    }

    checkLevelComplete() {
        const level = this.levels[this.currentLevel];

        if (this.touchesInLevel >= level.target) {
            this.isLevelComplete = true;
            this.isPaused = true;
            this.playLevelCompleteSound();

            // Unlock next level
            if (this.currentLevel + 1 >= this.progress.unlockedLevels) {
                this.progress.unlockedLevels = Math.min(this.currentLevel + 2, this.levels.length);
                this.saveProgress();
            }

            this.showLevelComplete();
        }
    }

    checkGameOver() {
        if (this.timeRemaining <= 0 && !this.isLevelComplete) {
            this.isGameOver = true;
            this.isPaused = true;
            this.playGameOverSound();
            this.showGameOver();
        }
    }

    updateUI() {
        const level = this.levels[this.currentLevel];

        // Level number
        if (this.levelDisplay) {
            this.levelDisplay.textContent = `${this.currentLevel + 1}/${this.levels.length}`;
        }

        // Touches
        if (this.touchesDisplay) {
            this.touchesDisplay.textContent = this.touchesInLevel;
        }

        // Target needed
        if (this.targetDisplay) {
            this.targetDisplay.textContent = level.target;
        }

        // Progress bar
        if (this.progressBar) {
            const progress = (this.touchesInLevel / level.target) * 100;
            this.progressBar.style.width = Math.min(progress, 100) + '%';
        }

        // Timer bar
        if (this.timerBar) {
            const timerProgress = (this.timeRemaining / level.timeLimit) * 100;
            this.timerBar.style.width = Math.max(timerProgress, 0) + '%';
            // Change color when time is running low
            if (timerProgress < 25) {
                this.timerBar.style.background = 'linear-gradient(90deg, #FF6B6B, #EF4444)';
            } else {
                this.timerBar.style.background = 'linear-gradient(90deg, #4ECDC4, #22C55E)';
            }
        }
    }

    randomizeColor() {
        const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.colorScreen.style.backgroundColor = randomColor;

        // Update note icon color to contrast with background
        this.noteIcon.style.color = this.getContrastColor(randomColor);
    }

    getContrastColor(hexColor) {
        // Convert hex to RGB
        const r = parseInt(hexColor.substr(1, 2), 16);
        const g = parseInt(hexColor.substr(3, 2), 16);
        const b = parseInt(hexColor.substr(5, 2), 16);

        // Calculate luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        // Return black or white based on luminance
        return luminance > 0.5 ? '#000000' : '#FFFFFF';
    }

    playNote() {
        if (!this.audioContext) return;

        // Play current note
        const frequency = this.notes[this.noteIndex];
        this.generateTone(frequency);

        // Increment note index (ascending sequence)
        this.noteIndex = (this.noteIndex + 1) % this.notes.length;
    }

    generateTone(frequency) {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        // Configure oscillator
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);

        // Envelope for soft, pleasant tone
        const now = this.audioContext.currentTime;
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.3, now + 0.01); // Attack
        gainNode.gain.exponentialRampToValueAtTime(0.1, now + 0.1); // Decay
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5); // Release

        // Start and stop oscillator
        oscillator.start(now);
        oscillator.stop(now + 0.5);
    }

    playLevelCompleteSound() {
        if (!this.audioContext) return;

        const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6

        notes.forEach((freq, i) => {
            setTimeout(() => {
                const osc = this.audioContext.createOscillator();
                const gain = this.audioContext.createGain();
                osc.connect(gain);
                gain.connect(this.audioContext.destination);

                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.2, this.audioContext.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);

                osc.start(this.audioContext.currentTime);
                osc.stop(this.audioContext.currentTime + 0.3);
            }, i * 150);
        });
    }

    playGameOverSound() {
        if (!this.audioContext) return;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.5);
        gain.gain.setValueAtTime(0.2, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);

        osc.start(this.audioContext.currentTime);
        osc.stop(this.audioContext.currentTime + 0.5);
    }

    vibrateScreen() {
        // Add vibration class
        this.vibrationIndicator.classList.add('vibrate');

        // Remove class after animation
        setTimeout(() => {
            this.vibrationIndicator.classList.remove('vibrate');
        }, 300);
    }

    showNoteIcon() {
        // Show note icon
        this.noteIcon.classList.add('show');

        // Hide after short delay
        setTimeout(() => {
            this.noteIcon.classList.remove('show');
        }, 500);
    }

    // Modal management
    hideAllModals() {
        document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    }

    showLevelComplete() {
        if (this.levelCompleteModal) {
            const lang = document.documentElement.lang || 'es';
            const level = this.levels[this.currentLevel];

            const titleEl = document.getElementById('levelCompleteTitle');
            const messageEl = document.getElementById('levelCompleteMessage');
            const nextBtn = document.getElementById('nextLevelBtn');

            if (titleEl) {
                titleEl.textContent = lang === 'es' ? '¡Nivel Completado!' : 'Level Complete!';
            }

            if (messageEl) {
                messageEl.textContent = lang === 'es'
                    ? `¡Hiciste ${this.touchesInLevel} toques!`
                    : `You made ${this.touchesInLevel} touches!`;
            }

            if (nextBtn) {
                if (this.currentLevel + 1 >= this.levels.length) {
                    // Last level - show game complete button
                    nextBtn.textContent = lang === 'es' ? '¡Juego Terminado!' : 'Game Complete!';
                    nextBtn.onclick = () => this.showGameComplete();
                } else {
                    nextBtn.textContent = lang === 'es' ? 'Siguiente Nivel →' : 'Next Level →';
                    nextBtn.onclick = () => this.nextLevel();
                }
            }

            this.levelCompleteModal.style.display = 'flex';
        }
    }

    showGameOver() {
        if (this.gameOverModal) {
            const lang = document.documentElement.lang || 'es';
            const level = this.levels[this.currentLevel];

            const titleEl = document.getElementById('gameOverTitle');
            const messageEl = document.getElementById('gameOverMessage');

            if (titleEl) {
                titleEl.textContent = lang === 'es' ? '¡Se Acabó el Tiempo!' : "Time's Up!";
            }

            if (messageEl) {
                messageEl.textContent = lang === 'es'
                    ? `Hiciste ${this.touchesInLevel} de ${level.target} toques.`
                    : `You made ${this.touchesInLevel} of ${level.target} touches.`;
            }

            this.gameOverModal.style.display = 'flex';
        }
    }

    showGameComplete() {
        if (this.gameCompleteModal) {
            const lang = document.documentElement.lang || 'es';

            const titleEl = document.getElementById('gameCompleteTitle');
            const messageEl = document.getElementById('gameCompleteMessage');

            if (titleEl) {
                titleEl.textContent = lang === 'es' ? '¡Felicidades!' : 'Congratulations!';
            }

            if (messageEl) {
                messageEl.textContent = lang === 'es'
                    ? `¡Completaste todos los niveles! Total: ${this.progress.totalTouches} toques.`
                    : `You completed all levels! Total: ${this.progress.totalTouches} touches.`;
            }

            this.gameCompleteModal.style.display = 'flex';
        }
    }

    nextLevel() {
        if (this.currentLevel + 1 < this.levels.length) {
            this.startLevel(this.currentLevel + 1);
        }
    }

    retryLevel() {
        this.startLevel(this.currentLevel);
    }

    goToMenu() {
        if (window.gtag) {
            gtag('event', 'exit_game', {
                'game_id': 'colores-vibran',
                'level': this.currentLevel + 1,
                'touches': this.touchesInLevel
            });
        }
        window.location.href = '../../index.html';
    }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ColoresVibran();
});
