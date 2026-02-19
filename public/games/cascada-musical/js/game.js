// Cascada Musical - Game Logic
// Pentatonic scale music game for 1-2 year olds

// Game Configuration
const LEVELS = [
    { level: 1, target: 10, duration: 30, blockSpeed: 4 },
    { level: 2, target: 12, duration: 35, blockSpeed: 4.5 },
    { level: 3, target: 15, duration: 40, blockSpeed: 5 },
    { level: 4, target: 18, duration: 45, blockSpeed: 5.5 },
    { level: 5, target: 20, duration: 50, blockSpeed: 6 }
];

const COLORS = [
    { bg: '#FF6B6B', emoji: '🎵' },    // Red
    { bg: '#4ECDC4', emoji: '🎶' },    // Cyan
    { bg: '#FFE66D', emoji: '🎼' },    // Yellow
    { bg: '#95E1D3', emoji: '🎹' },    // Teal
    { bg: '#DDA0DD', emoji: '🎷' },    // Plum
    { bg: '#98D8C8', emoji: '🎺' },    // Mint
    { bg: '#F7DC6F', emoji: '🪗' },    // Light Yellow
    { bg: '#BB8FCE', emoji: '🎸' }     // Purple
];

// Pentatonic scale frequencies (C Major Pentatonic)
const PENTATONIC_SCALE = [261.63, 293.66, 329.63, 392.00, 440.00]; // C4, D4, E4, G4, A4

// Audio Context
let audioContext = null;

// Game State
let gameState = {
    currentLevel: 1,
    score: 0,
    target: 10,
    timeRemaining: 30,
    totalScore: 0,
    isPlaying: false,
    isPaused: false,
    lastFrameTime: 0,
    blocks: []
};

// DOM Elements
const gameContainer = document.getElementById('game-container');
const levelDisplay = document.getElementById('level-display');
const scoreDisplay = document.getElementById('score-display');
const targetDisplay = document.getElementById('target-display');
const timeDisplay = document.getElementById('time-display');
const progressFill = document.getElementById('progress-fill');
const timerFill = document.getElementById('timer-fill');

// Modals
const startScreen = document.getElementById('start-screen');
const levelCompleteModal = document.getElementById('level-complete');
const timeUpModal = document.getElementById('time-up');
const gameCompleteModal = document.getElementById('game-complete');

// Initialize Audio Context
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Play a musical note
function playNote(frequency, duration = 0.3) {
    initAudio();

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Create a falling block
function createBlock() {
    if (!gameState.isPlaying || gameState.isPaused) return;

    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;

    const block = document.createElement('div');
    block.className = 'block';

    // Random color
    const colorIndex = Math.floor(Math.random() * COLORS.length);
    const color = COLORS[colorIndex];
    block.style.background = color.bg;
    block.innerHTML = color.emoji;

    // Random position
    const maxLeft = containerWidth - 80;
    const leftPosition = Math.random() * maxLeft;
    block.style.left = leftPosition + 'px';

    // Set falling animation duration based on level
    const levelConfig = LEVELS[gameState.currentLevel - 1];
    const fallDuration = (containerHeight + 200) / (levelConfig.blockSpeed * 60); // pixels per frame
    block.style.animationDuration = fallDuration + 's';

    // Touch event
    const handleTouch = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Check if block is already popped
        if (block.classList.contains('popped')) return;

        // Pop the block
        popBlock(block, colorIndex);
    };

    block.addEventListener('touchstart', handleTouch, { passive: false });
    block.addEventListener('mousedown', handleTouch);

    // Remove block after animation
    block.addEventListener('animationend', () => {
        if (!block.classList.contains('popped')) {
            block.remove();
        }
    });

    gameContainer.appendChild(block);
    gameState.blocks.push(block);
}

// Pop a block
function playPopSound() {
    const randomNote = PENTATONIC_SCALE[Math.floor(Math.random() * PENTATONIC_SCALE.length)];
    playNote(randomNote, 0.4);
}

function popBlock(block, colorIndex) {
    if (block.classList.contains('popped')) return;

    playPopSound();

    block.classList.add('popped');

    // Increment score
    gameState.score++;
    updateUI();

    // Check if level complete
    if (gameState.score >= gameState.target) {
        setTimeout(() => levelComplete(), 500);
    }

    // Remove block after pop animation
    setTimeout(() => {
        if (block.parentNode) {
            block.remove();
        }
    }, 300);
}

// Update UI
function updateUI() {
    levelDisplay.textContent = gameState.currentLevel;
    scoreDisplay.textContent = gameState.score;
    targetDisplay.textContent = gameState.target;

    // Update progress bar
    const progress = (gameState.score / gameState.target) * 100;
    progressFill.style.width = Math.min(progress, 100) + '%';
}

