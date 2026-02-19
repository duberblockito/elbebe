// Game Configuration
const CONFIG = {
    STORAGE_KEY: 'formas-rebotan-progress',
    INITIAL_SHAPES: 5,
    MAX_SHAPES: 15,
    MIN_SIZE: 50,
    MAX_SIZE: 90,
    MIN_SPEED: 1,
    MAX_SPEED: 3,
    COLORS: ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6'],
    SIZES: ['size-small', 'size-medium', 'size-large'],
    SHAPES: ['circle', 'square', 'triangle']
};

// Game State
let gameState = {
    shapes: [],
    touchCount: 0,
    startTime: null,
    highScore: 0
};

// Audio Context
let audioContext = null;

// DOM Elements
const elements = {
    shapeCount: document.getElementById('shape-count'),
    time: document.getElementById('time'),
    highScore: document.getElementById('high-score'),
    shapesContainer: document.getElementById('shapes-container'),
    modalInstructions: document.getElementById('modal-instructions'),
    btnStart: document.getElementById('btn-start'),
    btnAddShape: document.getElementById('btn-add-shape'),
    btnReset: document.getElementById('btn-reset')
};

// Initialize Game
function init() {
    loadProgress();
    setupEventListeners();
    showInstructions();
}

// Load Progress from LocalStorage
function loadProgress() {
    const savedProgress = localStorage.getItem(CONFIG.STORAGE_KEY);
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        gameState.highScore = progress.highScore || 0;
    }
    updateHUD();
}

// Save Progress to LocalStorage
function saveProgress() {
    const progress = {
        highScore: gameState.highScore
    };
    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(progress));
}

// Setup Event Listeners
function setupEventListeners() {
    elements.btnStart.addEventListener('click', startGame);
    elements.btnAddShape.addEventListener('click', addShape);
    elements.btnReset.addEventListener('click', resetGame);

    // Prevent context menu on long press
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
}

// Show Instructions
function showInstructions() {
    showModal(elements.modalInstructions);
}

// Start Game
function startGame() {
    hideModal(elements.modalInstructions);
    initAudio();
    
    gameState.shapes = [];
    gameState.touchCount = 0;
    gameState.startTime = Date.now();
    
    elements.shapesContainer.innerHTML = '';
    
    // Create initial shapes
    for (let i = 0; i < CONFIG.INITIAL_SHAPES; i++) {
        createShape();
    }
    
    updateHUD();
    startAnimationLoop();
    startTimer();
}

// Initialize Audio
function initAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
        console.log('Audio not supported');
    }
}

