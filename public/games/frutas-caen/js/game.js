// Frutas que Caen - Game Logic

// Game State
const GameState = {
    START: 'start',
    PLAYING: 'playing',
    LEVEL_COMPLETE: 'levelComplete',
    GAME_OVER: 'gameOver',
    GAME_COMPLETE: 'gameComplete'
};

// Fruits Configuration
const FRUITS = [
    { emoji: '🍎', color: '#ff6b6b' },
    { emoji: '🍊', color: '#ffa94d' },
    { emoji: '🍋', color: '#ffd43b' },
    { emoji: '🍇', color: '#9775fa' },
    { emoji: '🍓', color: '#faa2c1' },
    { emoji: '🍑', color: '#ff8787' },
    { emoji: '🍐', color: '#8ce99a' },
    { emoji: '🍒', color: '#ff6b6b' }
];

// Level Configuration
const LEVELS = [
    { level: 1, targetFruits: 10, time: 30, spawnRate: 1500, speed: 2 },
    { level: 2, targetFruits: 15, time: 40, spawnRate: 1300, speed: 2.5 },
    { level: 3, targetFruits: 20, time: 50, spawnRate: 1100, speed: 3 },
    { level: 4, targetFruits: 25, time: 60, spawnRate: 900, speed: 3.5 },
    { level: 5, targetFruits: 30, time: 70, spawnRate: 800, speed: 4 }
];

// Game Variables
let currentState = GameState.START;
let currentLevel = 1;
let fruitsCollected = 0;
let targetFruits = 10;
let timeRemaining = 30;
let maxTime = 30;
let gameInterval = null;
let timerInterval = null;
let spawnInterval = null;
let fruits = [];
let audioContext = null;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const levelCompleteModal = document.getElementById('level-complete-modal');
const gameOverModal = document.getElementById('game-over-modal');
const gameCompleteModal = document.getElementById('game-complete-modal');
const gameArea = document.getElementById('game-area');
const startBtn = document.getElementById('start-btn');
const nextLevelBtn = document.getElementById('next-level-btn');
const retryBtn = document.getElementById('retry-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const backBtn = document.getElementById('back-btn');
const levelDisplay = document.getElementById('level-display');
const fruitsDisplay = document.getElementById('fruits-display');
const progressFill = document.getElementById('progress-fill');
const timerFill = document.getElementById('timer-fill');
const timerText = document.getElementById('timer-text');
const levelIndicator = document.getElementById('level-indicator');

// Initialize Audio Context
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Play Sound
function playSound(frequency, duration = 0.2, type = 'sine') {
    if (!audioContext) {
        initAudio();
    }
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Play Fruit Pop Sound
function playFruitPop() {
    // Random frequency for variety
    const frequency = 400 + Math.random() * 400;
    playSound(frequency, 0.15, 'sine');
    
    // Add harmonics for richer sound
    playSound(frequency * 1.5, 0.1, 'triangle');
}

// Play Level Complete Sound
function playLevelCompleteSound() {
    playSound(523.25, 0.2, 'sine'); // C5
    setTimeout(() => playSound(659.25, 0.2, 'sine'), 150); // E5
    setTimeout(() => playSound(783.99, 0.3, 'sine'), 300); // G5
}

// Play Game Over Sound
function playGameOverSound() {
    playSound(392, 0.3, 'sawtooth'); // G4
    setTimeout(() => playSound(349.23, 0.4, 'sawtooth'), 250); // F4
    setTimeout(() => playSound(293.66, 0.5, 'sawtooth'), 500); // D4
}

// Load Saved Progress
function loadProgress() {
    const saved = localStorage.getItem('frutas-caen-progress');
    if (saved) {
        const progress = JSON.parse(saved);
        currentLevel = Math.min(progress.level || 1, LEVELS.length);
        levelIndicator.textContent = `Nivel actual: ${currentLevel}`;
    } else {
        levelIndicator.textContent = 'Nivel actual: 1';
    }
}

// Save Progress
function saveProgress() {
    const progress = {
        level: currentLevel
    };
    localStorage.setItem('frutas-caen-progress', JSON.stringify(progress));
}

// Initialize Game
function initGame() {
    loadProgress();
    setupEventListeners();
}

// Setup Event Listeners
function setupEventListeners() {
    startBtn.addEventListener('click', startGame);
    nextLevelBtn.addEventListener('click', nextLevel);
    retryBtn.addEventListener('click', retryLevel);
    playAgainBtn.addEventListener('click', resetGame);
    backBtn.addEventListener('click', showStartScreen);
    
    // Touch/mouse events for fruits are set dynamically
}

// Show Start Screen
function showStartScreen() {
    hideAllModals();
    showScreen('start-screen');
    currentState = GameState.START;
}

// Show Screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
}

// Hide All Modals
function hideAllModals() {
    levelCompleteModal.classList.add('hidden');
    gameOverModal.classList.add('hidden');
    gameCompleteModal.classList.add('hidden');
}

// Start Game
function startGame() {
    initAudio();
    fruitsCollected = 0;
    const levelConfig = LEVELS[currentLevel - 1];
    targetFruits = levelConfig.targetFruits;
    timeRemaining = levelConfig.time;
    maxTime = levelConfig.time;
    
    showScreen('game-screen');
    currentState = GameState.PLAYING;
    updateHUD();
    startTimer();
    startSpawning();
}

// Start Timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimer();
        
        if (timeRemaining <= 0) {
            endGame(false);
        }
    }, 1000);
}

