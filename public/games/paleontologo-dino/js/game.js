// Paleontólogo Dino - Game Logic

class PaleontologoDino {
    constructor() {
        this.currentLevel = 1;
        this.bonesFound = 0;
        this.totalBones = 5;
        this.totalLevels = 8;
        this.totalBonesCollected = 0;
        this.gameComplete = false;

        this.dinos = [
            { id: 1, name: 'T-Rex', emoji: '🦖', bones: 5, gridSize: 12 },
            { id: 2, name: 'Triceratops', emoji: '🦕', bones: 5, gridSize: 12 },
            { id: 3, name: 'Stegosaurus', emoji: '🦕', bones: 6, gridSize: 12 },
            { id: 4, name: 'Brachiosaurus', emoji: '🦕', bones: 6, gridSize: 16 },
            { id: 5, name: 'Velociraptor', emoji: '🦖', bones: 6, gridSize: 16 },
            { id: 6, name: 'Pterodactyl', emoji: '🦅', bones: 7, gridSize: 16 },
            { id: 7, name: 'Ankylosaurus', emoji: '🦕', bones: 7, gridSize: 16 },
            { id: 8, name: 'Spinosaurus', emoji: '🦖', bones: 8, gridSize: 16 }
        ];

        this.boneEmojis = ['🦴', '🦴', '🦴', '🦴', '🦴', '🦴', '🦴', '🦴'];
        this.dirtTextures = ['🌱', '🪨', '🌿', '🪴'];

        this.loadProgress();
        this.initElements();
        this.initEventListeners();
        this.startLevel();
    }

    loadProgress() {
        const saved = localStorage.getItem('paleontologo-dino-progress');
        if (saved) {
            const data = JSON.parse(saved);
            this.currentLevel = data.currentLevel || 1;
            this.totalBonesCollected = data.totalBonesCollected || 0;
            this.gameComplete = data.gameComplete || false;
        }
    }

    saveProgress() {
        const data = {
            currentLevel: this.currentLevel,
            totalBonesCollected: this.totalBonesCollected,
            gameComplete: this.gameComplete
        };
        localStorage.setItem('paleontologo-dino-progress', JSON.stringify(data));
    }

    initElements() {
        this.currentLevelEl = document.getElementById('currentLevel');
        this.dinoNameEl = document.getElementById('dinoName');
        this.bonesFoundEl = document.getElementById('bonesFound');
        this.totalBonesEl = document.getElementById('totalBones');
        this.progressFillEl = document.getElementById('progressFill');
        this.dirtGridEl = document.getElementById('dirtGrid');
        this.levelCompleteModal = document.getElementById('levelCompleteModal');
        this.gameCompleteModal = document.getElementById('gameCompleteModal');
        this.nextLevelBtn = document.getElementById('nextLevelBtn');
        this.restartBtn = document.getElementById('restartBtn');
        this.completedDinoEl = document.getElementById('completedDino');
        this.totalLevelsEl = document.getElementById('totalLevels');
        this.totalBonesCollectedEl = document.getElementById('totalBonesCollected');
    }

    initEventListeners() {
        this.nextLevelBtn.addEventListener('click', () => {
            this.hideModal(this.levelCompleteModal);
            this.nextLevel();
        });

        this.restartBtn.addEventListener('click', () => {
            this.hideModal(this.gameCompleteModal);
            this.resetGame();
        });
    }

    getCurrentDino() {
        return this.dinos[this.currentLevel - 1];
    }

    startLevel() {
        const dino = this.getCurrentDino();
        this.bonesFound = 0;
        this.totalBones = dino.bones;

        // Update HUD
        this.currentLevelEl.textContent = this.currentLevel;
        this.dinoNameEl.textContent = dino.name;
        this.bonesFoundEl.textContent = this.bonesFound;
        this.totalBonesEl.textContent = this.totalBones;
        this.updateProgressBar();

        // Create digging grid
        this.createDirtGrid(dino.gridSize, dino.bones);
    }