// Update timer
function updateTimer(deltaTime) {
    if (!gameState.isPlaying || gameState.isPaused) return;

    gameState.timeRemaining -= deltaTime;

    if (gameState.timeRemaining <= 0) {
        gameState.timeRemaining = 0;
        timeUp();
    }

    // Update timer display
    timeDisplay.textContent = Math.ceil(gameState.timeRemaining) + 's';

    // Update timer bar
    const timerProgress = (gameState.timeRemaining / LEVELS[gameState.currentLevel - 1].duration) * 100;
    timerFill.style.width = timerProgress + '%';

    // Update timer color
    if (timerProgress > 50) {
        timerFill.className = 'timer-fill';
    } else if (timerProgress > 25) {
        timerFill.className = 'timer-fill warning';
    } else {
        timerFill.className = 'timer-fill critical';
    }
}

// Start Game
function startGame() {
    gameState.currentLevel = 1;
    gameState.totalScore = 0;
    loadLevel();
}

// Load Level
function loadLevel() {
    const levelConfig = LEVELS[gameState.currentLevel - 1];
    gameState.score = 0;
    gameState.target = levelConfig.target;
    gameState.timeRemaining = levelConfig.duration;
    gameState.isPlaying = true;
    gameState.isPaused = false;

    updateUI();

    // Clear existing blocks
    gameState.blocks.forEach(block => block.remove());
    gameState.blocks = [];

    // Hide all modals
    startScreen.classList.remove('show');
    levelCompleteModal.classList.remove('show');
    timeUpModal.classList.remove('show');
    gameCompleteModal.classList.remove('show');

    // Reset timer bar color
    timerFill.className = 'timer-fill';

    // Start game loop
    gameState.lastFrameTime = performance.now();
    requestAnimationFrame(gameLoop);
}

// Game Loop
let blockSpawnTimer = 0;
const BLOCK_SPAWN_INTERVAL = 1500; // Spawn a block every 1.5 seconds

function gameLoop(currentTime) {
    if (!gameState.isPlaying) return;

    const deltaTime = (currentTime - gameState.lastFrameTime) / 1000;
    gameState.lastFrameTime = currentTime;

    // Update timer
    updateTimer(deltaTime);

    // Spawn blocks
    if (gameState.isPlaying && !gameState.isPaused) {
        blockSpawnTimer += deltaTime * 1000;
        if (blockSpawnTimer >= BLOCK_SPAWN_INTERVAL) {
            createBlock();
            blockSpawnTimer = 0;
        }
    }

    if (gameState.isPlaying) {
        requestAnimationFrame(gameLoop);
    }
}

// Level Complete
function levelComplete() {
    gameState.isPlaying = false;
    gameState.totalScore += gameState.score;

    // Save progress
    saveProgress();

    document.getElementById('level-score').textContent = gameState.score;

    if (gameState.currentLevel >= LEVELS.length) {
        // Game complete
        document.getElementById('total-score').textContent = gameState.totalScore;
        gameCompleteModal.classList.add('show');
    } else {
        // Next level
        levelCompleteModal.classList.add('show');
    }
}

// Time Up
function timeUp() {
    gameState.isPlaying = false;

    // Save progress
    saveProgress();

    document.getElementById('time-up-score').textContent = gameState.score;
    timeUpModal.classList.add('show');
}

// Next Level
function nextLevel() {
    gameState.currentLevel++;
    loadLevel();
}

// Retry Level
function retryLevel() {
    loadLevel();
}

// Play Again
function playAgain() {
    gameState.currentLevel = 1;
    gameState.totalScore = 0;
    loadLevel();
}

// Save Progress
function saveProgress() {
    const progress = {
        currentLevel: gameState.currentLevel,
        totalScore: gameState.totalScore
    };
    localStorage.setItem('cascada-musical-progress', JSON.stringify(progress));
}

// Load Progress
function loadProgress() {
    const saved = localStorage.getItem('cascada-musical-progress');
    if (saved) {
        const progress = JSON.parse(saved);
        if (progress.currentLevel > 1) {
            gameState.currentLevel = Math.min(progress.currentLevel, LEVELS.length);
        }
        gameState.totalScore = progress.totalScore || 0;
    }
}

// Event Listeners
document.getElementById('start-btn').addEventListener('click', () => {
    initAudio();
    startGame();
});

document.getElementById('next-level-btn').addEventListener('click', () => {
    nextLevel();
});

document.getElementById('retry-btn').addEventListener('click', () => {
    retryLevel();
});

document.getElementById('play-again-btn').addEventListener('click', () => {
    playAgain();
});

// Show start screen
startScreen.classList.add('show');

// Load saved progress on init
loadProgress();
