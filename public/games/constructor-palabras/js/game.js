// Constructor de Palabras - Game Logic

class WordBuilderGame {
    constructor() {
        // Game State
        this.currentLevel = 1;
        this.score = 0;
        this.wordsCompleted = 0;
        this.wordsPerLevel = 5;
        this.currentWord = null;
        this.currentLetters = [];
        this.userLetters = [];

        // Timer State
        this.timeLimit = 60;
        this.timeRemaining = 60;
        this.timerInterval = null;
        this.isTimerRunning = false;

        // Word Database
        this.wordDatabase = [
            // Nivel 1 - 3 letras
            { word: "SOL", image: "☀️", hint: "Brilla en el cielo" },
            { word: "LUN", image: "🌙", hint: "Sale en la noche" },
            { word: "MAR", image: "🌊", hint: "Agua azul y grande" },
            { word: "FLOR", image: "🌸", hint: "Bonita y colorida" },
            { word: "CASA", image: "🏠", hint: "Vives aquí" },
            { word: "PERRO", image: "🐕", hint: "El mejor amigo del hombre" },
            { word: "GATO", image: "🐱", hint: "Dice miau" },
            { word: "PATO", image: "🦆", hint: "Nada en el agua" },
            { word: "BOLA", image: "⚽", hint: "Juegas con ella" },
            { word: "PAN", image: "🍞", hint: "Lo comes en el desayuno" },

            // Nivel 2 - 4 letras
            { word: "LIBRO", image: "📚", hint: "Para leer y aprender" },
            { word: "JUGO", image: "🧃", hint: "Bebida deliciosa" },
            { word: "ARBOL", image: "🌳", hint: "Grande y con hojas" },
            { word: "PEZ", image: "🐟", hint: "Nada en el agua" },
            { word: "ZAPATO", image: "👟", hint: "Lo usas en los pies" },
            { word: "CAMISA", image: "👕", hint: "Ropa para el cuerpo" },
            { word: "ESTRELLA", image: "⭐", hint: "Brilla en el cielo nocturno" },
            { word: "CORAZON", image: "❤️", hint: "Símbolo del amor" },
            { word: "MANZANA", image: "🍎", hint: "Fruta roja y dulce" },
            { word: "BANANO", image: "🍌", hint: "Fruta amarilla y curva" },

            // Nivel 3 - 5 letras
            { word: "ELEFANTE", image: "🐘", hint: "Animal grande con trompa" },
            { word: "LECHUGA", image: "🥬", hint: "Verde y saludable" },
            { word: "LAPIZ", image: "✏️", hint: "Para escribir y dibujar" },
            { word: "RELOJ", image: "⌚", hint: "Marca la hora" },
            { word: "CASA", image: "🏠", hint: "Vives aquí" },
            { word: "MESA", image: "🪑", hint: "Pones cosas encima" },
            { word: "VENTANA", image: "🪟", hint: "Para ver afuera" },
            { word: "TELEFONO", image: "📱", hint: "Para llamar y hablar" },
            { word: "COMPUTADOR", image: "💻", hint: "Para jugar y trabajar" },
            { word: "BICICLETA", image: "🚲", hint: "Tiene dos ruedas y pedales" }
        ];

        // DOM Elements
        this.elements = {
            level: document.getElementById('level'),
            score: document.getElementById('score'),
            progressFill: document.getElementById('progress-fill'),
            progressText: document.getElementById('progress-text'),
            wordImage: document.getElementById('current-word-image'),
            wordHint: document.getElementById('word-hint'),
            letterSlots: document.getElementById('letter-slots'),
            letterTiles: document.getElementById('letter-tiles'),
            feedbackMessage: document.getElementById('feedback-message'),
            resetBtn: document.getElementById('reset-btn'),
            nextBtn: document.getElementById('next-btn'),
            gameOverModal: document.getElementById('game-over-modal'),
            finalScore: document.getElementById('final-score'),
            wordsCompleted: document.getElementById('words-completed'),
            nextLevelBtn: document.getElementById('next-level-btn'),
            backHomeBtn: document.getElementById('back-home-btn'),
            timerFill: document.getElementById('timer-fill'),
            timerText: document.getElementById('timer-text'),
            timeUpModal: document.getElementById('time-up-modal'),
            timeUpScore: document.getElementById('time-up-score'),
            timeUpWords: document.getElementById('time-up-words'),
            retryLevelBtn: document.getElementById('retry-level-btn'),
            timeUpBackBtn: document.getElementById('time-up-back-btn')
        };

        // Initialize
        this.init();
    }

