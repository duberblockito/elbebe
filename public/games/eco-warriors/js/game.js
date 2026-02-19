// Eco Warriors - Planet Rescue
// Strategy game to restore degraded ecosystems

class EcoWarriors {
    constructor() {
        // Game State
        this.level = 1;
        this.maxLevels = 5;
        this.sustainability = 0;
        this.sustainabilityTarget = 100;
        this.timeRemaining = 120;
        this.gameActive = false;
        this.eventActive = false;

        // Resources
        this.resources = {
            solar: 0,
            wind: 0,
            water: 0,
            bio: 0
        };

        // Map Tiles
        this.mapSize = 25; // 5x5 grid
        this.tiles = [];
        this.restoredTiles = 0;
        this.restoredTarget = 0;

        // Event System
        this.events = [
            { id: 'storm', title: '¡Tormenta Severa!', description: 'Una tormenta está causando contaminación severa.', time: 30, impact: -15 },
            { id: 'drought', title: '¡Sequía!', description: 'La falta de agua está afectando el ecosistema.', time: 40, impact: -10 },
            { id: 'pollution', title: '¡Derrame Químico!', description: 'Un derrame ha contaminado áreas cercanas.', time: 35, impact: -20 },
            { id: 'heatwave', title: '¡Ola de Calor!', description: 'El calor está dañando la vegetación.', time: 45, impact: -12 }
        ];

        this.currentEvent = null;
        this.eventTimer = null;

        // DOM Elements
        this.elements = {
            level: document.getElementById('level'),
            timerBar: document.getElementById('timer-bar'),
            timerText: document.getElementById('timer-text'),
            sustainabilityFill: document.getElementById('sustainability-fill'),
            sustainabilityText: document.getElementById('sustainability-text'),
            mapGrid: document.getElementById('map-grid'),
            solarAmount: document.getElementById('solar-amount'),
            windAmount: document.getElementById('wind-amount'),
            waterAmount: document.getElementById('water-amount'),
            bioAmount: document.getElementById('bio-amount'),
            eventPanel: document.getElementById('event-panel'),
            eventTitle: document.getElementById('event-title'),
            eventDescription: document.getElementById('event-description'),
            eventTimerBar: document.getElementById('event-timer-bar'),
            eventTimerText: document.getElementById('event-timer-text'),
            eventBtn: document.getElementById('event-btn'),
            levelCompleteModal: document.getElementById('level-complete-modal'),
            timeUpModal: document.getElementById('time-up-modal'),
            gameCompleteModal: document.getElementById('game-complete-modal'),
            nextLevelBtn: document.getElementById('next-level-btn'),
            retryBtn: document.getElementById('retry-btn'),
            restartBtn: document.getElementById('restart-btn')
        };

        this.init();
    }

    init() {
        // Load saved progress
        this.loadProgress();

        // Setup event listeners
        this.setupEventListeners();

        // Initialize game
        this.initializeLevel();
    }

    loadProgress() {
        const saved = localStorage.getItem('eco-warriors-progress');
        if (saved) {
            const data = JSON.parse(saved);
            this.level = data.level || 1;
        }
    }

    saveProgress() {
        const data = {
            level: this.level,
            maxLevels: this.maxLevels
        };
        localStorage.setItem('eco-warriors-progress', JSON.stringify(data));
    }