    createDirtGrid(size, boneCount) {
        this.dirtGridEl.innerHTML = '';

        // Adjust grid columns based on size
        if (size === 16) {
            this.dirtGridEl.style.gridTemplateColumns = 'repeat(4, 1fr)';
        } else {
            this.dirtGridEl.style.gridTemplateColumns = 'repeat(4, 1fr)';
        }

        // Create blocks
        for (let i = 0; i < size; i++) {
            const block = document.createElement('div');
            block.className = 'dirt-block';
            block.dataset.index = i;

            // Add dirt texture
            const textureIndex = Math.floor(Math.random() * this.dirtTextures.length);
            const texture = document.createElement('span');
            texture.className = 'dirt-texture';
            texture.textContent = this.dirtTextures[textureIndex];
            block.appendChild(texture);

            block.addEventListener('click', () => this.digBlock(block));
            this.dirtGridEl.appendChild(block);
        }

        // Place bones randomly
        this.placeBones(size, boneCount);
    }

    placeBones(gridSize, boneCount) {
        const blocks = Array.from(this.dirtGridEl.children);
        const shuffled = blocks.sort(() => Math.random() - 0.5);

        for (let i = 0; i < boneCount && i < shuffled.length; i++) {
            shuffled[i].dataset.hasBone = 'true';
        }
    }

    digBlock(block) {
        if (block.classList.contains('dug')) return;

        block.classList.add('dug');

        if (block.dataset.hasBone === 'true') {
            // Found a bone!
            this.foundBone(block);
        } else {
            // Just dirt
            this.playSound('dig');
        }
    }

    foundBone(block) {
        this.bonesFound++;
        this.totalBonesCollected++;

        // Update UI
        this.bonesFoundEl.textContent = this.bonesFound;
        this.updateProgressBar();

        // Add bone emoji
        const boneEmoji = document.createElement('span');
        boneEmoji.className = 'bone-emoji bone-found-animation';
        boneEmoji.textContent = this.boneEmojis[Math.floor(Math.random() * this.boneEmojis.length)];
        block.appendChild(boneEmoji);
        block.classList.add('bone');

        // Play sound
        this.playSound('bone');

        // Save progress
        this.saveProgress();

        // Check if level complete
        if (this.bonesFound >= this.totalBones) {
            setTimeout(() => this.levelComplete(), 500);
        }
    }

    updateProgressBar() {
        const progress = (this.bonesFound / this.totalBones) * 100;
        this.progressFillEl.style.width = `${progress}%`;

        // Update color based on progress
        this.progressFillEl.classList.remove('medium', 'high');
        if (progress < 30) {
            this.progressFillEl.classList.add('low');
        } else if (progress < 70) {
            this.progressFillEl.classList.add('medium');
        } else {
            this.progressFillEl.classList.add('high');
        }
    }

    levelComplete() {
        const dino = this.getCurrentDino();
        this.completedDinoEl.textContent = dino.name;
        this.playSound('levelComplete');
        this.showModal(this.levelCompleteModal);
    }

    nextLevel() {
        if (this.currentLevel >= this.totalLevels) {
            this.gameComplete = true;
            this.saveProgress();
            this.showGameComplete();
        } else {
            this.currentLevel++;
            this.saveProgress();
            this.startLevel();
        }
    }

    showGameComplete() {
        this.totalLevelsEl.textContent = this.totalLevels;
        this.totalBonesCollectedEl.textContent = this.totalBonesCollected;
        this.playSound('gameComplete');
        this.showModal(this.gameCompleteModal);
    }

    resetGame() {
        this.currentLevel = 1;
        this.bonesFound = 0;
        this.totalBonesCollected = 0;
        this.gameComplete = false;
        this.saveProgress();
        this.startLevel();
    }

    showModal(modal) {
        modal.classList.add('active');
    }

    hideModal(modal) {
        modal.classList.remove('active');
    }

    playSound(type) {
        // Visual feedback for sound (could be replaced with actual audio)
        const gameContainer = document.querySelector('.game-container');
        gameContainer.classList.add('pulse');

        setTimeout(() => {
            gameContainer.classList.remove('pulse');
        }, 100);

        // You could add actual audio here:
        // const audio = new Audio(`assets/${type}.mp3`);
        // audio.play();
    }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PaleontologoDino();
});