    init() {
        this.loadProgress();
        this.setupEventListeners();
        this.loadNewWord();
        this.startTimer();
        this.updateUI();
    }

    loadProgress() {
        const savedProgress = localStorage.getItem('constructor-palabras-progress');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            this.currentLevel = progress.level || 1;
            this.score = progress.score || 0;
        }
    }

    saveProgress() {
        const progress = {
            level: this.currentLevel,
            score: this.score
        };
        localStorage.setItem('constructor-palabras-progress', JSON.stringify(progress));
    }

    setupEventListeners() {
        this.elements.resetBtn.addEventListener('click', () => this.resetCurrentWord());
        this.elements.nextBtn.addEventListener('click', () => this.loadNewWord());
        this.elements.nextLevelBtn.addEventListener('click', () => this.nextLevel());
        this.elements.backHomeBtn.addEventListener('click', () => {
            window.location.href = '../../index.html';
        });
        this.elements.retryLevelBtn.addEventListener('click', () => this.retryLevel());
        this.elements.timeUpBackBtn.addEventListener('click', () => {
            window.location.href = '../../index.html';
        });
    }

    startTimer() {
        if (this.isTimerRunning) {
            return;
        }

        this.timeRemaining = this.timeLimit;
        this.isTimerRunning = true;
        this.updateTimerUI();

        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerUI();

            if (this.timeRemaining <= 0) {
                this.stopTimer();
                this.showTimeUp();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.isTimerRunning = false;
    }

    updateTimerUI() {
        const percentage = (this.timeRemaining / this.timeLimit) * 100;
        this.elements.timerFill.style.width = `${percentage}%`;
        this.elements.timerText.textContent = `${this.timeRemaining}s`;

        // Change color when time is running low
        if (percentage <= 20) {
            this.elements.timerFill.style.backgroundColor = '#e74c3c';
        } else if (percentage <= 50) {
            this.elements.timerFill.style.backgroundColor = '#f39c12';
        } else {
            this.elements.timerFill.style.backgroundColor = '#3498db';
        }
    }

    showTimeUp() {
        this.stopTimer();
        this.elements.timeUpScore.textContent = this.score;
        this.elements.timeUpWords.textContent = this.wordsCompleted;
        this.elements.timeUpModal.classList.add('show');
    }

    retryLevel() {
        this.elements.timeUpModal.classList.remove('show');
        this.wordsCompleted = 0;
        this.score = 0;
        this.loadNewWord();
        this.startTimer();
        this.updateUI();
        this.saveProgress();
    }

    getWordsForLevel(level) {
        // Level 1: 3-4 letters words, 60 seconds
        if (level === 1) {
            this.timeLimit = 60;
            return this.wordDatabase.filter(w => w.word.length <= 4);
        }
        // Level 2: 4-5 letters words, 90 seconds
        else if (level === 2) {
            this.timeLimit = 90;
            return this.wordDatabase.filter(w => w.word.length >= 4 && w.word.length <= 5);
        }
        // Level 3+: All words, 120 seconds
        else {
            this.timeLimit = 120;
            return this.wordDatabase;
        }
    }

    loadNewWord() {
        // Get words for current level
        const availableWords = this.getWordsForLevel(this.currentLevel);
        
        // Select random word
        this.currentWord = availableWords[Math.floor(Math.random() * availableWords.length)];
        
        // Shuffle letters
        this.currentLetters = this.shuffleArray(this.currentWord.split(''));
        this.userLetters = new Array(this.currentWord.length).fill(null);

        // Clear feedback
        this.elements.feedbackMessage.className = 'feedback-message';
        this.elements.feedbackMessage.style.display = 'none';
        this.elements.nextBtn.disabled = true;

        // Render game
        this.renderGame();
        this.updateUI();
    }

    resetCurrentWord() {
        this.userLetters = new Array(this.currentWord.length).fill(null);
        this.elements.feedbackMessage.className = 'feedback-message';
        this.elements.feedbackMessage.style.display = 'none';
        this.elements.nextBtn.disabled = true;
        this.renderSlots();
        this.renderTiles();
    }

    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    renderGame() {
        this.renderWordDisplay();
        this.renderSlots();
        this.renderTiles();
    }

    renderWordDisplay() {
        this.elements.wordImage.src = this.currentWord.image;
        this.elements.wordHint.textContent = `💡 Pista: ${this.currentWord.hint}`;
    }

    renderSlots() {
        this.elements.letterSlots.innerHTML = '';
        
        for (let i = 0; i < this.currentWord.length; i++) {
            const slot = document.createElement('div');
            slot.className = 'slot';
            slot.dataset.slotIndex = i;
            
            if (this.userLetters[i]) {
                slot.textContent = this.userLetters[i];
                slot.classList.add('filled');
                
                slot.addEventListener('click', () => {
                    this.returnLetter(i);
                });
            } else {
                slot.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    slot.classList.add('highlight');
                });
                
                slot.addEventListener('dragleave', () => {
                    slot.classList.remove('highlight');
                });
                
                slot.addEventListener('drop', (e) => {
                    e.preventDefault();
                    slot.classList.remove('highlight');
                    const tileIndex = e.dataTransfer.getData('text/plain');
                    this.placeLetter(parseInt(tileIndex), i);
                });
            }
            
            this.elements.letterSlots.appendChild(slot);
        }
    }

    renderTiles() {
        this.elements.letterTiles.innerHTML = '';
        
        this.currentLetters.forEach((letter, index) => {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.textContent = letter;
            tile.draggable = true;
            tile.dataset.tileIndex = index;

            // Check if letter is used
            const letterUsed = this.userLetters.includes(letter) && 
                               this.countLetterInUserLetters(letter) > this.countLetterInCurrentLetters(letter);
            
            if (letterUsed) {
                tile.classList.add('selected');
                tile.draggable = false;
            }

            // Touch events for mobile
            tile.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.handleTileTouch(tile, index);
            });

            // Mouse events for desktop
            tile.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', index.toString());
                tile.classList.add('dragging');
            });

            tile.addEventListener('dragend', () => {
                tile.classList.remove('dragging');
            });

            this.elements.letterTiles.appendChild(tile);
        });
    }

    handleTileTouch(tile, tileIndex) {
        // Find first empty slot
        const emptySlotIndex = this.userLetters.indexOf(null);
        if (emptySlotIndex !== -1) {
            this.placeLetter(tileIndex, emptySlotIndex);
        }
    }

    placeLetter(tileIndex, slotIndex) {
        if (this.userLetters[slotIndex] !== null) {
            return; // Slot already filled
        }

        const letter = this.currentLetters[tileIndex];
        this.userLetters[slotIndex] = letter;
        
        this.renderSlots();
        this.renderTiles();
        
        // Check if word is complete
        if (!this.userLetters.includes(null)) {
            this.checkWord();
        }
    }

    returnLetter(slotIndex) {
        const letter = this.userLetters[slotIndex];
        this.userLetters[slotIndex] = null;
        
        this.renderSlots();
        this.renderTiles();
    }

    countLetterInUserLetters(letter) {
        return this.userLetters.filter(l => l === letter).length;
    }

    countLetterInCurrentLetters(letter) {
        return this.currentLetters.filter(l => l === letter).length;
    }

    checkWord() {
        const userWord = this.userLetters.join('');
        const isCorrect = userWord === this.currentWord.word;

        this.elements.feedbackMessage.style.display = 'block';

        if (isCorrect) {
            // Correct word
            this.elements.feedbackMessage.textContent = '✅ ¡Correcto! Muy bien! 🎉';
            this.elements.feedbackMessage.className = 'feedback-message success';
            
            this.score += 10 * this.currentLevel;
            this.wordsCompleted++;
            this.elements.nextBtn.disabled = false;
            
            this.updateUI();
            this.saveProgress();

            // Check if level completed
            if (this.wordsCompleted >= this.wordsPerLevel) {
                setTimeout(() => this.showLevelComplete(), 1500);
            }
        } else {
            // Incorrect word
            this.elements.feedbackMessage.textContent = '❌ Inténtalo de nuevo';
            this.elements.feedbackMessage.className = 'feedback-message error';
            
            this.score = Math.max(0, this.score - 5);
            this.updateUI();
            this.saveProgress();
        }
    }

    showLevelComplete() {
        this.elements.finalScore.textContent = this.score;
        this.elements.wordsCompleted.textContent = this.wordsCompleted;
        this.elements.gameOverModal.classList.add('show');
    }

    nextLevel() {
        this.stopTimer();
        this.currentLevel++;
        this.wordsCompleted = 0;
        this.elements.gameOverModal.classList.remove('show');
        this.loadNewWord();
        this.startTimer();
        this.saveProgress();
    }

    updateUI() {
        this.elements.level.textContent = this.currentLevel;
        this.elements.score.textContent = this.score;

        const progress = (this.wordsCompleted / this.wordsPerLevel) * 100;
        this.elements.progressFill.style.width = `${progress}%`;
        this.elements.progressText.textContent = `${this.wordsCompleted}/${this.wordsPerLevel}`;
    }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WordBuilderGame();
});