// Update Timer Display
function updateTimer() {
    const percentage = (timeRemaining / maxTime) * 100;
    timerFill.style.width = `${percentage}%`;
    timerText.textContent = `${timeRemaining}s`;
    
    // Change color based on time remaining
    timerFill.classList.remove('warning', 'critical');
    if (percentage <= 25) {
        timerFill.classList.add('critical');
    } else if (percentage <= 50) {
        timerFill.classList.add('warning');
    }
}

// Start Spawning Fruits
function startSpawning() {
    const levelConfig = LEVELS[currentLevel - 1];
    spawnFruit(); // Spawn first fruit immediately
    
    spawnInterval = setInterval(() => {
        if (currentState === GameState.PLAYING) {
            spawnFruit();
        }
    }, levelConfig.spawnRate);
}

// Spawn Fruit
function spawnFruit() {
    const levelConfig = LEVELS[currentLevel - 1];
    const fruitData = FRUITS[Math.floor(Math.random() * FRUITS.length)];
    const gameAreaRect = gameArea.getBoundingClientRect();
    
    const fruit = {
        id: Date.now() + Math.random(),
        emoji: fruitData.emoji,
        color: fruitData.color,
        x: Math.random() * (gameAreaRect.width - 60),
        y: -60,
        speed: levelConfig.speed + Math.random() * 1,
        element: null
    };
    
    const fruitElement = document.createElement('div');
    fruitElement.className = 'fruit';
    fruitElement.textContent = fruit.emoji;
    fruitElement.style.left = `${fruit.x}px`;
    fruitElement.style.top = `${fruit.y}px`;
    fruitElement.style.setProperty('--tx', `${(Math.random() - 0.5) * 100}px`);
    fruitElement.style.setProperty('--ty', `${(Math.random() - 0.5) * 100}px`);
    
    fruitElement.addEventListener('click', () => collectFruit(fruit));
    fruitElement.addEventListener('touchstart', (e) => {
        e.preventDefault();
        collectFruit(fruit);
    });
    
    gameArea.appendChild(fruitElement);
    fruit.element = fruitElement;
    fruits.push(fruit);
}

// Collect Fruit
function collectFruit(fruit) {
    if (currentState !== GameState.PLAYING) return;
    
    // Remove fruit from array and DOM
    fruits = fruits.filter(f => f.id !== fruit.id);
    if (fruit.element) {
        createJuiceParticles(fruit.element, fruit.color);
        fruit.element.remove();
    }
    
    // Play sound
    playFruitPop();
    
    // Update count
    fruitsCollected++;
    updateHUD();
    
    // Check level completion
    if (fruitsCollected >= targetFruits) {
        endGame(true);
    }
}

// Create Juice Particles
function createJuiceParticles(element, color) {
    const rect = element.getBoundingClientRect();
    const gameAreaRect = gameArea.getBoundingClientRect();
    const centerX = rect.left - gameAreaRect.left + rect.width / 2;
    const centerY = rect.top - gameAreaRect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'juice-particle';
        
        const size = 8 + Math.random() * 12;
        const angle = (Math.PI * 2 * i) / 12;
        const distance = 50 + Math.random() * 50;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        particle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
        particle.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
        
        gameArea.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => particle.remove(), 800);
    }
}

// Update HUD
function updateHUD() {
    levelDisplay.textContent = currentLevel;
    fruitsDisplay.textContent = `${fruitsCollected} / ${targetFruits}`;
    
    const progressPercentage = (fruitsCollected / targetFruits) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

// Update Fruit Positions
function updateFruits() {
    const gameAreaRect = gameArea.getBoundingClientRect();
    
    fruits.forEach(fruit => {
        fruit.y += fruit.speed;
        
        if (fruit.element) {
            fruit.element.style.top = `${fruit.y}px`;
        }
        
        // Remove fruit if it falls below the game area
        if (fruit.y > gameAreaRect.height) {
            if (fruit.element) {
                fruit.element.remove();
            }
            fruits = fruits.filter(f => f.id !== fruit.id);
        }
    });
}

// Game Loop
function gameLoop() {
    if (currentState === GameState.PLAYING) {
        updateFruits();
    }
    requestAnimationFrame(gameLoop);
}

// End Game
function endGame(won) {
    currentState = won ? GameState.LEVEL_COMPLETE : GameState.GAME_OVER;
    
    // Stop intervals
    clearInterval(timerInterval);
    clearInterval(spawnInterval);
    
    // Clear fruits
    fruits.forEach(fruit => {
        if (fruit.element) {
            fruit.element.remove();
        }
    });
    fruits = [];
    
    if (won) {
        if (currentLevel >= LEVELS.length) {
            // Game complete
            playLevelCompleteSound();
            showGameComplete();
        } else {
            // Level complete
            playLevelCompleteSound();
            showLevelComplete();
        }
    } else {
        playGameOverSound();
        showGameOver();
    }
}

// Show Level Complete
function showLevelComplete() {
    hideAllModals();
    levelCompleteModal.classList.remove('hidden');
}

// Show Game Over
function showGameOver() {
    hideAllModals();
    gameOverModal.classList.remove('hidden');
}

// Show Game Complete
function showGameComplete() {
    hideAllModals();
    gameCompleteModal.classList.remove('hidden');
}

// Next Level
function nextLevel() {
    currentLevel++;
    saveProgress();
    hideAllModals();
    startGame();
}

// Retry Level
function retryLevel() {
    hideAllModals();
    startGame();
}

// Reset Game
function resetGame() {
    currentLevel = 1;
    saveProgress();
    hideAllModals();
    showStartScreen();
}

// Initialize
initGame();
gameLoop();
