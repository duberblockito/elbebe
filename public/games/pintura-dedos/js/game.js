// Pintura con los Dedos - Game Logic

// Game Configuration
const CONFIG = {
    levels: [
        { target: 5, colors: 3, time: 45, description: "Pintar 5 áreas con 3 colores" },
        { target: 8, colors: 4, time: 60, description: "Pintar 8 áreas con 4 colores" },
        { target: 10, colors: 7, time: 75, description: "Pintar 10 áreas con todos los colores" },
        { target: 12, colors: 7, time: 90, description: "Pintar 12 áreas en orden del arcoíris" },
        { target: 15, colors: 7, time: 105, description: "Pintar 15 áreas libremente" }
    ],
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'],
    brushSize: 15,
    minStrokeLength: 30, // Minimum pixels to count as an "area"
    storageKey: 'pintura-dedos-progress'
};

// Game State
let gameState = {
    currentLevel: 1,
    paintedAreas: 0,
    isDrawing: false,
    currentColor: CONFIG.colors[0],
    isEraser: false,
    timer: null,
    timeRemaining: 0,
    unlockedLevels: 1,
    totalDrawings: 0,
    totalPaintedAreas: 0,
    isPaused: false
};

// Canvas Setup
const canvas = document.getElementById('paint-canvas');
const ctx = canvas.getContext('2d');
let lastX = 0;
let lastY = 0;
let strokeLength = 0;
let currentStrokeColor = '';

// DOM Elements
const levelDisplay = document.getElementById('level-display');
const paintedAreasDisplay = document.getElementById('painted-areas');
const targetAreasDisplay = document.getElementById('target-areas');
const progressFill = document.getElementById('progress-fill');
const timerFill = document.getElementById('timer-fill');
const timerValue = document.getElementById('timer-value');
const colorBtns = document.querySelectorAll('.color-btn');
const eraserBtn = document.getElementById('eraser-btn');
const clearBtn = document.getElementById('clear-btn');
const nextLevelBtn = document.getElementById('next-level-btn');

// Modals
const levelCompleteModal = document.getElementById('level-complete-modal');
const gameOverModal = document.getElementById('game-over-modal');
const gameCompleteModal = document.getElementById('game-complete-modal');

// Modal Buttons
const modalNextBtn = document.getElementById('modal-next-btn');
const modalRetryBtn = document.getElementById('modal-retry-btn');
const modalHomeBtn = document.getElementById('modal-home-btn');

// Initialize Game
function initGame() {
    loadProgress();
    resizeCanvas();
    setupEventListeners();
    startLevel(1);
}

// Load Progress from LocalStorage
function loadProgress() {
    try {
        const saved = localStorage.getItem(CONFIG.storageKey);
        if (saved) {
            const progress = JSON.parse(saved);
            gameState.unlockedLevels = Math.max(1, progress.unlockedLevels || 1);
            gameState.totalDrawings = progress.totalDrawings || 0;
            gameState.totalPaintedAreas = progress.totalPaintedAreas || 0;
        }
    } catch (e) {
        console.error('Error loading progress:', e);
    }
}

// Save Progress to LocalStorage
function saveProgress() {
    try {
        const progress = {
            unlockedLevels: gameState.unlockedLevels,
            totalDrawings: gameState.totalDrawings,
            totalPaintedAreas: gameState.totalPaintedAreas
        };
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(progress));
    } catch (e) {
        console.error('Error saving progress:', e);
    }
}

// Resize Canvas
function resizeCanvas() {
    const container = document.getElementById('canvas-container');
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Set canvas background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Setup Event Listeners
function setupEventListeners() {
    // Canvas Drawing Events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Touch Events
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', stopDrawing);

    // Color Palette
    colorBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const color = e.target.dataset.color;
            setColor(color);
        });
    });

    // Action Buttons
    eraserBtn.addEventListener('click', toggleEraser);
    clearBtn.addEventListener('click', clearCanvas);
    nextLevelBtn.addEventListener('click', () => startLevel(gameState.currentLevel + 1));

    // Modal Buttons
    modalNextBtn.addEventListener('click', () => {
        hideModal('level-complete-modal');
        startLevel(gameState.currentLevel + 1);
    });
    modalRetryBtn.addEventListener('click', () => {
        hideModal('game-over-modal');
        startLevel(gameState.currentLevel);
    });
    modalHomeBtn.addEventListener('click', () => {
        hideModal('game-complete-modal');
        window.location.href = '../../index.html';
    });

    // Window Resize
    window.addEventListener('resize', resizeCanvas);
}

// Touch Handlers
function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    startDrawing(mouseEvent);
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    draw(mouseEvent);
}

// Start Drawing
function startDrawing(e) {
    if (gameState.isPaused) return;

    gameState.isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
    strokeLength = 0;
    currentStrokeColor = gameState.isEraser ? 'eraser' : gameState.currentColor;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
}

// Draw
function draw(e) {
    if (!gameState.isDrawing || gameState.isPaused) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate stroke length
    const distance = Math.sqrt(Math.pow(x - lastX, 2) + Math.pow(y - lastY, 2));
    strokeLength += distance;

    // Smooth drawing
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = CONFIG.brushSize;

    if (gameState.isEraser) {
        ctx.strokeStyle = '#FFFFFF';
    } else {
        ctx.strokeStyle = gameState.currentColor;
    }

    ctx.lineTo(x, y);
    ctx.stroke();

    lastX = x;
    lastY = y;
}

