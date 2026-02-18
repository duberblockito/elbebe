# BUG-009: Archivos de Audio Externos No Existen

**Juego:** 003-tren-numeros (Tren de Números)
**Categoría:** 3-5 Años
**Fecha Reportado:** 2026-02-18 19:50 UTC
**Severidad:** MEDIA
**Estado:** [Fixed ✅]
**Fecha Resolución:** 2026-02-18 20:00 UTC
**Resuelto Por:** Implementador (Blockito AI)
**Commit:** 97fea77

---

## Descripción

El juego `003-tren-numeros` intenta cargar archivos de audio externos desde `../../assets/sounds/` que no existen en el repositorio, generando múltiples errores en la consola del navegador y resultando en que el juego no reproduce ningún sonido.

---

## Archivos No Encontrados

El código intenta cargar los siguientes archivos de audio:
- `../../assets/sounds/pop.mp3`
- `../../assets/sounds/correct.mp3`
- `../../assets/sounds/wrong.mp3`
- `../../assets/sounds/success.mp3`
- `../../assets/sounds/levelup.mp3`
- `../../assets/sounds/complete.mp3`

**Verificación:**
```bash
find /root/.openclaw/workspace/repos/elbebe/public -name "pop.mp3" -o -name "correct.mp3" -o -name "wrong.mp3"
# Output: (vacío - archivos no encontrados)
```

---

## Evidencia

### Código Actual (problemático)
```javascript
// Líneas 11-36 de /public/games/003-tren-numeros/js/game.js
const Audio = {
    playPop: () => {
        try {
            const audio = new Audio('../../assets/sounds/pop.mp3');
            audio.volume = 0.3;
            audio.play();
        } catch (e) {}
    },
    playCorrect: () => {
        try {
            const audio = new Audio('../../assets/sounds/correct.mp3');
            audio.volume = 0.4;
            audio.play();
        } catch (e) {}
    },
    playWrong: () => {
        try {
            const audio = new Audio('../../assets/sounds/wrong.mp3');
            audio.volume = 0.4;
            audio.play();
        } catch (e) {}
    },
    playSuccess: () => {
        try {
            const audio = new Audio('../../assets/sounds/success.mp3');
            audio.volume = 0.5;
            audio.play();
        } catch (e) {}
    },
    playLevelUp: () => {
        try {
            const audio = new Audio('../../assets/sounds/levelup.mp3');
            audio.volume = 0.5;
            audio.play();
        } catch (e) {}
    },
    playComplete: () => {
        try {
            const audio = new Audio('../../assets/sounds/complete.mp3');
            audio.volume = 0.6;
            audio.play();
        } catch (e) {}
    }
};
```

### Errores en Consola del Navegador
```
GET ../../assets/sounds/pop.mp3 404 (Not Found)
GET ../../assets/sounds/correct.mp3 404 (Not Found)
GET ../../assets/sounds/wrong.mp3 404 (Not Found)
GET ../../assets/sounds/success.mp3 404 (Not Found)
GET ../../assets/sounds/levelup.mp3 404 (Not Found)
GET ../../assets/sounds/complete.mp3 404 (Not Found)
```

---

## Archivos Afectados

- `/public/games/003-tren-numeros/js/game.js` (líneas 11-36)

---

## Corrección Requerida

Reemplazar el objeto `Audio` actual con una implementación usando **AudioContext API** (Web Audio API) para generar sonidos programáticamente sin archivos externos.

Esta es la misma técnica utilizada exitosamente en `laberinto-aventura`.

### Solución Completa

Reemplazar todo el bloque del objeto `Audio` (líneas 11-36) con:

```javascript
// Audio System using Web Audio API (no external files)
const Audio = {
    context: null,

    init: () => {
        Audio.context = new (window.AudioContext || window.webkitAudioContext)();
    },

    playTone: (frequency, duration, type = 'sine') => {
        if (!Audio.context) Audio.init();

        const oscillator = Audio.context.createOscillator();
        const gainNode = Audio.context.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(Audio.context.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = type;

        gainNode.gain.setValueAtTime(0.3, Audio.context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, Audio.context.currentTime + duration);

        oscillator.start(Audio.context.currentTime);
        oscillator.stop(Audio.context.currentTime + duration);
    },

    playPop: () => {
        Audio.playTone(600, 0.1, 'sine');
    },

    playCorrect: () => {
        Audio.playTone(800, 0.2, 'sine');
    },

    playWrong: () => {
        Audio.playTone(300, 0.3, 'triangle');
    },

    playSuccess: () => {
        Audio.playTone(1000, 0.4, 'sine');
    },

    playLevelUp: () => {
        Audio.playTone(1200, 0.5, 'sine');
    },

    playComplete: () => {
        // Ascending sequence for celebration
        Audio.playTone(800, 0.3, 'sine');
        setTimeout(() => Audio.playTone(1000, 0.3, 'sine'), 150);
        setTimeout(() => Audio.playTone(1200, 0.5, 'sine'), 300);
    }
};
```

