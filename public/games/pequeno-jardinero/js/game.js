// Game State
const GameState = {
    currentLevel: 1,
    currentPlantIndex: 0,
    currentTool: 'water',
    plantState: 'thirsty', // thirsty, pale, weedy, healthy
    plantsCared: 0,
    plantsGoal: 5,
    timeRemaining: 60,
    timerInterval: null,
    levels: [
        { goal: 3, time: 45, plants: ['🌱', '🌿', '🪴'] },
        { goal: 4, time: 50, plants: ['🌻', '🌷', '🌸', '🌼'] },
        { goal: 5, time: 55, plants: ['🌹', '🌺', '🌼', '🌻', '🌷'] },
        { goal: 6, time: 60, plants: ['🌴', '🌳', '🌲', '🎋', '🌵', '🌴'] },
        { goal: 7, time: 65, plants: ['🌻', '🌷', '🌸', '🌹', '🌺', '🌼', '🪻'] }
    ]
};

// Plant emojis by state
const PlantEmojis = {
    thirsty: {
        '🌱': '🍂',
        '🌿': '🍂',
        '🪴': '🍂',
        '🌻': '🥀',
        '🌷': '🥀',
        '🌸': '🥀',
        '🌼': '🥀',
        '🌹': '🥀',
        '🌺': '🥀',
        '🌴': '🍂',
        '🌳': '🍂',
        '🌲': '🍂',
        '🎋': '🍂',
        '🌵': '🍂',
        '🪻': '🥀'
    },
    pale: {
        '🌱': '🌾',
        '🌿': '🌾',
        '🪴': '🌾',
        '🌻': '🌼',
        '🌷': '🌸',
        '🌸': '🌷',
        '🌼': '🌻',
        '🌹': '🌷',
        '🌺': '🌸',
        '🌴': '🌳',
        '🌳': '🌴',
        '🌲': '🌳',
        '🎋': '🌿',
        '🌵': '🌿',
        '🪻': '🌸'
    },
    weedy: {
        '🌱': '🌱🌿',
        '🌿': '🌿🍀',
        '🪴': '🪴🍀',
        '🌻': '🌻🌿',
        '🌷': '🌷🍀',
        '🌸': '🌸🌿',
        '🌼': '🌼🍀',
        '🌹': '🌹🌿',
        '🌺': '🌺🍀',
        '🌴': '🌴🌿',
        '🌳': '🌳🍀',
        '🌲': '🌲🌿',
        '🎋': '🎋🍀',
        '🌵': '🌵🌿',
        '🪻': '🪻🍀'
    },
    healthy: null // No modification when healthy
};

// DOM Elements
const levelDisplay = document.getElementById('level-display');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const timerBar = document.getElementById('timer-bar');
const timerText = document.getElementById('timer-text');
const plantSprite = document.getElementById('plant-sprite');
const tools = document.querySelectorAll('.tool');
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalButton = document.getElementById('modal-button');

// Audio Context for sounds
let audioContext = null;

// Initialize Audio Context
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Play sound effect
function playSound(type) {
    initAudio();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'water':
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
        case 'sun':
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.type = 'triangle';
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.4);
            break;
        case 'weed':
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
            oscillator.type = 'square';
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
            break;
        case 'success':
            oscillator.frequency.setValueAtTime(523, audioContext.currentTime);
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
            setTimeout(() => {
                const osc2 = audioContext.createOscillator();
                const gain2 = audioContext.createGain();
                osc2.connect(gain2);
                gain2.connect(audioContext.destination);
                osc2.frequency.setValueAtTime(659, audioContext.currentTime);
                osc2.type = 'sine';
                gain2.gain.setValueAtTime(0.3, audioContext.currentTime);
                gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                osc2.start(audioContext.currentTime);
                osc2.stop(audioContext.currentTime + 0.5);
            }, 200);
            break;
        case 'levelComplete':
            const notes = [523, 659, 784, 1047];
            notes.forEach((freq, i) => {
                setTimeout(() => {
                    const osc = audioContext.createOscillator();
                    const gain = audioContext.createGain();
                    osc.connect(gain);
                    gain.connect(audioContext.destination);
                    osc.frequency.setValueAtTime(freq, audioContext.currentTime);
                    osc.type = 'sine';
                    gain.gain.setValueAtTime(0.3, audioContext.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
                    osc.start(audioContext.currentTime);
                    osc.stop(audioContext.currentTime + 0.4);
                }, i * 150);
            });
            break;
        case 'gameComplete':
            const finalNotes = [523, 659, 784, 1047, 784, 659, 523];
            finalNotes.forEach((freq, i) => {
                setTimeout(() => {
                    const osc = audioContext.createOscillator();
                    const gain = audioContext.createGain();
                    osc.connect(gain);
                    gain.connect(audioContext.destination);
                    osc.frequency.setValueAtTime(freq, audioContext.currentTime);
                    osc.type = 'sine';
                    gain.gain.setValueAtTime(0.3, audioContext.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
                    osc.start(audioContext.currentTime);
                    osc.stop(audioContext.currentTime + 0.4);
                }, i * 120);
            });
            break;
    }
}

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('pequeno-jardinero-progress');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            GameState.currentLevel = data.level || 1;
        } catch (e) {
            console.error('Error loading progress:', e);
        }
    }
}

// Save progress to localStorage
function saveProgress() {
    const data = {
        level: GameState.currentLevel
    };
    localStorage.setItem('pequeno-jardinero-progress', JSON.stringify(data));
}

