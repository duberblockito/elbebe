/**
 * Art Battle: Digital Canvas
 * Competencia de arte digital en tiempo real basada en temas aleatorios
 * Para niños de 8-15 años
 */

class ArtBattle {
    constructor() {
        // Canvas y contexto
        this.canvas = document.getElementById('drawing-canvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Elementos del DOM
        this.startScreen = document.getElementById('start-screen');
        this.startBtn = document.getElementById('start-btn');
        this.galleryView = document.getElementById('gallery-view');
        this.galleryGrid = document.getElementById('gallery-grid');
        this.closeGalleryBtn = document.getElementById('close-gallery');
        
        this.levelNumber = document.getElementById('level-number');
        this.roundsCompleted = document.getElementById('rounds-completed');
        this.scoreDisplay = document.getElementById('score');
        
        this.themeDisplay = document.getElementById('theme-text');
        this.progressBar = document.getElementById('progress-bar');
        this.timeText = document.getElementById('time-text');
        
        this.toolsPalette = document.getElementById('tools-palette');
        this.clearCanvasBtn = document.getElementById('clear-canvas');
        this.undoBtn = document.getElementById('undo-btn');
        
        this.submitBtn = document.getElementById('submit-artwork');
        this.galleryBtn = document.getElementById('view-gallery');
        this.homeBtn = document.getElementById('home-btn');
        
        this.modalOverlay = document.getElementById('modal-overlay');
        this.modalIcon = document.getElementById('modal-icon');
        this.modalTitle = document.getElementById('modal-title');
        this.modalMessage = document.getElementById('modal-message');
        this.modalActions = document.getElementById('modal-actions');
        this.modalPrimaryBtn = document.getElementById('modal-primary-btn');
        this.modalSecondaryBtn = document.getElementById('modal-secondary-btn');

        // Estado del juego
        this.currentLevel = 1;
        this.currentRound = 0;
        this.roundsPerLevel = 3;
        this.score = 0;
        this.timeLeft = 60;
        this.timeLimit = 60;
        this.timer = null;
        this.gameStarted = false;
        this.gameOver = false;
        this.currentTheme = '';

        // Estado de dibujo
        this.isDrawing = false;
        this.currentTool = 'brush';
        this.currentColor = '#000000';
        this.brushSize = 5;
        this.lastX = 0;
        this.lastY = 0;
        this.history = [];
        this.historyIndex = -1;

        // Temas aleatorios
        this.themes = [
            'Un bosque mágico',
            'Un dragón volando',
            'Un castillo encantado',
            'Un gato espacial',
            'Un jardín de cristal',
            'Un unicornio arcoíris',
            'Un robot bailando',
            'Una playa nocturna',
            'Un árbol musical',
            'Un gatito astronauta',
            'Una montaña de helado',
            'Una ciudad futurista',
            'Un pájaro de fuego',
            'Un océano de estrellas',
            'Una isla flotante',
            'Un castillo de nubes',
            'Un jardín de flores brillantes',
            'Un tren mágico',
            'Un dragón de colores',
            'Un mar de lava'
        ];

        // Configuración de niveles
        this.levelConfig = {
            1: { time: 90, rounds: 3, pointsPerRound: 100 },
            2: { time: 75, rounds: 3, pointsPerRound: 150 },
            3: { time: 60, rounds: 3, pointsPerRound: 200 },
            4: { time: 50, rounds: 4, pointsPerRound: 250 },
            5: { time: 45, rounds: 4, pointsPerRound: 300 }
        };

        // Inicializar
        this.init();
    }

    init() {
        // Configurar canvas
        this.setupCanvas();
        
        // Event listeners
        this.setupEventListeners();
        
        // Cargar progreso guardado
        this.loadProgress();
        
        // Cargar galería
        this.loadGallery();
    }

    setupCanvas() {
        const container = document.getElementById('canvas-container');
        const containerWidth = container.clientWidth - 10;
        const containerHeight = container.clientHeight - 10;
        
        this.canvas.width = containerWidth;
        this.canvas.height = containerHeight;
        
        // Ajustar estilo para que se vea bien
        this.canvas.style.width = containerWidth + 'px';
        this.canvas.style.height = containerHeight + 'px';
        
        // Configurar contexto
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Guardar estado inicial
        this.saveToHistory();
    }

    setupEventListeners() {
        // Inicio del juego
        this.startBtn.addEventListener('click', () => this.startGame());
        
        // Botones principales
        this.submitBtn.addEventListener('click', () => this.submitArtwork());
        this.galleryBtn.addEventListener('click', () => this.openGallery());
        this.homeBtn.addEventListener('click', () => this.goHome());
        this.closeGalleryBtn.addEventListener('click', () => this.closeGallery());
        
        // Herramientas de dibujo
        this.toolsPalette.addEventListener('click', (e) => {
            const toolBtn = e.target.closest('.tool-btn');
            if (toolBtn && toolBtn.dataset.tool) {
                this.setTool(toolBtn.dataset.tool);
                this.updateToolButtons();
            }
            
            const colorBtn = e.target.closest('.color-btn');
            if (colorBtn && colorBtn.dataset.color) {
                this.setColor(colorBtn.dataset.color);
                this.updateColorButtons();
            }
            
            const sizeBtn = e.target.closest('.size-btn');
            if (sizeBtn && sizeBtn.dataset.size) {
                this.setSize(parseInt(sizeBtn.dataset.size));
                this.updateSizeButtons();
            }
        });

        // Limpiar canvas y deshacer
        this.clearCanvasBtn.addEventListener('click', () => this.clearCanvas());
        this.undoBtn.addEventListener('click', () => this.undo());
        
        // Eventos de dibujo en canvas
        this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        this.canvas.addEventListener('mousemove', (e) => this.draw(e));
        this.canvas.addEventListener('mouseup', () => this.stopDrawing());
        this.canvas.addEventListener('mouseout', () => this.stopDrawing());
        
        // Touch events
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.startDrawing(e.touches[0]);
        });
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            this.draw(e.touches[0]);
        });
        this.canvas.addEventListener('touchend', () => this.stopDrawing());
        
        // Modal buttons
        this.modalPrimaryBtn.addEventListener('click', () => this.handleModalPrimary());
        this.modalSecondaryBtn.addEventListener('click', () => this.handleModalSecondary());
        
        // Resize window
        window.addEventListener('resize', () => {
            // Guardar imagen actual
            const imageData = this.canvas.toDataURL();
            this.setupCanvas();
            // Restaurar imagen
            const img = new Image();
            img.onload = () => {
                this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            };
            img.src = imageData;
        });
    }

    startGame() {
        this.startScreen.classList.add('hidden');
        this.gameStarted = true;
        this.gameOver = false;
        this.currentLevel = 1;
        this.currentRound = 0;
        this.score = 0;
        
        this.updateUI();
        this.startRound();
    }

    startRound() {
        if (this.currentRound >= this.roundsPerLevel) {
            this.completeLevel();
            return;
        }

        const config = this.levelConfig[this.currentLevel] || this.levelConfig[1];
        this.timeLimit = config.time;
        this.timeLeft = this.timeLimit;
        
        // Seleccionar tema aleatorio
        this.currentTheme = this.themes[Math.floor(Math.random() * this.themes.length)];
        this.themeDisplay.textContent = this.currentTheme;
        
        // Limpiar canvas para nueva ronda
        this.clearCanvas(false);
        
        // Iniciar temporizador
        this.startTimer();
        
        this.updateUI();
    }

    startTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateProgressBar();
            
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    updateProgressBar() {
        const percentage = (this.timeLeft / this.timeLimit) * 100;
        this.progressBar.style.width = percentage + '%';
        this.timeText.textContent = this.timeLeft + 's';
        
        // Cambiar color si queda poco tiempo
        if (percentage < 30) {
            this.progressBar.style.background = 'linear-gradient(90deg, #ff6b6b 0%, #ff8787 100%)';
        } else if (percentage < 60) {
            this.progressBar.style.background = 'linear-gradient(90deg, #feca57 0%, #ffdd59 100%)';
        } else {
            this.progressBar.style.background = 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)';
        }
    }

    timeUp() {
        clearInterval(this.timer);
        this.showModal('⏰', '¡Tiempo terminado!', 'No te preocupes, aún puedes enviar tu arte o intenta más rápido en la siguiente ronda.');
    }

    submitArtwork() {
        clearInterval(this.timer);
        
        const config = this.levelConfig[this.currentLevel] || this.levelConfig[1];
        const points = config.pointsPerRound;
        
        this.score += points;
        this.currentRound++;
        
        // Guardar artwork en galería
        this.saveArtwork(this.currentTheme, points);
        
        this.showModal(
            '🎉',
            '¡Arte Enviado!',
            `Has ganado ${points} puntos. ¡Tu obra maestra se ha guardado en la galería!`,
            'Continuar'
        );
    }

    completeLevel() {
        clearInterval(this.timer);
        
        if (this.currentLevel >= 5) {
            this.gameComplete();
            return;
        }
        
        this.showModal(
            '🏆',
            '¡Nivel Completado!',
            `¡Excelente! Has completado el nivel ${this.currentLevel} con ${this.score} puntos. ¿Listo para el siguiente nivel con más desafíos?`,
            'Siguiente Nivel'
        );
    }

    gameComplete() {
        this.gameOver = true;
        this.showModal(
            '🎨⚔️',
            '¡Felicidades! ¡Has completado Art Battle!',
            `Has llegado al final del juego con un total de ${this.score} puntos. Eres un verdadero artista digital.`,
            'Jugar de nuevo',
            'Ver Galería'
        );
    }

    showModal(icon, title, message, primaryText, secondaryText = null) {
        this.modalIcon.textContent = icon;
        this.modalTitle.textContent = title;
        this.modalMessage.textContent = message;
        this.modalPrimaryBtn.textContent = primaryText || 'Continuar';
        
        if (secondaryText) {
            this.modalSecondaryBtn.textContent = secondaryText;
            this.modalSecondaryBtn.classList.remove('hidden');
        } else {
            this.modalSecondaryBtn.classList.add('hidden');
        }
        
        this.modalOverlay.classList.remove('hidden');
    }

    handleModalPrimary() {
        this.modalOverlay.classList.add('hidden');
        
        if (this.gameOver) {
            // Reiniciar juego
            this.startGame();
        } else if (this.currentRound >= this.roundsPerLevel) {
            // Siguiente nivel
            this.currentLevel++;
            this.currentRound = 0;
            this.roundsPerLevel = (this.levelConfig[this.currentLevel] || this.levelConfig[1]).rounds;
            this.startRound();
        } else {
            // Siguiente ronda
            this.startRound();
        }
        
        this.updateUI();
    }

    handleModalSecondary() {
        this.modalOverlay.classList.add('hidden');
        
        if (this.gameOver) {
            this.openGallery();
        }
    }

    // Drawing methods
    startDrawing(e) {
        if (!this.gameStarted || this.gameOver) return;
        
        this.isDrawing = true;
        const rect = this.canvas.getBoundingClientRect();
        this.lastX = e.clientX - rect.left;
        this.lastY = e.clientY - rect.top;
    }

    draw(e) {
        if (!this.isDrawing) return;
        
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.ctx.beginPath();
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.lineTo(x, y);
        
        if (this.currentTool === 'eraser') {
            this.ctx.strokeStyle = 'white';
        } else {
            this.ctx.strokeStyle = this.currentColor;
        }
        
        this.ctx.lineWidth = this.brushSize;
        this.ctx.stroke();
        
        this.lastX = x;
        this.lastY = y;
    }

    stopDrawing() {
        if (this.isDrawing) {
            this.isDrawing = false;
            this.saveToHistory();
        }
    }

    setTool(tool) {
        this.currentTool = tool;
    }

    setColor(color) {
        this.currentColor = color;
        this.currentTool = 'brush';
    }

    setSize(size) {
        this.brushSize = size;
    }

    clearCanvas(saveToHistory = true) {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        if (saveToHistory) {
            this.saveToHistory();
        }
    }

    saveToHistory() {
        this.historyIndex++;
        this.history = this.history.slice(0, this.historyIndex);
        this.history.push(this.canvas.toDataURL());
        
        // Limitar historial a 20 estados
        if (this.history.length > 20) {
            this.history.shift();
            this.historyIndex--;
        }
    }

    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            const img = new Image();
            img.onload = () => {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.drawImage(img, 0, 0);
            };
            img.src = this.history[this.historyIndex];
        }
    }

    updateToolButtons() {
        document.querySelectorAll('.tool-btn[data-tool]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tool === this.currentTool);
        });
    }

    updateColorButtons() {
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.color === this.currentColor);
        });
    }

    updateSizeButtons() {
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.size) === this.brushSize);
        });
    }

    updateUI() {
        this.levelNumber.textContent = this.currentLevel;
        this.roundsCompleted.textContent = `${this.currentRound}/${this.roundsPerLevel}`;
        this.scoreDisplay.textContent = this.score;
    }

    // Gallery methods
    saveArtwork(theme, points) {
        const artwork = {
            id: Date.now(),
            theme: theme,
            imageData: this.canvas.toDataURL(),
            points: points,
            date: new Date().toLocaleDateString(),
            level: this.currentLevel
        };
        
        let gallery = JSON.parse(localStorage.getItem('art-battle-gallery') || '[]');
        gallery.unshift(artwork);
        
        // Limitar a 50 artworks
        if (gallery.length > 50) {
            gallery = gallery.slice(0, 50);
        }
        
        localStorage.setItem('art-battle-gallery', JSON.stringify(gallery));
    }

    loadGallery() {
        const gallery = JSON.parse(localStorage.getItem('art-battle-gallery') || '[]');
        this.renderGallery(gallery);
    }

    renderGallery(gallery) {
        if (gallery.length === 0) {
            this.galleryGrid.innerHTML = `
                <div class="empty-gallery">
                    <div class="empty-gallery-icon">🎨</div>
                    <p>No hay obras de arte aún.</p>
                    <p>¡Juega y crea tu primera obra maestra!</p>
                </div>
            `;
            return;
        }
        
        this.galleryGrid.innerHTML = gallery.map(art => `
            <div class="gallery-item" data-id="${art.id}">
                <img src="${art.imageData}" class="gallery-image" alt="${art.theme}">
                <div class="gallery-info">
                    <div class="gallery-theme">🎯 ${art.theme}</div>
                    <div class="gallery-date">📅 ${art.date} • ⭐ ${art.points} pts</div>
                    <div class="gallery-actions">
                        <button class="gallery-btn gallery-btn-download" data-id="${art.id}">⬇️</button>
                        <button class="gallery-btn gallery-btn-delete" data-id="${art.id}">🗑️</button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Event listeners para botones de galería
        this.galleryGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('gallery-btn-delete')) {
                this.deleteArtwork(parseInt(e.target.dataset.id));
            } else if (e.target.classList.contains('gallery-btn-download')) {
                this.downloadArtwork(parseInt(e.target.dataset.id));
            }
        });
    }

    deleteArtwork(id) {
        if (!confirm('¿Estás seguro de que quieres eliminar esta obra de arte?')) return;
        
        let gallery = JSON.parse(localStorage.getItem('art-battle-gallery') || '[]');
        gallery = gallery.filter(art => art.id !== id);
        localStorage.setItem('art-battle-gallery', JSON.stringify(gallery));
        this.loadGallery();
    }

    downloadArtwork(id) {
        const gallery = JSON.parse(localStorage.getItem('art-battle-gallery') || '[]');
        const artwork = gallery.find(art => art.id === id);
        
        if (artwork) {
            const link = document.createElement('a');
            link.download = `art-battle-${artwork.theme}-${artwork.id}.png`;
            link.href = artwork.imageData;
            link.click();
        }
    }

    openGallery() {
        this.loadGallery();
        this.galleryView.classList.add('active');
    }

    closeGallery() {
        this.galleryView.classList.remove('active');
    }

    // Progress methods
    saveProgress() {
        const progress = {
            level: this.currentLevel,
            score: this.score,
            rounds: this.currentRound,
            highScore: Math.max(this.score, this.getHighScore())
        };
        
        localStorage.setItem('art-battle-progress', JSON.stringify(progress));
    }

    loadProgress() {
        const progress = JSON.parse(localStorage.getItem('art-battle-progress') || '{}');
        
        if (progress.level) {
            this.currentLevel = progress.level;
        }
        
        if (progress.score) {
            this.score = progress.score;
        }
    }

    getHighScore() {
        const progress = JSON.parse(localStorage.getItem('art-battle-progress') || '{}');
        return progress.highScore || 0;
    }

    goHome() {
        clearInterval(this.timer);
        this.gameStarted = false;
        this.gameOver = false;
        this.saveProgress();
        this.startScreen.classList.remove('hidden');
        this.clearCanvas(false);
        this.updateUI();
    }
}

// Inicializar juego cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.artBattle = new ArtBattle();
});
