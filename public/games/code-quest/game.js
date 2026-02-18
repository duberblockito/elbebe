// Code Quest: Mystery Island - Game Logic
// Target: 8-15 years old children

// Level configuration
const LEVELS = [
    {
        id: 1,
        title: "Introducción a Variables",
        instruction: "Usa la variable `pasos` para decirle al personaje cuántos pasos debe moverse. El loop `for` repetirá el movimiento 3 veces.",
        timeLimit: 120, // 2 minutes
        gridSize: 5,
        characterPos: { row: 0, col: 0 },
        goalPos: { row: 0, col: 4 },
        obstacles: [],
        expectedCode: "let pasos = 3;\nfor (let i = 0; i < pasos; i++) {\n  moverDerecha();\n}",
        hint: "Usa un loop `for` para repetir el movimiento 3 veces",
        hintCount: 3
    },
    {
        id: 2,
        title: "Loops Simples",
        instruction: "Usa dos loops para mover el personaje en forma de L. Primero 2 veces a la derecha, luego 2 veces hacia abajo.",
        timeLimit: 150, // 2.5 minutes
        gridSize: 5,
        characterPos: { row: 0, col: 0 },
        goalPos: { row: 2, col: 4 },
        obstacles: [],
        expectedCode: "for (let i = 0; i < 2; i++) {\n  moverDerecha();\n}\nfor (let i = 0; i < 2; i++) {\n  moverAbajo();\n}",
        hint: "Usa dos loops: uno para mover a la derecha y otro para mover abajo",
        hintCount: 3
    },
    {
        id: 3,
        title: "Condicionales",
        instruction: "Usa un condicional `if` para detectar obstáculos. Si hay un obstáculo, muévete abajo. Si no, muévete a la derecha.",
        timeLimit: 180, // 3 minutes
        gridSize: 5,
        characterPos: { row: 0, col: 0 },
        goalPos: { row: 2, col: 4 },
        obstacles: [{ row: 0, col: 2 }],
        expectedCode: "for (let i = 0; i < 3; i++) {\n  if (!hayObstaculo()) {\n    moverDerecha();\n  } else {\n    moverAbajo();\n  }\n}",
        hint: "Usa `if (!hayObstaculo())` para detectar si hay un obstáculo",
        hintCount: 3
    },
    {
        id: 4,
        title: "Loops y Condicionales Combinados",
        instruction: "Combina loops y condicionales para navegar el laberinto. Detecta los obstáculos y muévete alrededor de ellos.",
        timeLimit: 180, // 3 minutes
        gridSize: 5,
        characterPos: { row: 0, col: 0 },
        goalPos: { row: 3, col: 4 },
        obstacles: [{ row: 0, col: 2 }, { row: 1, col: 3 }],
        expectedCode: "for (let i = 0; i < 4; i++) {\n  if (!hayObstaculo()) {\n    moverDerecha();\n  } else {\n    moverAbajo();\n  }\n}\nmoverDerecha();",
        hint: "Usa un loop para avanzar y un condicional para evitar obstáculos",
        hintCount: 3
    },
    {
        id: 5,
        title: "Desafío Final",
        instruction: "Usa todo lo que aprendiste para resolver este puzzle final. Combina variables, loops y condicionales.",
        timeLimit: 180, // 3 minutes
        gridSize: 5,
        characterPos: { row: 0, col: 0 },
        goalPos: { row: 4, col: 4 },
        obstacles: [{ row: 0, col: 2 }, { row: 1, col: 3 }, { row: 2, col: 2 }],
        expectedCode: "for (let i = 0; i < 3; i++) {\n  if (!hayObstaculo()) {\n    moverDerecha();\n  } else {\n    moverAbajo();\n  }\n}\nfor (let i = 0; i < 3; i++) {\n  if (!hayObstaculo()) {\n    moverAbajo();\n  } else {\n    moverDerecha();\n  }\n}",
        hint: "Combina dos loops con condicionales para navegar el laberinto completo",
        hintCount: 3
    }
];

class CodeGame {
    constructor() {
        this.currentLevel = 0;
        this.characterPos = { row: 0, col: 0 };
        this.timeRemaining = 0;
        this.timerInterval = null;
        this.isLevelComplete = false;
        this.isGameOver = false;
        this.hintsUsed = 0;

        this.gameState = {
            unlockedLevels: 1,
            totalPuzzlesSolved: 0,
            lastPlayed: null,
            playerName: "Player 1"
        };

        this.loadProgress();
    }

    // Progress persistence
    saveProgress() {
        const progress = {
            unlockedLevels: this.gameState.unlockedLevels,
            currentLevel: this.currentLevel,
            totalPuzzlesSolved: this.gameState.totalPuzzlesSolved,
            lastPlayed: new Date().toISOString(),
            playerName: this.gameState.playerName
        };
        localStorage.setItem('code-quest-progress', JSON.stringify(progress));
    }