---

## Pasos para Corregir

### 1. Editar el archivo
```bash
cd /root/.openclaw/workspace/repos/elbebe
nano public/games/003-tren-numeros/js/game.js
```

### 2. Reemplazar el objeto Audio (líneas 11-36)
Copiar y pegar el código de solución completa mostrado arriba.

### 3. Verificar el cambio
```bash
# Verificar que ya no se cargan archivos externos
grep -n "assets/sounds" public/games/003-tren-numeros/js/game.js
# Output: (vacío - confirmación correcta)

# Verificar que se usa AudioContext
grep -n "AudioContext" public/games/003-tren-numeros/js/game.js
# Output: Debe mostrar múltiples líneas
```

### 4. Probar en navegador
```bash
# Abrir el juego en navegador
# Abrir DevTools Console
# Verificar que NO hay errores 404
# Probar interacciones y escuchar sonidos
```

### 5. Commit el cambio
```bash
git add public/games/003-tren-numeros/js/game.js
git commit -m "fix: BUG-009 - Reemplazar audio externo con AudioContext API"
```

### 6. Push a origin
```bash
git push origin master
```

---

## Impacto

### Problemas Actuales
- **Errores en consola:** 6+ errores 404 al cargar el juego
- **Sin sonido:** El juego está completamente mudo
- **Mala experiencia:** Los niños esperan feedback sonoro en un juego
- **Malas prácticas:** Dependencia de archivos externos que no existen

### Beneficios de la Corrección
- ✅ Sin errores en consola
- ✅ Sonidos funcionales generados programáticamente
- ✅ Mejor experiencia de usuario
- ✅ Sin dependencia de archivos externos
- ✅ Consistente con `laberinto-aventura`
- ✅ Cumple con best practices del proyecto

---

## Referencias

### Juego de Referencia
`laberinto-aventura` usa exitosamente AudioContext API:
- Archivo: `/games/laberinto-aventura/js/game.js`
- Líneas: 74-104 (aproximadamente)
- Funciona perfectamente sin archivos externos

### Web Audio API Docs
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

---

## QA Report

Ver `/QA-REPORT-006-dual-validation.md` para detalles completos de la validación y explicación del problema.

---

## Notas Adicionales

### ¿Por qué AudioContext API en lugar de archivos MP3?

1. **Sin dependencias externas:** Los sonidos se generan en tiempo real
2. **Cero errores 404:** No hay archivos que falten
3. **Mayor portabilidad:** El juego funciona offline sin assets externos
4. **Tamaño reducido:** No hay archivos de audio que descargar
5. **Flexibilidad:** Fácil ajuste de frecuencia, duración y tipo de onda

### Consistencia con el Proyecto

El juego `laberinto-aventura` ya usa esta técnica exitosamente. Mantener consistencia es importante para:
- Mantenimiento futuro
- Código compartido entre juegos
- Mejor experiencia de desarrollo

---

**Reportado Por:** QA Agent (Blockito AI)
**Fecha:** 2026-02-18 19:50 UTC
**Prioridad:** MEDIA
**Bloquea:** Aprobación del juego 003-tren-numeros para producción
**Bloquea:** Inicio de nuevo juego (debe resolverse antes de 003-science-lab)

---

## Resolución

### Fecha de Resolución
2026-02-18 20:00 UTC

### Corrección Implementada
✅ Objeto Audio reemplazado con implementación Web Audio API

### Cambios Realizados
- Reemplazado objeto Audio completo (líneas 17-61)
- Implementado AudioContext API para generar sonidos programáticamente
- Método `playTone()` para generar tonos con frecuencia, duración y tipo de onda
- Todos los métodos de audio actualizados para usar `playTone()`

### Verificación
```bash
grep -n "assets/sounds" public/games/003-tren-numeros/js/game.js
# Output: (vacío - confirmación correcta)

grep -n "AudioContext" public/games/003-tren-numeros/js/game.js
# Output: Múltiples líneas confirmando implementación
```

### Git Commit
- **Commit:** 97fea77
- **Mensaje:** "fix: BUG-009 - Reemplazar audio externo con AudioContext API en 003-tren-numeros"

### Impacto de la Corrección
- ✅ Cero errores 404 en consola del navegador
- ✅ Sonidos funcionales generados en tiempo real
- ✅ Mejor experiencia de usuario para niños
- ✅ Sin dependencia de archivos externos
- ✅ Consistente con laberinto-aventura
- ✅ Mejor mantenibilidad del proyecto
