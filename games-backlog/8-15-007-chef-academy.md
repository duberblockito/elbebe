# Game Plan: Chef Academy: Culinary Adventure 👨‍🍳

**Source Idea:** 8-15/ideas-8-15.md
**Original ID:** Idea #7

## Concept
Juego de cocina educativo donde los jugadores aprenden a cocinar recetas reales, dominan técnicas culinarias y administran su propio restaurante virtual. Combina gameplay tipo Cooking Mama con lecciones de nutrición, ingredientes y seguridad en la cocina.

## Requirements
- **Level**: 8 niveles progresivos de recetas (desayuno simple → platos gourmet)
- **Progress**: Niveles completados, recetas desbloqueadas, estrellas por receta
- **Persistence**: localStorage con progreso del chef (chef-academy-progress)

## Assets
- [ ] Ingredientes: Vegetales, carnes, lácteos, especias (usar emojis o CSS shapes)
- [ ] Herramientas: Cuchillo, sartén, bowl, espátula, plato (SVG icons)
- [ ] Mini-games UI: Áreas de corte, mezcla, cocción, decoración
- [ ] Animaciones de cocina: Chopping, sizzling, mixing, plating
- [ ] Sonidos: Cortar, freír, mezclar, completar receta (Web Audio API)

## Development Steps
1. Create `/public/games/chef-academy/`
2. Implement isometric kitchen view con canvas
3. Crear 8 niveles de recetas progresivas:
   - Nivel 1: Huevos revueltos (simple, 3 pasos, 30s)
   - Nivel 2: Ensalada César (5 pasos, 40s)
   - Nivel 3: Pasta Carbonara (7 pasos, 50s)
   - Nivel 4: Pizza Margherita (9 pasos, 60s)
   - Nivel 5: Salmón al horno (11 pasos, 70s)
   - Nivel 6: Risotto de Setas (13 pasos, 80s)
   - Nivel 7: Paella (15 pasos, 90s)
   - Nivel 8: Soufflé de Chocolate (17 pasos, 100s)
4. Mini-games por paso de receta:
   - Picar: Tap rápido en vegetales
   - Mezclar: Shake del dispositivo o circular gesture
   - Cocinar: Control de temperatura (slider) y tiempo
   - Decorar: Arrastrar ingredientes al plato
5. Barra de progreso visual (pasos completados vs total)
6. Temporizador visual con cambios de color (verde → amarillo → rojo)
7. Sistema de estrellas (1-3 estrellas por receta según tiempo y precisión)
8. Modales: Nivel Completado, Tiempo Agotado, Juego Completado
9. Voice hints con Web Speech API (opcional, fallback a texto)
10. Responsivo para móviles (375x667px)
11. Persistencia en localStorage

## Game Flow
1. **Pantalla Inicio**: Título, avatar de chef, botón "Jugar"
2. **Selección de Receta**: Grid de 8 niveles (bloqueados hasta completar anterior)
3. **Preparación**: Secuencia de mini-games para cada paso
4. **Plating**: Decoración del plato final
5. **Resultado**: Estrellas ganadas, tiempo, experiencia
6. **Nivel Completado**: Modal con estadísticas, botón "Siguiente Nivel"
7. **Juego Completo**: Modal final con todas las recetas desbloqueadas

## Technical Notes
- Usar HTML5 Canvas para renderizado de cocina y mini-games
- Vanilla JavaScript (sin frameworks)
- CSS3 con animations para feedback visual
- Web Audio API para sonidos de cocina (síntesis)
- localStorage para persistencia
- Responsivo con CSS Grid/Flexbox
- No external dependencies (single file game approach)
