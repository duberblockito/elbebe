// Pinta las Nubes - Game Logic
// Recommended Age: 2-3 years

const gameState = {
    animalsFound: 0,
    totalAnimals: 0,
    cloudsRevealed: new Set(),
    isComplete: false
};

// Animals data with names and emojis
const animals = [
    { id: 1, emoji: '🐱', name: 'Gato', sound: 'Meow!' },
    { id: 2, emoji: '🐶', name: 'Perro', sound: 'Woof!' },
    { id: 3, emoji: '🐰', name: 'Conejo', sound: 'Boing!' },
    { id: 4, emoji: '🐸', name: 'Rana', sound: 'Ribbit!' },
    { id: 5, emoji: '🦆', name: 'Pato', sound: 'Quack!' },
    { id: 6, emoji: '🐔', name: 'Pollo', sound: 'Cock-a-doodle-doo!' },
    { id: 7, emoji: '🐮', name: 'Vaca', sound: 'Moo!' },
    { id: 8, emoji: '🐷', name: 'Cerdito', sound: 'Oink!' }
];

// Initialize the game
function initGame() {
    const container = document.getElementById('clouds-container');
    container.innerHTML = '';

    // Shuffle animals
    const shuffledAnimals = [...animals].sort(() => Math.random() - 0.5);
    gameState.totalAnimals = shuffledAnimals.length;
    gameState.animalsFound = 0;
    gameState.cloudsRevealed.clear();
    gameState.isComplete = false;

    // Update progress display
    updateProgress();

    // Create clouds with hidden animals
    shuffledAnimals.forEach((animal, index) => {
        const cloud = createCloud(animal, index);
        container.appendChild(cloud);
    });

    // Hide celebration
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('show');

    // Clear feedback
    clearFeedback();
}

// Create a cloud element
function createCloud(animal, index) {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.dataset.animalId = animal.id;
    cloud.dataset.animalIndex = index;

    // Create animal element (initially hidden)
    const animalElement = document.createElement('div');
    animalElement.className = 'animal';
    animalElement.textContent = animal.emoji;
    cloud.appendChild(animalElement);

    // Add touch/click event
    cloud.addEventListener('touchstart', handleCloudTouch, { passive: true });
    cloud.addEventListener('click', handleCloudClick);

    return cloud;
}

// Handle cloud touch
function handleCloudTouch(e) {
    e.preventDefault();
    const cloud = e.currentTarget;
    revealAnimal(cloud);
}

// Handle cloud click (desktop)
function handleCloudClick(e) {
    const cloud = e.currentTarget;
    revealAnimal(cloud);
}

// Reveal animal in cloud
function revealAnimal(cloud) {
    if (gameState.isComplete) return;

    const animalId = parseInt(cloud.dataset.animalId);
    const animalIndex = parseInt(cloud.dataset.animalIndex);

    // Check if already revealed
    if (gameState.cloudsRevealed.has(animalId)) return;

    // Mark as revealed
    gameState.cloudsRevealed.add(animalId);
    gameState.animalsFound++;

    // Add revealed class
    cloud.classList.add('revealed');

    // Get animal data
    const animal = animals.find(a => a.id === animalId);

    // Show feedback
    showFeedback(animal);

    // Play sound
    playPopSound();

    // Update progress
    updateProgress();

    // Check if complete
    checkCompletion();
}

// Show feedback animation
function showFeedback(animal) {
    const feedbackContainer = document.getElementById('animal-feedback');
    const nameElement = document.getElementById('animal-name');

    feedbackContainer.textContent = animal.emoji;
    feedbackContainer.classList.add('animal-pop');

    nameElement.textContent = animal.name;
    nameElement.classList.add('textPop');

    // Remove animation classes after animation
    setTimeout(() => {
        feedbackContainer.classList.remove('animal-pop');
    }, 500);

    setTimeout(() => {
        nameElement.classList.remove('textPop');
    }, 500);

    // Speak the animal name (if browser supports)
    speakAnimalName(animal.name);
}

// Speak animal name using Web Speech API
function speakAnimalName(name) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(name);
        utterance.lang = 'es-ES';
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        speechSynthesis.speak(utterance);
    }
}

// Play pop sound (using Web Audio API)
function playPopSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
    } catch (error) {
        console.log('Audio not supported');
    }
}

// Update progress bar
function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const foundCount = document.getElementById('found-count');
    const totalCount = document.getElementById('total-count');

    const percentage = (gameState.animalsFound / gameState.totalAnimals) * 100;
    progressFill.style.width = `${percentage}%`;

    foundCount.textContent = gameState.animalsFound;
    totalCount.textContent = gameState.totalAnimals;
}

// Clear feedback
function clearFeedback() {
    const feedbackContainer = document.getElementById('animal-feedback');
    const nameElement = document.getElementById('animal-name');

    feedbackContainer.textContent = '';
    nameElement.textContent = '';
}

// Check if game is complete
function checkCompletion() {
    if (gameState.animalsFound >= gameState.totalAnimals) {
        gameState.isComplete = true;
        showCelebration();
    }
}

// Show celebration
function showCelebration() {
    setTimeout(() => {
        const celebration = document.getElementById('celebration');
        celebration.classList.add('show');

        // Play celebration sound
        playCelebrationSound();
    }, 500);
}

// Play celebration sound
function playCelebrationSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        // Play a simple melody
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        let noteIndex = 0;

        function playNote() {
            if (noteIndex >= notes.length) return;

            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(notes[noteIndex], audioContext.currentTime);
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);

            noteIndex++;
            setTimeout(playNote, 150);
        }

        playNote();
    } catch (error) {
        console.log('Audio not supported');
    }
}

// Restart game
function restartGame() {
    initGame();
}

// Save progress to localStorage
function saveProgress() {
    const progressData = {
        found: Array.from(gameState.cloudsRevealed),
        total: gameState.totalAnimals,
        timestamp: Date.now()
    };
    localStorage.setItem('pinta-nubes-progress', JSON.stringify(progressData));
}

// Load progress from localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('pinta-nubes-progress');
    if (savedProgress) {
        const progressData = JSON.parse(savedProgress);

        // Check if progress is recent (within 24 hours)
        const isRecent = (Date.now() - progressData.timestamp) < 24 * 60 * 60 * 1000;

        if (isRecent && progressData.found.length > 0) {
            // Restore progress
            gameState.cloudsRevealed = new Set(progressData.found);
            gameState.animalsFound = progressData.found.length;
            gameState.totalAnimals = progressData.total;
        }
    }
}

// Initialize game on load
document.addEventListener('DOMContentLoaded', () => {
    // Try to load saved progress
    loadProgress();

    // Initialize game
    initGame();

    // Auto-save progress periodically
    setInterval(saveProgress, 5000);
});

// Save progress on page unload
window.addEventListener('beforeunload', saveProgress);

// Prevent zoom on double tap (iOS)
document.addEventListener('touchend', (e) => {
    e.preventDefault();
    // Re-trigger the click event
    e.target.click();
}, { passive: false });

// Prevent context menu on long press (mobile)
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});
