# Game Design Rules

This document outlines the standards and structure required for adding new games to the portal. Adhering to these rules ensures that all games work seamlessly within the static site architecture.

## 1. Directory Structure

Each game must be self-contained within its own directory under `/public/games/`.

**CRITICAL:** Always implement games in `/public/games/` directly. This is the deployment directory.

```
/public/games/
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
    *   **CRITICAL**: Must look perfect on **375x667** (iPhone SE resolution).
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

## 4. Game Registration (CRITICAL)

**IMPORTANT:** Simply creating the folder is NOT enough. You must register the game in the central registry.

1.  Open `public/js/games-list.json`.
2.  Add a new entry to the `games` array with the metadata (same as manifest).
3.  **Validate JSON**: Ensure comma separation is correct.

Example:
```json
{
  "games": [
    { ... existing games ... },
    {
      "id": "my-new-game",
      "title": "Super Fun Adventure",
      ...
    }
  ]
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
- [ ] **Registered in `public/js/games-list.json`**.
- [ ] Thumbnail image exists.
- [ ] Game works on mobile resize.
- [ ] No console errors on load.
- [ ] No console errors on load.
- [ ] `CHANGELOG.md` updated with the new game release.
- [ ] `SITE_VERSION` updated in `public/js/main.js`.

## 9. Definition of Done (Workflow)

Once a game is fully implemented and tested:
1.  **Register Game**: Add the game entry to `public/js/games-list.json`.
2.  **Move Backlog File**: The original game plan file (e.g., `games-backlog/0-1-001-burbujas.md`) MUST be moved to the `/games-done/` directory.
3.  **Update Master Plan**: Mark the game as "✅ Done" in `master-game-plan.md`.
4.  **Update Queue**: Increment the count in `development-queue.md` and check off the game.
5.  **Update Changelog & Version**:
    *   Add an entry to `CHANGELOG.md` (e.g., "Added game [Name] to [Age Group]").
    *   **CRITICAL**: Update the `SITE_VERSION` constant in `public/js/main.js` to match the new version in the changelog.


## 10. Bug Management Workflow (CRITICAL)

### 10.1 Bug Reporting

When a bug is reported in a game:

1. **Create Bug File**: Create a new bug report file in `/bugs/` using `template.md`:
   - Naming convention: `BUG-XXX-game-name-brief-description.md`
   - XXX: Sequential bug number (001, 002, 003...)
   - Example: `BUG-002-pinta-nubes-sin-niveles-timer-progresion.md`

2. **Update Status**: Set initial status in bug file to `[Reported]`

3. **Block Next Game**: Mark the game as `[Blocked]` in `development-queue.md`

### 10.2 Bug Fixing Process

When fixing a bug:

1. **Create Feature Branch**: Create a branch from `master` for bug fixes:
   ```bash
   git checkout master
   git pull origin master
   git checkout -b fix/BUG-XXX-game-name
   ```

2. **Implement Fix**: Fix the bug in the feature branch and test thoroughly.

3. **Update Bug File**: Update the status in `/bugs/BUG-XXX-...md` to `[Fixed]`

4. **Commit & Push**: Commit the fix to the feature branch:
   ```bash
   git add .
   git commit -m "fix: BUG-XXX - [brief description]"
   git push origin fix/BUG-XXX-game-name
   ```

5. **Create PR or Merge**: After validation, merge to `master`:
   ```bash
   git checkout master
   git merge fix/BUG-XXX-game-name
   git push origin master
   ```

6. **Move Bug File to Resolved**: Once the fix is merged to `master`:
   - Move bug file from `/bugs/` to `/bugs-resolved/`
   - Update status to `[Fixed & Committed]`

### 10.3 Rule: Bugs First (CRITICAL)

**NO SE PUEDE INICIAR UN NUEVO JUEGO HASTA QUE TODOS LOS BUGS ESTÉN RESUELTOS Y COMMITADOS**

1. **Check `/bugs/` Directory**: Before starting a new game:
   ```bash
   ls -la bugs/
   ```

2. **Validation**:
   - If `/bugs/` has files: **STOP** - Fix bugs first
   - If `/bugs/` is empty or all bugs are in `/bugs-resolved/`: **PROCEED** - Start new game

3. **Priority Order**: Fix bugs in alphabetical order (BUG-001, BUG-002, BUG-003...)

### 10.4 Branch Naming Convention

**Para Juegos Nuevos:**
- Format: `feature/game-name` or `feature/game-name-age-group`
- Example: `feature/caja-sonidos` or `feature/caja-sonidos-1-2`

**Para Bugs:**
- Format: `fix/BUG-XXX-game-name`
- Example: `fix/BUG-002-pinta-nubes`

**SIEMPRE:** Crear la rama desde `master`:
```bash
git checkout master
git pull origin master
git checkout -b [nombre-rama]
```


### 10.5 Complete Workflow Example

**Escenario 1: Reportar Bug**
\`\`\`bash
# 1. Usuario reporta bug en Pinta las Nubes
# 2. El sistema crea /bugs/BUG-002-pinta-nubes-sin-niveles-timer-progresion.md
# 3. Marcar juego como [Blocked] en development-queue.md
\`\`\`

**Escenario 2: Corregir Bug**
\`\`\`bash
# 1. Crear rama de fix desde master
git checkout master
git pull origin master
git checkout -b fix/BUG-002-pinta-nubes

# 2. Implementar la corrección
# (edit game.js, game.css, index.html)

# 3. Actualizar estado del bug
# Editar /bugs/BUG-002-pinta-nubes-sin-niveles-timer-progresion.md
# Cambiar [Reported] → [Fixed]

# 4. Commit y push
git add .
git commit -m "fix: BUG-002 - Agregados niveles, temporizador y progresión"
git push origin fix/BUG-002-pinta-nubes

# 5. Merge a master
git checkout master
git merge fix/BUG-002-pinta-nubes
git push origin master

# 6. Mover bug a resolved
mv bugs/BUG-002-pinta-nubes-sin-niveles-timer-progresion.md bugs-resolved/
# Actualizar status a [Fixed & Committed]
\`\`\`

**Escenario 3: Iniciar Juego Nuevo (después de resolver bugs)**
\`\`\`bash
# 1. Verificar que bugs/ está vacío
ls -la bugs/

# 2. Verificar en development-queue.md que no hay juegos bloqueados
# Buscar "[Blocked]" - si no hay, PROCEED

# 3. Crear rama de feature desde master
git checkout master
git pull origin master
git checkout -b feature/caja-sonidos

# 4. Implementar juego
# (crear archivos del juego)

# 5. Testing y validación
# (probar juego en móvil y desktop)

# 6. Completar checklist de game-design-rules.md Sección 9
# Registrar juego, mover backlog, actualizar queue, etc.

# 7. Commit y push
git add .
git commit -m "feat: add 001-caja-sonidos - Caja de Sonidos (1-2 años)"
git push origin feature/caja-sonidos

# 8. Merge a master
git checkout master
git merge feature/caja-sonidos
git push origin master
\`\`\`
