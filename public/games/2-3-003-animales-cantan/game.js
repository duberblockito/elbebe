// Los Animales Cantan - Game Logic
const PROGRESS_KEY = 'animales-cantan-progress';

// Audio Context for synthesized sounds
let audioContext;

// Game State
const state = {
    currentLevel: 1,
    touchedCount: 0,
    targetCount: 4,
    timeRemaining: 30,
    maxTime: 30,
    sequence: [],
    sequenceIndex: 0,
    isPlayingSequence: false,
    timerInterval: null,
    unlockedLevels: 1,
    levelStars: {},
    gameActive: false
};

// Animals with their notes and emojis
const animals = [
    { id: 0, emoji: '🐵', note: 261.63, name: 'Do' },      // C4
    { id: 1, emoji: '🐶', note: 293.66, name: 'Re' },      // D4
    { id: 2, emoji: '🐱', note: 329.63, name: 'Mi' },      // E4
    { id: 3, emoji: '🐰', note: 349.23, name: 'Fa' },      // F4
    { id: 4, emoji: '🐼', note: 392.00, name: 'Sol' },     // G4
    { id: 5, emoji: '🦁', note: 440.00, name: 'La' },      // A4
    { id: 6, emoji: '🐸', note: 493.88, name: 'Si' },      // B4
    { id: 7, emoji: '🐷', note: 523.25, name: 'Do5' }      // C5
];

// Level configurations
const levels = [
    { level: 1, sequenceLength: 4, time: 30 },
    { level: 2, sequenceLength: 5, time: 40 },
    { level: 3, sequenceLength: 6, time: 50 },
    { level: 4, sequenceLength: 7, time: 60 },
    { level: 5, sequenceLength: 8, time: 70 }
];

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    levelSelect: document.getElementById('level-select'),
    game: document.getElementById('game-screen')
};

const modals = {
    levelComplete: document.getElementById('modal-level-complete'),
    timeUp: document.getElementById('modal-time-up'),
    gameComplete: document.getElementById('modal-game-complete')
};

// Initialize Audio Context
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

// Play a musical note
function playNote(frequency, duration = 0.5, type = 'sine') {
    if (!audioContext) return;

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

// Play success sound
function playSuccessSound() {
    playNote(523.25, 0.1, 'sine');
    setTimeout(() => playNote(659.25, 0.1, 'sine'), 100);
    setTimeout(() => playNote(783.99, 0.2, 'sine'), 200);
}

// Play error sound
function playErrorSound() {
    playNote(200, 0.2, 'sawtooth');
    setTimeout(() => playNote(150, 0.3, 'sawtooth'), 150);
}

// Play level complete fanfare
function playFanfare() {
    playNote(523.25, 0.2);
    setTimeout(() => playNote(659.25, 0.2), 200);
    setTimeout(() => playNote(783.99, 0.2), 400);
    setTimeout(() => playNote(1046.50, 0.4), 600);
}

// Load progress from localStorage
function loadProgress() {
    try {
        const saved = localStorage.getItem(PROGRESS_KEY);
        if (saved) {
            const data = JSON.parse(saved);
            state.unlockedLevels = data.unlockedLevels || 1;
            state.levelStars = data.levelStars || {};
        }
    } catch (e) {
        console.error('Error loading progress:', e);
    }
}

// Save progress to localStorage
function saveProgress() {
    try {
        const data = {
            unlockedLevels: state.unlockedLevels,
            levelStars: state.levelStars
        };
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('Error saving progress:', e);
    }
}

// Show a specific screen
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
}

// Show a modal
function showModal(modalName) {
    Object.values(modals).forEach(modal => modal.classList.add('hidden'));
    modals[modalName].classList.remove('hidden');
}

// Hide all modals
function hideModals() {
    Object.values(modals).forEach(modal => modal.classList.add('hidden'));
}

// Generate a random sequence of animals
function generateSequence(length) {
    const sequence = [];
    for (let i = 0; i < length; i++) {
        sequence.push(Math.floor(Math.random() * animals.length));
    }
    return sequence;
}

