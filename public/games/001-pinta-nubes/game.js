// Pinta las Nubes - Game Logic (Fixed: Levels, Timer, Progression)
// Recommended Age: 2-3 years

// Level configuration with progressive difficulty
const LEVELS = [
  { targetAnimals: 5,  timeLimit: 30,  animalsCount: 5,  cloudSize: 'large' },
  { targetAnimals: 6,  timeLimit: 35,  animalsCount: 6,  cloudSize: 'large' },
  { targetAnimals: 8,  timeLimit: 40,  animalsCount: 8,  cloudSize: 'medium' },
  { targetAnimals: 10, timeLimit: 45,  animalsCount: 10, cloudSize: 'medium' },
  { targetAnimals: 12, timeLimit: 50,  animalsCount: 12, cloudSize: 'small' }
];

// Expanded animal pool (15 animals for variety)
const allAnimals = [
  { id: 1,  emoji: '🐱', name: 'Gato',      sound: 'Meow!' },
  { id: 2,  emoji: '🐶', name: 'Perro',     sound: 'Woof!' },
  { id: 3,  emoji: '🐰', name: 'Conejo',    sound: 'Boing!' },
  { id: 4,  emoji: '🐸', name: 'Rana',      sound: 'Ribbit!' },
  { id: 5,  emoji: '🦆', name: 'Pato',      sound: 'Quack!' },
  { id: 6,  emoji: '🐔', name: 'Pollo',     sound: 'Cock-a-doodle-doo!' },
  { id: 7,  emoji: '🐮', name: 'Vaca',      sound: 'Moo!' },
  { id: 8,  emoji: '🐷', name: 'Cerdito',   sound: 'Oink!' },
  { id: 9,  emoji: '🦁', name: 'León',      sound: 'Roar!' },
  { id: 10, emoji: '🐯', name: 'Tigre',     sound: 'Grrr!' },
  { id: 11, emoji: '🐘', name: 'Elefante',  sound: 'Trumpet!' },
  { id: 12, emoji: '🦒', name: 'Jirafa',    sound: 'Hum!' },
  { id: 13, emoji: '🐻', name: 'Oso',       sound: 'Growl!' },
  { id: 14, emoji: '🦊', name: 'Zorro',     sound: 'Yip!' },
  { id: 15, emoji: '🐼', name: 'Panda',     sound: 'Chirp!' }
];

// Game state with levels
let gameState = {
  currentLevel: 0,
  animalsFound: 0,
  animalsFoundInLevel: 0,
  timeRemaining: 0,
  isRunning: false,
  isLevelComplete: false,
  isGameOver: false,
  isGameComplete: false,
  unlockedLevels: 1
};

let timerInterval = null;

// Initialize the game (from menu/refresh)
function initGame() {
  // Load progress
  loadProgress();

  // Start from first unlocked level
  const startLevel = gameState.unlockedLevels > 0 ? gameState.currentLevel : 0;
  initLevel(startLevel);
}

// Initialize a specific level
function initLevel(levelIndex) {
  const level = LEVELS[levelIndex];
  gameState.currentLevel = levelIndex;
  gameState.animalsFoundInLevel = 0;
  gameState.timeRemaining = level.timeLimit;
  gameState.isRunning = true;
  gameState.isLevelComplete = false;
  gameState.isGameOver = false;
  gameState.isGameComplete = false;

  // Clear previous timer
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  // Update UI
  updateLevelUI();
  updateProgress();

  // Clear container
  const container = document.getElementById('clouds-container');
  container.innerHTML = '';

  // Hide all modals
  hideAllModals();

  // Shuffle animals and select for this level
  const shuffledAnimals = [...allAnimals].sort(() => Math.random() - 0.5);
  const levelAnimals = shuffledAnimals.slice(0, level.animalsCount);

  // Create clouds with the animals
  levelAnimals.forEach((animal, index) => {
    const cloud = createCloud(animal, index, level.cloudSize);
    container.appendChild(cloud);
  });

  // Start timer
  startTimer();

  // Hide celebration
  const celebration = document.getElementById('celebration');
  celebration.classList.remove('show');

  // Clear feedback
  clearFeedback();
}

// Create a cloud element
function createCloud(animal, index, cloudSize = 'medium') {
  const cloud = document.createElement('div');
  cloud.className = `cloud cloud-${cloudSize}`;
  cloud.dataset.animalId = animal.id;
  cloud.dataset.animalIndex = index;

  // Create animal element (initially hidden)
  const animalElement = document.createElement('div');
  animalElement.className = 'animal';
  animalElement.textContent = animal.emoji;
  cloud.appendChild(animalElement);

  // Add touch/click event
  cloud.addEventListener('touchstart', handleCloudTouch, { passive: true });
  cloud.addEventListener('click', handleCloudClick);

  return cloud;
}

