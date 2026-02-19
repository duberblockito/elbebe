// Maestro del Reloj - Game Logic

// Game State
let gameState = {
    level: 1,
    score: 0,
    targetScore: 5,
    timeRemaining: 60,
    totalTime: 60,
    isPlaying: false,
    currentHour: 12,
    currentMinute: 0,
    targetHour: 12,
    targetMinute: 0,
    difficulty: 'exact', // 'exact', 'half', 'quarter'
    customers: ['👨', '👩', '👴', '👵', '👦', '👧', '🧑', '👱', '🧔'],
    messages: [
        '¡Hola! Necesito saber qué hora es...',
        '¡Ayúdame! ¿Qué hora es ahora?',
        '¡Por favor! ¿Me puedes decir la hora?',
        '¡Estoy perdido! ¿Qué hora es?',
        '¡No sé la hora! ¿Me ayudas?'
    ]
};

// Level Configuration
const levelConfig = {
    1: { difficulty: 'exact', targetScore: 5, time: 90 },
    2: { difficulty: 'exact', targetScore: 6, time: 85 },
    3: { difficulty: 'half', targetScore: 7, time: 80 },
    4: { difficulty: 'half', targetScore: 8, time: 75 },
    5: { difficulty: 'quarter', targetScore: 9, time: 70 }
};

// DOM Elements
const elements = {
    level: document.getElementById('level'),
    score: document.getElementById('score'),
    timer: document.getElementById('timer'),
    progressFill: document.getElementById('progress-fill'),
    timerFill: document.getElementById('timer-fill'),
    customerAvatar: document.getElementById('customer-avatar'),
    customerMessage: document.getElementById('customer-message'),
    targetHour: document.getElementById('target-hour'),
    targetMinute: document.getElementById('target-minute'),
    hourHand: document.getElementById('hour-hand'),
    minuteHand: document.getElementById('minute-hand'),
    checkBtn: document.getElementById('check-btn'),
    instructionsOverlay: document.getElementById('instructions-overlay'),
    levelCompleteOverlay: document.getElementById('level-complete-overlay'),
    timeUpOverlay: document.getElementById('time-up-overlay'),
    gameCompleteOverlay: document.getElementById('game-complete-overlay'),
    startBtn: document.getElementById('start-btn'),
    nextLevelBtn: document.getElementById('next-level-btn'),
    retryBtn: document.getElementById('retry-btn'),
    playAgainBtn: document.getElementById('play-again-btn'),
    levelCompleteMessage: document.getElementById('level-complete-message'),
    levelScore: document.getElementById('level-score'),
    levelTime: document.getElementById('level-time'),
    finalLevel: document.getElementById('final-level'),
    finalScore: document.getElementById('final-score')
};

// Timer Interval
let timerInterval = null;

// Clock Hand State
let handState = {
    hourAngle: 0,
    minuteAngle: 0,
    isDraggingHour: false,
    isDraggingMinute: false,
    lastTouchY: 0
};

// Initialize Game
function initGame() {
    loadProgress();
    setupEventListeners();
    showInstructions();
}

// Load Progress from localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('maestro-reloj-progress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        gameState.level = progress.level || 1;
        gameState.score = progress.totalScore || 0;
    }
}

// Save Progress to localStorage
function saveProgress() {
    const progress = {
        level: gameState.level,
        totalScore: gameState.score
    };
    localStorage.setItem('maestro-reloj-progress', JSON.stringify(progress));
}

