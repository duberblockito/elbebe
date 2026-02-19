// Game Configuration
const CONFIG = {
    STORAGE_KEY: 'viste-clima-progress',
    TOTAL_DAYS: 5,
};

// Level Configuration
const DAYS = [
    { weather: 'sun', name: '☀️ Sol', correct: 'light', time: 60, items: 5 },
    { weather: 'rain', name: '🌧️ Lluvia', correct: 'rain', time: 55, items: 6 },
    { weather: 'snow', name: '❄️ Nieve', correct: 'snow', time: 50, items: 7 },
    { weather: 'sun', name: '☀️ Sol', correct: 'light', time: 45, items: 8 },
    { weather: 'rain', name: '🌧️ Lluvia', correct: 'rain', time: 40, items: 10 }
];

// Clothing Items
const CLOTHING_ITEMS = {
    light: [
        { id: 'tshirt', name: 'Camiseta', icon: '👕' },
        { id: 'shorts', name: 'Shorts', icon: '🩳' },
        { id: 'sandals', name: 'Sandalias', icon: '🩴' },
        { id: 'hat', name: 'Sombrero', icon: '👒' },
        { id: 'sunglasses', name: 'Gafas de Sol', icon: '🕶️' },
        { id: 'dress', name: 'Vestido', icon: '👗' }
    ],
    rain: [
        { id: 'raincoat', name: 'Impermeable', icon: '🧥' },
        { id: 'umbrella', name: 'Paraguas', icon: '☂️' },
        { id: 'rainboots', name: 'Botas de Lluvia', icon: '👢' },
        { id: 'hoodie', name: 'Suéter con Gorra', icon: '🧥' },
        { id: 'pants', name: 'Pantalón', icon: '👖' },
        { id: 'sneakers', name: 'Zapatos', icon: '👟' }
    ],
    snow: [
        { id: 'coat', name: 'Abrigo', icon: '🧥' },
        { id: 'scarf', name: 'Bufanda', icon: '🧣' },
        { id: 'hat', name: 'Gorro', icon: '🧢' },
        { id: 'gloves', name: 'Guantes', icon: '🧤' },
        { id: 'boots', name: 'Botas de Nieve', icon: '👢' },
        { id: 'sweater', name: 'Suéter', icon: '🧥' }
    ]
};

// Game State
let gameState = {
    currentDay: 1,
    score: 0,
    totalScore: 0,
    timeLeft: 0,
    timerInterval: null,
    currentWeather: null,
    dayCompleted: 0
};

// DOM Elements
const elements = {
    level: document.getElementById('level'),
    score: document.getElementById('score'),
    target: document.getElementById('target'),
    progressBar: document.getElementById('progress-bar'),
    progressText: document.getElementById('progress-text'),
    timerBar: document.getElementById('timer-bar'),
    timerText: document.getElementById('timer-text'),
    sun: document.getElementById('sun'),
    rain: document.getElementById('rain'),
    snow: document.getElementById('snow'),
    weatherLabel: document.getElementById('weather-label'),
    characterShirt: document.getElementById('character-shirt'),
    characterPants: document.getElementById('character-pants'),
    clothingItems: document.getElementById('clothing-items'),
    modalInstructions: document.getElementById('modal-instructions'),
    modalDayComplete: document.getElementById('modal-day-complete'),
    modalTimeUp: document.getElementById('modal-time-up'),
    modalGameComplete: document.getElementById('modal-game-complete'),
    finalScore: document.getElementById('final-score'),
    totalScore: document.getElementById('total-score'),
    weatherFeedback: document.getElementById('weather-feedback'),
    btnStart: document.getElementById('btn-start'),
    btnNextLevel: document.getElementById('btn-next-level'),
    btnRetryLevel: document.getElementById('btn-retry-level'),
    btnPlayAgain: document.getElementById('btn-play-again')
};

// Initialize Game
function init() {
    loadProgress();
    setupEventListeners();
    showInstructions();
}

// Load Progress from LocalStorage
function loadProgress() {
    const savedProgress = localStorage.getItem(CONFIG.STORAGE_KEY);
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        gameState.currentDay = progress.currentDay || 1;
        gameState.totalScore = progress.totalScore || 0;
    }
}

