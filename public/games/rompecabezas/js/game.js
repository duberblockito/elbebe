// Rompecabezas Simple - Juego para niños 2-3 años
// Blockito AI - 2026-02-18

// Game State
const gameState = {
    currentLevel: 1,
    totalLevels: 5,
    piecesFixed: 0,
    piecesTarget: 2,
    timeRemaining: 30,
    maxTime: 30,
    pieces: [],
    slots: [],
    puzzleComplete: false,
    timerInterval: null,
    audioContext: null,
    confettiParticles: []
};

// Level Configuration
const levels = [
    { pieces: 2, time: 30, animals: ['dog', 'cat'] },
    { pieces: 3, time: 40, animals: ['dog', 'cat', 'cow'] },
    { pieces: 4, time: 50, animals: ['dog', 'cat', 'cow', 'pig'] },
    { pieces: 5, time: 60, animals: ['dog', 'cat', 'cow', 'pig', 'sheep'] },
    { pieces: 6, time: 70, animals: ['dog', 'cat', 'cow', 'pig', 'sheep', 'horse'] }
];

// Animal Parts (pieces)
const animalParts = [
    { emoji: '🐕', class: 'head', name: 'Cabeza' },
    { emoji: '🐱', class: 'body', name: 'Cuerpo' },
    { emoji: '🐄', class: 'front-leg', name: 'Pata' },
    { emoji: '🐖', class: 'back-leg', name: 'Pata' },
    { emoji: '🐑', class: 'tail', name: 'Cola' },
    { emoji: '🐴', class: 'ear', name: 'Oreja' }
];

// Animal Slot Positions (grid layout)
function getSlotPositions(count) {
    const containerWidth = 300;
    const containerHeight = 400;
    const positions = [];

    if (count === 2) {
        positions.push(
            { x: containerWidth / 2 - 35, y: containerHeight / 2 - 35 },
            { x: containerWidth / 2 - 35, y: containerHeight / 2 + 50 }
        );
    } else if (count === 3) {
        positions.push(
            { x: containerWidth / 2 - 35, y: containerHeight / 2 - 80 },
            { x: containerWidth / 2 - 35, y: containerHeight / 2 - 35 },
            { x: containerWidth / 2 - 35, y: containerHeight / 2 + 50 }
        );
    } else if (count === 4) {
        positions.push(
            { x: containerWidth / 2 - 80, y: containerHeight / 2 - 35 },
            { x: containerWidth / 2 + 10, y: containerHeight / 2 - 35 },
            { x: containerWidth / 2 - 80, y: containerHeight / 2 + 50 },
            { x: containerWidth / 2 + 10, y: containerHeight / 2 + 50 }
        );
    } else if (count === 5) {
        positions.push(
            { x: containerWidth / 2 - 35, y: containerHeight / 2 - 100 },
            { x: containerWidth / 2 - 80, y: containerHeight / 2 - 35 },
            { x: containerWidth / 2 + 10, y: containerHeight / 2 - 35 },
            { x: containerWidth / 2 - 80, y: containerHeight / 2 + 50 },
            { x: containerWidth / 2 + 10, y: containerHeight / 2 + 50 }
        );
    } else if (count === 6) {
        positions.push(
            { x: containerWidth / 2 - 80, y: containerHeight / 2 - 80 },
            { x: containerWidth / 2 + 10, y: containerHeight / 2 - 80 },
            { x: containerWidth / 2 - 80, y: containerHeight / 2 - 10 },
            { x: containerWidth / 2 + 10, y: containerHeight / 2 - 10 },
            { x: containerWidth / 2 - 80, y: containerHeight / 2 + 60 },
            { x: containerWidth / 2 + 10, y: containerHeight / 2 + 60 }
        );
    }

    return positions;
}

