// Chef de Monstruos - Game Logic
// Age Group: 3-5 years
// Version: 1.1.0 (FIXED: Mobile drag + Help system)

// ===============================
// CONFIGURACIÓN DE NIVELES
// ===============================
const LEVELS = [
  {
    id: 1,
    monsters: 1,
    ingredientsRequired: 3,
    timeLimit: 40,
    ingredientsPool: ['cheese', 'pepperoni', 'olives'],
    difficulty: 'easy'
  },
  {
    id: 2,
    monsters: 2,
    ingredientsRequired: 4,
    timeLimit: 50,
    ingredientsPool: ['cheese', 'pepperoni', 'olives', 'mushrooms'],
    difficulty: 'easy'
  },
  {
    id: 3,
    monsters: 3,
    ingredientsRequired: 5,
    timeLimit: 60,
    ingredientsPool: ['cheese', 'pepperoni', 'olives', 'mushrooms', 'onions'],
    difficulty: 'medium'
  },
  {
    id: 4,
    monsters: 3,
    ingredientsRequired: 6,
    timeLimit: 70,
    ingredientsPool: ['cheese', 'pepperoni', 'olives', 'mushrooms', 'onions', 'tomatoes'],
    difficulty: 'medium'
  },
  {
    id: 5,
    monsters: 4,
    ingredientsRequired: 7,
    timeLimit: 80,
    ingredientsPool: ['cheese', 'pepperoni', 'olives', 'mushrooms', 'onions', 'tomatoes', 'peppers'],
    difficulty: 'hard'
  }
];

// ===============================
// CONFIGURACIÓN DE IDIOMA
// ===============================
const LANGUAGES = {
  es: {
    helpTitle: '¿Cómo Jugar?',
    helpContent: `
      <strong>Objetivo:</strong> Alimentar a los monstruos con los ingredientes que piden<br><br>
      <strong>Paso 1:</strong> Toca un ingrediente de la bandeja de ingredientes<br>
      <strong>Paso 2:</strong> Arrástralo hacia el monstruo que lo quiere<br>
      <strong>Paso 3:</strong> ¡El monstruo se comerá y ganarás puntos!<br><br>
      <strong>Consejo:</strong> ¡Completa todos los pedidos antes de que se acabe el tiempo!
    `,
    level: 'Nivel',
    time: 'Tiempo',
    orders: 'Pedidos',
    complete: '¡Completado!',
    timeUp: '¡Se Acabó el Tiempo!',
    gameComplete: '¡Juego Completado!',
    nextLevel: 'Siguiente Nivel →',
    retry: 'Intentar de Nuevo',
    backToMenu: 'Volver al Menú',
    playAgain: 'Jugar de Nuevo',
    ordersCompleted: 'Pedidos completados',
    monstersFed: 'Monstruos alimentados',
    totalOrders: 'Pedidos totales',
    youAre: '¡Eres un Chef de Monstruos experto!'
  },
  en: {
    helpTitle: 'How to Play?',
    helpContent: `
      <strong>Goal:</strong> Feed the monsters with the ingredients they want<br><br>
      <strong>Step 1:</strong> Tap an ingredient from the ingredients tray<br>
      <strong>Step 2:</strong> Drag it to the monster that wants it<br>
      <strong>Step 3:</strong> The monster will eat it and you'll get points!<br><br>
      <strong>Tip:</strong> Complete all orders before time runs out!
    `,
    level: 'Level',
    time: 'Time',
    orders: 'Orders',
    complete: 'Complete!',
    timeUp: 'Time\'s Up!',
    gameComplete: 'Game Complete!',
    nextLevel: 'Next Level →',
    retry: 'Try Again',
    backToMenu: 'Back to Menu',
    playAgain: 'Play Again',
    ordersCompleted: 'Orders completed',
    monstersFed: 'Monsters fed',
    totalOrders: 'Total orders',
    youAre: 'You are an expert Monster Chef!'
  }
};

let currentLanguage = 'es'; // Default language

