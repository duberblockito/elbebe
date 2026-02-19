// Patitas que Caminan - Juego para niños 0-1 años
const STORAGE_KEY = 'patitas-caminan-progress';

// Estado del juego
let currentLevel = 1;
let footprints = 0;
let targetFootprints = 5;
let timeLeft = 30;
let timerInterval = null;
let isPlaying = false;

// Configuración de niveles (objetivos de huellas y duración en segundos)
const levels = [
    { target: 5, time: 30 },   // Nivel 1: 5 huellas en 30s
    { target: 8, time: 35 },   // Nivel 2: 8 huellas en 35s
    { target: 10, time: 40 },  // Nivel 3: 10 huellas en 40s
    { target: 12, time: 45 },  // Nivel 4: 12 huellas en 45s
    { target: 15, time: 50 }   // Nivel 5: 15 huellas en 50s
];

// Configuración de animales (colores y emojis para huellas)
const animals = [
    { body: '#ffeb3b', leg: '#ffeb3b', footprint: '🐣', sound: 'cheep' },  // Pollito
    { body: '#ff9800', leg: '#ff9800', footprint: '🐱', sound: 'meow' },  // Gatito
    { body: '#795548', leg: '#795548', footprint: '🐶', sound: 'woof' }   // Perrito
];

let currentAnimal = 0;
let animalX = 150;
let animalY = 250;
let animalSpeed = 2;
let animalDirection = 1; // 1 = derecha, -1 = izquierda

// Elementos DOM
const animalEl = document.getElementById('animal');
const gameArea = document.getElementById('gameArea');
const levelEl = document.getElementById('level');
const timerEl = document.getElementById('timer');
const footprintsEl = document.getElementById('footprints');
const targetEl = document.getElementById('target');
const progressFill = document.getElementById('progressFill');
const timerBar = document.getElementById('timerBar');

// Modales
const levelCompleteModal = document.getElementById('levelCompleteModal');
const gameOverModal = document.getElementById('gameOverModal');
const gameCompleteModal = document.getElementById('gameCompleteModal');

// Inicialización
function init() {
    loadProgress();
    startLevel(currentLevel);
    setupEventListeners();
    startAnimalAnimation();
}

// Cargar progreso desde localStorage
function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const progress = JSON.parse(saved);
        currentLevel = progress.level || 1;
        // Asegurar que el nivel no exceda el máximo
        if (currentLevel > 5) {
            currentLevel = 1;
        }
    }
}

// Guardar progreso en localStorage
function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
        level: currentLevel,
        timestamp: Date.now()
    }));
}

// Iniciar nivel
function startLevel(level) {
    if (level > 5) {
        showGameComplete();
        return;
    }

    const levelConfig = levels[level - 1];
    targetFootprints = levelConfig.target;
    timeLeft = levelConfig.time;
    footprints = 0;
    isPlaying = true;

    // Actualizar UI
    levelEl.textContent = level;
    targetEl.textContent = targetFootprints;
    updateHUD();
    updateProgressBar();
    updateTimerBar();

    // Ocultar modales
    hideAllModals();

    // Iniciar temporizador
    startTimer();
}

// Actualizar HUD
function updateHUD() {
    footprintsEl.textContent = footprints;
    timerEl.textContent = timeLeft + 's';
}

// Actualizar barra de progreso
function updateProgressBar() {
    const progress = (footprints / targetFootprints) * 100;
    progressFill.style.width = Math.min(progress, 100) + '%';
}

// Actualizar barra de temporizador
function updateTimerBar() {
    const levelConfig = levels[currentLevel - 1];
    const percentage = (timeLeft / levelConfig.time) * 100;
    timerBar.style.width = percentage + '%';

    // Cambiar color según tiempo restante
    timerBar.classList.remove('warning', 'danger');
    if (percentage < 25) {
        timerBar.classList.add('danger');
    } else if (percentage < 50) {
        timerBar.classList.add('warning');
    }
}

// Temporizador
function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        if (!isPlaying) return;

        timeLeft--;
        updateHUD();
        updateTimerBar();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            isPlaying = false;
            showGameOver();
        }
    }, 1000);
}

