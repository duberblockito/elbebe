# Implementation Plan - Kids' Game Portal

This plan outlines the creation of a static, maintainable HTML/JS game portal.

## 1. Project Structure

```text
/public
  index.html            (Home page - Dynamic Game Menu)
  /css/
    style.css           (Global styles, typography, layout)
    animations.css      (Fun animations for kids)
  /js/
    main.js             (Global logic: Header/Footer injection, GA tracking, Language Toggle)
    home.js             (Logic to load game manifests and build the grid)
    game-loader.js      (Handles launching games)
  /games/               (Directory where all games live)
    /example-game/
  /legal/
    terms.html
    privacy.html
  /about/
    index.html
  /assets/
    /images/            (Site logos, icons, backgrounds)
    /sounds/            (UI sounds)
```

## 2. Core Components

### A. Navigation & Layout (Global)

Since we cannot use server-side rendering or frameworks, we will use a simple client-side injection pattern for consistency.

1.  **`main.js`**:
    *   **Bilingual Support**: Global state for Language (ES/EN). Toggles text elements.
    *   Function `loadSharedComponents()`:
    *   Fetches content for Header (Logo, Home Link, Language Toggle).
    *   Fetches content for Footer (Links to Legal, Credits).
    *   Injects Google Analytics (`G-TRN3EYQ6H1`) into the `<head>`.
2.  **`style.css`**:
    *   Bright, kid-friendly colors.
    *   Large buttons and click targets (Mobile First).
    *   "Comic Neue" or similar playful, readable font.

### B. Home Page (`index.html`)

*   **Design**: Mobile-first, graphic, and intuitive.
*   **Feature**: "Featured Game" hero section.
*   **Dynamic Game Selector (`home.js`)**:
    *   Proprietary registry file `games-list.json` containing metadata for all games.
    *   **Filtering**: Filter by Age Group (0-1, 1-2, 2-3, etc.).
    *   **Rendering**: Cards with large Images, Title, and "Play" Button.

### C. Game Design Integration

*   See `game-design-rules.md` for specific requirements for individual games.
*   New games are added by dropping a folder into `/games/` and updating `games-list.json`.

## 3. Quality Assurance & Testing

*   **Test Plan**: See `test-plan.md` for detailed testing protocols.
*   **Process**: Testing is integrated into the creation of every game.
*   **Key Metrics**: Performance (60fps), Accessibility (Touch targets), Discovery (Start-up time).

## 4. Google Analytics

*   **ID**: `G-TRN3EYQ6H1`
*   **Implementation**:
    *   Added to `main.js` so it executes on every page.
    *   Standard `gtag.js` implementation.

## 5. Development Steps (Execution Phase)

1.  Set up folder structure (`public/`).
2.  Create `style.css` and `main.js` (GA + Header/Footer + Language Logic).
3.  Create `index.html` skeleton with Dynamic Selector logic.
4.  Create `game-design-rules.md` (Done).
5.  Create `test-plan.md` (Done).
6.  Create a "Template Game" to verify the structure.
7.  Create Legal/About pages.

## 6. Verification Plan

*   **Verify Analytics**: Check network tab for requests to `google-analytics.com`.
*   **Verify Navigation**: Click links between Home, Games, and Footer pages.
*   **Verify Mobile**: Resizing browser window to < 500px width.
*   **Verify Game Loading**: Ensure `/games/example/index.html` loads correctly.
*   **Verify Language**: Toggle switches text between Spanish and English.