// Play Giggle Sound
function playGiggleSound() {
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Random pitch for variety
    const baseFrequency = 400 + Math.random() * 400;
    oscillator.frequency.setValueAtTime(baseFrequency, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(baseFrequency * 1.5, audioContext.currentTime + 0.1);
    oscillator.frequency.exponentialRampToValueAtTime(baseFrequency, audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.type = 'sine';
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Create Shape
function createShape() {
    if (gameState.shapes.length >= CONFIG.MAX_SHAPES) return;
    
    const shapeType = CONFIG.SHAPES[Math.floor(Math.random() * CONFIG.SHAPES.length)];
    const colorClass = CONFIG.COLORS[Math.floor(Math.random() * CONFIG.COLORS.length)];
    const sizeClass = CONFIG.SIZES[Math.floor(Math.random() * CONFIG.SIZES.length)];
    
    const shape = {
        id: Date.now() + Math.random(),
        type: shapeType,
        colorClass: colorClass,
        sizeClass: sizeClass,
        x: Math.random() * (window.innerWidth - 100) + 50,
        y: Math.random() * (window.innerHeight - 200) + 50,
        vx: (Math.random() - 0.5) * CONFIG.MAX_SPEED * 2,
        vy: (Math.random() - 0.5) * CONFIG.MAX_SPEED * 2,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 5
    };
    
    gameState.shapes.push(shape);
    
    const shapeElement = document.createElement('div');
    shapeElement.className = `shape ${shapeType} ${colorClass} ${sizeClass}`;
    shapeElement.dataset.id = shape.id;
    
    // Add touch/click handler
    const handleTouch = (e) => {
        e.preventDefault();
        handleShapeTouch(shape, shapeElement);
    };
    
    shapeElement.addEventListener('click', handleTouch);
    shapeElement.addEventListener('touchstart', handleTouch);
    
    elements.shapesContainer.appendChild(shapeElement);
    
    updateHUD();
}

// Handle Shape Touch
function handleShapeTouch(shape, element) {
    // Play giggle sound
    playGiggleSound();
    
    // Increment touch count
    gameState.touchCount++;
    
    // Update high score
    if (gameState.touchCount > gameState.highScore) {
        gameState.highScore = gameState.touchCount;
        saveProgress();
    }
    
    // Add laughing animation
    element.classList.add('laughing');
    setTimeout(() => {
        element.classList.remove('laughing');
    }, 500);
    
    // Change direction randomly
    shape.vx = (Math.random() - 0.5) * CONFIG.MAX_SPEED * 2;
    shape.vy = (Math.random() - 0.5) * CONFIG.MAX_SPEED * 2;
    
    // Change color
    const newColorClass = CONFIG.COLORS[Math.floor(Math.random() * CONFIG.COLORS.length)];
    element.classList.remove(shape.colorClass);
    shape.colorClass = newColorClass;
    element.classList.add(newColorClass);
    
    updateHUD();
}

// Add Shape
function addShape() {
    createShape();
}

// Reset Game
function resetGame() {
    gameState.shapes = [];
    gameState.touchCount = 0;
    gameState.startTime = Date.now();
    
    elements.shapesContainer.innerHTML = '';
    
    for (let i = 0; i < CONFIG.INITIAL_SHAPES; i++) {
        createShape();
    }
    
    updateHUD();
}

// Animation Loop
let animationFrameId = null;

function startAnimationLoop() {
    function animate() {
        updateShapes();
        renderShapes();
        animationFrameId = requestAnimationFrame(animate);
    }
    animate();
}

// Update Shapes
function updateShapes() {
    gameState.shapes.forEach(shape => {
        // Update position
        shape.x += shape.vx;
        shape.y += shape.vy;
        
        // Update rotation
        shape.rotation += shape.rotationSpeed;
        
        // Bounce off walls
        const containerWidth = elements.shapesContainer.offsetWidth;
        const containerHeight = elements.shapesContainer.offsetHeight;
        
        if (shape.x <= 0 || shape.x >= containerWidth - 90) {
            shape.vx *= -1;
            shape.x = Math.max(0, Math.min(shape.x, containerWidth - 90));
        }
        
        if (shape.y <= 0 || shape.y >= containerHeight - 90) {
            shape.vy *= -1;
            shape.y = Math.max(0, Math.min(shape.y, containerHeight - 90));
        }
    });
}

// Render Shapes
function renderShapes() {
    gameState.shapes.forEach(shape => {
        const element = document.querySelector(`.shape[data-id="${shape.id}"]`);
        if (element) {
            element.style.left = shape.x + 'px';
            element.style.top = shape.y + 'px';
            element.style.transform = `rotate(${shape.rotation}deg)`;
        }
    });
}

// Timer
let timerInterval = null;

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timerInterval = setInterval(() => {
        if (gameState.startTime) {
            const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            elements.time.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

// Update HUD
function updateHUD() {
    elements.shapeCount.textContent = gameState.shapes.length;
    elements.highScore.textContent = gameState.highScore;
}

// Show Modal
function showModal(modal) {
    modal.classList.remove('hidden');
}

// Hide Modal
function hideModal(modal) {
    modal.classList.add('hidden');
}

// Handle Resize
window.addEventListener('resize', () => {
    // Keep shapes within bounds
    gameState.shapes.forEach(shape => {
        const containerWidth = elements.shapesContainer.offsetWidth;
        const containerHeight = elements.shapesContainer.offsetHeight;
        
        shape.x = Math.max(0, Math.min(shape.x, containerWidth - 90));
        shape.y = Math.max(0, Math.min(shape.y, containerHeight - 90));
    });
});

// Start game when DOM is ready
document.addEventListener('DOMContentLoaded', init);
