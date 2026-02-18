/**
 * Animalitos que Suenan - Game Logic
 * Target: 1-2 years old children (Toddlers)
 * Game Design Rules: Section 7 (Levels & Progression) compliant
 */

// ============================================
// Game State
// ============================================

const gameState = {
  // Current level index (0-based)
  currentLevel: 0,
  
  // Animal tracking
  animalsPlayed: 0,
  
  // Session management
  sessionStartTime: null,
  timeRemaining: 0,
  isRunning: false,
  isPaused: false,
  
  // Timer interval reference
  timerInterval: null
};

// ============================================
// Game Configuration - Animals
// ============================================

const ANIMALS = [
  { id: 'cat', name: 'Gatito', emoji: '🐱', sound: 'meow', color: '#F59E0B' },
  { id: 'dog', name: 'Perrito', emoji: '🐕', sound: 'woof', color: '#8B4513' },
  { id: 'duck', name: 'Patito', emoji: '🦆', sound: 'quack', color: '#0077B6' },
  { id: 'chicken', name: 'Pollito', emoji: '🐓', sound: 'cluck', color: '#F57F17' },
  { id: 'cow', name: 'Vaquita', emoji: '🐄', sound: 'moo', color: '#795548' },
  { id: 'pig', name: 'Cerdito', emoji: '🐖', sound: 'oink', color: '#FF9800' },
  { id: 'sheep', name: 'Ovejita', emoji: '🐑', sound: 'baa', color: '#9E9AEC' },
  { id: 'horse', name: 'Caballito', emoji: '🐴', sound: 'neigh', color: '#F59E0B' },
  { id: 'bird', name: 'Pajarito', emoji: '🐦', sound: 'tweet', color: '#FFC107' },
  { id: 'mouse', name: 'Ratón', emoji: '🐁', sound: 'squeak', color: '#9E9AEC' },
  { id: 'frog', name: 'Ranita', emoji: '🐸', sound: 'croak', color: '#4CAF50' },
  { id: 'rabbit', name: 'Conejo', emoji: '🐇', sound: 'bunny', color: '#E91E63' }
];

// ============================================
// Game Levels Configuration
// ============================================

const LEVELS = [
  {
    level: 0,
    name: 'Nivel 1',
    targetAnimals: 3, // Play 3 different animals
    timeLimit: 30, // 30 seconds
    scoreRequirement: 5 // Need to play 5 sounds
  },
  {
    level: 1,
    name: 'Nivel 2',
    targetAnimals: 4,
    timeLimit: 35,
    scoreRequirement: 7
  },
  {
    level: 2,
    name: 'Nivel 3',
    targetAnimals: 5,
    timeLimit: 40,
    scoreRequirement: 9
  },
  {
    level: 3,
    name: 'Nivel 4',
    targetAnimals: 6,
    timeLimit: 45,
    scoreRequirement: 11
  },
  {
    level: 4,
    name: 'Nivel 5',
    targetAnimals: 8,
    timeLimit: 50,
    scoreRequirement: 13
  }
];

// ============================================
// Web Audio API Setup
// ============================================

let audioContext = null;
let sounds = {};

function initAudio() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();
    console.log('%c🐕 Audio Context Initialized', 'color: #F59E0B; font-weight: bold;');
  } catch (e) {
    console.warn('Web Audio API not supported:', e);
  }
}

