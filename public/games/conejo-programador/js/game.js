// Conejo Programador - Game Logic

const game = {
    currentLevel: 1,
    maxLevels: 5,
    gridSize: 5,
    rabbitPosition: { x: 0, y: 0 },
    carrotPosition: { x: 0, y: 0 },
    obstacles: [],
    commands: [],
    isExecuting: false,
    timer: null,
    timeLeft: 60,
    levelsCompleted: 0,
    progress: { unlockedLevels: 1 }
};

// Niveles del juego
const levels = [
    // Nivel 1: Sin obstáculos, zanahoria cerca
    {
        gridSize: 4,
        rabbitStart: { x: 0, y: 0 },
        carrotPosition: { x: 2, y: 2 },
        obstacles: [],
        timeLimit: 60,
        movesToComplete: 4
    },
    // Nivel 2: Un obstáculo simple
    {
        gridSize: 4,
        rabbitStart: { x: 0, y: 0 },
        carrotPosition: { x: 3, y: 3 },
        obstacles: [{ x: 1, y: 1 }],
        timeLimit: 60,
        movesToComplete: 6
    },
    // Nivel 3: Más obstáculos
    {
        gridSize: 5,
        rabbitStart: { x: 0, y: 0 },
        carrotPosition: { x: 4, y: 4 },
        obstacles: [
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 }
        ],
        timeLimit: 60,
        movesToComplete: 8
    },
    // Nivel 4: Laberinto simple
    {
        gridSize: 5,
        rabbitStart: { x: 0, y: 2 },
        carrotPosition: { x: 4, y: 2 },
        obstacles: [
            { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 3 }, { x: 1, y: 4 },
            { x: 2, y: 2 },
            { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 3 }, { x: 3, y: 4 }
        ],
        timeLimit: 70,
        movesToComplete: 10
    },
    // Nivel 5: Laberinto complejo
    {
        gridSize: 6,
        rabbitStart: { x: 0, y: 0 },
        carrotPosition: { x: 5, y: 5 },
        obstacles: [
            { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 },
            { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 },
            { x: 0, y: 4 }, { x: 2, y: 4 }, { x: 4, y: 4 }
        ],
        timeLimit: 80,
        movesToComplete: 12
    }
];

const commandIcons = {
    up: '⬆️',
    down: '⬇️',
    left: '⬅️',
    right: '➡️'
};

// Inicializar juego
function init() {
    loadProgress();
    setupEventListeners();
    loadLevel(1);
}

// Cargar progreso desde localStorage
function loadProgress() {
    const saved = localStorage.getItem('conejo-programador-progress');
    if (saved) {
        game.progress = JSON.parse(saved);
        game.currentLevel = game.progress.unlockedLevels;
    }
}

// Guardar progreso en localStorage
function saveProgress() {
    game.progress.unlockedLevels = Math.max(game.progress.unlockedLevels, game.currentLevel);
    localStorage.setItem('conejo-programador-progress', JSON.stringify(game.progress));
}

// Cargar nivel
function loadLevel(levelNum) {
    if (levelNum > game.maxLevels) {
        showGameComplete();
        return;
    }

    game.currentLevel = levelNum;
    const levelData = levels[levelNum - 1];

    game.gridSize = levelData.gridSize;
    game.rabbitPosition = { ...levelData.rabbitStart };
    game.carrotPosition = { ...levelData.carrotPosition };
    game.obstacles = [...levelData.obstacles];
    game.commands = [];
    game.isExecuting = false;
    game.timeLeft = levelData.timeLimit;
    game.levelsCompleted = levelNum - 1;

    updateUI();
    renderGrid();
    renderCommands();
    startTimer();
}

