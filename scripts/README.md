# 📦 Scripts - El Bebe Games

Scripts de automatización para el proyecto El Bebe Games.

## 📜 Scripts Disponibles

### `update-all-game-versions.sh`

**Descripción:**
Script de actualización forzada de versiones para cache busting en todos los juegos.

**Uso:**
```bash
./scripts/update-all-game-versions.sh <VERSION>
```

**Ejemplo:**
```bash
./scripts/update-all-game-versions.sh 1.7.0
```

**Qué hace:**
1. Actualiza `public/js/main.js` con la nueva versión (SITE_VERSION)
2. Actualiza `public/index.html` para agregar versión a CSS y JS principales
3. **Forza** actualización de TODOS los juegos en `public/games/*/index.html`:
   - Agrega `?v=X.Y.Z` a todos los enlaces de CSS (`game.css`, `js/game.css`)
   - Agrega `?v=X.Y.Z` a todos los enlaces de JS (`game.js`, `js/game.js`)
4. Crea backups automáticos de todos los archivos modificados (con timestamp)

**Archivos modificados:**
- `public/js/main.js` (constante SITE_VERSION)
- `public/index.html`
- `public/games/*/index.html` (todos los juegos)

**Backups:**
Todos los archivos modificados se respaldan automáticamente con formato:
`<archivo>.backup.<YYYYMMDD>-<HHMMSS>`

**Propósito:**
Forzar que los navegadores refresquen el caché cuando hay una nueva versión del juego.

---

### `update-game-versions.sh`

**Descripción:**
Script de actualización de versiones (legacy - solo actualiza archivos que ya tienen `?v=`).

**Uso:**
```bash
./scripts/update-game-versions.sh <VERSION>
```

**Nota:**
Este script **NO** agrega versiones a archivos que no las tienen. Usar `update-all-game-versions.sh` para actualización completa.

---

## 🎯 Workflow de Release

### Para lanzar una nueva versión:

1. **Actualizar código del juego** (nuevas funcionalidades, bugs, etc.)

2. **Ejecutar script de versiones:**
   ```bash
   ./scripts/update-all-game-versions.sh 1.7.0
   ```

3. **Verificar que SITE_VERSION se actualizó:**
   ```bash
   grep "SITE_VERSION" public/js/main.js
   # Debe mostrar: const SITE_VERSION = '1.7.0';
   ```

4. **Actualizar CHANGELOG.md:**
   - Agregar nueva entrada con la versión
   - Documentar cambios (nuevas funcionalidades, bugs corregidos, etc.)

4. **Actualizar `games-list.json`:**
   ```json
   {
     "version": "1.7.0",
     "lastUpdated": "2026-02-18"
   }
   ```

5. **Probar en navegador:**
   - Abrir el juego
   - Hacer refresh forzado (Ctrl+Shift+R o Cmd+Shift+R)
   - Verificar que cargan los nuevos archivos (check DevTools → Network)

7. **Commit y push:**
   ```bash
   cd /root/.openclaw/workspace/repos/elbebe
   git add .
   git commit -m "Release v1.7.0 - [Resumen de cambios]"
   git push origin master
   ```

7. **Monitorear:**
   - Verificar que no hay errores en consola
   - Revisar que todos los recursos cargan correctamente

---

## 🧪 Testing de Cache Busting

### Verificar que funciona:

1. **Abrir DevTools (F12)**
2. **Ir a pestaña "Network"**
3. **Activar "Disable cache" checkbox**
4. **Recargar la página**
5. **Verificar que las URLs incluyen la versión:**
   - `css/style.css?v=1.7.0` ✅
   - `js/main.js?v=1.7.0` ✅
   - `games/pinta-nubes/?v=1.7.0` ✅ (al hacer clic en "Jugar")

### Verificar en dispositivos móviles:

1. **Cerrar la app/página**
2. **Borrar caché del navegador** (opcional, pero recomendado para testing)
3. **Abrir la página**
4. **Verificar que carga la versión correcta**

---

## 🐛 Troubleshooting

### Los archivos no se actualizan después del deploy:

- **Causa:** CDN o servidor de caché
- **Solución:** Esperar a que el cache expire (typical: 5-30 minutos) o invalidar manualmente

### Los usuarios reportan ver versiones antiguas:

- **Causa:** Navegadores con caché muy agresivo
- **Solución:** El sistema de cache busting debería resolver esto automáticamente en la próxima versión

### El script falla:

- **Verificar:** Permiso de ejecución del script
  ```bash
  chmod +x scripts/*.sh
  ```

- **Verificar:** Formato de versión correcto (MAJOR.MINOR.PATCH)
  ```bash
  ./scripts/update-all-game-versions.sh 1.7.0  # ✅ Correcto
  ./scripts/update-all-game-versions.sh 1.7   # ❌ Incorrecto
  ```

---

## 📚 Referencias

- **Semantic Versioning:** https://semver.org/
- **Cache Busting:** https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
- **Git Workflows:** https://www.atlassian.com/git/tutorials/comparing-workflows

---

**Última actualización:** 2026-02-18
**Maintained by:** Blockito 🧱
