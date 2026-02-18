// Math Blaster - Game Logic

// =====================
// GAME CONFIGURATION
// =====================

const LEVELS = [
  {
    level: 1,
    target: 5,
    timeLimit: 40,
    operations: ['add'],
    numberRange: [1, 10],
    asteroidSpeed: 1.5,
    spawnRate: 1500
  },
  {
    level: 2,
    target: 8,
    timeLimit: 50,
    operations: ['add'],
    numberRange: [1, 15],
    asteroidSpeed: 2.0,
    spawnRate: 1200
  },
  {
    level: 3,
    target: 10,
    timeLimit: 55,
    operations: ['add', 'subtract'],
    numberRange: [1, 20],
    asteroidSpeed: 2.5,
    spawnRate: 1000
  },
  {
    level: 4,
    target: 12,
    timeLimit: 60,
    operations: ['add', 'subtract'],
    numberRange: [1, 30],
    asteroidSpeed: 3.0,
    spawnRate: 900
  },
  {
    level: 5,
    target: 15,
    timeLimit: 60,
    operations: ['add', 'subtract'],
    numberRange: [1, 40],
    asteroidSpeed: 3.5,
    spawnRate: 800
  }
];

// =====================
// GAME STATE
// =====================

const gameState = {
  currentLevel: 0,
  asteroidsDestroyed: 0,
  score: 0,
  levelScore: 0,
  timeRemaining: 0,
  isRunning: false,
  isLevelComplete: false,
  isGameOver: false,
  unlockedLevels: 1,
  highScore: 0,
  currentProblem: null,
  currentAnswer: null,
  asteroids: [],
  spawnInterval: null,
  gameLoop: null,
  timerInterval: null
};

// =====================
// DOM ELEMENTS
// =====================

const elements = {
  // Screens
  mainMenu: document.getElementById('main-menu'),
  gameScreen: document.getElementById('game-screen'),

  // Buttons
  btnStart: document.getElementById('btn-start'),
  btnLevelSelect: document.getElementById('btn-level-select'),
  btnBack: document.getElementById('btn-back'),
  btnNextLevel: document.getElementById('btn-next-level'),
  btnRetry: document.getElementById('btn-retry'),
  btnMenu: document.getElementById('btn-menu'),
  btnPlayAgain: document.getElementById('btn-play-again'),
  btnCloseLevelSelect: document.getElementById('btn-close-level-select'),

  // HUD
  currentLevel: document.getElementById('current-level'),
  score: document.getElementById('score'),
  asteroidsDestroyed: document.getElementById('asteroids-destroyed'),
  asteroidsTarget: document.getElementById('asteroids-target'),
  timeRemaining: document.getElementById('time-remaining'),
  progressFill: document.getElementById('progress-fill'),
  timerFill: document.getElementById('timer-fill'),
  mathProblem: document.getElementById('math-problem'),
  answerOptions: document.getElementById('answer-options'),
  gameArea: document.getElementById('game-area'),

  // Modals
  levelSelectModal: document.getElementById('level-select-modal'),
  levelCompleteModal: document.getElementById('level-complete-modal'),
  timeUpModal: document.getElementById('time-up-modal'),
  gameCompleteModal: document.getElementById('game-complete-modal'),

  // Menu Stats
  maxUnlocked: document.getElementById('max-unlocked'),
  highScoreDisplay: document.getElementById('high-score-display'),

  // Modal Elements
  levelScore: document.getElementById('level-score'),
  destroyedCount: document.getElementById('destroyed-count'),
  targetCount: document.getElementById('target-count'),
  finalScore: document.getElementById('final-score'),
  highScore: document.getElementById('high-score'),
  levelButtons: document.getElementById('level-buttons')
};

// =====================
// UTILITY FUNCTIONS
// =====================

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// =====================
// LOCAL STORAGE
// =====================

function saveProgress() {
  const progressData = {
    unlockedLevels: gameState.unlockedLevels,
    highScore: gameState.highScore,
    lastPlayed: new Date().toISOString()
  };
  localStorage.setItem('math-blaster-progress', JSON.stringify(progressData));
}

function loadProgress() {
  try {
    const saved = localStorage.getItem('math-blaster-progress');
    if (saved) {
      const progress = JSON.parse(saved);
      gameState.unlockedLevels = progress.unlockedLevels || 1;
      gameState.highScore = progress.highScore || 0;
    }
  } catch (error) {
    console.error('Error loading progress:', error);
    gameState.unlockedLevels = 1;
    gameState.highScore = 0;
  }
}

