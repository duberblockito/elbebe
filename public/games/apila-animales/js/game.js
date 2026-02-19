// Apila los Animales - Game Logic

const GAME_ID = 'apila-animales';

// Game State
let gameState = {
  level: 1,
  animalsCollected: 0,
  animalsGoal: 3,
  levels: [
    { goal: 3, duration: 30 },
    { goal: 5, duration: 35 },
    { goal: 7, duration: 40 },
    { goal: 9, duration: 45 },
    { goal: 11, duration: 50 }
  ],
  animals: ['🐘', '🦒', '🦁', '🐼', '🐨', '🐯', '🦓', '🐻', '🐰', '🦊', '🐭'],
  currentAnimal: null,
  tower: [],
  isPlaying: false,
  timer: null,
  timeLeft: 0
};

// DOM Elements
let levelInfoEl, progressContainerEl, progressBarEl, progressTextEl;
let towerEl, currentAnimalEl, gameAreaEl;
let levelCompleteModal, timeUpModal, gameCompleteModal;

// Audio Context for sounds
let audioContext = null;

function initAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playSound(frequency, duration, type = 'sine') {
  if (!audioContext) return;

  try {
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
  } catch (e) {
    console.error('Audio error:', e);
  }
}

function playPopSound() {
  playSound(800, 0.15, 'sine');
  setTimeout(() => playSound(1000, 0.1, 'sine'), 50);
}

function playWobbleSound() {
  playSound(400, 0.2, 'triangle');
}

function playLevelCompleteSound() {
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  notes.forEach((note, index) => {
    setTimeout(() => playSound(note, 0.3, 'sine'), index * 150);
  });
}

function playGameOverSound() {
  playSound(400, 0.4, 'triangle');
  setTimeout(() => playSound(300, 0.4, 'triangle'), 200);
  setTimeout(() => playSound(200, 0.6, 'triangle'), 400);
}

function playGameCompleteSound() {
  const melody = [
    { note: 523.25, duration: 0.2 },
    { note: 659.25, duration: 0.2 },
    { note: 783.99, duration: 0.2 },
    { note: 1046.50, duration: 0.4 },
    { note: 783.99, duration: 0.2 },
    { note: 1046.50, duration: 0.6 }
  ];

  let time = 0;
  melody.forEach(({ note, duration }) => {
    setTimeout(() => playSound(note, duration, 'sine'), time);
    time += duration * 1000;
  });
}

function initGame() {
  // Load saved progress
  loadProgress();

  // DOM Elements
  levelInfoEl = document.getElementById('level-info');
  progressContainerEl = document.getElementById('progress-container');
  progressBarEl = document.getElementById('progress-bar');
  progressTextEl = document.getElementById('progress-text');
  towerEl = document.getElementById('tower');
  currentAnimalEl = document.getElementById('current-animal');
  gameAreaEl = document.getElementById('game-area');

  levelCompleteModal = document.getElementById('level-complete-modal');
  timeUpModal = document.getElementById('time-up-modal');
  gameCompleteModal = document.getElementById('game-complete-modal');

  // Event Listeners
  currentAnimalEl.addEventListener('click', onAnimalClick);
  currentAnimalEl.addEventListener('touchstart', onAnimalClick, { passive: true });

  document.getElementById('next-level-btn').addEventListener('click', startNextLevel);
  document.getElementById('retry-level-btn').addEventListener('click', retryLevel);
  document.getElementById('play-again-btn').addEventListener('click', playAgain);

  // Initialize audio on first interaction
  document.body.addEventListener('click', initAudio, { once: true });
  document.body.addEventListener('touchstart', initAudio, { once: true });

  // Start game
  startLevel(gameState.level);
}

function loadProgress() {
  try {
    const saved = localStorage.getItem(`${GAME_ID}-progress`);
    if (saved) {
      const parsed = JSON.parse(saved);
      gameState.level = parsed.level || 1;
      gameState.tower = parsed.tower || [];
    }
  } catch (e) {
    console.error('Error loading progress:', e);
  }
}

function saveProgress() {
  try {
    localStorage.setItem(`${GAME_ID}-progress`, JSON.stringify({
      level: gameState.level,
      tower: gameState.tower
    }));
  } catch (e) {
    console.error('Error saving progress:', e);
  }
}

