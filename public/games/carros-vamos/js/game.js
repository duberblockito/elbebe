// Game Configuration
const CONFIG = {
    STORAGE_KEY: 'carros-vamos-progress',
    TOTAL_LEVELS: 5,
    VEHICLE_WIDTH: 80,
    VEHICLE_HEIGHT: 40,
    MIN_SPAWN_INTERVAL: 1500,
    MAX_SPAWN_INTERVAL: 3000,
    BASE_SPEED: 2,
    ACCELERATION_SPEED: 15,
};

// Level Configuration
const LEVELS = [
    { vehicles: 15, time: 60, speedMultiplier: 1.0, spawnInterval: 2500 },
    { vehicles: 20, time: 50, speedMultiplier: 1.2, spawnInterval: 2200 },
    { vehicles: 25, time: 45, speedMultiplier: 1.4, spawnInterval: 2000 },
    { vehicles: 30, time: 40, speedMultiplier: 1.6, spawnInterval: 1800 },
    { vehicles: 35, time: 35, speedMultiplier: 1.8, spawnInterval: 1500 }
];

// Vehicle Colors
const VEHICLE_COLORS = [
    { name: 'car-red', color: '#FF4444' },
    { name: 'car-blue', color: '#4444FF' },
    { name: 'car-yellow', color: '#FFDD00' },
    { name: 'car-green', color: '#44FF44' },
    { name: 'car-purple', color: '#AA44FF' }
];

// Game State
let gameState = {
    currentLevel: 1,
    score: 0,
    totalScore: 0,
    timeLeft: 0,
    timerInterval: null,
    spawnInterval: null,
    vehicles: [],
    maxLevel: 1
};

// DOM Elements
const elements = {
    level: document.getElementById('level'),
    score: document.getElementById('score'),
    target: document.getElementById('target'),
    progressBar: document.getElementById('progress-bar'),
    progressText: document.getElementById('progress-text'),
    timerBar: document.getElementById('timer-bar'),
    timerText: document.getElementById('timer-text'),
    vehicles: document.getElementById('vehicles'),
    modalLevelComplete: document.getElementById('modal-level-complete'),
    modalTimeUp: document.getElementById('modal-time-up'),
    modalGameComplete: document.getElementById('modal-game-complete'),
    finalScore: document.getElementById('final-score'),
    totalScore: document.getElementById('total-score'),
    btnNextLevel: document.getElementById('btn-next-level'),
    btnRetryLevel: document.getElementById('btn-retry-level'),
    btnPlayAgain: document.getElementById('btn-play-again')
};

// Initialize Game
function init() {
    loadProgress();
    setupEventListeners();
    startLevel(gameState.currentLevel);
}

// Load Progress from LocalStorage
function loadProgress() {
    const savedProgress = localStorage.getItem(CONFIG.STORAGE_KEY);
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        gameState.maxLevel = progress.maxLevel || 1;
        gameState.currentLevel = progress.currentLevel || 1;
        gameState.totalScore = progress.totalScore || 0;
    }
}

// Save Progress to LocalStorage
function saveProgress() {
    const progress = {
        currentLevel: gameState.currentLevel,
        maxLevel: gameState.maxLevel,
        totalScore: gameState.totalScore
    };
    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(progress));
}

// Setup Event Listeners
function setupEventListeners() {
    elements.btnNextLevel.addEventListener('click', () => {
        hideModal(elements.modalLevelComplete);
        gameState.currentLevel++;
        if (gameState.currentLevel > CONFIG.TOTAL_LEVELS) {
            showGameComplete();
        } else {
            if (gameState.currentLevel > gameState.maxLevel) {
                gameState.maxLevel = gameState.currentLevel;
            }
            saveProgress();
            startLevel(gameState.currentLevel);
        }
    });

    elements.btnRetryLevel.addEventListener('click', () => {
        hideModal(elements.modalTimeUp);
        startLevel(gameState.currentLevel);
    });

    elements.btnPlayAgain.addEventListener('click', () => {
        hideModal(elements.modalGameComplete);
        gameState.currentLevel = 1;
        gameState.totalScore = 0;
        gameState.maxLevel = 1;
        saveProgress();
        startLevel(1);
    });
}

// Start Level
function startLevel(level) {
    const levelConfig = LEVELS[level - 1];

    gameState.score = 0;
    gameState.timeLeft = levelConfig.time;
    gameState.vehicles = [];

    // Clear existing vehicles
    elements.vehicles.innerHTML = '';

    // Update HUD
    elements.level.textContent = level;
    elements.target.textContent = levelConfig.vehicles;
    updateHUD();

    // Start timer
    startTimer(levelConfig.time);

    // Start spawning vehicles
    startSpawning(levelConfig);
}

// Start Timer
function startTimer(time) {
    clearInterval(gameState.timerInterval);

    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;

        updateTimerBar(time);

        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            clearInterval(gameState.spawnInterval);
            showTimeUp();
        }
    }, 1000);
}

// Update Timer Bar
function updateTimerBar(totalTime) {
    const percentage = (gameState.timeLeft / totalTime) * 100;
    elements.timerBar.style.width = percentage + '%';
    elements.timerText.textContent = gameState.timeLeft + 's';

    // Update color based on time remaining
    elements.timerBar.classList.remove('warning', 'critical');
    if (percentage < 25) {
        elements.timerBar.classList.add('critical');
    } else if (percentage < 50) {
        elements.timerBar.classList.add('warning');
    }
}

