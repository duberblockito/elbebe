// ===== Science Lab: Element Fusion =====
// Versión: 1.0.0

class ScienceLabGame {
    constructor() {
        this.level = 1;
        this.timeRemaining = 60;
        this.maxTime = 60;
        this.discoveredElements = new Set();
        this.requiredDiscovered = 5;
        this.selectedElements = [null, null];
        this.timerInterval = null;
        this.gameState = 'playing';

        // Elementos disponibles por nivel
        this.elementsByLevel = {
            1: [
                { id: 'fire', symbol: 'F', name: 'Fuego', color: '#e74c3c' },
                { id: 'water', symbol: 'W', name: 'Agua', color: '#3498db' },
                { id: 'earth', symbol: 'E', name: 'Tierra', color: '#f39c12' },
                { id: 'air', symbol: 'A', name: 'Aire', color: '#95a5a6' }
            ],
            2: [
                { id: 'fire', symbol: 'F', name: 'Fuego', color: '#e74c3c' },
                { id: 'water', symbol: 'W', name: 'Agua', color: '#3498db' },
                { id: 'earth', symbol: 'E', name: 'Tierra', color: '#f39c12' },
                { id: 'air', symbol: 'A', name: 'Aire', color: '#95a5a6' },
                { id: 'light', symbol: 'L', name: 'Luz', color: '#f1c40f' }
            ],
            3: [
                { id: 'fire', symbol: 'F', name: 'Fuego', color: '#e74c3c' },
                { id: 'water', symbol: 'W', name: 'Agua', color: '#3498db' },
                { id: 'earth', symbol: 'E', name: 'Tierra', color: '#f39c12' },
                { id: 'air', symbol: 'A', name: 'Aire', color: '#95a5a6' },
                { id: 'light', symbol: 'L', name: 'Luz', color: '#f1c40f' },
                { id: 'dark', symbol: 'D', name: 'Oscuridad', color: '#2c3e50' }
            ],
            4: [
                { id: 'fire', symbol: 'F', name: 'Fuego', color: '#e74c3c' },
                { id: 'water', symbol: 'W', name: 'Agua', color: '#3498db' },
                { id: 'earth', symbol: 'E', name: 'Tierra', color: '#f39c12' },
                { id: 'air', symbol: 'A', name: 'Aire', color: '#95a5a6' },
                { id: 'light', symbol: 'L', name: 'Luz', color: '#f1c40f' },
                { id: 'dark', symbol: 'D', name: 'Oscuridad', color: '#2c3e50' },
                { id: 'ice', symbol: 'I', name: 'Hielo', color: '#00cec9' }
            ]
        };

        // Combinaciones posibles
        this.combinations = {
            'fire,water': { id: 'steam', symbol: 'St', name: 'Vapor', color: '#b2bec3' },
            'fire,earth': { id: 'lava', symbol: 'Lv', name: 'Lava', color: '#e17055' },
            'fire,air': { id: 'lightning', symbol: 'Lt', name: 'Relámpago', color: '#fdcb6e' },
            'water,fire': { id: 'steam', symbol: 'St', name: 'Vapor', color: '#b2bec3' },
            'water,earth': { id: 'mud', symbol: 'Md', name: 'Barro', color: '#636e72' },
            'water,air': { id: 'rain', symbol: 'Rn', name: 'Lluvia', color: '#74b9ff' },
            'earth,fire': { id: 'lava', symbol: 'Lv', name: 'Lava', color: '#e17055' },
            'earth,water': { id: 'mud', symbol: 'Md', name: 'Barro', color: '#636e72' },
            'earth,air': { id: 'dust', symbol: 'Ds', name: 'Polvo', color: '#dfe6e9' },
            'air,fire': { id: 'lightning', symbol: 'Lt', name: 'Relámpago', color: '#fdcb6e' },
            'air,water': { id: 'rain', symbol: 'Rn', name: 'Lluvia', color: '#74b9ff' },
            'air,earth': { id: 'dust', symbol: 'Ds', name: 'Polvo', color: '#dfe6e9' },
            'fire,light': { id: 'plasma', symbol: 'Pl', name: 'Plasma', color: '#fd79a8' },
            'light,fire': { id: 'plasma', symbol: 'Pl', name: 'Plasma', color: '#fd79a8' },
            'water,light': { id: 'rainbow', symbol: 'Rb', name: 'Arcoíris', color: '#e84393' },
            'light,water': { id: 'rainbow', symbol: 'Rb', name: 'Arcoíris', color: '#e84393' },
            'earth,light': { id: 'crystal', symbol: 'Cr', name: 'Cristal', color: '#a29bfe' },
            'light,earth': { id: 'crystal', symbol: 'Cr', name: 'Cristal', color: '#a29bfe' },
            'air,light': { id: 'aurora', symbol: 'Au', name: 'Aurora', color: '#81ecec' },
            'light,air': { id: 'aurora', symbol: 'Au', name: 'Aurora', color: '#81ecec' },
            'fire,dark': { id: 'shadow', symbol: 'Sh', name: 'Sombra', color: '#6c5ce7' },
            'dark,fire': { id: 'shadow', symbol: 'Sh', name: 'Sombra', color: '#6c5ce7' },
            'water,dark': { id: 'poison', symbol: 'Ps', name: 'Veneno', color: '#00b894' },
            'dark,water': { id: 'poison', symbol: 'Ps', name: 'Veneno', color: '#00b894' },
            'earth,dark': { id: 'metal', symbol: 'Mt', name: 'Metal', color: '#2d3436' },
            'dark,earth': { id: 'metal', symbol: 'Mt', name: 'Metal', color: '#2d3436' },
            'air,dark': { id: 'void', symbol: 'Vd', name: 'Vacío', color: '#2c3e50' },
            'dark,air': { id: 'void', symbol: 'Vd', name: 'Vacío', color: '#2c3e50' },
            'light,dark': { id: 'balance', symbol: 'Bl', name: 'Equilibrio', color: '#dfe6e9' },
            'dark,light': { id: 'balance', symbol: 'Bl', name: 'Equilibrio', color: '#dfe6e9' },
            'water,ice': { id: 'slush', symbol: 'Sl', name: 'Nieve', color: '#74b9ff' },
            'ice,water': { id: 'slush', symbol: 'Sl', name: 'Nieve', color: '#74b9ff' },
            'fire,ice': { id: 'magma', symbol: 'Mg', name: 'Magma', color: '#d63031' },
            'ice,fire': { id: 'magma', symbol: 'Mg', name: 'Magma', color: '#d63031' }
        };

        this.init();
    }