function playAnimalSound(animalId) {
  if (!audioContext || !sounds[animalId]) {
    return;
  }

  try {
    const animal = ANIMALS.find(a => a.id === animalId);
    const source = audioContext.createOscillator();
    
    // Create sound based on animal type
    if (animal.emoji.includes('🐱') || animal.emoji.includes('🐴')) {
      // Cat/Horse sounds: use triangle wave
      source.type = 'triangle';
      source.frequency.setValueAtTime(0, 300);
    } else if (animal.emoji.includes('🐓') || animal.emoji.includes('🐔')) {
      // Chicken sounds: use sawtooth wave
      source.type = 'sawtooth';
      source.frequency.setValueAtTime(0, 400);
    } else if (animal.emoji.includes('🐑')) {
      // Sheep sounds: use sine wave with tremolo
      source.type = 'sine';
      source.frequency.setValueAtTime(0, 200);
      
      // Add tremolo
      const lfo = audioContext.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(0, 5); // 5Hz tremolo rate
      lfo.connect(source.frequency.gain);
    } else if (animal.emoji.includes('🐄')) {
      // Cow sounds: use sine wave
      source.type = 'sine';
      source.frequency.setValueAtTime(0, 150);
    } else if (animal.emoji.includes('🐖')) {
      // Pig sounds: use square wave
      source.type = 'square';
      source.frequency.setValueAtTime(0, 250);
    } else if (animal.emoji.includes('🐇')) {
      // Rabbit sounds: use sine wave with modulation
      source.type = 'sine';
      source.frequency.setValueAtTime(0, 400);
      source.frequency.exponentialRampToValueAtTime(0, 1, 0.5);
    } else if (animal.emoji.includes('🐁')) {
      // Mouse sounds: use triangle wave
      source.type = 'triangle';
      source.frequency.setValueAtTime(0, 100);
    } else if (animal.emoji.includes('🐸')) {
      // Frog sounds: use square wave
      source.type = 'square';
      source.frequency.setValueAtTime(0, 200);
    } else if (animal.emoji.includes('🐇')) {
      // Bird sounds: use sawtooth wave
      source.type = 'sawtooth';
      source.frequency.setValueAtTime(0, 1000);
    } else if (animal.emoji.includes('🐦')) {
      // Ranita sounds: use sine wave
      source.type = 'sine';
      source.frequency.setValueAtTime(0, 150);
    }
    
    // Master gain for overall volume
    const masterGain = audioContext.createGain();
    masterGain.gain.setValueAtTime(0, 0.3);
    
    source.connect(masterGain);
    masterGain.connect(audioContext.destination);
    
    // Play sound
    source.start(0);
    source.stop(audioContext.currentTime + 0.5); // Play for 0.5 seconds
    
    sounds[animalId] = source;
    console.log(`%c🐕 Animal sound played: ${ANIMALS.find(a => a.id === animalId)?.name}`, 'color: #F59E0B;');
  } catch (e) {
    console.error('Error playing animal sound:', e);
  }
}

// ============================================
// Game Board & Rendering
// ============================================

function initGameBoard() {
  const gameBoard = document.getElementById('gameBoard');
  
  // Clear existing content
  gameBoard.innerHTML = '';
  
  // Render animal icons
  const currentLevelConfig = LEVELS[gameState.currentLevel];
  const unlockedAnimals = ANIMALS.slice(0, currentLevelConfig.targetAnimals);
  unlockedAnimals.forEach(animal => {
    const icon = createAnimalIcon(animal);
    icon.dataset.animalId = animal.id;
    gameBoard.appendChild(icon);
  });
  
  // Update HUD (nivel, progreso, tiempo)
  updateHUD();
}

function createAnimalIcon(animal) {
  const icon = document.createElement('div');
  icon.className = 'animal-icon';
  icon.dataset.animalId = animal.id;
  icon.style.backgroundColor = animal.color;
  icon.style.animation = 'pulse 2s ease-in-out';
  
  const emoji = document.createElement('div');
  emoji.className = 'emoji';
  emoji.textContent = animal.emoji;
  emoji.style.fontSize = '3rem';
  
  icon.appendChild(emoji);
  
  return icon;
}

function getUnlockedAnimals() {
  return ANIMALS.slice(0, LEVELS[gameState.currentLevel].targetAnimals);
}

function playRandomAnimalFromLevel() {
  const level = LEVELS[gameState.currentLevel];
  const availableAnimals = ANIMALS.slice(0, level.targetAnimals);
  
  if (availableAnimals.length === 0) {
    return;
  }
  
  const randomAnimal = availableAnimals[Math.floor(Math.random() * availableAnimals.length)];
  playAnimalSound(randomAnimal.id);
}

// ============================================
// Game Logic - Core Functions
// ============================================

function startGame() {
  console.log('%c🚀 Game Started', 'color: #F59E0B; font-weight: bold;');
  
  initAudio();
  initGameBoard();
  
  // Initialize timer interval
  gameState.timerInterval = setInterval(updateTimer, 1000);
  
  gameState.currentLevel = 0;
  gameState.animalsPlayed = 0;
  gameState.sessionStartTime = Date.now();
  gameState.timeRemaining = LEVELS[gameState.currentLevel].timeLimit * 1000;
  gameState.isRunning = true;
  gameState.isPaused = false;
  
  // Update HUD with initial values
  updateHUD();
  
  // Auto-play random animal from level
  playRandomAnimalFromLevel();
  
  // Add touch events to animal icons
  document.querySelectorAll('.animal-icon').forEach(icon => {
    icon.addEventListener('touchstart', (e) => {
      e.preventDefault();
      
      if (!gameState.isRunning) return;
      
      const animalId = icon.dataset.animalId;
      
      // Visual feedback
      icon.style.transform = 'scale(1.2)';
      icon.style.transition = 'transform 0.1s';
      
      // Play animal sound
      playAnimalSound(animalId);
      
      // Update score
      gameState.animalsPlayed++;
      updateScore();
      
      // Check if level complete
      const currentLevelConfig = LEVELS[gameState.currentLevel];
      if (gameState.animalsPlayed >= currentLevelConfig.scoreRequirement) {
        levelComplete();
      }
      
      // Reset after animation
      setTimeout(() => {
        icon.style.transform = 'scale(1)';
        icon.style.transition = 'transform 0.1s';
      }, 100);
    });
  });
  
  // Keyboard support for testing
  document.addEventListener('keydown', (e) => {
    if (e.key === 'h') {
      startGame();
    }
  });
}

