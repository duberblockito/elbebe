// Planet Data and Trivia Questions
const planetData = {
    mercury: {
        name: "Mercurio",
        visual: "🪨",
        color: "linear-gradient(135deg, #b5b5b5 0%, #6b6b6b 100%)",
        distance: "58 millones de km del Sol",
        temperature: "-180°C a 430°C",
        rotation: "59 días terrestres",
        description: "Mercurio es el planeta más pequeño del sistema solar y el más cercano al Sol. Aunque está muy cerca del Sol, no es el planeta más caliente. ¡Su día dura 59 días terrestres!",
        badge: {
            icon: "🥇",
            name: "Explorador de Mercurio",
            description: "Has visitado el planeta más cercano al Sol"
        },
        trivia: [
            {
                question: "¿Cuánto dura un día en Mercurio?",
                options: ["24 horas", "59 días", "365 días"],
                correct: 1,
                explanation: "¡Correcto! Un día en Mercurio dura 59 días terrestres porque rota muy lentamente."
            },
            {
                question: "¿Mercurio es el planeta más...",
                options: ["Grande", "Caliente", "Pequeño"],
                correct: 2,
                explanation: "¡Exacto! Mercurio es el planeta más pequeño del sistema solar."
            },
            {
                question: "¿A qué distancia está Mercurio del Sol?",
                options: ["58 millones de km", "150 millones de km", "780 millones de km"],
                correct: 0,
                explanation: "¡Bien! Mercurio está a 58 millones de kilómetros del Sol."
            }
        ]
    },
    venus: {
        name: "Venus",
        visual: "🌟",
        color: "linear-gradient(135deg, #f5d76e 0%, #d4a017 100%)",
        distance: "108 millones de km del Sol",
        temperature: "465°C (el más caliente)",
        rotation: "243 días terrestres (retrograda)",
        description: "Venus es el planeta más caliente del sistema solar debido a su densa atmósfera de dióxido de carbono. ¡Rota en dirección opuesta a los demás planetas!",
        badge: {
            icon: "🥈",
            name: "Explorador de Venus",
            description: "Has descubierto el planeta más caliente"
        },
        trivia: [
            {
                question: "¿Venus es el planeta más...",
                options: ["Frío", "Grande", "Caliente"],
                correct: 2,
                explanation: "¡Correcto! Venus es el planeta más caliente del sistema solar con 465°C."
            },
            {
                question: "¿Por qué Venus es tan caliente?",
                options: ["Porque está cerca del Sol", "Por su atmósfera densa", "Porque rota rápido"],
                correct: 1,
                explanation: "¡Exacto! La densa atmósfera de dióxido de carbono atrapa el calor."
            },
            {
                question: "¿Venus rota en la misma dirección que los otros planetas?",
                options: ["Sí", "No", "A veces"],
                correct: 1,
                explanation: "¡Bien! Venus rota en dirección opuesta (retrograda) a los otros planetas."
            }
        ]
    },
    earth: {
        name: "Tierra",
        visual: "🌍",
        color: "linear-gradient(135deg, #2ecc71 0%, #3498db 100%)",
        distance: "150 millones de km del Sol",
        temperature: "-89°C a 57°C",
        rotation: "24 horas",
        description: "La Tierra es nuestro hogar y el único planeta conocido con vida. Tiene agua líquida en su superficie y una atmósfera que nos protege.",
        badge: {
            icon: "🌎",
            name: "Explorador de la Tierra",
            description: "Has visitado tu hogar planetario"
        },
        trivia: [
            {
                question: "¿La Tierra es el único planeta con...",
                options: ["Agua", "Atmósfera", "Vida conocida"],
                correct: 2,
                explanation: "¡Correcto! La Tierra es el único planeta con vida conocida hasta ahora."
            },
            {
                question: "¿Cuánto dura un día en la Tierra?",
                options: ["12 horas", "24 horas", "48 horas"],
                correct: 1,
                explanation: "¡Exacto! Un día en la Tierra dura 24 horas."
            },
            {
                question: "¿Qué cubre el 71% de la Tierra?",
                options: ["Tierra firme", "Agua", "Hielo"],
                correct: 1,
                explanation: "¡Bien! El 71% de la superficie de la Tierra está cubierta por agua."
            }
        ]
    },
    mars: {
        name: "Marte",
        visual: "🔴",
        color: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
        distance: "228 millones de km del Sol",
        temperature: "-60°C (promedio)",
        rotation: "24.6 horas",
        description: "Marte es conocido como el 'Planeta Rojo' debido al óxido de hierro en su superficie. ¡Tiene el volcán más grande del sistema solar, el Monte Olimpo!",
        badge: {
            icon: "🔴",
            name: "Explorador de Marte",
            description: "Has caminado por el Planeta Rojo"
        },
        trivia: [
            {
                question: "¿Por qué Marte es rojo?",
                options: ["Por el calor", "Por óxido de hierro", "Por el agua"],
                correct: 1,
                explanation: "¡Correcto! El óxido de hierro en la superficie da a Marte su color rojo."
            },
            {
                question: "¿Marte tiene un día de 24.6 horas?",
                options: ["Sí", "No", "A veces"],
                correct: 0,
                explanation: "¡Exacto! Un día en Marte dura 24.6 horas, muy similar a la Tierra."
            },
            {
                question: "¿Qué tiene el volcán más grande del sistema solar?",
                options: ["La Tierra", "Júpiter", "Marte"],
                correct: 2,
                explanation: "¡Bien! El Monte Olimpo en Marte es el volcán más grande del sistema solar."
            }
        ]
    },
    jupiter: {
        name: "Júpiter",
        visual: "🪐",
        color: "linear-gradient(135deg, #e67e22 0%, #d35400 100%)",
        distance: "778 millones de km del Sol",
        temperature: "-145°C",
        rotation: "10 horas",
        description: "Júpiter es el planeta más grande del sistema solar. ¡Podrían caber 1,300 Tierras dentro de él! Tiene una Gran Mancha Roja que es una tormenta gigante.",
        badge: {
            icon: "🪐",
            name: "Explorador de Júpiter",
            description: "Has visitado el gigante gaseoso más grande"
        },
        trivia: [
            {
                question: "¿Júpiter es el planeta más...",
                options: ["Pequeño", "Grande", "Caliente"],
                correct: 1,
                explanation: "¡Correcto! Júpiter es el planeta más grande del sistema solar."
            },
            {
                question: "¿Cuántas Tierras caben dentro de Júpiter?",
                options: ["100", "500", "1,300"],
                correct: 2,
                explanation: "¡Exacto! Podrían caber 1,300 Tierras dentro de Júpiter."
            },
            {
                question: "¿Qué es la Gran Mancha Roja de Júpiter?",
                options: ["Un lago", "Una tormenta gigante", "Un cráter"],
                correct: 1,
                explanation: "¡Bien! La Gran Mancha Roja es una tormenta gigante que ha durado cientos de años."
            }
        ]
    },
    saturn: {
        name: "Saturno",
        visual: "💫",
        color: "linear-gradient(135deg, #f39c12 0%, #d68910 100%)",
        distance: "1.4 billones de km del Sol",
        temperature: "-178°C",
        rotation: "10.7 horas",
        description: "Saturno es famoso por sus impresionantes anillos de hielo y roca. ¡Es el segundo planeta más grande del sistema solar y podría flotar en el agua!",
        badge: {
            icon: "💫",
            name: "Explorador de Saturno",
            description: "Has admirado los anillos de Saturno"
        },
        trivia: [
            {
                question: "¿De qué están hechos los anillos de Saturno?",
                options: ["Solo roca", "Hielo y roca", "Sólido metálico"],
                correct: 1,
                explanation: "¡Correcto! Los anillos de Saturno están hechos de hielo y roca."
            },
            {
                question: "¿Saturno es el ___ planeta más grande?",
                options: ["Primero", "Segundo", "Tercero"],
                correct: 1,
                explanation: "¡Exacto! Saturno es el segundo planeta más grande después de Júpiter."
            },
            {
                question: "¿Saturno podría flotar en agua?",
                options: ["Sí", "No", "Depende"],
                correct: 0,
                explanation: "¡Bien! Saturno es menos denso que el agua, así que podría flotar en ella."
            }
        ]
    },
    uranus: {
        name: "Urano",
        visual: "🔵",
        color: "linear-gradient(135deg, #5dade2 0%, #2e86c1 100%)",
        distance: "2.9 billones de km del Sol",
        temperature: "-224°C",
        rotation: "17 horas",
        description: "Urano es un gigante de hielo con un color azul brillante. ¡Rota de lado! Es decir, su eje está inclinado casi 90 grados, como si estuviera rodando.",
        badge: {
            icon: "🔵",
            name: "Explorador de Urano",
            description: "Has visitado el gigante azul de hielo"
        },
        trivia: [
            {
                question: "¿Urano rota normalmente?",
                options: ["Sí", "No, de lado", "No, al revés"],
                correct: 1,
                explanation: "¡Correcto! Urano rota de lado, con su eje inclinado casi 90 grados."
            },
            {
                question: "¿Qué tipo de planeta es Urano?",
                options: ["Gigante rocoso", "Gigante de hielo", "Planeta enano"],
                correct: 1,
                explanation: "¡Exacto! Urano es un gigante de hielo compuesto de agua, amoníaco y metano."
            },
            {
                question: "¿Urano es el planeta más...",
                options: ["Cercano al Sol", "Frío", "Lento"],
                correct: 1,
                explanation: "¡Bien! Urano tiene una temperatura de -224°C, uno de los planetas más fríos."
            }
        ]
    },
    neptune: {
        name: "Neptuno",
        visual: "🌊",
        color: "linear-gradient(135deg, #3498db 0%, #2874a6 100%)",
        distance: "4.5 billones de km del Sol",
        temperature: "-214°C",
        rotation: "16 horas",
        description: "Neptuno es el planeta más lejano del Sol. Tiene vientos supersónicos de hasta 2,100 km/h, los más fuertes del sistema solar. ¡Su color azul intenso es debido al metano!",
        badge: {
            icon: "🌊",
            name: "Explorador de Neptuno",
            description: "Has llegado al planeta más lejano"
        },
        trivia: [
            {
                question: "¿Neptuno es el planeta más...",
                options: ["Grande", "Lejano", "Caliente"],
                correct: 1,
                explanation: "¡Correcto! Neptuno es el planeta más lejano del Sol."
            },
            {
                question: "¿Qué tiene Neptuno que es el más fuerte del sistema solar?",
                options: ["Gravedad", "Vientos", "Anillos"],
                correct: 1,
                explanation: "¡Exacto! Neptuno tiene los vientos más fuertes, hasta 2,100 km/h."
            },
            {
                question: "¿Por qué Neptuno es azul?",
                options: ["Por el agua", "Por el metano", "Por el oxígeno"],
                correct: 1,
                explanation: "¡Bien! El metano en la atmósfera de Neptuno absorbe luz roja y refleja luz azul."
            }
        ]
    }
};