    init() {
        this.loadProgress();
        this.setupEventListeners();
        this.renderElements();
        this.renderDiscovered();
        this.updateUI();
        this.startTimer();
    }

    loadProgress() {
        const saved = localStorage.getItem('science-lab-progress');
        if (saved) {
            const data = JSON.parse(saved);
            this.level = data.level || 1;
            this.discoveredElements = new Set(data.discovered || []);
        }
    }

    saveProgress() {
        localStorage.setItem('science-lab-progress', JSON.stringify({
            level: this.level,
            discovered: Array.from(this.discoveredElements)
        }));
    }

    setupEventListeners() {
        document.getElementById('combine-btn').addEventListener('click', () => this.combineElements());
        document.getElementById('next-level-btn').addEventListener('click', () => this.nextLevel());
        document.getElementById('retry-btn').addEventListener('click', () => this.restartLevel());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartGame());
    }

    renderElements() {
        const grid = document.getElementById('elements-grid');
        const elements = this.elementsByLevel[this.level] || this.elementsByLevel[4];

        grid.innerHTML = elements.map(el => `
            <div class="element-card"
                 draggable="true"
                 data-element-id="${el.id}"
                 data-element-symbol="${el.symbol}"
                 data-element-name="${el.name}"
                 data-element-color="${el.color}">
                <span class="element-symbol">${el.symbol}</span>
                <span class="element-name">${el.name}</span>
            </div>
        `).join('');

        this.setupDragAndDrop();
    }

    renderDiscovered() {
        const grid = document.getElementById('discovered-grid');
        grid.innerHTML = '';

        this.discoveredElements.forEach(elId => {
            const combo = Object.values(this.combinations).find(c => c.id === elId);
            if (combo) {
                grid.innerHTML += `
                    <div class="element-card">
                        <span class="element-symbol">${combo.symbol}</span>
                        <span class="element-name">${combo.name}</span>
                    </div>
                `;
            }
        });

        if (this.discoveredElements.size === 0) {
            grid.innerHTML = '<p style="color: rgba(255,255,255,0.5); text-align: center; grid-column: 1/-1; padding: 20px;">¡Combina elementos para descubrir nuevos!</p>';
        }
    }

    setupDragAndDrop() {
        const cards = document.querySelectorAll('.element-card:not(.discovered-grid .element-card)');
        const dropZones = document.querySelectorAll('.drop-zone');

        cards.forEach(card => {
            card.addEventListener('dragstart', (e) => this.handleDragStart(e));
            card.addEventListener('dragend', (e) => this.handleDragEnd(e));

            // Touch support
            card.addEventListener('touchstart', (e) => this.handleTouchStart(e));
            card.addEventListener('touchend', (e) => this.handleTouchEnd(e));
        });

        dropZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => this.handleDragOver(e));
            zone.addEventListener('dragleave', (e) => this.handleDragLeave(e));
            zone.addEventListener('drop', (e) => this.handleDrop(e));

            // Touch support
            zone.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        });
    }

    handleDragStart(e) {
        if (this.gameState !== 'playing') return;
        e.target.classList.add('dragging');
        e.dataTransfer.setData('text/plain', JSON.stringify({
            id: e.target.dataset.elementId,
            symbol: e.target.dataset.elementSymbol,
            name: e.target.dataset.elementName,
            color: e.target.dataset.elementColor
        }));
    }

    handleDragEnd(e) {
        e.target.classList.remove('dragging');
    }

    handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    }

    handleDragLeave(e) {
        e.currentTarget.classList.remove('drag-over');
    }

    handleDrop(e) {
        e.preventDefault();
        e.currentTarget.classList.remove('drag-over');

        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        const zoneIndex = e.currentTarget.id === 'drop-zone-1' ? 0 : 1;

        this.selectElement(zoneIndex, data);
    }

    handleTouchStart(e) {
        if (this.gameState !== 'playing') return;
        e.preventDefault();
        const touch = e.touches[0];
        const target = e.target.closest('.element-card');

        if (target) {
            target.classList.add('dragging');
            this.touchedElement = {
                id: target.dataset.elementId,
                symbol: target.dataset.elementSymbol,
                name: target.dataset.elementName,
                color: target.dataset.elementColor
            };
        }
    }

    handleTouchEnd(e) {
        e.preventDefault();
        document.querySelectorAll('.element-card').forEach(card => {
            card.classList.remove('dragging');
        });

        if (this.touchedElement) {
            const touch = e.changedTouches[0];
            const dropZone1 = document.getElementById('drop-zone-1');
            const dropZone2 = document.getElementById('drop-zone-2');

            const rect1 = dropZone1.getBoundingClientRect();
            const rect2 = dropZone2.getBoundingClientRect();

            if (touch.clientX >= rect1.left && touch.clientX <= rect1.right &&
                touch.clientY >= rect1.top && touch.clientY <= rect1.bottom) {
                this.selectElement(0, this.touchedElement);
            } else if (touch.clientX >= rect2.left && touch.clientX <= rect2.right &&
                       touch.clientY >= rect2.top && touch.clientY <= rect2.bottom) {
                this.selectElement(1, this.touchedElement);
            }
        }

        this.touchedElement = null;
    }

    handleTouchMove(e) {
        e.preventDefault();
    }

    selectElement(zoneIndex, element) {
        this.selectedElements[zoneIndex] = element;
        this.updateDropZone(zoneIndex);
        this.checkCanCombine();
    }

    updateDropZone(zoneIndex) {
        const zone = document.getElementById(`drop-zone-${zoneIndex + 1}`);
        const element = this.selectedElements[zoneIndex];

        if (element) {
            zone.innerHTML = `
                <div class="element-card" style="cursor: default;">
                    <span class="element-symbol">${element.symbol}</span>
                    <span class="element-name">${element.name}</span>
                </div>
            `;
            zone.classList.add('has-element');
        } else {
            zone.innerHTML = '<span class="drop-zone-placeholder">Arrastra aquí</span>';
            zone.classList.remove('has-element');
        }
    }

    checkCanCombine() {
        const btn = document.getElementById('combine-btn');
        const canCombine = this.selectedElements[0] !== null && this.selectedElements[1] !== null;
        btn.disabled = !canCombine;
    }

    combineElements() {
        if (!this.selectedElements[0] || !this.selectedElements[1]) return;

        const key1 = `${this.selectedElements[0].id},${this.selectedElements[1].id}`;
        const key2 = `${this.selectedElements[1].id},${this.selectedElements[0].id}`;

        const result = this.combinations[key1] || this.combinations[key2];

        if (result) {
            this.discoveredElements.add(result.id);
            this.showResult(result);
            this.renderDiscovered();
            this.updateProgress();
            this.saveProgress();
            this.createParticleEffect();

            if (this.discoveredElements.size >= this.requiredDiscovered) {
                setTimeout(() => this.levelComplete(), 1000);
            }
        } else {
            this.showError();
        }

        this.clearDropZones();
    }

    showResult(result) {
        const resultZone = document.getElementById('result-zone');
        resultZone.innerHTML = `
            <div class="element-card" style="background: linear-gradient(135deg, ${result.color} 0%, ${this.darkenColor(result.color)} 100%);">
                <span class="element-symbol">${result.symbol}</span>
                <span class="element-name">${result.name}</span>
            </div>
        `;
        resultZone.classList.add('has-result');
    }

    showError() {
        const resultZone = document.getElementById('result-zone');
        resultZone.innerHTML = `
            <span style="font-size: 3rem;">❌</span>
        `;
        resultZone.classList.add('has-result');
        setTimeout(() => {
            resultZone.classList.remove('has-result');
            resultZone.innerHTML = '';
        }, 1000);
    }

    clearDropZones() {
        this.selectedElements = [null, null];
        this.updateDropZone(0);
        this.updateDropZone(1);
        this.checkCanCombine();

        setTimeout(() => {
            const resultZone = document.getElementById('result-zone');
            resultZone.classList.remove('has-result');
            resultZone.innerHTML = '';
        }, 2000);
    }

    createParticleEffect() {
        const container = document.querySelector('.game-container');
        const colors = ['#f39c12', '#e74c3c', '#3498db', '#4ecdc4', '#f093fb'];

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.width = Math.random() * 20 + 10 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.boxShadow = `0 0 ${Math.random() * 20}px ${particle.style.background}`;

            const angle = (Math.random() * 360) * (Math.PI / 180);
            const velocity = Math.random() * 200 + 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;

            particle.animate([
                { transform: 'translate(-50%, -50%)', opacity: 1 },
                { transform: `translate(calc(-50% + ${vx}px), calc(-50% + ${vy}px))`, opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-out'
            });

            container.appendChild(particle);
            setTimeout(() => particle.remove(), 1000);
        }
    }

    darkenColor(color) {
        // Simple color darkening
        const hex = color.replace('#', '');
        const r = Math.max(0, parseInt(hex.substr(0, 2), 16) - 40);
        const g = Math.max(0, parseInt(hex.substr(2, 2), 16) - 40);
        const b = Math.max(0, parseInt(hex.substr(4, 2), 16) - 40);
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    updateProgress() {
        const fill = document.getElementById('progress-fill');
        const text = document.getElementById('progress-text');
        const progress = (this.discoveredElements.size / this.requiredDiscovered) * 100;

        fill.style.width = `${progress}%`;
        text.textContent = `${this.discoveredElements.size}/${this.requiredDiscovered}`;
    }

    updateUI() {
        document.getElementById('level').textContent = this.level;
        this.updateProgress();
    }

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);

        this.timerInterval = setInterval(() => {
            if (this.gameState !== 'playing') return;

            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 0) {
                this.timeUp();
            }
        }, 1000);

        this.updateTimerDisplay();
    }

    updateTimerDisplay() {
        const bar = document.getElementById('timer-bar');
        const text = document.getElementById('timer-text');
        const progress = (this.timeRemaining / this.maxTime) * 100;

        bar.style.setProperty('--progress', `${progress}%`);
        bar.style.width = `${progress}%`;
        text.textContent = `${this.timeRemaining}s`;

        if (this.timeRemaining <= 10) {
            bar.style.background = 'linear-gradient(90deg, #e74c3c 0%, #c0392b 100%)';
            text.style.color = '#e74c3c';
        }
    }

    levelComplete() {
        this.gameState = 'completed';
        clearInterval(this.timerInterval);

        document.getElementById('level-completed-discovered').textContent = this.discoveredElements.size;
        document.getElementById('level-completed-time').textContent = `${this.timeRemaining}s`;

        if (this.level >= 4) {
            this.showModal('game-complete-modal');
        } else {
            this.showModal('level-complete-modal');
        }
    }

    timeUp() {
        this.gameState = 'timeout';
        clearInterval(this.timerInterval);

        document.getElementById('time-up-discovered').textContent = this.discoveredElements.size;
        this.showModal('time-up-modal');
    }

    showModal(id) {
        document.getElementById(id).classList.add('active');
    }

    hideModal(id) {
        document.getElementById(id).classList.remove('active');
    }

    nextLevel() {
        this.hideModal('level-complete-modal');
        this.level++;
        this.timeRemaining = this.maxTime;
        this.discoveredElements = new Set();
        this.gameState = 'playing';

        this.renderElements();
        this.renderDiscovered();
        this.updateUI();
        this.clearDropZones();
        this.startTimer();
        this.saveProgress();
    }

    restartLevel() {
        this.hideModal('time-up-modal');
        this.timeRemaining = this.maxTime;
        this.discoveredElements = new Set();
        this.gameState = 'playing';

        this.renderDiscovered();
        this.updateUI();
        this.clearDropZones();
        this.startTimer();
    }

    restartGame() {
        this.hideModal('game-complete-modal');
        this.level = 1;
        this.timeRemaining = this.maxTime;
        this.discoveredElements = new Set();
        this.gameState = 'playing';

        localStorage.removeItem('science-lab-progress');

        this.renderElements();
        this.renderDiscovered();
        this.updateUI();
        this.clearDropZones();
        this.startTimer();
    }
}

// Inicializar juego cuando cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    new ScienceLabGame();
});
