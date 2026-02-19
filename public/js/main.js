/**
 * El Bebe Games - Main JavaScript
 * Global functionality: Header/Footer injection, Google Analytics, Language Toggle
 */

// ============================================
// Application Version
// ============================================

/**
 * Current application version
 * This version is tracked in CHANGELOG.md and used for cache busting
 * Format: MAJOR.MINOR.PATCH (following Semantic Versioning)
 *
 * When updating this version:
 * 1. Update CHANGELOG.md with release notes
 * 2. Update games-list.json version field
 * 3. Deploy to production to force cache refresh on all devices
 */
const SITE_VERSION = '1.15.0';

/**
 * Get current application version
 * @returns {string} Current version in MAJOR.MINOR.PATCH format
 */
function getAppVersion() {
  return SITE_VERSION;
}

/**
 * Build URL with cache busting parameter
 * Adds version parameter to force browser to fetch fresh content
 *
 * @param {string} baseUrl - Base URL without parameters
 * @param {string} version - Version parameter (defaults to current app version)
 * @returns {string} URL with version parameter
 *
 * @example
 * buildUrlWithVersion('games/pinta-nubes/')
 * // Returns: 'games/pinta-nubes/?v=1.5.0'
 *
 * @example
 * buildUrlWithVersion('css/style.css', '1.4.0')
 * // Returns: 'css/style.css?v=1.4.0'
 */
