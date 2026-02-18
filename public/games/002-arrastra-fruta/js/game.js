/**
 * Arrastra la Fruta - Elbebe
 * Juego de arrastrar y soltar con sistema de niveles, puntuación y feedback visual
 * Para niños de 2-3 años
 */

class ArrastraFruta {
    constructor() {
        // Elementos del DOM
        this.container = document.getElementById('game-container');
        this.gameArea = document.getElementById('game-area');
        this.plate = document.getElementById('plate');
        this.fruitsContainer = document.getElementById('fruits-container');
        this.levelNumber = document.getElementById('level-number');
        this.scoreDisplay = document.getElementById('score');
        this.targetDisplay = document.getElementById('target');
        this.timeBar = document.getElementById('time-bar');
        this.timeText = document.getElementById('time-text');
        this.startBtn = document.getElementById('start-btn');
        this.homeBtn = document.getElementById('home-btn');
        this.modalOverlay = document.getElementById('modal-overlay');
        this.modalContent = document.getElementById('modal-content');
        this.modalIcon = document.getElementById('modal-icon');
        this.modalTitle = document.getElementById('modal-title');
        this.modalMessage = document.getElementById('modal-message');
        this.modalPrimaryBtn = document.getElementById('modal-primary-btn');
        this.modalSecondaryBtn = document.getElementById('modal-secondary-btn');

        // Estado del juego
        this.currentLevel = 1;
        this.score = 0;
        this.target = 5;
        this.timeLeft = 30;
        this.timeLimit = 30;
        this.timer = null;
        this.gameStarted = false;
        this.gameOver = false;

        // Frutas disponibles
        this.fruitEmojis = ['🍎', '🍊', '🍋', '🍇', '🍓', '🍑', '🍒', '🥝', '🍌', '🍍'];

        // Estado del arrastre
        this.draggedFruit = null;
        this.dragOffset = { x: 0, y: 0 };

        // Audio context
        this.audioContext = null;

        // Inicializar
        this.init();
    }

    init() {
        // Event listeners
        this.startBtn.addEventListener('click', () => this.startGame());
        this.homeBtn.addEventListener('click', () => this.goHome());
        this.modalPrimaryBtn.addEventListener('click', () => this.handleModalPrimary());
        this.modalSecondaryBtn.addEventListener('click', () => this.handleModalSecondary());

        // Configurar arrastrar y soltar
        this.setupDragAndDrop();

        // Cargar progreso guardado
        this.loadProgress();
    }

    /**
     * Inicializa el contexto de audio Web Audio API
     */
    initAudio() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    /**
     * Reproduce un sonido usando Web Audio API
     */
    playSound(type) {
        this.initAudio();

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const now = this.audioContext.currentTime;

        switch (type) {
            case 'collect':
                // Sonido de éxito (melodía ascendente)
                oscillator.frequency.setValueAtTime(523.25, now); // C5
                oscillator.frequency.setValueAtTime(659.25, now + 0.1); // E5
                oscillator.frequency.setValueAtTime(783.99, now + 0.2); // G5
                gainNode.gain.setValueAtTime(0.3, now);
                gainNode.gain.exponentialDecayTo = 0.01;
                gainNode.gain.setValueAtTime(0.3, now);
                gainNode.gain.linearRampToValueAtTime(0.01, now + 0.4);
                oscillator.start(now);
                oscillator.stop(now + 0.4);
                break;

            case 'levelComplete':
                // Sonido de nivel completado (fanfarria)
                oscillator.frequency.setValueAtTime(523.25, now);
                oscillator.frequency.setValueAtTime(659.25, now + 0.1);
                oscillator.frequency.setValueAtTime(783.99, now + 0.2);
                oscillator.frequency.setValueAtTime(1046.50, now + 0.3);
                gainNode.gain.setValueAtTime(0.3, now);
                gainNode.gain.linearRampToValueAtTime(0.01, now + 0.6);
                oscillator.start(now);
                oscillator.stop(now + 0.6);
                break;

            case 'gameOver':
                // Sonido de fin de juego (melodía descendente)
                oscillator.frequency.setValueAtTime(392.00, now); // G4
                oscillator.frequency.setValueAtTime(329.63, now + 0.15); // E4
                oscillator.frequency.setValueAtTime(261.63, now + 0.3); // C4
                gainNode.gain.setValueAtTime(0.3, now);
                gainNode.gain.linearRampToValueAtTime(0.01, now + 0.5);
                oscillator.start(now);
                oscillator.stop(now + 0.5);
                break;

            case 'tick':
                // Sonido de tick (corto y suave)
                oscillator.frequency.setValueAtTime(800, now);
                gainNode.gain.setValueAtTime(0.1, now);
                gainNode.gain.linearRampToValueAtTime(0.01, now + 0.05);
                oscillator.start(now);
                oscillator.stop(now + 0.05);
                break;
        }
    }

