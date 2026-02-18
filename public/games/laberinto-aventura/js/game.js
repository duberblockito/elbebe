// Laberinto Aventura - Game Logic
// Guide a character through a maze to find keys and open chests!

const MAZE_CONFIG = {
  // Cell types
  WALL: 0,
  PATH: 1,
  START: 2,
  KEY: 3,
  CHEST: 4,
  EXIT: 5,

  // Grid colors
  wallColor: '#2C3E50',
  pathColor: '#ECF0F1',
  startColor: '#3498DB',
  keyColor: '#F1C40F',
  chestColor: '#E74C3C',
  exitColor: '#27AE60',

  // Character colors
  characterColor: '#9B59B6',

  // Level configuration
  levels: [
    { width: 9, height: 9, keysNeeded: 1, timeLimit: 45 },
    { width: 11, height: 11, keysNeeded: 1, timeLimit: 50 },
    { width: 13, height: 13, keysNeeded: 2, timeLimit: 55 },
    { width: 15, height: 15, keysNeeded: 2, timeLimit: 60 },
    { width: 17, height: 17, keysNeeded: 3, timeLimit: 65 }
  ],

  // Character movement speed (pixels per frame)
  moveSpeed: 4
};

class MazeGame {
  constructor() {
    this.currentLevel = 1;
    this.keysCollected = 0;
    this.keysNeeded = 1;
    this.timeRemaining = 0;
    this.maxTime = 0;
    this.maze = [];
    this.cellSize = 0;
    this.characterPos = { x: 0, y: 0 };
    this.gameState = 'menu'; // menu, playing, paused, levelComplete, timeUp, gameComplete
    this.startTime = 0;
    this.lastFrameTime = 0;
    this.animationId = null;

    // Touch controls
    this.touchStart = null;
    this.isTouching = false;

    // Sound effects
    this.sounds = {
      key: this.createBeep(800, 0.1),
      chest: this.createBeep(1200, 0.15),
      levelUp: this.createBeep(1000, 0.2),
      gameOver: this.createBeep(300, 0.3),
      step: this.createBeep(400, 0.05)
    };

    // DOM elements
    this.canvas = null;
    this.ctx = null;
    this.hud = null;

    this.init();
  }