// Handle cloud touch
function handleCloudTouch(e) {
  e.preventDefault();
  const cloud = e.currentTarget;
  revealAnimal(cloud);
}

// Handle cloud click (desktop)
function handleCloudClick(e) {
  const cloud = e.currentTarget;
  revealAnimal(cloud);
}

// Track revealed animals in current level
let levelRevealedAnimals = new Set();

// Reveal animal in cloud
function revealAnimal(cloud) {
  if (!gameState.isRunning || gameState.isLevelComplete || gameState.isGameOver) return;

  const animalId = parseInt(cloud.dataset.animalId);

  // Check if already revealed
  if (levelRevealedAnimals.has(animalId)) return;

  // Mark as revealed
  levelRevealedAnimals.add(animalId);
  gameState.animalsFoundInLevel++;
  gameState.animalsFound++;

  // Add revealed class
  cloud.classList.add('revealed');

  // Get animal data
  const animal = allAnimals.find(a => a.id === animalId);

  // Show feedback
  showFeedback(animal);

  // Play sound
  playPopSound();

  // Update progress
  updateProgress();

  // Check level completion
  checkLevelCompletion();
}

// Show feedback animation
function showFeedback(animal) {
  const feedbackContainer = document.getElementById('animal-feedback');
  const nameElement = document.getElementById('animal-name');

  feedbackContainer.textContent = animal.emoji;
  feedbackContainer.classList.add('animal-pop');

  nameElement.textContent = animal.name;
  nameElement.classList.add('textPop');

  // Remove animation classes after animation
  setTimeout(() => {
    feedbackContainer.classList.remove('animal-pop');
  }, 500);

  setTimeout(() => {
    nameElement.classList.remove('textPop');
  }, 500);

  // Speak the animal name (if browser supports)
  speakAnimalName(animal.name);
}

// Speak animal name using Web Speech API
function speakAnimalName(name) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(name);
    utterance.lang = 'es-ES';
    utterance.rate = 0.8;
    utterance.pitch = 1.2;
    speechSynthesis.speak(utterance);
  }
}

// Play pop sound (using Web Audio API)
function playPopSound() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  } catch (error) {
    console.log('Audio not supported');
  }
}

// Start timer
function startTimer() {
  timerInterval = setInterval(() => {
    updateTimer();
  }, 1000);
}

// Update timer
function updateTimer() {
  if (!gameState.isRunning || gameState.isLevelComplete || gameState.isGameOver) return;

  gameState.timeRemaining -= 1;

  const timerFill = document.getElementById('timer-fill');
  const timeRemainingEl = document.getElementById('time-remaining');
  const timerText = document.getElementById('timer-text');

  const level = LEVELS[gameState.currentLevel];
  const percentage = (gameState.timeRemaining / level.timeLimit) * 100;

  timerFill.style.width = `${percentage}%`;
  timeRemainingEl.textContent = Math.ceil(gameState.timeRemaining);

  // Change color when time is running low
  if (percentage < 25) {
    timerFill.style.background = '#EF4444';
    timerText.style.color = '#EF4444';
  } else {
    timerFill.style.background = '#4CAF50';
    timerText.style.color = '#4CAF50';
  }

  // Check if time ran out
  if (gameState.timeRemaining <= 0) {
    gameState.isGameOver = true;
    gameState.isRunning = false;
    clearInterval(timerInterval);
    timerInterval = null;
    showGameOver();
  }
}

// Update progress bar
function updateProgress() {
  const progressFill = document.getElementById('progress-fill');
  const foundCount = document.getElementById('found-count');
  const totalCount = document.getElementById('total-count');

  const level = LEVELS[gameState.currentLevel];
  const percentage = (gameState.animalsFoundInLevel / level.targetAnimals) * 100;
  progressFill.style.width = `${percentage}%`;

  foundCount.textContent = gameState.animalsFoundInLevel;
  totalCount.textContent = level.targetAnimals;
}

// Update level UI
function updateLevelUI() {
  const levelIndicator = document.getElementById('level-indicator');
  levelIndicator.textContent = `Nivel ${gameState.currentLevel + 1} / ${LEVELS.length}`;

  const levelText = document.getElementById('level-text');
  levelText.textContent = `Nivel ${gameState.currentLevel + 1}`;

  const timerText = document.getElementById('timer-text');
  timerText.textContent = 'Tiempo';

  const timeRemainingEl = document.getElementById('time-remaining');
  timeRemainingEl.textContent = Math.ceil(gameState.timeRemaining);

  const timerFill = document.getElementById('timer-fill');
  const level = LEVELS[gameState.currentLevel];
  const percentage = (gameState.timeRemaining / level.timeLimit) * 100;
  timerFill.style.width = `${percentage}%`;
  timerFill.style.background = '#4CAF50';
  timerText.style.color = '#4CAF50';
}

