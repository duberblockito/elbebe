// Music Master: Rhythm Quest - Game Logic

class MusicMasterGame {
    constructor() {
        // Game State
        this.isPlaying = false;
        this.currentLevel = 1;
        this.totalLevels = 5;
        this.score = 0;
        this.stars = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.hits = 0;
        this.misses = 0;
        this.timeLeft = 60;
        this.maxTime = 60;
        this.notesCompleted = 0;
        this.totalNotes = 20;
        this.bestScore = 0;

        // Timer
        this.gameTimer = null;
        this.noteSpawnTimer = null;

        // Notes
        this.notes = [];
        this.noteSpeed = 2000; // ms for note to fall
        this.spawnRate = 1000; // ms between notes

        // Audio
        this.audioContext = null;
        this.frequencies = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5 (C major chord)

        // DOM Elements
        this.elements = {};

        // Initialize
        this.init();
    }

    init() {
        // Get DOM elements
        this.elements = {
            hud: document.getElementById('hud'),
            levelDisplay: document.getElementById('level-display'),
            scoreDisplay: document.getElementById('score-display'),
            starsDisplay: document.getElementById('stars-display'),
            comboDisplay: document.getElementById('combo-display'),
            gameArea: document.getElementById('game-area'),
            progressFill: document.getElementById('progress-fill'),
            progressText: document.getElementById('progress-text'),
            timerFill: document.getElementById('timer-fill'),
            timerText: document.getElementById('timer-text'),
            startScreen: document.getElementById('start-screen'),
            startLevel: document.getElementById('start-level'),
            bestScore: document.getElementById('best-score'),
            startBtn: document.getElementById('start-btn'),
            howToBtn: document.getElementById('how-to-btn'),
            levelCompleteScreen: document.getElementById('level-complete-screen'),
            starsEarned: document.getElementById('stars-earned'),
            finalScore: document.getElementById('final-score'),
            maxCombo: document.getElementById('max-combo'),
            hits: document.getElementById('hits'),
            misses: document.getElementById('misses'),
            nextLevelBtn: document.getElementById('next-level-btn'),
            replayBtn: document.getElementById('replay-btn'),
            timesUpScreen: document.getElementById('times-up-screen'),
            timesUpStars: document.getElementById('times-up-stars'),
            timesUpScore: document.getElementById('times-up-score'),
            retryBtn: document.getElementById('retry-btn'),
            menuBtn: document.getElementById('menu-btn'),
            gameCompleteScreen: document.getElementById('game-complete-screen'),
            gameCompleteStars: document.getElementById('game-complete-stars'),
            totalStars: document.getElementById('total-stars'),
            gameBestScore: document.getElementById('game-best-score'),
            playAgainBtn: document.getElementById('play-again-btn'),
            howToScreen: document.getElementById('how-to-screen'),
            backToMenuBtn: document.getElementById('back-to-menu-btn'),
            targets: [
                document.getElementById('target-0'),
                document.getElementById('target-1'),
                document.getElementById('target-2'),
                document.getElementById('target-3')
            ]
        };

        // Load progress from localStorage
        this.loadProgress();

        // Set up event listeners
        this.setupEventListeners();

        // Initialize audio context on first interaction
        this.initAudio();
    }

    initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API not supported');
        }
    }

    playNote(frequency, duration = 0.2) {
        if (!this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;

        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    playHitSound() {
        // Play the corresponding note based on track
        this.playNote(this.frequencies[Math.floor(Math.random() * this.frequencies.length)], 0.15);
    }

    playMissSound() {
        if (!this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.type = 'triangle';
        oscillator.frequency.value = 150;

        gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.1);
    }

    setupEventListeners() {
        // Start button
        this.elements.startBtn.addEventListener('click', () => {
            this.initAudio();
            this.startGame();
        });

        // How to play button
        this.elements.howToBtn.addEventListener('click', () => {
            this.showScreen('how-to-screen');
        });

        // Next level button
        this.elements.nextLevelBtn.addEventListener('click', () => {
            this.nextLevel();
        });

        // Replay button
        this.elements.replayBtn.addEventListener('click', () => {
            this.startLevel();
        });

        // Retry button
        this.elements.retryBtn.addEventListener('click', () => {
            this.startLevel();
        });

        // Menu button
        this.elements.menuBtn.addEventListener('click', () => {
            this.showStartScreen();
        });

        // Play again button
        this.elements.playAgainBtn.addEventListener('click', () => {
            this.currentLevel = 1;
            this.showStartScreen();
        });

        // Back to menu button
        this.elements.backToMenuBtn.addEventListener('click', () => {
            this.showScreen('start-screen');
        });

        // Track touch/click events
        this.elements.targets.forEach((target, index) => {
            target.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.handleTrackHit(index, e.touches[0]);
            });

            target.addEventListener('click', (e) => {
                this.handleTrackHit(index, e);
            });
        });
    }

    handleTrackHit(trackIndex, event) {
        if (!this.isPlaying) return;

        // Find note in target area for this track
        const targetNote = this.notes.find(note => {
            return note.track === trackIndex && note.isInTarget;
        });

        if (targetNote) {
            // Hit!
            this.hitNote(targetNote, trackIndex, event);
        } else {
            // Miss - tapped too early or wrong track
            this.combo = 0;
            this.updateHUD();
        }
    }

    hitNote(note, trackIndex, event) {
        // Remove note from array
        this.notes = this.notes.filter(n => n !== note);

        // Calculate score based on timing
        const timingBonus = Math.floor(note.timing * 100);
        const comboBonus = this.combo * 10;
        const points = 100 + timingBonus + comboBonus;

        // Update stats
        this.score += points;
        this.combo++;
        this.hits++;
        this.notesCompleted++;
        this.maxCombo = Math.max(this.maxCombo, this.combo);

        // Play sound
        this.playHitSound();

        // Visual feedback
        this.elements.targets[trackIndex].classList.add('hit');
        setTimeout(() => {
            this.elements.targets[trackIndex].classList.remove('hit');
        }, 100);

        // Create score popup
        this.createScorePopup(event.clientX || (window.innerWidth / 2), event.clientY || (window.innerHeight - 100), `+${points}`);

        // Create touch feedback
        this.createTouchFeedback(event.clientX || (window.innerWidth / 2), event.clientY || (window.innerHeight - 100));

        // Update HUD
        this.updateHUD();
        this.updateProgress();

        // Remove note element
        if (note.element) {
            note.element.remove();
        }

        // Check if level complete
        if (this.notesCompleted >= this.totalNotes) {
            this.levelComplete();
        }
    }

    missNote(note) {
        // Remove note from array
        this.notes = this.notes.filter(n => n !== note);

        // Reset combo
        this.combo = 0;
        this.misses++;

        // Play miss sound
        this.playMissSound();

        // Update HUD
        this.updateHUD();

        // Remove note element
        if (note.element) {
            note.element.remove();
        }
    }

    createScorePopup(x, y, text) {
        const popup = document.createElement('div');
        popup.className = 'score-popup';
        popup.textContent = text;
        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;
        this.elements.gameArea.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 800);
    }

    createTouchFeedback(x, y) {
        const feedback = document.createElement('div');
        feedback.className = 'touch-feedback';
        feedback.style.left = `${x - 30}px`;
        feedback.style.top = `${y - 30}px`;
        document.body.appendChild(feedback);

        setTimeout(() => {
            feedback.remove();
        }, 300);
    }

    spawnNote() {
        if (!this.isPlaying) return;

        // Don't spawn if we have enough notes
        const activeNotes = this.notes.filter(n => !n.isInTarget).length;
        if (activeNotes >= 3) return;

        // Create note element
        const note = document.createElement('div');
        note.className = 'note';

        // Random track
        const track = Math.floor(Math.random() * 4);

        // Get track element
        const trackElement = this.elements.targets[track].parentElement;
        trackElement.appendChild(note);

        // Calculate animation duration based on level
        const animationDuration = this.noteSpeed - (this.currentLevel * 100);
        note.style.animationDuration = `${animationDuration}ms`;

        // Track note
        const noteData = {
            element: note,
            track: track,
            isInTarget: false,
            timing: 1.0, // Will be updated
            startTime: Date.now()
        };

        this.notes.push(noteData);

        // Check when note reaches target
        const targetCheckInterval = setInterval(() => {
            if (!this.isPlaying || !note.parentElement) {
                clearInterval(targetCheckInterval);
                return;
            }

            const rect = note.getBoundingClientRect();
            const targetRect = this.elements.targets[track].getBoundingClientRect();

            // Check if note is in target area
            const noteCenter = rect.top + rect.height / 2;
            const targetCenter = targetRect.top + targetRect.height / 2;
            const distance = Math.abs(noteCenter - targetCenter);

            if (distance < 40) {
                noteData.isInTarget = true;
                // Calculate timing score (closer to center = better)
                noteData.timing = 1 - (distance / 40);
            }

            // Miss if note passed target
            if (rect.top > targetRect.bottom) {
                clearInterval(targetCheckInterval);
                if (noteData.isInTarget) {
                    this.missNote(noteData);
                }
            }
        }, 50);

        // Clean up interval when animation ends
        note.addEventListener('animationend', () => {
            clearInterval(targetCheckInterval);
        });
    }

    startGame() {
        this.isPlaying = true;
        this.startLevel();
    }

    startLevel() {
        // Reset level state
        this.score = 0;
        this.stars = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.hits = 0;
        this.misses = 0;
        this.notesCompleted = 0;
        this.notes = [];

        // Calculate level parameters
        this.totalNotes = 15 + (this.currentLevel * 5);
        this.timeLeft = 45 + (this.currentLevel * 10);
        this.maxTime = this.timeLeft;
        this.noteSpeed = 2500 - (this.currentLevel * 200);
        this.spawnRate = 1200 - (this.currentLevel * 100);

        // Clear any existing notes
        document.querySelectorAll('.note').forEach(note => note.remove());

        // Update HUD
        this.updateHUD();
        this.updateProgress();
        this.updateTimer();

        // Hide all screens
        this.hideAllScreens();

        // Start spawning notes
        this.noteSpawnTimer = setInterval(() => {
            if (this.isPlaying) {
                this.spawnNote();
            }
        }, this.spawnRate);

        // Start timer
        this.gameTimer = setInterval(() => {
            this.updateTimer();
        }, 1000);

        // Spawn first note immediately
        this.spawnNote();
    }

    updateHUD() {
        this.elements.levelDisplay.textContent = this.currentLevel;
        this.elements.scoreDisplay.textContent = this.score;
        this.elements.starsDisplay.textContent = this.stars;
        this.elements.comboDisplay.textContent = `${this.combo}x`;
    }

    updateProgress() {
        const progress = (this.notesCompleted / this.totalNotes) * 100;
        this.elements.progressFill.style.width = `${progress}%`;
        this.elements.progressText.textContent = `${this.notesCompleted}/${this.totalNotes}`;
    }

    updateTimer() {
        this.timeLeft--;

        const progress = (this.timeLeft / this.maxTime) * 100;
        this.elements.timerFill.style.width = `${progress}%`;
        this.elements.timerText.textContent = `${this.timeLeft}s`;

        // Update timer color based on remaining time
        if (progress <= 25) {
            this.elements.timerFill.className = 'timer-fill critical';
        } else if (progress <= 50) {
            this.elements.timerFill.className = 'timer-fill warning';
        } else {
            this.elements.timerFill.className = 'timer-fill';
        }

        // Check if time's up
        if (this.timeLeft <= 0) {
            this.timesUp();
        }
    }

    levelComplete() {
        this.isPlaying = false;
        clearInterval(this.gameTimer);
        clearInterval(this.noteSpawnTimer);

        // Calculate stars based on performance
        const accuracy = this.hits / (this.hits + this.misses);
        const scoreThresholds = [
            this.totalNotes * 50,  // 1 star threshold
            this.totalNotes * 100, // 2 stars threshold
            this.totalNotes * 150  // 3 stars threshold
        ];

        if (this.score >= scoreThresholds[2] && accuracy >= 0.9) {
            this.stars = 3;
        } else if (this.score >= scoreThresholds[1] && accuracy >= 0.8) {
            this.stars = 2;
        } else if (this.score >= scoreThresholds[0] && accuracy >= 0.7) {
            this.stars = 1;
        }

        // Update best score
        const levelKey = `music-master-level-${this.currentLevel}`;
        const savedProgress = JSON.parse(localStorage.getItem('music-master-progress') || '{}');
        const currentBest = savedProgress[levelKey]?.bestScore || 0;
        this.bestScore = Math.max(currentBest, this.score);

        // Save progress
        savedProgress[levelKey] = {
            bestScore: this.bestScore,
            stars: Math.max(savedProgress[levelKey]?.stars || 0, this.stars)
        };
        savedProgress.currentLevel = Math.max(savedProgress.currentLevel || 1, this.currentLevel + 1);
        localStorage.setItem('music-master-progress', JSON.stringify(savedProgress));

        // Show level complete screen
        this.showLevelCompleteScreen();
    }

    timesUp() {
        this.isPlaying = false;
        clearInterval(this.gameTimer);
        clearInterval(this.noteSpawnTimer);

        // Calculate stars even on time's up
        const accuracy = this.hits / (this.hits + this.misses);
        const scoreThresholds = [
            this.totalNotes * 30,  // 1 star threshold
            this.totalNotes * 70,  // 2 stars threshold
            this.totalNotes * 120  // 3 stars threshold
        ];

        if (this.score >= scoreThresholds[2] && accuracy >= 0.85) {
            this.stars = 3;
        } else if (this.score >= scoreThresholds[1] && accuracy >= 0.75) {
            this.stars = 2;
        } else if (this.score >= scoreThresholds[0] && accuracy >= 0.65) {
            this.stars = 1;
        }

        // Save progress
        const savedProgress = JSON.parse(localStorage.getItem('music-master-progress') || '{}');
        const levelKey = `music-master-level-${this.currentLevel}`;
        const currentBest = savedProgress[levelKey]?.bestScore || 0;
        this.bestScore = Math.max(currentBest, this.score);
        savedProgress[levelKey] = {
            bestScore: this.bestScore,
            stars: Math.max(savedProgress[levelKey]?.stars || 0, this.stars)
        };
        localStorage.setItem('music-master-progress', JSON.stringify(savedProgress));

        // Show time's up screen
        this.showTimesUpScreen();
    }

    nextLevel() {
        if (this.currentLevel < this.totalLevels) {
            this.currentLevel++;
            this.startLevel();
        } else {
            this.gameComplete();
        }
    }

    gameComplete() {
        // Calculate total stars
        const savedProgress = JSON.parse(localStorage.getItem('music-master-progress') || '{}');
        let totalStars = 0;
        let bestOverallScore = 0;

        for (let i = 1; i <= this.totalLevels; i++) {
            totalStars += savedProgress[`music-master-level-${i}`]?.stars || 0;
            bestOverallScore = Math.max(bestOverallScore, savedProgress[`music-master-level-${i}`]?.bestScore || 0);
        }

        this.elements.totalStars.textContent = totalStars;
        this.elements.gameBestScore.textContent = bestOverallScore;

        // Show stars
        const stars = this.elements.gameCompleteStars.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.classList.remove('earned');
            if (index < Math.min(totalStars / this.totalLevels, 3)) {
                star.classList.add('earned');
            }
        });

        this.showScreen('game-complete-screen');
    }

    showScreen(screenId) {
        this.hideAllScreens();
        document.getElementById(screenId).classList.remove('hidden');
    }

    hideAllScreens() {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.add('hidden');
        });
    }

    showStartScreen() {
        const savedProgress = JSON.parse(localStorage.getItem('music-master-progress') || '{}');
        this.currentLevel = savedProgress.currentLevel || 1;

        const levelKey = `music-master-level-${this.currentLevel}`;
        this.bestScore = savedProgress[levelKey]?.bestScore || 0;

        this.elements.startLevel.textContent = this.currentLevel;
        this.elements.bestScore.textContent = this.bestScore;

        this.showScreen('start-screen');
    }

    showLevelCompleteScreen() {
        this.elements.finalScore.textContent = this.score;
        this.elements.maxCombo.textContent = `${this.maxCombo}x`;
        this.elements.hits.textContent = this.hits;
        this.elements.misses.textContent = this.misses;

        // Show stars
        const stars = this.elements.starsEarned.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.classList.remove('earned');
            if (index < this.stars) {
                setTimeout(() => {
                    star.classList.add('earned');
                }, index * 300);
            }
        });

        this.showScreen('level-complete-screen');
    }

    showTimesUpScreen() {
        this.elements.timesUpScore.textContent = this.score;

        // Show stars
        const stars = this.elements.timesUpStars.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.classList.remove('earned');
            if (index < this.stars) {
                setTimeout(() => {
                    star.classList.add('earned');
                }, index * 300);
            }
        });

        this.showScreen('times-up-screen');
    }

    loadProgress() {
        const savedProgress = JSON.parse(localStorage.getItem('music-master-progress') || '{}');
        this.currentLevel = savedProgress.currentLevel || 1;
    }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.game = new MusicMasterGame();
});
