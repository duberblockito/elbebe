/**
 * El Bebe Games - Home Page JavaScript
 * Dynamic game loading, filtering, and rendering
 */

// ============================================
// Game State
// ============================================
let allGames = [];
let filteredGames = [];
let currentAgeFilter = 'all';

// ============================================
// Load Games from Registry
// ============================================

/**
 * Fetch and parse the games list JSON
 */
async function loadGamesList() {
  try {
    const response = await fetch('js/games-list.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    allGames = data.games || [];
    filteredGames = [...allGames];
    return allGames;
  } catch (error) {
    console.error('Error loading games list:', error);
    showError();
    return [];
  }
}

// ============================================
// Render Games
// ============================================

/**
 * Create a game card HTML element
 */
function createGameCard(game) {
  const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'es';
  const playText = lang === 'es' ? '¡Jugar!' : 'Play!';

  const card = document.createElement('article');
  card.className = 'game-card animate-pop-in stagger-' + (Math.floor(Math.random() * 5) + 1);
  card.setAttribute('data-game-id', game.id);
  card.setAttribute('data-age', game.recommended_age);

  // Add cache busting to thumbnail
  const thumbnailPath = window.buildUrlWithVersion
    ? window.buildUrlWithVersion(`games/${game.id}/${game.thumbnail}`)
    : `games/${game.id}/${game.thumbnail}`;
  const gamePath = `games/${game.id}/`;

  card.innerHTML = `
    <img
      src="${thumbnailPath}"
      alt="${game.title}"
      class="game-thumbnail"
      loading="lazy"
      onerror="this.src='assets/images/placeholder-game.png'"
    />
    <div class="game-info">
      <h3 class="game-title">${game.title}</h3>
      <p class="game-description">${game.description}</p>
      <div class="game-meta">
        <span class="game-age">${game.recommended_age}</span>
        <span class="game-category">${game.category}</span>
      </div>
      <button
        class="play-btn"
        onclick="launchGame('${game.id}')"
        aria-label="Play ${game.title}"
      >
        ${playText}
      </button>
    </div>
  `;

  return card;
}

/**
 * Render all games or filtered games to the grid
 */
function renderGames(games = filteredGames) {
  const grid = document.getElementById('gamesGrid');
  const loading = document.getElementById('gamesLoading');

  // Hide loading
  if (loading) {
    loading.style.display = 'none';
  }

  // Clear existing games
  if (grid) {
    grid.innerHTML = '';

    if (games.length === 0) {
      showNoGames();
      return;
    }

    // Create and append game cards
    games.forEach(game => {
      const card = createGameCard(game);
      grid.appendChild(card);
    });
  }
}

/**
 * Show loading state
 */
function showLoading() {
  const grid = document.getElementById('gamesGrid');
  const loading = document.getElementById('gamesLoading');

  if (grid) {
    grid.innerHTML = '';
  }

  if (loading) {
    loading.style.display = 'flex';
    loading.innerHTML = '<div class="loading-spinner"></div>';
  }
}

/**
 * Show no games message
 */
function showNoGames() {
  const grid = document.getElementById('gamesGrid');
  if (grid) {
    const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'es';
    const message = lang === 'es'
      ? 'No hay juegos disponibles en esta categoría'
      : 'No games available in this category';

    grid.innerHTML = `
      <div class="no-games">
        <p>${message}</p>
        <span class="animate-float" style="font-size: 3rem;">🎮</span>
      </div>
    `;
  }
}

/**
 * Show error message
 */
function showError() {
  const grid = document.getElementById('gamesGrid');
  const loading = document.getElementById('gamesLoading');

  if (loading) {
    loading.style.display = 'none';
  }

  if (grid) {
    const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'es';
    const message = lang === 'es'
      ? 'Error al cargar los juegos. Por favor, recarga la página.'
      : 'Error loading games. Please refresh the page.';

    grid.innerHTML = `
      <div class="no-games">
        <p style="color: var(--color-primary);">${message}</p>
      </div>
    `;
  }
}

// ============================================
// Filtering
// ============================================

/**
 * Parse age group from filter button
 */
function parseAgeGroup(ageString) {
  const ageMap = {
    'all': 'all',
    '0-1': '0-1',
    '1-2': '1-2',
    '2-3': '2-3',
    '3-5': '3-5',
    '5-8': '5-8',
    '8-15': '8-15'
  };
  return ageMap[ageString] || 'all';
}

/**
 * Filter games by age group
 */
function filterGamesByAge(ageGroup) {
  currentAgeFilter = ageGroup;

  if (ageGroup === 'all') {
    filteredGames = [...allGames];
  } else {
    filteredGames = allGames.filter(game => {
      const gameAge = game.recommended_age || '';
      return gameAge.includes(ageGroup);
    });
  }

  renderGames(filteredGames);
  updateFilterButtons(ageGroup);

  // Track filter usage
  if (window.gtag) {
    gtag('event', 'filter_games', {
      'age_group': ageGroup,
      'result_count': filteredGames.length
    });
  }
}

/**
 * Update filter button active states
 */
function updateFilterButtons(activeAge) {
  const buttons = document.querySelectorAll('.age-filter-btn');
  buttons.forEach(btn => {
    const btnAge = btn.getAttribute('data-age');
    if (btnAge === activeAge) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * Setup filter button event listeners
 */
function setupFilters() {
  const buttons = document.querySelectorAll('.age-filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const ageGroup = btn.getAttribute('data-age');
      filterGamesByAge(ageGroup);
    });
  });
}

// ============================================
// Game Loading
// ============================================

/**
 * Launch a game
 */
function launchGame(gameId) {
  // Track game launch
  if (window.gtag) {
    gtag('event', 'game_launch', {
      'game_id': gameId
    });
  }

  // Navigate to game with cache busting
  const baseUrl = `games/${gameId}/`;
  const gameUrl = window.buildUrlWithVersion ? window.buildUrlWithVersion(baseUrl) : baseUrl;
  window.location.href = gameUrl;
}

// Make launchGame available globally for inline onclick
window.launchGame = launchGame;

// ============================================
// Featured Game
// ============================================

/**
 * Set up the featured game hero section
 */
function setupFeaturedGame() {
  if (allGames.length === 0) return;

  // Pick a random game to feature, or the first one
  const featuredGame = allGames[0];
  const hero = document.getElementById('hero');

  if (hero && featuredGame) {
    const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'es';
    const playText = lang === 'es' ? '¡Jugar Ahora!' : 'Play Now!';

    hero.innerHTML = `
      <div class="hero-content">
        <span class="animate-bubble-float" style="font-size: 4rem; display: inline-block;">⭐</span>
        <h2 class="hero-title animate-pop-in" style="animation-delay: 0.2s;">
          ${featuredGame.title}
        </h2>
        <p class="hero-subtitle animate-pop-in" style="animation-delay: 0.3s;">
          ${featuredGame.description}
        </p>
        <button
          class="play-btn animate-pop-in"
          style="animation-delay: 0.4s; max-width: 200px; margin: 0 auto;"
          onclick="launchGame('${featuredGame.id}')"
        >
          ${playText}
        </button>
      </div>
    `;
  }
}

// ============================================
// Language Change Handler
// ============================================

/**
 * Update page content when language changes
 */
function handleLanguageChange(event) {
  const { lang } = event.detail;

  // Re-render games to update button text
  renderGames(filteredGames);

  // Update hero if it exists
  setupFeaturedGame();
}

// ============================================
// Initialization
// ============================================

/**
 * Initialize the home page
 */
async function initHomePage() {
  showLoading();

  // Load games list
  await loadGamesList();

  // Setup filters
  setupFilters();

  // Render games
  renderGames();

  // Setup featured game
  setupFeaturedGame();

  // Listen for language changes
  window.addEventListener('languageChanged', handleLanguageChange);

  // Track page view
  if (window.gtag) {
    gtag('event', 'page_view', {
      'page_title': 'Home',
      'page_path': '/index.html'
    });
  }
}

/**
 * Start initialization when DOM is ready
 */
function init() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomePage);
  } else {
    initHomePage();
  }
}

// Run initialization
init();
