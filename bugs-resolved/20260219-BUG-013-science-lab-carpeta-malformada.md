# BUG-013: science-lab - Carpeta malformada {assets,js,css}

**Fecha reportado:** 2026-02-19 02:55 UTC
**Juego afectado:** Science Lab (science-lab - 8-15 Años)
**Severidad:** CRÍTICA - Estructura de carpetas corrupta
**Estado:** ✅ FIXED & COMMITTED

**Fecha resuelto:** 2026-02-19 03:20 UTC
**Rama:** fix/BUG-013-science-lab-carpeta-malformada
**Commit:** 55c8ca1

## Descripción

El juego `science-lab` tiene una carpeta con nombre literal `{assets,js,css}` en lugar de 3 carpetas separadas (`assets/`, `js/`, `css/`).

## Síntomas

- Existe una carpeta llamada literalmente `{assets,js,css}` (nombre con llaves y comas)
- Las carpetas esperadas `assets/`, `js/`, `css/` NO existen
- El HTML probablemente referencia archivos que NO existen en esa carpeta
- Resultado: El juego no puede cargar sus recursos

## Cómo Reproducir

1. Ejecutar: `ls -la /root/.openclaw/workspace/repos/elbebe/public/games/science-lab/`
2. Observar la salida:
   ```
   drwxr-xr-x 3 root root 4096 Feb 19 02:51 ..
   drwxr-xr-x 2 root root 4096 Feb 19 02:51 {assets,js,css}
   ```
3. Verificar el contenido de esa carpeta: `ls -la /root/.openclaw/workspace/repos/elbebe/public/games/science-lab/{assets,js,css}/`
4. Observar que está vacía

## Causa Raíz

Este error típicamente ocurre cuando se ejecuta un comando bash con llaves incorrectamente:

```bash
# COMANDO INCORRECTO (causa del error):
mkdir -p public/games/science-lab/{assets,js,css}  # Literalmente crea {assets,js,css}

# COMANDO CORRECTO:
mkdir -p public/games/science-lab/{assets,js,css}  # Expande las llaves
```

## Estructura Actual (Incorrecta)

```
public/games/science-lab/
├── index.html ✅
└── {assets,js,css}/ ❌ Nombre malformado
    └── (vacío) ❌
```

## Estructura Esperada (Correcta)

```
public/games/science-lab/
├── index.html
├── manifest.json
├── assets/
│   ├── (imágenes, sonidos, etc.)
├── css/
│   └── game.css
└── js/
    └── game.js
```

## Solución Requerida

1. Eliminar la carpeta malformada:
   ```bash
   rm -rf public/games/science-lab/{assets,js,css}
   ```

2. Crear las carpetas correctas:
   ```bash
   mkdir -p public/games/science-lab/assets
   mkdir -p public/games/science-lab/css
   mkdir -p public/games/science-lab/js
   ```

3. Implementar el juego completo según:
   - `games-backlog/8-15/003-science-lab.md` (si existe)
   - `game-design-rules.md` (todas las reglas)

4. Asegurar que el HTML reference correctamente:
   - `css/game.css`
   - `js/game.js`
   - `assets/*` (imágenes, sonidos, etc.)

## Prioridad

**ALTA** - Bloquea completamente el funcionamiento de `science-lab`

## Notas

- Este es un error de implementación del bash/CLI
- Posible causa: El implementador usó un comando sin expansiones de shell
- La carpeta `{assets,js,css}` debe ser eliminada y recreada correctamente