// Animación del animal caminando
function startAnimalAnimation() {
    function moveAnimal() {
        if (!isPlaying) {
            requestAnimationFrame(moveAnimal);
            return;
        }

        // Mover animal
        animalX += animalSpeed * animalDirection;

        // Límites del área
        const gameWidth = gameArea.offsetWidth - 80;
        if (animalX >= gameWidth) {
            animalDirection = -1;
            animalX = gameWidth;
        } else if (animalX <= 0) {
            animalDirection = 1;
            animalX = 0;
        }

        // Actualizar posición
        animalEl.style.left = animalX + 'px';
        animalEl.style.top = animalY + 'px';

        // Invertir animal según dirección
        if (animalDirection === -1) {
            animalEl.style.transform = 'scaleX(-1)';
        } else {
            animalEl.style.transform = 'scaleX(1)';
        }

        // Crear huella periódicamente
        if (Math.random() < 0.03) { // 3% de probabilidad por frame
            createFootprint();
            footprints++;
            updateHUD();
            updateProgressBar();

            if (footprints >= targetFootprints) {
                clearInterval(timerInterval);
                isPlaying = false;
                showLevelComplete();
            }
        }

        requestAnimationFrame(moveAnimal);
    }

    requestAnimationFrame(moveAnimal);
}

// Crear huella
function createFootprint() {
    const footprint = document.createElement('div');
    footprint.className = 'footprint';
    footprint.textContent = animals[currentAnimal].footprint;

    // Posición aleatoria cerca del animal
    const offsetX = (Math.random() - 0.5) * 60;
    const offsetY = 40 + Math.random() * 30;

    footprint.style.left = (animalX + offsetX) + 'px';
    footprint.style.top = (animalY + offsetY) + 'px';
    footprint.style.color = animals[currentAnimal].body;

    gameArea.appendChild(footprint);

    // Eliminar huella después de la animación
    setTimeout(() => {
        footprint.remove();
    }, 3000);
}

// Configurar eventos
function setupEventListeners() {
    // Touch en animal para cambiar especie y color
    animalEl.addEventListener('click', changeAnimal);
    animalEl.addEventListener('touchstart', (e) => {
        e.preventDefault();
        changeAnimal();
    });

    // Touch en área de juego para cambiar posición del animal
    gameArea.addEventListener('touchstart', handleGameTouch);
    gameArea.addEventListener('click', handleGameClick);
}

// Cambiar animal
function changeAnimal() {
    if (!isPlaying) return;

    currentAnimal = (currentAnimal + 1) % animals.length;
    const animal = animals[currentAnimal];

    // Actualizar colores
    document.querySelector('.animal-body').style.backgroundColor = animal.body;
    document.querySelectorAll('.animal-leg').forEach(leg => {
        leg.style.backgroundColor = animal.leg;
    });

    // Reproducir sonido (Web Audio API)
    playAnimalSound(animal.sound);
}

// Reproducir sonido del animal
function playAnimalSound(soundType) {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Configurar sonido según animal
        if (soundType === 'cheep') {
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } else if (soundType === 'meow') {
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        } else if (soundType === 'woof') {
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.15);
            gainNode.gain.setValueAtTime(0.25, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.15);
        }
    } catch (e) {
        console.log('Error reproduciendo sonido:', e);
    }
}

// Manejar touch en área de juego
function handleGameTouch(e) {
    if (!isPlaying) return;
    e.preventDefault();

    const touch = e.touches[0];
    moveAnimalToPosition(touch.clientX, touch.clientY);
}

// Manejar click en área de juego
function handleGameClick(e) {
    if (!isPlaying) return;
    if (e.target === gameArea || e.target.classList.contains('footprint')) {
        moveAnimalToPosition(e.clientX, e.clientY);
    }
}

// Mover animal a posición
function moveAnimalToPosition(clientX, clientY) {
    const rect = gameArea.getBoundingClientRect();
    animalX = clientX - rect.left - 40;
    animalY = clientY - rect.top - 40;

    // Limitar a área del juego
    const gameWidth = gameArea.offsetWidth - 80;
    const gameHeight = gameArea.offsetHeight - 80;

    animalX = Math.max(0, Math.min(animalX, gameWidth));
    animalY = Math.max(0, Math.min(animalY, gameHeight));

    animalEl.style.left = animalX + 'px';
    animalEl.style.top = animalY + 'px';
}

// Mostrar modal de nivel completado
function showLevelComplete() {
    levelCompleteModal.classList.add('show');
    saveProgress();
}

// Mostrar modal de tiempo agotado
function showGameOver() {
    gameOverModal.classList.add('show');
}

// Mostrar modal de juego completado
function showGameComplete() {
    gameCompleteModal.classList.add('show');
    // Resetear progreso
    localStorage.removeItem(STORAGE_KEY);
}

// Ocultar todos los modales
function hideAllModals() {
    levelCompleteModal.classList.remove('show');
    gameOverModal.classList.remove('show');
    gameCompleteModal.classList.remove('show');
}

// Siguiente nivel
function nextLevel() {
    currentLevel++;
    startLevel(currentLevel);
}

// Reintentar nivel
function retryLevel() {
    startLevel(currentLevel);
}

// Jugar de nuevo
function playAgain() {
    currentLevel = 1;
    startLevel(1);
}

// Iniciar juego cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
