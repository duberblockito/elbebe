// Space Explorer: Galaxy Mission
// A space exploration simulation game

class SpaceExplorer {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Game state
        this.level = 1;
        this.discoveredSystems = 0;
        this.systemsToDiscover = 3;
        this.energy = 50;
        this.minerals = 0;
        this.timeRemaining = 90;
        this.maxTime = 90;
        this.isPlaying = false;
        
        // Ship
        this.ship = {
            x: 0,
            y: 0,
            targetX: 0,
            targetY: 0,
            size: 20,
            speed: 3
        };
        
        // Stars and planets
        this.stars = [];
        this.planets = [];
        this.nearestPlanet = null;
        
        // Animation
        this.lastTime = 0;
        this.animationId = null;
        
        // Load progress from localStorage
        this.loadProgress();
        
        // Initialize
        this.resize();
        this.setupEventListeners();
        this.generateGalaxy();
        this.resetShip();
    }
    
    loadProgress() {
        const saved = localStorage.getItem('space-explorer-progress');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.level = data.level || 1;
            } catch (e) {
                console.error('Error loading progress:', e);
            }
        }
    }
    
    saveProgress() {
        const data = {
            level: this.level
        };
        localStorage.setItem('space-explorer-progress', JSON.stringify(data));
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
    }
    
    setupEventListeners() {
        // Resize
        window.addEventListener('resize', () => this.resize());
        
        // Touch/Click controls for ship movement
        this.canvas.addEventListener('click', (e) => {
            if (!this.isPlaying) return;
            const rect = this.canvas.getBoundingClientRect();
            this.ship.targetX = e.clientX - rect.left;
            this.ship.targetY = e.clientY - rect.top;
        });
        
        // Buttons
        document.getElementById('btn-scan').addEventListener('click', () => this.scan());
        document.getElementById('btn-colonize').addEventListener('click', () => this.colonize());
        document.getElementById('modal-btn').addEventListener('click', () => this.handleModal());
    }
    
    generateGalaxy() {
        this.stars = [];
        this.planets = [];
        
        // Generate background stars
        const starCount = 150 + (this.level * 20);
        for (let i = 0; i < starCount; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                brightness: Math.random() * 0.5 + 0.5,
                twinkleSpeed: Math.random() * 0.02 + 0.01
            });
        }
        
        // Generate planets to discover
        const planetColors = [
            '#e74c3c', '#3498db', '#2ecc71', '#f39c12',
            '#9b59b6', '#1abc9c', '#e67e22', '#34495e'
        ];
        
        for (let i = 0; i < this.systemsToDiscover; i++) {
            const angle = (Math.PI * 2 * i) / this.systemsToDiscover;
            const distance = 100 + (this.level * 30);
            
            this.planets.push({
                x: this.centerX + Math.cos(angle) * distance,
                y: this.centerY + Math.sin(angle) * distance,
                size: 30 + Math.random() * 20,
                color: planetColors[i % planetColors.length],
                discovered: false,
                colonized: false,
                minerals: Math.floor(Math.random() * 20) + 10,
                energyCost: 5 + this.level,
                ring: Math.random() > 0.7,
                moons: Math.floor(Math.random() * 3)
            });
        }
    }
    
    resetShip() {
        this.ship.x = this.centerX;
        this.ship.y = this.centerY;
        this.ship.targetX = this.centerX;
        this.ship.targetY = this.centerY;
        this.energy = 50 + (this.level * 10);
        this.minerals = 0;
        this.discoveredSystems = 0;
        this.timeRemaining = 60 + (this.level * 15);
        this.maxTime = this.timeRemaining;
        
        // Reset planets
        this.planets.forEach(p => {
            p.discovered = false;
            p.colonized = false;
        });
        
        this.updateUI();
    }
    
    start() {
        if (this.isPlaying) return;
        this.isPlaying = true;
        this.resetShip();
        this.lastTime = performance.now();
        this.gameLoop();
    }
    
    gameLoop(currentTime) {
        if (!this.isPlaying) return;
        
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        
        this.update(deltaTime);
        this.render();
        
        this.animationId = requestAnimationFrame((t) => this.gameLoop(t));
    }
    
    update(deltaTime) {
        // Update timer
        this.timeRemaining -= deltaTime;
        
        if (this.timeRemaining <= 0) {
            this.endGame(false);
            return;
        }
        
        // Move ship towards target
        const dx = this.ship.targetX - this.ship.x;
        const dy = this.ship.targetY - this.ship.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 1) {
            this.ship.x += (dx / distance) * this.ship.speed;
            this.ship.y += (dy / distance) * this.ship.speed;
        }
        
        // Check for nearest planet
        this.nearestPlanet = null;
        let minDistance = Infinity;
        
        this.planets.forEach(planet => {
            const pdx = this.ship.x - planet.x;
            const pdy = this.ship.y - planet.y;
            const pDist = Math.sqrt(pdx * pdx + pdy * pdy);
            
            if (pDist < minDistance && pDist < 100) {
                minDistance = pDist;
                this.nearestPlanet = planet;
            }
            
            // Twinkle stars
            this.stars.forEach(star => {
                star.brightness += star.twinkleSpeed;
                if (star.brightness > 1 || star.brightness < 0.5) {
                    star.twinkleSpeed *= -1;
                }
            });
        });
        
        this.updateUI();
    }
    
    render() {
        // Clear canvas
        this.ctx.fillStyle = '#0a0a1a';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw background stars
        this.stars.forEach(star => {
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
            this.ctx.fill();
        });
        
        // Draw nebulae effect
        this.drawNebulae();
        
        // Draw planets
        this.planets.forEach(planet => {
            this.drawPlanet(planet);
        });
        
        // Draw ship
        this.drawShip();
        
        // Draw indicator for nearest planet
        if (this.nearestPlanet && !this.nearestPlanet.discovered) {
            this.drawIndicator(this.nearestPlanet);
        }
    }
    
    drawNebulae() {
        const gradient = this.ctx.createRadialGradient(
            this.centerX, this.centerY, 0,
            this.centerX, this.centerY, this.canvas.width / 2
        );
        gradient.addColorStop(0, 'rgba(74, 144, 226, 0.1)');
        gradient.addColorStop(0.5, 'rgba(155, 89, 182, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    drawPlanet(planet) {
        // Planet glow
        if (planet.discovered) {
            const glow = this.ctx.createRadialGradient(
                planet.x, planet.y, planet.size,
                planet.x, planet.y, planet.size * 1.5
            );
            glow.addColorStop(0, 'rgba(0, 255, 136, 0.3)');
            glow.addColorStop(1, 'rgba(0, 255, 136, 0)');
            this.ctx.fillStyle = glow;
            this.ctx.fillRect(
                planet.x - planet.size * 1.5,
                planet.y - planet.size * 1.5,
                planet.size * 3,
                planet.size * 3
            );
        }
        
        // Planet body
        const gradient = this.ctx.createRadialGradient(
            planet.x - planet.size / 3, planet.y - planet.size / 3, 0,
            planet.x, planet.y, planet.size
        );
        gradient.addColorStop(0, this.lightenColor(planet.color, 30));
        gradient.addColorStop(1, planet.color);
        
        this.ctx.beginPath();
        this.ctx.arc(planet.x, planet.y, planet.size, 0, Math.PI * 2);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
        
        // Planet ring
        if (planet.ring) {
            this.ctx.beginPath();
            this.ctx.ellipse(
                planet.x, planet.y,
                planet.size * 1.5, planet.size * 0.3,
                Math.PI / 6, 0, Math.PI * 2
            );
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            this.ctx.lineWidth = 3;
            this.ctx.stroke();
        }
        
        // Moons
        for (let i = 0; i < planet.moons; i++) {
            const moonAngle = (performance.now() / 2000) + (i * Math.PI * 2 / 3);
            const moonX = planet.x + Math.cos(moonAngle) * (planet.size + 15);
            const moonY = planet.y + Math.sin(moonAngle) * (planet.size + 15);
            
            this.ctx.beginPath();
            this.ctx.arc(moonX, moonY, 5, 0, Math.PI * 2);
            this.ctx.fillStyle = '#aaa';
            this.ctx.fill();
        }
        
        // Discovered indicator
        if (planet.discovered) {
            this.ctx.fillStyle = '#00ff88';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('✓', planet.x, planet.y + planet.size + 20);
        }
    }
    
    drawShip() {
        this.ctx.save();
        this.ctx.translate(this.ship.x, this.ship.y);
        
        // Calculate rotation towards target
        const dx = this.ship.targetX - this.ship.x;
        const dy = this.ship.targetY - this.ship.y;
        const angle = Math.atan2(dy, dx);
        this.ctx.rotate(angle + Math.PI / 2);
        
        // Ship body
        this.ctx.beginPath();
        this.ctx.moveTo(0, -this.ship.size);
        this.ctx.lineTo(-this.ship.size / 2, this.ship.size);
        this.ctx.lineTo(0, this.ship.size * 0.7);
        this.ctx.lineTo(this.ship.size / 2, this.ship.size);
        this.ctx.closePath();
        
        const shipGradient = this.ctx.createLinearGradient(0, -this.ship.size, 0, this.ship.size);
        shipGradient.addColorStop(0, '#4a90e2');
        shipGradient.addColorStop(1, '#357abd');
        this.ctx.fillStyle = shipGradient;
        this.ctx.fill();
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        
        // Engine glow
        this.ctx.beginPath();
        this.ctx.moveTo(-5, this.ship.size * 0.7);
        this.ctx.lineTo(0, this.ship.size + 10);
        this.ctx.lineTo(5, this.ship.size * 0.7);
        this.ctx.fillStyle = '#ff6b6b';
        this.ctx.fill();
        
        this.ctx.restore();
    }
    
    drawIndicator(planet) {
        const dx = planet.x - this.ship.x;
        const dy = planet.y - this.ship.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const indicatorDistance = 60;
        
        const ix = this.ship.x + (dx / distance) * indicatorDistance;
        const iy = this.ship.y + (dy / distance) * indicatorDistance;
        
        this.ctx.beginPath();
        this.ctx.moveTo(ix, iy);
        this.ctx.lineTo(ix - 8, iy - 16);
        this.ctx.lineTo(ix + 8, iy - 16);
        this.ctx.closePath();
        this.ctx.fillStyle = '#4a90e2';
        this.ctx.fill();
        
        this.ctx.fillStyle = '#fff';
        this.ctx.font = '10px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Planet', ix, iy + 12);
    }
    
    lightenColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return '#' + (
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
            (B < 255 ? (B < 1 ? 0 : B) : 255)
        ).toString(16).slice(1);
    }
    
    scan() {
        if (!this.isPlaying) return;
        
        if (this.nearestPlanet) {
            this.nearestPlanet.discovered = true;
            this.energy -= 5;
            this.discoveredSystems++;
            
            // Check win condition
            if (this.discoveredSystems >= this.systemsToDiscover) {
                this.endGame(true);
            }
        } else {
            this.energy -= 2; // Scan costs energy even if no planet nearby
        }
        
        this.updateUI();
    }
    
    colonize() {
        if (!this.isPlaying) return;
        
        if (this.nearestPlanet && this.nearestPlanet.discovered && !this.nearestPlanet.colonized) {
            if (this.energy >= this.nearestPlanet.energyCost) {
                this.nearestPlanet.colonized = true;
                this.energy -= this.nearestPlanet.energyCost;
                this.minerals += this.nearestPlanet.minerals;
                
                // Bonus for colonizing
                this.timeRemaining += 10;
            }
        }
        
        this.updateUI();
    }
    
    updateUI() {
        // Level
        document.getElementById('level-display').textContent = this.level;
        
        // Progress
        const progress = (this.discoveredSystems / this.systemsToDiscover) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${this.discoveredSystems}/${this.systemsToDiscover}`;
        
        // Timer
        const timerProgress = (this.timeRemaining / this.maxTime) * 100;
        const timerBar = document.getElementById('timer-bar');
        timerBar.style.width = `${timerProgress}%`;
        
        // Timer color based on time remaining
        if (this.timeRemaining / this.maxTime > 0.5) {
            timerBar.style.background = 'linear-gradient(90deg, #00ff88, #00cc66)';
        } else if (this.timeRemaining / this.maxTime > 0.25) {
            timerBar.style.background = 'linear-gradient(90deg, #ffcc00, #ff9900)';
        } else {
            timerBar.style.background = 'linear-gradient(90deg, #ff4444, #ff0000)';
        }
        
        document.getElementById('timer-text').textContent = `${Math.ceil(this.timeRemaining)}s`;
        
        // Resources
        document.getElementById('energy-display').textContent = Math.ceil(this.energy);
        document.getElementById('minerals-display').textContent = this.minerals;
        
        // Button states
        document.getElementById('btn-scan').disabled = this.energy < 2;
        document.getElementById('btn-colonize').disabled = 
            !this.nearestPlanet || 
            !this.nearestPlanet.discovered || 
            this.energy < (this.nearestPlanet?.energyCost || 100) ||
            this.nearestPlanet.colonized;
    }
    
    endGame(won) {
        this.isPlaying = false;
        cancelAnimationFrame(this.animationId);
        
        const modal = document.getElementById('modal');
        const title = document.getElementById('modal-title');
        const message = document.getElementById('modal-message');
        const stats = document.getElementById('modal-stats');
        const btn = document.getElementById('modal-btn');
        
        if (won) {
            title.textContent = '¡Nivel Completado!';
            message.textContent = '¡Has descubierto todos los sistemas!';
            this.level++;
            this.saveProgress();
            btn.textContent = 'Siguiente Nivel';
            btn.dataset.action = 'next';
        } else {
            title.textContent = 'Tiempo Agotado';
            message.textContent = 'No lograste descubrir todos los sistemas.';
            btn.textContent = 'Intentar de Nuevo';
            btn.dataset.action = 'retry';
        }
        
        stats.innerHTML = `
            <p>📡 Sistemas descubiertos: ${this.discoveredSystems}/${this.systemsToDiscover}</p>
            <p>⚡ Energía restante: ${Math.ceil(this.energy)}</p>
            <p>💎 Minerales recolectados: ${this.minerals}</p>
        `;
        
        modal.classList.remove('hidden');
    }
    
    handleModal() {
        const modal = document.getElementById('modal');
        const btn = document.getElementById('modal-btn');
        
        modal.classList.add('hidden');
        
        if (btn.dataset.action === 'next') {
            // Next level - regenerate galaxy with more planets
            this.systemsToDiscover = Math.min(3 + this.level, 8);
            this.generateGalaxy();
            this.start();
        } else {
            // Retry current level
            this.start();
        }
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new SpaceExplorer();
    game.start();
});