// Update UI
function updateUI() {
    levelDisplay.textContent = `Nivel: ${GameState.currentLevel}`;
    progressText.textContent = `${GameState.plantsCared}/${GameState.plantsGoal}`;
    timerText.textContent = `${GameState.timeRemaining}s`;
    
    const progressPercent = (GameState.plantsCared / GameState.plantsGoal) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    const timePercent = (GameState.timeRemaining / GameState.levels[GameState.currentLevel - 1].time) * 100;
    timerBar.style.width = `${timePercent}%`;
    
    // Update timer bar color
    if (timePercent > 50) {
        timerBar.style.background = 'linear-gradient(90deg, #4CAF50 0%, #8BC34A 100%)';
    } else if (timePercent > 25) {
        timerBar.style.background = 'linear-gradient(90deg, #FFC107 0%, #FFEB3B 100%)';
    } else {
        timerBar.style.background = 'linear-gradient(90deg, #F44336 0%, #FF5722 100%)';
    }
    
    updatePlantSprite();
}

// Update plant sprite based on state
function updatePlantSprite() {
    const levelConfig = GameState.levels[GameState.currentLevel - 1];
    const currentPlant = levelConfig.plants[GameState.currentPlantIndex];
    
    if (GameState.plantState === 'healthy') {
        plantSprite.textContent = currentPlant;
    } else {
        plantSprite.textContent = PlantEmojis[GameState.plantState][currentPlant] || currentPlant;
    }
}

// Select a random plant state
function selectRandomState() {
    const states = ['thirsty', 'pale', 'weedy'];
    GameState.plantState = states[Math.floor(Math.random() * states.length)];
    
    // Select random plant
    const levelConfig = GameState.levels[GameState.currentLevel - 1];
    GameState.currentPlantIndex = Math.floor(Math.random() * levelConfig.plants.length);
    
    updatePlantSprite();
}

// Handle tool selection
function selectTool(tool) {
    GameState.currentTool = tool;
    tools.forEach(t => t.classList.remove('active'));
    document.getElementById(`tool-${tool}`).classList.add('active');
}

// Handle plant care
function careForPlant() {
    const correctTool = {
        'thirsty': 'water',
        'pale': 'sun',
        'weedy': 'weed'
    };
    
    if (GameState.currentTool === correctTool[GameState.plantState]) {
        // Correct tool used
        playSound('success');
        GameState.plantsCared++;
        
        if (GameState.plantsCared >= GameState.plantsGoal) {
            // Level complete
            completeLevel();
        } else {
            // Next plant
            selectRandomState();
        }
        
        updateUI();
    } else {
        // Wrong tool
        playSound('weed');
        plantSprite.style.animation = 'shake 0.3s';
        setTimeout(() => {
            plantSprite.style.animation = '';
        }, 300);
    }
}

// Complete level
function completeLevel() {
    clearInterval(GameState.timerInterval);
    playSound('levelComplete');
    
    if (GameState.currentLevel >= GameState.levels.length) {
        // Game complete
        showModal('¡Juego Completado!', '¡Eres un excelente jardinero! 🌻🎉');
        modalButton.onclick = () => {
            modalOverlay.classList.add('hidden');
            resetGame();
        };
    } else {
        // Next level
        showModal('¡Nivel Completado!', `¡Muy bien! Pasando al nivel ${GameState.currentLevel + 1}...`);
        modalButton.onclick = () => {
            modalOverlay.classList.add('hidden');
            GameState.currentLevel++;
            initLevel();
        };
    }
}

// Reset game
function resetGame() {
    GameState.currentLevel = 1;
    saveProgress();
    initLevel();
}

// Show modal
function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalOverlay.classList.remove('hidden');
}

// Timer
function startTimer() {
    const levelConfig = GameState.levels[GameState.currentLevel - 1];
    GameState.timeRemaining = levelConfig.time;
    
    GameState.timerInterval = setInterval(() => {
        GameState.timeRemaining--;
        updateUI();
        
        if (GameState.timeRemaining <= 0) {
            // Time's up
            clearInterval(GameState.timerInterval);
            playSound('weed');
            showModal('¡Tiempo Agotado!', 'Inténtalo de nuevo.');
            modalButton.onclick = () => {
                modalOverlay.classList.add('hidden');
                initLevel();
            };
        }
    }, 1000);
}

// Initialize level
function initLevel() {
    const levelConfig = GameState.levels[GameState.currentLevel - 1];
    GameState.plantsGoal = levelConfig.goal;
    GameState.plantsCared = 0;
    
    selectRandomState();
    updateUI();
    startTimer();
    saveProgress();
}

// Initialize game
function initGame() {
    loadProgress();
    
    // Set up tool listeners
    tools.forEach(tool => {
        tool.addEventListener('click', () => {
            const toolName = tool.getAttribute('data-tool');
            selectTool(toolName);
        });
    });
    
    // Set up plant touch listener
    plantSprite.addEventListener('click', careForPlant);
    plantSprite.addEventListener('touchstart', (e) => {
        e.preventDefault();
        careForPlant();
    });
    
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
    
    // Start game
    initLevel();
}

// Start game when page loads
window.addEventListener('load', initGame);

// Handle visibility change (pause timer when tab is not visible)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(GameState.timerInterval);
    } else if (!modalOverlay.classList.contains('hidden') === false) {
        // Only resume if modal is not showing
        startTimer();
    }
});