// Stop Drawing
function stopDrawing() {
    if (!gameState.isDrawing) return;

    gameState.isDrawing = false;
    ctx.closePath();

    // Check if stroke is long enough to count as an "area"
    if (strokeLength >= CONFIG.minStrokeLength && !gameState.isEraser) {
        addPaintedArea();
    }
}

// Add Painted Area
function addPaintedArea() {
    const levelConfig = CONFIG.levels[gameState.currentLevel - 1];
    gameState.paintedAreas++;
    gameState.totalPaintedAreas++;

    updateProgress();

    // Check if level is complete
    if (gameState.paintedAreas >= levelConfig.target) {
        completeLevel();
    }

    saveProgress();
}

// Set Color
function setColor(color) {
    gameState.currentColor = color;
    gameState.isEraser = false;

    // Update UI
    colorBtns.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-color="${color}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    eraserBtn.classList.remove('active');
}

// Toggle Eraser
function toggleEraser() {
    gameState.isEraser = !gameState.isEraser;

    if (gameState.isEraser) {
        eraserBtn.classList.add('active');
        colorBtns.forEach(btn => btn.classList.remove('active'));
    } else {
        eraserBtn.classList.remove('active');
        const activeBtn = document.querySelector(`[data-color="${gameState.currentColor}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }
}

// Clear Canvas
function clearCanvas() {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Start Level
function startLevel(level) {
    if (level > CONFIG.levels.length) {
        completeGame();
        return;
    }

    gameState.currentLevel = level;
    gameState.paintedAreas = 0;
    gameState.isPaused = false;

    const levelConfig = CONFIG.levels[level - 1];
    gameState.timeRemaining = levelConfig.time;

    // Update UI
    levelDisplay.textContent = level;
    targetAreasDisplay.textContent = levelConfig.target;
    paintedAreasDisplay.textContent = '0';
    nextLevelBtn.style.display = 'none';

    // Clear canvas
    clearCanvas();

    // Update progress
    updateProgress();

    // Start timer
    startTimer(levelConfig.time);
}

// Start Timer
function startTimer(duration) {
    clearInterval(gameState.timer);

    const totalSeconds = duration;
    gameState.timeRemaining = totalSeconds;

    // Update timer display immediately
    updateTimerDisplay(totalSeconds);

    gameState.timer = setInterval(() => {
        gameState.timeRemaining--;
        updateTimerDisplay(gameState.timeRemaining);

        if (gameState.timeRemaining <= 0) {
            clearInterval(gameState.timer);
            gameOver();
        }
    }, 1000);
}

// Update Timer Display
function updateTimerDisplay(seconds) {
    timerValue.textContent = `${seconds}s`;

    const levelConfig = CONFIG.levels[gameState.currentLevel - 1];
    const percentage = (seconds / levelConfig.time) * 100;
    timerFill.style.width = `${percentage}%`;

    // Change color based on time remaining
    if (percentage > 50) {
        timerFill.style.background = 'linear-gradient(90deg, #4CAF50, #8BC34A)';
    } else if (percentage > 25) {
        timerFill.style.background = 'linear-gradient(90deg, #FFC107, #FF9800)';
    } else {
        timerFill.style.background = 'linear-gradient(90deg, #FF5722, #F44336)';
    }
}

// Update Progress
function updateProgress() {
    paintedAreasDisplay.textContent = gameState.paintedAreas;

    const levelConfig = CONFIG.levels[gameState.currentLevel - 1];
    const percentage = (gameState.paintedAreas / levelConfig.target) * 100;
    progressFill.style.width = `${Math.min(percentage, 100)}%`;
}

// Complete Level
function completeLevel() {
    clearInterval(gameState.timer);
    gameState.isPaused = true;

    // Unlock next level
    if (gameState.currentLevel >= gameState.unlockedLevels && gameState.currentLevel < CONFIG.levels.length) {
        gameState.unlockedLevels = gameState.currentLevel + 1;
    }

    gameState.totalDrawings++;
    saveProgress();

    // Show modal
    const levelConfig = CONFIG.levels[gameState.currentLevel - 1];
    document.getElementById('level-score').textContent =
        `${gameState.paintedAreas} ${getTranslation('Áreas', 'Areas')} pintadas en ${levelConfig.time - gameState.timeRemaining}s`;

    if (gameState.currentLevel === CONFIG.levels.length) {
        completeGame();
    } else {
        nextLevelBtn.style.display = 'block';
        showModal('level-complete-modal');
    }
}

// Game Over
function gameOver() {
    gameState.isPaused = true;
    showModal('game-over-modal');
}

// Complete Game
function completeGame() {
    clearInterval(gameState.timer);
    gameState.isPaused = true;
    gameState.totalDrawings++;
    saveProgress();

    const finalScore = `
        ${getTranslation('Niveles Completados', 'Levels Completed')}: ${CONFIG.levels.length}
        ${getTranslation('Total Áreas Pintadas', 'Total Areas Painted')}: ${gameState.totalPaintedAreas}
        ${getTranslation('Total Dibujos', 'Total Drawings')}: ${gameState.totalDrawings}
    `;
    document.getElementById('final-score').textContent = finalScore;

    showModal('game-complete-modal');
}

// Show Modal
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Hide Modal
function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Get Translation
function getTranslation(es, en) {
    const lang = localStorage.getItem('language') || 'es';
    return lang === 'en' ? en : es;
}

// Initialize on Load
window.addEventListener('load', initGame);