// Clear feedback
function clearFeedback() {
  const feedbackContainer = document.getElementById('animal-feedback');
  const nameElement = document.getElementById('animal-name');

  feedbackContainer.textContent = '';
  nameElement.textContent = '';
}

// Check if level is complete
function checkLevelCompletion() {
  const level = LEVELS[gameState.currentLevel];

  if (gameState.animalsFoundInLevel >= level.targetAnimals) {
    gameState.isLevelComplete = true;
    gameState.isRunning = false;
    clearInterval(timerInterval);
    timerInterval = null;

    // Unlock next level if not last
    if (gameState.currentLevel < LEVELS.length - 1) {
      gameState.unlockedLevels = Math.max(gameState.unlockedLevels, gameState.currentLevel + 2);
    } else {
      gameState.isGameComplete = true;
    }

    saveProgress();

    if (gameState.isGameComplete) {
      showGameComplete();
    } else {
      showLevelComplete();
    }
  }
}

// Show level complete modal
function showLevelComplete() {
  const modal = document.getElementById('level-complete-modal');
  const animalsText = document.getElementById('level-complete-animals');
  const level = LEVELS[gameState.currentLevel];
  animalsText.textContent = level.targetAnimals;

  modal.classList.add('show');
  playCelebrationSound();
}

// Show game over modal
function showGameOver() {
  const modal = document.getElementById('game-over-modal');
  const foundEl = document.getElementById('game-over-found');
  const targetEl = document.getElementById('game-over-target');
  const level = LEVELS[gameState.currentLevel];

  foundEl.textContent = gameState.animalsFoundInLevel;
  targetEl.textContent = level.targetAnimals;

  modal.classList.add('show');
}

// Show game complete modal
function showGameComplete() {
  const modal = document.getElementById('game-complete-modal');
  modal.classList.add('show');
  playCelebrationSound();
}

// Hide all modals
function hideAllModals() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => modal.classList.remove('show'));
}

// Next level
function nextLevel() {
  if (gameState.currentLevel < LEVELS.length - 1) {
    levelRevealedAnimals.clear();
    initLevel(gameState.currentLevel + 1);
  }
}

// Retry level
function retryLevel() {
  levelRevealedAnimals.clear();
  initLevel(gameState.currentLevel);
}

// Go to menu
function goToMenu() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  window.location.href = '../../index.html';
}

// Restart game (from game complete modal)
function restartGame() {
  gameState.currentLevel = 0;
  gameState.animalsFound = 0;
  gameState.unlockedLevels = 1;
  levelRevealedAnimals.clear();
  saveProgress();
  initLevel(0);
}

// Save progress to localStorage
function saveProgress() {
  const progressData = {
    unlockedLevels: gameState.unlockedLevels,
    totalAnimalsFound: gameState.animalsFound,
    lastLevelPlayed: gameState.currentLevel,
    timestamp: Date.now()
  };
  localStorage.setItem('pinta-nubes-progress', JSON.stringify(progressData));
}

// Load progress from localStorage
function loadProgress() {
  const savedProgress = localStorage.getItem('pinta-nubes-progress');
  if (savedProgress) {
    try {
      const progressData = JSON.parse(savedProgress);

      // Check if progress is recent (within 24 hours)
      const isRecent = (Date.now() - progressData.timestamp) < 24 * 60 * 60 * 1000;

      if (isRecent) {
        gameState.unlockedLevels = progressData.unlockedLevels || 1;
        gameState.animalsFound = progressData.totalAnimalsFound || 0;
        gameState.currentLevel = Math.min(progressData.lastLevelPlayed || 0, LEVELS.length - 1);
      }
    } catch (error) {
      console.log('Failed to load progress:', error);
    }
  }
}

// Play celebration sound
function playCelebrationSound() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Play a simple melody
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    let noteIndex = 0;

    function playNote() {
      if (noteIndex >= notes.length) return;

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(notes[noteIndex], audioContext.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);

      noteIndex++;
      setTimeout(playNote, 150);
    }

    playNote();
  } catch (error) {
    console.log('Audio not supported');
  }
}

// Initialize game on load
document.addEventListener('DOMContentLoaded', () => {
  initGame();

  // Auto-save progress periodically
  setInterval(saveProgress, 5000);
});

// Save progress on page unload
window.addEventListener('beforeunload', () => {
  if (gameState.isRunning) {
    saveProgress();
  }
});

// Prevent zoom on double tap (iOS)
document.addEventListener('touchend', (e) => {
  e.preventDefault();
  // Re-trigger the click event
  e.target.click();
}, { passive: false });

// Prevent context menu on long press (mobile)
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  return false;
});