// Setup Event Listeners
function setupEventListeners() {
    elements.startBtn.addEventListener('click', startGame);
    elements.nextLevelBtn.addEventListener('click', nextLevel);
    elements.retryBtn.addEventListener('click', retryLevel);
    elements.playAgainBtn.addEventListener('click', playAgain);
    elements.checkBtn.addEventListener('click', checkAnswer);

    // Clock Hand Interaction - Mouse
    elements.hourHand.addEventListener('mousedown', (e) => startDragHour(e));
    elements.minuteHand.addEventListener('mousedown', (e) => startDragMinute(e));
    document.addEventListener('mousemove', dragHand);
    document.addEventListener('mouseup', endDrag);

    // Clock Hand Interaction - Touch
    elements.hourHand.addEventListener('touchstart', (e) => startDragHour(e));
    elements.minuteHand.addEventListener('touchstart', (e) => startDragMinute(e));
    document.addEventListener('touchmove', dragHand, { passive: false });
    document.addEventListener('touchend', endDrag);
}

// Show Instructions
function showInstructions() {
    elements.instructionsOverlay.style.display = 'flex';
}

// Hide Instructions
function hideInstructions() {
    elements.instructionsOverlay.style.display = 'none';
}

// Start Game
function startGame() {
    hideInstructions();
    hideAllOverlays();
    startLevel();
}

// Start Level
function startLevel() {
    const config = levelConfig[gameState.level];
    gameState.difficulty = config.difficulty;
    gameState.targetScore = config.targetScore;
    gameState.totalTime = config.time;
    gameState.timeRemaining = config.time;
    gameState.score = 0;
    gameState.isPlaying = true;

    updateHUD();
    generateNewTime();
    updateClockHands();
    startTimer();
}

// Generate New Time
function generateNewTime() {
    const hour = Math.floor(Math.random() * 12) + 1;
    gameState.targetHour = hour;

    switch (gameState.difficulty) {
        case 'exact':
            gameState.targetMinute = 0;
            break;
        case 'half':
            gameState.targetMinute = Math.random() < 0.5 ? 0 : 30;
            break;
        case 'quarter':
            const quarters = [0, 15, 30, 45];
            gameState.targetMinute = quarters[Math.floor(Math.random() * 4)];
            break;
    }

    // Update UI
    const minuteDisplay = gameState.targetMinute.toString().padStart(2, '0');
    elements.targetHour.textContent = gameState.targetHour;
    elements.targetMinute.textContent = minuteDisplay;

    // Random customer
    const customer = gameState.customers[Math.floor(Math.random() * gameState.customers.length)];
    elements.customerAvatar.textContent = customer;

    // Random message
    const message = gameState.messages[Math.floor(Math.random() * gameState.messages.length)];
    elements.customerMessage.textContent = message;

    // Reset clock hands to random position (not correct)
    gameState.currentHour = Math.floor(Math.random() * 12) + 1;
    gameState.currentMinute = Math.floor(Math.random() * 60);
    updateClockHands();
}

// Clock Hand Drag Functions
function startDragHour(e) {
    e.preventDefault();
    handState.isDraggingHour = true;
    handState.lastTouchY = e.touches ? e.touches[0].clientY : e.clientY;
}

function startDragMinute(e) {
    e.preventDefault();
    handState.isDraggingMinute = true;
    handState.lastTouchY = e.touches ? e.touches[0].clientY : e.clientY;
}

function dragHand(e) {
    if (!handState.isDraggingHour && !handState.isDraggingMinute) return;

    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaY = handState.lastTouchY - currentY;
    handState.lastTouchY = currentY;

    // Determine sensitivity based on drag direction
    const sensitivity = handState.isDraggingHour ? 5 : 2;

    if (handState.isDraggingHour) {
        gameState.currentHour += deltaY > 0 ? 1 : -1;
        if (gameState.currentHour < 1) gameState.currentHour = 12;
        if (gameState.currentHour > 12) gameState.currentHour = 1;
    } else {
        gameState.currentMinute += deltaY > 0 ? 5 : -5;
        if (gameState.currentMinute < 0) gameState.currentMinute = 55;
        if (gameState.currentMinute > 55) gameState.currentMinute = 0;
    }

    updateClockHands();
}

function endDrag() {
    handState.isDraggingHour = false;
    handState.isDraggingMinute = false;
}