// Renderizar grid
function renderGrid() {
    const gridContainer = document.getElementById('gridContainer');
    const grid = document.createElement('div');
    grid.className = 'grid';
    grid.style.gridTemplateColumns = `repeat(${game.gridSize}, 1fr)`;

    for (let y = 0; y < game.gridSize; y++) {
        for (let x = 0; x < game.gridSize; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.x = x;
            cell.dataset.y = y;

            // Verificar si es obstáculo
            if (game.obstacles.some(o => o.x === x && o.y === y)) {
                cell.classList.add('obstacle');
                cell.textContent = '🧱';
            }
            // Verificar si está la zanahoria
            else if (game.carrotPosition.x === x && game.carrotPosition.y === y) {
                cell.classList.add('carrot');
                cell.textContent = '🥕';
            }
            // Verificar si está el conejo
            else if (game.rabbitPosition.x === x && game.rabbitPosition.y === y) {
                cell.classList.add('rabbit');
                cell.textContent = '🐰';
            }

            grid.appendChild(cell);
        }
    }

    gridContainer.innerHTML = '';
    gridContainer.appendChild(grid);
}

// Renderizar comandos en la cola
function renderCommands() {
    const commandQueue = document.getElementById('commandQueue');

    if (game.commands.length === 0) {
        commandQueue.innerHTML = `
            <div class="queue-placeholder">
                <span>Añade comandos aquí</span>
            </div>
        `;
        return;
    }

    commandQueue.innerHTML = '';
    game.commands.forEach((cmd, index) => {
        const icon = document.createElement('div');
        icon.className = 'command-icon';
        icon.textContent = commandIcons[cmd];
        icon.dataset.index = index;
        icon.addEventListener('click', () => removeCommand(index));
        commandQueue.appendChild(icon);
    });
}

// Añadir comando
function addCommand(command) {
    if (game.isExecuting) return;
    if (game.commands.length >= 12) return; // Máximo 12 comandos

    game.commands.push(command);
    renderCommands();
}

// Remover comando
function removeCommand(index) {
    if (game.isExecuting) return;

    game.commands.splice(index, 1);
    renderCommands();
}

// Limpiar comandos
function clearCommands() {
    if (game.isExecuting) return;

    game.commands = [];
    renderCommands();
}

// Actualizar UI
function updateUI() {
    // Nivel
    document.getElementById('levelNumber').textContent = game.currentLevel;

    // Barra de progreso
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const levelData = levels[game.currentLevel - 1];
    const progress = (game.commands.length / levelData.movesToComplete) * 100;
    progressFill.style.width = `${Math.min(progress, 100)}%`;
    progressText.textContent = `${game.commands.length}/${levelData.movesToComplete}`;
}

