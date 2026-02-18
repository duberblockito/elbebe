// Colores que Vibran - Game Logic
// Juego sensorial para bebés de 0-1 años

class ColoresVibran {
    constructor() {
        this.colorScreen = document.getElementById('color-screen');
        this.vibrationIndicator = document.getElementById('vibration-indicator');
        this.noteDisplay = document.getElementById('note-display');
        this.noteIcon = document.querySelector('.note-icon');
        this.startBtn = document.getElementById('start-btn');
        this.overlay = document.getElementById('game-overlay');

        this.isPlaying = false;
        this.noteIndex = 0;
        this.touchTimeout = null;

        // Paleta de colores brillantes y contrastantes para bebés
        this.colors = [
            '#FF6B9D', // Rosa brillante
            '#4ECDC4', // Turquesa vibrante
            '#FFE66D', // Amarillo brillante
            '#95E1D3', // Verde menta
            '#F38181', // Rojo pastel
            '#AA96DA', // Lavanda vibrante
            '#FCBAD3', // Rosa pastel
            '#A8D8EA', // Azul cielo
            '#FF9F43', // Naranja brillante
            '#EE5A24', // Rojo naranja
            '#00D2D3', // Cyan brillante
            '#54A0FF', // Azul brillante
        ];

        // Escala musical ascendente (Do Re Mi Fa Sol La Si Do)
        // Frecuencias en Hz de la escala de Do mayor
        this.notes = [
            261.63, // Do4
            293.66, // Re4
            329.63, // Mi4
            349.23, // Fa4
            392.00, // Sol4
            440.00, // La4
            493.88, // Si4
            523.25, // Do5
        ];

        this.audioContext = null;
        this.init();
    }

    init() {
        // Event listeners
        this.startBtn.addEventListener('click', () => this.startGame());
        this.startBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.startGame();
        });

        // Touch/click listeners for color screen
        this.colorScreen.addEventListener('click', (e) => this.handleTouch(e));
        this.colorScreen.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.handleTouch(e);
        });

        // Initialize random color
        this.randomizeColor();
    }

    startGame() {
        this.isPlaying = true;
        this.overlay.style.display = 'none';

        // Initialize AudioContext on user interaction
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        // Resume AudioContext if suspended
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }

    handleTouch(event) {
        if (!this.isPlaying) return;

        // Debounce touches (prevent too rapid changes)
        if (this.touchTimeout) return;

        this.touchTimeout = setTimeout(() => {
            this.touchTimeout = null;
        }, 100);

        // Change background color
        this.randomizeColor();

        // Play musical note
        this.playNote();

        // Vibrate screen
        this.vibrateScreen();

        // Show note icon
        this.showNoteIcon();
    }

    randomizeColor() {
        const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.colorScreen.style.backgroundColor = randomColor;

        // Update note icon color to contrast with background
        this.noteIcon.style.color = this.getContrastColor(randomColor);
    }

    getContrastColor(hexColor) {
        // Convert hex to RGB
        const r = parseInt(hexColor.substr(1, 2), 16);
        const g = parseInt(hexColor.substr(3, 2), 16);
        const b = parseInt(hexColor.substr(5, 2), 16);

        // Calculate luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        // Return black or white based on luminance
        return luminance > 0.5 ? '#000000' : '#FFFFFF';
    }

    playNote() {
        if (!this.audioContext) return;

        // Play current note
        const frequency = this.notes[this.noteIndex];
        this.generateTone(frequency);

        // Increment note index (ascending sequence)
        this.noteIndex = (this.noteIndex + 1) % this.notes.length;
    }

    generateTone(frequency) {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        // Configure oscillator
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);

        // Envelope for soft, pleasant tone
        const now = this.audioContext.currentTime;
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.3, now + 0.01); // Attack
        gainNode.gain.exponentialRampToValueAtTime(0.1, now + 0.1); // Decay
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5); // Release

        // Start and stop oscillator
        oscillator.start(now);
        oscillator.stop(now + 0.5);
    }

    vibrateScreen() {
        // Add vibration class
        this.vibrationIndicator.classList.add('vibrate');

        // Remove class after animation
        setTimeout(() => {
            this.vibrationIndicator.classList.remove('vibrate');
        }, 300);
    }

    showNoteIcon() {
        // Show note icon
        this.noteIcon.classList.add('show');

        // Hide after short delay
        setTimeout(() => {
            this.noteIcon.classList.remove('show');
        }, 500);
    }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ColoresVibran();
});