// Game State
let currentPlanet = null;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let visitedPlanets = [];
let earnedBadges = [];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const mapScreen = document.getElementById('map-screen');
const planetInfoScreen = document.getElementById('planet-info-screen');
const triviaScreen = document.getElementById('trivia-screen');
const badgeModal = document.getElementById('badge-modal');
const planetCompleteModal = document.getElementById('planet-complete-modal');
const passportModal = document.getElementById('passport-modal');

// Initialize Game
function init() {
    loadProgress();
    updatePassportDisplay();
    setupEventListeners();
    playBackgroundMusic();
}

// Load Progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('tour-sistema-solar-progress');
    if (saved) {
        const data = JSON.parse(saved);
        visitedPlanets = data.visitedPlanets || [];
        earnedBadges = data.earnedBadges || [];
    }
}

// Save Progress to localStorage
function saveProgress() {
    const data = {
        visitedPlanets,
        earnedBadges
    };
    localStorage.setItem('tour-sistema-solar-progress', JSON.stringify(data));
}

// Update Passport Display
function updatePassportDisplay() {
    document.getElementById('badges-count').textContent = earnedBadges.length;
}

// Setup Event Listeners
function setupEventListeners() {
    // Start Button
    document.getElementById('start-btn').addEventListener('click', () => {
        playSound('click');
        showScreen(mapScreen);
    });

    // Back to Home
    document.getElementById('back-to-home').addEventListener('click', () => {
        playSound('click');
        showScreen(startScreen);
    });

    // Back to Map
    document.getElementById('back-to-map').addEventListener('click', () => {
        playSound('click');
        showScreen(mapScreen);
    });

    // Planet Buttons
    document.querySelectorAll('.planet').forEach(planet => {
        planet.addEventListener('click', (e) => {
            playSound('click');
            const planetId = e.currentTarget.dataset.planet;
            showPlanetInfo(planetId);
        });
    });

    // Start Trivia Button
    document.getElementById('start-trivia-btn').addEventListener('click', () => {
        playSound('click');
        startTrivia();
    });

    // Trivia Option Buttons
    document.getElementById('trivia-options').addEventListener('click', (e) => {
        if (e.target.classList.contains('option-btn')) {
            const selectedOption = parseInt(e.target.dataset.option);
            checkAnswer(selectedOption);
        }
    });

    // Next Question Button
    document.getElementById('next-question-btn').addEventListener('click', () => {
        playSound('click');
        nextQuestion();
    });

    // Close Badge Modal
    document.getElementById('close-badge-modal').addEventListener('click', () => {
        playSound('click');
        hideModal(badgeModal);
    });

    // Explore More Button
    document.getElementById('explore-more-btn').addEventListener('click', () => {
        playSound('click');
        hideModal(planetCompleteModal);
        showScreen(mapScreen);
    });

    // Go to Passport Button
    document.getElementById('go-to-passport-btn').addEventListener('click', () => {
        playSound('click');
        showPassportModal();
    });

    // Close Passport Modal
    document.getElementById('close-passport-modal').addEventListener('click', () => {
        playSound('click');
        hideModal(passportModal);
    });
}