function resetProgress() {
  gameState.unlockedLevels = 1;
  gameState.highScore = 0;
  localStorage.removeItem('math-blaster-progress');
}

// =====================
// MATH PROBLEM GENERATION
// =====================

function generateMathProblem(levelIndex) {
  const level = LEVELS[levelIndex];
  const op = level.operations[randomInt(0, level.operations.length - 1)];
  const [min, max] = level.numberRange;

  let num1, num2, answer, problem;

  if (op === 'add') {
    num1 = randomInt(min, max);
    num2 = randomInt(min, max);
    answer = num1 + num2;
    problem = `${num1} + ${num2} = ?`;
  } else if (op === 'subtract') {
    num1 = randomInt(min + 1, max);
    num2 = randomInt(min, num1);
    answer = num1 - num2;
    problem = `${num1} - ${num2} = ?`;
  }

  return { problem, answer, num1, num2, op };
}

function generateWrongAnswers(correctAnswer) {
  const wrongAnswers = new Set();
  while (wrongAnswers.size < 3) {
    const offset = randomInt(-10, 10);
    const wrong = correctAnswer + offset;
    if (wrong > 0 && wrong !== correctAnswer) {
      wrongAnswers.add(wrong);
    }
  }
  return Array.from(wrongAnswers);
}

// =====================
// ASTEROID SYSTEM
// =====================

function createAsteroid() {
  if (!gameState.isRunning || gameState.isLevelComplete || gameState.isGameOver) {
    return;
  }

  const gameArea = elements.gameArea;
  const areaWidth = gameArea.offsetWidth;
  const areaHeight = gameArea.offsetHeight;
  const level = LEVELS[gameState.currentLevel];

  // Generate random answer for asteroid
  const asteroidNumber = randomInt(level.numberRange[0], level.numberRange[1]);

  const asteroid = document.createElement('div');
  asteroid.className = 'asteroid';
  asteroid.textContent = asteroidNumber;
  asteroid.dataset.number = asteroidNumber;

  // Random size
  const size = randomInt(50, 70);
  asteroid.style.width = `${size}px`;
  asteroid.style.height = `${size}px`;

  // Random starting position (top of game area)
  const x = randomInt(10, areaWidth - size - 10);
  const y = -size;

  asteroid.style.left = `${x}px`;
  asteroid.style.top = `${y}px`;

  gameArea.appendChild(asteroid);

  const asteroidData = {
    id: Date.now() + Math.random(),
    element: asteroid,
    number: asteroidNumber,
    x: x,
    y: y,
    speed: level.asteroidSpeed + (Math.random() * 0.5)
  };

  gameState.asteroids.push(asteroidData);
}

function updateAsteroids(deltaTime) {
  const gameArea = elements.gameArea;
  const areaHeight = gameArea.offsetHeight;

  for (let i = gameState.asteroids.length - 1; i >= 0; i--) {
    const asteroid = gameState.asteroids[i];
    
    // Update position
    asteroid.y += asteroid.speed * (deltaTime / 16);
    asteroid.element.style.top = `${asteroid.y}px`;

    // Check if asteroid is out of bounds
    if (asteroid.y > areaHeight) {
      asteroid.element.remove();
      gameState.asteroids.splice(i, 1);
    }
  }
}

function clearAsteroids() {
  gameState.asteroids.forEach(asteroid => {
    asteroid.element.remove();
  });
  gameState.asteroids = [];
}

// =====================
// GAME LOOP
// =====================

function startGameLoop() {
  let lastTime = performance.now();

  gameState.gameLoop = setInterval(() => {
    const currentTime = performance.now();
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    if (gameState.isRunning && !gameState.isLevelComplete && !gameState.isGameOver) {
      updateAsteroids(deltaTime);
    }
  }, 16); // ~60 FPS
}

function stopGameLoop() {
  if (gameState.gameLoop) {
    clearInterval(gameState.gameLoop);
    gameState.gameLoop = null;
  }
}

// =====================
// TIMER SYSTEM
// =====================

function startTimer() {
  gameState.timerInterval = setInterval(() => {
    if (!gameState.isRunning || gameState.isLevelComplete || gameState.isGameOver) {
      return;
    }

    gameState.timeRemaining -= 1;
    updateTimerUI();

    if (gameState.timeRemaining <= 0) {
      handleTimeUp();
    }
  }, 1000);
}

