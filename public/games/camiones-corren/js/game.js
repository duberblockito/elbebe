// Camiones que Corren - Juego para niños 1-2 años
// Diseño: Vehículos cruzando la pantalla, touch para acelerar y reproducir sonido

class CamionesCorren {
    constructor() {
        this.currentLevel = 1;
        this.score = 0;
        this.maxLevels = 5;
        this.levelTarget = 10;
        this.targetReached = 0;
        this.timeLeft = 30;
        this.timerInterval = null;
        this.gameInterval = null;
        this.vehicleInterval = null;

        // Niveles configuración
        this.levelConfig = {
            1: { target: 10, time: 30, vehicleSpeed: 8, vehicleCount: 3 },
            2: { target: 12, time: 35, vehicleSpeed: 7, vehicleCount: 4 },
            3: { target: 15, time: 40, vehicleSpeed: 6, vehicleCount: 4 },
            4: { target: 18, time: 45, vehicleSpeed: 5, vehicleCount: 5 },
            5: { target: 20, time: 50, vehicleSpeed: 5, vehicleCount: 5 }
        };

        // Tipos de vehículos
        this.vehicleTypes = ['car', 'truck', 'bus'];

        // Elementos DOM
        this.elements = {
            level: document.getElementById('level'),
            score: document.getElementById('score'),
            progressBar: document.getElementById('progress-bar'),
            progressFill: document.getElementById('progress-fill'),
            progressCount: document.getElementById('progress-count'),
            timerBar: document.getElementById('timer-bar'),
            timer: document.getElementById('timer'),
            startScreen: document.getElementById('start-screen'),
            playScreen: document.getElementById('play-screen'),
            levelComplete: document.getElementById('level-complete'),
            timeUp: document.getElementById('time-up'),
            gameComplete: document.getElementById('game-complete'),
            road: document.getElementById('road'),
            btnStart: document.getElementById('btn-start'),
            btnNext: document.getElementById('btn-next'),
            btnRetry: document.getElementById('btn-retry'),
            btnHome: document.getElementById('btn-home')
        };

        this.init();
    }

    init() {
        // Cargar progreso guardado
        this.loadProgress();

        // Event listeners
        this.elements.btnStart.addEventListener('click', () => this.startGame());
        this.elements.btnNext.addEventListener('click', () => this.nextLevel());
        this.elements.btnRetry.addEventListener('click', () => this.retryLevel());
        this.elements.btnHome.addEventListener('click', () => this.goHome());
    }

