// Chef Academy: Culinary Adventure - Game Logic

const ChefAcademy = {
    // Game State
    currentLevel: 1,
    currentStep: 0,
    totalSteps: 3,
    timeRemaining: 30,
    totalTime: 30,
    timerInterval: null,
    isPaused: false,
    isGameActive: false,
    stars: 0,
    maxStars: 3,
    precision: 100,
    hits: 0,
    misses: 0,

    // Recipes Data (8 levels)
    recipes: [
        {
            level: 1,
            name: "Huevos Revueltos",
            steps: 3,
            time: 30,
            miniGames: ["mixing", "cooking", "plating"],
            ingredients: ["🥚", "🥚", "🥚", "🧀", "🧂"]
        },
        {
            level: 2,
            name: "Ensalada César",
            steps: 5,
            time: 40,
            miniGames: ["chopping", "chopping", "mixing", "cooking", "plating"],
            ingredients: ["🥬", "🍅", "🧀", "🍞", "🥚"]
        },
        {
            level: 3,
            name: "Pasta Carbonara",
            steps: 7,
            time: 50,
            miniGames: ["chopping", "mixing", "cooking", "mixing", "cooking", "mixing", "plating"],
            ingredients: ["🍝", "🥓", "🧀", "🧄", "🥚", "🧂", "🥬"]
        },
        {
            level: 4,
            name: "Pizza Margherita",
            steps: 9,
            time: 60,
            miniGames: ["mixing", "cooking", "chopping", "cooking", "chopping", "cooking", "mixing", "cooking", "plating"],
            ingredients: ["🍕", "🍅", "🧀", "🌿", "🫒", "🧄", "🧈", "🥛", "🍞"]
        },
        {
            level: 5,
            name: "Salmón al Horno",
            steps: 11,
            time: 70,
            miniGames: ["chopping", "mixing", "cooking", "chopping", "mixing", "cooking", "chopping", "mixing", "cooking", "mixing", "plating"],
            ingredients: ["🐟", "🍋", "🧄", "🌿", "🫒", "🧂", "🫒", "🍋", "🧄", "🌿", "🍽️"]
        },
        {
            level: 6,
            name: "Risotto de Setas",
            steps: 13,
            time: 80,
            miniGames: ["chopping", "cooking", "mixing", "cooking", "mixing", "chopping", "cooking", "mixing", "cooking", "mixing", "chopping", "cooking", "plating"],
            ingredients: ["🍚", "🍄", "🧄", "🧅", "🧈", "🧀", "🧂", "🍄", "🧄", "🧅", "🧈", "🧀", "🌿"]
        },
        {
            level: 7,
            name: "Paella",
            steps: 15,
            time: 90,
            miniGames: ["chopping", "cooking", "mixing", "cooking", "chopping", "cooking", "mixing", "cooking", "chopping", "cooking", "mixing", "cooking", "chopping", "cooking", "plating"],
            ingredients: ["🍚", "🦐", "🐟", "🍗", "🥬", "🍅", "🧄", "🌿", "🫒", "🧅", "🫑", "🍋", "🧈", "🧂", "🥘"]
        },
        {
            level: 8,
            name: "Soufflé de Chocolate",
            steps: 17,
            time: 100,
            miniGames: ["mixing", "cooking", "mixing", "cooking", "mixing", "cooking", "mixing", "cooking", "mixing", "cooking", "mixing", "cooking", "mixing", "cooking", "mixing", "cooking", "plating"],
            ingredients: ["🍫", "🥚", "🧈", "🥛", "🍬", "🫐", "🍓", "🍫", "🥚", "🧈", "🥛", "🍬", "🫐", "🍓", "🍫", "🥚", "🍰"]
        }
    ],

    // Progress Data
    progress: {
        levelsUnlocked: 1,
        stars: {},
        totalStars: 0
    },

    // Initialize Game
    init() {
        this.loadProgress();
        this.setupEventListeners();
        this.renderLevelGrid();
        this.showStartScreen();
    },

    // Load Progress from localStorage
    loadProgress() {
        const saved = localStorage.getItem('chef-academy-progress');
        if (saved) {
            this.progress = JSON.parse(saved);
        }
    },

    // Save Progress to localStorage
    saveProgress() {
        localStorage.setItem('chef-academy-progress', JSON.stringify(this.progress));
    },

    // Setup Event Listeners
    setupEventListeners() {
        document.getElementById('start-btn').addEventListener('click', () => {
            this.startLevel(this.progress.levelsUnlocked);
        });

        document.getElementById('level-select-btn').addEventListener('click', () => {
            this.showLevelSelect();
        });

        document.getElementById('back-to-start-btn').addEventListener('click', () => {
            this.hideAllModals();
            this.showStartScreen();
        });

        document.getElementById('next-level-btn').addEventListener('click', () => {
            this.hideAllModals();
            if (this.currentLevel < 8) {
                this.startLevel(this.currentLevel + 1);
            } else {
                this.showGameComplete();
            }
        });

        document.getElementById('retry-btn').addEventListener('click', () => {
            this.hideAllModals();
            this.startLevel(this.currentLevel);
        });

        document.getElementById('retry-times-up-btn').addEventListener('click', () => {
            this.hideAllModals();
            this.startLevel(this.currentLevel);
        });

        document.getElementById('back-to-menu-btn').addEventListener('click', () => {
            this.hideAllModals();
            this.showStartScreen();
        });

        document.getElementById('play-again-btn').addEventListener('click', () => {
            this.hideAllModals();
            this.showStartScreen();
        });

        document.getElementById('pause-btn').addEventListener('click', () => {
            this.togglePause();
        });

        document.getElementById('resume-btn').addEventListener('click', () => {
            this.togglePause();
        });

        document.getElementById('restart-btn').addEventListener('click', () => {
            this.hideAllModals();
            this.startLevel(this.currentLevel);
        });

        document.getElementById('quit-btn').addEventListener('click', () => {
            this.hideAllModals();
            this.showStartScreen();
        });

        // Chopping game
        const vegetable = document.getElementById('chopping-vegetable');
        vegetable.addEventListener('click', () => this.handleChop());

        // Mixing game
        const bowl = document.getElementById('mixing-bowl');
        bowl.addEventListener('click', () => this.handleMix());

        // Temperature slider
        const tempSlider = document.getElementById('temperature-slider');
        tempSlider.addEventListener('input', (e) => this.handleTemperature(e.target.value));

        // Draggable ingredients
        this.setupDragAndDrop();
    },

    // Setup Drag and Drop
    setupDragAndDrop() {
        const ingredients = document.querySelectorAll('.draggable-ingredient');
        const plate = document.getElementById('plating-plate');

        ingredients.forEach(ing => {
            ing.addEventListener('touchstart', (e) => {
                this.draggedIngredient = ing;
                ing.style.opacity = '0.5';
            });

            ing.addEventListener('touchend', () => {
                ing.style.opacity = '1';
                this.draggedIngredient = null;
            });

            ing.addEventListener('click', () => {
                this.handlePlating(ing.dataset.ingredient);
            });
        });
    },

    // Show Start Screen
    showStartScreen() {
        document.getElementById('start-screen').classList.remove('hidden');
    },

    // Show Level Select
    showLevelSelect() {
        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('level-select-screen').classList.remove('hidden');
    },

    // Render Level Grid
    renderLevelGrid() {
        const grid = document.getElementById('level-grid');
        grid.innerHTML = '';

        this.recipes.forEach((recipe, index) => {
            const level = recipe.level;
            const isUnlocked = level <= this.progress.levelsUnlocked;
            const starsEarned = this.progress.stars[level] || 0;

            const card = document.createElement('div');
            card.className = `level-card ${!isUnlocked ? 'locked' : ''}`;
            card.innerHTML = `
                <h3>${level}. ${recipe.name}</h3>
                <div class="level-stars">${'⭐'.repeat(starsEarned)}${'☆'.repeat(3 - starsEarned)}</div>
            `;

            if (isUnlocked) {
                card.addEventListener('click', () => {
                    document.getElementById('level-select-screen').classList.add('hidden');
                    this.startLevel(level);
                });
            }

            grid.appendChild(card);
        });
    },

    // Hide All Modals
    hideAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.add('hidden');
        });
    },

    // Start Level
    startLevel(level) {
        this.currentLevel = level;
        const recipe = this.recipes[level - 1];

        this.currentStep = 0;
        this.totalSteps = recipe.steps;
        this.timeRemaining = recipe.time;
        this.totalTime = recipe.time;
        this.stars = 0;
        this.maxStars = 3;
        this.precision = 100;
        this.hits = 0;
        this.misses = 0;
        this.isGameActive = true;
        this.isPaused = false;

        this.updateHUD();
        this.updateProgressBar();
        this.updateTimerBar();
        this.setHint(`¡Nivel ${level}: ${recipe.name}! Toca para comenzar`);

        setTimeout(() => {
            this.startTimer();
            this.startMiniGame();
        }, 1000);
    },

    // Update HUD
    updateHUD() {
        document.getElementById('level-number').textContent = this.currentLevel;
        document.getElementById('current-step').textContent = this.currentStep + 1;
        document.getElementById('total-steps').textContent = this.totalSteps;
        document.getElementById('recipe-name').textContent = this.recipes[this.currentLevel - 1].name;
        document.getElementById('current-stars').textContent = this.stars;
    },

    // Update Progress Bar
    updateProgressBar() {
        const progress = ((this.currentStep + 1) / this.totalSteps) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
    },

    // Update Timer Bar
    updateTimerBar() {
        const percentage = (this.timeRemaining / this.totalTime) * 100;
        const timerFill = document.getElementById('timer-fill');
        timerFill.style.width = `${percentage}%`;

        // Update color based on time remaining
        timerFill.classList.remove('warning', 'danger');
        if (percentage < 25) {
            timerFill.classList.add('danger');
        } else if (percentage < 50) {
            timerFill.classList.add('warning');
        }

        document.getElementById('timer-display').textContent = `${this.timeRemaining}s`;
    },

    // Set Hint
    setHint(text) {
        document.getElementById('hint-text').textContent = text;
    },

    // Start Timer
    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.timerInterval = setInterval(() => {
            if (!this.isPaused && this.isGameActive) {
                this.timeRemaining--;
                this.updateTimerBar();

                if (this.timeRemaining <= 0) {
                    this.gameOver();
                }
            }
        }, 1000);
    },

    // Start Mini Game
    startMiniGame() {
        const recipe = this.recipes[this.currentLevel - 1];
        const miniGameType = recipe.miniGames[this.currentStep];

        // Hide all mini-games
        document.querySelectorAll('.mini-game').forEach(game => {
            game.classList.add('hidden');
        });

        // Show current mini-game
        const miniGame = document.getElementById(`${miniGameType}-game`);
        miniGame.classList.remove('hidden');

        // Reset mini-game state
        this.resetMiniGame(miniGameType);

        const instructions = {
            'chopping': '¡Toca rápidamente el vegetal para picarlo!',
            'mixing': '¡Toca el bowl o agita el dispositivo para mezclar!',
            'cooking': 'Ajusta la temperatura al nivel medio (3)',
            'plating': '¡Toca los ingredientes para decorar el plato!'
        };

        this.setHint(instructions[miniGameType]);
    },

    // Reset Mini Game
    resetMiniGame(type) {
        switch(type) {
            case 'chopping':
                document.getElementById('chopping-fill').style.width = '0%';
                this.chopsNeeded = 10;
                this.chopsDone = 0;
                break;
            case 'mixing':
                document.getElementById('mixing-fill').style.width = '0%';
                this.mixesNeeded = 15;
                this.mixesDone = 0;
                break;
            case 'cooking':
                document.getElementById('temperature-slider').value = 3;
                this.updateTemperatureIndicator(3);
                this.temperatureCorrect = false;
                this.temperatureTime = 0;
                this.temperatureNeeded = 5; // Need to hold correct temp for 5 seconds
                break;
            case 'plating':
                this.ingredientsPlated = 0;
                this.ingredientsNeeded = Math.min(3, this.currentLevel + 1);
                this.setupPlatingIngredients();
                break;
        }
    },

    // Handle Chop
    handleChop() {
        if (!this.isGameActive || this.isPaused) return;

        this.chopsDone++;
        const progress = (this.chopsDone / this.chopsNeeded) * 100;
        document.getElementById('chopping-fill').style.width = `${progress}%`;

        // Visual feedback
        const vegetable = document.getElementById('chopping-vegetable');
        vegetable.style.transform = 'scale(0.9)';
        setTimeout(() => {
            vegetable.style.transform = 'scale(1)';
        }, 100);

        this.playSound('chop');

        if (this.chopsDone >= this.chopsNeeded) {
            this.completeStep(true);
        }
    },

    // Handle Mix
    handleMix() {
        if (!this.isGameActive || this.isPaused) return;

        this.mixesDone++;
        const progress = (this.mixesDone / this.mixesNeeded) * 100;
        document.getElementById('mixing-fill').style.width = `${progress}%`;

        this.playSound('mix');

        if (this.mixesDone >= this.mixesNeeded) {
            this.completeStep(true);
        }
    },

    // Handle Temperature
    handleTemperature(value) {
        if (!this.isGameActive || this.isPaused) return;

        const intValue = parseInt(value);
        this.updateTemperatureIndicator(intValue);

        if (intValue === 3) { // Perfect temperature
            this.temperatureCorrect = true;
        } else {
            this.temperatureCorrect = false;
            this.temperatureTime = 0;
        }
    },

    updateTemperatureIndicator(value) {
        const labels = ['', 'Baja', 'Media-Baja', 'Media', 'Media-Alta', 'Alta'];
        document.getElementById('temperature-indicator').textContent = labels[value];
    },

    checkTemperatureProgress() {
        if (this.temperatureCorrect) {
            this.temperatureTime++;
            if (this.temperatureTime >= this.temperatureNeeded) {
                this.completeStep(true);
            }
        }
    },

    // Handle Plating
    handlePlating(ingredient) {
        if (!this.isGameActive || this.isPaused) return;

        this.ingredientsPlated++;
        this.playSound('plate');

        if (this.ingredientsPlated >= this.ingredientsNeeded) {
            this.completeStep(true);
        }
    },

    setupPlatingIngredients() {
        const container = document.getElementById('ingredients-drag');
        container.innerHTML = '';

        const emojis = ['🍅', '🧀', '🥬', '🫒', '🌿'];
        const count = this.ingredientsNeeded;

        for (let i = 0; i < count; i++) {
            const emoji = emojis[i % emojis.length];
            const div = document.createElement('div');
            div.className = 'draggable-ingredient';
            div.dataset.ingredient = emoji;
            div.textContent = emoji;
            div.addEventListener('click', () => this.handlePlating(emoji));
            container.appendChild(div);
        }
    },

    // Complete Step
    completeStep(success) {
        if (success) {
            this.hits++;
            this.playSound('success');
        } else {
            this.misses++;
            this.playSound('error');
        }

        this.currentStep++;
        this.updateHUD();
        this.updateProgressBar();

        if (this.currentStep >= this.totalSteps) {
            this.completeLevel();
        } else {
            setTimeout(() => {
                this.startMiniGame();
            }, 500);
        }
    },

    // Complete Level
    completeLevel() {
        this.isGameActive = false;
        clearInterval(this.timerInterval);

        // Calculate stars based on performance
        const accuracy = this.hits / (this.hits + this.misses) * 100;
        const timeBonus = (this.timeRemaining / this.totalTime) * 50;
        const score = accuracy + timeBonus;

        if (score >= 80) {
            this.stars = 3;
        } else if (score >= 60) {
            this.stars = 2;
        } else if (score >= 40) {
            this.stars = 1;
        }

        // Save progress
        if (this.stars > (this.progress.stars[this.currentLevel] || 0)) {
            this.progress.stars[this.currentLevel] = this.stars;
        }

        if (this.currentLevel >= this.progress.levelsUnlocked && this.currentLevel < 8) {
            this.progress.levelsUnlocked = this.currentLevel + 1;
        }

        // Calculate total stars
        this.progress.totalStars = Object.values(this.progress.stars).reduce((a, b) => a + b, 0);
        this.saveProgress();

        this.playSound('complete');

        // Show level complete modal
        document.getElementById('stars-earned').textContent = '⭐'.repeat(this.stars) + '☆'.repeat(3 - this.stars);
        document.getElementById('final-time').textContent = `${this.totalTime - this.timeRemaining}s`;
        document.getElementById('final-precision').textContent = `${Math.round(accuracy)}%`;

        this.hideAllModals();
        document.getElementById('level-complete-modal').classList.remove('hidden');
    },

    // Game Over
    gameOver() {
        this.isGameActive = false;
        clearInterval(this.timerInterval);

        this.playSound('gameover');

        this.hideAllModals();
        document.getElementById('times-up-modal').classList.remove('hidden');
    },

    // Game Complete
    showGameComplete() {
        document.getElementById('total-stars').textContent = this.progress.totalStars;
        document.getElementById('total-recipes').textContent = Object.keys(this.progress.stars).length;

        this.hideAllModals();
        document.getElementById('game-complete-modal').classList.remove('hidden');
    },

    // Toggle Pause
    togglePause() {
        this.isPaused = !this.isPaused;

        if (this.isPaused) {
            document.getElementById('pause-modal').classList.remove('hidden');
        } else {
            document.getElementById('pause-modal').classList.add('hidden');
        }
    },

    // Play Sound (Web Audio API)
    playSound(type) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            const sounds = {
                'chop': { freq: 200, duration: 0.1 },
                'mix': { freq: 300, duration: 0.15 },
                'plate': { freq: 400, duration: 0.1 },
                'success': { freq: 523, duration: 0.3 },
                'error': { freq: 150, duration: 0.3 },
                'complete': { freq: 659, duration: 0.5 },
                'gameover': { freq: 100, duration: 0.5 }
            };

            const sound = sounds[type] || sounds['success'];
            oscillator.frequency.value = sound.freq;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + sound.duration);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + sound.duration);
        } catch (e) {
            // Audio not supported
        }
    }
};

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    ChefAcademy.init();

    // Check temperature progress every second for cooking game
    setInterval(() => {
        if (ChefAcademy.isGameActive && !ChefAcademy.isPaused) {
            const currentMiniGame = document.querySelector('.mini-game:not(.hidden)');
            if (currentMiniGame && currentMiniGame.id === 'cooking-game') {
                ChefAcademy.checkTemperatureProgress();
            }
        }
    }, 1000);
});