// ===============================
// DEFINICIÓN DE INGREDIENTES
// ===============================
const INGREDIENTS = {
  cheese: {
    id: 'cheese',
    name: 'Queso',
    nameEn: 'Cheese',
    emoji: '🧀',
    color: '#FFD700'
  },
  pepperoni: {
    id: 'pepperoni',
    name: 'Pepperoni',
    emoji: '🍖',
    color: '#8B0000'
  },
  olives: {
    id: 'olives',
    name: 'Aceitunas',
    nameEn: 'Olives',
    emoji: '🫒',
    color: '#000080'
  },
  mushrooms: {
    id: 'mushrooms',
    name: 'Champiñones',
    nameEn: 'Mushrooms',
    emoji: '🍄',
    color: '#8B4513'
  },
  onions: {
    id: 'onions',
    name: 'Cebollas',
    nameEn: 'Onions',
    emoji: '🧄',
    color: '#FFFAF0'
  },
  tomatoes: {
    id: 'tomatoes',
    name: 'Tomates',
    nameEn: 'Tomatoes',
    emoji: '🍅',
    color: '#FF6347'
  },
  peppers: {
    id: 'peppers',
    name: 'Pimientos',
    nameEn: 'Peppers',
    emoji: '🫑',
    color: '#228B22'
  }
};

// ===============================
// DEFINICIÓN DE MONSTRUOS
// ===============================
const MONSTERS = [
  {
    id: 'monster-1',
    name: 'Gruñón',
    emoji: '👹',
    color: '#32CD32'
  },
  {
    id: 'monster-2',
    name: 'Peludo',
    emoji: '👾',
    color: '#4169E1'
  },
  {
    id: 'monster-3',
    name: 'Arcoíris',
    emoji: '🦄',
    color: '#FF69B4'
  },
  {
    id: 'monster-4',
    name: 'Draquito',
    emoji: '🐲',
    color: '#FF4500'
  }
];

// ===============================
// ESTADO DEL JUEGO
// ===============================
let gameState = {
  currentLevel: 0,
  unlockedLevels: 1,
  totalOrdersCompleted: 0,
  totalMonstersFed: 0,
  timeRemaining: 0,
  monstersInLevel: [],
  completedOrders: 0,
  totalOrders: 0,
  isRunning: false,
  timerInterval: null
};

// ===============================
// LOCAL STORAGE
// ===============================
const STORAGE_KEY = 'chef-monstruos-progress';

function saveProgress() {
  const progress = {
    unlockedLevels: gameState.unlockedLevels,
    currentLevel: gameState.currentLevel,
    totalOrdersCompleted: gameState.totalOrdersCompleted,
    totalMonstersFed: gameState.totalMonstersFed,
    language: currentLanguage,
    lastPlayed: Date.now()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const progress = JSON.parse(saved);
    gameState.unlockedLevels = progress.unlockedLevels || 1;
    gameState.currentLevel = progress.currentLevel || 0;
    gameState.totalOrdersCompleted = progress.totalOrdersCompleted || 0;
    gameState.totalMonstersFed = progress.totalMonstersFed || 0;
    currentLanguage = progress.language || 'es';
  }
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  gameState = {
    currentLevel: 0,
    unlockedLevels: 1,
    totalOrdersCompleted: 0,
    totalMonstersFed: 0,
    timeRemaining: 0,
    monstersInLevel: [],
    completedOrders: 0,
    totalOrders: 0,
    isRunning: false,
    timerInterval: null
  };
  currentLanguage = 'es';
}

// ===============================
// CAMBIO DE IDIOMA
// ===============================
function toggleLanguage() {
  currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
  saveProgress();
  updateUI();
}