    loadProgress() {
        const savedProgress = localStorage.getItem('camiones-corren-progress');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            this.currentLevel = progress.level || 1;
            this.score = progress.score || 0;
        }
    }

    saveProgress() {
        const progress = {
            level: this.currentLevel,
            score: this.score
        };
        localStorage.setItem('camiones-corren-progress', JSON.stringify(progress));
    }

    startGame() {
        this.hideAllScreens();
        this.elements.playScreen.style.display = 'block';
        this.startLevel();
    }

    startLevel() {
        const config = this.levelConfig[this.currentLevel];
        this.levelTarget = config.target;
        this.targetReached = 0;
        this.timeLeft = config.time;

        this.updateHUD();
        this.updateProgressBar();
        this.updateTimerBar();

        // Limpiar vehículos existentes
        this.clearVehicles();

        // Crear vehículos
        this.createVehicles(config.vehicleCount);

        // Iniciar temporizador
        this.startTimer();
    }

    createVehicles(count) {
        for (let i = 0; i < count; i++) {
            this.createVehicle(i);
        }
    }

    createVehicle(index) {
        const vehicle = document.createElement('div');
        vehicle.className = 'vehicle';

        const type = this.vehicleTypes[Math.floor(Math.random() * this.vehicleTypes.length)];
        vehicle.classList.add(type);

        vehicle.innerHTML = `
            <div class="vehicle-body">
                <div class="vehicle-window"></div>
                <div class="vehicle-wheels">
                    <div class="wheel"></div>
                    <div class="wheel"></div>
                </div>
            </div>
        `;

        // Posición vertical aleatoria
        const roadHeight = this.elements.road.offsetHeight;
        const yPos = 50 + (Math.random() * (roadHeight - 150));
        vehicle.style.top = yPos + 'px';

        // Animación de movimiento
        const animationClass = `vehicle-${(index % 3) + 1}`;
        vehicle.querySelector('.vehicle-body').classList.add(animationClass);

        // Evento touch/click
        vehicle.addEventListener('click', () => this.onVehicleClick(vehicle));
        vehicle.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.onVehicleClick(vehicle);
        });

        this.elements.road.appendChild(vehicle);
    }

    onVehicleClick(vehicle) {
        // Efecto visual de aceleración
        vehicle.classList.add('accelerating');
        setTimeout(() => vehicle.classList.remove('accelerating'), 300);

        // Reproducir sonido
        this.playEngineSound();

        // Crear efecto de estrellas
        this.createStarEffect(vehicle);

        // Actualizar puntos
        this.targetReached++;
        this.score += 10;

        this.updateHUD();
        this.updateProgressBar();

        // Verificar si completó el nivel
        if (this.targetReached >= this.levelTarget) {
            this.levelComplete();
        }
    }

    createStarEffect(vehicle) {
        const rect = vehicle.getBoundingClientRect();
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = (rect.left + rect.width / 2) + 'px';
        star.style.top = (rect.top + rect.height / 2) + 'px';
        document.body.appendChild(star);

        setTimeout(() => star.remove(), 500);
    }

    playEngineSound() {
        // Usar Web Audio API para generar sonido
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.1);

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        } catch (e) {
            console.log('Audio not supported');
        }
    }

    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateTimerBar();

            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    updateHUD() {
        this.elements.level.textContent = this.currentLevel;
        this.elements.score.textContent = this.score;
    }

    updateProgressBar() {
        const percentage = (this.targetReached / this.levelTarget) * 100;
        this.elements.progressFill.style.width = percentage + '%';
        this.elements.progressCount.textContent = this.targetReached;
    }

    updateTimerBar() {
        const config = this.levelConfig[this.currentLevel];
        const percentage = (this.timeLeft / config.time) * 100;
        this.elements.timerBar.style.width = percentage + '%';
        this.elements.timer.textContent = this.timeLeft;

        // Cambiar color según tiempo restante
        if (percentage <= 25) {
            this.elements.timerBar.style.background = '#E74C3C'; // Rojo
        } else if (percentage <= 50) {
            this.elements.timerBar.style.background = '#F39C12'; // Amarillo
        } else {
            this.elements.timerBar.style.background = 'linear-gradient(90deg, #FF5722, #FF6B35)'; // Naranja normal
        }
    }

    clearVehicles() {
        const vehicles = this.elements.road.querySelectorAll('.vehicle');
        vehicles.forEach(v => v.remove());
    }

    levelComplete() {
        clearInterval(this.timerInterval);
        this.saveProgress();

        if (this.currentLevel >= this.maxLevels) {
            this.showScreen('game-complete');
        } else {
            this.showScreen('level-complete');
        }
    }

    timeUp() {
        clearInterval(this.timerInterval);
        this.showScreen('time-up');
    }

    nextLevel() {
        this.currentLevel++;
        this.saveProgress();
        this.hideAllScreens();
        this.elements.playScreen.style.display = 'block';
        this.startLevel();
    }

    retryLevel() {
        this.hideAllScreens();
        this.elements.playScreen.style.display = 'block';
        this.startLevel();
    }

    goHome() {
        this.currentLevel = 1;
        this.score = 0;
        this.targetReached = 0;
        this.saveProgress();
        this.hideAllScreens();
        this.elements.startScreen.style.display = 'flex';
    }

    hideAllScreens() {
        this.elements.startScreen.style.display = 'none';
        this.elements.playScreen.style.display = 'none';
        this.elements.levelComplete.style.display = 'none';
        this.elements.timeUp.style.display = 'none';
        this.elements.gameComplete.style.display = 'none';
    }

    showScreen(screenName) {
        this.hideAllScreens();
        this.elements[screenName].style.display = 'flex';
    }
}

// Iniciar el juego cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new CamionesCorren();
});