// Audio Context (for sound effects)
function initAudio() {
    if (!gameState.audioContext) {
        gameState.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Play sound effect
function playSound(type) {
    if (!gameState.audioContext) return;

    const oscillator = gameState.audioContext.createOscillator();
    const gainNode = gameState.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(gameState.audioContext.destination);

    if (type === 'click') {
        // Click sound (high pitch, short)
        oscillator.frequency.setValueAtTime(800, gameState.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, gameState.audioContext.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.3, gameState.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, gameState.audioContext.currentTime + 0.1);
        oscillator.start(gameState.audioContext.currentTime);
        oscillator.stop(gameState.audioContext.currentTime + 0.1);
    } else if (type === 'clack') {
        // Clack sound (if piece already fixed)
        oscillator.frequency.setValueAtTime(400, gameState.audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.2, gameState.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, gameState.audioContext.currentTime + 0.05);
        oscillator.start(gameState.audioContext.currentTime);
        oscillator.stop(gameState.audioContext.currentTime + 0.05);
    } else if (type === 'levelComplete') {
        // Level complete sound (ascending notes)
        oscillator.frequency.setValueAtTime(523.25, gameState.audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659.25, gameState.audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(783.99, gameState.audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, gameState.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, gameState.audioContext.currentTime + 0.4);
        oscillator.start(gameState.audioContext.currentTime);
        oscillator.stop(gameState.audioContext.currentTime + 0.4);
    } else if (type === 'gameComplete') {
        // Game complete sound (fanfare)
        oscillator.frequency.setValueAtTime(523.25, gameState.audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659.25, gameState.audioContext.currentTime + 0.15);
        oscillator.frequency.setValueAtTime(783.99, gameState.audioContext.currentTime + 0.3);
        oscillator.frequency.setValueAtTime(1046.50, gameState.audioContext.currentTime + 0.45);
        gainNode.gain.setValueAtTime(0.4, gameState.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, gameState.audioContext.currentTime + 0.6);
        oscillator.start(gameState.audioContext.currentTime);
        oscillator.stop(gameState.audioContext.currentTime + 0.6);
    }
}

// Text-to-Speech
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

// Shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Generate random position for pieces
function getRandomPosition() {
    const container = document.getElementById('puzzle-container');
    const maxX = container.offsetWidth - 70;
    const maxY = container.offsetHeight - 70;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    return { x, y };
}

// Create puzzle slots (guides)
function createPuzzleSlots(count) {
    const container = document.getElementById('puzzle-container');
    const positions = getSlotPositions(count);

    gameState.slots = [];

    for (let i = 0; i < count; i++) {
        const slot = document.createElement('div');
        slot.className = 'puzzle-slot';
        slot.dataset.index = i;
        slot.style.left = positions[i].x + 'px';
        slot.style.top = positions[i].y + 'px';
        slot.textContent = animalParts[i].emoji;
        container.appendChild(slot);

        gameState.slots.push({
            element: slot,
            x: positions[i].x,
            y: positions[i].y,
            index: i
        });
    }
}

// Create puzzle pieces
function createPuzzlePieces(count) {
    const container = document.getElementById('puzzle-container');

    gameState.pieces = [];

    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = `puzzle-piece ${animalParts[i].class}`;
        piece.dataset.index = i;
        piece.textContent = animalParts[i].emoji;

        // Random position
        const pos = getRandomPosition();
        piece.style.left = pos.x + 'px';
        piece.style.top = pos.y + 'px';

        // Add event listener
        piece.addEventListener('click', () => handlePieceClick(piece, i));
        piece.addEventListener('touchstart', (e) => {
            e.preventDefault();
            handlePieceClick(piece, i);
        });

        container.appendChild(piece);

        gameState.pieces.push({
            element: piece,
            index: i,
            fixed: false,
            x: pos.x,
            y: pos.y
        });
    }
}

// Handle piece click
function handlePieceClick(piece, index) {
    if (gameState.puzzleComplete) return;

    const pieceData = gameState.pieces[index];

    // Check if already fixed
    if (pieceData.fixed) {
        playSound('clack');
        speak('¡Ya está en su lugar!');
        return;
    }

    // Speak piece name
    speak(animalParts[index].name);

    // Animate to correct position
    animatePieceToSlot(piece, index);
}

// Animate piece to slot
function animatePieceToSlot(piece, index) {
    const slot = gameState.slots[index];
    const pieceData = gameState.pieces[index];

    // Get slot position
    const slotX = slot.x;
    const slotY = slot.y;

    // Animate to slot (bezier curve)
    piece.style.transition = 'all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
    piece.style.left = slotX + 'px';
    piece.style.top = slotY + 'px';

    // After animation
    setTimeout(() => {
        playSound('click');
        piece.classList.add('snapped');
        pieceData.fixed = true;
        gameState.piecesFixed++;

        // Update HUD
        updateHUD();

        // Check if level complete
        if (gameState.piecesFixed >= gameState.piecesTarget) {
            completeLevel();
        }
    }, 600);
}

// Update HUD
function updateHUD() {
    document.getElementById('level-number').textContent = gameState.currentLevel;
    document.getElementById('pieces-fixed').textContent = gameState.piecesFixed;
    document.getElementById('pieces-target').textContent = gameState.piecesTarget;
    document.getElementById('timer-text').textContent = gameState.timeRemaining + 's';

    // Update timer bar
    const timerBar = document.getElementById('timer-bar');
    const percentage = (gameState.timeRemaining / gameState.maxTime) * 100;
    timerBar.style.setProperty('--before-width', percentage + '%');

    // Update timer bar color based on remaining time
    timerBar.classList.remove('green', 'yellow', 'red');
    if (percentage > 60) {
        timerBar.classList.add('green');
    } else if (percentage > 30) {
        timerBar.classList.add('yellow');
    } else {
        timerBar.classList.add('red');
    }
}

// Update timer bar width
function updateTimerBar() {
    const timerBar = document.getElementById('timer-bar');
    const percentage = (gameState.timeRemaining / gameState.maxTime) * 100;
    timerBar.style.background = `linear-gradient(90deg, ${percentage > 30 ? '#4CAF50' : '#FF5722'} 0%, ${percentage > 30 ? '#8BC34A' : '#E91E63'} ${percentage}%, #e0e0e0 ${percentage}%)`;
}

// Start timer
function startTimer() {
    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining--;
        updateHUD();

        if (gameState.timeRemaining <= 0) {
            clearInterval(gameState.timerInterval);
            showTimeUpModal();
        }
    }, 1000);
}