function updateUI() {
  const lang = LANGUAGES[currentLanguage];
  
  // Update header
  document.getElementById('levelLabel').textContent = lang.level;
  document.getElementById('timeLabel').textContent = lang.time;
  document.getElementById('ordersLabel').textContent = lang.orders;
  
  // Update modals
  document.getElementById('levelCompleteTitle').textContent = lang.complete;
  document.getElementById('levelCompleteText').textContent = lang.ordersCompleted;
  document.getElementById('timeUpTitle').textContent = lang.timeUp;
  document.getElementById('timeUpText').innerHTML = `${lang.ordersCompleted}: <span id="ordersCompleted">0</span> / <span id="ordersTarget">3</span>`;
  document.getElementById('gameCompleteTitle').textContent = lang.gameComplete;
  document.getElementById('gameCompleteText').textContent = lang.youAre;
  document.getElementById('nextLevelBtn').textContent = lang.nextLevel;
  document.getElementById('retryBtn').textContent = lang.retry;
  document.getElementById('backToMenuBtn').textContent = lang.backToMenu;
  document.getElementById('playAgainBtn').textContent = lang.playAgain;
  
  // Update stats labels
  document.querySelector('.orders-stat-label').textContent = lang.ordersCompleted;
  document.querySelector('.monsters-stat-label').textContent = lang.monstersFed;
  document.querySelector('.total-orders-stat-label').textContent = lang.totalOrders;
  document.querySelector('.total-monsters-stat-label').textContent = lang.totalMonstersFed;
  
  // Update help modal
  document.getElementById('helpTitle').textContent = lang.helpTitle;
  document.getElementById('helpContent').innerHTML = lang.helpContent;
}

// ===============================
// INICIALIZACIÓN DEL JUEGO
// ===============================
function initGame() {
  loadProgress();
  initLevel(gameState.currentLevel);
}

function initLevel(levelIndex) {
  // Limpiar intervalo anterior
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
  }

  // Obtener configuración del nivel
  const level = LEVELS[levelIndex];
  if (!level) {
    showGameComplete();
    return;
  }

  // Inicializar estado del nivel
  gameState.currentLevel = levelIndex;
  gameState.timeRemaining = level.timeLimit;
  gameState.completedOrders = 0;
  gameState.totalOrders = level.monsters;
  gameState.isRunning = true;

  // Actualizar UI del nivel
  document.getElementById('currentLevel').textContent = level.id;
  document.getElementById('totalLevels').textContent = LEVELS.length;
  updateUI();

  // Generar monstruos con pedidos
  generateMonsters(level);

  // Generar ingredientes disponibles
  generateIngredients(level);

  // Actualizar UI de progreso
  updateProgressUI();

  // Iniciar temporizador
  startTimer();
}

// ===============================
// GENERACIÓN DE MONSTRUOS
// ===============================
function generateMonsters(level) {
  const container = document.getElementById('monstersContainer');
  container.innerHTML = '';

  gameState.monstersInLevel = [];

  // Seleccionar monstruos aleatorios
  const shuffledMonsters = [...MONSTERS].sort(() => Math.random() - 0.5);
  const selectedMonsters = shuffledMonsters.slice(0, level.monsters);

  selectedMonsters.forEach((monster, index) => {
    // Generar pedido aleatorio
    const requiredIngredients = [];
    const shuffledIngredients = [...level.ingredientsPool].sort(() => Math.random() - 0.5);

    for (let i = 0; i < level.ingredientsRequired; i++) {
      requiredIngredients.push(shuffledIngredients[i]);
    }

    const monsterData = {
      id: `monster-${index}`,
      monster: monster,
      requiredIngredients: requiredIngredients,
      placedIngredients: [],
      isComplete: false
    };

    gameState.monstersInLevel.push(monsterData);

    // Crear elemento del monstruo en el DOM
    const monsterEl = document.createElement('div');
    monsterEl.className = 'monster-card';
    monsterEl.id = monsterData.id;

    // HTML del pedido del monstruo
    const orderItems = requiredIngredients.map(ingId => {
      const ing = INGREDIENTS[ingId];
      return `<div class="order-item required" data-ingredient="${ingId}">${ing.emoji}</div>`;
    }).join('');

    monsterEl.innerHTML = `
      <div class="monster-avatar" style="background-color: ${monster.color}">
        <span class="monster-emoji">${monster.emoji}</span>
      </div>
      <div class="monster-info">
        <h4 class="monster-name">${monster.name}</h4>
        <p class="monster-order">Pedido:</p>
        <div class="monster-order-items">
          ${orderItems}
          <div class="order-slots">
            ${Array(level.ingredientsRequired).fill('<div class="order-slot"></div>').join('')}
          </div>
        </div>
      </div>
    `;

    container.appendChild(monsterEl);
  });
}

