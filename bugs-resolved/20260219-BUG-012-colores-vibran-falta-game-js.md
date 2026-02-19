# BUG-012: colores-vibran - Falta game.js (Juego no funcional)

**Fecha reportado:** 2026-02-19 02:55 UTC
**Juego afectado:** Colores que Vibran (colores-vibran - 0-1 Años)
**Severidad:** CRÍTICA - El juego no funciona
**Estado:** 🔴 ABIERTO

## Descripción

El juego `colores-vibran` está registrado en `games-list.json` pero NO tiene el archivo `assets/game.js` necesario para funcionar.

## Síntomas

- El archivo HTML (`public/games/colores-vibran/index.html`) referencia `<script src="assets/game.js"></script>`
- El archivo `assets/game.js` NO existe en la carpeta del juego
- El juego carga `../../js/main.js` pero no tiene lógica específica del juego
- Resultado: El juego muestra la interfaz pero NO funciona al hacer clic

## Cómo Reproducir

1. Navegar a `/games/colores-vibran/` en el sitio de producción
2. Hacer clic en "¡Empezar!"
3. **Resultado esperado:** El juego debería iniciar y responder a toques
4. **Resultado real:** Nada ocurre, la consola muestra error 404 al cargar `assets/game.js`

## Archivos Existentes

```
public/games/colores-vibran/
├── index.html ✅
├── manifest.json ✅
├── thumbnail.jpg ✅
├── thumbnail.svg ✅
├── assets/ (solo contiene assets gráficos, NO game.js) ❌
└── assets/game.js ❌ FALTANTE
```

## Solución Requerida

1. Crear el archivo `public/games/colores-vibran/assets/game.js` con:
   - Sistema de 5 niveles progresivos (5, 8, 10, 12, 15 touches)
   - Temporizador por nivel (30s → 50s progresivo)
   - Barra de progreso visual
   - Barra de temporizador visual (verde → rojo)
   - Persistencia en localStorage
   - Modales de nivel completado/tiempo agotado

2. Asegurar que el juego siga todas las reglas de `game-design-rules.md`

## Referencias

- `games-backlog/0-1/003-colores-vibran.md` - Especificación original
- `game-design-rules.md` - Reglas de diseño (especialmente Sección 7: Levels & Progression)
- Bugs similares resueltos: BUG-001, BUG-002, BUG-003, BUG-004

## Notas

- Este juego fue implementado previamente y tiene un HTML bien estructurado
- El HTML espera `assets/game.js` pero nunca fue creado
- Posible causa: El implementador olvidó crear el archivo JS
- Prioridad: ALTA - Bloquea el uso de este juego