function startLevel(level) {
  if (level > gameState.levels.length) {
    showGameComplete();
    return;
  }

  gameState.level = level;
  gameState.animalsGoal = gameState.levels[level - 1].goal;
  gameState.animalsCollected = 0;
  gameState.tower = [];
  gameState.isPlaying = true;
  gameState.timeLeft = gameState.levels[level - 1].duration;

  // Clear tower
  towerEl.innerHTML = '';

  // Spawn first animal
  spawnAnimal();

  // Update UI
  updateUI();
  updateProgress();

  // Start timer
  startTimer();

  // Save progress
  saveProgress();
}

function spawnAnimal() {
  const randomIndex = Math.floor(Math.random() * gameState.animals.length);
  gameState.currentAnimal = gameState.animals[randomIndex];
  currentAnimalEl.textContent = gameState.currentAnimal;
}

function onAnimalClick(event) {
  event.preventDefault();

  if (!gameState.isPlaying) return;

  initAudio();

  // Add animal to tower
  addAnimalToTower(gameState.currentAnimal);

  // Play pop sound
  playPopSound();

  // Increment counter
  gameState.animalsCollected++;

  // Check if level complete
  if (gameState.animalsCollected >= gameState.animalsGoal) {
    completeLevel();
  } else {
    // Spawn next animal
    spawnAnimal();
  }

  // Update progress
  updateProgress();
}

function addAnimalToTower(animal) {
  const animalEl = document.createElement('div');
  animalEl.className = 'animal';
  animalEl.textContent = animal;
  towerEl.appendChild(animalEl);

  // Add wobble effect to tower
  towerEl.classList.add('wobble');
  setTimeout(() => {
    towerEl.classList.remove('wobble');
    playWobbleSound();
  }, 500);
}

function updateUI() {
  levelInfoEl.innerHTML = `
    <span>Nivel ${gameState.level}</span>
    <span>${gameState.animalsCollected} / ${gameState.animalsGoal}</span>
  `;
}

function updateProgress() {
  const progress = (gameState.animalsCollected / gameState.animalsGoal) * 100;
  progressBarEl.style.width = `${progress}%`;
  progressTextEl.textContent = `${gameState.animalsCollected} / ${gameState.animalsGoal} animales`;
}

function startTimer() {
  if (gameState.timer) {
    clearInterval(gameState.timer);
  }

  gameState.timer = setInterval(() => {
    gameState.timeLeft--;

    // Update timer display
    const totalTime = gameState.levels[gameState.level - 1].duration;
    const remainingPercent = (gameState.timeLeft / totalTime) * 100;

    // Change color based on time
    if (remainingPercent <= 25) {
      progressBarEl.style.background = 'linear-gradient(90deg, #f44336, #d32f2f)';
    } else if (remainingPercent <= 50) {
      progressBarEl.style.background = 'linear-gradient(90deg, #ff9800, #f57c00)';
    } else {
      progressBarEl.style.background = 'linear-gradient(90deg, #4CAF50, #8BC34A)';
    }

    if (gameState.timeLeft <= 0) {
      clearInterval(gameState.timer);
      timeUp();
    }
  }, 1000);
}

function completeLevel() {
  gameState.isPlaying = false;
  clearInterval(gameState.timer);

  playLevelCompleteSound();

  // Show level complete modal
  showModal(levelCompleteModal);

  // Update next level button text
  const nextLevelBtn = document.getElementById('next-level-btn');
  if (gameState.level >= gameState.levels.length) {
    nextLevelBtn.textContent = 'Completar Juego';
  } else {
    nextLevelBtn.textContent = 'Siguiente Nivel';
  }
}

function timeUp() {
  gameState.isPlaying = false;

  playGameOverSound();

  showModal(timeUpModal);
}

function showGameComplete() {
  gameState.isPlaying = false;
  gameState.level = 1;
  gameState.tower = [];

  playGameCompleteSound();

  // Save progress (reset to level 1)
  saveProgress();

  showModal(gameCompleteModal);
}

function startNextLevel() {
  hideModal(levelCompleteModal);

  if (gameState.level >= gameState.levels.length) {
    showGameComplete();
  } else {
    startLevel(gameState.level + 1);
  }
}

function retryLevel() {
  hideModal(timeUpModal);
  startLevel(gameState.level);
}

function playAgain() {
  hideModal(gameCompleteModal);
  startLevel(1);
}

function showModal(modal) {
  modal.classList.add('active');
}

function hideModal(modal) {
  modal.classList.remove('active');
}

// Initialize game when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGame);
} else {
  initGame();
}