// Save Progress to LocalStorage
function saveProgress() {
    const progress = {
        currentDay: gameState.currentDay,
        totalScore: gameState.totalScore
    };
    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(progress));
}

// Setup Event Listeners
function setupEventListeners() {
    elements.btnStart.addEventListener('click', () => {
        hideModal(elements.modalInstructions);
        startDay(gameState.currentDay);
    });

    elements.btnNextLevel.addEventListener('click', () => {
        hideModal(elements.modalDayComplete);
        gameState.currentDay++;
        if (gameState.currentDay > CONFIG.TOTAL_DAYS) {
            showGameComplete();
        } else {
            saveProgress();
            startDay(gameState.currentDay);
        }
    });

    elements.btnRetryLevel.addEventListener('click', () => {
        hideModal(elements.modalTimeUp);
        startDay(gameState.currentDay);
    });

    elements.btnPlayAgain.addEventListener('click', () => {
        hideModal(elements.modalGameComplete);
        gameState.currentDay = 1;
        gameState.totalScore = 0;
        saveProgress();
        startDay(1);
    });
}

// Show Instructions
function showInstructions() {
    showModal(elements.modalInstructions);
}

// Start Day
function startDay(day) {
    const dayConfig = DAYS[day - 1];

    gameState.score = 0;
    gameState.timeLeft = dayConfig.time;
    gameState.currentWeather = dayConfig.weather;

    // Clear weather effects
    clearWeatherEffects();

    // Set weather scene
    setWeatherScene(dayConfig.weather, dayConfig.name);

    // Reset character
    resetCharacter();

    // Update HUD
    elements.level.textContent = day;
    elements.target.textContent = dayConfig.items;
    updateHUD();

    // Generate clothing items
    generateClothingItems(dayConfig.weather, dayConfig.items);

    // Start timer
    startTimer(dayConfig.time);
}

// Set Weather Scene
function setWeatherScene(weather, name) {
    elements.weatherLabel.textContent = name;

    switch(weather) {
        case 'sun':
            elements.sun.style.display = 'block';
            createSun();
            break;
        case 'rain':
            elements.rain.style.display = 'block';
            createRain();
            break;
        case 'snow':
            elements.snow.style.display = 'block';
            createSnow();
            break;
    }
}

// Clear Weather Effects
function clearWeatherEffects() {
    elements.sun.style.display = 'none';
    elements.rain.style.display = 'none';
    elements.snow.style.display = 'none';
    elements.rain.innerHTML = '';
    elements.snow.innerHTML = '';
}

// Create Sun
function createSun() {
    // Sun is already styled in CSS
}

// Create Rain
function createRain() {
    for (let i = 0; i < 20; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        raindrop.style.left = Math.random() * 100 + '%';
        raindrop.style.animationDelay = Math.random() * 2 + 's';
        elements.rain.appendChild(raindrop);
    }
}

// Create Snow
function createSnow() {
    for (let i = 0; i < 15; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDelay = Math.random() * 3 + 's';
        elements.snow.appendChild(snowflake);
    }
}

// Reset Character
function resetCharacter() {
    elements.characterShirt.style.background = '#87CEEB';
    elements.characterPants.style.background = '#4169E1';
}

// Generate Clothing Items
function generateClothingItems(weather, count) {
    const correctCategory = DAYS[gameState.currentDay - 1].correct;
    const allItems = [];

    // Get all items from all categories
    Object.keys(CLOTHING_ITEMS).forEach(category => {
        CLOTHING_ITEMS[category].forEach(item => {
            allItems.push({
                ...item,
                category: category,
                isCorrect: category === correctCategory
            });
        });
    });

    // Shuffle items
    shuffleArray(allItems);

    // Take only the required number of items
    const itemsToShow = allItems.slice(0, Math.max(count, 8));

    // Clear existing items
    elements.clothingItems.innerHTML = '';

    // Create item elements
    itemsToShow.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'clothing-item';
        itemElement.innerHTML = `${item.icon}<br>${item.name}`;
        itemElement.dataset.category = item.category;
        itemElement.dataset.isCorrect = item.isCorrect;

        itemElement.addEventListener('click', () => {
            selectClothing(itemElement, item);
        });

        itemElement.addEventListener('touchstart', (e) => {
            e.preventDefault();
            selectClothing(itemElement, item);
        });

        elements.clothingItems.appendChild(itemElement);
    });
}

