/**
 * Caja de Sonidos Mágica - Game Logic
 * Target: 1-2 years old children
 * Game Design Rules: Section 7 (Levels & Progression) compliant
 */

// ============================================
// Configuration & State
// ============================================

const SOUNDS = [
  { id: 'dog', name: 'Perrito', emoji: '🐕', sound: 'woof', color: '#8B4513' },
  { id: 'cat', name: 'Gatito', emoji: '🐱', sound: 'meow', color: '#F59E0B' },
  { id: 'bell', name: 'Campanita', emoji: '🔔', sound: 'ding', color: '#FFD700' },
  { id: 'duck', name: 'Patito', emoji: '🦆', sound: 'quack', color: '#0077B6' },
  { id: 'frog', name: 'Ranita', emoji: '🐸', sound: 'croak', color: '#4CAF50' },
  { id: 'bird', name: 'Pajarito', emoji: '🐦', sound: 'tweet', color: '#FFC107' },
  { id: 'cow', name: 'Vaquita', emoji: '🐄', sound: 'moo', color: '#795548' },
  { id: 'horse', name: 'Caballito', emoji: '🐴', sound: 'neigh', color: '#F59E0B' },
  { id: 'car', name: 'Carrito', emoji: '🚗', sound: 'beep', color: '#FF9800' },
  { id: 'train', name: 'Trenecito', emoji: '🚂', sound: 'choochoo', color: '#37474F' },
  { id: 'phone', name: 'Teléfono', emoji: '📞', sound: 'ring', color: '#FFEB3B' },
  { id: 'music', name: 'Pianito', emoji: '🎹', sound: 'piano', color: '#E91E63' }
  { id: 'drum', name: 'Tambor', emoji: '🥁', sound: 'boom', color: '#9E9AEC' }
  { id: 'horn', name: 'Trompita', emoji: '🎺', sound: 'toot', color: '#F57F17' },
  { id: 'guitar', name: 'Guitarrita', emoji: '🎸', sound: 'strum', color: '#FF6B6B' }
  { id: 'baby', name: 'Bebé', emoji: '👶', sound: 'giggle', color: '#F48FB' }
];

const GAME_CONFIG = {
  targetAge: '1-2 años',
  sessionDuration: 300000, // 5 minutes
  iconsPerRow: 3,
  minIcons: 6,
  maxIcons: 12
};

let gameState = {
  currentLevel: 0,
  soundsPlayed: 0,
  sessionStartTime: null,
  timeRemaining: 0,
  isRunning: false,
  isPaused: false,
  unlockedIcons: [],
  levels: [
    {
      level: 1,
      targetSounds: 3, // Play 3 different sounds
      timeLimit: 30, // 30 seconds
      scoreRequirement: 5 // Need to play 5 sounds
    },
    {
      level: 2,
      targetSounds: 4,
      timeLimit: 35,
      scoreRequirement: 7
    },
    {
      level: 3,
      targetSounds: 5,
      timeLimit: 40,
      scoreRequirement: 9
    },
    {
      level: 4,
      targetSounds: 6,
      timeLimit: 45,
      scoreRequirement: 11
    },
    {
      level: 5,
      targetSounds: 8,
      timeLimit: 50,
      scoreRequirement: 13
    }
  ]
};

// Web Audio API for sound playback
let audioContext = null;
let sounds = {};

// ============================================
// Web Audio API Setup
// ============================================

function initAudio() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();
    console.log('%c🎵 Audio Context Initialized', 'color: #F59E0B; font-weight: bold;');
  } catch (e) {
    console.warn('Web Audio API not supported:', e);
  }
}

function loadSound(soundId) {
  if (sounds[soundId]) {
    console.log(`%c🎵 Sound loaded: ${SOUNDS.find(s => s.id === soundId)?.name}`, 'color: #4CAF50;');
    return sounds[soundId];
  }
  return null;
}