// Show Screen
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// Show Planet Info
function showPlanetInfo(planetId) {
    currentPlanet = planetData[planetId];
    currentQuestionIndex = 0;
    correctAnswers = 0;

    // Update planet visual
    document.getElementById('planet-visual').textContent = currentPlanet.visual;
    document.getElementById('planet-visual').style.background = currentPlanet.color;

    // Update planet info
    document.getElementById('planet-title').textContent = currentPlanet.name;
    document.getElementById('fact-distance').textContent = currentPlanet.distance;
    document.getElementById('fact-temperature').textContent = currentPlanet.temperature;
    document.getElementById('fact-rotation').textContent = currentPlanet.rotation;
    document.getElementById('planet-description').textContent = currentPlanet.description;

    showScreen(planetInfoScreen);
}

// Start Trivia
function startTrivia() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    showQuestion();
    showScreen(triviaScreen);
    updateProgressBar();
}

// Show Question
function showQuestion() {
    const question = currentPlanet.trivia[currentQuestionIndex];
    document.getElementById('trivia-question').textContent = question.question;
    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('trivia-progress').style.width = 
        ((currentQuestionIndex + 1) / currentPlanet.trivia.length * 100) + '%';

    // Clear previous feedback
    document.getElementById('trivia-feedback').classList.add('hidden');

    // Update options
    const optionsContainer = document.getElementById('trivia-options');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.dataset.option = index;
        optionsContainer.appendChild(button);
    });
}

