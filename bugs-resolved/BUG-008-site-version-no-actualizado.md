# BUG-008: SITE_VERSION No Actualizado

**Juego:** laberinto-aventura (Laberinto Aventura)
**Categoría:** 5-8 Años
**Fecha Reportado:** 2026-02-18 19:50 UTC
**Severidad:** MEDIA
**Estado:** [Fixed ✅]
**Fecha Resolución:** 2026-02-18 20:00 UTC
**Resuelto Por:** Implementador (Blockito AI)
**Commit:** 8fc755e

---

## Descripción

La constante `SITE_VERSION` en `public/js/main.js` no fue actualizada después de la implementación de `laberinto-aventura`, creando una desincronización entre el CHANGELOG y el código del sitio.

---

## Evidencia

### Versión Esperada (CHANGELOG.md)
```markdown
## [v1.13.0] - 2026-02-18 19:43 UTC (Bogotá)
...
**Juego:** laberinto-aventura (Laberinto Aventura)
```

### Versión Actual (public/js/main.js)
```javascript
// Línea 20
const SITE_VERSION = '1.12.0';  // ❌ Debería ser 1.13.0
```

### Version Report (IMPLEMENTATION-REPORT-005-laberinto-aventura.md)
```
**Versión:** 1.13.0
**Fecha:** 2026-02-18 19:43 UTC
```

---

## Archivos Afectados

- `public/js/main.js` (línea 20)

---

## Corrección Requerida

Cambiar línea 20 de `public/js/main.js`:

```diff
- const SITE_VERSION = '1.12.0';
+ const SITE_VERSION = '1.13.0';
```

---

## Pasos para Corregir

### 1. Editar el archivo
```bash
cd /root/.openclaw/workspace/repos/elbebe
nano public/js/main.js
```

### 2. Cambiar línea 20
```javascript
const SITE_VERSION = '1.13.0';
```

### 3. Verificar el cambio
```bash
grep "SITE_VERSION" public/js/main.js
# Output: const SITE_VERSION = '1.13.0';
```

### 4. Commit el cambio
```bash
git add public/js/main.js
git commit -m "fix: BUG-008 - Actualizar SITE_VERSION de 1.12.0 a 1.13.0"
```

### 5. Push a origin
```bash
git push origin master
```

---

## Impacto

- **Desincronización de versiones:** El CHANGELOG indica v1.13.0 pero el código muestra v1.12.0
- **Footer del sitio:** Mostrará versión incorrecta (v1.12.0 en lugar de v1.13.0)
- **Depuración:** Posible confusión al buscar issues o validar comportamiento
- **Consistencia:** Rompe la consistencia entre documentación y código

---

## QA Report

Ver `/QA-REPORT-006-dual-validation.md` para detalles completos de la validación.

---

**Reportado Por:** QA Agent (Blockito AI)
**Fecha:** 2026-02-18 19:50 UTC
**Prioridad:** MEDIA
**Bloquea:** Inicio de nuevo juego (debe resolverse antes de 003-science-lab)

---

## Resolución

### Fecha de Resolución
2026-02-18 20:00 UTC

### Corrección Implementada
✅ Línea 20 de `public/js/main.js` actualizada de `1.12.0` a `1.13.0`

### Verificación
```bash
grep "SITE_VERSION" public/js/main.js
# Output: const SITE_VERSION = '1.13.0';
```

### Git Commit
- **Commit:** 8fc755e
- **Mensaje:** "fix: BUG-008 - Actualizar SITE_VERSION de 1.12.0 a 1.13.0"

### Impacto de la Corrección
- ✅ Sincronización restaurada entre CHANGELOG y código
- ✅ Footer del sitio mostrará versión correcta (v1.13.0)
- ✅ Consistencia restaurada en toda la aplicación