// Create animals grid
function createAnimalsGrid() {
    const grid = document.getElementById('animals-grid');
    grid.innerHTML = '';

    animals.forEach((animal, index) => {
        const btn = document.createElement('div');
        btn.className = 'animal-btn';
        btn.textContent = animal.emoji;
        btn.dataset.animalId = animal.id;
        btn.addEventListener('click', () => handleAnimalClick(animal.id, btn));
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            handleAnimalClick(animal.id, btn);
        });
        grid.appendChild(btn);
    });
}

// Play the sequence for the player to memorize
async function playSequence() {
    state.isPlayingSequence = true;
    state.gameActive = false;

    const message = document.getElementById('game-message');
    message.textContent = '👀 ¡Escucha la melodía!';

    for (let i = 0; i < state.sequence.length; i++) {
        const animalId = state.sequence[i];
        const btn = document.querySelector(`[data-animal-id="${animalId}"]`);

        // Highlight and play
        btn.classList.add('sequence-highlight');
        playNote(animals[animalId].note, 0.4);

        await new Promise(resolve => setTimeout(resolve, 600));

        btn.classList.remove('sequence-highlight');

        await new Promise(resolve => setTimeout(resolve, 200));
    }

    message.textContent = '🎵 ¡Ahora toca los animales!';
    state.isPlayingSequence = false;
    state.gameActive = true;

    // Start hint animation on first animal
    setTimeout(() => {
        if (state.gameActive && state.sequenceIndex < state.sequence.length) {
            const firstAnimalId = state.sequence[state.sequenceIndex];
            const firstBtn = document.querySelector(`[data-animal-id="${firstAnimalId}"]`);
            firstBtn.classList.add('hint');
        }
    }, 500);
}

// Handle animal click
function handleAnimalClick(animalId, btn) {
    if (!state.gameActive || state.isPlayingSequence) return;

    initAudio();

    // Play the animal's note
    playNote(animals[animalId].note, 0.3);

    // Remove all hints
    document.querySelectorAll('.animal-btn').forEach(b => b.classList.remove('hint'));

    const expectedAnimalId = state.sequence[state.sequenceIndex];

    if (animalId === expectedAnimalId) {
        // Correct!
        btn.classList.add('correct');
        playSuccessSound();
        state.touchedCount++;
        state.sequenceIndex++;

        updateHUD();

        setTimeout(() => btn.classList.remove('correct'), 500);

        // Check if level complete
        if (state.sequenceIndex >= state.sequence.length) {
            completeLevel();
        } else {
            // Add hint to next animal
            setTimeout(() => {
                if (state.gameActive && state.sequenceIndex < state.sequence.length) {
                    const nextAnimalId = state.sequence[state.sequenceIndex];
                    const nextBtn = document.querySelector(`[data-animal-id="${nextAnimalId}"]`);
                    nextBtn.classList.add('hint');
                }
            }, 500);
        }
    } else {
        // Wrong!
        btn.classList.add('wrong');
        playErrorSound();
        setTimeout(() => btn.classList.remove('wrong'), 500);

        // Re-add hint
        const expectedBtn = document.querySelector(`[data-animal-id="${expectedAnimalId}"]`);
        expectedBtn.classList.add('hint');
    }
}

// Update HUD
function updateHUD() {
    document.getElementById('current-level').textContent = state.currentLevel;
    document.getElementById('touched-count').textContent = state.touchedCount;
    document.getElementById('target-count').textContent = state.targetCount;

    // Progress bar
    const progress = (state.touchedCount / state.targetCount) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    // Timer
    const timerBar = document.getElementById('timer-bar');
    const timerText = document.getElementById('timer-text');
    const timerPercent = (state.timeRemaining / state.maxTime) * 100;
    timerBar.style.width = `${timerPercent}%`;
    timerText.textContent = `${Math.ceil(state.timeRemaining)}s`;

    // Timer color
    if (timerPercent > 50) {
        timerBar.style.background = '#4CAF50';
    } else if (timerPercent > 25) {
        timerBar.style.background = '#FFC107';
    } else {
        timerBar.style.background = '#F44336';
    }
}