// Check Answer
function checkAnswer(selectedOption) {
    const question = currentPlanet.trivia[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    const feedback = document.getElementById('trivia-feedback');
    const feedbackMessage = document.getElementById('feedback-message');

    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    if (selectedOption === question.correct) {
        correctAnswers++;
        buttons[question.correct].classList.add('correct');
        playSound('correct');
        feedback.className = 'feedback correct';
        feedbackMessage.textContent = "✅ ¡Correcto! " + question.explanation;
    } else {
        buttons[selectedOption].classList.add('wrong');
        buttons[question.correct].classList.add('correct');
        playSound('wrong');
        feedback.className = 'feedback wrong';
        feedbackMessage.textContent = "❌ Incorrecto. " + question.explanation;
    }

    feedback.classList.remove('hidden');
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= currentPlanet.trivia.length) {
        // Trivia completed
        completePlanet();
    } else {
        showQuestion();
    }
}

// Complete Planet
function completePlanet() {
    // Add to visited planets
    if (!visitedPlanets.includes(currentPlanet.name)) {
        visitedPlanets.push(currentPlanet.name);
    }

    // Add badge if earned (at least 2 out of 3 correct)
    if (correctAnswers >= 2) {
        if (!earnedBadges.includes(currentPlanet.name)) {
            earnedBadges.push(currentPlanet.name);
            saveProgress();
            updatePassportDisplay();
            showBadgeModal(currentPlanet.badge);
            return;
        }
    }

    saveProgress();
    showPlanetCompleteModal();
}

