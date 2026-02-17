# Game Design Rules

This document outlines the standards and structure required for adding new games to the portal. Adhering to these rules ensures that all games work seamlessly within the static site architecture.

## 1. Directory Structure

Each game must be self-contained within its own directory under `/games/`.

```
/games/
  /my-new-game/           (Snake case or kebab case folder name)
    index.html            (Entry point)
    manifest.json         (Metadata)
    thumbnail.jpg         (300x300px preview image)
    /assets/              (Images, sounds, styles specific to this game)
    /js/                  (Game logic)
```

## 2. Technical Requirements

*   **Technology**: HTML5, CSS3, Vanilla JavaScript.
*   **No Frameworks**: Avoid external library dependencies like React, Vue, or Angular unless they are pre-compiled and bundled within the game folder.
*   **Static Serving**: The game must run locally without a build step.
*   **Responsiveness**: Games must be playable on Desktop, Tablet, and Mobile.
    *   Use CSS Grid/Flexbox.
    *   Touch events must be supported.

## 3. Metadata (manifest.json)

Every game must include a `manifest.json` file in its root directory. This is used by the Home Page to list the game.

```json
{
  "id": "my-new-game",
  "title": "Super Fun Adventure",
  "description": "Help the hero find the treasure in this platformer.",
  "category": "adventure",
  "author": "Game Creator Name",
  "version": "1.0.0",
  "thumbnail": "thumbnail.jpg",
  "recommended_age": "5-8"
}
```

## 4. Game Interface

*   **Entry Point**: Must be `index.html`.
*   **Navigation**: The game provided should generally run full screen or within the provided container.
*   **Home Button**: Users typically expect a way to exit. However, the site wrapper (header) will provide navigation back to the Home. Ensure your game does not hide the `nav` element if possible, or provide your own "Exit" button that links to `../../index.html`.

## 5. Performance

*   Limit initial download size.
*   Optimize images (WebP preferred).
*   Lazy load assets where possible.

## 6. Analytics

The site-wide Google Analytics tracker (`G-TRN3EYQ6H1`) is injected automatically by the common header script. Do not add your own analytics tags unless authorized.

## 7. Levels & Progression

All games must include a progression system suitable for children.

1.  **Level Structure**:
    *   Games must be divided into **levels**.
    *   Each level should last between **20 seconds and 5 minutes maximum**. Short, engaging loops are preferred to maintain attention.
2.  **Visual Feedback (Progress Bar)**:
    *   A **visual progress bar** or timer is mandatory.
    *   It must show the child in real-time how close they are to completing the level or when the time will run out.
    *   Avoid infinite gameplay loops without clear milestones.
3.  **Persistence (Save State)**:
    *   Game progress (unlocked levels, high scores) must be saved proactively.
    *   Use `localStorage` to save state so the child can resume later.
    *   Example key format: `game_id_progress` (e.g., `super-fun-adventure-progress`).

## 8. Submission Checklist

- [ ] Folder name is lowercase-kebab-cased.
- [ ] `index.html` exists and works.
- [ ] `manifest.json` is valid.
- [ ] Thumbnail image exists.
- [ ] Game works on mobile resize.
- [ ] No console errors on load.