// Complete level
function completeLevel() {
    clearInterval(gameState.timerInterval);
    gameState.puzzleComplete = true;

    playSound('levelComplete');
    speak('¡Muy bien!');
    createConfetti();

    setTimeout(() => {
        if (gameState.currentLevel >= gameState.totalLevels) {
            showGameCompleteModal();
        } else {
            showLevelCompleteModal();
        }
    }, 2000);
}

// Show level complete modal
function showLevelCompleteModal() {
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const message = document.getElementById('modal-message');
    const button = document.getElementById('modal-button');

    title.textContent = '¡Nivel Completado! 🎉';
    message.textContent = `¡Excelente! Completaste el nivel ${gameState.currentLevel}.`;
    button.textContent = 'Siguiente Nivel';

    button.onclick = () => {
        overlay.classList.add('hidden');
        nextLevel();
    };

    overlay.classList.remove('hidden');
}

// Show time up modal
function showTimeUpModal() {
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const message = document.getElementById('modal-message');
    const button = document.getElementById('modal-button');

    title.textContent = '¡Se Acabó el Tiempo! ⏰';
    message.textContent = '¡No te rindas! Inténtalo de nuevo.';
    button.textContent = 'Reintentar';

    button.onclick = () => {
        overlay.classList.add('hidden');
        retryLevel();
    };

    overlay.classList.remove('hidden');
}

// Show game complete modal
function showGameCompleteModal() {
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const message = document.getElementById('modal-message');
    const button = document.getElementById('modal-button');

    title.textContent = '¡Juego Completado! 🏆';
    message.textContent = '¡Felicidades! Completaste todos los niveles del juego.';
    button.textContent = 'Jugar de Nuevo';

    button.onclick = () => {
        overlay.classList.add('hidden');
        resetGame();
    };

    overlay.classList.remove('hidden');
}

// Next level
function nextLevel() {
    gameState.currentLevel++;
    saveProgress();
    startLevel();
}

// Retry level
function retryLevel() {
    startLevel();
}

// Reset game
function resetGame() {
    gameState.currentLevel = 1;
    saveProgress();
    startLevel();
}

// Start level
function startLevel() {
    // Clear previous level
    clearInterval(gameState.timerInterval);
    clearPuzzle();

    // Get level config
    const levelConfig = levels[gameState.currentLevel - 1];
    gameState.piecesTarget = levelConfig.pieces;
    gameState.maxTime = levelConfig.time;
    gameState.timeRemaining = levelConfig.time;
    gameState.piecesFixed = 0;
    gameState.puzzleComplete = false;

    // Create puzzle
    createPuzzleSlots(levelConfig.pieces);
    createPuzzlePieces(levelConfig.pieces);

    // Update HUD
    updateHUD();

    // Start timer
    startTimer();

    // Speak level start
    speak(`Nivel ${gameState.currentLevel}`);
}

// Clear puzzle
function clearPuzzle() {
    const container = document.getElementById('puzzle-container');
    container.innerHTML = '';
    gameState.pieces = [];
    gameState.slots = [];
}

// Create confetti
function createConfetti() {
    const colors = ['#FF5252', '#FF9800', '#4CAF50', '#2196F3', '#9C27B0', '#FFEB3B'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.getElementById('game-container').appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Save progress
function saveProgress() {
    const progress = {
        currentLevel: gameState.currentLevel,
        maxLevel: Math.max(gameState.currentLevel, localStorage.getItem('rompecabezas-maxLevel') || 1)
    };
    localStorage.setItem('rompecabezas-progress', JSON.stringify(progress));
    localStorage.setItem('rompecabezas-maxLevel', progress.maxLevel);
}

// Load progress
function loadProgress() {
    const saved = localStorage.getItem('rompecabezas-progress');
    if (saved) {
        const progress = JSON.parse(saved);
        gameState.currentLevel = progress.currentLevel;
    }
}

// Initialize game
function initGame() {
    initAudio();
    loadProgress();
    startLevel();
}

// Start game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);
