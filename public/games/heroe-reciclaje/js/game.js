// Héroe del Reciclaje - Game Logic
// El Bebe Games

// Game State
const gameState = {
    currentLevel: 1,
    sortedCount: 0,
    targetCount: 10,
    timeRemaining: 60,
    maxTime: 60,
    timerInterval: null,
    trashItems: [],
    activeTrash: null,
    isDragging: false,
    dragOffsetX: 0,
    dragOffsetY: 0,
    isPaused: true
};

// Trash Types & Icons
const trashTypes = {
    paper: ['📄', '📰', '📧', '📦', '🎫'],
    plastic: ['🧴', '🥤', '🥡', '🧴', '🍾'],
    glass: ['🍾', '🥛', '🍺', '🥃', '🍷'],
    organic: ['🍎', '🍌', '🥕', '🍞', '🍖']
};

// DOM Elements
const conveyorBelt = document.getElementById('conveyor-belt');
const levelDisplay = document.getElementById('level-display');
const sortedCountDisplay = document.getElementById('sorted-count');
const targetCountDisplay = document.getElementById('target-count');
const timerDisplay = document.getElementById('timer-display');
const timerBar = document.getElementById('timer-bar');
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalButton = document.getElementById('modal-button');
const bins = document.querySelectorAll('.bin');

// Audio Context for Sounds
let audioContext = null;