// Timer
function startTimer() {
    clearInterval(game.timer);
    updateTimerDisplay();

    game.timer = setInterval(() => {
        game.timeLeft--;
        updateTimerDisplay();

        if (game.timeLeft <= 0) {
            clearInterval(game.timer);
            showTimeout();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerFill = document.getElementById('timerFill');
    const timerText = document.getElementById('timerText');
    const timerBar = document.getElementById('timerBar');
    const levelData = levels[game.currentLevel - 1];
    const percentage = (game.timeLeft / levelData.timeLimit) * 100;

    timerFill.style.width = `${percentage}%`;
    timerText.textContent = `${game.timeLeft}s`;

    // Cambiar color según tiempo restante
    timerBar.classList.remove('warning', 'critical');
    if (percentage <= 25) {
        timerBar.classList.add('critical');
    } else if (percentage <= 50) {
        timerBar.classList.add('warning');
    }
}

// Ejecutar comandos
async function executeCommands() {
    if (game.isExecuting || game.commands.length === 0) return;

    game.isExecuting = true;
    disableControls(true);

    const commandIcons = document.querySelectorAll('.command-icon');

    for (let i = 0; i < game.commands.length; i++) {
        const command = game.commands[i];

        // Marcar comando actual
        commandIcons[i].classList.add('executing');

        await moveRabbit(command);
        await delay(500);

        // Desmarcar comando actual
        commandIcons[i].classList.remove('executing');

        // Verificar si llegó a la zanahoria
        if (game.rabbitPosition.x === game.carrotPosition.x &&
            game.rabbitPosition.y === game.carrotPosition.y) {
            clearInterval(game.timer);
            showSuccess();
            return;
        }

        // Verificar si se chocó contra obstáculo o pared
        if (checkCollision()) {
            clearInterval(game.timer);
            showTimeout();
            return;
        }
    }

    // Si no llegó a la zanahoria después de todos los comandos
    clearInterval(game.timer);
    showTimeout();
}

// Mover conejo
function moveRabbit(direction) {
    let newX = game.rabbitPosition.x;
    let newY = game.rabbitPosition.y;

    switch (direction) {
        case 'up':
            newY = Math.max(0, newY - 1);
            break;
        case 'down':
            newY = Math.min(game.gridSize - 1, newY + 1);
            break;
        case 'left':
            newX = Math.max(0, newX - 1);
            break;
        case 'right':
            newX = Math.min(game.gridSize - 1, newX + 1);
            break;
    }

    // Verificar si hay obstáculo
    if (!game.obstacles.some(o => o.x === newX && o.y === newY)) {
        game.rabbitPosition.x = newX;
        game.rabbitPosition.y = newY;
    }

    renderGrid();
}

// Verificar colisión
function checkCollision() {
    const { x, y } = game.rabbitPosition;

    // Verificar si está fuera del grid
    if (x < 0 || x >= game.gridSize || y < 0 || y >= game.gridSize) {
        return true;
    }

    // Verificar si está en obstáculo
    if (game.obstacles.some(o => o.x === x && o.y === y)) {
        return true;
    }

    return false;
}

// Delay helper
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Deshabilitar/habilitar controles
function disableControls(disabled) {
    const commandButtons = document.querySelectorAll('.command-btn');
    const controlButtons = document.querySelectorAll('.control-btn');

    commandButtons.forEach(btn => btn.disabled = disabled);
    controlButtons.forEach(btn => btn.disabled = disabled);
}

// Reiniciar nivel
function resetLevel() {
    clearInterval(game.timer);
    game.commands = [];
    game.isExecuting = false;

    const levelData = levels[game.currentLevel - 1];
    game.rabbitPosition = { ...levelData.rabbitStart };
    game.timeLeft = levelData.timeLimit;

    updateUI();
    renderGrid();
    renderCommands();
    disableControls(false);
    startTimer();
}

// Mostrar modal de éxito
function showSuccess() {
    game.isExecuting = false;
    disableControls(false);

    saveProgress();
    game.levelsCompleted++;

    const modal = document.getElementById('successModal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

// Mostrar modal de nivel completado
function showLevelComplete() {
    const modal = document.getElementById('levelCompleteModal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

// Mostrar modal de tiempo agotado
function showTimeout() {
    game.isExecuting = false;
    disableControls(false);

    const modal = document.getElementById('timeoutModal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

// Mostrar modal de juego completado
function showGameComplete() {
    game.isExecuting = false;
    disableControls(false);

    const modal = document.getElementById('gameCompleteModal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

// Cerrar modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
}

// Event listeners
function setupEventListeners() {
    // Botones de comandos
    document.querySelectorAll('.command-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const command = btn.dataset.command;
            addCommand(command);
            updateUI();
        });
    });

    // Botón de ejecutar
    document.getElementById('playBtn').addEventListener('click', executeCommands);

    // Botón de reiniciar
    document.getElementById('resetBtn').addEventListener('click', resetLevel);

    // Botón de limpiar
    document.getElementById('clearBtn').addEventListener('click', clearCommands);

    // Modal de éxito - siguiente nivel
    document.getElementById('nextLevelBtn').addEventListener('click', () => {
        closeModal('successModal');
        loadLevel(game.currentLevel + 1);
    });

    // Modal de nivel completado - continuar
    document.getElementById('continueBtn').addEventListener('click', () => {
        closeModal('levelCompleteModal');
        loadLevel(game.currentLevel + 1);
    });

    // Modal de tiempo agotado - reintentar
    document.getElementById('retryBtn').addEventListener('click', () => {
        closeModal('timeoutModal');
        resetLevel();
    });

    // Modal de juego completado - jugar de nuevo
    document.getElementById('playAgainBtn').addEventListener('click', () => {
        closeModal('gameCompleteModal');
        loadLevel(1);
    });
}

// Iniciar juego cuando cargue el documento
document.addEventListener('DOMContentLoaded', init);