// ===============================
// GENERACIÓN DE INGREDIENTES
// ===============================
function generateIngredients(level) {
  const container = document.getElementById('ingredientsTray');
  container.innerHTML = '';

  // Crear elementos de ingredientes
  level.ingredientsPool.forEach(ingId => {
    const ing = INGREDIENTS[ingId];

    const ingEl = document.createElement('div');
    ingEl.className = 'ingredient-item';
    ingEl.draggable = true;
    ingEl.dataset.ingredient = ingId;
    ingEl.innerHTML = `
      <span class="ingredient-emoji">${ing.emoji}</span>
    `;

    // Eventos de drag (desktop)
    ingEl.addEventListener('dragstart', handleDragStart);
    ingEl.addEventListener('dragend', handleDragEnd);

    // Eventos de touch (móvil - CORREGIDO)
    ingEl.addEventListener('touchstart', handleTouchStart, { passive: false });
    ingEl.addEventListener('touchmove', handleTouchMove, { passive: false });
    ingEl.addEventListener('touchend', handleTouchEnd, { passive: false });

    container.appendChild(ingEl);
  });

  // Preparar áreas de drop para monstruos
  const monsterCards = document.querySelectorAll('.monster-card');
  monsterCards.forEach(card => {
    card.addEventListener('dragover', handleDragOver);
    card.addEventListener('drop', handleDrop);
    card.addEventListener('dragenter', handleDragEnter);
    card.addEventListener('dragleave', handleDragLeave);
    
    // Eventos de touch para drop en móvil
    card.addEventListener('touchmove', handleTouchMove, { passive: false });
    card.addEventListener('touchend', handleTouchDropMobile, { passive: false });
  });
}

// ===============================
// DRAG AND DROP (DESKTOP)
// ===============================
let draggedIngredient = null;

function handleDragStart(e) {
  draggedIngredient = e.target.dataset.ingredient;
  e.dataTransfer.setData('text/plain', draggedIngredient);
  e.target.classList.add('dragging');
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
  document.querySelectorAll('.monster-card').forEach(card => {
    card.classList.remove('drag-over');
  });
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
  e.preventDefault();
  const card = e.target.closest('.monster-card');
  if (card) {
    card.classList.add('drag-over');
  }
}

function handleDragLeave(e) {
  const card = e.target.closest('.monster-card');
  if (card && !card.contains(e.relatedTarget)) {
    card.classList.remove('drag-over');
  }
}

function handleDrop(e) {
  e.preventDefault();
  const card = e.target.closest('.monster-card');
  if (!card || !draggedIngredient) return;

  placeIngredient(card.id, draggedIngredient);
}

// ===============================
// DRAG AND DROP (MÓVIL - CORREGIDO)
// ===============================
let touchIngredient = null;
let touchElement = null;
let touchStartX = 0;
let touchStartY = 0;
let touchElementStartX = 0;
let touchElementStartY = 0;

function handleTouchStart(e) {
  const touch = e.touches[0];
  touchIngredient = e.target.closest('.ingredient-item');
  
  if (!touchIngredient) return;
  
  touchElement = touchIngredient;
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
  
  // Obtener posición inicial del elemento
  const rect = touchElement.getBoundingClientRect();
  touchElementStartX = rect.left;
  touchElementStartY = rect.top;
  
  touchElement.classList.add('dragging');
  e.preventDefault();
}

function handleTouchMove(e) {
  if (!touchElement) return;
  
  e.preventDefault();
  const touch = e.touches[0];
  
  // Calcular movimiento
  const deltaX = touch.clientX - touchStartX;
  const deltaY = touch.clientY - touchStartY;
  
  // Mover elemento visualmente
  touchElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  touchElement.style.zIndex = '1000';
  
  // Detectar monstruo debajo del dedo
  const element = document.elementFromPoint(touch.clientX, touch.clientY);
  const card = element?.closest('.monster-card');
  
  document.querySelectorAll('.monster-card').forEach(c => {
    c.classList.remove('drag-over');
  });
  
  if (card) {
    card.classList.add('drag-over');
  }
}

