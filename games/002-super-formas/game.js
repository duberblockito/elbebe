/**
 * Super Formas - Elbebe
 * Juego de encajar formas geométricas complejas en agujeros correspondientes
 * Para niños de 3-5 años
 */

class SuperFormas {
    constructor() {
        // Elementos del DOM
        this.container = document.getElementById('game-container');
        this.gameArea = document.getElementById('game-area');
        this.brokenObject = document.getElementById('broken-object');
        this.shapesContainer = document.getElementById('shapes-container');
        this.shapesDock = document.getElementById('shapes-dock');
        this.objectTitle = document.querySelector('.object-title');
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

        // Formas disponibles
        this.shapes = [
            { emoji: '🔷', name: 'diamante', difficulty: 1 },
            { emoji: '🔺', name: 'triángulo', difficulty: 1 },
            { emoji: '🟦', name: 'cuadrado', difficulty: 1 },
            { emoji: '⭐', name: 'estrella', difficulty: 2 },
            { emoji: '🔶', name: 'pentágono', difficulty: 2 },
            { emoji: '🔷', name: 'hexágono', difficulty: 2 },
            { emoji: '❤️', name: 'corazón', difficulty: 3 },
            { emoji: '⭕', name: 'círculo', difficulty: 3 },
            { emoji: '💎', name: 'joya', difficulty: 3 }
        ];

        // Objetos a reparar
        this.objects = [
            { name: '🚀 Nave Espacial', emoji: '🚀' },
            { name: '🌉 Puente Mágico', emoji: '🌉' },
            { name: '🏰 Castillo Encantado', emoji: '🏰' },
            { name: '🚁 Helicóptero', emoji: '🚁' },
            { name: '🏠 Casa Mágica', emoji: '🏠' }
        ];

        // Estado del arrastre
        this.draggedShape = null;
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
                gainNode.gain.linearRampToValueAtTime(0.01, now + 0.4);
                oscillator.start(now);
                oscillator.stop(now + 0.4);
                break;

            case 'levelComplete':
                // Sonido de nivel completado (melodía triunfante)
                oscillator.frequency.setValueAtTime(523.25, now);
                oscillator.frequency.setValueAtTime(659.25, now + 0.15);
                oscillator.frequency.setValueAtTime(783.99, now + 0.3);
                oscillator.frequency.setValueAtTime(1046.50, now + 0.45);
                gainNode.gain.setValueAtTime(0.3, now);
                gainNode.gain.linearRampToValueAtTime(0.01, now + 0.6);
                oscillator.start(now);
                oscillator.stop(now + 0.6);
                break;

            case 'gameOver':
                // Sonido de game over (tono descendente)
                oscillator.frequency.setValueAtTime(523.25, now);
                oscillator.frequency.setValueAtTime(392.00, now + 0.15);
                oscillator.frequency.setValueAtTime(261.63, now + 0.3);
                gainNode.gain.setValueAtTime(0.3, now);
                gainNode.gain.linearRampToValueAtTime(0.01, now + 0.5);
                oscillator.start(now);
                oscillator.stop(now + 0.5);
                break;

            case 'wrong':
                // Sonido de error (tono grave)
                oscillator.frequency.setValueAtTime(200, now);
                gainNode.gain.setValueAtTime(0.2, now);
                gainNode.gain.linearRampToValueAtTime(0.01, now + 0.2);
                oscillator.start(now);
                oscillator.stop(now + 0.2);
                break;
        }
    }

    /**
     * Configura los eventos de arrastrar y soltar (touch + mouse)
     */
    setupDragAndDrop() {
        // Eventos táctiles
        this.container.addEventListener('touchstart', (e) => this.handleDragStart(e), { passive: false });
        document.addEventListener('touchmove', (e) => this.handleDragMove(e), { passive: false });
        document.addEventListener('touchend', (e) => this.handleDragEnd(e));

        // Eventos de mouse
        this.container.addEventListener('mousedown', (e) => this.handleDragStart(e));
        document.addEventListener('mousemove', (e) => this.handleDragMove(e));
        document.addEventListener('mouseup', (e) => this.handleDragEnd(e));
    }

    /**
     * Inicia el arrastre de una forma
     */
    handleDragStart(e) {
        if (!this.gameStarted || this.gameOver) return;

        const target = e.target.closest('.draggable-shape');
        if (!target || target.classList.contains('used')) return;

        e.preventDefault();

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const rect = target.getBoundingClientRect();
        this.dragOffset = {
            x: clientX - rect.left,
            y: clientY - rect.top
        };

        this.draggedShape = target;
        this.draggedShape.classList.add('dragging');

        // Mover el elemento al cuerpo para que flote por encima de todo
        this.draggedShape.style.position = 'fixed';
        this.draggedShape.style.left = `${rect.left}px`;
        this.draggedShape.style.top = `${rect.top}px`;
        this.draggedShape.style.width = `${rect.width}px`;
        this.draggedShape.style.height = `${rect.height}px`;
        document.body.appendChild(this.draggedShape);
    }

    /**
     * Mueve la forma mientras se arrastra
     */
    handleDragMove(e) {
        if (!this.draggedShape) return;

        e.preventDefault();

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const x = clientX - this.dragOffset.x;
        const y = clientY - this.dragOffset.y;

        this.draggedShape.style.left = `${x}px`;
        this.draggedShape.style.top = `${y}px`;

        // Resaltar el agujero más cercano
        const holes = document.querySelectorAll('.shape-hole');
        holes.forEach(hole => hole.classList.remove('highlight'));

        const closestHole = this.findClosestHole(clientX, clientY);
        if (closestHole) {
            closestHole.classList.add('highlight');
        }
    }

    /**
     * Suelta la forma
     */
    handleDragEnd(e) {
        if (!this.draggedShape) return;

        const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
        const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;

        const closestHole = this.findClosestHole(clientX, clientY);

        if (closestHole && this.checkMatch(this.draggedShape, closestHole)) {
            // Match exitoso
            this.handleMatch(this.draggedShape, closestHole);
        } else {
            // No hubo match, devolver al dock
            this.returnToDock(this.draggedShape);
            if (closestHole) {
                this.playSound('wrong');
            }
        }

        // Limpiar resaltados
        document.querySelectorAll('.shape-hole').forEach(hole => hole.classList.remove('highlight'));
        this.draggedShape.classList.remove('dragging');
        this.draggedShape = null;
    }

    /**
     * Encuentra el agujero más cercano
     */
    findClosestHole(x, y) {
        const holes = document.querySelectorAll('.shape-hole');
        let closest = null;
        let minDistance = 100; // Distancia máxima para considerar un match

        holes.forEach(hole => {
            const rect = hole.getBoundingClientRect();
            const holeX = rect.left + rect.width / 2;
            const holeY = rect.top + rect.height / 2;

            const distance = Math.sqrt((x - holeX) ** 2 + (y - holeY) ** 2);

            if (distance < minDistance) {
                closest = hole;
                minDistance = distance;
            }
        });

        return closest;
    }

    /**
     * Verifica si la forma coincide con el agujero
     */
    checkMatch(shape, hole) {
        const shapeEmoji = shape.textContent.trim();
        const holeEmoji = hole.textContent.trim();
        return shapeEmoji === holeEmoji;
    }

    /**
     * Maneja un match exitoso
     */
    handleMatch(shape, hole) {
        hole.classList.add('filled');
        hole.textContent = shape.textContent;
        shape.classList.add('used');
        this.returnToDock(shape);

        this.score++;
        this.scoreDisplay.textContent = this.score;
        this.playSound('collect');

        // Verificar si se completó el nivel
        if (this.score >= this.target) {
            this.levelComplete();
        }
    }

    /**
     * Devuelve la forma al dock
     */
    returnToDock(shape) {
        shape.style.position = '';
        shape.style.left = '';
        shape.style.top = '';
        shape.style.width = '';
        shape.style.height = '';
        this.shapesDock.appendChild(shape);
    }

    /**
     * Inicia el juego
     */
    startGame() {
        this.gameStarted = true;
        this.gameOver = false;
        this.score = 0;
        this.timeLeft = this.timeLimit;

        this.updateUI();
        this.setupLevel();
        this.startTimer();

        this.startBtn.classList.add('hidden');
    }

    /**
     * Configura un nivel
     */
    setupLevel() {
        // Seleccionar objeto aleatorio
        const objIndex = Math.floor(Math.random() * this.objects.length);
        const object = this.objects[objIndex];
        this.objectTitle.textContent = object.name;

        // Calcular número de formas según el nivel
        const numShapes = this.target + (this.currentLevel - 1) * 2;
        this.targetDisplay.textContent = numShapes;

        // Seleccionar formas según dificultad del nivel
        const levelShapes = this.selectShapesForLevel(numShapes);

        // Crear agujeros
        this.createHoles(levelShapes);

        // Crear formas arrastrables
        this.createDraggableShapes(levelShapes);

        this.levelNumber.textContent = this.currentLevel;
        this.levelNumber.style.display = 'inline';
    }

    /**
     * Selecciona formas para el nivel según dificultad
     */
    selectShapesForLevel(count) {
        const selected = [];
        const maxDifficulty = Math.min(this.currentLevel, 3);

        while (selected.length < count) {
            const shape = this.shapes[Math.floor(Math.random() * this.shapes.length)];
            if (shape.difficulty <= maxDifficulty && !selected.includes(shape)) {
                selected.push(shape);
            }
        }

        // Si no hay suficientes formas, repetir algunas
        while (selected.length < count) {
            const shape = this.shapes[Math.floor(Math.random() * this.shapes.length)];
            if (shape.difficulty <= maxDifficulty) {
                selected.push(shape);
            }
        }

        return selected;
    }

    /**
     * Crea los agujeros de formas
     */
    createHoles(shapes) {
        this.shapesContainer.innerHTML = '';

        shapes.forEach(shape => {
            const hole = document.createElement('div');
            hole.className = 'shape-hole';
            hole.textContent = '?'; // Oculto al inicio
            hole.dataset.emoji = shape.emoji;
            this.shapesContainer.appendChild(hole);
        });
    }

    /**
     * Crea las formas arrastrables
     */
    createDraggableShapes(shapes) {
        this.shapesDock.innerHTML = '';

        // Mezclar las formas para que no estén en orden
        const shuffled = [...shapes].sort(() => Math.random() - 0.5);

        shuffled.forEach(shape => {
            const draggable = document.createElement('div');
            draggable.className = 'draggable-shape';
            draggable.textContent = shape.emoji;
            draggable.dataset.emoji = shape.emoji;
            this.shapesDock.appendChild(draggable);
        });
    }

    /**
     * Actualiza la UI
     */
    updateUI() {
        this.scoreDisplay.textContent = this.score;
        this.levelNumber.textContent = this.currentLevel;
        this.timeText.textContent = `${this.timeLeft}s`;
        this.updateTimeBar();
    }

    /**
     * Actualiza la barra de tiempo
     */
    updateTimeBar() {
        const percentage = (this.timeLeft / this.timeLimit) * 100;
        this.timeBar.style.width = `${percentage}%`;

        this.timeBar.classList.remove('warning', 'danger');

        if (this.timeLeft <= 5) {
            this.timeBar.classList.add('danger');
        } else if (this.timeLeft <= 10) {
            this.timeBar.classList.add('warning');
        }
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

            if (this.timeLeft <= 0) {
                this.gameOverHandler();
            } else {
                this.timeText.textContent = `${this.timeLeft}s`;
                this.updateTimeBar();
            }
        }, 1000);
    }

    /**
     * Maneja el game over
     */
    gameOverHandler() {
        this.gameOver = true;
        this.gameStarted = false;

        if (this.timer) {
            clearInterval(this.timer);
        }

        this.playSound('gameOver');

        this.showModal(
            '⏰',
            '¡Tiempo Agotado!',
            `¡Casi lo logras! Reparaste ${this.score} formas. ¡Inténtalo de nuevo!`,
            'Reiniciar Nivel',
            'Salir'
        );

        this.saveProgress(false);
    }

    /**
     * Nivel completado
     */
    levelComplete() {
        this.gameStarted = false;

        if (this.timer) {
            clearInterval(this.timer);
        }

        this.playSound('levelComplete');

        // Verificar si se completó el juego
        if (this.currentLevel >= 5) {
            this.showModal(
                '🏆',
                '¡Juego Completado!',
                `¡Felicidades! Completaste todos los niveles. Reparaste ${this.score} formas en total.`,
                'Jugar de Nuevo',
                'Salir'
            );

            // Reiniciar progreso
            this.currentLevel = 1;
        } else {
            this.showModal(
                '🎉',
                '¡Nivel Completado!',
                `¡Excelente! Reparaste ${this.score} formas. ¡Prepárate para el siguiente nivel!`,
                'Continuar',
                'Reiniciar'
            );
        }

        this.saveProgress(true);
    }

    /**
     * Muestra un modal
     */
    showModal(icon, title, message, primaryText, secondaryText) {
        this.modalIcon.textContent = icon;
        this.modalTitle.textContent = title;
        this.modalMessage.textContent = message;
        this.modalPrimaryBtn.textContent = primaryText;

        if (secondaryText) {
            this.modalSecondaryBtn.textContent = secondaryText;
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
     * Maneja el botón principal del modal
     */
    handleModalPrimary() {
        this.hideModal();

        if (this.gameOver || this.currentLevel === 1) {
            this.score = 0;
        }

        this.gameOver = false;

        if (this.gameOver) {
            // Reiniciar nivel actual
            this.startGame();
        } else {
            if (this.currentLevel >= 5) {
                // Juego completado, reiniciar desde nivel 1
                this.currentLevel = 1;
                this.score = 0;
                this.startGame();
            } else {
                // Avanzar al siguiente nivel
                this.currentLevel++;
                this.startGame();
            }
        }
    }

    /**
     * Maneja el botón secundario del modal
     */
    handleModalSecondary() {
        this.hideModal();

        if (this.gameOver) {
            // Reiniciar nivel actual
            this.score = 0;
            this.startGame();
        } else {
            this.goHome();
        }
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

        localStorage.setItem('super-formas-progress', JSON.stringify(progress));
    }

    /**
     * Carga el progreso guardado
     */
    loadProgress() {
        try {
            const saved = localStorage.getItem('super-formas-progress');

            if (saved) {
                const progress = JSON.parse(saved);

                if (progress.completed) {
                    // Si se completó el juego, reiniciar
                    this.currentLevel = 1;
                    this.score = 0;
                } else {
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
    new SuperFormas();
});
