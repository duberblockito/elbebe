// Caritas y Emociones - Game Logic

// Game State
let currentLevel = 1;
let currentQuestionIndex = 0;
let correctCount = 0;
let targetCount = 3;
let totalCorrect = 0;
let questions = [];
let currentQuestion = null;

// Game Configuration
const LEVELS_CONFIG = {
    1: { questions: 3, target: 3 },
    2: { questions: 3, target: 3 },
    3: { questions: 4, target: 4 },
    4: { questions: 4, target: 4 },
    5: { questions: 5, target: 5 }
};

// Story Database
const STORY_DATABASE = [
    // Level 1 - Simple, Happy/Sad
    {
        story: "Ana está jugando con su juguete favorito",
        question: "¿Cómo se siente Ana?",
        emotion: "happy",
        explanation: "¡Correcto! Ana está feliz porque está jugando."
    },
    {
        story: "Pedro perdió su balón en el parque",
        question: "¿Cómo se siente Pedro?",
        emotion: "sad",
        explanation: "Correcto, Pedro está triste porque perdió su balón."
    },
    {
        story: "María recibió un regalo de cumpleaños",
        question: "¿Cómo se siente María?",
        emotion: "happy",
        explanation: "¡Muy bien! María está feliz por su regalo."
    },
    {
        story: "Juan se cayó y se lastimó la rodilla",
        question: "¿Cómo se siente Juan?",
        emotion: "sad",
        explanation: "Sí, Juan está triste porque se lastimó."
    },
    {
        story: "Luisa ganó un premio en la escuela",
        question: "¿Cómo se siente Luisa?",
        emotion: "happy",
        explanation: "¡Exacto! Luisa está feliz por su premio."
    },

    // Level 2 - Adding Surprised
    {
        story: "Paco encontró un gatito escondido",
        question: "¿Cómo se siente Paco?",
        emotion: "surprised",
        explanation: "¡Correcto! Paco está sorprendido por el gatito."
    },
    {
        story: "Sofía no puede salir a jugar porque llueve",
        question: "¿Cómo se siente Sofía?",
        emotion: "sad",
        explanation: "Sí, Sofía está triste porque no puede jugar."
    },
    {
        story: "Diego está comiendo su helado favorito",
        question: "¿Cómo se siente Diego?",
        emotion: "happy",
        explanation: "¡Muy bien! Diego está feliz con su helado."
    },
    {
        story: "Elena vio una mariposa muy bonita",
        question: "¿Cómo se siente Elena?",
        emotion: "surprised",
        explanation: "¡Exacto! Elena está sorprendida por la mariposa."
    },
    {
        story: "Tomás está haciendo dibujos con crayones",
        question: "¿Cómo se siente Tomás?",
        emotion: "happy",
        explanation: "Correcto, Tomás está feliz haciendo dibujos."
    },

    // Level 3 - Adding Angry
    {
        story: "Carlos no quiere compartir sus juguetes",
        question: "¿Cómo se siente Carlos?",
        emotion: "angry",
        explanation: "Correcto, Carlos está enojado porque no quiere compartir."
    },
    {
        story: "Marta recibió una carta de su abuela",
        question: "¿Cómo se siente Marta?",
        emotion: "happy",
        explanation: "¡Muy bien! Marta está feliz por la carta."
    },
    {
        story: "Fernando no quiere comer sus vegetales",
        question: "¿Cómo se siente Fernando?",
        emotion: "angry",
        explanation: "Sí, Fernando está enojado por los vegetales."
    },
    {
        story: "Isabel encontró una moneda en el suelo",
        question: "¿Cómo se siente Isabel?",
        emotion: "surprised",
        explanation: "¡Exacto! Isabel está sorprendida por la moneda."
    },
    {
        story: "Oscar rompió accidentalmente su juguete",
        question: "¿Cómo se siente Oscar?",
        emotion: "sad",
        explanation: "Correcto, Oscar está triste por romper su juguete."
    },
    {
        story: "Clara está bailando música divertida",
        question: "¿Cómo se siente Clara?",
        emotion: "happy",
        explanation: "¡Sí! Clara está feliz bailando."
    },

    // Level 4 - More Complex Scenarios
    {
        story: "Andrés no puede encontrar su mochila antes de ir a la escuela",
        question: "¿Cómo se siente Andrés?",
        emotion: "angry",
        explanation: "Correcto, Andrés está enojado porque no encuentra su mochila."
    },
    {
        story: "Valentina recibió una sorpresa en la escuela",
        question: "¿Cómo se siente Valentina?",
        emotion: "surprised",
        explanation: "¡Muy bien! Valentina está sorprendida por la sorpresa."
    },
    {
        story: "Ricardo está ayudando a su mamá en la cocina",
        question: "¿Cómo se siente Ricardo?",
        emotion: "happy",
        explanation: "¡Correcto! Ricardo está feliz ayudando."
    },
    {
        story: "Lucía se lastimó el dedo mientras jugaba",
        question: "¿Cómo se siente Lucía?",
        emotion: "sad",
        explanation: "Sí, Lucía está triste porque se lastimó."
    },
    {
        story: "Mateo no quiere ir a la cama temprano",
        question: "¿Cómo se siente Mateo?",
        emotion: "angry",
        explanation: "Exacto, Mateo está enojado por ir a la cama temprano."
    },
    {
        story: "Camila vio un arcoíris después de la lluvia",
        question: "¿Cómo se siente Camila?",
        emotion: "surprised",
        explanation: "¡Muy bien! Camila está sorprendida por el arcoíris."
    },
    {
        story: "Gabriel está montando su bicicleta",
        question: "¿Cómo se siente Gabriel?",
        emotion: "happy",
        explanation: "Correcto, Gabriel está feliz montando su bicicleta."
    },

    // Level 5 - Advanced Scenarios
    {
        story: "Daniela no puede encontrar su juguete favorito",
        question: "¿Cómo se siente Daniela?",
        emotion: "sad",
        explanation: "Sí, Daniela está triste porque no encuentra su juguete."
    },
    {
        story: "Nicolás recibió una medalla por ser buen estudiante",
        question: "¿Cómo se siente Nicolás?",
        emotion: "happy",
        explanation: "¡Muy bien! Nicolás está feliz por su medalla."
    },
    {
        story: "Sofía no quiere ir al dentista",
        question: "¿Cómo se siente Sofía?",
        emotion: "angry",
        explanation: "Correcto, Sofía está enojada por ir al dentista."
    },
    {
        story: "Martín vio una estrella fugaz",
        question: "¿Cómo se siente Martín?",
        emotion: "surprised",
        explanation: "¡Exacto! Martín está sorprendido por la estrella fugaz."
    },
    {
        story: "Carolina está construyendo una torre con bloques",
        question: "¿Cómo se siente Carolina?",
        emotion: "happy",
        explanation: "Sí, Carolina está feliz construyendo."
    },
    {
        story: "Esteban se lastimó mientras jugaba fútbol",
        question: "¿Cómo se siente Esteban?",
        emotion: "sad",
        explanation: "Correcto, Esteban está triste porque se lastimó."
    },
    {
        story: "Paulina encontró un tesoro escondido",
        question: "¿Cómo se siente Paulina?",
        emotion: "surprised",
        explanation: "¡Muy bien! Paulina está sorprendida por el tesoro."
    },
    {
        story: "Roberto no quiere compartir sus dulces",
        question: "¿Cómo se siente Roberto?",
        emotion: "angry",
        explanation: "Exacto, Roberto está enojado porque no quiere compartir."
    },
    {
        story: "Alejandra está celebrando su cumpleaños",
        question: "¿Cómo se siente Alejandra?",
        emotion: "happy",
        explanation: "Correcto, Alejandra está feliz en su cumpleaños."
    },
    {
        story: "Javier perdió su juego favorito",
        question: "¿Cómo se siente Javier?",
        emotion: "sad",
        explanation: "Sí, Javier está triste por perder su juego."
    }
];

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize Game
function startGame() {
    document.getElementById('start-screen').classList.remove('active');
    loadLevel(currentLevel);
}

