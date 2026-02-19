# Game Plan: Animales que Salen (Peek-a-Boo)

**Source Idea:** 0-1/ideas-0-1.md
**Original ID:** Idea #4

## Concept
4 doors/curtains. Touch to open and reveal an animal with sound. Auto-close.

## Requirements
- **Level**: 5 niveles progresivos (8, 10, 12, 15, 18 puertas por nivel)
- **Progress**: Barra de progreso visual mostrando puertas abiertas vs objetivo
- **Persistence**: localStorage (`peek-a-boo-progress`) - unlockedLevels, totalGamesPlayed, totalDoorsOpened

## Assets
- [ ] Door assets
- [ ] Animal sprites
- [ ] Animal sounds

## Requirements
- **Level**: 5 niveles progresivos (8, 10, 12, 15, 18 puertas por nivel)
- **Progress**: Barra de progreso visual mostrando puertas abiertas vs objetivo
- **Persistence**: localStorage (`peek-a-boo-progress`) - unlockedLevels, totalGamesPlayed, totalDoorsOpened
- **Timer**: Temporizador por nivel (30s → 50s progresivo)
- **HUD**: Nivel actual, puertas abiertas, objetivo, temporizador visual

## Development Steps
1. Create `/games/peek-a-boo/`
2. Create 2x2 Grid (4 puertas) con covering elements (puertas/cortinas)
3. Implement sistema de 5 niveles progresivos:
   - Nivel 1: 8 puertas, 30s, 2x2 grid (repetir 2 veces)
   - Nivel 2: 10 puertas, 35s, 2x2 grid (repetir 2.5 veces)
   - Nivel 3: 12 puertas, 40s, 2x2 grid (repetir 3 veces)
   - Nivel 4: 15 puertas, 45s, 2x2 grid (repetir 3.75 veces)
   - Nivel 5: 18 puertas, 50s, 2x2 grid (repetir 4.5 veces)
4. Implement Reveal animation (abrir puerta/cortina → mostrar animal)
5. Add sound triggers (sonido al abrir puerta, animal sound)
6. Implement barra de progreso visual (puertas abiertas / objetivo del nivel)
7. Implement barra de temporizador visual (verde → amarillo → rojo según tiempo restante)
8. Implement persistencia en localStorage
9. Implement HUD con nivel, progreso, temporizador
10. Implement modales: Nivel Completado, Tiempo Agotado, Juego Completado