function updateTimer() {
  // Update HUD timer bar
  updateTimerBar();
  
  // Check for time up
  if (gameState.timeRemaining <= 0 && gameState.isRunning) {
    levelComplete();
  }
}

function updateScore() {
  // Update HUD progress bar
  updateProgressBar();
}

function levelComplete() {
  console.log(`%c🎉 Level ${gameState.currentLevel + 1} Complete!`, 'color: #F59E0B; font-weight: bold;');
  
  clearInterval(gameState.timerInterval);
  
  // Play celebration sound (use a happy animal)
  playAnimalSound('rabbit');
  
  // Show modal
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <h2 class="modal-title">🎉 ¡Nivel Completado!</h2>
      <p class="modal-text">¡Excelente! Tocaste ${gameState.animalsPlayed} animales.</p>
      <button id="btn-next" class="btn-primary">Siguiente Nivel</button>
    </div>
  `;
  document.body.appendChild(modal);
  
  // Add next level button listener
  document.getElementById('btn-next').addEventListener('click', () => {
    document.body.removeChild(modal);
    nextLevel();
  });
  
  gameState.isRunning = false;
}

function nextLevel() {
  const currentLevelIndex = gameState.currentLevel;
  const nextLevelIndex = currentLevelIndex + 1;
  
  // Check if all levels complete
  if (nextLevelIndex >= LEVELS.length) {
    // Game complete - show final modal
    const finalModal = document.createElement('div');
    finalModal.className = 'modal';
    finalModal.innerHTML = `
      <div class="modal-content">
        <h2 class="modal-title">🎉 ¡Juego Completado!</h2>
        <p class="modal-text">¡Genial! Completaste todos los niveles.</p>
        <button id="btn-home" class="btn-primary">Volver al Inicio</button>
      </div>
    `;
    document.body.appendChild(finalModal);
    
    // Add home button listener
    document.getElementById('btn-home').addEventListener('click', () => {
      document.body.removeChild(finalModal);
      window.location.href = '/';
    });
    
    return;
  }
  
  // Start next level
  gameState.currentLevel = nextLevelIndex;
  gameState.animalsPlayed = 0;
  gameState.sessionStartTime = Date.now();
  gameState.timeRemaining = LEVELS[nextLevelIndex].timeLimit * 1000;
  gameState.isRunning = true;
  gameState.isPaused = false;
  
  // Clear board and reinitialize
  initGameBoard();
  
  // Update HUD with new level values
  updateHUD();
  
  // Start new timer
  gameState.timerInterval = setInterval(updateTimer, 1000);
  
  // Auto-play random animal from new level
  playRandomAnimalFromLevel();
}

// ============================================
// Persistence (localStorage)
// ============================================

function saveProgress() {
  const progressData = {
    currentLevel: gameState.currentLevel,
    animalsPlayed: gameState.animalsPlayed,
    unlockedAnimals: getUnlockedAnimals().map(a => a.id),
    sessionTimestamp: Date.now()
  };
  
  localStorage.setItem('animalitos-suenan-progress', JSON.stringify(progressData));
  console.log('%c💾 Progress saved', 'color: #F59E0B;');
}

function loadProgress() {
  const savedData = localStorage.getItem('animalitos-suenan-progress');
  
  if (savedData) {
    try {
      const progressData = JSON.parse(savedData);
      
      if (progressData.currentLevel !== undefined) {
        gameState.currentLevel = progressData.currentLevel;
      }
      
      if (progressData.animalsPlayed !== undefined) {
        gameState.animalsPlayed = progressData.animalsPlayed;
      }
      
      console.log('%c💾 Progress loaded', 'color: #F59E0B;');
    } catch (e) {
      console.error('Error loading progress:', e);
    }
  }
}

// ============================================
// HUD: Heads Up Display Updates
// ============================================

function updateHUD() {
  updateLevelDisplay();
  updateProgressBar();
  updateTimerBar();
}

function updateLevelDisplay() {
  const levelDisplay = document.getElementById('levelDisplay');
  if (levelDisplay) {
    const currentLevel = gameState.currentLevel + 1;
    const totalLevels = LEVELS.length;
    levelDisplay.textContent = `${currentLevel}/${totalLevels}`;
  }
}

function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  
  if (progressBar && progressText) {
    const currentLevelConfig = LEVELS[gameState.currentLevel];
    const target = currentLevelConfig.scoreRequirement;
    const current = gameState.animalsPlayed;
    
    // Calculate percentage (clamp between 0-100)
    const percentage = Math.min(100, Math.max(0, (current / target) * 100));
    
    // Update bar width
    progressBar.style.width = `${percentage}%`;
    
    // Update text
    progressText.textContent = `${current}/${target}`;
    
    // Change color based on progress
    if (percentage >= 100) {
      progressBar.style.background = 'linear-gradient(90deg, #4CAF50 0%, #66BB6A 100%)';
    } else if (percentage >= 50) {
      progressBar.style.background = 'linear-gradient(90deg, #10B981 0%, #4CAF50 100%)';
    } else {
      progressBar.style.background = 'linear-gradient(90deg, #10B981 0%, #10B981 100%)';
    }
  }
}

function updateTimerBar() {
  const timerBar = document.getElementById('timerBar');
  const timerText = document.getElementById('timerText');
  
  if (timerBar && timerText) {
    const currentLevelConfig = LEVELS[gameState.currentLevel];
    const totalTime = currentLevelConfig.timeLimit;
    const remaining = gameState.timeRemaining;
    
    // Calculate percentage
    const percentage = Math.min(100, Math.max(0, (remaining / totalTime) * 100));
    
    // Update bar width
    timerBar.style.width = `${percentage}%`;
    
    // Update text
    timerText.textContent = `${remaining}s`;
    
    // Update color based on time remaining
    const timeRatio = remaining / totalTime;
    
    // Remove all time classes first
    timerBar.classList.remove('high-time', 'medium-time', 'low-time');
    
    if (timeRatio > 0.5) {
      // High time (>50% remaining) - Green
      timerBar.classList.add('high-time');
    } else if (timeRatio > 0.25) {
      // Medium time (25-50% remaining) - Orange
      timerBar.classList.add('medium-time');
    } else {
      // Low time (<25% remaining) - Red with pulse
      timerBar.classList.add('low-time');
    }
  }
}

// ============================================
// Responsive Design
// ============================================

function handleResize() {
  const gameBoard = document.getElementById('gameBoard');
  const icons = document.querySelectorAll('.animal-icon');
  
  // Adjust icon size based on screen width
  const screenWidth = window.innerWidth;
  let iconSize = 100; // Default
  
  if (screenWidth >= 768) {
    iconSize = 100; // Desktop - Large
  } else if (screenWidth >= 480) {
    iconSize = 90; // Tablet - Medium
  } else if (screenWidth >= 375) {
    iconSize = 80; // Mobile - Small (375x667 iPhone SE)
  }
  
  icons.forEach(icon => {
    icon.style.width = `${iconSize}px`;
    icon.style.height = `${iconSize}px`;
    icon.style.fontSize = `${iconSize * 0.4}px`;
  });
  
  // Adjust grid columns based on screen width
  const container = document.getElementById('gameBoard');
  const currentLevelConfig = LEVELS[gameState.currentLevel];
  const targetAnimals = currentLevelConfig.targetAnimals;
  let columns = 3; // Default
  
  if (screenWidth >= 768) {
    // Desktop
    columns = 4;
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(auto-fill, minmax(200px, 1fr))`;
    container.style.gap = '10px';
  } else if (screenWidth >= 480) {
    // Tablet
    columns = 3;
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(auto-fill, minmax(160px, 1fr))`;
    container.style.gap = '8px';
  } else {
    // Mobile
    columns = 2;
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(auto-fill, minmax(100px, 1fr))`;
    container.style.gap = '5px';
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', () => {
  console.log('%c🐕 DOM Loaded', 'color: #F59E0B; font-weight: bold;');
  
  // Load progress
  loadProgress();
  
  // Wait for user interaction to start
  const startBtn = document.createElement('button');
  startBtn.className = 'btn-primary';
  startBtn.textContent = '▶️ Jugar';
  startBtn.style.marginTop = '20px';
  startBtn.style.padding = '10px 20px';
  startBtn.onclick = () => {
    startBtn.style.display = 'none';
    startGame();
  };
  
  // Add start button to page
  const gameBoard = document.getElementById('gameBoard');
  gameBoard.appendChild(startBtn);
  
  // Initial resize
  handleResize();
});
