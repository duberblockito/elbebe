// Lluvia de Estrellas - Game Logic

// Game State
const gameState = {
    level: 1,
    starsCaught: 0,
    starsTarget: 5,
    timeRemaining: 30,
    totalTime: 30,
    isPlaying: false,
    stars: [],
    particles: []
};

// Level Configuration
const levelConfig = [
    { target: 5, time: 30, starCount: 8, speed: 1.5 },
    { target: 8, time: 35, starCount: 10, speed: 1.8 },
    { target: 10, time: 40, starCount: 12, speed: 2.0 },
    { target: 12, time: 45, starCount: 15, speed: 2.3 },
    { target: 15, time: 50, starCount: 18, speed: 2.5 }
];

// DOM Elements
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('start-btn');
const nextLevelBtn = document.getElementById('nextLevelBtn');
const retryBtn = document.getElementById('retryBtn');
const menuBtn = document.getElementById('menuBtn');
const levelCompleteModal = document.getElementById('levelCompleteModal');
const gameOverModal = document.getElementById('gameOverModal');
const gameCompleteModal = document.getElementById('gameCompleteModal');
const overlay = document.getElementById('game-overlay');

// Display Elements
const levelDisplay = document.getElementById('levelDisplay');
const starsDisplay = document.getElementById('starsDisplay');
const targetDisplay = document.getElementById('targetDisplay');
const progressBar = document.getElementById('progressBar');
const timerBar = document.getElementById('timerBar');
const levelCompleteTitle = document.getElementById('levelCompleteTitle');
const levelCompleteMessage = document.getElementById('levelCompleteMessage');
const gameOverTitle = document.getElementById('gameOverTitle');
const gameOverMessage = document.getElementById('gameOverMessage');
const gameCompleteTitle = document.getElementById('gameCompleteTitle');
const gameCompleteMessage = document.getElementById('gameCompleteMessage');

// Audio Context
let audioContext = null;

// Initialize Audio Context
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Play Twinkle Sound
function playTwinkleSound() {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(800 + Math.random() * 400, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200 + Math.random() * 400, audioContext.currentTime + 0.1);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Canvas Setup
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Star Class
class Star {
    constructor(speedMultiplier) {
        this.x = Math.random() * canvas.width;
        this.y = -30 - Math.random() * 50;
        this.radius = 15 + Math.random() * 20;
        this.speed = (1.5 + Math.random() * 1.5) * speedMultiplier;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
        this.opacity = 0.7 + Math.random() * 0.3;
        this.glow = 0;
        this.colors = ['#FFD700', '#FFFACD', '#FFA500', '#FFFFE0'];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.points = [];
        this.generatePoints();
    }

    generatePoints() {
        this.points = [];
        const spikes = 5;
        const outerRadius = this.radius;
        const innerRadius = this.radius * 0.4;

        for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (Math.PI * 2 * i) / (spikes * 2);
            this.points.push({
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius
            });
        }
    }

    update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Glow effect
        const glowSize = this.radius + (this.glow * 20);
        const gradient = ctx.createRadialGradient(0, 0, this.radius * 0.5, 0, 0, glowSize);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color + '80');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw star
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.closePath();
        ctx.fill();

        // Center highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(0, 0, this.radius * 0.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    containsPoint(x, y) {
        const dx = x - this.x;
        const dy = y - this.y;
        return Math.sqrt(dx * dx + dy * dy) < this.radius + 10;
    }
}

// Particle Class
class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = 2 + Math.random() * 4;
        this.speedX = (Math.random() - 0.5) * 8;
        this.speedY = (Math.random() - 0.5) * 8;
        this.opacity = 1;
        this.decay = 0.02 + Math.random() * 0.02;
        this.color = color;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += 0.1; // Gravity
        this.opacity -= this.decay;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Create Particle Explosion
function createParticles(x, y, color) {
    for (let i = 0; i < 12; i++) {
        gameState.particles.push(new Particle(x, y, color));
    }
}

// Initialize Stars
function initStars(speedMultiplier) {
    gameState.stars = [];
    const config = levelConfig[gameState.level - 1];
    for (let i = 0; i < config.starCount; i++) {
        const star = new Star(speedMultiplier);
        star.y = Math.random() * canvas.height;
        gameState.stars.push(star);
    }
}

// Spawn New Star
function spawnStar() {
    const config = levelConfig[gameState.level - 1];
    if (gameState.stars.length < config.starCount) {
        const star = new Star(config.speed / 1.5);
        gameState.stars.push(star);
    }
}

// Update Display
function updateDisplay() {
    levelDisplay.textContent = `${gameState.level}/5`;
    starsDisplay.textContent = gameState.starsCaught;
    targetDisplay.textContent = gameState.starsTarget;

    const progress = (gameState.starsCaught / gameState.starsTarget) * 100;
    progressBar.style.width = `${Math.min(progress, 100)}%`;

    const timeProgress = (gameState.timeRemaining / gameState.totalTime) * 100;
    timerBar.style.width = `${timeProgress}%`;

    // Timer color based on time
    timerBar.classList.remove('warning', 'critical');
    if (timeProgress < 25) {
        timerBar.classList.add('critical');
    } else if (timeProgress < 50) {
        timerBar.classList.add('warning');
    }
}

// Show Sparkle Effect
function showSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = '✨';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
}

