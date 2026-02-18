/**
 * Burbujas Mágicas - Magic Bubbles
 * A sensory game for babies (0-1 years)
 *
 * Features:
 * - Floating colorful bubbles
 * - Pop on touch/click with visual feedback
 * - Sound effects
 * - LEVEL SYSTEM with defined goals
 * - Responsive to touch and mouse
 */

// ============================================
// Game Configuration
// ============================================
const CONFIG = {
  maxBubbles: 15,
  minBubbles: 5,
  bubbleSpeedMin: 0.5,
  bubbleSpeedMax: 2,
  // Bubble sizes will be calculated based on screen size
  get bubbleSizeMin() {
    return Math.max(50, Math.min(window.innerWidth, window.innerHeight) * 0.06);
  },
  get bubbleSizeMax() {
    return Math.max(80, Math.min(window.innerWidth, window.innerHeight) * 0.12);
  },
  colors: [
    'rgba(255, 107, 107, 0.7)',   // Red
    'rgba(78, 205, 196, 0.7)',    // Teal
    'rgba(255, 230, 109, 0.7)',   // Yellow
    'rgba(168, 85, 247, 0.7)',    // Purple
    'rgba(236, 72, 153, 0.7)',    // Pink
    'rgba(59, 130, 246, 0.7)',    // Blue
    'rgba(34, 197, 94, 0.7)',     // Green
    'rgba(249, 115, 22, 0.7)'     // Orange
  ],
  popCelebrationEmojis: ['🎉', '⭐', '✨', '🌟', '💫', '🎊', '👏', '😊'],

  // Level system - each level has a target number of bubbles to pop
  levels: [
    { target: 5,  timeLimit: 30,  name: "Nivel 1", name_en: "Level 1" },   // 5 bubbles in 30 seconds
    { target: 8,  timeLimit: 35,  name: "Nivel 2", name_en: "Level 2" },   // 8 bubbles in 35 seconds
    { target: 10, timeLimit: 40,  name: "Nivel 3", name_en: "Level 3" },   // 10 bubbles in 40 seconds
    { target: 12, timeLimit: 45,  name: "Nivel 4", name_en: "Level 4" },   // 12 bubbles in 45 seconds
    { target: 15, timeLimit: 50,  name: "Nivel 5", name_en: "Level 5" },   // 15 bubbles in 50 seconds (FINAL)
  ]
};

// ============================================
// Game State
// ============================================
const state = {
  bubbles: [],
  currentLevel: 0,
  bubblesPopped: 0,
  bubblesPoppedInLevel: 0,
  timeRemaining: 0,
  isRunning: true,
  isPaused: false,
  isLevelComplete: false,
  isGameOver: false,
  lastTime: 0,
  canvas: null,
  ctx: null,
  audioContext: null,
  // Persistent progress
  unlockedLevels: 1,
  totalGamesPlayed: 0,
  totalBubblesPopped: 0
};

// ============================================
// Audio System
// ============================================

/**
 * Initialize Web Audio API
 */
function initAudio() {
  try {
    state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  } catch (e) {
    console.warn('Web Audio API not supported');
  }
}

/**
 * Create a pop sound using Web Audio API
 */
function playPopSound(size) {
  if (!state.audioContext) {
    initAudio();
    if (!state.audioContext) return;
  }

  if (state.audioContext.state === 'suspended') {
    state.audioContext.resume();
  }

  const ctx = state.audioContext;
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  const baseFreq = 400 + (120 - size) * 5;

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(baseFreq, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(baseFreq * 0.5, ctx.currentTime + 0.1);

  gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.15);
}

/**
 * Play level complete sound
 */
function playLevelCompleteSound() {
  if (!state.audioContext) return;

  const ctx = state.audioContext;
  const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6

  notes.forEach((freq, i) => {
    setTimeout(() => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    }, i * 150);
  });
}

/**
 * Play game over sound
 */
function playGameOverSound() {
  if (!state.audioContext) return;

  const ctx = state.audioContext;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(400, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.5);
  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.5);
}