    setupEventListeners() {
        // Resource collection buttons
        document.querySelectorAll('.resource-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const resourceItem = e.target.closest('.resource-item');
                const resource = resourceItem.dataset.resource;
                this.collectResource(resource);
            });
        });

        // Action buttons
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.closest('.action-btn').dataset.action;
                const cost = parseInt(e.target.closest('.action-btn').dataset.cost);
                this.executeAction(action, cost);
            });
        });

        // Event button
        this.elements.eventBtn.addEventListener('click', () => {
            this.resolveEvent();
        });

        // Modal buttons
        this.elements.nextLevelBtn.addEventListener('click', () => {
            this.nextLevel();
        });

        this.elements.retryBtn.addEventListener('click', () => {
            this.retryLevel();
        });

        this.elements.restartBtn.addEventListener('click', () => {
            this.restartGame();
        });

        // Map tile clicks
        this.elements.mapGrid.addEventListener('click', (e) => {
            const tile = e.target.closest('.map-tile');
            if (tile) {
                this.selectTile(parseInt(tile.dataset.index));
            }
        });
    }

    initializeLevel() {
        // Reset level state
        this.sustainability = 0;
        this.restoredTiles = 0;
        this.timeRemaining = 120 - (this.level * 10); // Progressive timer
        this.resources = { solar: 0, wind: 0, water: 0, bio: 0 };
        this.eventActive = false;

        // Calculate level targets
        this.sustainabilityTarget = 100;
        this.restoredTarget = 20 + (this.level * 5); // Progressive: 25, 30, 35, 40, 45

        // Generate map tiles
        this.generateMap();

        // Update UI
        this.updateUI();

        // Start game
        this.gameActive = true;
        this.startTimer();

        // Schedule random event
        this.scheduleEvent();
    }

    generateMap() {
        this.tiles = [];
        const totalTiles = this.mapSize;

        for (let i = 0; i < totalTiles; i++) {
            const type = Math.random() < 0.6 ? 'polluted' : 'clean';
            this.tiles.push({
                index: i,
                type: type,
                restored: false
            });
        }

        this.renderMap();
    }

    renderMap() {
        this.elements.mapGrid.innerHTML = '';
        this.tiles.forEach(tile => {
            const tileElement = document.createElement('div');
            tileElement.className = `map-tile ${tile.type}`;
            tileElement.dataset.index = tile.index;

            if (tile.type === 'clean') {
                tileElement.textContent = '🌿';
            } else if (tile.type === 'polluted') {
                tileElement.textContent = '☢️';
            } else if (tile.type === 'restored') {
                tileElement.textContent = '🌳';
            }

            this.elements.mapGrid.appendChild(tileElement);
        });
    }

    selectTile(index) {
        if (!this.gameActive) return;

        const tile = this.tiles[index];
        if (tile.type === 'polluted' && !tile.restored) {
            // Check if player has resources to restore
            if (this.resources.bio >= 15) {
                this.restoreTile(index);
            }
        }
    }

    restoreTile(index) {
        const tile = this.tiles[index];
        tile.type = 'restored';
        tile.restored = true;
        this.restoredTiles++;
        this.resources.bio -= 15;

        // Update sustainability
        this.sustainability += Math.ceil(100 / this.restoredTarget);
        if (this.sustainability > 100) this.sustainability = 100;

        this.renderMap();
        this.updateUI();
        this.checkLevelComplete();
    }

    collectResource(resource) {
        if (!this.gameActive) return;

        const amount = Math.floor(Math.random() * 3) + 1;
        this.resources[resource] += amount;
        this.updateUI();
    }

    executeAction(action, cost) {
        if (!this.gameActive) return;

        // Check if player has resources
        if (this.resources.solar >= cost) {
            this.resources.solar -= cost;

            // Execute action effect
            switch (action) {
                case 'plant-trees':
                    this.plantTrees();
                    break;
                case 'clean-water':
                    this.cleanWater();
                    break;
                case 'install-wind':
                    this.installWind();
                    break;
                case 'bio-remediation':
                    this.bioRemediation();
                    break;
            }

            this.updateUI();
        }
    }

    plantTrees() {
        // Plant trees increase sustainability
        this.sustainability += 5;
        if (this.sustainability > 100) this.sustainability = 100;
        this.checkLevelComplete();
    }

    cleanWater() {
        // Clean water reduces pollution tiles
        const pollutedTiles = this.tiles.filter(t => t.type === 'polluted');
        if (pollutedTiles.length > 0) {
            const randomPolluted = pollutedTiles[Math.floor(Math.random() * pollutedTiles.length)];
            randomPolluted.type = 'clean';
            this.renderMap();
        }
    }

    installWind() {
        // Install wind power generates solar resources
        this.resources.solar += 5;
    }

    bioRemediation() {
        // Bio remediation reduces pollution significantly
        const pollutedTiles = this.tiles.filter(t => t.type === 'polluted');
        pollutedTiles.forEach(tile => {
            if (Math.random() < 0.5) {
                tile.type = 'clean';
            }
        });
        this.renderMap();
    }

    scheduleEvent() {
        if (this.level > 1) {
            const delay = (Math.random() * 30000) + 30000; // 30-60 seconds
            setTimeout(() => {
                if (this.gameActive && !this.eventActive) {
                    this.triggerEvent();
                }
            }, delay);
        }
    }

    triggerEvent() {
        this.eventActive = true;
        this.currentEvent = this.events[Math.floor(Math.random() * this.events.length)];

        // Show event panel
        this.elements.eventPanel.style.display = 'block';
        this.elements.eventTitle.textContent = this.currentEvent.title;
        this.elements.eventDescription.textContent = this.currentEvent.description;

        // Start event timer
        this.startEventTimer();
    }

    startEventTimer() {
        let timeLeft = this.currentEvent.time;
        this.elements.eventTimerBar.style.width = '100%';
        this.elements.eventTimerText.textContent = `${timeLeft}s`;

        this.eventTimer = setInterval(() => {
            timeLeft--;
            const percentage = (timeLeft / this.currentEvent.time) * 100;
            this.elements.eventTimerBar.style.width = `${percentage}%`;
            this.elements.eventTimerText.textContent = `${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(this.eventTimer);
                this.eventImpact();
            }
        }, 1000);
    }

    eventImpact() {
        // Apply negative impact
        this.sustainability += this.currentEvent.impact;
        if (this.sustainability < 0) this.sustainability = 0;

        // Hide event panel
        this.elements.eventPanel.style.display = 'none';
        this.eventActive = false;

        this.updateUI();
        this.checkLevelComplete();
    }

    resolveEvent() {
        // Player successfully prepared defense
        clearInterval(this.eventTimer);

        // Hide event panel
        this.elements.eventPanel.style.display = 'none';
        this.eventActive = false;

        // Reward: Give bonus resources
        this.resources.solar += 10;
        this.resources.wind += 10;
        this.resources.water += 10;
        this.resources.bio += 10;

        this.updateUI();
    }

    startTimer() {
        this.timer = setInterval(() => {
            if (!this.gameActive) return;

            this.timeRemaining--;
            const percentage = (this.timeRemaining / (120 - (this.level * 10))) * 100;
            this.elements.timerBar.style.width = `${percentage}%`;
            this.elements.timerText.textContent = `${this.timeRemaining}s`;

            // Update timer bar color
            if (percentage > 50) {
                this.elements.timerBar.style.background = 'linear-gradient(90deg, #00ff00, #88ff00)';
            } else if (percentage > 25) {
                this.elements.timerBar.style.background = 'linear-gradient(90deg, #ffaa00, #ff8800)';
            } else {
                this.elements.timerBar.style.background = 'linear-gradient(90deg, #ff4444, #cc0000)';
            }

            if (this.timeRemaining <= 0) {
                clearInterval(this.timer);
                this.timeUp();
            }
        }, 1000);
    }

    updateUI() {
        // Update HUD
        this.elements.level.textContent = this.level;

        // Update sustainability bar
        this.elements.sustainabilityFill.style.width = `${this.sustainability}%`;
        this.elements.sustainabilityText.textContent = `${this.sustainability}%`;

        // Update resource amounts
        this.elements.solarAmount.textContent = this.resources.solar;
        this.elements.windAmount.textContent = this.resources.wind;
        this.elements.waterAmount.textContent = this.resources.water;
        this.elements.bioAmount.textContent = this.resources.bio;
    }

    checkLevelComplete() {
        if (this.sustainability >= this.sustainabilityTarget) {
            clearInterval(this.timer);
            this.gameActive = false;
            this.levelComplete();
        }
    }

    levelComplete() {
        this.elements.levelCompleteModal.style.display = 'flex';
        document.getElementById('level-completed-sustainability').textContent = `${this.sustainability}%`;
        document.getElementById('level-completed-restored').textContent = this.restoredTiles;
    }

    timeUp() {
        this.gameActive = false;
        this.elements.timeUpModal.style.display = 'flex';
        document.getElementById('time-up-sustainability').textContent = `${this.sustainability}%`;
    }

    nextLevel() {
        this.elements.levelCompleteModal.style.display = 'none';
        this.level++;

        if (this.level > this.maxLevels) {
            this.gameComplete();
        } else {
            this.saveProgress();
            this.initializeLevel();
        }
    }

    retryLevel() {
        this.elements.timeUpModal.style.display = 'none';
        this.initializeLevel();
    }

    gameComplete() {
        this.elements.gameCompleteModal.style.display = 'flex';
        document.getElementById('game-complete-levels').textContent = this.maxLevels;
        localStorage.removeItem('eco-warriors-progress');
    }

    restartGame() {
        this.elements.gameCompleteModal.style.display = 'none';
        this.level = 1;
        this.saveProgress();
        this.initializeLevel();
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EcoWarriors();
});