// Show Badge Modal
function showBadgeModal(badge) {
    document.getElementById('badge-icon').textContent = badge.icon;
    document.getElementById('badge-name').textContent = badge.name;
    document.getElementById('badge-description').textContent = badge.description;
    
    showModal(badgeModal);
    playSound('badge');
}

// Show Planet Complete Modal
function showPlanetCompleteModal() {
    document.getElementById('completed-planet-name').textContent = currentPlanet.name;
    document.getElementById('badges-total').textContent = earnedBadges.length;
    
    showModal(planetCompleteModal);
}

// Show Passport Modal
function showPassportModal() {
    const badgesGrid = document.getElementById('badges-grid');
    badgesGrid.innerHTML = '';

    Object.keys(planetData).forEach(planetId => {
        const planet = planetData[planetId];
        const hasBadge = earnedBadges.includes(planet.name);
        
        const badgeItem = document.createElement('div');
        badgeItem.className = 'badge-item' + (hasBadge ? '' : ' locked');
        badgeItem.innerHTML = `
            <div class="badge-item-icon">${hasBadge ? planet.badge.icon : '🔒'}</div>
            <div class="badge-item-name">${planet.name}</div>
        `;
        
        badgesGrid.appendChild(badgeItem);
    });

    showModal(passportModal);
}

// Update Progress Bar
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / currentPlanet.trivia.length) * 100;
    document.getElementById('trivia-progress').style.width = progress + '%';
}

// Show Modal
function showModal(modal) {
    modal.classList.remove('hidden');
}

// Hide Modal
function hideModal(modal) {
    modal.classList.add('hidden');
}

// Play Sound
function playSound(type) {
    const sounds = {
        click: document.getElementById('click-sound'),
        correct: document.getElementById('correct-sound'),
        wrong: document.getElementById('wrong-sound'),
        badge: document.getElementById('badge-sound')
    };

    if (sounds[type]) {
        sounds[type].currentTime = 0;
        sounds[type].play().catch(() => {
            // Ignore errors (audio might not be ready)
        });
    }
}

// Play Background Music
function playBackgroundMusic() {
    const bgMusic = document.getElementById('bg-music');
    bgMusic.volume = 0.3;
    bgMusic.play().catch(() => {
        // Ignore errors (user might need to interact first)
    });

    // Play music after first user interaction
    document.body.addEventListener('click', () => {
        bgMusic.play().catch(() => {});
    }, { once: true });
}

// Initialize on load
window.addEventListener('DOMContentLoaded', init);