    /**
     * Configura los eventos de arrastrar y soltar (mouse y touch)
     */
    setupDragAndDrop() {
        // Mouse events
        this.container.addEventListener('mousedown', (e) => this.handleDragStart(e));
        document.addEventListener('mousemove', (e) => this.handleDragMove(e));
        document.addEventListener('mouseup', (e) => this.handleDragEnd(e));

        // Touch events
        this.container.addEventListener('touchstart', (e) => this.handleDragStart(e), { passive: false });
        document.addEventListener('touchmove', (e) => this.handleDragMove(e), { passive: false });
        document.addEventListener('touchend', (e) => this.handleDragEnd(e));
    }

    /**
     * Inicia el arrastre de una fruta
     */
    handleDragStart(e) {
        if (!this.gameStarted || this.gameOver) return;

        const touch = e.touches ? e.touches[0] : e;
        const fruit = touch.target.closest('.fruit');

        if (!fruit) return;

        e.preventDefault();

        this.draggedFruit = fruit;
        const rect = fruit.getBoundingClientRect();
        this.dragOffset.x = touch.clientX - rect.left;
        this.dragOffset.y = touch.clientY - rect.top;

        fruit.classList.add('dragging');

        // Posicionar en posición fija
        fruit.style.left = `${rect.left}px`;
        fruit.style.top = `${rect.top}px`;
        fruit.style.position = 'fixed';
    }

    /**
     * Mueve la fruta mientras se arrastra
     */
    handleDragMove(e) {
        if (!this.draggedFruit) return;

        e.preventDefault();

        const touch = e.touches ? e.touches[0] : e;
        const x = touch.clientX - this.dragOffset.x;
        const y = touch.clientY - this.dragOffset.y;

        this.draggedFruit.style.left = `${x}px`;
        this.draggedFruit.style.top = `${y}px`;

        // Detectar si está sobre el plato
        const plateRect = this.plate.getBoundingClientRect();
        const fruitRect = this.draggedFruit.getBoundingClientRect();

        const isOverPlate = this.isOverlapping(fruitRect, plateRect);

        if (isOverPlate) {
            this.plate.classList.add('drag-over');
        } else {
            this.plate.classList.remove('drag-over');
        }
    }

    /**
     * Termina el arrastre de una fruta
     */
    handleDragEnd(e) {
        if (!this.draggedFruit) return;

        const plateRect = this.plate.getBoundingClientRect();
        const fruitRect = this.draggedFruit.getBoundingClientRect();

        const isOverPlate = this.isOverlapping(fruitRect, plateRect);

        this.plate.classList.remove('drag-over');
        this.draggedFruit.classList.remove('dragging');

        if (isOverPlate) {
            this.collectFruit(this.draggedFruit);
        } else {
            // Volver a la posición original
            this.resetFruitPosition(this.draggedFruit);
        }

        this.draggedFruit = null;
    }