// Start Spawning Vehicles
function startSpawning(levelConfig) {
    clearInterval(gameState.spawnInterval);

    const spawnVehicle = () => {
        if (gameState.vehicles.length >= levelConfig.vehicles) {
            return;
        }
        createVehicle(levelConfig);
    };

    // Spawn first vehicle immediately
    spawnVehicle();

    // Continue spawning
    gameState.spawnInterval = setInterval(() => {
        if (gameState.vehicles.length < levelConfig.vehicles) {
            createVehicle(levelConfig);
        }
    }, levelConfig.spawnInterval);
}

// Create Vehicle
function createVehicle(levelConfig) {
    const vehicle = document.createElement('div');
    vehicle.className = 'vehicle';

    // Random color
    const colorIndex = Math.floor(Math.random() * VEHICLE_COLORS.length);
    const colorConfig = VEHICLE_COLORS[colorIndex];
    vehicle.classList.add(colorConfig.name);

    // Set position (random Y, start from left)
    const containerHeight = elements.vehicles.offsetHeight;
    const yPos = Math.random() * (containerHeight - CONFIG.VEHICLE_HEIGHT);

    vehicle.style.left = -CONFIG.VEHICLE_WIDTH + 'px';
    vehicle.style.top = yPos + 'px';
    vehicle.style.width = CONFIG.VEHICLE_WIDTH + 'px';
    vehicle.style.height = CONFIG.VEHICLE_HEIGHT + 'px';
    vehicle.style.backgroundColor = colorConfig.color;
    vehicle.style.borderRadius = '10px 10px 5px 5px';

    // Add vehicle to DOM
    elements.vehicles.appendChild(vehicle);

    // Vehicle object
    const vehicleObj = {
        element: vehicle,
        x: -CONFIG.VEHICLE_WIDTH,
        y: yPos,
        speed: CONFIG.BASE_SPEED * levelConfig.speedMultiplier,
        isAccelerating: false
    };

    // Add touch/click event
    vehicle.addEventListener('touchstart', (e) => {
        e.preventDefault();
        accelerateVehicle(vehicleObj);
    });

    vehicle.addEventListener('click', () => {
        accelerateVehicle(vehicleObj);
    });

    // Start animation
    animateVehicle(vehicleObj);

    // Add to state
    gameState.vehicles.push(vehicleObj);
}

// Animate Vehicle
function animateVehicle(vehicleObj) {
    const animate = () => {
        if (vehicleObj.isAccelerating) {
            return; // Vehicle is zooming off screen
        }

        // Update position
        vehicleObj.x += vehicleObj.speed;
        vehicleObj.element.style.left = vehicleObj.x + 'px';

        // Check if off screen
        if (vehicleObj.x > window.innerWidth) {
            vehiclePassed(vehicleObj);
        } else {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
}

// Accelerate Vehicle (zoom off screen)
function accelerateVehicle(vehicleObj) {
    if (vehicleObj.isAccelerating) {
        return; // Already accelerating
    }

    vehicleObj.isAccelerating = true;

    // Play sound
    playVroomSound();

    // Animate zoom
    const zoomAnimate = () => {
        vehicleObj.x += CONFIG.ACCELERATION_SPEED;
        vehicleObj.element.style.left = vehicleObj.x + 'px';
        vehicleObj.element.style.transform = 'scale(1.2)';

        if (vehicleObj.x < window.innerWidth + CONFIG.VEHICLE_WIDTH) {
            requestAnimationFrame(zoomAnimate);
        } else {
            vehiclePassed(vehicleObj);
        }
    };

    requestAnimationFrame(zoomAnimate);
}

// Vehicle Passed Off Screen
function vehiclePassed(vehicleObj) {
    // Remove from DOM
    if (vehicleObj.element.parentNode) {
        vehicleObj.element.parentNode.removeChild(vehicleObj.element);
    }

    // Remove from state
    gameState.vehicles = gameState.vehicles.filter(v => v !== vehicleObj);

    // Update score
    gameState.score++;
    gameState.totalScore++;
    updateHUD();

    // Check if level complete
    const levelConfig = LEVELS[gameState.currentLevel - 1];
    if (gameState.score >= levelConfig.vehicles) {
        clearInterval(gameState.timerInterval);
        clearInterval(gameState.spawnInterval);
        showLevelComplete();
    }
}

// Update HUD
function updateHUD() {
    elements.score.textContent = gameState.score;
    elements.finalScore.textContent = gameState.score;
    elements.totalScore.textContent = gameState.totalScore;

    const levelConfig = LEVELS[gameState.currentLevel - 1];
    const percentage = (gameState.score / levelConfig.vehicles) * 100;

    elements.progressBar.style.width = percentage + '%';
    elements.progressText.textContent = `${gameState.score} / ${levelConfig.vehicles}`;
}

// Play Vroom Sound
function playVroomSound() {
    // Create audio context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create oscillator
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Set sound properties
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.2);

    // Set volume envelope
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

    // Play sound
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
}

// Show Level Complete Modal
function showLevelComplete() {
    showModal(elements.modalLevelComplete);
    saveProgress();
}

// Show Time Up Modal
function showTimeUp() {
    showModal(elements.modalTimeUp);
}

// Show Game Complete Modal
function showGameComplete() {
    showModal(elements.modalGameComplete);
    elements.totalScore.textContent = gameState.totalScore;
    saveProgress();
}

// Show Modal
function showModal(modal) {
    modal.classList.remove('hidden');
}

// Hide Modal
function hideModal(modal) {
    modal.classList.add('hidden');
}

// Start game when DOM is ready
document.addEventListener('DOMContentLoaded', init);