// Select Clothing
function selectClothing(itemElement, item) {
    if (item.isCorrect) {
        // Correct selection
        itemElement.classList.add('correct');
        
        // Update character
        updateCharacter(item.category);
        
        // Update score
        gameState.score++;
        gameState.totalScore++;
        updateHUD();

        // Disable clicked item
        itemElement.style.pointerEvents = 'none';

        // Check if day complete
        const dayConfig = DAYS[gameState.currentDay - 1];
        if (gameState.score >= dayConfig.items) {
            clearInterval(gameState.timerInterval);
            showDayComplete();
        }
    } else {
        // Incorrect selection
        itemElement.classList.add('incorrect');
        
        // Shake animation
        itemElement.style.animation = 'none';
        itemElement.offsetHeight; // Trigger reflow
        itemElement.style.animation = 'shake 0.5s';

        // Remove incorrect class after animation
        setTimeout(() => {
            itemElement.classList.remove('incorrect');
        }, 1000);
    }
}

// Update Character
function updateCharacter(category) {
    switch(category) {
        case 'light':
            elements.characterShirt.style.background = '#FFD700';
            elements.characterPants.style.background = '#FF6347';
            break;
        case 'rain':
            elements.characterShirt.style.background = '#4169E1';
            elements.characterPants.style.background = '#2F4F4F';
            break;
        case 'snow':
            elements.characterShirt.style.background = '#DC143C';
            elements.characterPants.style.background = '#00008B';
            break;
    }
}

// Start Timer
function startTimer(time) {
    clearInterval(gameState.timerInterval);

    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;

        updateTimerBar(time);

        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            showTimeUp();
        }
    }, 1000);
}

// Update Timer Bar
function updateTimerBar(totalTime) {
    const percentage = (gameState.timeLeft / totalTime) * 100;
    elements.timerBar.style.width = percentage + '%';
    elements.timerText.textContent = gameState.timeLeft + 's';

    // Update color based on time remaining
    elements.timerBar.classList.remove('warning', 'critical');
    if (percentage < 25) {
        elements.timerBar.classList.add('critical');
    } else if (percentage < 50) {
        elements.timerBar.classList.add('warning');
    }
}

// Update HUD
function updateHUD() {
    elements.score.textContent = gameState.score;
    elements.finalScore.textContent = gameState.score;
    elements.totalScore.textContent = gameState.totalScore;

    const dayConfig = DAYS[gameState.currentDay - 1];
    const percentage = (gameState.score / dayConfig.items) * 100;

    elements.progressBar.style.width = percentage + '%';
    elements.progressText.textContent = `${gameState.score} / ${dayConfig.items}`;
}

// Shuffle Array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Show Day Complete Modal
function showDayComplete() {
    showModal(elements.modalDayComplete);
    saveProgress();

    // Set weather feedback
    const dayConfig = DAYS[gameState.currentDay - 1];
    const feedback = getWeatherFeedback(dayConfig.weather);
    elements.weatherFeedback.textContent = feedback;
}

// Get Weather Feedback
function getWeatherFeedback(weather) {
    switch(weather) {
        case 'sun':
            return '¡Perfecto! Usaste ropa fresca para el sol. ☀️';
        case 'rain':
            return '¡Excelente! Te protegiste bien de la lluvia. 🌧️';
        case 'snow':
            return '¡Fantástico! Estás bien abrigado para la nieve. ❄️';
    }
}

// Show Time Up Modal
function showTimeUp() {
    showModal(elements.modalTimeUp);
}

// Show Game Complete Modal
function showGameComplete() {
    showModal(elements.modalGameComplete);
    elements.totalScore.textContent = gameState.totalScore;
    saveProgress();
}

// Show Modal
function showModal(modal) {
    modal.classList.remove('hidden');
}

// Hide Modal
function hideModal(modal) {
    modal.classList.add('hidden');
}

// Add shake animation to CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(styleSheet);

// Start game when DOM is ready
document.addEventListener('DOMContentLoaded', init);
