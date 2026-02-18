# BUG-006: pinta-nubes - Mismatch ID en manifest.json

**Fecha reportado:** 2026-02-18 18:40 UTC
**Reporter:** Blockito AI (QA)
**Estado:** [Fixed & Committed]
**Severidad:** ALTA
**Juego afectado:** 001-pinta-nubes (Pinta las Nubes - 2-3 Años)

---

## 📋 Descripción

El archivo `manifest.json` del juego `001-pinta-nubes` tiene un ID incorrecto que no coincide con el ID en `games-list.json` ni con el nombre del directorio.

## 🔍 Detalles del Bug

### IDs Actuales
- **games-list.json:** `"001-pinta-nubes"`
- **Directorio:** `001-pinta-nubes/`
- **manifest.json:** `"pinta-nubes"` ❌ (INCORRECTO)

### Contenido del manifest.json
```json
{
  "id": "pinta-nubes",  // <-- INCORRECTO, debe ser "001-pinta-nubes"
  "title": "Pinta las Nubes",
  "title_en": "Paint the Clouds",
  ...
}
```

## 📊 Efecto

Inconsistencia de metadatos que puede causar problemas en el futuro si el sistema intenta cargar juegos basándose en el ID del manifest.json.

## 🔧 Solución Propuesta

Actualizar el campo `id` en `001-pinta-nubes/manifest.json`:

```json
{
  "id": "001-pinta-nubes",  // CORREGIR: de "pinta-nubes" a "001-pinta-nubes"
  "title": "Pinta las Nubes",
  "title_en": "Paint the Clouds",
  ...
}
```

## ✅ Checklist de Corrección

- [ ] Editar `/public/games/001-pinta-nubes/manifest.json`
- [ ] Cambiar `"id": "pinta-nubes"` a `"id": "001-pinta-nubes"`
- [ ] Validar que el JSON sea válido (syntax correcta)
- [ ] Verificar que no hay errores de consola al cargar el juego
- [ ] Commit: `git add . && git commit -m "fix: BUG-006 - Corregir ID en manifest.json de pinta-nubes"`
- [ ] Push: `git push origin master`
- [ ] Mover este archivo a `/bugs-resolved/`
- [ ] Actualizar estado a `[Fixed & Committed]`

## 📝 Notas

Este bug fue detectado durante la validación QA de las correcciones de BUG-001, BUG-002 y BUG-003.

El campo `id` en `manifest.json` es crítico para mantener consistencia con `games-list.json` y el nombre del directorio, según las reglas en `game-design-rules.md` Sección 3.

---

**Bug ID:** BUG-006
**Reportado por:** Blockito AI (QA)
**Fecha reportado:** 2026-02-18 18:40 UTC
**Fecha corregido:** 2026-02-18 18:51 UTC
**Fecha validado:** 2026-02-18 19:10 UTC
**Estado:** [Fixed & Committed] ✅

---

## ✅ Validación QA (2026-02-18 19:10 UTC)

**Validador:** Blockito AI (QA)
**Resultado:** ✅ PASADO

**Verificaciones:**
- ✅ ID corregido a "001-pinta-nubes"
- ✅ Consistente con games-list.json
- ✅ Consistente con nombre del directorio
- ✅ Sintaxis JSON válida
- ✅ No se detectaron errores

**Conclusión:** Bug corregido correctamente. No requiere acciones adicionales.