function handleTouchEnd(e) {
  if (!touchElement || !touchIngredient) return;

  touchElement.classList.remove('dragging');
  touchElement.style.transform = '';
  touchElement.style.zIndex = '';
  
  const touch = e.changedTouches[0];
  const element = document.elementFromPoint(touch.clientX, touch.clientY);
  const card = element?.closest('.monster-card');
  
  document.querySelectorAll('.monster-card').forEach(c => {
    c.classList.remove('drag-over');
  });
  
  if (card) {
    const monsterId = card.id;
    const ingredientId = touchIngredient.dataset.ingredient;
    placeIngredient(monsterId, ingredientId);
  }
  
  touchIngredient = null;
  touchElement = null;
}

function handleTouchDropMobile(e) {
  // Ya manejado en handleTouchEnd
}

// ===============================
// COLOCAR INGREDIENTE
// ===============================
function placeIngredient(monsterId, ingredientId) {
  const monsterData = gameState.monstersInLevel.find(m => m.id === monsterId);
  if (!monsterData || monsterData.isComplete) return;

  // Verificar si el ingrediente es requerido
  const isRequired = monsterData.requiredIngredients.includes(ingredientId);
  const isAlreadyPlaced = monsterData.placedIngredients.includes(ingredientId);

  if (!isRequired) {
    // Sonido de error
    playSound('error');
    showFeedback(monsterId, 'wrong');
    return;
  }

  if (isAlreadyPlaced) {
    // Ya está colocado
    return;
  }

  // Colocar ingrediente
  monsterData.placedIngredients.push(ingredientId);
  playSound('place');

  // Actualizar UI
  const card = document.getElementById(monsterId);
  const slots = card.querySelectorAll('.order-slot');
  const emptySlot = Array.from(slots).find(slot => !slot.dataset.ingredient);

  if (emptySlot) {
    const ing = INGREDIENTS[ingredientId];
    emptySlot.innerHTML = `<span>${ing.emoji}</span>`;
    emptySlot.dataset.ingredient = ingredientId;
    emptySlot.classList.add('filled');
  }

  // Verificar si el pedido está completo
  const isComplete = monsterData.requiredIngredients.every(ing =>
    monsterData.placedIngredients.includes(ing)
  );

  if (isComplete) {
    monsterData.isComplete = true;
    gameState.completedOrders++;
    gameState.totalMonstersFed++;
    gameState.totalOrdersCompleted++;
    playSound('success');
    showFeedback(monsterId, 'correct');

    // Actualizar progreso
    updateProgressUI();

    // Verificar si el nivel está completo
    if (gameState.completedOrders >= gameState.totalOrders) {
      levelComplete();
    }

    // Guardar progreso
    saveProgress();
  }
}

// ===============================
// ACTUALIZAR UI DE PROGRESO
// ===============================
function updateProgressUI() {
  const progressFill = document.getElementById('progressFill');
  const completedEl = document.getElementById('completedOrders');
  const totalEl = document.getElementById('totalOrders');

  const percentage = (gameState.completedOrders / gameState.totalOrders) * 100;
  progressFill.style.width = `${percentage}%`;
  completedEl.textContent = gameState.completedOrders;
  totalEl.textContent = gameState.totalOrders;
}

// ===============================
// ACTUALIZAR UI DE TIEMPO
// ===============================
function updateTimerUI() {
  const timerFill = document.getElementById('timerFill');
  const timeEl = document.getElementById('timeRemaining');
  const level = LEVELS[gameState.currentLevel];

  const percentage = (gameState.timeRemaining / level.timeLimit) * 100;
  timerFill.style.width = `${percentage}%`;
  timeEl.textContent = Math.ceil(gameState.timeRemaining);

  // Cambiar color según tiempo restante
  if (percentage < 25) {
    timerFill.style.backgroundColor = '#EF4444';
  } else if (percentage < 50) {
    timerFill.style.backgroundColor = '#F59E0B';
  } else {
    timerFill.style.backgroundColor = '#4CAF50';
  }
}

// ===============================
// TEMPORIZADOR
// ===============================
function startTimer() {
  gameState.timerInterval = setInterval(() => {
    if (!gameState.isRunning) return;

    gameState.timeRemaining -= 0.1;
    updateTimerUI();

    if (gameState.timeRemaining <= 0) {
      timeUp();
    }
  }, 100);
}

function stopTimer() {
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
  }
}