// Update Clock Hands
function updateClockHands() {
    // Hour hand: 360 degrees / 12 hours = 30 degrees per hour
    // Also moves slightly with minutes (30 degrees * minutes / 60)
    const hourAngle = (gameState.currentHour % 12) * 30 + (gameState.currentMinute / 60) * 30;

    // Minute hand: 360 degrees / 60 minutes = 6 degrees per minute
    const minuteAngle = gameState.currentMinute * 6;

    elements.hourHand.style.transform = `rotate(${hourAngle}deg)`;
    elements.minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
}

// Check Answer
function checkAnswer() {
    if (!gameState.isPlaying) return;

    const hourCorrect = gameState.currentHour === gameState.targetHour;
    const minuteCorrect = gameState.currentMinute === gameState.targetMinute;

    if (hourCorrect && minuteCorrect) {
        // Correct!
        gameState.score++;
        updateHUD();

        if (gameState.score >= gameState.targetScore) {
            // Level Complete
            levelComplete();
        } else {
            // Next time
            generateNewTime();
        }
    } else {
        // Wrong - Visual feedback
        elements.checkBtn.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            elements.checkBtn.style.animation = '';
        }, 500);
    }
}

// Update HUD
function updateHUD() {
    elements.level.textContent = gameState.level;
    elements.score.textContent = `${gameState.score}/${gameState.targetScore}`;

    // Update progress bar
    const progressPercent = (gameState.score / gameState.targetScore) * 100;
    elements.progressFill.style.width = `${progressPercent}%`;

    // Update timer display
    const timePercent = (gameState.timeRemaining / gameState.totalTime) * 100;
    elements.timerFill.style.width = `${timePercent}%`;
    elements.timer.textContent = `${Math.ceil(gameState.timeRemaining)}s`;

    // Update timer bar color
    elements.timerFill.classList.remove('warning', 'critical');
    if (timePercent < 25) {
        elements.timerFill.classList.add('critical');
    } else if (timePercent < 50) {
        elements.timerFill.classList.add('warning');
    }
}

// Start Timer
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (!gameState.isPlaying) return;

        gameState.timeRemaining--;
        updateHUD();

        if (gameState.timeRemaining <= 0) {
            clearInterval(timerInterval);
            timeUp();
        }
    }, 1000);
}

// Level Complete
function levelComplete() {
    gameState.isPlaying = false;
    clearInterval(timerInterval);

    const timeUsed = gameState.totalTime - gameState.timeRemaining;

    elements.levelScore.textContent = `${gameState.score}/${gameState.targetScore}`;
    elements.levelTime.textContent = `${timeUsed}s`;

    elements.levelCompleteOverlay.style.display = 'flex';
}

// Time Up
function timeUp() {
    gameState.isPlaying = false;
    clearInterval(timerInterval);

    elements.timeUpOverlay.style.display = 'flex';
}

// Game Complete
function gameComplete() {
    gameState.isPlaying = false;
    clearInterval(timerInterval);

    elements.finalLevel.textContent = gameState.level;
    elements.finalScore.textContent = gameState.score;

    elements.gameCompleteOverlay.style.display = 'flex';
}

// Next Level
function nextLevel() {
    hideAllOverlays();

    if (gameState.level < 5) {
        gameState.level++;
        saveProgress();
        startLevel();
    } else {
        // Game Complete
        gameState.level = 1;
        localStorage.removeItem('maestro-reloj-progress');
        gameComplete();
    }
}

// Retry Level
function retryLevel() {
    hideAllOverlays();
    startLevel();
}

// Play Again
function playAgain() {
    hideAllOverlays();
    gameState.level = 1;
    gameState.score = 0;
    localStorage.removeItem('maestro-reloj-progress');
    startGame();
}

// Hide All Overlays
function hideAllOverlays() {
    elements.instructionsOverlay.style.display = 'none';
    elements.levelCompleteOverlay.style.display = 'none';
    elements.timeUpOverlay.style.display = 'none';
    elements.gameCompleteOverlay.style.display = 'none';
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);
