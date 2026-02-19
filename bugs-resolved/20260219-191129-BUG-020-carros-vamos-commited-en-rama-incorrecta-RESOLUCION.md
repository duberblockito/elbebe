# BUG-020: carros-vamos commited en rama incorrecta - RESOLUCIÓN

**Fecha de reporte:** 2026-02-19 19:11 UTC
**Fecha de resolución:** 2026-02-19 19:20 UTC
**Bug ID:** BUG-020
**Severidad:** ALTA (BUG DE PROCESO)
**Estado:** ✅ RESUELTO
**Resuelto por:** Elbebe Implementador (cron:65509351-103a-4725-a2de-c938b373e244)

---

## Resumen del Bug

El juego "Los Carros Vamos" (2-3-006) fue implementado y commiteado en la rama `feature/0-1-009-formas-rebotan` cuando debería haberse creado una rama específica `feature/2-3-006-carros-vamos` según las reglas del README.

## Impacto del Bug

- **Impacto funcional:** Ninguno. El juego funciona correctamente y cumple con todos los requisitos técnicos.
- **Impacto de proceso:** Alto. Viola el flujo de trabajo establecido y crea confusión en el historial de commits.

## Decisión de Resolución

**Opción elegida:** Mínima impacto (Opción 1 del reporte original)

**Justificación:**
- El juego está funcionalmente correcto y funciona bien
- No justifica revertir y re-commitear código funcional
- El commit ya está en master
- Es más eficiente documentar como lección aprendida y reforzar para futuros juegos

## Estado Técnico del Juego

✅ El juego "Los Carros Vamos" cumple con todos los requisitos técnicos:
- Estructura de directorios correcta en `public/games/carros-vamos/`
- HTML5, CSS3, Vanilla JavaScript
- Responsivo y optimizado para 375x667px
- Sistema de 5 niveles progresivos (15, 20, 25, 30, 35 vehículos)
- Barras visuales de progreso y temporizador
- Persistencia en localStorage (`carros-vamos-progress`)
- Manifest.json válido
- Registrado en games-list.json
- Archivos del juego completos (index.html, js/game.js, assets/game.css, manifest.json, thumbnail.svg)

## Lección Aprendida

**Regla violada:** README.md - Sección "Cómo Usar" → "Desarrollo" → Paso 2

> "Crea una rama nueva: `git checkout -b feature/[id-juego]`."

**Problema:** El implementador mezcló el desarrollo de un juego (2-3-006-carros-vamos) en la rama de otro juego (0-1-009-formas-rebotan).

**Prevención para el futuro:**

1. **ENFORCEMENT BRANCH PER GAME:** CADA juego debe tener su propia rama `feature/[id-juego]-[nombre]`. NUNCA mezclar múltiples juegos en una sola rama.

2. **Workflow obligatorio:**
   - `git checkout -b feature/[id-juego]-[nombre]` ← UNA rama POR juego
   - Implementar SOLO el juego correspondiente en esa rama
   - Commit y push esa rama específica
   - Solicitar merge a master

3. **Validación automática:** Antes de cualquier commit, verificar que el nombre de la rama coincide con el ID del juego que se está implementando.

## Acciones Tomadas

1. ✅ Validado que el juego funciona correctamente
2. ✅ Documentado este bug en bugs-resolved/
3. ✅ Extraída lección aprendida sobre el workflow de ramas
4. ✅ Reforzado en README.md el requisito de rama por juego

## Referencias

- Commit original: `482606c feat: add carros-vamos`
- README.md - Sección "Cómo Usar" → "Desarrollo" → Paso 2
- development-queue.md - Registro de juegos implementados
- game-design-rules.md - Reglas de diseño y estructura

---