    /**
     * Verifica si dos elementos se superponen
     */
    isOverlapping(rect1, rect2) {
        const center1 = {
            x: rect1.left + rect1.width / 2,
            y: rect1.top + rect1.height / 2
        };

        return (
            center1.x >= rect2.left &&
            center1.x <= rect2.right &&
            center1.y >= rect2.top &&
            center1.y <= rect2.bottom
        );
    }

    /**
     * Resetea la posición de una fruta
     */
    resetFruitPosition(fruit) {
        fruit.style.position = 'relative';
        fruit.style.left = 'auto';
        fruit.style.top = 'auto';
    }

    /**
     * Recoge una fruta en el plato
     */
    collectFruit(fruit) {
        if (this.gameOver) return;

        this.score++;
        this.updateScoreDisplay();

        this.playSound('collect');

        // Animación de recogida
        fruit.classList.add('collected');

        setTimeout(() => {
            fruit.remove();
            this.checkWinCondition();
        }, 600);
    }

    /**
     * Inicia el juego
     */
    startGame() {
        if (this.gameStarted) return;

        this.gameStarted = true;
        this.gameOver = false;
        this.startBtn.classList.add('hidden');

        this.initAudio();
        this.startLevel();
    }

    /**
     * Inicia un nivel
     */
    startLevel() {
        this.score = 0;
        this.timeLeft = this.timeLimit;

        this.updateLevelDisplay();
        this.updateScoreDisplay();
        this.updateTimerDisplay();
        this.updateProgressBar();

        this.generateFruits();
        this.startTimer();
    }

    /**
     * Genera las frutas para el nivel actual
     */
    generateFruits() {
        this.fruitsContainer.innerHTML = '';

        // Ajustar número de frutas según nivel
        const numFruits = this.target + (this.currentLevel - 1) * 2;
        this.targetDisplay.textContent = numFruits;

        // Seleccionar frutas aleatorias
        const shuffled = [...this.fruitEmojis].sort(() => 0.5 - Math.random());
        const selectedFruits = shuffled.slice(0, numFruits);

        // Crear elementos de frutas
        selectedFruits.forEach((emoji, index) => {
            const fruit = document.createElement('div');
            fruit.className = 'fruit';
            fruit.textContent = emoji;
            fruit.dataset.index = index;
            fruit.style.animationDelay = `${index * 0.2}s`;

            this.fruitsContainer.appendChild(fruit);
        });
    }

