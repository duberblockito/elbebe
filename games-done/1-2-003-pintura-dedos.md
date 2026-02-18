# Game Plan: Pintura con Dedos

**Source Idea:** 1-2/ideas-1-2.md
**Original ID:** Idea #3

## Concept
Free drawing canvas. Select color and paint with finger. "Clean" button.

## Requirements
- **Level**: Sistema de 5 niveles de desafíos creativos.
  - Nivel 1: Pintar 5 áreas del lienzo con 3 colores diferentes (45s)
  - Nivel 2: Pintar 8 áreas del lienzo con 4 colores diferentes (60s)
  - Nivel 3: Pintar 10 áreas del lienzo usando todos los colores (75s)
  - Nivel 4: Pintar 12 áreas con colores en orden del arcoíris (90s)
  - Nivel 5: Pintar 15 áreas libremente con cualquier combinación (105s)

- **Progress**: Barra de progreso visual mostrando áreas pintadas vs objetivo del nivel.

- **Persistence**: `localStorage` con `pintura-dedos-progress` guardando:
  - unlockedLevels: Niveles desbloqueados
  - totalDrawings: Total de dibujos creados
  - totalPaintedAreas: Total de áreas pintadas

## Assets
- [ ] UI Icons (Brush, Eraser/Clean, Colors)
- [ ] Sound effects (Squish, Swoosh)

## Development Steps
1. Create `/games/pintura-dedos/`
2. Canvas drawing context setup
3. Touch move path smoothing
4. Color palette UI