function buildUrlWithVersion(baseUrl, version = SITE_VERSION) {
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}v=${version}`;
}

// ============================================
// Google Analytics Configuration
// ============================================
const GA_TRACKING_ID = 'G-TRN3EYQ6H1';

/**
 * Initialize Google Analytics
 */
function initGoogleAnalytics() {
  // Inject gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    dataLayer.push(arguments);
  };
  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID);
}

// ============================================
// Language / Bilingual Support
// ============================================
const DEFAULT_LANG = 'es';
const SUPPORTED_LANGUAGES = ['es', 'en'];

/**
 * Language translations object
 */
const translations = {
  es: {
    siteTitle: 'elbebe: Juegos para Susana y Julieta',
    home: 'Inicio',
    about: 'Sobre Nosotros',
    terms: 'Términos',
    privacy: 'Privacidad',
    heroTitle: '¡Juegos Divertidos para Pequeños!',
    heroSubtitle: 'Descubre juegos coloridos y educativos diseñados especialmente para niños de 0 a 15 años',
    selectAge: 'Selecciona Edad:',
    allAges: 'Todas',
    ageGroups: {
      '0-1': '0-1 años',
      '1-2': '1-2 años',
      '2-3': '2-3 años',
      '3-5': '3-5 años',
      '5-8': '5-8 años',
      '8-15': '8-15 años'
    },
    play: '¡Jugar!',
    noGames: 'No hay juegos disponibles en esta categoría',
    loading: 'Cargando juegos...',
    copyright: '© 2025 El Bebe Games. Todos los derechos reservados.',
    madeWithLove: 'Hecho con '
  },
  en: {
    siteTitle: 'elbebe: Games for Susana and Julieta',
    home: 'Home',
    about: 'About',
    terms: 'Terms',
    privacy: 'Privacy',
    heroTitle: 'Fun Games for Little Ones!',
    heroSubtitle: 'Discover colorful and educational games designed especially for kids aged 0 to 15',
    selectAge: 'Select Age:',
    allAges: 'All',
    ageGroups: {
      '0-1': '0-1 years',
      '1-2': '1-2 years',
      '2-3': '2-3 years',
      '3-5': '3-5 years',
      '5-8': '5-8 years',
      '8-15': '8-15 years'
    },
    play: 'Play!',
    noGames: 'No games available in this category',
    loading: 'Loading games...',
    copyright: '© 2025 elbebe. All rights reserved.',
    madeWithLove: 'Made with '
  }
};

/**
 * Get current language from localStorage or default
 */
function getCurrentLanguage() {
  const saved = localStorage.getItem('elbebe-lang');
  if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
    return saved;
  }
  return DEFAULT_LANG;
}

/**
 * Set current language
 */
function setLanguage(lang) {
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    console.warn(`Language "${lang}" not supported, using default`);
    lang = DEFAULT_LANG;
  }
  localStorage.setItem('elbebe-lang', lang);
  updatePageLanguage(lang);
  updateLanguageToggle(lang);
}

/**
 * Toggle between languages
 */
function toggleLanguage() {
  const current = getCurrentLanguage();
  const newLang = current === 'es' ? 'en' : 'es';
  setLanguage(newLang);
}

/**
 * Helper to get nested object value by string key
 */
function getNestedValue(obj, key) {
  return key.split('.').reduce((o, i) => (o ? o[i] : null), obj);
}

/**
 * Update page text based on language
 */
function updatePageLanguage(lang) {
  const t = translations[lang];

  // Update elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    // Try direct key first, then nested
    const text = t[key] || getNestedValue(t, key);
    
    if (text) {
      el.textContent = text;
    }
  });

  // Update page title
  if (t.siteTitle) {
    document.title = t.siteTitle;
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;

// Update language-specific content blocks
  document.querySelectorAll('.lang-content').forEach(el => {
    if (el.getAttribute('lang') === lang) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });

  // Dispatch custom event for other scripts to listen
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/**
 * Update language toggle button state
 */
function updateLanguageToggle(lang) {
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.textContent = lang === 'es' ? 'EN' : 'ES';
  }
}

/**
 * Get translation for a key
 */
function t(key, lang = null) {
  const language = lang || getCurrentLanguage();
  return translations[language]?.[key] || translations[DEFAULT_LANG][key] || key;
}

// ============================================
// Header Component
// ============================================

/**
 * Render the site header
 */
function renderHeader() {
  const lang = getCurrentLanguage();
  const tText = translations[lang];

  const headerHTML = `
    <header class="site-header" role="banner">
      <div class="header-content">
        <a href="../index.html" class="logo">
          <img src="/assets/images/logo-elbebe-co.png" alt="El Bebe Games" class="logo-img">
        </a>
        <nav class="header-nav" role="navigation" aria-label="Main navigation">
          <a href="../index.html" class="header-link" data-i18n="home">${tText.home}</a>
          <a href="../about/index.html" class="header-link" data-i18n="about">${tText.about}</a>
          <button
            id="langToggle"
            class="lang-toggle"
            type="button"
            aria-label="Toggle language"
          >
            ${lang === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>
      </div>
    </header>
    
    <!-- Brand Bar (Title Section) -->
    <div class="brand-bar">
      <div class="brand-content">
        <h1 class="brand-title" data-i18n="siteTitle">${tText.siteTitle}</h1>
      </div>
    </div>
  `;

  // Insert header at the beginning of body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Add event listener to language toggle
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
}

// ============================================
// Footer Component
// ============================================

/**
 * Render the site footer
 */
function renderFooter() {
  const lang = getCurrentLanguage();
  const tText = translations[lang];

  const footerHTML = `
    <footer class="site-footer" role="contentinfo">
      <div class="footer-content">
        <div class="footer-links">
          <a href="../legal/terms.html" class="footer-link" data-i18n="terms">${tText.terms}</a>
          <a href="../legal/privacy.html" class="footer-link" data-i18n="privacy">${tText.privacy}</a>
          <a href="../about/index.html" class="footer-link" data-i18n="about">${tText.about}</a>
        </div>
        <p class="footer-copyright">
          <span data-i18n="copyright">${tText.copyright}</span>
          <br>
          <span class="site-version" style="font-size: 0.8rem; opacity: 0.7;">v${SITE_VERSION}</span>
        </p>
      </div>
    </footer>
  `;

  // Append footer to body
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// ============================================
// Main Initialization
// ============================================

/**
 * Load all shared components
 */
function loadSharedComponents() {
  // Initialize Google Analytics
  initGoogleAnalytics();

  // Render header and footer
  renderHeader();
  renderFooter();

  // Set initial language state
  const currentLang = getCurrentLanguage();
  updateLanguageToggle(currentLang);
  updatePageLanguage(currentLang);

  // Make translation function available globally
  window.t = t;
  window.getCurrentLanguage = getCurrentLanguage;
}

// ============================================
// Export to global scope
// ============================================

// Make version functions available globally
window.SITE_VERSION = SITE_VERSION;
window.getAppVersion = getAppVersion;
window.buildUrlWithVersion = buildUrlWithVersion;

// Log version on load for debugging
console.log(`%c🎮 El Bebe Games v${SITE_VERSION}`, 'color: #6C5CE7; font-weight: bold; font-size: 14px;');

/**
 * Initialize when DOM is ready
 */
function init() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSharedComponents);
  } else {
    loadSharedComponents();
  }
}

// Run initialization
init();