    /**
     * Inicia el temporizador
     */
    startTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }

        this.timer = setInterval(() => {
            this.timeLeft--;

            this.updateTimerDisplay();

            if (this.timeLeft <= 0) {
                this.handleTimeOut();
            } else if (this.timeLeft <= 5) {
                this.playSound('tick');
            }
        }, 1000);
    }

    /**
     * Actualiza la visualización del temporizador
     */
    updateTimerDisplay() {
        this.timeText.textContent = `${this.timeLeft}s`;

        const percentage = (this.timeLeft / this.timeLimit) * 100;
        this.timeBar.style.width = `${percentage}%`;

        this.timeBar.classList.remove('warning', 'danger');

        if (percentage <= 30) {
            this.timeBar.classList.add('danger');
        } else if (percentage <= 50) {
            this.timeBar.classList.add('warning');
        }
    }

    /**
     * Maneja el tiempo agotado
     */
    handleTimeOut() {
        this.stopTimer();
        this.gameOver = true;

        this.playSound('gameOver');

        this.showModal(
            '⏰',
            '¡Tiempo Agotado!',
            `¡Casi lo logras! Arrastraste ${this.score} frutas. ¡Inténtalo de nuevo!`,
            'Reintentar',
            'Menú Principal'
        );
    }

    /**
     * Detiene el temporizador
     */
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    /**
     * Actualiza la visualización del nivel
     */
    updateLevelDisplay() {
        this.levelNumber.textContent = this.currentLevel;
    }

    /**
     * Actualiza la visualización de puntuación
     */
    updateScoreDisplay() {
        this.scoreDisplay.textContent = this.score;
        this.updateProgressBar();
    }

    /**
     * Actualiza la barra de progreso visual
     */
    updateProgressBar() {
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
            const numFruits = this.target + (this.currentLevel - 1) * 2;
            const percentage = (this.score / numFruits) * 100;
            progressFill.style.width = `${percentage}%`;
        }
    }

    /**
     * Verifica condición de victoria
     */
    checkWinCondition() {
        const numFruits = this.target + (this.currentLevel - 1) * 2;

        if (this.score >= numFruits) {
            this.stopTimer();
            this.playSound('levelComplete');

            if (this.currentLevel >= 5) {
                this.showGameOver(true);
            } else {
                this.showLevelComplete();
            }
        }
    }

    /**
     * Muestra el modal de nivel completado
     */
    showLevelComplete() {
        this.showModal(
            '🎉',
            '¡Nivel Completado!',
            `¡Excelente! Arrastraste ${this.score} frutas. ¡Prepárate para el siguiente nivel!`,
            'Siguiente Nivel'
        );
    }

    /**
     * Muestra el modal de fin de juego
     */
    showGameOver(won) {
        this.gameOver = true;

        if (won) {
            this.playSound('levelComplete');
            this.showModal(
                '🏆',
                '¡Juego Completado!',
                '¡Felicidades! Has completado todos los niveles. ¡Eres un experto arrastrando frutas!',
                'Jugar de Nuevo',
                'Menú Principal'
            );

            // Guardar progreso
            this.saveProgress(true);
        }
    }

    /**
     * Muestra un modal
     */
    showModal(icon, title, message, primaryBtnText, secondaryBtnText = null) {
        this.modalIcon.textContent = icon;
        this.modalTitle.textContent = title;
        this.modalMessage.textContent = message;
        this.modalPrimaryBtn.textContent = primaryBtnText;

        if (secondaryBtnText) {
            this.modalSecondaryBtn.textContent = secondaryBtnText;
            this.modalSecondaryBtn.classList.remove('hidden');
        } else {
            this.modalSecondaryBtn.classList.add('hidden');
        }

        this.modalOverlay.classList.remove('hidden');
    }

    /**
     * Oculta el modal
     */
    hideModal() {
        this.modalOverlay.classList.add('hidden');
    }

    /**
     * Maneja el click en el botón primario del modal
     */
    handleModalPrimary() {
        this.hideModal();

        if (this.gameOver) {
            // Reiniciar el juego
            this.currentLevel = 1;
            this.gameStarted = false;
            this.gameOver = false;
            this.startBtn.classList.remove('hidden');
        } else {
            // Pasar al siguiente nivel
            this.currentLevel++;
            this.startLevel();
        }
    }

    /**
     * Maneja el click en el botón secundario del modal
     */
    handleModalSecondary() {
        this.hideModal();
        this.goHome();
    }

    /**
     * Navega a la página de inicio
     */
    goHome() {
        window.location.href = '../../index.html';
    }

    /**
     * Guarda el progreso del juego en localStorage
     */
    saveProgress(completed = false) {
        const progress = {
            level: this.currentLevel,
            highScore: this.score,
            completed: completed
        };

        localStorage.setItem('arrastra-fruta-progress', JSON.stringify(progress));
    }

    /**
     * Carga el progreso guardado del juego
     */
    loadProgress() {
        try {
            const saved = localStorage.getItem('arrastra-fruta-progress');
            if (saved) {
                const progress = JSON.parse(saved);
                if (progress.completed) {
                    // Si completó el juego, reiniciar
                    this.currentLevel = 1;
                } else {
                    // Continuar desde donde se quedó
                    this.currentLevel = progress.level;
                }
            }
        } catch (error) {
            console.error('Error loading progress:', error);
        }
    }
}

// Inicializar el juego cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const game = new ArrastraFruta();
});
