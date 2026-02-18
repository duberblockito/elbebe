/**
 * Caja de Sonidos Mágica - Game Logic
 * Target: 1-2 years old children
 * Game Design Rules: Section 7 (Levels & Progression) compliant
 */

// ============================================
// Game State
// ============================================

const gameState = {
  // Current level index (0-based)
  currentLevel: 0,
  
  // Sound tracking
  soundsPlayed: 0,
  
  // Session management
  sessionStartTime: null,
  timeRemaining: 0,
  isRunning: false,
  isPaused: false,
  
  // Timer interval reference
  timerInterval: null
};

// ============================================
// Game Configuration
// ============================================

const SOUNDS = [
  { id: 'dog', name: 'Perrito', emoji: '🐕', sound: 'woof', color: '#8B4513' },
  { id: 'cat', name: 'Gatito', emoji: '🐱', sound: 'meow', color: '#F59E0B' },
  { id: 'duck', name: 'Patito', emoji: '🦆', sound: 'quack', color: '#0077B6' },
  { id: 'frog', name: 'Ranita', emoji: '🐸', sound: 'croak', color: '#4CAF50' },
  { id: 'bird', name: 'Pajarito', emoji: '🐦', sound: 'tweet', color: '#FFC107' },
  { id: 'cow', name: 'Vaquita', emoji: '🐄', sound: 'moo', color: '#795548' },
  { id: 'horse', name: 'Caballito', emoji: '🐴', sound: 'neigh', color: '#F59E0B' },
  { id: 'car', name: 'Carrito', emoji: '🚗', sound: 'beep', color: '#FF9800' },
  { id: 'train', name: 'Trenecito', emoji: '🚂', sound: 'choochoo', color: '#37474F' }
];

// ============================================
// Game Levels Configuration
// ============================================

const LEVELS = [
  {
    level: 0,
    name: 'Nivel 1',
    targetSounds: 3, // Play 3 different sounds
    timeLimit: 30, // 30 seconds
    scoreRequirement: 5 // Need to play 5 sounds
  },
  {
    level: 1,
    name: 'Nivel 2',
    targetSounds: 4,
    timeLimit: 35,
    scoreRequirement: 7
  },
  {
    level: 2,
    name: 'Nivel 3',
    targetSounds: 5,
    timeLimit: 40,
    scoreRequirement: 9
  },
  {
    level: 3,
    name: 'Nivel 4',
    targetSounds: 5,
    timeLimit: 45,
    scoreRequirement: 11
  },
  {
    level: 4,
    name: 'Nivel 5',
    targetSounds: 6,
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
    console.log('%c🎵 Audio Context Initialized', 'color: #F59E0B; font-weight: bold;');
  } catch (e) {
    console.warn('Web Audio API not supported:', e);
  }
}

function playSound(soundId) {
  if (!audioContext || !sounds[soundId]) {
    return;
  }

  try {
    const sound = sounds[soundId];
    const source = audioContext.createOscillator();
    
    // Create sound based on type
    if (sound.emoji.includes('🐕') || sound.emoji.includes('🐱')) {
      // Animal sounds: use triangle wave
      source.type = 'triangle';
      source.frequency.setValueAtTime(0, 150);
    } else if (sound.emoji.includes('🦆')) {
      // Bird sound: use sawtooth wave
      source.type = 'sawtooth';
      source.frequency.setValueAtTime(0, 1000);
    } else if (sound.emoji.includes('🐸')) {
      // Frog sound: use square wave
      source.type = 'square';
      source.frequency.setValueAtTime(0, 200);
    } else if (sound.emoji.includes('🐦')) {
      // Duck sound: use sine wave
      source.type = 'sine';
      source.frequency.setValueAtTime(0, 200);
    } else if (sound.emoji.includes('🐄')) {
      // Cow sound: use sine wave
      source.type = 'sine';
      source.frequency.setValueAtTime(0, 200);
    } else if (sound.emoji.includes('🐴')) {
      // Horse sound: use triangle wave with modulation
      source.type = 'triangle';
      source.frequency.setValueAtTime(0, 150);
      source.frequency.exponentialRampToValueAtTime(0, 1, 0.5);
    } else if (sound.emoji.includes('🚗')) {
      // Car sound: use square wave
      source.type = 'square';
      source.frequency.setValueAtTime(0, 100);
    } else if (sound.emoji.includes('🚂')) {
      // Train sound: use sawtooth + noise
      source.type = 'sawtooth';
      source.frequency.setValueAtTime(0, 100);
      // Add noise
      const bufferSize = audioContext.sampleRate * 2;
      const noiseBuffer = audioContext.createBuffer(1, bufferSize);
      const noiseSource = audioContext.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      source.connect(noiseSource);
    }
    
    // Master gain for overall volume
    const masterGain = audioContext.createGain();
    masterGain.gain.setValueAtTime(0, 0.3);
    
    source.connect(masterGain);
    masterGain.connect(audioContext.destination);
    
    // Play sound
    source.start(0);
    source.stop(audioContext.currentTime + 0.5); // Play for 0.5 seconds
    
    sounds[soundId] = source;
    console.log(`%c🔊 Sound played: ${SOUNDS.find(s => s.id === soundId)?.name}`, 'color: #F59E0B;');
  } catch (e) {
    console.error('Error playing sound:', e);
  }
}