// Start timer
function startTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
    }

    state.timerInterval = setInterval(() => {
        state.timeRemaining -= 0.1;

        if (state.timeRemaining <= 0) {
            state.timeRemaining = 0;
            updateHUD();
            gameOver();
        } else {
            updateHUD();
        }
    }, 100);
}

// Stop timer
function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

// Start level
function startLevel(level) {
    const levelConfig = levels[level - 1];

    state.currentLevel = level;
    state.touchedCount = 0;
    state.targetCount = levelConfig.sequenceLength;
    state.timeRemaining = levelConfig.time;
    state.maxTime = levelConfig.time;
    state.sequence = generateSequence(levelConfig.sequenceLength);
    state.sequenceIndex = 0;
    state.isPlayingSequence = false;
    state.gameActive = true;

    // Clear any hints
    document.querySelectorAll('.animal-btn').forEach(b => b.classList.remove('hint'));

    updateHUD();
    createAnimalsGrid();

    hideModals();
    showScreen('game');

    // Play sequence after a short delay
    setTimeout(() => playSequence(), 1000);

    // Start timer after sequence
    setTimeout(() => startTimer(), 1000 + (state.sequence.length * 800) + 500);
}

// Complete level
function completeLevel() {
    state.gameActive = false;
    stopTimer();
    playFanfare();

    // Calculate stars based on time remaining
    const timePercent = state.timeRemaining / state.maxTime;
    let stars = 1;
    if (timePercent > 0.6) stars = 3;
    else if (timePercent > 0.3) stars = 2;

    // Save stars
    state.levelStars[state.currentLevel] = Math.max(
        state.levelStars[state.currentLevel] || 0,
        stars
    );

    // Unlock next level
    if (state.currentLevel < levels.length) {
        state.unlockedLevels = Math.max(state.unlockedLevels, state.currentLevel + 1);
    }

    saveProgress();

    // Show level complete modal
    if (state.currentLevel >= levels.length) {
        // Game complete!
        showModal('gameComplete');
    } else {
        // Show stars
        const starsContainer = document.getElementById('stars-container');
        starsContainer.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            star.textContent = '⭐';
            if (i < stars) {
                star.classList.add('filled');
            }
            starsContainer.appendChild(star);
        }

        showModal('levelComplete');
    }
}

// Game over (time up)
function gameOver() {
    state.gameActive = false;
    stopTimer();
    playErrorSound();
    showModal('timeUp');
}

// Populate level select screen
function populateLevelSelect() {
    const container = document.getElementById('level-buttons');
    container.innerHTML = '';

    levels.forEach((level, index) => {
        const levelNum = index + 1;
        const btn = document.createElement('button');
        btn.className = 'level-btn';
        btn.textContent = levelNum;

        if (levelNum <= state.unlockedLevels) {
            btn.disabled = false;
            btn.onclick = () => startLevel(levelNum);

            // Add stars if completed
            const stars = state.levelStars[levelNum] || 0;
            if (stars > 0) {
                const star = document.createElement('span');
                star.className = 'star';
                star.textContent = '⭐'.repeat(stars);
                btn.appendChild(star);
            }
        } else {
            btn.disabled = true;
            btn.classList.add('locked');
        }

        container.appendChild(btn);
    });
}

// Event Listeners
document.getElementById('start-btn').addEventListener('click', () => {
    initAudio();
    populateLevelSelect();
    showScreen('levelSelect');
});

document.getElementById('back-btn').addEventListener('click', () => {
    showScreen('start');
});

document.getElementById('next-level-btn').addEventListener('click', () => {
    hideModals();
    if (state.currentLevel < levels.length) {
        startLevel(state.currentLevel + 1);
    }
});

document.getElementById('retry-btn').addEventListener('click', () => {
    hideModals();
    startLevel(state.currentLevel);
});

document.getElementById('back-to-levels-btn').addEventListener('click', () => {
    hideModals();
    populateLevelSelect();
    showScreen('levelSelect');
});

document.getElementById('play-again-btn').addEventListener('click', () => {
    hideModals();
    populateLevelSelect();
    showScreen('levelSelect');
});

document.getElementById('back-home-btn').addEventListener('click', () => {
    hideModals();
    showScreen('start');
});

// Initialize
loadProgress();