// Load Level
function loadLevel(level) {
    const config = LEVELS_CONFIG[level];
    currentQuestionIndex = 0;
    correctCount = 0;
    targetCount = config.target;

    // Get random questions for this level
    const levelQuestions = getLevelQuestions(level, config.questions);
    questions = shuffleArray(levelQuestions);
    currentQuestion = questions[currentQuestionIndex];

    updateUI();
    showQuestion();
}

// Get questions for specific level
function getLevelQuestions(level, count) {
    const allQuestions = STORY_DATABASE;
    const shuffled = shuffleArray(allQuestions);
    return shuffled.slice(0, count);
}

// Update UI
function updateUI() {
    document.getElementById('current-level').textContent = currentLevel;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('target-count').textContent = targetCount;
    updateProgressBar();
}

// Update Progress Bar
function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const percentage = (correctCount / targetCount) * 100;
    progressFill.style.width = `${percentage}%`;
}

// Show Question
function showQuestion() {
    const storyText = document.getElementById('story-text');
    const questionText = document.getElementById('question-text');

    storyText.textContent = currentQuestion.story;
    questionText.textContent = currentQuestion.question;

    // Reset button states
    const buttons = document.querySelectorAll('.emotion-btn');
    buttons.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'wrong');
    });
}

// Select Emotion
function selectEmotion(emotion) {
    const selectedBtn = document.querySelector(`[data-emotion="${emotion}"]`);
    selectedBtn.classList.add('selected');

    const isCorrect = emotion === currentQuestion.emotion;

    if (isCorrect) {
        handleCorrect(selectedBtn);
    } else {
        handleWrong(selectedBtn, emotion);
    }
}