// ============================================
// HUD (Heads-Up Display) Updates
// ============================================

function updateHUD() {
  const currentLevelConfig = LEVELS[gameState.currentLevel];
  
  // Update Level Display
  const levelDisplay = document.getElementById('level-display');
  if (levelDisplay) {
    const levelNum = gameState.currentLevel + 1;
    const totalLevels = LEVELS.length;
    levelDisplay.textContent = `${levelNum}/${totalLevels}`;
  }
  
  // Update Timer Display
  const timerDisplay = document.getElementById('timer-display');
  if (timerDisplay) {
    const remaining = Math.max(0, gameState.timeRemaining);
    timerDisplay.textContent = `${remaining}s`;
    
    // Update timer color based on remaining time
    const timerContainer = document.querySelector('.timer-display');
    timerContainer.classList.remove('warning', 'critical');
    
    if (remaining < 10) {
      timerContainer.classList.add('critical');
    } else if (remaining < 20) {
      timerContainer.classList.add('warning');
    }
  }
  
  // Update Progress Bar
  const progressBar = document.getElementById('progress-bar');
  if (progressBar && currentLevelConfig) {
    const target = currentLevelConfig.scoreRequirement;
    const current = gameState.soundsPlayed;
    const percentage = Math.min(100, (current / target) * 100);
    
    progressBar.style.width = `${percentage}%`;
    progressBar.textContent = `${current}/${target}`;
  }
}

// ============================================
// Game Board & Rendering
// ============================================

function initGameBoard() {
  const gameBoard = document.getElementById('gameBoard');
  
  // Clear existing content (but keep start button if exists)
  const startBtn = document.getElementById('btn-start');
  gameBoard.innerHTML = '';
  
  if (startBtn) {
    gameBoard.appendChild(startBtn);
  }
  
  // Render sound icons
  const currentLevelConfig = LEVELS[gameState.currentLevel];
  const unlockedSounds = SOUNDS.slice(0, currentLevelConfig.targetSounds);
  unlockedSounds.forEach(sound => {
    const icon = createSoundIcon(sound);
    icon.dataset.soundId = sound.id;
    gameBoard.appendChild(icon);
  });
  
  // Update HUD elements
  updateHUD();
}

function createSoundIcon(sound) {
  const icon = document.createElement('div');
  icon.className = 'sound-icon';
  icon.dataset.soundId = sound.id;
  icon.style.backgroundColor = sound.color;
  icon.style.animation = 'pulse 2s ease-in-out';
  
  const emoji = document.createElement('div');
  emoji.className = 'emoji';
  emoji.textContent = sound.emoji;
  emoji.style.fontSize = '3rem';
  
  icon.appendChild(emoji);
  
  return icon;
}

function getUnlockedIcons() {
  return SOUNDS.slice(0, LEVELS[gameState.currentLevel].targetSounds);
}

// ============================================
// Timer System
// ============================================

function startTimer(durationSeconds) {
  const startTime = Date.now();
  
  gameState.timerInterval = setInterval(() => {
    const now = Date.now();
    const elapsed = Math.floor((now - startTime) / 1000);
    const remaining = durationSeconds - elapsed;
    
    gameState.timeRemaining = remaining;
    
    // Update HUD timer display
    updateHUD();
    
    // Check for time up
    if (remaining <= 0 && gameState.isRunning) {
      clearInterval(gameState.timerInterval);
      levelComplete();
    }
  }, 1000);
}

// ============================================
// Game Logic - Core Functions
// ============================================