function stopTimer() {
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
  }
}

function updateTimerUI() {
  const level = LEVELS[gameState.currentLevel];
  const percentage = (gameState.timeRemaining / level.timeLimit) * 100;

  elements.timeRemaining.textContent = Math.ceil(gameState.timeRemaining);
  elements.timerFill.style.width = `${percentage}%`;

  // Change color based on remaining time
  elements.timerFill.classList.remove('warning', 'critical');
  if (percentage < 25) {
    elements.timerFill.classList.add('critical');
  } else if (percentage < 50) {
    elements.timerFill.classList.add('warning');
  }
}

// =====================
// UI UPDATES
// =====================

function updateUI() {
  const level = LEVELS[gameState.currentLevel];

  elements.currentLevel.textContent = level.level;
  elements.score.textContent = gameState.score;
  elements.asteroidsDestroyed.textContent = gameState.asteroidsDestroyed;
  elements.asteroidsTarget.textContent = level.target;

  // Update progress bar
  const progressPercentage = (gameState.asteroidsDestroyed / level.target) * 100;
  elements.progressFill.style.width = `${Math.min(progressPercentage, 100)}%`;
}

function updateMenuStats() {
  elements.maxUnlocked.textContent = gameState.unlockedLevels;
  elements.highScoreDisplay.textContent = gameState.highScore;
}

function displayMathProblem() {
  const problem = generateMathProblem(gameState.currentLevel);
  gameState.currentProblem = problem;
  gameState.currentAnswer = problem.answer;

  elements.mathProblem.textContent = problem.problem;

  // Generate answer options
  const answers = [problem.answer, ...generateWrongAnswers(problem.answer)];
  const shuffledAnswers = shuffleArray(answers);

  elements.answerOptions.innerHTML = '';
  shuffledAnswers.forEach(answer => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer;
    btn.dataset.answer = answer;
    
    btn.addEventListener('click', (e) => handleAnswer(answer, e.target));
    
    elements.answerOptions.appendChild(btn);
  });
}

// =====================
// GAME LOGIC
// =====================

function handleAnswer(selectedAnswer, buttonElement) {
  if (!gameState.isRunning || gameState.isLevelComplete || gameState.isGameOver) {
    return;
  }

  const isCorrect = selectedAnswer === gameState.currentAnswer;

  // Visual feedback
  if (isCorrect) {
    buttonElement.classList.add('correct');
    
    // Find asteroid with correct number
    const targetAsteroid = gameState.asteroids.find(
      a => a.number === gameState.currentAnswer
    );

    if (targetAsteroid) {
      createExplosion(targetAsteroid.x, targetAsteroid.y);
      targetAsteroid.element.classList.add('hit');
      setTimeout(() => {
        targetAsteroid.element.remove();
        gameState.asteroids = gameState.asteroids.filter(
          a => a.id !== targetAsteroid.id
        );
      }, 300);

      gameState.asteroidsDestroyed++;
      gameState.levelScore += 10;
      gameState.score += 10;

      updateUI();

      // Check if level complete
      const level = LEVELS[gameState.currentLevel];
      if (gameState.asteroidsDestroyed >= level.target) {
        handleLevelComplete();
      } else {
        // Generate new problem
        setTimeout(displayMathProblem, 500);
      }
    }
  } else {
    buttonElement.classList.add('wrong');
    setTimeout(() => {
      buttonElement.classList.remove('wrong');
    }, 500);
  }
}

function createExplosion(x, y) {
  const explosion = document.createElement('div');
  explosion.className = 'explosion';
  explosion.style.left = `${x}px`;
  explosion.style.top = `${y}px`;
  explosion.style.width = '100px';
  explosion.style.height = '100px';
  explosion.style.background = 'radial-gradient(circle, rgba(255, 149, 0, 0.8) 0%, rgba(255, 221, 0, 0.6) 50%, transparent 70%)';
  explosion.style.borderRadius = '50%';
  
  elements.gameArea.appendChild(explosion);

  setTimeout(() => {
    explosion.remove();
  }, 500);
}