// Handle Touch/Click
function handleTouch(e) {
    if (!gameState.isPlaying) return;

    e.preventDefault();
    const touches = e.touches || [{ clientX: e.clientX, clientY: e.clientY }];

    for (const touch of touches) {
        const x = touch.clientX;
        const y = touch.clientY;

        for (let i = gameState.stars.length - 1; i >= 0; i--) {
            const star = gameState.stars[i];
            if (star.containsPoint(x, y)) {
                // Play sound
                playTwinkleSound();

                // Create particles
                createParticles(star.x, star.y, star.color);

                // Show sparkle
                showSparkle(star.x, star.y);

                // Remove star
                gameState.stars.splice(i, 1);

                // Update score
                gameState.starsCaught++;
                updateDisplay();

                // Check win condition
                if (gameState.starsCaught >= gameState.starsTarget) {
                    levelComplete();
                }

                break; // Only catch one star per touch
            }
        }
    }
}

// Timer
let timerInterval = null;

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (!gameState.isPlaying) return;

        gameState.timeRemaining--;
        updateDisplay();

        if (gameState.timeRemaining <= 0) {
            gameOver();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Save Progress
function saveProgress() {
    const progress = {
        level: gameState.level,
        starsCaught: gameState.starsCaught
    };
    localStorage.setItem('lluvia-estrellas-progress', JSON.stringify(progress));
}

// Load Progress
function loadProgress() {
    const saved = localStorage.getItem('lluvia-estrellas-progress');
    if (saved) {
        const progress = JSON.parse(saved);
        gameState.level = Math.min(progress.level || 1, 5);
    }
}

// Level Complete
function levelComplete() {
    stopTimer();
    gameState.isPlaying = false;

    saveProgress();

    levelCompleteTitle.textContent = '¡Nivel Completado!';
    levelCompleteMessage.textContent = `¡Atrapaste ${gameState.starsCaught} estrellas!`;
    levelCompleteModal.style.display = 'flex';
}

// Game Over
function gameOver() {
    stopTimer();
    gameState.isPlaying = false;

    gameOverTitle.textContent = '¡Se Acabó el Tiempo!';
    gameOverMessage.textContent = `Atrapaste ${gameState.starsCaught} de ${gameState.starsTarget} estrellas.`;
    gameOverModal.style.display = 'flex';
}

// Game Complete
function gameComplete() {
    stopTimer();
    gameState.isPlaying = false;

    // Clear progress
    localStorage.removeItem('lluvia-estrellas-progress');

    const totalStars = gameState.starsCaught + (gameState.level - 1) * 15;
    gameCompleteTitle.textContent = '¡Felicidades!';
    gameCompleteMessage.textContent = `¡Completaste todos los niveles! Total: ${totalStars} estrellas.`;
    gameCompleteModal.style.display = 'flex';
}

// Start Level
function startLevel() {
    const config = levelConfig[gameState.level - 1];
    gameState.starsCaught = 0;
    gameState.starsTarget = config.target;
    gameState.timeRemaining = config.time;
    gameState.totalTime = config.time;
    gameState.isPlaying = true;
    gameState.stars = [];
    gameState.particles = [];

    initStars(config.speed / 1.5);
    updateDisplay();
    startTimer();

    // Spawn stars periodically
    setInterval(() => {
        if (gameState.isPlaying) {
            spawnStar();
        }
    }, 2000);
}

// Start Game
function startGame() {
    initAudio();
    overlay.style.display = 'none';
    loadProgress();
    startLevel();
}

// Next Level
function nextLevel() {
    levelCompleteModal.style.display = 'none';

    if (gameState.level >= 5) {
        gameComplete();
    } else {
        gameState.level++;
        startLevel();
    }
}

// Retry Level
function retryLevel() {
    gameOverModal.style.display = 'none';
    gameState.starsCaught = 0;
    gameState.timeRemaining = gameState.totalTime;
    gameState.isPlaying = true;
    gameState.stars = [];
    gameState.particles = [];

    const config = levelConfig[gameState.level - 1];
    initStars(config.speed / 1.5);
    updateDisplay();
    startTimer();
}

// Go to Menu
function goToMenu() {
    stopTimer();
    gameState.isPlaying = false;
    window.location.href = '../../index.html';
}

// Event Listeners
startBtn.addEventListener('click', startGame);
nextLevelBtn.addEventListener('click', nextLevel);
retryBtn.addEventListener('click', retryLevel);
menuBtn.addEventListener('click', goToMenu);
canvas.addEventListener('touchstart', handleTouch, { passive: false });
canvas.addEventListener('click', handleTouch);

// Game Loop
function gameLoop() {
    if (!gameState.isPlaying) {
        requestAnimationFrame(gameLoop);
        return;
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw stars
    for (let i = gameState.stars.length - 1; i >= 0; i--) {
        const star = gameState.stars[i];
        star.update();
        star.draw();

        // Remove stars that fall off screen
        if (star.y > canvas.height + star.radius) {
            gameState.stars.splice(i, 1);
        }
    }

    // Update and draw particles
    for (let i = gameState.particles.length - 1; i >= 0; i--) {
        const particle = gameState.particles[i];
        particle.update();
        particle.draw();

        if (particle.opacity <= 0) {
            gameState.particles.splice(i, 1);
        }
    }

    requestAnimationFrame(gameLoop);
}

// Initialize
gameLoop();
