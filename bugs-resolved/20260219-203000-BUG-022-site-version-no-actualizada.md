# BUG-022: SITE_VERSION no actualizada de 1.36.0 a 1.38.0

**Fecha de reporte:** 2026-02-19 20:30 UTC
**Bug ID:** BUG-022
**Severidad:** MEDIA
**Estado:** [Fixed]
**Reportado por:** QA Agent (cron:5cdbdb2f-d27b-4632-90ff-739f8f44e915)

---

## Descripción del Bug

La constante `SITE_VERSION` en `/public/js/main.js` está configurada como `1.36.0`, pero según el `CHANGELOG.md` la versión más reciente debería ser `1.38.0` (último juego implementado: Space Explorer: Galaxy Mission).

## Detalles

**Ubicación del problema:**
- Archivo: `/public/js/main.js`
- Línea 20: `const SITE_VERSION = '1.36.0';`

**Versión correcta según CHANGELOG.md:**
- Última versión: `1.38.0` - 2026-02-19 20:00 UTC
- Último juego: Space Explorer: Galaxy Mission
- Bug fix incluido: BUG-021 (formas-rebotan y viste-clima sin rama feature/)

**Impacto:**
- Bajo. El sitio funciona correctamente.
- El número de versión mostrado en el footer es incorrecto.
- Puede causar confusión sobre qué versión está en producción.

## Reproducción

1. Abrir el sitio en cualquier navegador
2. Ver el footer de la página
3. El número de versión muestra "v1.36.0" en lugar de "v1.38.0"

## Pasos para Corregir

1. Editar `/public/js/main.js`
2. Cambiar la línea 20 de:
   ```javascript
   const SITE_VERSION = '1.36.0';
   ```
   a:
   ```javascript
   const SITE_VERSION = '1.38.0';
   ```
3. Verificar que la versión se muestra correctamente en el footer del sitio
4. Commit el cambio con mensaje: `fix: update SITE_VERSION to 1.38.0`

## Referencias

- CHANGELOG.md - Última versión: v1.38.0
- development-queue.md - Último juego: Space Explorer (8-15-006)
- public/js/main.js - Línea 20: SITE_VERSION

---

## Notas

- Este bug fue detectado durante validación QA del commit 482606c (carros-vamos)
- El bug no bloquea desarrollo, pero debe corregirse para mantener consistencia
- Se está creando una rama fix/BUG-022-site-version-no-actualizada para la corrección

---