function handleLevelComplete() {
  gameState.isLevelComplete = true;
  stopTimer();
  stopGameLoop();
  clearAsteroids();

  // Update high score
  if (gameState.score > gameState.highScore) {
    gameState.highScore = gameState.score;
  }

  // Unlock next level
  if (gameState.currentLevel < LEVELS.length - 1) {
    if (gameState.unlockedLevels < gameState.currentLevel + 2) {
      gameState.unlockedLevels = gameState.currentLevel + 2;
    }
    saveProgress();
    
    // Show level complete modal
    elements.levelScore.textContent = gameState.levelScore;
    showModal('levelCompleteModal');
  } else {
    // Game complete!
    saveProgress();
    elements.finalScore.textContent = gameState.score;
    elements.highScore.textContent = gameState.highScore;
    showModal('gameCompleteModal');
  }
}

function handleTimeUp() {
  gameState.isGameOver = true;
  stopTimer();
  stopGameLoop();
  clearAsteroids();

  const level = LEVELS[gameState.currentLevel];
  elements.destroyedCount.textContent = gameState.asteroidsDestroyed;
  elements.targetCount.textContent = level.target;

  showModal('timeUpModal');
}

// =====================
// LEVEL MANAGEMENT
// =====================

function startLevel(levelIndex) {
  if (levelIndex < 0 || levelIndex >= LEVELS.length) {
    return;
  }

  gameState.currentLevel = levelIndex;
  gameState.asteroidsDestroyed = 0;
  gameState.levelScore = 0;
  gameState.timeRemaining = LEVELS[levelIndex].timeLimit;
  gameState.isRunning = true;
  gameState.isLevelComplete = false;
  gameState.isGameOver = false;

  clearAsteroids();
  updateUI();
  updateTimerUI();
  displayMathProblem();

  // Start spawning asteroids
  const level = LEVELS[levelIndex];
  gameState.spawnInterval = setInterval(() => {
    createAsteroid();
  }, level.spawnRate);

  startTimer();
  startGameLoop();
}

function stopLevel() {
  gameState.isRunning = false;
  stopTimer();
  stopGameLoop();
  if (gameState.spawnInterval) {
    clearInterval(gameState.spawnInterval);
    gameState.spawnInterval = null;
  }
  clearAsteroids();
}

// =====================
// SCREEN MANAGEMENT
// =====================

function showScreen(screenElement) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  screenElement.classList.remove('hidden');
}

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('visible');
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('visible');
}

function showMainMenu() {
  stopLevel();
  showScreen(elements.mainMenu);
  updateMenuStats();
}

function showGameScreen() {
  showScreen(elements.gameScreen);
}

// =====================
// EVENT HANDLERS
// =====================

function setupEventListeners() {
  // Main Menu
  elements.btnStart.addEventListener('click', () => {
    showGameScreen();
    startLevel(0);
  });

  elements.btnLevelSelect.addEventListener('click', showLevelSelect);
  elements.btnBack.addEventListener('click', () => {
    window.location.href = '../../index.html';
  });

  // Level Select
  elements.btnCloseLevelSelect.addEventListener('click', hideLevelSelectModal);

  // Level Complete
  elements.btnNextLevel.addEventListener('click', () => {
    hideModal('levelCompleteModal');
    startLevel(gameState.currentLevel + 1);
  });

  // Time Up
  elements.btnRetry.addEventListener('click', () => {
    hideModal('timeUpModal');
    startLevel(gameState.currentLevel);
  });

  elements.btnMenu.addEventListener('click', () => {
    hideModal('timeUpModal');
    showMainMenu();
  });

  // Game Complete
  elements.btnPlayAgain.addEventListener('click', () => {
    hideModal('gameCompleteModal');
    gameState.score = 0;
    showMainMenu();
  });
}

function showLevelSelect() {
  elements.levelButtons.innerHTML = '';

  LEVELS.forEach((level, index) => {
    const btn = document.createElement('button');
    btn.className = 'level-btn';
    btn.textContent = level.level;

    const isUnlocked = index < gameState.unlockedLevels;
    const isCompleted = index < gameState.unlockedLevels - 1;

    if (!isUnlocked) {
      btn.classList.add('locked');
      btn.disabled = true;
    }

    if (isCompleted) {
      btn.classList.add('completed');
    }

    if (isUnlocked) {
      btn.addEventListener('click', () => {
        hideModal('levelSelectModal');
        showGameScreen();
        startLevel(index);
      });
    }

    elements.levelButtons.appendChild(btn);
  });

  showModal('levelSelectModal');
}

function hideLevelSelectModal() {
  hideModal('levelSelectModal');
}

// =====================
// INITIALIZATION
// =====================

function init() {
  loadProgress();
  updateMenuStats();
  setupEventListeners();
}

// Start the game
init();
