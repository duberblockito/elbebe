// Mirror de Caritas - Emotion Learning Game
// Game Configuration
const emotions = [
    { id: 'happy', name: 'Feliz', emoji: '😊', faceId: 'face-happy' },
    { id: 'sad', name: 'Triste', emoji: '😢', faceId: 'face-sad' },
    { id: 'angry', name: 'Enojado', emoji: '😠', faceId: 'face-angry' },
    { id: 'surprised', name: 'Sorprendido', emoji: '😮', faceId: 'face-surprised' },
    { id: 'calm', name: 'Tranquilo', emoji: '😌', faceId: 'face-calm' }
];

const levels = [
    { emotions: ['happy'], timeLimit: 45, goal: 3 },
    { emotions: ['happy', 'sad'], timeLimit: 50, goal: 5 },
    { emotions: ['happy', 'sad', 'angry'], timeLimit: 55, goal: 6 },
    { emotions: ['happy', 'sad', 'angry', 'surprised'], timeLimit: 60, goal: 8 },
    { emotions: ['happy', 'sad', 'angry', 'surprised', 'calm'], timeLimit: 60, goal: 10 }
];

// Game State
let currentLevel = 1;
let currentEmotionIndex = 0;
let emotionsExplored = 0;
let timeRemaining = 45;
let timerInterval = null;
let gameActive = false;

// DOM Elements
const levelDisplay = document.getElementById('level-display');
const progressBar = document.getElementById('progress-bar');
const timerDisplay = document.getElementById('timer-display');
const emotionName = document.getElementById('emotion-name');
const nextBtn = document.getElementById('next-btn');
const faceSvg = document.getElementById('face-svg');

const levelCompleteModal = document.getElementById('level-complete-modal');
const gameCompleteModal = document.getElementById('game-complete-modal');
const timeUpModal = document.getElementById('time-up-modal');

const nextLevelBtn = document.getElementById('next-level-btn');
const retryBtn = document.getElementById('retry-btn');

// Audio Context for sounds
let audioContext = null;

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(type) {
    initAudio();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = type === 'happy' ? 'sine' : type === 'sad' ? 'triangle' : 'square';
    oscillator.frequency.setValueAtTime(type === 'happy' ? 523.25 : type === 'sad' ? 293.66 : 392, audioContext.currentTime);

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

function speakEmotion(emotionName) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(emotionName);
        utterance.lang = 'es-ES';
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        speechSynthesis.speak(utterance);
    }
}

// Save/Load Progress
function saveProgress() {
    const progress = {
        currentLevel: currentLevel,
        maxLevel: Math.max(currentLevel, localStorage.getItem('mirror-caritas-maxLevel') || 1)
    };
    localStorage.setItem('mirror-caritas-progress', JSON.stringify(progress));
    localStorage.setItem('mirror-caritas-maxLevel', progress.maxLevel.toString());
}

function loadProgress() {
    const saved = localStorage.getItem('mirror-caritas-progress');
    if (saved) {
        const progress = JSON.parse(saved);
        return progress;
    }
    return { currentLevel: 1, maxLevel: 1 };
}

// Update UI
function updateHUD() {
    const levelData = levels[currentLevel - 1];
    const progress = (emotionsExplored / levelData.goal) * 100;

    levelDisplay.textContent = currentLevel;
    progressBar.style.width = Math.min(progress, 100) + '%';
    timerDisplay.textContent = timeRemaining;

    // Timer color based on remaining time
    const timePercent = timeRemaining / levelData.timeLimit;
    if (timePercent > 0.5) {
        progressBar.style.background = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)';
        timerDisplay.style.color = '#667eea';
    } else if (timePercent > 0.25) {
        progressBar.style.background = 'linear-gradient(90deg, #FFA500 0%, #FFD700 100%)';
        timerDisplay.style.color = '#FFA500';
    } else {
        progressBar.style.background = 'linear-gradient(90deg, #FF6B6B 0%, #FF4444 100%)';
        timerDisplay.style.color = '#FF6B6B';
    }
}