function startGame() {
  console.log('%c🚀 Game Started', 'color: #4CAF50; font-weight: bold;');
  
  initAudio();
  initGameBoard();
  startTimer(LEVELS[gameState.currentLevel].timeLimit);
  
  gameState.currentLevel = 0;
  gameState.soundsPlayed = 0;
  gameState.sessionStartTime = Date.now();
  gameState.timeRemaining = LEVELS[gameState.currentLevel].timeLimit * 1000;
  gameState.isRunning = true;
  gameState.isPaused = false;
  
  // Add touch events to sound icons
  document.querySelectorAll('.sound-icon').forEach(icon => {
    icon.addEventListener('touchstart', (e) => {
      e.preventDefault();
      
      if (!gameState.isRunning) return;
      
      const soundId = icon.dataset.soundId;
      
      // Visual feedback
      icon.style.transform = 'scale(1.2)';
      icon.style.transition = 'transform 0.1s';
      
      // Play sound
      playSound(soundId);
      
      // Update score
      gameState.soundsPlayed++;
      updateScore();
      
      // Check if level complete
      const currentLevelConfig = LEVELS[gameState.currentLevel];
      if (gameState.soundsPlayed >= currentLevelConfig.scoreRequirement) {
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

function updateScore() {
  // Update HUD progress bar
  updateHUD();
}

function levelComplete() {
  console.log(`%c🎉 Level ${gameState.currentLevel + 1} Complete!`, 'color: #4CAF50; font-weight: bold;');
  
  clearInterval(gameState.timerInterval);
  
  // Play celebration sound
  playSound(SOUNDS.find(s => s.id === 'baby').id);
  
  // Show modal
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <h2 class="modal-title">🎉 ¡Nivel Completado!</h2>
      <p class="modal-text">¡Excelente! Tocaste ${gameState.soundsPlayed} sonidos.</p>
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
  gameState.soundsPlayed = 0;
  gameState.sessionStartTime = Date.now();
  gameState.timeRemaining = LEVELS[nextLevelIndex].timeLimit * 1000;
  gameState.isRunning = true;
  gameState.isPaused = false;
  
  // Clear board and reinitialize
  initGameBoard();
  startTimer(LEVELS[nextLevelIndex].timeLimit);
}

// ============================================
// Persistence (localStorage)
// ============================================

function saveProgress() {
  const progressData = {
    currentLevel: gameState.currentLevel,
    soundsPlayed: gameState.soundsPlayed,
    unlockedIcons: getUnlockedIcons().map(s => s.id),
    sessionTimestamp: Date.now()
  };
  
  localStorage.setItem('caja-sonidos-progress', JSON.stringify(progressData));
  console.log('%c💾 Progress saved', 'color: #4CAF50;');
}

function loadProgress() {
  const savedData = localStorage.getItem('caja-sonidos-progress');
  
  if (savedData) {
    try {
      const progressData = JSON.parse(savedData);
      
      if (progressData.currentLevel !== undefined) {
        gameState.currentLevel = progressData.currentLevel;
      }
      
      if (progressData.soundsPlayed !== undefined) {
        gameState.soundsPlayed = progressData.soundsPlayed;
      }
      
      console.log('%c💾 Progress loaded', 'color: #4CAF50;');
    } catch (e) {
      console.error('Error loading progress:', e);
    }
  }
}

// ============================================
// Responsive Design
// ============================================

function handleResize() {
  const gameBoard = document.getElementById('gameBoard');
  const icons = document.querySelectorAll('.sound-icon');
  
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
  
  // Adjust icons per row
  const container = document.getElementById('gameBoard');
  const containerWidth = container.offsetWidth;
  const padding = 20;
  const availableWidth = containerWidth - padding * 2;
  const currentLevelConfig = LEVELS[gameState.currentLevel];
  const targetSounds = currentLevelConfig.targetSounds;
  
  // Calculate columns based on unlocked sounds
  let columns = 3;
  if (targetSounds <= 3) {
    columns = 2;
  }
  if (screenWidth >= 768) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(auto-fill, minmax(200px, 1fr))`;
    container.style.gap = '10px';
  } else if (screenWidth >= 480) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(auto-fill, minmax(160px, 1fr))`;
    container.style.gap = '8px';
  } else {
    // Mobile
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))';
    container.style.gap = '5px';
  }
}

// ============================================
// Initialization
// ============================================

window.addEventListener('DOMContentLoaded', () => {
  console.log('%c📱 DOM Loaded', 'color: #F59E0B; font-weight: bold;');
  loadProgress();
  
  // Wait for user interaction to start
  const startBtn = document.createElement('button');
  startBtn.id = 'btn-start';
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
  
  // Initial HUD update
  updateHUD();
  
  // Initial resize
  handleResize();
});

window.addEventListener('resize', handleResize);
