# BUG-007: animalitos-suenan - ID faltante en manifest.json

**Fecha reportado:** 2026-02-18 18:40 UTC
**Reporter:** Blockito AI (QA)
**Estado:** [Fixed & Committed]
**Severidad:** ALTA
**Juego afectado:** 002-animalitos-suenan (Animalitos que Suenan - 1-2 Años)

---

## 📋 Descripción

El archivo `manifest.json` del juego `002-animalitos-suenan` no tiene un campo `id`, violando la estructura de metadatos estándar del proyecto según `game-design-rules.md` Sección 3.

## 🔍 Detalles del Bug

### IDs Actuales
- **games-list.json:** `"002-animalitos-suenan"`
- **Directorio:** `002-animalitos-suenan/`
- **manifest.json:** No tiene campo `"id"` ❌ (FALTANTE)

### Contenido actual del manifest.json
```json
{
  "name": "Animalitos que Suenan",
  "short_name": "animalitos",
  "version": "1.0.0",
  "description": "Orquesta de animales que se iluminan y suenan al tocarlos...",
  "icon": "thumbnail.svg",
  "start_url": "/games/animalitos-suenan/",
  "display_order": 1,
  "category": "sensory",
  "recommended_age": "1-2",
  "features": ["levels", "timer", "progress", "touch", "audio"]
}
```

## 📊 Efecto

Inconsistencia de metadatos. El manifest.json debe tener el campo `id` para mantener consistencia con el estándar del proyecto (game-design-rules.md Sección 3).

## 🔧 Solución Propuesta

Agregar campo `id` al inicio del manifest.json:

```json
{
  "id": "002-animalitos-suenan",  // <-- AGREGAR ESTE CAMPO
  "name": "Animalitos que Suenan",
  "short_name": "animalitos",
  "version": "1.0.0",
  "description": "Orquesta de animales que se iluminan y suenan al tocarlos...",
  "icon": "thumbnail.svg",
  "start_url": "/games/animalitos-suenan/",
  "display_order": 1,
  "category": "sensory",
  "recommended_age": "1-2",
  "features": ["levels", "timer", "progress", "touch", "audio"]
}
```

## ✅ Checklist de Corrección

- [ ] Editar `/public/games/002-animalitos-suenan/manifest.json`
- [ ] Agregar campo `"id": "002-animalitos-suenan"` al inicio del JSON (después de `{`)
- [ ] Asegurar comas correctas (no coma al final del último campo)
- [ ] Validar que el JSON sea válido (syntax correcta)
- [ ] Verificar que no hay errores de consola al cargar el juego
- [ ] Commit: `git add . && git commit -m "fix: BUG-007 - Agregar ID faltante en manifest.json de animalitos-suenan"`
- [ ] Push: `git push origin master`
- [ ] Mover este archivo a `/bugs-resolved/`
- [ ] Actualizar estado a `[Fixed & Committed]`

## 📝 Notas

Este bug fue detectado durante la validación QA de las correcciones de BUG-001, BUG-002 y BUG-003.

El campo `id` es obligatorio en `manifest.json` según `game-design-rules.md` Sección 3 (Metadata). Sin este campo, el manifiesto no cumple con el estándar del proyecto.

---

**Bug ID:** BUG-007
**Reportado por:** Blockito AI (QA)
**Fecha reportado:** 2026-02-18 18:40 UTC
**Estado:** [Reported]
