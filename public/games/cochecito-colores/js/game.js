// Cochecito de Colores - Game Logic

class CochecitoColores {
  constructor() {
    this.colors = [
      '#FF6B6B', // Red
      '#FFA500', // Orange
      '#FFD700', // Yellow
      '#4ECDC4', // Green
      '#45B7D1', // Blue
      '#9B59B6', // Purple
      '#FF69B4'  // Pink
    ];
    
    this.currentColorIndex = 0;
    this.touchCount = 0;
    this.gameContainer = null;
    this.carBody = null;
    this.carContainer = null;
    this.touchCounter = null;
    this.audioContext = null;
    
    this.init();
  }
  
  init() {
    this.gameContainer = document.querySelector('.game-container');
    this.carContainer = document.querySelector('.car-container');
    this.carBody = document.querySelector('.car-body');
    this.touchCounter = document.querySelector('.touch-counter');
    
    // Load saved progress
    this.loadProgress();
    
    // Update display
    this.updateTouchCounter();
    
    // Setup touch/click events
    this.setupEvents();
    
    // Initialize audio context (on first user interaction)
    this.setupAudio();
  }
  
  setupEvents() {
    // Click and touch events
    this.carContainer.addEventListener('click', () => this.onTouch());
    this.carContainer.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.onTouch();
    }, { passive: false });
    
    // Remove animation class when animation ends
    this.carContainer.addEventListener('animationend', () => {
      this.carContainer.classList.remove('moving');
    });
  }
  
  setupAudio() {
    // Create audio context on first user interaction (browser requirement)
    const initAudio = () => {
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      this.carContainer.removeEventListener('click', initAudio);
      this.carContainer.removeEventListener('touchstart', initAudio);
    };
    
    this.carContainer.addEventListener('click', initAudio);
    this.carContainer.addEventListener('touchstart', initAudio);
  }
  
  playVroomSound() {
    if (!this.audioContext) return;
    
    try {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      // Create "vroom" sound with frequency sweep
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(250, this.audioContext.currentTime + 0.2);
      oscillator.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.4);
      
      // Volume envelope
      gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
      
      // Connect nodes
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      // Play sound
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.4);
      
    } catch (error) {
      console.error('Error playing vroom sound:', error);
    }
  }
  
  onTouch() {
    // Increment touch count
    this.touchCount++;
    this.updateTouchCounter();
    this.saveProgress();
    
    // Change car color
    this.changeCarColor();
    
    // Play vroom sound
    this.playVroomSound();
    
    // Add bounce animation
    this.carContainer.classList.remove('moving');
    void this.carContainer.offsetWidth; // Trigger reflow
    this.carContainer.classList.add('moving');
  }
  
  changeCarColor() {
    // Move to next color
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    const newColor = this.colors[this.currentColorIndex];
    
    // Apply new color to car body
    if (this.carBody) {
      this.carBody.style.fill = newColor;
    }
  }
  
  updateTouchCounter() {
    if (this.touchCounter) {
      this.touchCounter.textContent = `¡Tocas: ${this.touchCount}!`;
    }
  }
  
  saveProgress() {
    try {
      localStorage.setItem('cochecito-colores-progress', this.touchCount.toString());
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }
  
  loadProgress() {
    try {
      const savedProgress = localStorage.getItem('cochecito-colores-progress');
      if (savedProgress !== null) {
        this.touchCount = parseInt(savedProgress, 10);
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new CochecitoColores();
});