// Show Face
function showFace(emotion) {
    // Hide all faces
    document.querySelectorAll('.face-group').forEach(face => {
        face.style.display = 'none';
    });

    // Show current face
    const faceElement = document.getElementById(emotion.faceId);
    faceElement.style.display = 'block';

    // Trigger animation
    faceElement.style.animation = 'none';
    faceElement.offsetHeight; // Trigger reflow
    faceElement.style.animation = 'facePop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

    // Update name
    emotionName.textContent = `${emotion.name} ${emotion.emoji}`;
    emotionName.style.animation = 'none';
    emotionName.offsetHeight;
    emotionName.style.animation = 'textPop 0.3s ease';

    // Play sound and speak
    const soundType = emotion.id === 'happy' ? 'happy' : emotion.id === 'sad' ? 'sad' : 'other';
    playSound(soundType);
    speakEmotion(emotion.name);
}

// Next Emotion
function nextEmotion() {
    if (!gameActive) return;

    const levelData = levels[currentLevel - 1];
    currentEmotionIndex = (currentEmotionIndex + 1) % levelData.emotions.length;
    emotionsExplored++;

    const emotion = emotions.find(e => e.id === levelData.emotions[currentEmotionIndex]);
    showFace(emotion);
    updateHUD();
    saveProgress();

    // Check if level complete
    if (emotionsExplored >= levelData.goal) {
        completeLevel();
    }
}

// Timer
function startTimer() {
    const levelData = levels[currentLevel - 1];
    timeRemaining = levelData.timeLimit;

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateHUD();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

// Start Level
function startLevel() {
    const progress = loadProgress();
    currentLevel = progress.currentLevel;
    currentEmotionIndex = 0;
    emotionsExplored = 0;
    gameActive = true;

    // Close modals
    levelCompleteModal.classList.remove('active');
    gameCompleteModal.classList.remove('active');
    timeUpModal.classList.remove('active');

    // Show first emotion
    const levelData = levels[currentLevel - 1];
    const firstEmotion = emotions.find(e => e.id === levelData.emotions[0]);
    showFace(firstEmotion);
    updateHUD();

    // Start timer
    startTimer();
}

// Complete Level
function completeLevel() {
    clearInterval(timerInterval);
    gameActive = false;

    if (currentLevel >= levels.length) {
        // Game complete
        gameCompleteModal.classList.add('active');
        document.getElementById('final-stats').textContent = `¡Completaste ${levels.length} niveles!`;
        localStorage.removeItem('mirror-caritas-progress');
    } else {
        // Next level
        levelCompleteModal.classList.add('active');
        document.getElementById('level-stats').textContent =
            `Exploraste ${emotionsExplored} emociones en el nivel ${currentLevel}`;
        currentLevel++;
        saveProgress();
    }
}

// Game Over
function gameOver() {
    gameActive = false;
    timeUpModal.classList.add('active');
}

// Event Listeners
nextBtn.addEventListener('click', nextEmotion);
nextBtn.addEventListener('touchend', (e) => {
    e.preventDefault();
    nextEmotion();
});

faceSvg.addEventListener('click', nextEmotion);
faceSvg.addEventListener('touchend', (e) => {
    e.preventDefault();
    nextEmotion();
});

nextLevelBtn.addEventListener('click', () => {
    startLevel();
});

retryBtn.addEventListener('click', () => {
    startLevel();
});

// Touch swipe support
let touchStartX = 0;
const emotionContainer = document.getElementById('emotion-container');

emotionContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

emotionContainer.addEventListener('touchend', (e) => {
    if (!gameActive) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;

    if (Math.abs(diff) > 50) {
        nextEmotion();
    }
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextEmotion();
    }
});

// Initialize
window.addEventListener('load', () => {
    const progress = loadProgress();
    currentLevel = progress.currentLevel;
    startLevel();
});

// Prevent context menu
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});