// ============================================
// Bubble Class
// ============================================
class Bubble {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = this.canvas.height + 100;
    const minSize = CONFIG.bubbleSizeMin;
    const maxSize = CONFIG.bubbleSizeMax;
    this.radius = minSize + Math.random() * (maxSize - minSize);
    this.speed = CONFIG.bubbleSpeedMin + Math.random() * (CONFIG.bubbleSpeedMax - CONFIG.bubbleSpeedMin);
    this.color = CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)];
    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleSpeed = 0.02 + Math.random() * 0.03;
    this.popped = false;
    this.scale = 0;
    this.appearing = true;
    this.resetTime = Date.now();
  }

  update(deltaTime) {
    if (this.appearing) {
      this.scale += deltaTime * 3;
      if (this.scale >= 1) {
        this.scale = 1;
        this.appearing = false;
      }
    }

    this.y -= this.speed * deltaTime * 60;
    this.wobble += this.wobbleSpeed;
    this.x += Math.sin(this.wobble) * 0.5;

    if (this.y < -this.radius) {
      this.reset();
    }
  }

  draw(ctx) {
    const drawRadius = this.radius * this.scale;

    ctx.save();

    ctx.beginPath();
    ctx.arc(this.x, this.y, drawRadius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x - drawRadius * 0.3, this.y - drawRadius * 0.3, drawRadius * 0.2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y, drawRadius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
  }

  checkHit(x, y) {
    if (this.appearing || this.popped) return false;

    const dx = x - this.x;
    const dy = y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance <= this.radius;
  }

  pop() {
    this.popped = true;
    playPopSound(this.radius);
    showCelebration(this.x, this.y);
  }
}

// ============================================
// Visual Effects
// ============================================

function showCelebration(x, y) {
  const celebration = document.createElement('div');
  celebration.className = 'celebration';
  celebration.textContent = CONFIG.popCelebrationEmojis[
    Math.floor(Math.random() * CONFIG.popCelebrationEmojis.length)
  ];
  celebration.style.left = x + 'px';
  celebration.style.top = y + 'px';
  document.body.appendChild(celebration);

  setTimeout(() => {
    celebration.remove();
  }, 500);
}

// ============================================
// Level System
// ============================================

/**
 * Start a specific level
 */
function startLevel(levelIndex) {
  if (levelIndex >= CONFIG.levels.length) {
    showGameComplete();
    return;
  }

  state.currentLevel = levelIndex;
  state.bubblesPoppedInLevel = 0;
  state.timeRemaining = CONFIG.levels[levelIndex].timeLimit;
  state.isLevelComplete = false;
  state.isGameOver = false;
  state.isPaused = false;

  // Reset all bubbles
  state.bubbles.forEach(bubble => {
    bubble.reset();
  });

  updateUI();
  hideAllModals();
}

/**
 * Check if level is complete
 */
function checkLevelComplete() {
  const level = CONFIG.levels[state.currentLevel];

  if (state.bubblesPoppedInLevel >= level.target) {
    state.isLevelComplete = true;
    state.isPaused = true;
    playLevelCompleteSound();

    // Unlock next level
    if (state.currentLevel + 1 >= state.unlockedLevels) {
      state.unlockedLevels = Math.min(state.currentLevel + 2, CONFIG.levels.length);
      saveProgress();
    }

    showLevelComplete();
  }
}

/**
 * Check for game over (time runs out)
 */
function checkGameOver() {
  if (state.timeRemaining <= 0 && !state.isLevelComplete) {
    state.isGameOver = true;
    state.isPaused = true;
    playGameOverSound();
    showGameOver();
  }
}

// ============================================
// UI Updates
// ============================================

/**
 * Update all UI elements
 */
function updateUI() {
  const level = CONFIG.levels[state.currentLevel];

  // Level number
  const levelEl = document.getElementById('levelNumber');
  if (levelEl) {
    levelEl.textContent = `${state.currentLevel + 1}/${CONFIG.levels.length}`;
  }

  // Target bubbles
  const targetEl = document.getElementById('targetBubbles');
  if (targetEl) {
    targetEl.textContent = state.bubblesPoppedInLevel;
  }

  // Target needed
  const targetNeededEl = document.getElementById('targetNeeded');
  if (targetNeededEl) {
    targetNeededEl.textContent = level.target;
  }

  // Progress bar
  const progress = (state.bubblesPoppedInLevel / level.target) * 100;
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    progressBar.style.width = Math.min(progress, 100) + '%';
  }

  // Timer bar
  const timerProgress = (state.timeRemaining / level.timeLimit) * 100;
  const timerBar = document.getElementById('timerBar');
  if (timerBar) {
    timerBar.style.width = Math.max(timerProgress, 0) + '%';
    // Change color when time is running low
    if (timerProgress < 25) {
      timerBar.style.background = 'linear-gradient(90deg, #FF6B6B, #EF4444)';
    } else {
      timerBar.style.background = 'linear-gradient(90deg, #4ECDC4, #22C55E)';
    }
  }
}

