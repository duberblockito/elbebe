// Game State
const GameState = {
    level: 1,
    trainsCompleted: 0,
    goal: 3,
    currentCars: [],
    targetCars: [],
    timer: 0,
    maxTime: 0,
    timerInterval: null,
    isDragging: false,
    draggedCar: null,
    dragSource: null,
    isPlaying: false
};

// Audio System using Web Audio API (no external files)
const Audio = {
    context: null,

    init: () => {
        Audio.context = new (window.AudioContext || window.webkitAudioContext)();
    },

    playTone: (frequency, duration, type = 'sine') => {
        if (!Audio.context) Audio.init();

        const oscillator = Audio.context.createOscillator();
        const gainNode = Audio.context.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(Audio.context.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = type;

        gainNode.gain.setValueAtTime(0.3, Audio.context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, Audio.context.currentTime + duration);

        oscillator.start(Audio.context.currentTime);
        oscillator.stop(Audio.context.currentTime + duration);
    },

    playPop: () => {
        Audio.playTone(600, 0.1, 'sine');
    },

    playCorrect: () => {
        Audio.playTone(800, 0.2, 'sine');
    },

    playWrong: () => {
        Audio.playTone(300, 0.3, 'triangle');
    },

    playSuccess: () => {
        Audio.playTone(1000, 0.4, 'sine');
    },

    playLevelUp: () => {
        Audio.playTone(1200, 0.5, 'sine');
    },

    playComplete: () => {
        // Ascending sequence for celebration
        Audio.playTone(800, 0.3, 'sine');
        setTimeout(() => Audio.playTone(1000, 0.3, 'sine'), 150);
        setTimeout(() => Audio.playTone(1200, 0.5, 'sine'), 300);
    }
};

// DOM Elements
const elements = {
    levelDisplay: document.getElementById('levelDisplay'),
    trainsDisplay: document.getElementById('trainsDisplay'),
    goalDisplay: document.getElementById('goalDisplay'),
    progressBar: document.getElementById('progressBar'),
    timerBar: document.getElementById('timerBar'),
    trainTrack: document.getElementById('trainTrack'),
    carsPool: document.getElementById('carsPool'),
    modal: document.getElementById('modal'),
    modalTitle: document.getElementById('modalTitle'),
    modalMessage: document.getElementById('modalMessage'),
    modalStats: document.getElementById('modalStats'),
    modalTime: document.getElementById('modalTime'),
    modalTrains: document.getElementById('modalTrains'),
    modalButton: document.getElementById('modalButton')
};

// Level Configuration
const getLevelConfig = (level) => {
    if (level <= 3) {
        return {
            maxNumber: 5,
            time: 45
        };
    } else if (level <= 6) {
        return {
            maxNumber: 7,
            time: 50
        };
    } else {
        return {
            maxNumber: 10,
            time: 60
        };
    }
};

// Initialize Game
function initGame() {
    loadProgress();
    startLevel();
}

// Load Progress from localStorage
function loadProgress() {
    try {
        const saved = localStorage.getItem('003-tren-numeros-progress');
        if (saved) {
            const data = JSON.parse(saved);
            GameState.level = data.level || 1;
            GameState.trainsCompleted = data.trainsCompleted || 0;
            GameState.goal = data.goal || 3;
        }
    } catch (e) {
        console.error('Error loading progress:', e);
    }
}

// Save Progress to localStorage
function saveProgress() {
    try {
        const data = {
            level: GameState.level,
            trainsCompleted: GameState.trainsCompleted,
            goal: GameState.goal
        };
        localStorage.setItem('003-tren-numeros-progress', JSON.stringify(data));
    } catch (e) {
        console.error('Error saving progress:', e);
    }
}

// Start Level
function startLevel() {
    const config = getLevelConfig(GameState.level);
    GameState.maxTime = config.time;
    GameState.timer = config.time;
    GameState.isPlaying = true;

    // Generate cars
    generateCars(config.maxNumber);

    // Update HUD
    updateHUD();

    // Start timer
    startTimer();

    // Hide modal
    elements.modal.classList.remove('active');
}

// Generate Cars
function generateCars(maxNumber) {
    // Create target sequence (1 to maxNumber)
    GameState.targetCars = Array.from({ length: maxNumber }, (_, i) => i + 1);

    // Shuffle for pool
    GameState.currentCars = [...GameState.targetCars].sort(() => Math.random() - 0.5);

    // Render
    renderCars();
}

// Render Cars
function renderCars() {
    // Clear pool (keep label)
    const poolLabel = elements.carsPool.querySelector('.cars-pool-label');
    elements.carsPool.innerHTML = '';
    if (poolLabel) {
        elements.carsPool.appendChild(poolLabel);
    }

    // Clear track (keep engine)
    const engine = elements.trainTrack.querySelector('.train-engine');
    elements.trainTrack.innerHTML = '';
    if (engine) {
        elements.trainTrack.appendChild(engine);
    }

    // Render pool cars
    GameState.currentCars.forEach((number, index) => {
        const carContainer = createCarContainer(number, 'pool', index);
        elements.carsPool.appendChild(carContainer);
    });
}

// Create Car Container
function createCarContainer(number, source, index) {
    const container = document.createElement('div');
    container.className = 'car-container';
    container.dataset.number = number;
    container.dataset.source = source;
    container.dataset.index = index;

    const car = document.createElement('div');
    car.className = 'train-car';
    car.textContent = number;
    car.draggable = true;
    car.dataset.number = number;

    // Drag events
    car.addEventListener('dragstart', handleDragStart);
    car.addEventListener('dragend', handleDragEnd);
    car.addEventListener('touchstart', handleTouchStart, { passive: false });
    car.addEventListener('touchmove', handleTouchMove, { passive: false });
    car.addEventListener('touchend', handleTouchEnd);

    container.appendChild(car);

    const wheels = document.createElement('div');
    wheels.className = 'car-wheels';

    for (let i = 0; i < 2; i++) {
        const wheel = document.createElement('div');
        wheel.className = 'wheel';
        wheels.appendChild(wheel);
    }

    container.appendChild(wheels);

    return container;
}

// Drag and Drop Handlers
function handleDragStart(e) {
    if (!GameState.isPlaying) {
        e.preventDefault();
        return;
    }

    GameState.isDragging = true;
    GameState.draggedCar = e.target;
    GameState.dragSource = e.target.closest('.car-container').dataset.source;

    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', e.target.dataset.number);

    // Track for touch
    e.target.dataset.dragging = 'true';
}

function handleDragEnd(e) {
    GameState.isDragging = false;
    e.target.classList.remove('dragging');
    e.target.classList.remove('dragging');

    // Remove all dragging classes
    document.querySelectorAll('.train-car').forEach(car => {
        car.classList.remove('dragging');
    });
}

// Touch Handlers for Mobile
function handleTouchStart(e) {
    if (!GameState.isPlaying) {
        e.preventDefault();
        return;
    }

    const touch = e.touches[0];
    GameState.isDragging = true;
    GameState.draggedCar = e.target;
    GameState.dragSource = e.target.closest('.car-container').dataset.source;

    e.target.classList.add('dragging');
    e.target.dataset.dragging = 'true';

    // Track touch position
    e.target.dataset.touchStartX = touch.clientX;
    e.target.dataset.touchStartY = touch.clientY;
}

function handleTouchMove(e) {
    if (!GameState.isDragging || !GameState.draggedCar) {
        return;
    }

    e.preventDefault();

    const touch = e.touches[0];
    const car = GameState.draggedCar;

    // Move car with touch
    const deltaX = touch.clientX - parseFloat(car.dataset.touchStartX);
    const deltaY = touch.clientY - parseFloat(car.dataset.touchStartY);

    car.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.1)`;
}

function handleTouchEnd(e) {
    if (!GameState.isDragging || !GameState.draggedCar) {
        return;
    }

    const car = GameState.draggedCar;
    const touch = e.changedTouches[0];

    // Reset transform
    car.style.transform = '';

    // Check if dropped on track
    const trackRect = elements.trainTrack.getBoundingClientRect();
    const poolRect = elements.carsPool.getBoundingClientRect();

    if (isInside(touch.clientX, touch.clientY, trackRect)) {
        // Move to track
        if (GameState.dragSource === 'pool') {
            moveCarToTrack(car);
        }
    } else if (isInside(touch.clientX, touch.clientY, poolRect)) {
        // Move to pool
        if (GameState.dragSource === 'track') {
            moveCarToPool(car);
        }
    }

    // Cleanup
    car.classList.remove('dragging');
    delete car.dataset.dragging;
    GameState.isDragging = false;
    GameState.draggedCar = null;
    GameState.dragSource = null;
}

// Helper: Check if point is inside rect
function isInside(x, y, rect) {
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

// Move Car to Track
function moveCarToTrack(car) {
    const number = parseInt(car.dataset.number);
    const container = car.closest('.car-container');

    // Check if car is already in correct position
    const currentTrackCars = Array.from(elements.trainTrack.querySelectorAll('.train-car:not(.train-engine)'))
        .map(c => parseInt(c.dataset.number));

    const currentCount = currentTrackCars.length;
    const targetPosition = number - 1;

    // Check if correct position
    if (currentCount === targetPosition) {
        // Correct position!
        const carContainer = createCarContainer(number, 'track', currentCount);
        carContainer.querySelector('.train-car').classList.add('correct');

        elements.trainTrack.appendChild(carContainer);
        container.remove();

        Audio.playCorrect();

        // Check if train is complete
        checkTrainComplete();
    } else {
        // Wrong position - bounce back
        Audio.playWrong();
        animateBounce(car);
    }
}

// Move Car to Pool
function moveCarToPool(car) {
    const container = car.closest('.car-container');
    elements.carsPool.appendChild(container);
    Audio.playPop();
}

// Animate Bounce
function animateBounce(element) {
    element.style.transform = 'translateX(10px)';
    setTimeout(() => {
        element.style.transform = 'translateX(-10px)';
        setTimeout(() => {
            element.style.transform = 'translateX(0)';
        }, 100);
    }, 100);
}

// Check if Train is Complete
function checkTrainComplete() {
    const trackCars = Array.from(elements.trainTrack.querySelectorAll('.train-car:not(.train-engine)'))
        .map(c => parseInt(c.dataset.number));

    if (JSON.stringify(trackCars) === JSON.stringify(GameState.targetCars)) {
        // Train is complete!
        Audio.playSuccess();
        GameState.trainsCompleted++;
        saveProgress();

        setTimeout(() => {
            if (GameState.trainsCompleted >= GameState.goal) {
                levelComplete();
            } else {
                // Reset for next train
                setTimeout(() => {
                    startNextTrain();
                }, 1500);
            }
        }, 1000);
    }
}

// Start Next Train
function startNextTrain() {
    const config = getLevelConfig(GameState.level);
    generateCars(config.maxNumber);
    updateHUD();
}

// Level Complete
function levelComplete() {
    clearInterval(GameState.timerInterval);
    GameState.isPlaying = false;

    if (GameState.level >= 8) {
        // Game complete!
        Audio.playComplete();
        showModal(
            'completed',
            '¡Juego Completado!',
            '¡Eres un experto en trenes! 🚂🎉',
            'Reiniciar Juego',
            () => {
                GameState.level = 1;
                GameState.trainsCompleted = 0;
                saveProgress();
                startLevel();
            }
        );
    } else {
        Audio.playLevelUp();
        GameState.level++;
        saveProgress();

        showModal(
            'success',
            '¡Nivel Completado!',
            `¡Excelente! Has completado el nivel ${GameState.level - 1}`,
            'Siguiente Nivel',
            () => {
                GameState.trainsCompleted = 0;
                saveProgress();
                startLevel();
            }
        );
    }
}

// Timer Functions
function startTimer() {
    clearInterval(GameState.timerInterval);

    GameState.timerInterval = setInterval(() => {
        if (!GameState.isPlaying) return;

        GameState.timer -= 0.1;
        updateTimerBar();

        if (GameState.timer <= 0) {
            clearInterval(GameState.timerInterval);
            timeUp();
        }
    }, 100);
}

function updateTimerBar() {
    const percentage = (GameState.timer / GameState.maxTime) * 100;
    elements.timerBar.style.width = `${percentage}%`;

    // Update color based on time remaining
    elements.timerBar.classList.remove('warning', 'critical');
    if (percentage < 20) {
        elements.timerBar.classList.add('critical');
    } else if (percentage < 40) {
        elements.timerBar.classList.add('warning');
    }
}

function timeUp() {
    GameState.isPlaying = false;

    showModal(
        'failure',
        '¡Tiempo Agotado!',
        'El tren no pudo partir a tiempo. ¡Inténtalo de nuevo!',
        'Reintentar Nivel',
        () => {
            GameState.trainsCompleted = 0;
            saveProgress();
            startLevel();
        }
    );
}

// Update HUD
function updateHUD() {
    elements.levelDisplay.textContent = GameState.level;
    elements.trainsDisplay.textContent = GameState.trainsCompleted;
    elements.goalDisplay.textContent = GameState.goal;

    const progressPercentage = (GameState.trainsCompleted / GameState.goal) * 100;
    elements.progressBar.style.width = `${progressPercentage}%`;
    elements.progressBar.textContent = `${GameState.trainsCompleted}/${GameState.goal} trenes`;
}

// Modal Functions
function showModal(type, title, message, buttonText, callback) {
    elements.modalTitle.className = `modal-title ${type}`;
    elements.modalTitle.textContent = title;
    elements.modalMessage.textContent = message;
    elements.modalButton.textContent = buttonText;
    elements.modalButton.className = `modal-button ${type}`;
    elements.modalButton.onclick = callback;

    // Update stats
    const timeUsed = Math.round(GameState.maxTime - GameState.timer);
    elements.modalTime.textContent = `${timeUsed}s`;
    elements.modalTrains.textContent = GameState.trainsCompleted;

    elements.modal.classList.add('active');
}

// Setup drop zones (for desktop drag and drop)
function setupDropZones() {
    // Track drop zone
    elements.trainTrack.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    elements.trainTrack.addEventListener('drop', (e) => {
        e.preventDefault();
        if (GameState.draggedCar && GameState.dragSource === 'pool') {
            moveCarToTrack(GameState.draggedCar);
        }
    });

    // Pool drop zone
    elements.carsPool.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    elements.carsPool.addEventListener('drop', (e) => {
        e.preventDefault();
        if (GameState.draggedCar && GameState.dragSource === 'track') {
            moveCarToPool(GameState.draggedCar);
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupDropZones();
    initGame();
});
