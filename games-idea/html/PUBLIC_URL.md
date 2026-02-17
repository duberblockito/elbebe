# 🎮 Burbujas Pop - URL de Acceso Público

## URL Pública

**Juego principal:**
```
https://blowing-adaptation-harley-print.trycloudflare.com/burbujas-pop.html
```

**Directorio (índice de archivos):**
```
https://blowing-adaptation-harley-print.trycloudflare.com/
```

**Documentación:**
```
https://blowing-adaptation-harley-print.trycloudflare.com/README.md
```

---

## Servicios Activos

### 1. Servidor HTTP (Python)
- **Puerto local:** 8000
- **Directorio:** `/root/.openclaw/workspace/games/html/`
- **PID:** 80709
- **Comando:** `python3 -m http.server 8000`
- **Estado:** ✅ Activo

### 2. Cloudflare Tunnel
- **URL pública:** `https://blowing-adaptation-harley-print.trycloudflare.com`
- **Tunnel hacia:** `http://localhost:8000`
- **PID:** 80795
- **Comando:** `/tmp/cloudflared tunnel --url http://localhost:8000`
- **Estado:** ✅ Activo
- **Tipo:** Quick Tunnel (gratuito, temporal)
- **Logs:** `/tmp/tunnel.log`

---

## Archivos Disponibles

| Archivo | Tamaño | URL |
|---------|--------|-----|
| burbujas-pop.html | 16 KB | [Ver]()[/burbujas-pop.html] |
| README.md | 3.8 KB | [Ver]()[/README.md] |

---

## Cómo Acceder

### Desde Desktop/Laptop:
1. Abrir navegador web (Chrome, Firefox, Safari)
2. Ir a: `https://blowing-adaptation-harley-print.trycloudflare.com/burbujas-pop.html`
3. El juego se abrirá automáticamente

### Desde Móvil (iOS/Android):
1. Abrir navegador web (Safari en iOS, Chrome en Android)
2. Ir a: `https://blowing-adaptation-harley-print.trycloudflare.com/burbujas-pop.html`
3. Tocar pantalla para iniciar audio (autoplay policy)
4. ¡Toca las burbujas!

---

## Instrucciones para el Juego

### Antes de Empezar:
- ✅ Conexión a internet requerida (para cargar la URL)
- ✅ Navegador moderno (Chrome 90+, Safari 14+, Firefox 88+)
- ✅ Dispositivo con pantalla táctil (recomendado para mejor experiencia)

### Cómo Jugar:
1. **Tocar la pantalla** para iniciar el audio (primera interacción)
2. **Tocar las burbujas** que flotan hacia arriba
3. **¡POP!** La burbuja explota en confetti
4. **Contador** en esquina superior derecha muestra cuántas explotaste
5. **Sin límites** - las burbujas siguen apareciendo infinitamente

### Características del Juego:
- 🎨 Colores brillantes y vibrantes
- 🎵 Sonidos "Pop" (tono varía por tamaño)
- ✨ Explosiones de confetti colorido
- 📱 Optimizado para móviles (60 FPS)
- 👶 Intuitivo para niños de 2-3 años
- 🚫 Sin texto, sin anuncios, sin compras

---

## Notas Importantes

### Sobre la URL:
- **Tipo:** Quick Tunnel de Cloudflare (gratuito)
- **Duración:** Temporal (puede cambiar al reiniciar el tunnel)
- **Acceso:** Público (cualquiera con la URL puede acceder)
- **SLA:** Sin garantía de uptime (para producción, usar tunnel con cuenta Cloudflare)

### Sobre el Juego:
- **Tamaño total:** ~16 KB
- **Performance objetivo:** 60 FPS en móviles medios
- **Audio:** Web Audio API (sin archivos externos)
- **Compatibilidad:** iOS (Safari) y Android (Chrome)

---

## Detener Servicios (Cuando ya no sean necesarios)

### Detener Servidor HTTP:
```bash
kill 80709
```

### Detener Cloudflare Tunnel:
```bash
kill 80795
```

### Detener Ambos:
```bash
kill 80709 80795
```

---

## Reiniciar Servicios (Si se detienen)

### Iniciar Servidor HTTP:
```bash
cd /root/.openclaw/workspace/games/html
python3 -m http.server 8000 &
```

### Iniciar Cloudflare Tunnel:
```bash
/tmp/cloudflared tunnel --url http://localhost:8000 > /tmp/tunnel.log 2>&1 &
```

### Obtener Nueva URL:
```bash
cat /tmp/tunnel.log | grep "trycloudflare.com"
```

---

## Troubleshooting

### Si la URL no funciona:
1. Verificar que ambos procesos estén activos:
   ```bash
   ps aux | grep -E "(python3.*http.server|cloudflared)" | grep -v grep
   ```
2. Verificar que el servidor HTTP local funcione:
   ```bash
   curl http://localhost:8000/
   ```
3. Verificar logs del tunnel:
   ```bash
   cat /tmp/tunnel.log
   ```

### Si el juego no reproduce sonido:
- Tocar la pantalla al menos una vez (autoplay policy del navegador)
- Verificar que el navegador permita audio
- Reabrir el juego en una nueva pestaña

### Si el juego es lento:
- Cerrar otras pestañas del navegador
- Desconectar dispositivos de la red (WiFi con mucho tráfico)
- Verificar que el dispositivo tenga memoria suficiente

---

## Métricas de Acceso

**Fecha de creación:** 2026-02-17 15:37 UTC
**Estado actual:** ✅ Activo y funcionando
**Última verificación:** 2026-02-17 15:38 UTC

---

## Soporte

**Problemas técnicos:** Contactar a Blockito 🧱
**Preguntas sobre el juego:** Revisar `README.md` en la URL pública

---

**Estado:** ✅ Activo
**URL:** https://blowing-adaptation-harley-print.trycloudflare.com/burbujas-pop.html