function playSound(soundId) {
  if (!audioContext || !sounds[soundId]) {
    return;
  }

  try {
    const sound = sounds[soundId];
    const source = audioContext.createOscillator();
    
    // Create sound based on type
    if (sound.emoji.includes('🐕') || sound.emoji.includes('🐱') || sound.emoji.includes('🐸') || sound.emoji.includes('🐄')) {
      // Animal sounds: use triangle wave
      source.type = 'triangle';
      source.frequency.setValueAtTime(0, 150);
    } else if (sound.emoji.includes('🦆')) {
      // Bird sound: use sawtooth wave
      source.type = 'sawtooth';
      source.frequency.setValueAtTime(0, 1000);
    } else if (sound.emoji.includes('🐦')) {
      // Duck sound: use square wave
      source.type = 'square';
      source.frequency.setValueAtTime(0, 200);
    } else if (sound.emoji.includes('🐴')) {
      // Cow sound: use sine wave
      source.type = 'sine';
      source.frequency.setValueAtTime(0, 200);
    } else if (sound.emoji.includes('🚗')) {
      // Car sound: use square wave
      source.type = 'square';
      source.frequency.setValueAtTime(0, 100);
    } else if (sound.emoji.includes('🎹')) {
      // Horse sound: use triangle wave with modulation
      source.type = 'triangle';
      source.frequency.setValueAtTime(0, 150);
      source.frequency.exponentialRampToValueAtTime(0, 1, 0.5);
    } else if (sound.emoji.includes('🎺')) {
      // Train sound: use sawtooth + noise
      source.type = 'sawtooth';
      source.frequency.setValueAtTime(0, 100);
      // Add noise
      const bufferSize = audioContext.sampleRate * 2;
      const noiseBuffer = audioContext.createBuffer(1, bufferSize);
      const noiseSource = audioContext.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      source.connect(noiseSource);
    } else if (sound.emoji.includes('🎸')) {
      // Guitar sound: use triangle wave with frequency modulation
      source.type = 'triangle';
      source.frequency.setValueAtTime(0, 200);
      source.frequency.linearRampToValueAtTime(1, 400, 0.5);
    } else if (sound.emoji.includes('🥁')) {
      // Drum sound: use sine wave with envelope
      source.type = 'sine';
      source.frequency.setValueAtTime(0, 100);
      // Add envelope
      source.frequency.exponentialRampToValueAtTime(0, 0.01, 50);
    } else if (sound.emoji.includes('🎺')) {
      // Horn sound: use sine wave with complex envelope
      source.type = 'sine';
      source.frequency.setValueAtTime(0, 200);
    } else if (sound.emoji.includes('📞')) {
      // Phone sound: use sine wave with harmonics
      source.type = 'sine';
      source.frequency.setValueAtTime(0, 880);
      // Add multiple oscillators for ringtone
      const osc2 = audioContext.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(0, 1760); // Harmonic
      osc2.connect(source.destination);
    } else if (sound.emoji.includes('👶')) {
      // Baby sound: use sine wave with vibrato
      source.type = 'sine';
      source.frequency.setValueAtTime(0, 300);
      source.detune.setValueAtTime(0, 2);
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
// Game Board & Rendering
// ============================================

function initGameBoard() {
  const gameBoard = document.getElementById('gameBoard');
  const header = document.querySelector('.game-title');
  
  // Clear existing content
  gameBoard.innerHTML = '';
  
  // Render sound icons
  const unlockedIcons = getUnlockedIcons();
  unlockedIcons.forEach(soundId => {
    const sound = SOUNDS.find(s => s.id === soundId);
    const icon = createSoundIcon(sound);
    icon.dataset.soundId = soundId;
    gameBoard.appendChild(icon);
  });
  
  // Update header
  const levelNum = gameState.currentLevel + 1;
  const targetSounds = gameState.levels[gameState.currentLevel].targetSounds;
  header.textContent = `🎵 Caja de Sonidos Mágica - Nivel ${levelNum}`;
  
  // Calculate score
  const scoreText = document.createElement('div');
  scoreText.className = 'score';
  scoreText.innerHTML = `🔊 Sonidos: ${gameState.soundsPlayed}`;
  gameBoard.appendChild(scoreText);
  
  // Add home button
  const btnHome = document.createElement('button');
  btnHome.className = 'btn-primary';
  btnHome.id = 'btn-home';
  btnHome.innerHTML = '<span class="icon">🏠</span> Inicio';
  btnHome.onclick = () => window.location.href = '/';
  gameBoard.appendChild(btnHome);
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
  return SOUNDS.slice(0, gameState.levels[gameState.currentLevel].targetSounds);
}

function playRandomSoundFromLevel() {
  const level = gameState.levels[gameState.currentLevel];
  const availableSounds = SOUNDS.slice(0, level.targetSounds);
  
  if (availableSounds.length === 0) {
    return;
  }
  
  const randomSound = availableSounds[Math.floor(Math.random() * availableSounds.length)];
  playSound(randomSound.id);
}

// ============================================
// Game Logic
// ============================================

function startGame() {
  console.log('%c🚀 Game Started', 'color: #4CAF50; font-weight: bold;');
  
  initAudio();
  initGameBoard();
  
  gameState.currentLevel = 0;
  gameState.soundsPlayed = 0;
  gameState.sessionStartTime = Date.now();
  gameState.isRunning = true;
  gameState.isPaused = false;
  gameState.timeRemaining = gameState.sessionDuration;
  
  // Start timer
  gameState.timerInterval = setInterval(updateTimer, 1000);
  
  // Auto-play random sound from level
  playRandomSoundFromLevel();
  
  // Add touch events
  document.querySelectorAll('.sound-icon').forEach(icon => {
    icon.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const soundId = icon.dataset.soundId;
      
      // Visual feedback
      icon.style.transform = 'scale(1.2)';
      icon.style.transition = 'transform 0.1s';
      
      // Play sound
      playSound(soundId);
      
      // Reset after animation
      setTimeout(() => {
        icon.style.transform = 'scale(1)';
        icon.style.transition = 'transform 0.1s';
      }, 100);
      
      // Score
      gameState.soundsPlayed++;
      updateScore();
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
  const now = Date.now();
  const elapsed = now - gameState.sessionStartTime;
  gameState.timeRemaining = gameState.sessionDuration - elapsed;
  
  // Update timer display
  const timerText = document.getElementById('timer');
  if (timerText) {
    const seconds = Math.ceil(gameState.timeRemaining / 1000);
    timerText.textContent = `${seconds}s`;
    
    // Change color based on remaining time
    if (gameState.timeRemaining < 10000) {
      timerText.style.color = '#4CAF50'; // Green
    } else if (gameState.timeRemaining < 5000) {
      timerText.style.color = '#FFC107'; // Orange
    } else {
      timerText.style.color = '#EF4444'; // Red
    }
  }
  
  // Check for time up
  if (gameState.timeRemaining <= 0 && gameState.isRunning) {
    levelComplete();
  }
}

function updateScore() {
  const scoreText = document.querySelector('.score');
  if (scoreText) {
    scoreText.innerHTML = `🔊 Sonidos: ${gameState.soundsPlayed}`;
  }
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
  
  if (nextLevelIndex >= gameState.levels.length) {
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
  
  gameState.currentLevel = nextLevelIndex;
  gameState.soundsPlayed = 0;
  gameState.sessionStartTime = Date.now();
  gameState.timeRemaining = gameState.levels[nextLevelIndex].timeLimit * 1000;
  gameState.isRunning = true;
  gameState.isPaused = false;
  
  // Clear board and reinitialize
  initGameBoard();
  
  // Start new timer
  gameState.timerInterval = setInterval(updateTimer, 1000);
  
  // Auto-play random sound from new level
  playRandomSoundFromLevel();
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
  
  if (screenWidth >= 768) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
    container.style.gap = '10px';
  } else if (screenWidth >= 480) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(160px, 1fr))';
    container.style.gap = '8px';
  } else {
    // Mobile
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))';
    container.style.gap = '5px';
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', () => {
  console.log('%c📱 DOM Loaded', 'color: #4CAF50; font-weight: bold;');
  
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