// Initialize Audio
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Play Sound Effect
function playSound(type) {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    switch(type) {
        case 'correct':
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialDecayTo(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
        case 'wrong':
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(150, audioContext.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialDecayTo(0.01, audioContext.currentTime + 0.2);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
            break;
        case 'pickup':
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(500, audioContext.currentTime + 0.05);
            gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
            gainNode.gain.exponentialDecayTo(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
            break;
        case 'levelComplete':
            const frequencies = [523.25, 659.25, 783.99, 1046.50];
            frequencies.forEach((freq, i) => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.2, audioContext.currentTime + i * 0.15);
                gain.gain.exponentialDecayTo(0.01, audioContext.currentTime + i * 0.15 + 0.3);
                osc.start(audioContext.currentTime + i * 0.15);
                osc.stop(audioContext.currentTime + i * 0.15 + 0.3);
            });
            break;
    }
}

// Show Feedback Particle
function showFeedback(x, y, emoji) {
    const particle = document.createElement('div');
    particle.className = 'feedback-particle';
    particle.textContent = emoji;
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
}

// Load Game State from localStorage
function loadGameState() {
    const saved = localStorage.getItem('heroe-reciclaje-progress');
    if (saved) {
        const parsed = JSON.parse(saved);
        gameState.currentLevel = parsed.level || 1;
    }
}

// Save Game State to localStorage
function saveGameState() {
    localStorage.setItem('heroe-reciclaje-progress', JSON.stringify({
        level: gameState.currentLevel
    }));
}

// Get Level Configuration
function getLevelConfig(level) {
    const configs = {
        1: { target: 10, time: 60, types: ['paper', 'plastic'], speed: 2 },
        2: { target: 12, time: 55, types: ['paper', 'plastic', 'glass'], speed: 2.5 },
        3: { target: 15, time: 50, types: ['plastic', 'glass', 'organic'], speed: 3 },
        4: { target: 18, time: 45, types: ['paper', 'glass', 'organic'], speed: 3.5 },
        5: { target: 20, time: 40, types: ['paper', 'plastic', 'glass', 'organic'], speed: 4 }
    };
    return configs[level] || configs[5];
}

// Create Trash Item
function createTrashItem() {
    const config = getLevelConfig(gameState.currentLevel);
    const randomType = config.types[Math.floor(Math.random() * config.types.length)];
    const icons = trashTypes[randomType];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    const trashItem = document.createElement('div');
    trashItem.className = 'trash-item';
    trashItem.textContent = randomIcon;
    trashItem.dataset.type = randomType;
    trashItem.dataset.left = Math.random() * 60 + 20; // Random position 20-80%

    conveyorBelt.appendChild(trashItem);
    gameState.trashItems.push(trashItem);

    // Add touch/mouse events
    setupDragEvents(trashItem);
}

// Setup Drag Events for Trash Item
function setupDragEvents(trashItem) {
    let startX, startY;

    const onStart = (e) => {
        if (gameState.isPaused) return;
        initAudio();
        e.preventDefault();

        const touch = e.touches ? e.touches[0] : e;
        startX = touch.clientX;
        startY = touch.clientY;

        gameState.isDragging = true;
        gameState.activeTrash = trashItem;

        const rect = trashItem.getBoundingClientRect();
        gameState.dragOffsetX = touch.clientX - rect.left;
        gameState.dragOffsetY = touch.clientY - rect.top;

        trashItem.classList.add('dragging');
        trashItem.style.left = rect.left + 'px';
        trashItem.style.top = rect.top + 'px';
        trashItem.style.position = 'fixed';

        playSound('pickup');
        highlightBin(trashItem.dataset.type);
    };

    const onMove = (e) => {
        if (!gameState.isDragging || !gameState.activeTrash) return;
        e.preventDefault();

        const touch = e.touches ? e.touches[0] : e;
        gameState.activeTrash.style.left = (touch.clientX - gameState.dragOffsetX) + 'px';
        gameState.activeTrash.style.top = (touch.clientY - gameState.dragOffsetY) + 'px';
    };

    const onEnd = (e) => {
        if (!gameState.isDragging || !gameState.activeTrash) return;
        e.preventDefault();

        const touch = e.changedTouches ? e.changedTouches[0] : e;
        checkDrop(touch.clientX, touch.clientY);

        gameState.isDragging = false;
        gameState.activeTrash.classList.remove('dragging');

        // Clear bin highlights
        bins.forEach(bin => bin.classList.remove('highlight'));
    };

    // Touch events
    trashItem.addEventListener('touchstart', onStart, { passive: false });
    trashItem.addEventListener('touchmove', onMove, { passive: false });
    trashItem.addEventListener('touchend', onEnd, { passive: false });

    // Mouse events
    trashItem.addEventListener('mousedown', onStart);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
}

// Highlight Correct Bin
function highlightBin(trashType) {
    bins.forEach(bin => {
        if (bin.dataset.type === trashType) {
            bin.classList.add('highlight');
        }
    });
}

// Check Drop on Bin
function checkDrop(x, y) {
    if (!gameState.activeTrash) return;

    const trashType = gameState.activeTrash.dataset.type;
    let dropped = false;

    bins.forEach(bin => {
        const rect = bin.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
            dropped = true;

            if (bin.dataset.type === trashType) {
                // Correct bin
                playSound('correct');
                showFeedback(x, y, '✅');
                gameState.sortedCount++;
                updateHUD();
                removeTrashItem(gameState.activeTrash);
                checkLevelComplete();
            } else {
                // Wrong bin
                playSound('wrong');
                showFeedback(x, y, '❌');
                gameState.activeTrash.classList.add('wrong');
                setTimeout(() => {
                    if (gameState.activeTrash) {
                        gameState.activeTrash.classList.remove('wrong');
                    }
                }, 500);
            }
        }
    });
}

// Remove Trash Item
function removeTrashItem(trashItem) {
    const index = gameState.trashItems.indexOf(trashItem);
    if (index > -1) {
        gameState.trashItems.splice(index, 1);
    }
    trashItem.remove();
    gameState.activeTrash = null;
}

// Update HUD
function updateHUD() {
    levelDisplay.textContent = gameState.currentLevel;
    sortedCountDisplay.textContent = gameState.sortedCount;
    targetCountDisplay.textContent = gameState.targetCount;
    timerDisplay.textContent = gameState.timeRemaining + 's';

    // Update timer bar color based on time remaining
    const timePercentage = (gameState.timeRemaining / gameState.maxTime) * 100;
    timerBar.style.width = timePercentage + '%';

    if (timePercentage > 50) {
        timerBar.style.background = 'linear-gradient(90deg, #4caf50, #8bc34a)';
    } else if (timePercentage > 25) {
        timerBar.style.background = 'linear-gradient(90deg, #ff9800, #ffb74d)';
    } else {
        timerBar.style.background = 'linear-gradient(90deg, #f44336, #ef5350)';
    }
}

