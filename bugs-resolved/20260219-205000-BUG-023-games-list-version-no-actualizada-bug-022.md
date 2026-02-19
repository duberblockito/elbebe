# BUG-023: games-list.json version field no actualizada tras corrección de BUG-022

**Fecha de reporte:** 2026-02-19 20:50 UTC
**Bug ID:** BUG-023
**Severidad:** MEDIA
**Estado:** [Fixed]
**Reportado por:** QA Agent (cron:5cdbdb2f-d27b-4632-90ff-739f8f44e915)

---

## Descripción del Bug

Tras la corrección de BUG-022 (SITE_VERSION no actualizada de 1.36.0 a 1.38.0), el implementador actualizó `public/js/main.js` con SITE_VERSION='1.38.1' y CHANGELOG.md con v1.38.1, PERO NO actualizó el campo `version` en `public/js/games-list.json`, que sigue en "1.36.0".

Esto es una violación de las reglas documentadas en `public/js/main.js` (líneas 20-26):

```javascript
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
```

**Regla violada:**
- "When updating this version: 2. Update games-list.json version field"

## Detalles

**Ubicación del problema:**
- Archivo: `/public/js/games-list.json`
- Línea 2: `"version": "1.36.0"`

**Versión correcta según CHANGELOG.md y main.js:**
- Última versión: `1.38.1` - 2026-02-19 20:41 UTC
- Bug corregido: BUG-022 - SITE_VERSION actualizada
- CHANGELOG.md: v1.38.1 registrada
- main.js: SITE_VERSION = '1.38.1'
- games-list.json: version = "1.36.0" ❌ (INCORRECTO)

**Commits relacionados:**
- 6cacafb: "fix: update SITE_VERSION to 1.38.0" - Actualizó main.js, PERO NO games-list.json
- 779e9ee: "chore: bump version to 1.38.1 for BUG-022 fix" - Actualizó CHANGELOG.md y main.js, PERO NO games-list.json
- bdeb784: "chore: move BUG-022 to bugs-resolved/" - Movió el bug a bugs-resolved

**Impacto:**
- Bajo/Medio. El sitio funciona correctamente.
- games-list.json es leído por home.js para mostrar información de juegos
- El campo `version` en games-list.json debería estar sincronizado con SITE_VERSION
- Puede causar inconsistencias en el futuro si se usa games-list.json.version para cache busting o version tracking
- Es un bug de **proceso** que indica falta de atención al detail de las reglas del README

## Reproducción

1. Abrir `/public/js/main.js` - Verificar que SITE_VERSION es '1.38.1'
2. Abrir `/public/js/games-list.json` - Verificar que version es "1.36.0"
3. Comparar ambos valores - Son inconsistentes

## Pasos para Corregir

1. Editar `/public/js/games-list.json`
2. Cambiar la línea 2 de:
   ```json
   "version": "1.36.0",
   ```
   a:
   ```json
   "version": "1.38.1",
   ```
3. Verificar que CHANGELOG.md y main.js ya están en 1.38.1
4. Commit el cambio con mensaje: `fix: update games-list.json version to 1.38.1 per main.js rules`
5. Mover este bug (BUG-023) a bugs-resolved/

## Referencias

- README.md - Prompt para agentes (menciona games-list.json versión)
- public/js/main.js - Líneas 20-26 (reglas de actualización de versión)
- CHANGELOG.md - v1.38.1 - 2026-02-19 20:41 UTC
- public/js/games-list.json - Línea 2: version field
- development-queue.md - BUG-022 corregido y movido a bugs-resolved

---

## Notas

- Este bug fue detectado durante validación QA del commit bdeb784 (BUG-022 movido a bugs-resolved)
- El implementador actualizó correctamente SITE_VERSION y CHANGELOG.md, pero olvidó games-list.json
- Este es el tercer bug consecutivo relacionado con versiones (BUG-008, BUG-015, BUG-022, ahora BUG-023)
- Se recomienda agregar un checklist automático o script que verifique la consistencia de versiones
- El bug no bloquea desarrollo, pero debe corregirse para mantener consistencia

---
