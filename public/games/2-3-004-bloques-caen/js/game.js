// Los Bloques Caen - Game Logic
// Age: 2-3 Years

class BloquesCaenGame {
    constructor() {
        // Game State
        this.level = 1;
        this.score = 0;
        this.targetScore = 10;
        this.highScore = 0;
        this.timeLeft = 30;
        this.isPlaying = false;
        this.gameLoop = null;
        this.timerInterval = null;
        this.blocks = [];
        this.blockIdCounter = 0;

        // Level Configuration
        this.levelConfig = {
            1: { target: 10, time: 30, speed: 2, spawnRate: 1500 },
            2: { target: 15, time: 40, speed: 2.5, spawnRate: 1300 },
            3: { target: 20, time: 50, speed: 3, spawnRate: 1100 },
            4: { target: 25, time: 60, speed: 3.5, spawnRate: 900 },
            5: { target: 30, time: 70, speed: 4, spawnRate: 700 }
        };

        // Block Types
        this.blockTypes = ['triangle', 'circle', 'square'];

        // DOM Elements
        this.gameArea = document.getElementById('game-area');
        this.levelDisplay = document.getElementById('level-display');
        this.scoreDisplay = document.getElementById('score-display');
        this.targetDisplay = document.getElementById('target-display');
        this.highScoreDisplay = document.getElementById('highscore-display');
        this.timerBar = document.getElementById('timer-bar');
        this.timerText = document.getElementById('timer-text');
        this.progressFill = document.getElementById('progress-fill');
        this.progressText = document.getElementById('progress-text');
        this.gameMessage = document.getElementById('game-message');
        this.btnStart = document.getElementById('btn-start');
        this.modalOverlay = document.getElementById('modal-overlay');
        this.modalTitle = document.getElementById('modal-title');
        this.modalMessage = document.getElementById('modal-message');
        this.modalScore = document.getElementById('modal-score');
        this.btnModalContinue = document.getElementById('btn-modal-continue');

        // Initialize
        this.init();
    }

    init() {
        // Load high score
        this.loadHighScore();

        // Event Listeners
        this.btnStart.addEventListener('click', () => this.startGame());
        this.btnModalContinue.addEventListener('click', () => this.handleModalContinue());

        // Prevent default touch behavior
        this.gameArea.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
    }

    loadHighScore() {
        const saved = localStorage.getItem('bloques-caen-highscore');
        if (saved) {
            this.highScore = parseInt(saved, 10);
            this.highScoreDisplay.textContent = this.highScore;
        }
    }

    saveHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('bloques-caen-highscore', this.highScore);
            this.highScoreDisplay.textContent = this.highScore;
        }
    }

    loadProgress() {
        const saved = localStorage.getItem('bloques-caen-progress');
        if (saved) {
            const progress = JSON.parse(saved);
            // Optionally load saved progress (uncomment to enable)
            // this.level = progress.level || 1;
        }
    }

    saveProgress() {
        const progress = {
            level: this.level,
            score: this.score,
            highScore: this.highScore
        };
        localStorage.setItem('bloques-caen-progress', JSON.stringify(progress));
    }

    startGame() {
        this.resetGame();
        this.isPlaying = true;
        this.gameMessage.style.display = 'none';
        this.startLevel();
    }

    resetGame() {
        this.level = 1;
        this.score = 0;
        this.blocks = [];
        this.blockIdCounter = 0;

        // Clear any existing blocks
        const existingBlocks = document.querySelectorAll('.falling-block');
        existingBlocks.forEach(block => block.remove());

        // Update displays
        this.updateDisplays();
    }

    startLevel() {
        // Load level configuration
        const config = this.levelConfig[this.level];
        this.targetScore = config.target;
        this.timeLeft = config.time;

        // Update displays
        this.updateDisplays();
        this.updateProgressBar();

        // Start game loop
        this.startGameLoop(config.speed);

        // Start timer
        this.startTimer(config.time);

        // Start spawning blocks
        this.startSpawning(config.spawnRate);
    }

    startGameLoop(speed) {
        this.gameLoop = () => {
            if (!this.isPlaying) return;

            this.moveBlocks();
            requestAnimationFrame(this.gameLoop);
        };

        requestAnimationFrame(this.gameLoop);
    }

    moveBlocks() {
        this.blocks.forEach((block, index) => {
            block.y += block.speed;

            // Update block position
            block.element.style.top = block.y + 'px';

            // Check if block hit the ground
            const gameAreaHeight = this.gameArea.clientHeight;
            if (block.y >= gameAreaHeight - 60) {
                // Remove block
                block.element.remove();
                this.blocks.splice(index, 1);

                // Penalty for missing a block (optional - comment out to disable)
                // this.timeLeft = Math.max(0, this.timeLeft - 2);
                // this.updateTimerBar();
            }
        });
    }

    spawnBlock() {
        if (!this.isPlaying) return;

        const blockType = this.blockTypes[Math.floor(Math.random() * this.blockTypes.length)];
        const blockId = `block-${this.blockIdCounter++}`;

        // Create block element
        const blockElement = document.createElement('div');
        blockElement.id = blockId;
        blockElement.className = `falling-block block-${blockType}`;

        // Random horizontal position
        const gameAreaWidth = this.gameArea.clientWidth;
        const blockWidth = 60;
        const maxX = gameAreaWidth - blockWidth;
        const randomX = Math.random() * maxX;

        blockElement.style.left = randomX + 'px';
        blockElement.style.top = '-80px';

        // Add to game area
        this.gameArea.appendChild(blockElement);

        // Store block data
        const speed = this.levelConfig[this.level].speed;
        const block = {
            id: blockId,
            element: blockElement,
            type: blockType,
            x: randomX,
            y: -80,
            speed: speed
        };

        this.blocks.push(block);

        // Add click/touch event
        blockElement.addEventListener('click', () => this.catchBlock(block));
        blockElement.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.catchBlock(block);
        });
    }

    catchBlock(block) {
        if (!this.isPlaying) return;

        // Remove block
        block.element.remove();
        const index = this.blocks.indexOf(block);
        if (index > -1) {
            this.blocks.splice(index, 1);
        }

        // Update score
        this.score++;
        this.updateDisplays();
        this.updateProgressBar();

        // Show feedback
        this.showScoreFeedback(block.x, block.y);

        // Check if level completed
        if (this.score >= this.targetScore) {
            this.levelComplete();
        }
    }

    showScoreFeedback(x, y) {
        const feedback = document.createElement('div');
        feedback.className = 'score-feedback';
        feedback.textContent = '+1';
        feedback.style.left = x + 'px';
        feedback.style.top = y + 'px';

        this.gameArea.appendChild(feedback);

        setTimeout(() => feedback.remove(), 800);
    }

    startTimer(seconds) {
        this.timeLeft = seconds;
        this.updateTimerBar();

        this.timerInterval = setInterval(() => {
            if (!this.isPlaying) return;

            this.timeLeft -= 0.1;
            this.updateTimerBar();

            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 100);
    }

    updateTimerBar() {
        const config = this.levelConfig[this.level];
        const percentage = (this.timeLeft / config.time) * 100;
        this.timerBar.style.width = percentage + '%';
        this.timerText.textContent = Math.ceil(this.timeLeft) + 's';

        // Update color based on time left
        this.timerBar.classList.remove('warning', 'critical');
        if (percentage <= 25) {
            this.timerBar.classList.add('critical');
        } else if (percentage <= 50) {
            this.timerBar.classList.add('warning');
        }
    }

    updateProgressBar() {
        const percentage = (this.score / this.targetScore) * 100;
        this.progressFill.style.width = percentage + '%';
        this.progressText.textContent = `${this.score}/${this.targetScore}`;
    }

    updateDisplays() {
        this.levelDisplay.textContent = this.level;
        this.scoreDisplay.textContent = this.score;
        this.targetDisplay.textContent = this.targetScore;
    }

    startSpawning(spawnRate) {
        this.spawnInterval = setInterval(() => {
            this.spawnBlock();
        }, spawnRate);
    }

    stopGame() {
        this.isPlaying = false;
        if (this.gameLoop) {
            cancelAnimationFrame(this.gameLoop);
        }
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        if (this.spawnInterval) {
            clearInterval(this.spawnInterval);
        }
    }

    levelComplete() {
        this.stopGame();
        this.saveHighScore();
        this.saveProgress();

        // Show modal
        if (this.level >= 5) {
            this.showModal('¡Juego Completado!', '¡Eres increíble! 🎉', this.score, 'Jugar de Nuevo 🔄');
        } else {
            this.showModal('¡Nivel Completado!', '¡Excelente trabajo!', this.score, 'Siguiente Nivel ➡️');
        }
    }

    timeUp() {
        this.stopGame();
        this.saveHighScore();
        this.saveProgress();

        // Show modal
        this.showModal('¡Tiempo Agotado!', '¡Inténtalo de nuevo!', this.score, 'Reintentar 🔄');
    }

    showModal(title, message, score, buttonText) {
        this.modalTitle.textContent = title;
        this.modalMessage.textContent = message;
        this.modalScore.textContent = score;
        this.btnModalContinue.textContent = buttonText;
        this.modalOverlay.classList.add('active');
    }

    handleModalContinue() {
        this.modalOverlay.classList.remove('active');

        if (this.level >= 5 || this.timeLeft <= 0) {
            // Restart game
            this.resetGame();
            this.startGame();
        } else {
            // Next level
            this.level++;
            this.blocks = [];
            const existingBlocks = document.querySelectorAll('.falling-block');
            existingBlocks.forEach(block => block.remove());
            this.startLevel();
        }
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BloquesCaenGame();
});