// Handle Correct Answer
function handleCorrect(btn) {
    btn.classList.add('correct');
    correctCount++;
    totalCorrect++;
    updateUI();

    showFeedback(true, currentQuestion.explanation);

    setTimeout(() => {
        nextQuestion();
    }, 1500);
}

// Handle Wrong Answer
function handleWrong(btn, selectedEmotion) {
    btn.classList.add('wrong');

    // Highlight correct answer
    const correctBtn = document.querySelector(`[data-emotion="${currentQuestion.emotion}"]`);
    correctBtn.classList.add('correct');

    const emotionNames = {
        happy: 'feliz',
        sad: 'triste',
        angry: 'enojado',
        surprised: 'sorprendido'
    };

    const explanation = `No exacto. La respuesta correcta es "${emotionNames[currentQuestion.emotion]}". ${currentQuestion.explanation}`;
    showFeedback(false, explanation);

    setTimeout(() => {
        nextQuestion();
    }, 2000);
}

// Show Feedback Modal
function showFeedback(isCorrect, explanation) {
    const modal = document.getElementById('feedback-modal');
    const icon = document.getElementById('feedback-icon');
    const title = document.getElementById('feedback-title');
    const text = document.getElementById('feedback-text');

    icon.textContent = isCorrect ? '✅' : '❌';
    title.textContent = isCorrect ? '¡Correcto!' : '¡Ups!';
    title.className = 'feedback-title ' + (isCorrect ? 'correct' : 'wrong');
    text.textContent = explanation;

    modal.classList.add('active');
}

// Close Feedback
function closeFeedback() {
    document.getElementById('feedback-modal').classList.remove('active');
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        // Level complete
        if (correctCount >= targetCount) {
            showLevelComplete();
        } else {
            // Retry level (not enough correct answers)
            showLevelRetry();
        }
    } else {
        currentQuestion = questions[currentQuestionIndex];
        showQuestion();
    }
}

// Show Level Complete
function showLevelComplete() {
    const modal = document.getElementById('level-complete');
    const text = document.getElementById('level-complete-text');

    if (currentLevel < 5) {
        text.textContent = `Completaste el nivel ${currentLevel} con ${correctCount} respuestas correctas.`;
    } else {
        // Game complete
        showGameComplete();
        return;
    }

    modal.classList.add('active');
}

// Show Level Retry (not implemented in this version, just goes to next level)
function showLevelRetry() {
    // For this game, we'll just continue to next level even if not all correct
    if (currentLevel < 5) {
        showLevelComplete();
    } else {
        showGameComplete();
    }
}

// Next Level
function nextLevel() {
    document.getElementById('level-complete').classList.remove('active');
    currentLevel++;
    loadLevel(currentLevel);
}

// Show Game Complete
function showGameComplete() {
    const modal = document.getElementById('game-complete');
    const finalScore = document.getElementById('final-score');

    finalScore.textContent = totalCorrect;
    modal.classList.add('active');
}

// Restart Game
function restartGame() {
    document.getElementById('game-complete').classList.remove('active');
    currentLevel = 1;
    currentQuestionIndex = 0;
    correctCount = 0;
    totalCorrect = 0;
    loadLevel(currentLevel);
}

// Initialize on load
window.onload = function() {
    // Show start screen
    document.getElementById('start-screen').classList.add('active');
};