// ============================================
// Modal System
// ============================================

function hideAllModals() {
  document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}

function showLevelComplete() {
  const modal = document.getElementById('levelCompleteModal');
  if (modal) {
    const lang = document.documentElement.lang || 'es';
    const level = CONFIG.levels[state.currentLevel];

    document.getElementById('levelCompleteTitle').textContent =
      lang === 'es' ? '¡Nivel Completado!' : 'Level Complete!';
    document.getElementById('levelCompleteMessage').textContent =
      lang === 'es' ? `¡Hiciste ${state.bubblesPoppedInLevel} burbujas!` : `You popped ${state.bubblesPoppedInLevel} bubbles!`;

    const nextBtn = document.getElementById('nextLevelBtn');
    if (state.currentLevel + 1 >= CONFIG.levels.length) {
      // Last level - show game complete button instead
      nextBtn.textContent = lang === 'es' ? '¡Juego Terminado!' : 'Game Complete!';
      nextBtn.onclick = showGameComplete;
    } else {
      nextBtn.textContent = lang === 'es' ? 'Siguiente Nivel →' : 'Next Level →';
      nextBtn.onclick = () => startLevel(state.currentLevel + 1);
    }

    modal.style.display = 'flex';
  }
}

function showGameOver() {
  const modal = document.getElementById('gameOverModal');
  if (modal) {
    const lang = document.documentElement.lang || 'es';
    const level = CONFIG.levels[state.currentLevel];

    document.getElementById('gameOverTitle').textContent =
      lang === 'es' ? '¡Se Acabó el Tiempo!' : 'Time\'s Up!';
    document.getElementById('gameOverMessage').textContent =
      lang === 'es'
        ? `Hiciste ${state.bubblesPoppedInLevel} de ${level.target} burbujas.`
        : `You popped ${state.bubblesPoppedInLevel} of ${level.target} bubbles.`;

    modal.style.display = 'flex';
  }
}

function showGameComplete() {
  const modal = document.getElementById('gameCompleteModal');
  if (modal) {
    const lang = document.documentElement.lang || 'es';

    document.getElementById('gameCompleteTitle').textContent =
      lang === 'es' ? '¡Felicidades!' : 'Congratulations!';
    document.getElementById('gameCompleteMessage').textContent =
      lang === 'es'
        ? `¡Completaste todos los niveles! Total: ${state.bubblesPopped} burbujas.`
        : `You completed all levels! Total: ${state.bubblesPopped} bubbles.`;

    modal.style.display = 'flex';
  }
}

// ============================================
// Persistence
// ============================================

function saveProgress() {
  try {
    const progress = {
      unlockedLevels: state.unlockedLevels,
      totalGamesPlayed: state.totalGamesPlayed,
      totalBubblesPopped: state.totalBubblesPopped,
      lastPlayed: new Date().toISOString()
    };
    localStorage.setItem('burbujas-magicas-progress', JSON.stringify(progress));
  } catch (e) {
    console.warn('Could not save progress:', e);
  }
}

function loadProgress() {
  try {
    const saved = localStorage.getItem('burbujas-magicas-progress');
    if (saved) {
      const progress = JSON.parse(saved);
      state.unlockedLevels = progress.unlockedLevels || 1;
      state.totalGamesPlayed = progress.totalGamesPlayed || 0;
      state.totalBubblesPopped = progress.totalBubblesPopped || 0;
    }
  } catch (e) {
    console.warn('Could not load progress:', e);
  }
}

// ============================================
// Input Handling
// ============================================

function handleInput(x, y) {
  if (state.isPaused) return;

  for (let i = state.bubbles.length - 1; i >= 0; i--) {
    const bubble = state.bubbles[i];
    if (bubble.checkHit(x, y)) {
      bubble.pop();

      state.bubblesPopped++;
      state.bubblesPoppedInLevel++;
      state.totalBubblesPopped++;
      updateUI();
      checkLevelComplete();

      // Mark bubble for respawn - will be handled in game loop
      bubble.respawnTime = Date.now() + 500;

      if (window.gtag) {
        gtag('event', 'bubble_pop', {
          'game_id': 'burbujas-magicas',
          'level': state.currentLevel + 1
        });
      }

      break;
    }
  }
}