  createBeep(frequency, duration) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    return () => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    };
  }

  init() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.hud = document.getElementById('hud');

    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    // Load saved progress
    this.loadProgress();

    // Event listeners
    this.setupEventListeners();

    // Start game loop
    this.lastFrameTime = performance.now();
    this.gameLoop();
  }

  resizeCanvas() {
    const container = document.getElementById('gameContainer');
    const maxWidth = Math.min(container.clientWidth - 20, 500);
    const maxHeight = Math.min(window.innerHeight - 200, 500);

    this.canvas.width = maxWidth;
    this.canvas.height = maxHeight;

    // Recalculate cell size
    if (this.maze.length > 0) {
      const levelConfig = MAZE_CONFIG.levels[this.currentLevel - 1];
      this.cellSize = Math.min(
        this.canvas.width / levelConfig.width,
        this.canvas.height / levelConfig.height
      );
    }
  }

  setupEventListeners() {
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
      if (this.gameState !== 'playing') return;

      let dx = 0, dy = 0;
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          dy = -1;
          break;
        case 'ArrowDown':
        case 's':
          dy = 1;
          break;
        case 'ArrowLeft':
        case 'a':
          dx = -1;
          break;
        case 'ArrowRight':
        case 'd':
          dx = 1;
          break;
        default:
          return;
      }

      e.preventDefault();
      this.moveCharacter(dx, dy);
    });

    // Touch controls
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.touchStart = {
        x: touch.clientX,
        y: touch.clientY
      };
      this.isTouching = true;
    });

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
    });

    this.canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      if (!this.isTouching || !this.touchStart) return;

      const touch = e.changedTouches[0];
      const dx = touch.clientX - this.touchStart.x;
      const dy = touch.clientY - this.touchStart.y;

      // Determine swipe direction
      if (Math.abs(dx) > Math.abs(dy)) {
        // Horizontal swipe
        if (Math.abs(dx) > 30) {
          this.moveCharacter(dx > 0 ? 1 : -1, 0);
        }
      } else {
        // Vertical swipe
        if (Math.abs(dy) > 30) {
          this.moveCharacter(0, dy > 0 ? 1 : -1);
        }
      }

      this.touchStart = null;
      this.isTouching = false;
    });

    // Button controls
    document.getElementById('startBtn').addEventListener('click', () => this.startGame());
    document.getElementById('nextLevelBtn').addEventListener('click', () => this.nextLevel());
    document.getElementById('retryBtn').addEventListener('click', () => this.retryLevel());
  }

  startGame() {
    this.currentLevel = 1;
    this.startLevel();
  }

  startLevel() {
    const levelConfig = MAZE_CONFIG.levels[this.currentLevel - 1];
    this.keysNeeded = levelConfig.keysNeeded;
    this.keysCollected = 0;
    this.timeRemaining = levelConfig.timeLimit;
    this.maxTime = levelConfig.timeLimit;

    // Generate maze
    this.generateMaze(levelConfig.width, levelConfig.height);

    // Calculate cell size
    this.cellSize = Math.min(
      this.canvas.width / levelConfig.width,
      this.canvas.height / levelConfig.height
    );

    // Find start position
    for (let y = 0; y < this.maze.length; y++) {
      for (let x = 0; x < this.maze[y].length; x++) {
        if (this.maze[y][x] === MAZE_CONFIG.START) {
          this.characterPos = { x, y };
        }
      }
    }

    this.gameState = 'playing';
    this.startTime = performance.now();

    // Save progress
    this.saveProgress();
  }

  generateMaze(width, height) {
    // Initialize maze with walls
    this.maze = [];
    for (let y = 0; y < height; y++) {
      this.maze[y] = [];
      for (let x = 0; x < width; x++) {
        this.maze[y][x] = MAZE_CONFIG.WALL;
      }
    }

    // Recursive backtracker algorithm
    const stack = [];
    const startX = 1;
    const startY = 1;

    this.maze[startY][startX] = MAZE_CONFIG.PATH;
    stack.push({ x: startX, y: startY });

    while (stack.length > 0) {
      const current = stack[stack.length - 1];
      const neighbors = this.getUnvisitedNeighbors(current.x, current.y);

      if (neighbors.length > 0) {
        const next = neighbors[Math.floor(Math.random() * neighbors.length)];

        // Remove wall between current and next
        const wallX = current.x + (next.x - current.x) / 2;
        const wallY = current.y + (next.y - current.y) / 2;
        this.maze[wallY][wallX] = MAZE_CONFIG.PATH;
        this.maze[next.y][next.x] = MAZE_CONFIG.PATH;

        stack.push(next);
      } else {
        stack.pop();
      }
    }

    // Add start position
    this.maze[1][1] = MAZE_CONFIG.START;

    // Add exit (furthest from start)
    let exitPos = this.findFurthestPath(startX, startY);
    this.maze[exitPos.y][exitPos.x] = MAZE_CONFIG.EXIT;

    // Add keys and chests
    const keysNeeded = MAZE_CONFIG.levels[this.currentLevel - 1].keysNeeded;
    this.placeItems(keysNeeded);
  }

  getUnvisitedNeighbors(x, y) {
    const neighbors = [];
    const directions = [
      { dx: 0, dy: -2 }, // Up
      { dx: 2, dy: 0 },  // Right
      { dx: 0, dy: 2 },  // Down
      { dx: -2, dy: 0 }  // Left
    ];

    for (const dir of directions) {
      const newX = x + dir.dx;
      const newY = y + dir.dy;

      if (newX > 0 && newX < this.maze[0].length - 1 &&
          newY > 0 && newY < this.maze.length - 1 &&
          this.maze[newY][newX] === MAZE_CONFIG.WALL) {
        neighbors.push({ x: newX, y: newY });
      }
    }

    return neighbors;
  }

  findFurthestPath(startX, startY) {
    let furthest = { x: startX, y: startY };
    let maxDistance = 0;

    for (let y = 0; y < this.maze.length; y++) {
      for (let x = 0; x < this.maze[y].length; x++) {
        if (this.maze[y][x] === MAZE_CONFIG.PATH) {
          const distance = Math.abs(x - startX) + Math.abs(y - startY);
          if (distance > maxDistance) {
            maxDistance = distance;
            furthest = { x, y };
          }
        }
      }
    }

    return furthest;
  }

  placeItems(keysNeeded) {
    const pathCells = [];

    // Collect all path cells except start and exit
    for (let y = 0; y < this.maze.length; y++) {
      for (let x = 0; x < this.maze[y].length; x++) {
        if (this.maze[y][x] === MAZE_CONFIG.PATH) {
          pathCells.push({ x, y });
        }
      }
    }

    // Shuffle path cells
    for (let i = pathCells.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pathCells[i], pathCells[j]] = [pathCells[j], pathCells[i]];
    }

    // Place keys
    for (let i = 0; i < keysNeeded && i < pathCells.length; i++) {
      this.maze[pathCells[i].y][pathCells[i].x] = MAZE_CONFIG.KEY;
    }

    // Place chest near exit
    const exitPos = this.findExit();
    let chestPlaced = false;
    for (const cell of pathCells) {
      if (!chestPlaced && this.maze[cell.y][cell.x] === MAZE_CONFIG.PATH) {
        const distToExit = Math.abs(cell.x - exitPos.x) + Math.abs(cell.y - exitPos.y);
        if (distToExit > 3 && distToExit < 8) {
          this.maze[cell.y][cell.x] = MAZE_CONFIG.CHEST;
          chestPlaced = true;
        }
      }
    }
  }

  findExit() {
    for (let y = 0; y < this.maze.length; y++) {
      for (let x = 0; x < this.maze[y].length; x++) {
        if (this.maze[y][x] === MAZE_CONFIG.EXIT) {
          return { x, y };
        }
      }
    }
    return { x: 1, y: 1 };
  }

  moveCharacter(dx, dy) {
    if (this.gameState !== 'playing') return;

    const newX = this.characterPos.x + dx;
    const newY = this.characterPos.y + dy;

    // Check bounds
    if (newX < 0 || newX >= this.maze[0].length ||
        newY < 0 || newY >= this.maze.length) {
      return;
    }

    // Check if path
    const cellType = this.maze[newY][newX];
    if (cellType === MAZE_CONFIG.WALL) {
      return;
    }

    // Play step sound
    this.sounds.step();

    // Move character
    this.characterPos = { x: newX, y: newY };

    // Check cell type
    if (cellType === MAZE_CONFIG.KEY) {
      this.collectKey();
    } else if (cellType === MAZE_CONFIG.CHEST && this.keysCollected >= this.keysNeeded) {
      this.openChest();
    } else if (cellType === MAZE_CONFIG.EXIT) {
      this.levelComplete();
    }
  }

  collectKey() {
    this.keysCollected++;
    this.sounds.key();
    this.maze[this.characterPos.y][this.characterPos.x] = MAZE_CONFIG.PATH;

    // Check if all keys collected
    if (this.keysCollected >= this.keysNeeded) {
      // Show chest hint
      this.showMessage('¡Busca el cofre!');
    }
  }

  openChest() {
    this.sounds.chest();
    this.maze[this.characterPos.y][this.characterPos.x] = MAZE_CONFIG.PATH;

    // Show exit hint
    this.showMessage('¡Busca la salida!');
  }

  showMessage(text) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.style.display = 'block';
    setTimeout(() => {
      messageEl.style.display = 'none';
    }, 2000);
  }

  levelComplete() {
    this.sounds.levelUp();
    this.gameState = 'levelComplete';

    if (this.currentLevel >= MAZE_CONFIG.levels.length) {
      this.gameState = 'gameComplete';
    }
  }

  nextLevel() {
    if (this.currentLevel < MAZE_CONFIG.levels.length) {
      this.currentLevel++;
      this.startLevel();
    }
  }

  retryLevel() {
    this.startLevel();
  }

  update(deltaTime) {
    if (this.gameState !== 'playing') return;

    // Update timer
    this.timeRemaining -= deltaTime / 1000;

    if (this.timeRemaining <= 0) {
      this.timeRemaining = 0;
      this.gameState = 'timeUp';
      this.sounds.gameOver();
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Calculate offset to center maze
    const levelConfig = MAZE_CONFIG.levels[this.currentLevel - 1];
    const mazeWidth = levelConfig.width * this.cellSize;
    const mazeHeight = levelConfig.height * this.cellSize;
    const offsetX = (this.canvas.width - mazeWidth) / 2;
    const offsetY = (this.canvas.height - mazeHeight) / 2;

    this.ctx.save();
    this.ctx.translate(offsetX, offsetY);

    // Draw maze
    for (let y = 0; y < this.maze.length; y++) {
      for (let x = 0; x < this.maze[y].length; x++) {
        const cellType = this.maze[y][x];
        this.drawCell(x, y, cellType);
      }
    }

    // Draw character
    this.drawCharacter();

    this.ctx.restore();

    // Update HUD
    this.updateHUD();
  }

  drawCell(x, y, type) {
    const px = x * this.cellSize;
    const py = y * this.cellSize;
    const size = this.cellSize;

    switch (type) {
      case MAZE_CONFIG.WALL:
        this.ctx.fillStyle = MAZE_CONFIG.wallColor;
        this.ctx.fillRect(px, py, size, size);
        break;

      case MAZE_CONFIG.PATH:
        this.ctx.fillStyle = MAZE_CONFIG.pathColor;
        this.ctx.fillRect(px, py, size, size);
        break;

      case MAZE_CONFIG.START:
        this.ctx.fillStyle = MAZE_CONFIG.startColor;
        this.ctx.fillRect(px, py, size, size);
        break;

      case MAZE_CONFIG.KEY:
        this.ctx.fillStyle = MAZE_CONFIG.pathColor;
        this.ctx.fillRect(px, py, size, size);
        this.drawKey(px, py, size);
        break;

      case MAZE_CONFIG.CHEST:
        this.ctx.fillStyle = MAZE_CONFIG.pathColor;
        this.ctx.fillRect(px, py, size, size);
        this.drawChest(px, py, size);
        break;

      case MAZE_CONFIG.EXIT:
        this.ctx.fillStyle = MAZE_CONFIG.exitColor;
        this.ctx.fillRect(px, py, size, size);
        break;
    }
  }

  drawKey(x, y, size) {
    const cx = x + size / 2;
    const cy = y + size / 2;
    const keySize = size * 0.5;

    this.ctx.fillStyle = MAZE_CONFIG.keyColor;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy - keySize / 4, keySize / 3, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(cx - keySize / 6, cy);
    this.ctx.lineTo(cx - keySize / 6, cy + keySize / 2);
    this.ctx.lineTo(cx + keySize / 6, cy + keySize / 2);
    this.ctx.lineTo(cx + keySize / 6, cy + keySize / 4);
    this.ctx.lineTo(cx - keySize / 6, cy + keySize / 4);
    this.ctx.fill();
  }

  drawChest(x, y, size) {
    const cx = x + size / 2;
    const cy = y + size / 2;
    const chestSize = size * 0.6;

    this.ctx.fillStyle = MAZE_CONFIG.chestColor;
    this.ctx.fillRect(cx - chestSize / 2, cy - chestSize / 3, chestSize, chestSize * 0.6);

    // Gold band
    this.ctx.fillStyle = '#FFD700';
    this.ctx.fillRect(cx - chestSize / 2, cy - chestSize / 6, chestSize, chestSize * 0.1);
  }

  drawCharacter() {
    const px = this.characterPos.x * this.cellSize;
    const py = this.characterPos.y * this.cellSize;
    const size = this.cellSize;

    this.ctx.fillStyle = MAZE_CONFIG.characterColor;
    this.ctx.beginPath();
    this.ctx.arc(px + size / 2, py + size / 2, size * 0.35, 0, Math.PI * 2);
    this.ctx.fill();

    // Eyes
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.beginPath();
    this.ctx.arc(px + size / 2 - size * 0.15, py + size / 2 - size * 0.05, size * 0.1, 0, Math.PI * 2);
    this.ctx.arc(px + size / 2 + size * 0.15, py + size / 2 - size * 0.05, size * 0.1, 0, Math.PI * 2);
    this.ctx.fill();

    // Pupils
    this.ctx.fillStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.arc(px + size / 2 - size * 0.15, py + size / 2 - size * 0.05, size * 0.05, 0, Math.PI * 2);
    this.ctx.arc(px + size / 2 + size * 0.15, py + size / 2 - size * 0.05, size * 0.05, 0, Math.PI * 2);
    this.ctx.fill();
  }

  updateHUD() {
    const levelEl = document.getElementById('level');
    const keysEl = document.getElementById('keys');
    const timerEl = document.getElementById('timer');
    const progressBar = document.getElementById('progressBar');
    const timerBar = document.getElementById('timerBar');

    levelEl.textContent = `Nivel: ${this.currentLevel}`;
    keysEl.textContent = `Llaves: ${this.keysCollected}/${this.keysNeeded}`;
    timerEl.textContent = `Tiempo: ${Math.ceil(this.timeRemaining)}s`;

    // Progress bar (keys collected vs keys needed)
    const progress = (this.keysCollected / this.keysNeeded) * 100;
    progressBar.style.width = `${Math.min(progress, 100)}%`;

    // Timer bar
    const timeProgress = (this.timeRemaining / this.maxTime) * 100;
    timerBar.style.width = `${Math.max(timeProgress, 0)}%`;

    // Timer bar color (green → yellow → red)
    if (timeProgress > 60) {
      timerBar.style.backgroundColor = '#27AE60';
    } else if (timeProgress > 30) {
      timerBar.style.backgroundColor = '#F1C40F';
    } else {
      timerBar.style.backgroundColor = '#E74C3C';
    }
  }

  updateModals() {
    document.getElementById('menuModal').style.display = this.gameState === 'menu' ? 'flex' : 'none';
    document.getElementById('levelCompleteModal').style.display = this.gameState === 'levelComplete' ? 'flex' : 'none';
    document.getElementById('timeUpModal').style.display = this.gameState === 'timeUp' ? 'flex' : 'none';
    document.getElementById('gameCompleteModal').style.display = this.gameState === 'gameComplete' ? 'flex' : 'none';
  }

  gameLoop() {
    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastFrameTime;
    this.lastFrameTime = currentTime;

    this.update(deltaTime);
    this.draw();
    this.updateModals();

    this.animationId = requestAnimationFrame(() => this.gameLoop());
  }

  saveProgress() {
    const progress = {
      currentLevel: this.currentLevel,
      timestamp: Date.now()
    };
    localStorage.setItem('laberinto-aventura-progress', JSON.stringify(progress));
  }

  loadProgress() {
    const saved = localStorage.getItem('laberinto-aventura-progress');
    if (saved) {
      try {
        const progress = JSON.parse(saved);
        this.currentLevel = progress.currentLevel || 1;
      } catch (e) {
        console.error('Failed to load progress:', e);
        this.currentLevel = 1;
      }
    }
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Initialize game when DOM is ready
let game;
document.addEventListener('DOMContentLoaded', () => {
  game = new MazeGame();
});