    loadProgress() {
        const saved = localStorage.getItem('code-quest-progress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.gameState.unlockedLevels = progress.unlockedLevels || 1;
            this.currentLevel = progress.currentLevel || 0;
            this.gameState.totalPuzzlesSolved = progress.totalPuzzlesSolved || 0;
            this.gameState.lastPlayed = progress.lastPlayed;
            this.gameState.playerName = progress.playerName || "Player 1";
        }
    }

    startGame() {
        document.getElementById('introScreen').style.display = 'none';
        document.getElementById('gameContainer').style.display = 'flex';
        this.loadLevel(this.currentLevel);
    }

    loadLevel(levelIndex) {
        if (levelIndex >= LEVELS.length) {
            this.showGameCompleteModal();
            return;
        }

        const level = LEVELS[levelIndex];
        this.currentLevel = levelIndex;
        this.characterPos = { ...level.characterPos };
        this.timeRemaining = level.timeLimit;
        this.isLevelComplete = false;
        this.isGameOver = false;
        this.hintsUsed = 0;

        // Update UI
        document.getElementById('levelText').textContent = `Nivel ${level.id} de ${LEVELS.length}`;
        document.getElementById('instructionTitle').textContent = level.title;
        document.getElementById('instructionText').textContent = level.instruction;
        document.getElementById('codeEditor').value = '';
        document.getElementById('codeEditor').placeholder = '// Escribe tu código aquí...';

        // Clear modals
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });

        // Render grid
        this.renderGrid();

        // Update timer
        this.updateTimerDisplay();

        // Start timer
        this.startTimer();

        // Update code progress
        this.updateCodeProgress();

        // Update objective
        this.updateObjective();
    }

    renderGrid() {
        const level = LEVELS[this.currentLevel];
        const grid = document.getElementById('gameGrid');
        grid.innerHTML = '';

        for (let row = 0; row < level.gridSize; row++) {
            for (let col = 0; col < level.gridSize; col++) {
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.dataset.row = row;
                cell.dataset.col = col;

                // Add character
                if (row === this.characterPos.row && col === this.characterPos.col) {
                    cell.classList.add('character');
                    cell.textContent = '🏃';
                }

                // Add goal
                if (row === level.goalPos.row && col === level.goalPos.col) {
                    cell.classList.add('goal');
                    cell.textContent = '🏁';
                }

                // Add obstacles
                if (level.obstacles.some(obs => obs.row === row && obs.col === col)) {
                    cell.classList.add('obstacle');
                    cell.textContent = '🪨';
                }

                grid.appendChild(cell);
            }
        }
    }

    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 0) {
                this.stopTimer();
                this.showTimeUpModal();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timerText').textContent = timerText;

        const level = LEVELS[this.currentLevel];
        const percentage = (this.timeRemaining / level.timeLimit) * 100;
        const timerFill = document.getElementById('timerFill');

        timerFill.style.width = `${percentage}%`;

        // Change color based on time remaining
        timerFill.classList.remove('warning', 'danger');
        if (percentage < 25) {
            timerFill.classList.add('danger');
        } else if (percentage < 50) {
            timerFill.classList.add('warning');
        }
    }

    updateCodeProgress() {
        const code = document.getElementById('codeEditor').value;
        const level = LEVELS[this.currentLevel];

        // Calculate progress based on code similarity
        const progress = this.calculateCodeSimilarity(code, level.expectedCode);
        document.getElementById('codeProgressFill').style.width = `${progress}%`;
        document.getElementById('codeProgressText').textContent = `${Math.round(progress)}%`;
    }

    calculateCodeSimilarity(userCode, expectedCode) {
        // Simplified similarity calculation
        const userLines = userCode.trim().split('\n').filter(line => line.trim());
        const expectedLines = expectedCode.trim().split('\n').filter(line => line.trim());

        if (expectedLines.length === 0) return 0;
        if (userLines.length === 0) return 0;

        // Count matching lines (simplified)
        let matchCount = 0;
        userLines.forEach(userLine => {
            const cleanUserLine = userLine.trim().toLowerCase();
            expectedLines.forEach(expectedLine => {
                const cleanExpectedLine = expectedLine.trim().toLowerCase();
                if (cleanUserLine === cleanExpectedLine) {
                    matchCount++;
                }
            });
        });

        return Math.min((matchCount / expectedLines.length) * 100, 100);
    }

    updateObjective() {
        const level = LEVELS[this.currentLevel];
        const distance = Math.abs(this.characterPos.row - level.goalPos.row) +
                         Math.abs(this.characterPos.col - level.goalPos.col);
        document.getElementById('stepsRemaining').textContent = distance;
    }

    executeCode() {
        if (this.isLevelComplete || this.isGameOver) return;

        const code = document.getElementById('codeEditor').value;
        if (!code.trim()) {
            alert('Por favor, escribe algún código primero');
            return;
        }

        this.stopTimer();

        // Reset character position
        const level = LEVELS[this.currentLevel];
        this.characterPos = { ...level.characterPos };

        // Parse and execute code (simplified)
        try {
            this.executeUserCode(code);

            // Check if reached goal
            if (this.characterPos.row === level.goalPos.row &&
                this.characterPos.col === level.goalPos.col) {
                this.handleLevelComplete();
            } else {
                alert('El código se ejecutó pero no llegó a la meta. Intenta de nuevo.');
                this.renderGrid();
                this.startTimer();
            }
        } catch (error) {
            alert(`Error en el código: ${error.message}`);
            this.renderGrid();
            this.startTimer();
        }
    }

    executeUserCode(code) {
        const level = LEVELS[this.currentLevel];

        // Define available functions
        const moverDerecha = () => {
            if (this.characterPos.col < level.gridSize - 1) {
                const newCol = this.characterPos.col + 1;
                // Check for obstacle
                if (!this.isObstacle(this.characterPos.row, newCol)) {
                    this.characterPos.col = newCol;
                    this.renderGrid();
                    this.updateObjective();
                }
            }
        };

        const moverAbajo = () => {
            if (this.characterPos.row < level.gridSize - 1) {
                const newRow = this.characterPos.row + 1;
                // Check for obstacle
                if (!this.isObstacle(newRow, this.characterPos.col)) {
                    this.characterPos.row = newRow;
                    this.renderGrid();
                    this.updateObjective();
                }
            }
        };

        const hayObstaculo = () => {
            const newCol = this.characterPos.col + 1;
            if (newCol < level.gridSize) {
                return this.isObstacle(this.characterPos.row, newCol);
            }
            return false;
        };

        // Execute code
        const evalCode = new Function(
            'moverDerecha',
            'moverAbajo',
            'hayObstaculo',
            code
        );

        evalCode(moverDerecha, moverAbajo, hayObstaculo);
    }

    isObstacle(row, col) {
        const level = LEVELS[this.currentLevel];
        return level.obstacles.some(obs => obs.row === row && obs.col === col);
    }

    handleLevelComplete() {
        this.stopTimer();
        this.isLevelComplete = true;

        // Update progress
        if (this.currentLevel + 1 > this.gameState.unlockedLevels) {
            this.gameState.unlockedLevels = this.currentLevel + 2;
        }
        this.gameState.totalPuzzlesSolved++;
        this.saveProgress();

        // Show modal
        document.getElementById('levelCompleteText').textContent =
            `Completaste el nivel ${this.currentLevel + 1} en ${LEVELS[this.currentLevel].timeLimit - this.timeRemaining} segundos`;
        document.getElementById('levelCompleteModal').classList.add('active');
    }

    nextLevel() {
        document.getElementById('levelCompleteModal').classList.remove('active');
        this.currentLevel++;
        this.loadLevel(this.currentLevel);
    }

    retryLevel() {
        document.getElementById('timeUpModal').classList.remove('active');
        this.loadLevel(this.currentLevel);
    }

    resetLevel() {
        this.stopTimer();
        this.loadLevel(this.currentLevel);
    }

    showTimeUpModal() {
        this.isGameOver = true;
        document.getElementById('timeUpModal').classList.add('active');
    }

    showGameCompleteModal() {
        document.getElementById('gameCompleteText').textContent =
            `Resolviste ${this.gameState.totalPuzzlesSolved}/${LEVELS.length} puzzles de código`;
        document.getElementById('gameCompleteModal').classList.add('active');
    }

    restartGame() {
        document.getElementById('gameCompleteModal').classList.remove('active');
        this.currentLevel = 0;
        this.loadLevel(0);
    }

    showHint() {
        const level = LEVELS[this.currentLevel];
        if (this.hintsUsed >= level.hintCount) {
            alert('Ya no tienes más pistas disponibles para este nivel');
            return;
        }

        this.hintsUsed++;
        document.getElementById('hintText').textContent = level.hint;
        document.getElementById('hintModal').classList.add('active');
    }

    closeHint() {
        document.getElementById('hintModal').classList.remove('active');
    }
}

// Global game instance
let game = null;

// Initialize game on page load
document.addEventListener('DOMContentLoaded', () => {
    game = new CodeGame();

    // Event listener for code editor
    document.getElementById('codeEditor').addEventListener('input', () => {
        game.updateCodeProgress();
    });

    // Event listener for Enter key in code editor
    document.getElementById('codeEditor').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            game.executeCode();
        }
    });
});

// Global functions (called from HTML)
function startGame() {
    game.startGame();
}

function executeCode() {
    game.executeCode();
}

function resetLevel() {
    game.resetLevel();
}

function nextLevel() {
    game.nextLevel();
}

function retryLevel() {
    game.retryLevel();
}

function restartGame() {
    game.restartGame();
}

function showHint() {
    game.showHint();
}

function closeHint() {
    game.closeHint();
}

function saveProgress() {
    game.saveProgress();
    alert('Progreso guardado correctamente');
}