function setupInputs() {
  const canvas = state.canvas;

  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    for (const touch of e.changedTouches) {
      handleInput(touch.clientX, touch.clientY);
    }
  }, { passive: false });

  canvas.addEventListener('click', (e) => {
    handleInput(e.clientX, e.clientY);
  });

  // Retry button
  const retryBtn = document.getElementById('retryBtn');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      startLevel(state.currentLevel);
    });
  }

  // Menu button
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      window.location.href = '../../index.html';
    });
  }

  // Back button
  const backBtn = document.getElementById('backBtn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (window.gtag) {
        gtag('event', 'exit_game', {
          'game_id': 'burbujas-magicas',
          'level': state.currentLevel + 1,
          'popped': state.bubblesPopped
        });
      }
      window.location.href = '../../index.html';
    });
  }

  document.addEventListener('touchstart', initAudio, { once: true });
  document.addEventListener('click', initAudio, { once: true });
}

// ============================================
// Game Loop
// ============================================

function gameLoop(timestamp) {
  if (!state.isRunning) return;

  const deltaTime = (timestamp - state.lastTime) / 1000;
  state.lastTime = timestamp;

  // Update timer if not paused
  if (!state.isPaused && !state.isLevelComplete && !state.isGameOver) {
    state.timeRemaining -= deltaTime;
    updateUI();
    checkGameOver();
  }

  // Clear canvas
  state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);

  // Handle bubble respawns (safe even when paused)
  const now = Date.now();
  state.bubbles.forEach(bubble => {
    if (bubble.popped && bubble.respawnTime && now >= bubble.respawnTime) {
      bubble.reset();
      bubble.popped = false;
      delete bubble.respawnTime;
    }
  });

  // Spawn new bubbles if needed (only when not paused/complete/gameover)
  if (!state.isPaused && !state.isLevelComplete && !state.isGameOver) {
    const activeBubbles = state.bubbles.filter(b => !b.popped);
    if (activeBubbles.length < CONFIG.minBubbles) {
      const inactiveBubbles = state.bubbles.filter(b => b.popped && !b.respawnTime);
      if (inactiveBubbles.length > 0) {
        inactiveBubbles[0].reset();
        inactiveBubbles[0].popped = false;
      }
    }
  }

  // Update and draw bubbles
  state.bubbles.forEach(bubble => {
    if (!bubble.popped && !state.isPaused) {
      bubble.update(deltaTime);
    }
    bubble.draw(state.ctx);
  });

  requestAnimationFrame(gameLoop);
}

// ============================================
// Canvas Setup
// ============================================

function resizeCanvas() {
  const canvas = state.canvas;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Recalculate bubble sizes for new screen dimensions
  state.bubbles.forEach(bubble => {
    const minSize = CONFIG.bubbleSizeMin;
    const maxSize = CONFIG.bubbleSizeMax;
    if (bubble.radius < minSize || bubble.radius > maxSize) {
      bubble.radius = minSize + Math.random() * (maxSize - minSize);
    }
  });
}

function setupCanvas() {
  state.canvas = document.getElementById('gameCanvas');
  state.ctx = state.canvas.getContext('2d');

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Create bubbles with staggered initial positions
  for (let i = 0; i < CONFIG.maxBubbles; i++) {
    const bubble = new Bubble(state.canvas);
    // Distribute bubbles across the screen initially
    bubble.y = state.canvas.height * 0.8 + Math.random() * (state.canvas.height * 0.5);
    bubble.scale = 1;
    bubble.appearing = false;
    state.bubbles.push(bubble);
  }
}

// ============================================
// Initialization
// ============================================

function init() {
  state.totalGamesPlayed++;
  loadProgress();
  setupCanvas();
  setupInputs();

  // Start level 1
  startLevel(0);

  if (window.gtag) {
    gtag('event', 'game_start', {
      'game_id': 'burbujas-magicas'
    });
  }

  setTimeout(() => {
    const instructions = document.getElementById('instructions');
    if (instructions) {
      instructions.classList.add('hidden');
    }
  }, 4000);

  state.lastTime = performance.now();
  requestAnimationFrame(gameLoop);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Global functions for button clicks
window.startLevel = startLevel;
window.retryLevel = () => startLevel(state.currentLevel);
window.goToMenu = () => window.location.href = '../../index.html';
