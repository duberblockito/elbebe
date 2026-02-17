# 🎮 Juegos HTML - Niños 2-3 Años

## Juegos Disponibles

### 🫧 Burbujas Pop 💙💚💛

**Archivo:** `burbujas-pop.html`

**Descripción:**
Juego interactivo donde las burbujas de colores flotan hacia arriba y el niño puede explotarlas tocándolas. Cada burbuja explota en un festival de confetti colorido con un sonido "¡Pop!" divertido.

**Características:**
- ✅ **Intuitivo:** Sin texto, solo toca y explota
- ✅ **Visualmente atractivo:** Burbujas brillantes con reflejos de luz
- ✅ **Optimizado para móviles:** Responsive, touch-friendly, 60 FPS
- ✅ **Audio integrado:** Sonidos de "Pop" (tono varía por tamaño) y "Whoosh"
- ✅ **Sin límites:** Las burbujas siguen apareciendo infinitamente
- ✅ **Feedback visual:** Contador de burbujas explotadas, animaciones suaves

**Mecánica:**
1. Burbujas de colores aparecen desde abajo y flotan hacia arriba
2. Tocar una burbuja la hace explotar en confetti
3. El sonido varía según el tamaño de la burbuja (más grave = burbuja más grande)
4. Contador en la esquina superior derecha muestra cuántas burbujas explotaste
5. Las burbujas tienen movimiento ondulante para mayor realismo

**Tecnologías:**
- HTML5 Canvas para rendering de alta performance
- requestAnimationFrame para animación suave a 60 FPS
- Web Audio API para sonidos generados dinámicamente
- Touch Events para dispositivos móviles
- CSS animations para elementos de UI

**Colores de burbujas:**
- Azul brillante (#00BFFF)
- Verde primavera (#00FF7F)
- Dorado (#FFD700)
- Rosa (#FF69B4)
- Púrpura (#DA70D6)
- Azul cielo (#87CEEB)
- Coral (#FF7F50)

**Uso:**
1. Abrir `burbujas-pop.html` en un navegador (Chrome, Safari, Firefox)
2. La primera interacción (toque o click) inicializa el audio
3. ¡Toca las burbujas para explotarlas!

**Requisitos:**
- Navegador moderno (Chrome 90+, Safari 14+, Firefox 88+)
- Canvas API compatible
- Web Audio API compatible
- Dispositivo móvil o tablet recomendado (mejor experiencia táctil)

**Optimizaciones:**
- ✅ Delta time para animaciones consistentes en todos los dispositivos
- ✅ Pool de partículas eficiente (se eliminan automáticamente)
- ✅ Limitación de burbujas activas para mantener 60 FPS
- ✅ No scroll, zoom ni pull-to-refresh para experiencia inmersiva
- ✅ Touch-action: none para prevenir gestos del sistema

**Tamaño del archivo:** ~15 KB (comprimido: ~5 KB)
**Rendimiento objetivo:** 60 FPS en smartphones medios

---

## Cómo Jugar

### En Desktop:
1. Abrir el archivo HTML en el navegador
2. Usar el mouse para hacer click en las burbujas

### En Móvil:
1. Transferir el archivo HTML al dispositivo móvil
2. Abrirlo en el navegador (Chrome/Safari)
3. Tocar las burbujas con el dedo para explotarlas

**Tip:** En iOS, asegúrate de abrir el archivo en Safari para mejor performance de Canvas.

---

## Desarrollo

### Estructura del código:
- **Configuración:** Variables globales y constantes
- **Clase Bubble:** Gestiona burbujas individuales (posición, movimiento, dibujo)
- **Clase Particle:** Gestiona partículas de confetti (explosiones)
- **Audio System:** Genera sonidos con Web Audio API (sin archivos externos)
- **Input Handling:** Detecta toques y clicks, determina qué burbuja fue tocada
- **Game Loop:** requestAnimationFrame + delta time para animaciones consistentes

### Modificaciones sugeridas:
- Aumentar/decrecer velocidad de burbujas: modificar `this.speed` en `Bubble constructor`
- Cambiar frecuencia de aparición: modificar `bubbleInterval`
- Añadir más colores: agregar objetos a `bubbleColors`
- Ajustar cantidad de partículas: modificar `particleCount` en `createExplosion`

---

## Créditos

**Diseñado para:** Niños de 2-3 años
**Principios de diseño:** Intuitivo, sin texto, feedback inmediato, colores brillantes, sonidos amigables

---

## Licencia

Uso libre para fines educativos y personales.