// ===============================
// FEEDBACK VISUAL
// ===============================
function showFeedback(monsterId, type) {
  const card = document.getElementById(monsterId);
  const avatar = card.querySelector('.monster-avatar');

  if (type === 'correct') {
    avatar.classList.add('happy');
    playSound('success');
    setTimeout(() => {
      avatar.classList.remove('happy');
    }, 500);
  } else if (type === 'wrong') {
    avatar.classList.add('shake');
    playSound('error');
    setTimeout(() => {
      avatar.classList.remove('shake');
    }, 500);
  }
}

// ===============================
// SONIDOS
// ===============================
function playSound(type) {
  // Usar Web Audio API para sonidos sintéticos
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  if (type === 'place') {
    oscillator.frequency.value = 600;
    oscillator.type = 'sine';
    gainNode.gain.value = 0.1;
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
  } else if (type === 'success') {
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.value = 0.15;
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.2);
  } else if (type === 'error') {
    oscillator.frequency.value = 300;
    oscillator.type = 'sawtooth';
    gainNode.gain.value = 0.1;
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.15);
  } else if (type === 'levelComplete') {
    // Fanfarria
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.frequency.value = freq;
      osc.type = 'sine';
      gain.gain.value = 0.1;
      osc.start(audioContext.currentTime + i * 0.15);
      osc.stop(audioContext.currentTime + i * 0.15 + 0.3);
    });
  }
}

// ===============================
// ESTADOS DEL JUEGO
// ===============================
function levelComplete() {
  gameState.isRunning = false;
  stopTimer();
  playSound('levelComplete');

  // Actualizar niveles desbloqueados
  if (gameState.currentLevel + 1 > gameState.unlockedLevels) {
    gameState.unlockedLevels = gameState.currentLevel + 2;
  }

  // Guardar progreso
  saveProgress();

  // Mostrar modal
  const modal = document.getElementById('levelCompleteModal');
  document.getElementById('ordersCompleted').textContent = gameState.completedOrders;
  document.getElementById('monstersFed').textContent = gameState.monstersInLevel.filter(m => m.isComplete).length;
  modal.classList.add('active');
}

function timeUp() {
  gameState.isRunning = false;
  stopTimer();

  // Mostrar modal
  const modal = document.getElementById('timeUpModal');
  document.getElementById('ordersCompleted').textContent = gameState.completedOrders;
  document.getElementById('ordersTarget').textContent = gameState.totalOrders;
  modal.classList.add('active');
}

function showGameComplete() {
  gameState.isRunning = false;
  stopTimer();
  playSound('levelComplete');

  // Mostrar modal
  const modal = document.getElementById('gameCompleteModal');
  document.getElementById('totalOrdersComplete').textContent = gameState.totalOrdersCompleted;
  document.getElementById('totalMonstersComplete').textContent = gameState.totalMonstersFed;
  modal.classList.add('active');
}

// ===============================
// NAVEGACIÓN ENTRE NIVELES
// ===============================
function nextLevel() {
  hideModals();
  if (gameState.currentLevel + 1 < LEVELS.length) {
    gameState.currentLevel++;
    initLevel(gameState.currentLevel);
  } else {
    showGameComplete();
  }
}

function retryLevel() {
  hideModals();
  initLevel(gameState.currentLevel);
}

function playAgain() {
  hideModals();
  gameState.currentLevel = 0;
  resetProgress();
  initLevel(gameState.currentLevel);
}

function goToMenu() {
  hideModals();
  stopTimer();
  window.location.href = '../../index.html';
}

// ===============================
// MODAL DE AYUDA
// ===============================
function showHelp() {
  const modal = document.getElementById('helpModal');
  modal.classList.add('active');
}

function hideHelp() {
  const modal = document.getElementById('helpModal');
  modal.classList.remove('active');
}

// ===============================
// UTILIDADES
// ===============================
function hideModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('active');
  });
}

// ===============================
// INICIAR JUEGO AL CARGAR
// ===============================
window.addEventListener('DOMContentLoaded', () => {
  initGame();
});

// Prevenir scroll en móvil
document.addEventListener('touchmove', (e) => {
  if (e.target.closest('.ingredient-item') || e.target.closest('.monster-card')) {
    e.preventDefault();
  }
}, { passive: false });