// Update Timer
function updateTimer() {
    if (gameState.isPaused) return;

    gameState.timeRemaining--;
    updateHUD();

    if (gameState.timeRemaining <= 0) {
        gameOver();
    }
}

// Check Level Complete
function checkLevelComplete() {
    if (gameState.sortedCount >= gameState.targetCount) {
        levelComplete();
    }
}

// Level Complete
function levelComplete() {
    gameState.isPaused = true;
    clearInterval(gameState.timerInterval);
    playSound('levelComplete');

    if (gameState.currentLevel < 5) {
        showModal('¡Nivel Completado!', `¡Excelente! Completaste el nivel ${gameState.currentLevel}.`, 'Siguiente Nivel');
    } else {
        showModal('¡Juego Completado!', '¡Felicidades! Eres un verdadero Héroe del Reciclaje.', 'Jugar de Nuevo');
    }
}

// Game Over
function gameOver() {
    gameState.isPaused = true;
    clearInterval(gameState.timerInterval);
    showModal('¡Tiempo Agotado!', `Reciclaste ${gameState.sortedCount} de ${gameState.targetCount} objetos.`, 'Reintentar');
}

// Show Modal
function showModal(title, message, buttonText) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalButton.textContent = buttonText;
    modalOverlay.classList.remove('hidden');
}

// Hide Modal
function hideModal() {
    modalOverlay.classList.add('hidden');
}

// Start Next Level
function startNextLevel() {
    gameState.currentLevel++;
    gameState.sortedCount = 0;

    if (gameState.currentLevel > 5) {
        gameState.currentLevel = 1;
        saveGameState();
        startGame();
        return;
    }

    saveGameState();
    startGame();
}

// Restart Game
function restartGame() {
    gameState.currentLevel = 1;
    gameState.sortedCount = 0;
    saveGameState();
    startGame();
}

// Start Game
function startGame() {
    // Clear existing trash
    gameState.trashItems.forEach(trash => trash.remove());
    gameState.trashItems = [];
    gameState.activeTrash = null;

    // Get level config
    const config = getLevelConfig(gameState.currentLevel);
    gameState.targetCount = config.target;
    gameState.timeRemaining = config.time;
    gameState.maxTime = config.time;

    updateHUD();

    // Clear timer
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }

    // Spawn trash items
    conveyorBelt.innerHTML = '';
    for (let i = 0; i < gameState.targetCount; i++) {
        createTrashItem();
    }

    // Animate conveyor belt
    animateTrashItems(config.speed);

    // Start timer
    gameState.isPaused = false;
    gameState.timerInterval = setInterval(updateTimer, 1000);
}

// Animate Trash Items on Conveyor Belt
function animateTrashItems(speed) {
    const beltWidth = conveyorBelt.offsetWidth;

    const animate = () => {
        if (gameState.isPaused) {
            requestAnimationFrame(animate);
            return;
        }

        gameState.trashItems.forEach(trash => {
            if (trash.classList.contains('dragging')) return;

            let left = parseFloat(trash.dataset.left);
            left += speed * 0.1;

            if (left > 100) {
                left = -20;
            }

            trash.dataset.left = left;
            trash.style.left = left + '%';
        });

        requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
}

// Modal Button Click Handler
modalButton.addEventListener('click', () => {
    hideModal();
    if (modalButton.textContent === 'Siguiente Nivel') {
        startNextLevel();
    } else if (modalButton.textContent === 'Jugar de Nuevo') {
        restartGame();
    } else {
        restartGame();
    }
});

// Initialize Game
function init() {
    loadGameState();
    startGame();
}

// Start game when page loads
window.addEventListener('load', init);
