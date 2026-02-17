# 🎮 Ideas de Juegos - 8-15 Años

## Objetivo
Investigar y documentar 100 ideas de juegos en HTML/JavaScript diseñados para niños de 8-15 años, jugables en celulares.

## Características del Rango de Edad

### Desarrollo Cognitivo y Motor
- [Características del desarrollo]
- [Habilidades cognitivas]
- [Habilidades motoras]

### Motivaciones Clave
- [Qué motiva a los niños en este rango]
- [Preferencias de interacción]
- [Tipos de recompensa efectivos]

### Limitaciones y Consideraciones
- [Limitaciones de atención]
- [Consideraciones de seguridad]
- [Nivel de complejidad adecuado]

---

## Ideas de Juegos

### Lote 1 (Ideas 1-4)
**Fecha:** 2026-02-17
**Ejecución:** 1/25

### Lote 2 (Ideas 1-4)
**Fecha:** 2026-02-17
**Ejecución:** 1/25

### Lote 3 (Ideas 5-6)
**Fecha:** 2026-02-17
**Ejecución:** 1/25

#### Idea #1: Code Quest: Mystery Island

**Concepto:**
Aventura de programación donde los jugadores exploran una isla misteriosa resolviendo puzzles de código para desbloquear áreas, recolectar recursos y desvelar el secreto del naufragio de un científico brillante.

**Motivación:**
- **Desafíos progresivos:** Puzzles que aumentan en dificultad (variables → bucles → funciones → objetos)
- **Logros y sistema de niveles:** Badges por conceptos aprendidos ("Maestro de Bucles", "Alquimista de Variables")
- **Exploración y descubrimiento:** Desbloquear nuevas zonas de la isla conforme se avanzan conceptos
- **Competencia social:** Leaderboard mundial de códigos más eficientes

**Mecánica Principal:**
Los jugadores navegan por una isla isométrica dividida en zonas. Cada zona contiene NPCs con misiones que requieren escribir snippets de código JavaScript real para superar obstáculos (mover puentes, abrir puertas, hackear sistemas). El código se ejecuta en tiempo real con visualización de resultados.

**Interacción Móvil:**
- **Tap:** Seleccionar elementos del terreno, NPCs y objetos interactivos
- **Arrastrar (Drag):** Organizar bloques de código en modo principiante (block coding)
- **Swipe:** Cambiar entre vista de mapa y editor de código
- **Pinch:** Zoom en el editor de código para ver detalles
- **Dibujar:** Crear funciones personalizadas con gesture-to-code (dibujar un bucle genera `for(i=0; i<n; i++)`)
- **Escribir:** Editor de código con autocompletado y corrección de errores en tiempo real
- **Gestos complejos:** Doble tap para ejecutar código rápido, shake para deshacer cambios

**Accesibilidad:**
- Botones grandes (min 44x44px) para interacción táctil
- Modo alto contraste para visión reducida
- Texto a voz para describir elementos de la UI
- Editor adaptable con ajuste de tamaño de fuente (14px-24px)

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para renderizado isométrico, `<textarea>` con syntax highlighting, `<audio>` para efectos, `<video>` para tutoriales animados
- **JavaScript:** 
  - Librería principal: Phaser 3 (engine de juego 2D)
  - Editor: CodeMirror (syntax highlighting para JS)
  - Compilador seguro: Eval sandbox con Web Workers
  - Framework: Vue.js para UI reactiva
  - State management: Vuex para progreso del jugador
- **CSS:**
  - Grid y Flexbox para layout responsivo
  - CSS Variables para theming (modo oscuro/claro)
  - CSS Transitions para animaciones de UI (0.3s ease)
  - Media queries para diferentes tamaños de pantalla (320px-1920px)
  - CSS Animations para feedback visual (pulse, shake, bounce)
- **Otros:**
  - Web Speech API: Reconocimiento de voz para dictar código
  - Canvas API: Renderizado isométrico de la isla
  - Web Audio API: Síntesis de efectos de sonido dinámicos
  - IndexedDB: Almacenamiento local del progreso (offline play)
  - Service Workers: PWA para jugar sin conexión
  - WebSockets: Multiplayer en tiempo real para colaborar en misiones

**Características Visuales:**
- **Paleta de colores:** Estilo vibrante pero legible
  - Terreno: Tonos verdes (#2E8B57, #3CB371) y arenosos (#F4A460)
  - UI: Gradientes azul-cian (#0077BE → #00A8E8) con contrastes altos
  - Código: Tema VS Code Dark (#1E1E1E background, #569CD6 keywords)
- **Animaciones:**
  - Personaje: Walk cycle con spritesheet (8 frames), 12 FPS
  - UI: Transiciones suaves entre zonas (fade in/out, 500ms)
  - Feedback: Partículas al completar puzzles (estrellas, confetti)
- **Feedback visual:**
  - Código correcto: Borde verde brillante, icono checkmark animado
  - Código con error: Borde rojo pulsante, highlighting de línea con error
  - Logro desbloqueado: Modal con animación de escudo y efectos de luz
- **Personalización:**
  - Avatar con 50+ combinaciones de cabello, ropa, accesorios
  - Temas de editor (Dracula, Monokai, Solarized Light)
  - Mascota acompañante personalizable (robot, dragón, alienígena)

**Audio:**
- **Efectos de sonido:**
  - Click/selection: Sonido pop sintetizado (20ms, decay 100ms)
  - Código correcto: Chime ascendente (C4-E4-G4, 200ms)
  - Código error: Buzz descendente (E2-C2, 300ms)
  - Logro: Fanfare de 4 notas (C4-E4-G4-C5, 1s)
  - NPC interact: Burble variado (100-300ms)
- **Música:**
  - Exploración: Lo-fi ambiental con sintetizadores suaves (90 BPM)
  - Puzzle tensión: Orquestal minimalista con crescendo gradual (60-100 BPM)
  - Logro: Upbeat electronic con samples de celebración (128 BPM)
  - Zonas desbloqueadas: Cada zona tiene leitmotiv único (tropical, cyber, space)
- **Voz:**
  - Tutoriales: Voz sintetizada con Web Speech API (tono amigable, velocidad 1.0x)
  - Tips de NPC: Voz pre-grabada con personalidad distintiva (cada NPC tiene tono diferente)
- **Audio espacial:** 3D positioning usando Web Audio API para inmersión (zombies detrás suenan más graves)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 120-150 horas (4-6 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en dispositivos medios
  - Memoria máxima: 150MB (incluye assets comprimidos)
  - Tamaño de assets: <50MB total (sprites, audio, música)
  - Latencia: <100ms para ejecución de código sandbox
- **Riesgos técnicos:**
  - Sandbox seguro para ejecución de código sin comprometer seguridad
  - Optimización de renderizado isométrico en móviles de gama baja
  - Sincronización de código en multiplayer (WebSockets con versioning)

**Valor Educativo:**
- **Programación real:** Los jugadores aprenden JavaScript real aplicado (variables, tipos, operadores, condicionales, bucles, funciones, objetos, arrays)
- **Pensamiento lógico:** Desarrollo de algoritmos y resolución de problemas
- **Persistencia y resiliencia:** Los puzzles requieren intentos múltiples, enseñando a aprender del error
- **Matemáticas aplicadas:** Cálculo de distancias, ángulos, probabilidad en misiones de gameplay
- **Creatividad:** Los jugadores pueden crear sus propias funciones y compartirlas con la comunidad
- **Colaboración:** Modo cooperative donde 2-4 jugadores resuelven misiones juntos en tiempo real

**Referencias e Inspiración:**
- [Documentación Phaser 3](https://photonstorm.github.io/phaser3-docs/) - Engine de juego 2D
- [CodeMirror - Editor de código web](https://codemirror.net/) - Syntax highlighting y autocompletado
- [Scratch - Block coding para niños](https://scratch.mit.edu/) - Inspiración para modo principiante
- [Human Resource Machine - Puzzle de programación](https://store.steampowered.com/app/375820/Human_Resource_Machine/) - Mecánica de puzzles de código
- [CodeCombat - RPG educativo de programación](https://codecombat.com/) - Combate RPG con código real
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Referencia oficial de JS
- [Web Speech API - Speech Recognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) - Dictado de código por voz
- [PWA Best Practices](https://web.dev/progressive-web-apps/) - Offline-first architecture

---

#### Idea #2: Art Battle: Digital Canvas

**Concepto:**
Competición de arte digital en tiempo real donde los jugadores crean dibujos en teléfonos móviles basándose en temas aleatorios. El sistema usa IA para evaluar similitud con el tema y otros jugadores votan en rondas de torneo.

**Motivación:**
- **Creatividad sin límites:** Canvas infinito con 500+ pinceles, filtros, stickers y capas
- **Competencia social:** Torneos globales con 100+ jugadores simultáneos
- **Logros de artista:** Badges por estilos dominados ("Realista", "Caricaturista", "Abstracto")
- **Reconocimiento:** Las mejores obras se muestran en galería pública (Wall of Fame)
- **Inspiración:** Ver arte de otros jugadores genera ideas y motivación para mejorar

**Mecánica Principal:**
Cada partida tiene 3 rondas de 5 minutos. En cada ronda, todos los jugadores reciben el mismo tema aleatorio (ej: "Un gato astronauta", "Ciudad futurista", "Aventura en la selva"). Dibujan simultáneamente con herramientas de toque. Al terminar la ronda, el sistema (IA + votación de jugadores) selecciona los mejores dibujos. Los puntos se acumulan para el ranking global.

**Interacción Móvil:**
- **Dibujar (Drag):** Pincel primario con detección de presión (velocidad de toque = grosor)
- **Pinch:** Zoom en el canvas hasta 5x para detalles finos
- **Dos dedos (drag):** Pan/mover el canvas con 2 dedos
- **Tap simple:** Seleccionar herramienta, color, capa
- **Tap largo (Long press):** Eyedropper (recoger color del canvas)
- **Gestos complejos:**
  - Dibujo rápido en círculo = herramienta borrador
  - Doble tap con 2 dedos = deshacer (undo)
  - Shake = redo
  - Swipe desde borde izquierdo = panel de capas
  - Swipe desde borde derecho = paleta de colores
- **Escribir:** Text tool con 50+ fuentes artísticas, rotación y escala
- **Multitouch hasta 10 dedos:** Soporte para múltiples pinceles simultáneos (fingers painting)

**Accesibilidad:**
- Herramientas con iconos grandes (60x60px mínimo) y etiquetas claras
- Modo "Simple UI" reduce panel a 6 herramientas esenciales (pincel, colores, goma, capas, undo, enviar)
- Voice commands para navegación por menús ("abrir capas", "seleccionar color rojo")
- Color picker con nombres de colores accesibles (screen readers)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal con 2 contextos: dibujo y preview
  - `<canvas>` para miniaturas de capas
  - `<video>` para streaming de proceso de creación (time-lapse)
  - `<input type="color">` para picker nativo en móviles
  - `<input type="file">` para importar imágenes de galería
- **JavaScript:**
  - Librería de dibujo: Fabric.js o Konva.js (canvas con objetos editables)
  - Filtrado: CamanJS (filtros de imagen en tiempo real)
  - Framework UI: React Native Web (cross-platform mobile-first)
  - State management: Redux para sincronización de canvas
  - IA de evaluación: TensorFlow.js modelo CNN pre-entrenado (ImageNet-based)
  - WebSockets: Socket.io para sincronización en tiempo real
  - Real-time: Firebase Realtime Database para torneos
  - Animaciones: GSAP para transiciones suaves de UI
- **CSS:**
  - CSS Grid para layout de herramientas (8 columnas responsivo)
  - CSS Variables para theming dinámico (cambiar colores por usuario)
  - CSS Transforms para rotación/escala de elementos (transform-origin)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Custom Properties para animaciones de herramientas (hover, active)
- **Otros:**
  - Web Workers: Procesamiento de filtros y IA sin bloquear UI
  - IndexedDB: Guardado de dibujos completos y time-lapses offline
  - Canvas API: Manipulación de píxeles para filtros personalizados
  - Touch Events API: Multi-touch hasta 10 puntos simultáneos
  - Pointer Events API: Unificación de mouse/touch/pen input
  - Web Speech API: Comandos de voz para navegación
  - Service Workers: PWA para crear arte offline y sincronizar cuando hay conexión
  - Blob/File API: Exportar imágenes en PNG, JPG, WEBP

**Características Visuales:**
- **Paleta de colores:**
  - UI principal: Dark theme (#121212 background, #E0E0E0 text)
  - Paleta de colores: Wheel de 256 colores + 10 colores recientes
  - Canvas: Transparent background con grid pattern configurable
- **Animaciones:**
  - Herramientas: Scale down al seleccionar (0.95x), glow al activar
  - Transiciones entre rondas: Fade out canvas, fade in next theme (800ms)
  - Feedback de votación: Counting numbers animation (0→10→50→100)
  - Winner announcement: Confetti particle explosion (200 particles, 2s)
- **Feedback visual:**
  - Pincel activo: Indicador circular con color actual, borde 2px blanco
  - Capa seleccionada: Resaltada con borde brillante (#00E5FF)
  - Tiempo restante: Progress bar circular animado (verde→amarillo→rojo)
  - Completar ronda: Flash blanco del canvas (0.5s fade)
- **Personalización:**
  - 500+ pinceles: Basic, Ink, Watercolor, Neon, Glitch, Pixel, Spray
  - 50+ filtros: Blur, Sharpen, Emboss, Vintage, Grayscale, Invert
  - 100+ stickers: Emojis, memes, íconos, formas geométricas
  - Hasta 10 capas con modos de fusión (multiply, screen, overlay, color dodge)
  - Galería de trabajos guardados con miniaturas 150x150px
  - Perfil de artista con avatar, bio, galería de mejores obras, estadísticas

**Audio:**
- **Efectos de sonido:**
  - Pincel stroke: Sonido suave de "swoosh" con variación por velocidad (50-200ms)
  - Seleccionar herramienta: Click satisfactorio (short, 50ms)
  - Undo/Redo: Whoosh reversible (100ms cada dirección)
  - Añadir capa: Pop ascendente (C5-E5, 150ms)
  - Time ticking (últimos 30s): Tick-tock acelerando (60→120 BPM)
  - Votación recibida: Ding variado (200-400ms)
- **Música:**
  - Lobby/Esperar: Lo-fi chill beats (85 BPM)
  - Ronda activa: Ambient creative (synth pads, 70 BPM)
  - Countdown final: Orchestral tension (strings crescendo, 80→110 BPM)
  - Resultados: Upbeat celebration (electronic pop, 130 BPM)
  - Galería personal: Inspirational piano (90 BPM)
- **Voz:**
  - Anuncios: Voz femenina energética anunciando tema ("¡Tema: Futuro Distópico!")
  - Tutorial interactivo: Voz amigable explicando herramientas ("Prueba el pincel acuarela")
- **Audio espacial:** Sonidos 3D para feedback de posición en canvas (zoom sounds deeper)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 80-100 horas (3-4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS al dibujar (canvas rendering)
  - Latencia: <50ms para sincronización de pinceladas en multiplayer
  - Canvas size: Hasta 2048x2048px (4K) para alta calidad
  - Memoria máxima: 200MB (incluye capas, historial undo/redo hasta 50 pasos)
  - IA inference: <500ms para evaluación de similitud de imagen
- **Riesgos técnicos:**
  - Sincronización de canvas en tiempo real sin lag (optimizar packet size)
  - Evaluación objetiva de arte con IA (balancear similitud + creatividad)
  - Manejo de capas en móviles con memoria limitada (capas grandes consumen RAM)
  - Prevención de NSFW contenido (IA para moderación automática)

**Valor Educativo:**
- **Expresión artística:** Los niños desarrollan creatividad visual, composición y teoría del color
- **Habilidades técnicas:** Dominio de herramientas digitales (capas, filtros, transformaciones)
- **Apertura cultural:** Ver arte de jugadores globales expone a diferentes estilos y perspectivas
- **Vocabulario visual:** Aprenden términos de arte (perspectiva, contraste, saturación, blending)
- **Confianza y autoestima:** Recibir likes y comentarios positivos refuerza auto-expresión
- **Colaboración:** Modo collaborative canvas donde 2-4 usuarios dibujan juntos en el mismo lienzo

**Referencias e Inspiración:**
- [Fabric.js - Canvas con objetos](https://fabricjs.com/) - Manipulación de capas y filtros
- [CamanJS - Filtrado de imagen](https://camanjs.com/) - Procesamiento de imágenes en el browser
- [Procreate Pocket - App de dibujo iOS](https://procreate.art/ipad) - Inspiración para herramientas de pincel
- [Drawasaurus - Pictionary online](https://www.drawasaurus.org/) - Torneo de dibujo en tiempo real
- [Skribbl.io - Guess drawing game](https://skribbl.io/) - Competición artística multiplayer
- [TensorFlow.js - ML in browser](https://www.tensorflow.org/js) - Evaluación de similitud con CNN
- [Web Speech API - Speech Recognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) - Comandos de voz
- [PWA - Offline Canvas](https://web.dev/offline/) - PWA para crear arte sin internet

---

#### Idea #3: Science Lab: Element Fusion

**Concepto:**
Laboratorio de química virtual donde los jugadores combinan elementos para crear compuestos, experimentan con reacciones y desbloquean descubrimientos científicos. Sistema progresivo con 120+ elementos desde lo básico hasta exóticos.

**Motivación:**
- **Curiosidad y descubrimiento:** Combinar inesperadamente elementos crea compuestos sorprendentes (fuego + agua = vapor explosivo)
- **Colección y completitud:** Desbloquear la tabla periódica completa (118 elementos) es el objetivo final
- **Experimentación sin consecuencias:** Pueden mezclar ácidos peligrosos sin riesgo real
- **Escala de progresión:** Comienzan con 4 elementos básicos y desbloquean nuevos mediante descubrimientos
- **Competencia amistosa:** Leaderboard de "quién descubrió más elementos en menos tiempo"

**Mecánica Principal:**
Los jugadores tienen un laboratorio isométrico con estanterías de elementos (inicialmente 4: fuego, agua, tierra, aire). Arrastran elementos al área de mezcla (beaker) para crear nuevos compuestos. Cada combinación tiene una reacción visual única (explosión, burbujeo, cambio de color). Las reacciones correctas desbloquean nuevos elementos y descubrimientos científicos. Hay modo historia (descubrir la tabla periódica) y modo sandbox libre (experimentar sin restricciones).

**Interacción Móvil:**
- **Arrastrar (Drag):** Mover elementos de estanterías al beaker de mezcla
- **Pinch:** Zoom en el beaker para ver reacción a nivel molecular (partículas)
- **Tap simple:** Seleccionar elemento, consultar propiedades (punto de fusión, densidad)
- **Tap largo (Long press):** Info card extendida con historia del elemento, usos reales
- **Dos dedos (drag):** Rotar el beaker 3D para ver reacción desde diferentes ángulos
- **Swipe horizontal:** Cambiar entre estanterías (elementos básicos, metales, gases nobles)
- **Dibujar (gesture):** Dibujar símbolo químico en pantalla para buscar elemento (ej: H2O)
- **Gestos complejos:**
  - Shake del dispositivo = agitar el beaker (acelerar reacción)
  - Swipe desde arriba = ver historial de descubrimientos
  - Doble tap en elemento = añadirlo a favoritos
  - Arrastrar 2 elementos simultáneamente = mezcla rápida (shortcut)
- **Escribir:** Notebook de laboratorio digital para escribir notas y observaciones

**Accesibilidad:**
- Elementos con etiquetas grandes (texto + símbolo + número atómico)
- Color coding por categoría (metales=no metales=gases nobles=halógenos)
- Voice assistant explica reacciones ("El sodio reacciona violentamente con agua")
- Modo "Slow Motion" para ver reacciones a cámara lenta (0.25x velocidad)
- Haptic feedback distintivo por tipo de reacción (vibración suave, fuerte, pulsante)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado isométrico del laboratorio
  - `<canvas>` para simulación de partículas de reacciones (hasta 1000 partículas)
  - `<canvas>` para representación 3D del beaker (Three.js no disponible, simular con 2D transforms)
  - `<video>` para tutoriales animados de reacciones
  - `<input type="text">` para notebook de observaciones
- **JavaScript:**
  - Engine de física: Matter.js (simulación de caída de elementos)
  - Particle system: Particles.js modificado para reacciones químicas
  - Framework UI: Alpine.js o Vue.js (state management ligero)
  - Storage: IndexedDB para guardar progreso (elementos desbloqueados, notebook)
  - Animaciones: GSAP para transiciones suaves de UI (zoom, fade)
  - Data: JSON con 120+ elementos, propiedades y combinaciones válidas
  - Math: Calcular densidad, punto de fusión, reactividad
- **CSS:**
  - Grid layout para estanterías (8 columnas responsivo)
  - CSS 3D transforms: `transform: rotateX/Y/Z` para rotación de beaker
  - CSS Animations para reacciones (`@keyframes explosion`, `bubble-rise`)
  - Backdrop-filter para blur de paneles superpuestos (glassmorphism)
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de reacción
- **Otros:**
  - Web Audio API: Síntesis de sonidos de reacción (burbujeo, explosión)
  - DeviceOrientationEvent: Detectar shake para agitar el beaker
  - Touch Events API: Multi-touch para arrastrar múltiples elementos
  - Pointer Events API: Unificar mouse/touch/pen input
  - LocalStorage: Preferencias del usuario (volumen, sensibilidad)
  - Service Workers: PWA para jugar offline (modo sandbox sin leaderboard)
  - Canvas API: Manipular píxeles para efectos de color en reacciones

**Características Visuales:**
- **Paleta de colores:**
  - Laboratorio: Tonos científicos (#E3F2FD azules claros, #F5F5F5 grises)
  - Elementos: Colores por categoría (metales=plata, gases nobles=púrpura, halógenos=verde)
  - Reacciones: Colores dinámicos (explosión=naranja→rojo, burbujeo=azul claro, cristal=amarillo brillante)
- **Animaciones:**
  - Mezcla: Elements caen al beaker con physics (gravity, bounce)
  - Reacción: Partículas explotan desde el centro del beaker (0-2s)
  - Descubrimiento: Flash dorado del nuevo elemento (0.5s fade)
  - Unlock: Elemento emerge de humo con sparkle effect (1.5s)
- **Feedback visual:**
  - Mezcla válida: Beaker brilla en verde, icono checkmark (0.5s)
  - Mezcla inválida: Beaker vibra rojo, mensaje de error ("¡No reaccionan!")
  - Nuevo elemento: Modal con properties card, confetti dorado
  - Combo: Multiplier x2, x3 (encadenar descubrimientos sucesivos)
- **Personalización:**
  - 5+ temas de laboratorio (Clásico, Cyberpunk, Steampunk, Futurista, Toscana)
  - Avatar de científico con 30+ combinaciones (lab coat, goggles, goggles color)
  - Skins del beaker (cristal, metal, futurista, medieval)
  - Notebook con 20+ fondos (cuadriculado, punteado, periódico)

**Audio:**
- **Efectos de sonido:**
  - Elemento caer: Thud suave con variación por peso (light=200Hz, heavy=100Hz, 100-200ms)
  - Mezcla: Glub-glub (burbujeo, 300-500ms)
  - Explosión: Boom con eco (50-500ms)
  - Cristal formándose: Ting alto (C6, 150ms)
  - Descubrimiento: Fanfare de 5 notas (C4-E4-G4-B5-C6, 1.5s)
  - Combo: Whoosh ascendente (200-400ms)
- **Música:**
  - Laboratorio idle: Ambient synthesizer with periodic bubbling sounds (70 BPM)
  - Mezcla activa: Rhythmic electronic with pulse synced to reactions (100 BPM)
  - Descubrimiento: Orchestral crescendo (strings + brass, 60→90 BPM)
  - Leaderboard: Upbeat motivational (electronic pop, 120 BPM)
- **Voz:**
  - Tutorial: Voz científica amigable explicando concepto ("Los gases nobles no reaccionan fácilmente")
  - Reacción peligrosa: Alerta sonora + texto ("¡Cuidado! Reacción exotérmica")
- **Audio espacial:** Sonidos 3D de reacciones (explosión suena más fuerte si el beaker está cerca de la "cámara")

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 70-90 horas (3 semanas equipo de 2)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS durante reacciones de partículas (1000+ partículas)
  - Latencia: <50ms para respuesta de mezcla (feedback instantáneo)
  - Partículas máximas: 2000 para高端 devices, 500 para低端
  - Memoria máxima: 120MB (incluye sprites de 120 elementos)
  - Reacción de mezcla: <200ms para detectar combinación válida
- **Riesgos técnicos:**
  - Balance de dificultad: Evitar que el juego sea frustrante (combinaciones demasiado obscuras)
  - Precisión científica vs. juego: Simplificar reacciones complejas (fusión nuclear no realista)
  - Manejo de state: Guardar 120+ elementos y sus propiedades en IndexedDB
  - Animaciones de partículas optimizadas para móviles de gama baja (limitar partículas)

**Valor Educativo:**
- **Química real:** Los niños aprenden la tabla periódica, propiedades de elementos, reacciones básicas
- **Método científico:** Experimentación → observación → conclusión (hipótesis y prueba)
- **Pensamiento crítico:** Predecir qué elementos reaccionarán (análisis de propiedades)
- **Vocabulario científico:** Aprenden términos: átomo, molécula, elemento, compuesto, reacción, pH, densidad
- **Memorización visual:** Asocian símbolos químicos con colores y propiedades (H=hidrógeno azul claro)
- **Historia de la ciencia:** Los descubrimientos están contextualizados con científicos reales (Mendeleev, Curie)
- **Matemáticas:** Cálculo de moles, proporciones en reacciones (balanceo de ecuaciones)

**Referencias e Inspiración:**
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Simulación de caída de elementos
- [Particles.js - Particle system](https://particles.js.org/) - Efectos de partículas para reacciones
- [Little Alchemy 2 - Element combination game](https://littlealchemy2.com/) - Inspiración principal para mecánica de mezcla
- [Periodic Table - TedEd interactive](https://ed.ted.com/periodic-videos) - Tabla periódica interactiva educativa
- [Chemdemos - Chemistry simulations](https://chemdemos.uoregon.edu/) - Simulaciones de reacciones reales
- [MDN Web Docs - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - Renderizado de partículas
- [Web Audio API - Sound synthesis](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de reacción
- [PWA Best Practices](https://web.dev/progressive-web-apps/) - Offline-first para sandbox mode

---

#### Idea #4: Eco Warriors: Planet Rescue

**Concepto:**
Juego de estrategia de gestión de recursos donde los jugadores construyen y administran un ecosistema, protegiéndolo de amenazas ambientales. Combina city builder con simulación ecológica, enseñando sostenibilidad y impacto ambiental.

**Motivación:**
- **Poder de cambio:** Los jugadores sienten que están salvando el planeta con cada decisión
- **Progresión visible:** Ver un ecosistema moribundo convertirse en paraíso floreciente
- **Misión ética:** Proteger animales, limpiar océanos, reforestar → satisfacción de hacer el bien
- **Competencia global:** Leaderboard de "qué país logró el índice de sostenibilidad más alto"
- **Desafíos reales:** Eventos ambientales basados en problemas reales (derrames de petróleo, deforestación)

**Mecánica Principal:**
Los jugadores inician con un ecosistema degradado (tierra árida, ríos contaminados, animales en peligro). Tienen recursos limitados (agua, energía, dinero) y deben tomar decisiones estratégicas para restaurar el ecosistema. Pueden construir: plantas de energía renovable, centros de reciclaje, reservas naturales, centros de rehabilitación animal. Eventos aleatorios amenazan el progreso (tormentas, contaminación industrial). El juego tiene sistema de "impacto ambiental" que mide huella de carbono, biodiversidad, calidad del agua y aire. Los mejores jugadores logran índice de sostenibilidad >90%.

**Interacción Móvil:**
- **Tap simple:** Colocar estructuras, recoger recursos, seleccionar animales
- **Arrastrar (Drag):** Mover estructuras, reorganizar el mapa
- **Pinch:** Zoom en el mapa isométrico (0.5x-2x)
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap largo (Long press):** Ver estadísticas detalladas de estructuras (costo, impacto, mantenimiento)
- **Swipe horizontal:** Cambiar entre vista de mapa y vista de estadísticas
- **Gestos complejos:**
  - Shake del dispositivo = evento de desastre aleatorio (simulación de terremoto)
  - Dibujo de círculo = crear área protegida (reserva natural)
  - Doble tap en animal = ver perfil (especie, estado, necesidades)
  - Arrastrar animal a diferente área = reubicar (cambio de hábitat)
- **Multitouch hasta 4 dedos:** Selección múltiple de estructuras para upgrades masivos
- **Escribir:** Nombrar áreas protegidas, escribir mensajes a la comunidad

**Accesibilidad:**
- UI con botones grandes (48x48px mínimo) y etiquetas claras con iconos
- Color coding por tipo de estructura (energía=azul, reciclaje=verde, animales=naranja)
- Voice assistant explica opciones de construcción ("La planta solar reduce emisiones 30%")
- Modo "Easy Mode" con recursos más abundantes y eventos menos frecuentes
- Haptic feedback para eventos (vibración fuerte cuando hay desastre, suave para construcción)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para mapa isométrico (2048x2048px máximo)
  - `<canvas>` para representación de estadísticas (gráficos en vivo)
  - `<video>` para cutscenes de eventos ambientales
  - `<input type="text">` para nombrar áreas
  - `<details>/<summary>` para secciones colapsables de estadísticas
- **JavaScript:**
  - Engine de juego: Phaser 3 (isometric rendering)
  - Gestión de recursos: Custom state management (Redux-lite)
  - AI de animales: Pathfinding simple para movimiento de animales (A* algorithm)
  - Simulación de clima: Sistema de probabilidad para eventos (tormentas 15%, sequía 10%)
  - Framework UI: React o Vue.js (componentes reactivos)
  - Charts: Chart.js para visualizar estadísticas (gráficos de barras, líneas)
  - Animaciones: GSAP para transiciones entre vistas (fade, slide)
  - Storage: IndexedDB para guardar progreso del ecosistema (miles de entidades)
- **CSS:**
  - Grid layout para panel de construcción (12 columnas responsivo)
  - CSS Transforms para zoom del mapa (transform-origin: center)
  - CSS Animations para feedback de construcción (scale up, fade in)
  - Backdrop-filter para blur de estadísticas superpuestas
  - CSS Variables para theming dinámico (cambiar colores por usuario)
  - Flexbox para contenedores de recursos
- **Otros:**
  - Web Audio API: Sonidos ambientales (pájaros, viento, agua)
  - DeviceOrientationEvent: Detectar shake para eventos de desastre
  - Touch Events API: Multi-touch para selección múltiple
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar ecosistema completo (miles de tiles, estructuras, animales)
  - Service Workers: PWA para jugar offline (modo sandbox sin eventos globales)
  - Canvas API: Manipular píxeles para efectos de degradación/progreso

**Características Visuales:**
- **Paleta de colores:**
  - Mapa: Tonos naturales (tierra=marrón, agua=azul, vegetación=verde, desierto=amarillo)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, backdrop-filter blur 10px)
  - Estructuras: Colores por categoría (solar=naranja, eólica=azul, reciclaje=verde, animal=naranja)
  - Eventos: Colores de alerta (desastre=rojo, advertencia=amarillo, éxito=verde)
- **Animaciones:**
  - Construcción: Estructura emerge del suelo con scale up (0→1x, 0.5s)
  - Animales: Walk cycle con spritesheet (8 frames, 10 FPS)
  - Evento desastre: Shake del mapa + flash rojo (0.3s)
  - Estadísticas: Counting numbers animation (0→100→1000, 1s)
  - Nivel up: Confetti de hojas verdes (200 particles, 2s)
- **Feedback visual:**
  - Construcción válida: Outline verde brillante, icono checkmark (0.3s)
  - Construcción inválida (sin recursos): Outline rojo pulsante, texto en rojo ("Faltan recursos")
  - Evento desastre: Alert modal con imagen + botón de acción ("¡Derrame de petróleo! ¡Activa cleanup!")
  - Logro desbloqueado: Modal con escudo dorado + confetti (1.5s)
- **Personalización:**
  - 10+ biomas iniciales (bosque tropical, desierto, tundra, arrecife de coral, savana)
  - 50+ estructuras: Plantas solares, eólicas, hidroeléctricas, centros de reciclaje, reservas, centros de rehabilitación
  - 30+ especies animales con comportamiento único (osos, pingüinos, ballenas, monos, águilas)
  - Avatar de eco-guerrero con 40+ combinaciones (ropa, accesorios sostenibles)
  - Temas visuales (Clásico, Cartoon, Realista, Pixel Art)

**Audio:**
- **Efectos de sonido:**
  - Construcción: Build sound (wood hammering, 300ms)
  - Mover estructura: Drag sound (whoosh, 100-200ms)
  - Evento desastre: Alarm + crash (500-800ms)
  - Animal aparecer: Chirp/grunt variado (200-400ms)
  - Recurso colectado: Ding satisfactorio (C5, 150ms)
  - Logro: Fanfare de 6 notas (C4-E4-G4-B5-C6-E6, 2s)
- **Música:**
  - Mapa idle: Ambient natural (birds, water, wind, 60 BPM)
  - Construcción activa: Upbeat folk (guitarra + percusión, 100 BPM)
  - Evento desastre: Tense orchestral (strings low, 50 BPM)
  - Éxito/Logro: Inspirational (piano + synth, 90 BPM)
  - Bioma específico: Cada bioma tiene música distintiva (tropical=marimbas, tundra=campanas)
- **Voz:**
  - Tutorial: Voz ambientalista entusiasta ("¡Construye una planta solar para reducir emisiones!")
  - Evento alerta: Voz de emergencia ("¡Alerta de contaminación! ¡Activa inmediatamente!")
- **Audio espacial:** Sonidos 3D para feedback de posición (animales cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en mapa isométrico con 1000+ entidades
  - Latencia: <100ms para respuesta de construcción (feedback instantáneo)
  - Entidades máximas: 2000 para高端 devices, 500 para低端
  - Memoria máxima: 200MB (incluye sprites de 30 animales, 50 estructuras)
  - Pathfinding: <50ms para calcular ruta de animal (A* algorithm optimizado)
- **Riesgos técnicos:**
  - Balance de juego: Evitar que sea frustrante (recursos demasiado escasos)
  - Simulación realista vs. jugable: Simplificar modelos climáticos complejos
  - Gestión de state: Guardar miles de entidades en IndexedDB sin bloqueo
  - Optimización de pathfinding para múltiples animales en móviles de gama baja

**Valor Educativo:**
- **Conciencia ambiental:** Los niños aprenden sobre cambio climático, contaminación, biodiversidad
- **Sostenibilidad:** Entienden el impacto de decisiones (energía renovable vs fósiles)
- **Economía verde:** Aprenden a balancear costos y beneficios ambientales
- **Vocabulario científico:** Aprenden términos: huella de carbono, biodiversidad, reciclaje, ecosistema, energía renovable
- **Pensamiento estratégico:** Planificación a largo plazo (invertir hoy para beneficios futuros)
- **Responsabilidad cívica:** Entienden que las decisiones individuales impactan el planeta
- **Colaboración:** Modo cooperative donde 2-4 jugadores administran un ecosistema compartido

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Isometric rendering y game logic
- [Chart.js - Graphing library](https://www.chartjs.org/) - Visualización de estadísticas
- [SimCity BuildIt - City builder](https://www.ea.com/games/simcity/simcity-buildit) - Inspiración para gestión de recursos
- [Terra Nil - Reverse city builder](https://freeholdgames.com/terra-nil/) - Restauración ecológica
- [Eco - Global survival game](https://store.steampowered.com/app/382310/Eco/) - Simulación ambiental
- [Global Forest Watch - Deforestation data](https://www.globalforestwatch.org/) - Datos reales de deforestación
- [MDN Web Docs - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - Renderizado de mapa
- [Web Audio API - Environmental sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos ambientales

---

---

#### Idea #5: Music Master: Rhythm Quest

**Concepto:**
Juego de ritmo educativo donde los jugadores aprenden música y teoría musical mientras completan misiones rítmicas. Combina gameplay tipo Guitar Hero con lecciones interactivas de teoría musical, permitiendo a los niños descubrir instrumentos, escalas, armonía y composición.

**Motivación:**
- **Logros inmediatos:** Completar canciones desbloquea nuevos instrumentos y desafíos
- **Progresión musical visible:** Comienzan con ritmos simples, avanzan a melodías completas
- **Creatividad musical:** Modo composición donde crean sus propias canciones
- **Competencia social:** Leaderboard global de puntuaciones y battles de ritmo 1v1
- **Descubrimiento sonoro:** Desbloquean nuevos géneros (rock, jazz, clásico, hip-hop)

**Mecánica Principal:**
Los jugadores navegan por un mundo musical isométrico donde cada zona es un género musical (rock zone, classical garden, jazz club, hip-hop city). Cada misión presenta notas que aparecen en 4 carriles (tipo Guitar Hero simplificado). Deben tocar los botones en el momento correcto para completar la canción. Las misiones enseñan conceptos: notas básicas (DO-RE-MI) → escalas → acordes → armonía → composición. Hay modo historia (desbloquear el mundo musical) y modo libre (tocar cualquier canción desbloqueada).

**Interacción Móvil:**
- **Tap simple:** Tocar notas en carriles (4 carriles en pantalla)
- **Tap rápido:** Notas rápidas en cascada (más de 2 notas/segundo)
- **Arrastrar (Drag):** Slide entre carriles para notas consecutivas
- **Pinch:** Zoom en los carriles para ver notas más grandes
- **Dos dedos (drag):** Pan/mover la vista del mundo musical
- **Swipe horizontal:** Cambiar entre vista de carrera y vista de mapa del mundo
- **Gestos complejos:**
  - Shake del dispositivo = "power-up" temporal (doble puntuación por 10s)
  - Dibujo de onda sonora en pantalla = crear nota personalizada
  - Doble tap rápido = activar modo "frenzy" (todas las notas cuentan x2)
  - Arrastrar dos carriles simultáneamente = tocar acordes (requiere multitouch)
- **Escribir:** Modo composición donde escriben notas en staff musical virtual
- **Multitouch hasta 5 dedos:** Soporte para tocar múltiples notas simultáneamente

**Accesibilidad:**
- Carriles con anchos generosos (min 80px) para fácil interacción
- Botones táctiles con feedback visual claro (brillo al tocar)
- Modo "Slow Practice" para practicar canciones a 0.5x o 0.75x velocidad
- Voice assistant cuenta el ritmo ("uno, dos, tres, cuatro")
- Haptic feedback sincronizado con el ritmo (vibración al acertar notas)
- Color coding por tono (DO=rojo, RE=naranja, MI=amarillo, etc.) para facilitar memorización

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de carriles de notas
  - `<canvas>` para staff musical en modo composición
  - `<audio>` para reproducción de instrumentos y música
  - `<input type="range">` para control de volumen y velocidad
  - `<video>` para tutoriales animados de teoría musical
- **JavaScript:**
  - Engine de audio: Tone.js (síntesis de instrumentos Web Audio API)
  - Game engine: PixiJS o Phaser 3 (renderizado de notas)
  - Rhythm detection: Custom algorithm para precisión de timing (window de 50ms)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del jugador (canciones desbloqueadas, instrumentos)
  - MIDI parsing: WebMIDI API para conectar instrumentos reales (teclados MIDI USB)
  - Composición: Notation.js para visualizar/editar partituras
  - Animaciones: GSAP para transiciones entre misiones
- **CSS:**
  - Flexbox para layout de carriles (4 columnas responsivo)
  - CSS Grid para mapa del mundo (zonas musicales)
  - CSS Transforms para animaciones de notas (scale, translate)
  - CSS Variables para theming dinámico (cambiar colores por género musical)
  - CSS Animations para feedback visual de aciertos (glow, pulse)
  - Backdrop-filter para blur de paneles superpuestos
- **Otros:**
  - Web Audio API: Síntesis de sonidos de instrumentos (piano, guitarra, batería)
  - WebMIDI API: Conexión con teclados MIDI externos
  - Touch Events API: Multi-touch para tocar múltiples notas simultáneas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar canciones compuestas y progreso (offline play)
  - Service Workers: PWA para jugar sin conexión
  - Canvas API: Renderizado de notas y staff musical
  - Performance API: Medir precisión de timing del jugador

**Características Visuales:**
- **Paleta de colores:**
  - Carriles: Gradientes vibrantes por género (rock=rojo/naranja, classical=azul/púrpura, jazz=amarillo/dorado)
  - Notas: Colores por altura tonal (DO=rojo, RE=naranja, MI=amarillo, FA=verde, SOL=azul, LA=índigo, SI=violeta)
  - Mapa del mundo: Zonas con estilos únicos (rock zone=escenario con luces, classical garden=templo grecorromano, jazz club=sala con neón)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, backdrop-filter blur 5px)
- **Animaciones:**
  - Notas aparecen: Scale up + fade in (0→1x, 0.2s)
  - Nota acertada: Flash blanco + glow + particle burst (0.3s)
  - Nota fallada: Shake rojo + fade out (0.5s)
  - Completar canción: Confetti de notas musicales (200 particles, 2s)
  - Transición entre misiones: Slide horizontal (600ms)
- **Feedback visual:**
  - Acierto: Carril brilla en verde, combo counter incrementa
  - Combo alto: Texto animado "COMBO x10" pulsa con colores
  - Canción completada: Modal con puntuación, estrellas (1-5), desbloqueos
  - Power-up activado: Efecto de borde dorado pulsante en pantalla
- **Personalización:**
  - 20+ instrumentos: Piano, guitarra eléctrica, batería, violín, saxofón, sintetizador
  - 50+ canciones: Clásicos (Mozart, Beethoven), Pop moderno, Rock, Hip-hop
  - Modo composición: Crear canciones propias con staff musical interactivo
  - Avatar de músico con 60+ combinaciones (ropa, instrumento, accesorios)
  - Skins de carriles (neón, minimalista, disco, arcade)

**Audio:**
- **Efectos de sonido:**
  - Tocar nota: Sonido real del instrumento seleccionado (síntesis Tone.js)
  - Acierto: Ding ascendente (C4-E4-G4, 150ms)
  - Falla: Buzz descendente (E2-C2, 200ms)
  - Combo: Whoosh ascendente por nivel de combo (combo x5 = C5-E5-G5, combo x10 = C5-E5-G5-C6)
  - Power-up: Power-up sound (charge up + release, 1s)
  - Canción completada: Fanfare de orquesta (8 notas, 2s)
- **Música:**
  - Menú principal: Upbeat electronic intro (120 BPM)
  - Rock zone: Guitar-driven rock con drums (140 BPM)
  - Classical garden: Piano + strings elegantes (80 BPM)
  - Jazz club: Saxophone + piano suave (100 BPM)
  - Hip-hop city: Beats con bass y samples (130 BPM)
- **Voz:**
  - Tutorial: Voz de maestro de música amigable ("Ahora vamos a aprender las notas DO-RE-MI")
  - Combo alto: Voz de hype ("¡COMBO X10! ¡Sigue así!")
  - Canción completada: Voz de celebración ("¡Excelente! ¡Desbloqueaste nuevo instrumento!")
- **Audio espacial:** Sonidos estéreo panned por carril (carril izquierdo = izquierda, carril derecho = derecha)

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 70-90 horas (3 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de notas (máximo 10 notas en pantalla)
  - Latencia de audio: <10ms para respuesta de tocar nota (Web Audio API low latency)
  - Precisión de timing: Window de 50ms para acierto (±25ms es "perfect")
  - Memoria máxima: 150MB (incluye samples de 20 instrumentos, 50 canciones)
  - Sync: Sincronización de notas con audio debe ser precisa (<20ms drift)
- **Riesgos técnicos:**
  - Precisión de timing en móviles: Diferentes dispositivos tienen diferentes latencias de touch
  - Sincronización audio-video: Mantener las notas sincronizadas con la música
  - Optimización de síntesis de audio: 20 instrumentos pueden consumir mucha CPU
  - Multitouch: Algunos móviles no soportan multitouch simultáneo en 5 puntos

**Valor Educativo:**
- **Teoría musical real:** Los niños aprenden notas, escalas, acordes, armonía, ritmo
- **Habilidades motoras:** Desarrollan coordinación ojo-mano y precisión de timing
- **Apertura cultural:** Descubren diferentes géneros musicales (rock, jazz, clásico, hip-hop)
- **Vocabulario musical:** Aprenden términos: tempo, ritmo, melodía, armonía, escala, acorde
- **Creatividad:** Modo composición les permite crear música original
- **Memoria auditiva:** Asocian notas con sonidos específicos (DO=suena como...)
- **Perseverancia:** Las canciones difíciles requieren práctica repetida

**Referencias e Inspiración:**
- [Tone.js - Web Audio framework](https://tonejs.github.io/) - Síntesis de instrumentos
- [PixiJS - Rendering engine](https://pixijs.com/) - Renderizado de notas y carriles
- [Guitar Hero - Rhythm game](https://www.guitarhero.com/) - Inspiración para mecánica de carriles
- [Synthesia - Piano learning app](https://synthesiagame.com/) - Visualización de notas en carriles
- [Simply Piano - Piano learning app](https://www.simplypiano.com/) - Enseñanza interactiva de piano
- [MusicTheory.net - Teoría musical](https://www.musictheory.net/) - Referencia de teoría musical
- [Web Audio API - Audio synthesis](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonido en el browser
- [WebMIDI API - MIDI instruments](https://webaudio.github.io/web-midi-api/) - Conexión con instrumentos reales

---

#### Idea #6: Space Explorer: Galaxy Mission

**Concepto:**
Juego de exploración espacial donde los jugadores son capitanes de nave espacial que descubren planetas, recolectan recursos, establecen colonias y desbloquean secretos del universo. Combina simulación espacial con elementos de estrategia y aventura, enseñando astronomía, física y ciencias planetarias.

**Motivación:**
- **Exploración infinita:** Cada sistema solar es único con planetas generados procedimentalmente
- **Descubrimiento de secretos:** Encontrar artefactos alienígenas, civilizaciones perdidas
- **Construcción de imperio:** Crear una red de colonias en múltiples planetas
- **Misiones épicas:** Historia主线 con misterios del universo (qué causó el Big Bang rebote?)
- **Personalización de nave:** Modificar nave con módulos (motores, escudos, armas, laboratorios)

**Mecánica Principal:**
Los jugadores controlan una nave espacial en un mapa de galaxia infinito (generado procedimentalmente). Navegan entre sistemas solares, orbitan planetas, aterrizan en superficies, establecen colonias y extraen recursos. Cada planeta tiene características únicas: atmósfera (oxígeno, tóxico, sin atmósfera), gravedad (0.1g-3g), temperatura (-200°C a 500°C), recursos (hierro, oro, agua, helio-3). Hay misiones主线: descubrir por qué hay civilizaciones desaparecidas, encontrar el "Centro de la Galaxia", resolver misterios cósmicos. Modo historia (20+ horas de gameplay) y modo sandbox (exploración libre sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar planeta, nave, colonia
- **Arrastrar (Drag):** Mover nave en el mapa galáctico (joystick virtual o drag-to-move)
- **Pinch:** Zoom en el mapa galáctico (0.1x-10x) para ver de cerca o lejanía
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap largo (Long press):** Ver información detallada de planeta (recursos, atmósfera, gravedad)
- **Swipe horizontal:** Cambiar entre vista de mapa, vista de nave, vista de colonia
- **Gestos complejos:**
  - Shake del dispositivo = modo de emergencia (escudos activados, alerta roja)
  - Dibujo de trayectoria = planear ruta de viaje (la nave sigue el dibujo)
  - Doble tap en planeta = órbita automática (la nave entra en órbita)
  - Arrastrar recurso a colonia = transferir recursos entre planetas
- **Multitouch hasta 3 dedos:** Selección múltiple de naves para flotas
- **Escribir:** Nombrar planetas, colonias, naves, escribir logs de capitán

**Accesibilidad:**
- Mapa con zoom generous (min 100px de pantalla = 1 unidad galáctica)
- Planetas con iconos grandes (min 60px) y etiquetas claras
- Voice assistant explica sistema estelar ("Este planeta tiene atmósfera tóxica de CO2")
- Modo "Auto-Navigate" para que la nave viaje automáticamente al destino
- Haptic feedback para eventos (vibración fuerte cuando hay colisión, suave para órbita)
- Color coding por tipo de planeta (terrestre=azul, gas gigante=naranja, helado=blanco)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para mapa galáctico (generación procedimental de miles de estrellas)
  - `<canvas>` para renderizado de planetas 3D (simulado con 2D shading)
  - `<canvas>` para vista de nave (UI de sistemas)
  - `<video>` para cutscenes de descubrimientos alienígenas
  - `<input type="text">` para nombrar planetas y escribir logs
- **JavaScript:**
  - Procedural generation: Custom algorithms para sistemas solares, planetas, recursos
  - Game engine: Phaser 3 (renderizado de mapa, físicas de vuelo)
  - Físicas espaciales: Simplificadas (Newtonian physics con drag)
  - Pathfinding: A* algorithm para rutas óptimas entre sistemas
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado del universo (miles de entidades)
  - Animaciones: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar universo entero (millones de entidades procedimentales)
- **CSS:**
  - CSS Grid para panel de nave (8x8 grid de sistemas)
  - CSS Transforms para zoom del mapa (transform-origin: center)
  - CSS Animations para feedback de viaje (warp speed effect)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de recursos
- **Otros:**
  - Web Audio API: Sonidos espaciales (motores, alertas, ambientes)
  - DeviceOrientationEvent: Detectar shake para modo emergencia
  - Touch Events API: Multi-touch para controlar múltiples naves
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar universo procedimental (seed + estado de planetas visitados)
  - Service Workers: PWA para explorar offline (modo sandbox sin eventos galácticos)
  - Canvas API: Manipular píxeles para renderizado de planetas
  - Perlin Noise: Generación procedimental de superficies planetarias

**Características Visuales:**
- **Paleta de colores:**
  - Mapa galáctico: Negro profundo (#000005) con estrellas multicolores (blanco, azul, rojo, amarillo)
  - Planetas: Colores realistas por tipo (terrestre=azul/verde, gas gigante=naranja/rojo, helado=blanco/cian)
  - Nave: Metal gris (#A0A0A0) con acentos de color por jugador (azul, rojo, verde)
  - UI: Semi-transparente oscuro con glassmorphism (#000000 opacity 0.6, backdrop-filter blur 10px)
- **Animaciones:**
  - Nave viajando: Warp speed effect (stars stretch into lines, 2s)
  - Entrar en órbita: Zoom in suave hacia el planeta (1.5s)
  - Descubrimiento alienígena: Flash verde + holograma aparece (1s)
  - Colisión: Shake de pantalla + explosión de partículas (0.5s)
  - Establecer colonia: Estructuras emerge del suelo (scale up, 1s)
- **Feedback visual:**
  - Planeta visitado: Icono de checkmark verde en miniatura
  - Recurso descubierto: Icono del recurso brilla (oro, hierro, agua)
  - Misión completada: Modal con recompensa, experiencia, desbloqueos
  - Threat alert: Borde rojo pulsante + icono de peligro
- **Personalización:**
  - 100+ diseños de naves (exploradoras, de guerra, colonizadoras, científicas)
  - 50+ módulos (motores warp, escudos de energía, cañones de plasma, laboratorios, hangares)
  - 20+ diseños de colonias (pueblos futuristas, ciudades orbital, bases subterráneas)
  - Avatar de capitán con 50+ combinaciones (traje de espacial, rango, insignias)
  - Skins de galaxia (realista, neon, pixel art, watercolor)

**Audio:**
- **Efectos de sonido:**
  - Motores de nave: Hum constante con variación por potencia (100-200Hz)
  - Warp speed: Whoosh ascendente (200-800Hz, 2s)
  - Órbita: Subtle hum espacial (50Hz, continuous)
  - Descubrimiento: Mystic chime (C4-E4-G4-C5, 1.5s)
  - Colisión: Crash + explosion (300-600ms)
  - Recurso recolectado: Satisfying ping (C6, 150ms)
  - Alerta roja: Alarm pulsante (500ms on/off)
- **Música:**
  - Mapa galáctico: Ambient space music (synth pads, drones, 60 BPM)
  - Exploración: Upbeat sci-fi (electronic + strings, 100 BPM)
  - Combate: Intense orchestral (brass + drums, 120 BPM)
  - Descubrimiento alienígena: Ethereal choir + bells (70 BPM)
  - Colonización: Hopeful piano + synth (80 BPM)
- **Voz:**
  - Tutorial: Voz de IA de nave amigable ("Bienvenido, Capitán. Tu misión es explorar la galaxia")
  - Alerta: Voz de emergencia ("¡Alerta roja! ¡Detectada nave enemiga!")
  - Descubrimiento: Voz misteriosa ("Has descubierto un artefacto alienígena antiguo")
- **Audio espacial:** Sonidos 3D para feedback de posición (alerta desde la izquierda suena en el canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 120-150 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en mapa galáctico con 1000+ estrellas visibles
  - Latencia: <50ms para respuesta de navegación (feedback instantáneo)
  - Entidades máximas: 10,000 estrellas, 500 planetas visitados simultáneamente
  - Memoria máxima: 300MB (incluye assets de 100 diseños de nave, 50 planetas únicos)
  - Generación procedimental: <200ms para generar nuevo sistema solar
- **Riesgos técnicos:**
  - Generación procedimental escalable: Mantener performance mientras el universo crece indefinidamente
  - Optimización de renderizado de miles de estrellas: Usar instanced rendering o LOD
  - Sincronización de estado multiplayer: Si hay multiplayer, sincronizar miles de entidades
  - Balance de dificultad: Evitar que el juego sea frustrante (recursos demasiado escasos)

**Valor Educativo:**
- **Astronomía real:** Los niños aprenden sobre planetas, estrellas, sistemas solares, galaxias
- **Física espacial:** Entienden conceptos: órbitas, gravedad, velocidad de escape, propulsión
- **Recursos y gestión:** Aprenden a balancear extracción de recursos con sostenibilidad
- **Vocabulario científico:** Aprenden términos: atmósfera, gravedad, órbita, protuberancia solar, nebulosa
- **Exploración científica:** Desarrollan curiosidad sobre el universo, deseo de descubrir
- **Pensamiento estratégico:** Planificar rutas óptimas, priorizar planetas valiosos
- **Colaboración:** Modo cooperative donde 2-4 jugadores exploran galaxias compartidas

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Procedural Generation - Algorithms](https://www.redblobgames.com/maps/terrain-from-noise/) - Generación de planetas
- [No Man's Sky - Space exploration game](https://www.nomanssky.com/) - Inspiración para exploración infinita
- [Elite Dangerous - Space sim](https://www.elitedangerous.com/) - Físicas de vuelo espaciales
- [SpaceEngine - Universe simulator](https://spaceengine.org/) - Renderizado realista de planetas
- [NASA - Space education](https://www.nasa.gov/stem) - Referencia científica de astronomía
- [Web Audio API - Spatial audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos espaciales 3D
- [PWA - Offline exploration](https://web.dev/offline/) - PWA para explorar sin internet

---

#### Idea #7: Chef Academy: Culinary Adventure

**Concepto:**
Juego de cocina educativo donde los jugadores aprenden a cocinar recetas reales, dominan técnicas culinarias y administran su propio restaurante virtual. Combina gameplay tipo Cooking Mama con lecciones de nutrición, ingredientes y seguridad en la cocina.

**Motivación:**
- **Logros inmediatos:** Completar recetas desbloquea nuevos ingredientes y técnicas
- **Progresión culinaria visible:** Comienzan con recetas simples (huevos revueltos), avanzan a platos complejos (paella, soufflé)
- **Creatividad gastronómica:** Modo freestyle donde inventan sus propias recetas
- **Competencia social:** Leaderboard global de chefs y battles culinarias 1v1
- **Descubrimiento de ingredientes:** Desbloquean ingredientes exóticos (saffrón, truffle, wasabi)

**Mecánica Principal:**
Los jugadores son estudiantes en una academia de cocina virtual. Cada misión presenta una receta con mini-games para cada paso de preparación: picar vegetales, mezclar ingredientes, cocinar a temperatura correcta, decorar platos. Las recetas progresan en dificultad: desayuno simple → almuerzo → cena → postres → platos gourmet. Las misiones enseñan: cortes (julienne, brunoise), técnicas (sauté, bake, fry, steam), temperaturas (rare, medium, well-done), seguridad (no tocar ollas calientes), nutrición (balance de grupos alimenticios). Hay modo historia (convertirse en chef ejecutivo) y modo sandbox (cocinar sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar ingredientes, herramientas, recetas
- **Arrastrar (Drag):** Mover ingredientes a sartenes, mezclar en bowls
- **Pinch:** Zoom en los mini-games de preparación para ver detalles
- **Dos dedos (drag):** Pan/mover la vista de la cocina
- **Tap rápido:** Picar vegetales (tap, tap, tap en el área de corte)
- **Swipe horizontal:** Cambiar entre vista de cocina y vista de receta
- **Gestos complejos:**
  - Shake del dispositivo = "remover" (mejclar en bowl o sartén)
  - Dibujo de círculo = mezclar ingredientes (batir huevos, amasar masa)
  - Doble tap en ingrediente = ver información nutricional (calorías, proteínas, carbohidratos)
  - Arrastrar y soltar = plating (decorar el plato final)
- **Multitouch hasta 3 dedos:** Cortar múltiples vegetales simultáneamente
- **Escribir:** Nombrar recetas propias, escribir notas de chef

**Accesibilidad:**
- Mini-games con áreas generosas (min 80px) para fácil interacción
- Ingredientes con iconos grandes (min 60px) y etiquetas claras
- Voice assistant explica paso a paso ("Ahora corta los tomatos en cubos")
- Modo "Slow Cooking" para practicar recetas a 0.5x velocidad
- Haptic feedback para eventos (vibración al completar un paso)
- Color coding por tipo de ingrediente (vegetales=verde, carnes=rojo, lácteos=blanco)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de cocina isométrica
  - `<canvas>` para mini-games de preparación (corte, mezcla, cocción)
  - `<canvas>` para plating (decoración del plato final)
  - `<video>` para tutoriales animados de técnicas culinarias
  - `<input type="range">` para control de temperatura y tiempo
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de cocina, mini-games)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del chef (recetas desbloqueadas, ingredientes)
  - Animaciones: GSAP para transiciones entre pasos de receta
  - Data: JSON con 200+ recetas, ingredientes, técnicas, información nutricional
  - Recipe algorithm: Custom lógica para validar pasos de preparación
  - Storage: IndexedDB para guardar recetas inventadas y progreso
- **CSS:**
  - Grid layout para cocina (12 columnas responsivo)
  - CSS Transforms para animaciones de cocina (scale, rotate)
  - CSS Animations para feedback de mini-games (pulse, shake)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de ingredientes
- **Otros:**
  - Web Audio API: Sonidos de cocina (chopping, sizzling, mixing)
  - DeviceOrientationEvent: Detectar shake para mezclar ingredientes
  - Touch Events API: Multi-touch para cortar múltiples ingredientes
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar recetas y progreso (offline play)
  - Service Workers: PWA para cocinar offline
  - Canvas API: Manipular píxeles para renderizado de ingredientes
  - Speech API: Voice commands para navegación ("siguiente paso", "repetir")

**Características Visuales:**
- **Paleta de colores:**
  - Cocina: Tonos cálidos de restaurante (#FFF8E1 amarillo claro, #FFECB3 naranja)
  - Ingredientes: Colores realistas (tomate=rojo, lechuga=verde, queso=amarillo, carne=marrón)
  - Platos: Estilo vibrant y apetitoso (colores saturados, buen contraste)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, backdrop-filter blur 10px)
- **Animaciones:**
  - Cortar vegetales: Chopping animation (knife moves up/down, 0.2s por chop)
  - Mezclar: Circular motion animation (0.5s por revolución)
  - Cocinar: Bubbling effect en sartenes (continuous)
  - Plato completado: Flash dorado + steam rising (1s)
  - Desbloquear ingrediente: Ingredient emerges with glow (1.5s)
- **Feedback visual:**
  - Paso completado: Icono de checkmark verde, barra de progreso avanza
  - Paso fallado: Shake rojo + hint ("Corta los tomatos más pequeños")
  - Receta completada: Modal con foto final, estrellas (1-5), experiencia ganada
  - Battle ganado: Confetti de ingredientes (200 particles, 2s)
- **Personalización:**
  - 200+ recetas: Desayuno, almuerzo, cena, postres, platos gourmet
  - 500+ ingredientes: Vegetales, carnes, lácteos, especias, exóticos
  - Modo freestyle: Crear recetas propias con ingredientes disponibles
  - Avatar de chef con 50+ combinaciones (uniforme, gorro, utensilios)
  - Skins de cocina (clásica, moderna, rustic, futuristic)

**Audio:**
- **Efectos de sonido:**
  - Cortar vegetales: Chop sound (knife hitting board, 100ms)
  - Sizzling: Frying sound (continuous, 200-400Hz)
  - Mezclar: Whisk sound (whoosh, 150ms)
  - Plato completado: Ding satisfactorio (C5-E5-G5, 1s)
  - Ingrediente desbloqueado: Chime ascendente (C4-E4-G4-B5, 1.5s)
  - Battle ganado: Fanfare de cocina (8 notas, 2s)
- **Música:**
  - Menú principal: Upbeat French café music (piano + accordion, 90 BPM)
  - Preparación: Rhythmic cooking beats (percussion + bass, 110 BPM)
  - Plating: Elegant classical (strings, 80 BPM)
  - Battle: Intense culinary competition (orchestral, 120 BPM)
  - Restaurante activo: Ambient restaurant noise (chatter, clinking glasses, 70 BPM)
- **Voz:**
  - Tutorial: Voz de chef profesional amigable ("¡Bienvenido a Chef Academy! Vamos a aprender a cocinar")
  - Hint: Voz de asistente ("Recuerda no sobrecooking el salmón")
  - Receta completada: Voz celebratoria ("¡Excelente! Has dominado esta receta")
- **Audio espacial:** Sonidos 3D para feedback de posición (sartén cerca suena más fuerte)

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 80-100 horas (3-4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de cocina y mini-games
  - Latencia: <50ms para respuesta de mini-games (feedback instantáneo)
  - Entidades máximas: 500 sprites de ingredientes simultáneamente
  - Memoria máxima: 180MB (incluye sprites de 200 recetas, 500 ingredientes)
  - Mini-game timing: Window de 100ms para acierto (±50ms es "perfect")
- **Riesgos técnicos:**
  - Balance de dificultad: Evitar que los mini-games sean frustrantes (timing demasiado estricto)
  - Validación de recetas: Detectar pasos incorrectos sin ser demasiado estricto
  - Optimización de sprites: 500 ingredientes pueden consumir mucha memoria
  - Multitouch: Algunos móviles no soportan multitouch simultáneo en 3 puntos

**Valor Educativo:**
- **Cocina real:** Los niños aprenden recetas, técnicas culinarias, ingredientes
- **Nutrición:** Entienden grupos alimenticios, balance nutricional, porciones
- **Seguridad en la cocina:** Aprenden precauciones (no tocar ollas calientes, lavar manos)
- **Vocabulario culinario:** Aprenden términos: sauté, julienne, brunoise, rare, medium, well-done
- **Matemáticas:** Cálculo de temperaturas, tiempos de cocción, conversiones de medidas
- **Creatividad:** Modo freestyle les permite inventar recetas originales
- **Independencia:** Desarrollan confianza para cocinar en la vida real

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Cooking Mama - Cooking game](https://www.cookingmama.com/) - Inspiración para mini-games de cocina
- [Toca Kitchen - Kids cooking app](https://tocaboca.com/) - Interacción simple con cocina
- [HelloFresh - Recipe app](https://www.hellofresh.com/) - Referencia de recetas e información nutricional
- [Nutrition.gov - Food and nutrition](https://www.nutrition.gov/) - Datos nutricionales reales
- [Web Audio API - Kitchen sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de cocina
- [Speech API - Voice commands](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) - Comandos de voz
- [PWA - Offline cooking](https://web.dev/offline/) - PWA para cocinar sin internet

---

#### Idea #8: Detective Chronicles: Mystery Solver

**Concepto:**
Juego de detectives e investigadores donde los jugadores resuelven misterios criminales y de aventura buscando pistas, interrogando testigos, analizando evidencias y deduciendo al culpable. Combina gameplay tipo Sherlock Holmes con elementos de lógica y razonamiento deductivo.

**Motivación:**
- **Misterio y suspense:** Cada caso es único con giros y sorpresas
- **Satisfacción de resolver:** Desvelar la verdad y atrapar al culpable
- **Progresión de detective:** Comienzan con casos simples (robos), avanzan a crímenes complejos (asesinatos, conspiraciones)
- **Colección de casos:** 100+ casos con historias únicas en diferentes géneros (noir, sci-fi, histórico)
- **Personalización de detective:** Crear avatar con habilidades únicas (forense, hacker, psicólogo)

**Mecánica Principal:**
Los jugadores son detectives en una ciudad procedimental con distritas únicos (downtown, barrio pobre, zona industrial, suburbios). Cada caso comienza con un crimen: escena del crimen con pistas, testigos para interrogar, evidencias para analizar, sospechosos para investigar. Los jugadores deben: buscar pistas en la escena (inspeccionar objetos), interrogar testigos (diálogo con opciones), analizar evidencias (laboratorio forense, hackeo de computadores), deducir quién es el culpable (conexiones lógicas). El sistema de deducción permite vincular pistas con sospechosos. Casos progresan en dificultad: robo simple → hurto → asesinato → conspiración internacional.

**Interacción Móvil:**
- **Tap simple:** Seleccionar pistas, testigos, sospechosos, evidencias
- **Arrastrar (Drag):** Mover evidencias al laboratorio, conectar pistas con sospechosos (deduction board)
- **Pinch:** Zoom en escena del crimen para ver detalles (huellas, manchas)
- **Dos dedos (drag):** Pan/mover la vista de la escena
- **Tap rápido:** Tomar fotografías de evidencias (flash de cámara)
- **Tap largo (Long press):** Ver información detallada de evidencia (análisis forense)
- **Swipe horizontal:** Cambiar entre vista de escena, vista de interrogatorio, vista de deducción
- **Gestos complejos:**
  - Shake del dispositivo = "aumentar intensidad" en interrogatorio (opción agresiva)
  - Dibujo de línea = conectar dos pistas en el deduction board
  - Doble tap en evidencia = ampliar (zoom en detalles microscópicos)
  - Arrastrar testigo a interrogatorio = iniciar entrevista
- **Multitouch hasta 3 dedos:** Seleccionar múltiples evidencias para análisis simultáneo
- **Escribir:** Tomar notas de investigador, escribir conclusiones finales

**Accesibilidad:**
- Escenas con pistas resaltadas (outline azul) para fácil identificación
- Testigos con iconos grandes (min 80px) y etiquetas claras
- Voice assistant describe escena ("Hay una mancha de sangre en el suelo")
- Modo "Hint System" para dar pistas cuando están atascados
- Haptic feedback para descubrimientos (vibración al encontrar evidencia)
- Color coding por tipo de evidencia (física=naranja, digital=azul, testimonio=verde)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de escenas del crimen (isométrico)
  - `<canvas>` para deduction board (conexiones entre pistas y sospechosos)
  - `<canvas>` para laboratorio forense (microscopio, análisis de ADN)
  - `<video>` para cutscenes de testimonios y revelaciones
  - `<details>/<summary>` para colapsar información de casos
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de escenas, interacción con pistas)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del detective (casos resueltos, pistas recolectadas)
  - Deduction system: Custom algorithm para validar conexiones lógicas entre pistas y sospechosos
  - Procedural cases: Custom generators para crear casos únicos (escena, sospechosos, pistas)
  - Animaciones: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar casos y progreso (offline play)
- **CSS:**
  - Grid layout para deduction board (10x10 grid)
  - CSS Transforms para zoom en escenas (transform-origin: center)
  - CSS Animations para feedback de descubrimiento (pulse, glow)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de evidencia
- **Otros:**
  - Web Audio API: Sonidos de investigación (footsteps, door opening, camera flash)
  - DeviceOrientationEvent: Detectar shake para interrogatorio agresivo
  - Touch Events API: Multi-touch para conectar múltiples pistas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar casos y progreso (offline play)
  - Service Workers: PWA para investigar offline
  - Canvas API: Manipular píxeles para renderizado de evidencias
  - Speech API: Voice commands para navegación ("siguiente testigo", "ver evidencia")

**Características Visuales:**
- **Paleta de colores:**
  - Escenas del crimen: Noir style (blanco y negro con acentos de rojo para sangre)
  - Laboratorio: Clean clinical (blanco, gris, azul)
  - Deduction board: Paper texture (marrón claro, líneas de grafito)
  - UI: Semi-transparente oscuro con glassmorphism (#000000 opacity 0.6, backdrop-filter blur 10px)
- **Animaciones:**
  - Descubrir evidencia: Flash azul + icono de lupa (0.5s)
  - Interrogatorio: Testigo talks with lip sync (simulado con spritesheet, 10 FPS)
  - Conectar pistas: Line animation entre evidencia y sospechoso (0.5s)
  - Caso resuelto: Flash dorado + confetti de detective badges (2s)
  - Escena del crimen: Zoom in suave hacia la escena (1s)
- **Feedback visual:**
  - Pista encontrada: Icono de lupa azul brillante
  - Conexión válida: Línea verde brillante entre evidencia y sospechoso
  - Conexión inválida: Línea roja pulsante, hint ("Esta evidencia no conecta con este sospechoso")
  - Caso resuelto: Modal con foto del culpable, explicación, experiencia
  - Badge desbloqueado: Modal con escudo dorado + animación
- **Personalización:**
  - 100+ casos únicos (robos, asesinatos, conspiraciones, secuestros, fraudes)
  - 50+ habilidades de detective (forense, hacker, psicólogo, negociador, perfilador)
  - Avatar de detective con 60+ combinaciones (traje, gafas, sombrero, accesorios)
  - Skins de casos (noir, sci-fi, histórico, cyberpunk)
  - Deduction board con diferentes estilos (papel, digital, hologram)

**Audio:**
- **Efectos de sonido:**
  - Footsteps: Walking sound (continuous, 100-200Hz)
  - Door opening: Creak (200-400ms)
  - Camera flash: Click (short, 50ms)
  - Evidence found: Chime ascendente (C4-E4-G4, 0.5s)
  - Interrogación agresivo: Slam sound (300ms)
  - Caso resuelto: Dramatic chord (C4-E4-G4-B5, 2s)
  - Badge desbloqueado: Fanfare de detective (8 notas, 1.5s)
- **Música:**
  - Menú principal: Noir jazz (piano + saxophone, 80 BPM)
  - Escena del crimen: Suspenseful orchestral (strings, 60 BPM)
  - Interrogatorio: Tense electronic (synth, 90 BPM)
  - Laboratorio: Clean clinical (white noise, ambient, 50 BPM)
  - Caso resuelto: Triumphant orchestral (brass + drums, 110 BPM)
- **Voz:**
  - Tutorial: Voz de detective experimentado amigable ("Bienvenido al departamento de detectives")
  - Testigo: Voz distinta por personaje (diferentes tonos, acentos)
  - Revelación: Voz narrativa dramática ("El culpable es...")
- **Audio espacial:** Sonidos 3D para feedback de posición (testigos cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de escenas del crimen y deduction board
  - Latencia: <50ms para respuesta de interacción con evidencias (feedback instantáneo)
  - Entidades máximas: 300 objetos de escena simultáneamente
  - Memoria máxima: 200MB (incluye sprites de 100 casos, 50 testigos, 100 evidencias)
  - Deduction system: <100ms para validar conexiones lógicas
- **Riesgos técnicos:**
  - Procedural case generation: Crear casos coherentes con giros lógicos
  - Balance de dificultad: Evitar que los casos sean frustrantes (pistas demasiado obscuras)
  - Validación de deducciones: Detectar conexiones correctas sin ser demasiado estricto
  - Optimización de escenas: 300 objetos pueden consumir mucha memoria

**Valor Educativo:**
- **Lógica y razonamiento:** Los niños aprenden a conectar pistas, deducir conclusiones, pensar críticamente
- **Investigación científica:** Entienden método científico: observar, hipótesis, experimentar, concluir
- **Habilidades de observación:** Desarrollan atención al detalle (notar huellas, manchas, inconsistencias)
- **Vocabulario de investigación:** Aprenden términos: evidencia, testimonio, deducción, alibí, sospechoso
- **Ética y moral:** Los casos plantean dilemas éticos (¿arrestar o perdonar?)
- **Perseverancia:** Los casos requieren investigación profunda, ensayo y error
- **Empatía:** Interrogar testigos con diferentes perspectivas desarrolla comprensión de otros

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Sherlock Holmes Consulting Detective - Detective game](https://mythicentertainment.com/) - Inspiración para casos
- [L.A. Noire - Detective game](https://www.rockstargames.com/lanoire/) - Interrogatorio y deducción
- [Detective Pikachu - Mystery solving](https://www.pokemon.com/us/pokemon-video-games/detective-pikachu/) - Investigación amigable para niños
- [Nancy Drew - Detective series](https://www.herinteractive.com/) - Casos misteriosos
- [Web Audio API - Investigation sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de investigación
- [PWA - Offline investigation](https://web.dev/offline/) - PWA para investigar sin internet
- [Procedural Generation - Case generators](https://www.redblobgames.com/maps/voronoi-diagrams/) - Generación de casos

---

---

#### Idea #9: Sports Champion: Multi-Arena Competition

**Concepto:**
Juego de deportes multideportivo donde los jugadores compiten en 12 disciplinas olímpicas, entrenan atletas, participan en torneos globales y desbloquean movimientos especiales. Combina gameplay tipo Mario Sports con elementos de RPG y gestión de atletas.

**Motivación:**
- **Competencia intensa:** Torneos globales con 1000+ jugadores simultáneos
- **Logros atléticos:** Medallas, récords mundiales, badges por especialidades
- **Progresión de campeón:** Comienzan como novatos, avanzan a atletas olímpicos
- **Personalización de atletas:** Crear atletas únicos con habilidades y estilos
- **Cooperación en equipo:** Deportes colectivos con comunicación en tiempo real

**Mecánica Principal:**
Los jugadores controlan atletas en un complejo deportivo con 12 arenas: fútbol, básquetbol, natación, atletismo, gimnasia, tenis, voleibol, hockey, bádminton, ping-pong, boxeo, artes marciales. Cada disciplina tiene gameplay único: timing (natación), reflejos (ping-pong), estrategia (fútbol), precisión (tenis). Los atletas tienen RPG stats: velocidad, fuerza, resistencia, técnica. Los jugadores entrenan atletas en gimnasios, participan en ligas y torneos, desbloquean movimientos especiales (super tiro, salto increíble). Modo historia (camino a las Olimpiadas) y modo arcade (partidas rápidas).

**Interacción Móvil:**
- **Tap simple:** Pasear balón, disparar, servir, golpear
- **Arrastrar (Drag):** Mover atleta en campo, driblar, controlar dirección de tiro
- **Pinch:** Zoom en la arena para ver detalles tácticos
- **Dos dedos (drag):** Pan/mover la vista del campo
- **Tap rápido:** Golpeos rápidos en tenis/ping-pong (más de 2 golpes/segundo)
- **Swipe horizontal:** Cambiar entre vista de arena y vista de estadísticas
- **Gestos complejos:**
  - Shake del dispositivo = "power-up" temporal (velocidad x2 por 10s)
  - Dibujo de trayectoria = planear tiro/pase curvo
  - Doble tap en atleta = ver perfil (stats, historial, habilidades)
  - Arrastrar atleta a zona táctica = formación especial
- **Multitouch hasta 4 dedos:** Controlar múltiples atletas en deportes colectivos
- **Escribir:** Nombrar atletas, escribir mensajes de equipo

**Accesibilidad:**
- Botones táctiles grandes (min 60px) con feedback visual claro
- Controles adaptativos (d-pad virtual, joystick o swipe-to-move)
- Voice assistant da instrucciones tácticas ("¡Cubre al delantero!")
- Modo "Training Mode" para practicar movimientos sin presión
- Haptic feedback sincronizado con golpes y pases
- Color coding por equipo (azul vs rojo) y jugador (número y posición)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de arenas (2D isométrico)
  - `<canvas>` para representación de atletas (spritesheets)
  - `<video>` para replays y celebraciones
  - `<input type="range">` para control de fuerza y ángulo
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de arenas, físicas de balón)
  - Physics: Matter.js para física realista de balones y cuerpos
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado del torneo (puntuaciones, clasificaciones)
  - Multiplayer: WebSockets con Socket.io para partidos en tiempo real
  - AI oponentes: Custom AI para bot inteligentes (dificultad adaptativa)
  - Animaciones: GSAP para transiciones y celebraciones
  - Storage: IndexedDB para guardar atletas y estadísticas
- **CSS:**
  - Flexbox para layout de HUD (score, timer, energía)
  - CSS Grid para tácticas de formación (5x5 grid)
  - CSS Transforms para zoom y rotación de arena
  - CSS Animations para feedback de golpes (flash, shake)
  - CSS Variables para theming (colores de equipos)
  - Backdrop-filter para blur de estadísticas superpuestas
- **Otros:**
  - Web Audio API: Sonidos deportivos (silbatos, golpes, multitud)
  - DeviceOrientationEvent: Detectar shake para power-ups
  - Touch Events API: Multi-touch para control de múltiples atletas
  - Pointer Events API: Unificar mouse/touch/pen input
  - WebSockets: Multiplayer en tiempo real
  - IndexedDB: Guardar progreso y atletas (offline play)
  - Service Workers: PWA para jugar offline (modo training)

**Características Visuales:**
- **Paleta de colores:**
  - Arenas: Colores por deporte (césped verde=verde, pista=azul, gimnasio=marrón)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, blur 5px)
  - Atletas: Colores de equipo (azul=#0066CC, rojo=#CC0000) con accesorios personalizados
  - Efectos: Oro para logros, blanco para power-ups, rojo para alerts
- **Animaciones:**
  - Atleta corriendo: Walk cycle con spritesheet (8 frames, 12 FPS)
  - Golpe de balón: Follow-through animation (0.3s)
  - Celebración: Emote animado (salto, baile, pose, 1-2s)
  - Gol marcado: Confetti + flash + cámara lenta (2s)
  - Power-up activado: Efecto de aura pulsante (10s)
- **Feedback visual:**
  - Golpe exitoso: Flash blanco + trail de movimiento (0.2s)
  - Golpe fallado: Shake rojo + texto ("¡Casi!")
  - Gol anotado: Alert modal + cuenta regresiva (5s)
  - Récord mundial: Modal dorado + fuegos artificiales (3s)
- **Personalización:**
  - 12 deportes: Fútbol, básquetbol, natación, atletismo, gimnasia, tenis, voleibol, hockey, bádminton, ping-pong, boxeo, artes marciales
  - 200+ movimientos especiales: Super tiro, salto increíble, defensa impenetrable
  - Avatar de atleta con 80+ combinaciones (cabello, piel, uniforme, accesorios)
  - Skins de arenas (clásica, moderna, futuristic, estadio olímpico)
  - Modo entrenamiento personalizado ( drills, ejercicios específicos)

**Audio:**
- **Efectos de sonido:**
  - Golpe de balón: Thud satisfactorio (100-300ms, variación por fuerza)
  - Silbato: Piiip agudo (200ms)
  - Gol anotado: Goool! (grito de multitud, 1-2s)
  - Celebración: Cheering + confetti (2s)
  - Power-up: Charge up sound + release (1s)
  - Récord mundial: Fanfare épico (3s)
- **Música:**
  - Menú principal: Upbeat sports anthem (120 BPM)
  - Arena activa: Pumping electronic (130 BPM)
  - Training: Motivational (guitarra + drums, 100 BPM)
  - Torneo final: Epic orchestral (brass + choir, 110 BPM)
  - Pausa: Chill lo-fi (80 BPM)
- **Voz:**
  - Comentador: Voz de sports caster ("¡¡GOLAZO!!")
  - Coach: Voz de entrenador ("¡Mantén la concentración!")
  - Anuncio: Voz de estadio ("¡Atención, 5 minutos restantes!")
- **Audio espacial:** Sonidos 3D para feedback de posición (balón cerca suena más fuerte)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 110-130 horas (4-5 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de arenas (22 atletas máximo)
  - Latencia: <50ms para respuesta de controles (feedback instantáneo)
  - Multiplayer: <100ms de sincronización (WebSockets)
  - Memoria máxima: 250MB (incluye sprites de 80 atletas, 12 arenas)
  - Physics: <50ms para cálculo de trayectoria de balón
- **Riesgos técnicos:**
  - Balance de física: Balones deben comportarse realistas sin frustrar
  - Sincronización multiplayer: 22 atletas simultáneos requiere optimización de paquetes
  - AI inteligente: Bots deben ser desafiantes pero no imposibles
  - Controles táctiles: 4 atletas simultáneos requiere multitouch robusto

**Valor Educativo:**
- **Deportes reales:** Los niños aprenden reglas, técnicas, estrategia de múltiples deportes
- **Trabajo en equipo:** Deportes colectivos enseñan cooperación y comunicación
- **Disciplina y perseverancia:** Entrenar y mejorar requiere práctica repetida
- **Vocabulario deportivo:** Aprenden términos: offside, dribbling, smash, sprint, rally
- **Matemáticas:** Cálculo de distancias, ángulos, timing en deportes
- **Salud y fitness:** Los niños valoran el ejercicio físico y la competencia sana
- **Respeto y fair play:** Valores de deportividad y respeto al oponente

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Física realista de balones
- [Mario Sports series - Multi-sport games](https://www.nintendo.com/) - Inspiración para gameplay multideportivo
- [NBA 2K Mobile - Basketball game](https://nba.2k.com/mobile) - Controles táctiles y animaciones
- [FIFA Mobile - Football game](https://www.ea.com/fifa/mobile) - Estrategia y tácticas
- [Sports.gov - Sports education](https://www.olympic.com/) - Reglas de deportes olímpicos
- [Web Audio API - Sports sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos deportivos
- [Socket.io - Real-time multiplayer](https://socket.io/) - Multiplayer en tiempo real

---

#### Idea #10: History Explorer: Time Traveler Adventure

**Concepto:**
Juego de historia y viajes en el tiempo donde los jugadores visitan épocas históricas, conocen personajes reales, resuelven problemas históricos y preservan el conocimiento de la humanidad. Combina RPG con elementos educativos de historia mundial.

**Motivación:**
- **Descubrimiento del pasado:** Cada época es única con civilizaciones, eventos, figuras históricas
- **Misión de preservación:** Salvar conocimiento perdido (bibliotecas, artefactos, documentos)
- **Aventura épica:** Viajar desde Egipto antiguo hasta el futuro distópico
- **Colección de artefactos:** 200+ reliquias históricas para coleccionar
- **Impacto en la historia:** Las decisiones del jugador alteran el timeline (butterfly effect)

**Mecánica Principal:**
Los jugadores son Time Travelers con un dispositivo de viaje temporal. Viajan a 20 épocas históricas: Egipto antiguo (2600 a.C.), Grecia clásica (400 a.C.), Roma Imperial (100 d.C.), Edad Media (1200 d.C.), Renacimiento (1500), Revolución Industrial (1800), Primera Guerra Mundial (1914), Segunda Guerra Mundial (1944), Guerra Fría (1960), Siglo XXI (2020), Futuro (2050, 2100, 2200). Cada época tiene misiones basadas en eventos reales: construir pirámides, participar en batallas, inventar tecnologías, resolver crisis. Los jugadores interactúan con personajes históricos (Cleopatra, Leonardo da Vinci, Albert Einstein). Modo historia (salvar el timeline de colapso) y modo sandbox (explorar épocas libremente).

**Interacción Móvil:**
- **Tap simple:** Interactuar con NPCs, seleccionar opciones de diálogo, recoger artefactos
- **Arrastrar (Drag):** Mover personaje en el mundo, arrastrar objetos al inventario
- **Pinch:** Zoom en el mapa histórico (0.5x-3x)
- **Dos dedos (drag):** Pan/mover la vista del mundo
- **Tap rápido:** Atravesar brechas temporales (portal de tiempo)
- **Tap largo (Long press):** Ver información histórica de artefacto/NPC (año, contexto, significado)
- **Swipe horizontal:** Cambiar entre vista de época, vista de timeline, vista de inventario
- **Gestos complejos:**
  - Shake del dispositivo = "emergency time jump" (escapar de peligro inmediato)
  - Dibujo de reloj = abrir dispositivo de tiempo (seleccionar época destino)
  - Doble tap en personaje = iniciar conversación
  - Arrastrar artefacto a NPC = ofrecer regalo (mejora relación)
- **Multitouch hasta 3 dedos:** Selección múltiple de artefactos para trade
- **Escribir:** Escribir entradas en diario de Time Traveler

**Accesibilidad:**
- NPCs con iconos grandes (min 80px) y etiquetas de nombre/época
- Artefactos resaltados (outline dorado) para fácil identificación
- Voice assistant explica contexto histórico ("Este es el año 2600 a.C., Egipto")
- Modo "History Mode" con narración simplificada para niños más jóvenes
- Haptic feedback para eventos temporales (vibración al atravesar brecha de tiempo)
- Color coding por época (antiguo=oro, medieval=bronce, moderno=plata, futuro=neón)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de épocas históricas (isométrico)
  - `<canvas>` para dispositivo de tiempo (UI circular con épocas)
  - `<canvas>` para timeline (línea de tiempo vertical con épocas)
  - `<video>` para cutscenes de eventos históricos
  - `<details>/<summary>` para colapsar información histórica
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de épocas, interacción con mundo)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado del timeline (épocas visitadas, cambios hechos)
  - Timeline system: Custom algorithm para calcular butterfly effect (cambios alteran futuro)
  - Procedural history: Custom generators para NPCs históricos (personalidades basadas en registros)
  - Animaciones: GSAP para transiciones entre épocas (warp effect)
  - Storage: IndexedDB para guardar timeline completo (miles de entidades)
- **CSS:**
  - Grid layout para timeline (vertical con épocas en nodos)
  - CSS Transforms para zoom en épocas (transform-origin: center)
  - CSS Animations para feedback de viaje temporal (fade, warp)
  - Backdrop-filter para blur de paneles históricos
  - CSS Variables para theming por época (colores antiguos, modernos, futuristas)
  - Flexbox para contenedores de artefactos
- **Otros:**
  - Web Audio API: Sonidos por época (instrumentos antiguos, máquinas modernas, sonidos futuristas)
  - DeviceOrientationEvent: Detectar shake para emergency jump
  - Touch Events API: Multi-touch para seleccionar múltiples artefactos
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar timeline e inventario (offline play)
  - Service Workers: PWA para explorar épocas offline
  - Canvas API: Manipular píxeles para renderizado de épocas
  - Speech API: Voice commands para navegación temporal ("ir a 1800", "siguiente época")

**Características Visuales:**
- **Paleta de colores:**
  - Egipto antiguo: Dorado, arena, azul Nilo (#FFD700, #F4A460, #1E90FF)
  - Grecia clásica: Blanco mármol, azul Egeo, verde olivo (#FFFFFF, #4682B4, #556B2F)
  - Roma imperial: Rojo púrpura, mármol, bronce (#800080, #F5F5DC, #CD7F32)
  - Edad Media: Piedra gris, rojo gótico, madera parda (#808080, #8B0000, #8B4513)
  - Renacimiento: Fresco, dorado, rojo italiano (#FFF8DC, #FFD700, #DC143C)
  - Revolución Industrial: Carbón negro, hierro gris, vapor blanco (#2F4F4F, #A9A9A9, #F0FFFF)
  - Siglo XXI: Azul corporativo, gris urbano, neón verde (#0066CC, #696969, #39FF14)
  - Futuro: Negro profundo, neón cian, púrpura eléctrico (#000005, #00FFFF, #FF00FF)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, blur 10px)
- **Animaciones:**
  - Viaje temporal: Warp effect (estrellas stretch, colores morph, 1.5s)
  - Atravesar brecha: Portal animation (swirl + flash, 0.5s)
  - Artefacto encontrado: Glow dorado + emerge (1s)
  - Cambio de timeline: Flash + timeline se reorganiza (1s)
  - NPC histórico: Idle animation + gestures (1-2s)
- **Feedback visual:**
  - Artefacto coleccionado: Checkmark dorado en inventario
  - Decisión histórica: Split de timeline (dos caminos posibles)
  - Timeline alterado: Ruta cambia de color (rojo=alterado, azul=original)
  - Época completada: Badge de época desbloqueado
  - Butterfly effect: Efecto de mariposas + mensaje ("¡Has alterado el futuro!")
- **Personalización:**
  - 20 épocas históricas con 50+ NPCs cada una
  - 200+ artefactos (libros, herramientas, joyas, documentos, reliquias)
  - Avatar de Time Traveler con 70+ combinaciones (traje, dispositivo, accesorios)
  - Skins de dispositivo de tiempo (steampunk, holográfico, antiguo, futurista)
  - Timeline con múltiples rutas (buen final, mal final, final secreto)

**Audio:**
- **Efectos de sonido:**
  - Viaje temporal: Whoosh ascendente + warping (1.5s)
  - Atravesar brecha: Portal swoosh (0.5s)
  - Artefacto encontrado: Mystic chime (C4-E4-G4, 1s)
  - NPC histórico: Greeting sounds variados por época (200-500ms)
  - Timeline alterado: Clock ticking + butterfly flutter (1s)
  - Decisión importante: Dramatic chord (C4-E4-G4-B5, 1s)
- **Música:**
  - Egipto antiguo: Harpas e instrumentos de viento (80 BPM)
  - Grecia clásica: Lira + flauta (90 BPM)
  - Roma imperial: Cornetas + tambores (100 BPM)
  - Edad Media: Órgano + coro gótico (70 BPM)
  - Renacimiento: Lute + vihuela (85 BPM)
  - Revolución Industrial: Pistones + vapor (mechanical, 110 BPM)
  - Siglo XXI: Pop/rock moderno (120 BPM)
  - Futuro: Synth + electronic (130 BPM)
  - Timeline: Ambient temporal (drone + clock ticking, 60 BPM)
- **Voz:**
  - Narrador: Voz de historiador amigable ("Bienvenido, Time Traveler")
  - NPC histórico: Voces con acento/tono de época (latín, francés antiguo, etc.)
  - Device de tiempo: Voz de IA de tiempo ("Destino seleccionado: 2600 a.C.")
- **Audio espacial:** Sonidos 3D para feedback de posición (NPCs cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 130-160 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de épocas (200+ entidades por época)
  - Latencia: <100ms para respuesta de viaje temporal (feedback instantáneo)
  - Entidades máximas: 500 NPCs históricos simultáneamente
  - Memoria máxima: 350MB (incluye assets de 20 épocas, 200 artefactos)
  - Timeline calculation: <200ms para recalcular cambios de butterfly effect
- **Riesgos técnicos:**
  - Butterfly effect complexity: Miles de variables interactuando (épocas, decisiones, NPCs)
  - Precisión histórica vs. juego: Balancear hechos reales con gameplay divertido
  - Gestión de state: Guardar timeline completo con miles de cambios
  - Optimización de épocas: 20 épocas únicas requieren assets masivos

**Valor Educativo:**
- **Historia real:** Los niños aprenden épocas, eventos, figuras históricas
- **Comprensión temporal:** Entienden causa y efecto, cómo el pasado moldea el futuro
- **Cultura y civilización:** Conocen diferentes culturas, idiomas, tecnologías
- **Vocabulario histórico:** Aprenden términos: era, siglo, dinastía, revolución, imperio
- **Pensamiento crítico:** Las decisiones del jugador tienen consecuencias visibles
- **Curiosidad científica:** Desarrollan interés en arqueología, antropología, paleontología
- **Valores éticos:** Los dilemas históricos plantean preguntas sobre moralidad y progreso

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Assassin's Creed - Historical games](https://www.ubisoft.com/) - Inspiración para épocas históricas
- [Civilization series - Historical strategy](https://www.civilization.com/) - Timeline y épocas
- [Where in Time is Carmen Sandiego? - History game](https://www.learningcompany.com/) - Viajes en el tiempo educativo
- [National Geographic - History education](https://www.nationalgeographic.com/history) - Datos históricos reales
- [Timeline.js - Timeline visualization](https://timeline.knightlab.com/) - Visualización de timeline
- [Web Audio API - Period sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos por época
- [PWA - Offline history](https://web.dev/offline/) - PWA para explorar épocas sin internet

---

#### Idea #11: Robotics Lab: Robot Builder

**Concepto:**
Juego de robótica educativo donde los jugadores diseñan, construyen y programan robots para completar misiones desafiantes. Combina diseño de ingeniería con programación visual y física realista, enseñando principios de robótica, mecánica y código.

**Motivación:**
- **Ingeniería creativa:** Diseñar robots únicos con módulos intercambiables
- **Programación lógica:** Resolver puzzles con código real (bloques o JavaScript)
- **Desafíos progresivos:** Misiones desde mover un brazo robótico hasta navegar laberintos autónomos
- **Competencia de ingeniería:** Leaderboard global de diseños más eficientes
- **Carreras de robots:** Modo PvP donde los robots compiten en tiempo real

**Mecánica Principal:**
Los jugadores tienen un laboratorio de robótica isométrico con módulos: chasis, motores, sensores (cámara, ultrasonido, IMU), actuadores (brazos, ruedas, orugas, drones), procesadores. Diseñan robots conectando módulos con lógica de circuitos. Programan robots usando block coding (Scratch-style) o JavaScript real. Las misiones son puzzles físicos: recoger objetos, sortear obstáculos, seguir líneas, navegar laberintos, competir carreras. Los robots tienen física realista (gravedad, fricción, colisiones). Hay modo historia (convertirse en ingeniero jefe) y modo sandbox (construir sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar módulos, conectar componentes, ejecutar código
- **Arrastrar (Drag):** Mover módulos en el editor de diseño, arrastrar bloques de código
- **Pinch:** Zoom en el robot para ver conexiones (0.5x-3x)
- **Dos dedos (drag):** Pan/mover la vista del editor de diseño
- **Tap rápido:** Ejecutar código con step-by-step (debug mode)
- **Swipe horizontal:** Cambiar entre vista de diseño, vista de código, vista de simulación
- **Gestos complejos:**
  - Shake del dispositivo = "emergency stop" (parar robot inmediatamente)
  - Dibujo de circuito = conectar módulos automáticamente (wire routing)
  - Doble tap en módulo = ver especificaciones (torque, consumo, peso)
  - Arrastrar bloque de código al área = añadir lógica de programación
- **Multitouch hasta 5 dedos:** Conectar múltiples módulos simultáneamente
- **Escribir:** Escribir comentarios en código, nombrar robots

**Accesibilidad:**
- Módulos con iconos grandes (min 80px) y etiquetas claras de función
- Conexiones resaltadas (outline azul) para fácil identificación
- Voice assistant explica módulo ("Este es un motor DC con 500 RPM")
- Modo "Block Coding" para principiantes (Scratch-style)
- Haptic feedback para conexiones (vibración al conectar módulos)
- Color coding por tipo de módulo (motor=rojo, sensor=verde, procesador=azul)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de laboratorio isométrico
  - `<canvas>` para editor de diseño de robot (conexiones de módulos)
  - `<canvas>` para simulación de robot (físicas reales)
  - `<textarea>` para editor de código JavaScript con syntax highlighting
  - `<video>` para tutoriales animados de robótica
- **JavaScript:**
  - Engine de física: Matter.js (simulación realista de robots, colisiones, gravedad)
  - Game engine: Phaser 3 (renderizado de laboratorio, robot)
  - Block coding: Blockly (Google's visual programming library)
  - Editor de código: CodeMirror (syntax highlighting para JS)
  - Simulator: Custom physics engine para sensores y actuadores
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado del laboratorio (robots, módulos, código)
  - Compiler: Eval sandbox con Web Workers para ejecución segura de código
  - Animaciones: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar robots y código
- **CSS:**
  - Grid layout para editor de diseño (10x10 grid de módulos)
  - CSS Grid para block coding (snap-to-grid)
  - CSS Transforms para zoom en robot (transform-origin: center)
  - CSS Animations para feedback de conexiones (pulse, glow)
  - Backdrop-filter para blur de paneles de código
  - CSS Variables para theming (colores de módulos por tipo)
  - Flexbox para contenedores de bloques de código
- **Otros:**
  - Web Audio API: Sonidos de motores, servos, sensores
  - DeviceOrientationEvent: Detectar shake para emergency stop
  - Touch Events API: Multi-touch para conectar múltiples módulos
  - Pointer Events API: Unificar mouse/touch/pen input
  - WebSockets: Multiplayer en tiempo real para carreras de robots
  - IndexedDB: Guardar robots y código (offline play)
  - Service Workers: PWA para construir robots offline
  - Canvas API: Renderizar conexiones de circuitos
  - Speech API: Voice commands para navegación ("ejecutar código", "parar")

**Características Visuales:**
- **Paleta de colores:**
  - Laboratorio: Tonos tecnológicos (#2C3E50 azul oscuro, #ECF0F1 gris claro)
  - Módulos: Colores por tipo (motor=rojo, sensor=verde, procesador=azul, batería=amarillo)
  - Conexiones: Líneas brillantes (#00FFFF cian) con indicadores de flujo
  - UI: Semi-transparente con glassmorphism (#000000 opacity 0.7, blur 5px)
  - Robot: Combinación de colores de módulos (personalizable)
- **Animaciones:**
  - Mover módulo: Drag animation con snap-to-grid (0.2s)
  - Conectar módulos: Line animation entre puntos (0.3s)
  - Ejecutar código: Robot moves with physics (smooth motion)
  - Misión completada: Confetti de engranajes (200 particles, 2s)
  - Carrera de robots: Start animation + countdown (3s)
- **Feedback visual:**
  - Conexión válida: Línea verde brillante, icono de check (0.3s)
  - Conexión inválida: Línea roja pulsante, mensaje de error ("¡No compatible!")
  - Código ejecutado: Robot moves con trail de movimiento
  - Misión fallada: Robot se detiene con shake rojo
  - Logro desbloqueado: Modal con engranaje dorado + animación (1.5s)
- **Personalización:**
  - 100+ módulos: Motores (DC, servo, stepper), sensores (cámara, ultrasonido, IMU, láser), actuadores (brazos, ruedas, orugas, drones, pinzas), procesadores (Raspberry Pi, Arduino)
  - Modo block coding (principiantes) + JavaScript (avanzado)
  - 50+ misiones: Básicas (recoger objeto) → Avanzadas (navegar laberinto autónomo) → Expertas (construir robot que compite)
  - Avatar de ingeniero con 60+ combinaciones (uniforme, gafas, herramientas)
  - Skins de laboratorio (clásico, moderno, sci-fi, industrial)

**Audio:**
- **Efectos de sonido:**
  - Mover módulo: Click satisfactorio (50ms)
  - Conectar módulos: Snap sound (150ms)
  - Motor funcionando: Whirring (continuous, 100-500Hz)
  - Sensor detectando: Beep agudo (200ms)
  - Misión completada: Success chime (C4-E4-G4, 1s)
  - Carrera ganada: Fanfare de ingeniero (6 notas, 2s)
- **Música:**
  - Laboratorio idle: Ambient tech (synth pads, 70 BPM)
  - Diseñando: Upbeat electronic (100 BPM)
  - Ejecutando código: Driving techno (120 BPM)
  - Carrera de robots: Intense competition (electronic + drums, 130 BPM)
  - Tutorial: Friendly educational (piano + synth, 80 BPM)
- **Voz:**
  - Tutorial: Voz de ingeniero amigable ("¡Bienvenido a Robotics Lab! Vamos a construir tu primer robot")
  - Hint: Voz de asistente ("Recuerda conectar el motor al procesador")
  - Misión completada: Voz celebratoria ("¡Excelente ingeniería! Has completado la misión")
- **Audio espacial:** Sonidos 3D para feedback de posición (motores cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 140-170 horas (5-7 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de robot (20+ módulos simultáneamente)
  - Latencia: <50ms para respuesta de simulación física (feedback instantáneo)
  - Físicas: <30ms para cálculo de colisiones y gravedad (Matter.js)
  - Memoria máxima: 300MB (incluye sprites de 100 módulos, 50 robots)
  - Code execution: <200ms para ejecutar código en sandbox (Web Workers)
- **Riesgos técnicos:**
  - Físicas realistas: Matter.js debe ser preciso para que los robots se muevan correctamente
  - Sandbox seguro: Ejecutar código de usuarios sin comprometer seguridad
  - Balance de dificultad: Misión debe ser desafiantes pero no frustrantes
  - Conexiones de módulos: Sistema de routing automático debe ser robusto

**Valor Educativo:**
- **Ingeniería real:** Los niños aprenden principios de robótica, mecánica, electricidad
- **Programación:** Aprenden lógica de programación (variables, condicionales, bucles, funciones)
- **Matemáticas:** Aplican cálculos: ángulos, distancias, velocidad, tiempo
- **Pensamiento lógico:** Desarrollan algoritmos para resolver puzzles
- **Vocabulario técnico:** Aprenden términos: motor, sensor, actuador, circuito, código, variable, función
- **Resolución de problemas:** Los puzzles requieren ensayo, error y depuración
- **Creatividad técnica:** Diseñar robots únicos fomenta innovación

**Referencias e Inspiración:**
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Simulación física realista
- [Blockly - Block coding](https://developers.google.com/blockly) - Programación visual
- [CodeMirror - Code editor](https://codemirror.net/) - Syntax highlighting para JavaScript
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Scratch - Programming for kids](https://scratch.mit.edu/) - Inspiración para block coding
- [LEGO Mindstorms - Robotics kit](https://www.lego.com/en-us/themes/mindstorms) - Robótica educativa real
- [Arduino - Open-source electronics](https://www.arduino.cc/) - Módulos y componentes reales
- [Web Audio API - Motor sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de motores
- [PWA - Offline robotics](https://web.dev/offline/) - PWA para construir robots sin internet

---

#### Idea #12: Animal Kingdom: Wildlife Sanctuary

**Concepto:**
Juego de simulación de vida salvaje donde los jugadores administran un santuario de animales, cuidan especies, protegen hábitats y participan en conservación. Combina city builder con simulación de ecosistemas, enseñando biología, ecología y ética animal.

**Motivación:**
- **Conexión con la naturaleza:** Cuidar animales reales genera empatía y aprecio
- **Misión de conservación:** Proteger especies en peligro de extinción
- **Progresión de guardabosques:** Comienzan con 5 animales, avanzan a santuario completo
- **Personalización de santuario:** Diseñar hábitats, construir instalaciones, crear paisajes
- **Competencia global:** Leaderboard de santuarios más sostenibles

**Mecánica Principal:**
Los jugadores administran un santuario de vida salvaje en diferentes biomas (sabana, selva, desierto, tundra, arrecife de coral, bosque templado). Cuidan animales reales (leones, jirafas, pandas, osos polares, tigres, delfines). Las actividades incluyen: alimentar animales, limpiar hábitats, curar animales enfermos, criar crías, liberar animales de vuelta a la naturaleza. Cada animal tiene necesidades únicas (dieta, temperatura, espacio social). Los jugadores construyen: hábitats, clínicas veterinarias, centros de cría, áreas de visitantes. Modo historia (convertir santuario en reserva mundial) y modo sandbox (sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Alimentar animal, limpiar hábitat, curar animal
- **Arrastrar (Drag):** Mover animal a diferente hábitat, arrastrar comida
- **Pinch:** Zoom en el santuario (0.5x-2x)
- **Dos dedos (drag):** Pan/mover la vista del santuario
- **Tap rápido:** Moverse entre animales rápidamente (cycle selection)
- **Tap largo (Long press):** Ver perfil de animal (especie, edad, salud, necesidades)
- **Swipe horizontal:** Cambiar entre vista de mapa, vista de animales, vista de estadísticas
- **Gestos complejos:**
  - Shake del dispositivo = "feed all" (alimentar a todos los animales rápidamente)
  - Dibujo de círculo = crear área protegida (nuevo hábitat)
  - Doble tap en animal = interactuar (acariciar, jugar)
  - Arrastrar animal a clínica = curar (veterinario)
- **Multitouch hasta 3 dedos:** Seleccionar múltiples animales para cuidados masivos
- **Escribir:** Nombrar animales, escribir notas de guardabosques

**Accesibilidad:**
- Animales con iconos grandes (min 100px) y etiquetas de especie
- Necesidades resaltadas (color coding) para fácil identificación
- Voice assistant describe animal ("Este es un león macho de 5 años")
- Modo "Easy Care" con cuidos automáticos (alimentación automática)
- Haptic feedback para eventos (vibración al curar animal)
- Color coding por estado de salud (verde= saludable, amarillo=needs care, rojo=crítico)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de santuario isométrico
  - `<canvas>` para representación de animales (spritesheets)
  - `<canvas>` para clima (lluvia, nieve, sol)
  - `<video>` para documentales de animales (cutscenes)
  - `<input type="text">` para nombrar animales
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de santuario, animales)
  - AI de animales: Custom behavior trees para comportamiento realista (hambre, sueño, reproducción, social)
  - Sistema de clima: Custom algorithms para estaciones y tiempo
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado del santuario (animales, hábitats, recursos)
  - Biología simulada: Custom algorithms para salud, edad, reproducción
  - Animaciones: GSAP para transiciones y comportamiento de animales
  - Storage: IndexedDB para guardar santuario completo (miles de entidades)
- **CSS:**
  - Grid layout para mapa de santuario (12x12 grid de hábitats)
  - CSS Transforms para zoom en santuario (transform-origin: center)
  - CSS Animations para feedback de cuidados (pulse, glow)
  - Backdrop-filter para blur de paneles de información
  - CSS Variables para theming por bioma (colores de sabana, selva, desierto)
  - Flexbox para contenedores de animales
- **Otros:**
  - Web Audio API: Sonidos de animales, ambiente natural, clima
  - DeviceOrientationEvent: Detectar shake para feed all
  - Touch Events API: Multi-touch para seleccionar múltiples animales
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar santuario y animales (offline play)
  - Service Workers: PWA para cuidar animales offline
  - Canvas API: Renderizar climas y partículas (lluvia, nieve)
  - Speech API: Voice commands para navegación ("alimentar león", "ir a clínica")

**Características Visuales:**
- **Paleta de colores:**
  - Sabana: Dorado, verde, azul cielo (#FFD700, #228B22, #87CEEB)
  - Selva: Verde intenso, café, neón tropical (#006400, #8B4513, #00FF7F)
  - Desierto: Naranja arena, azul cielo, marrón rocoso (#FFA500, #87CEEB, #A0522D)
  - Tundra: Blanco nieve, gris roca, azul hielo (#FFFAFA, #696969, #00BFFF)
  - Arrecife de coral: Turquesa, coral, púrpura (#40E0D0, #FF7F50, #9932CC)
  - Bosque templado: Verde, marrón, amarillo otoño (#228B22, #8B4513, #FFD700)
  - UI: Semi-transparente con glassmorphism (#000000 opacity 0.7, blur 10px)
- **Animaciones:**
  - Animal caminando: Walk cycle con spritesheet (8 frames, 10 FPS)
  - Alimentar: Animal eats with animation (1-2s)
  - Curar: Veterinary animation (1s)
  - Nacimiento: Cría emerges with sparkle (1.5s)
  - Clima: Lluvia (partículas cayendo), nieve (copos flotando), sol (brillo)
- **Feedback visual:**
  - Animal alimentado: Icono de comida verde, barra de hambre llena
  - Animal curado: Flash azul + icono de médico (1s)
  - Hábitat limpio: Sparkle effect (partículas brillantes, 1s)
  - Cría nacida: Confetti de corazones + música (2s)
  - Logro desbloqueado: Modal con escudo de naturaleza (1.5s)
- **Personalización:**
  - 6 biomas: Sabana, selva, desierto, tundra, arrecife de coral, bosque templado
  - 100+ especies animales reales (león, jirafa, panda, oso polar, tigre, delfín, pingüino, etc.)
  - 50+ instalaciones: Hábitats, clínicas, centros de cría, áreas de visitantes, fuentes de agua
  - Avatar de guardabosques con 70+ combinaciones (uniforme, sombrero, herramientas)
  - Skins de hábitats (natural, moderno, eco-friendly, temático)

**Audio:**
- **Efectos de sonido:**
  - Alimentar: Crunch sound (animal eating, 200-500ms)
  - Curar: Healing chime (C4-E4-G4, 1s)
  - Nacimiento: Cute squeak (200ms) + celebration (1s)
  - Animal call: Real animal sounds (leon ruge, pájaro canta, delfín silba, 200-800ms)
  - Clima: Lluvia (rain, continuous), nieve (wind with snow, continuous), viento (wind, continuous)
  - Logro desbloqueado: Nature fanfare (6 notas, 2s)
- **Música:**
  - Santuario idle: Ambient natural (birds, water, wind, 60 BPM)
  - Cuidando animales: Gentle folk (guitarra + flauta, 80 BPM)
  - Nacimiento: Upbeat celebration (piano + strings, 100 BPM)
  - Tormenta: Tense orchestral (strings low, 70 BPM)
  - Visitar: Tour-friendly (light pop, 90 BPM)
- **Voz:**
  - Tutorial: Voz de guardabosques amigable ("¡Bienvenido a Animal Kingdom! Vamos a cuidar estos animales")
  - Hint: Voz de asistente ("El león tiene hambre, alimentarlo con carne")
  - Nacimiento: Voz celebratoria ("¡Una nueva vida ha llegado al santuario!")
- **Audio espacial:** Sonidos 3D para feedback de posición (animales cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de santuario (50+ animales simultáneamente)
  - Latencia: <50ms para respuesta de cuidados (feedback instantáneo)
  - AI de animales: <100ms para calcular comportamiento (behavior trees)
  - Memoria máxima: 280MB (incluye sprites de 100 especies, 6 biomas)
  - Clima: <30ms para renderizar partículas (lluvia, nieve)
- **Riesgos técnicos:**
  - AI de animales: Comportamiento realista sin consumir mucha CPU
  - Gestión de state: Miles de entidades (animales, hábitats, recursos)
  - Balance de dificultad: Cuidados no deben ser frustrantes (demasiados animales para cuidar)
  - Optimización de sprites: 100 especies pueden consumir mucha memoria

**Valor Educativo:**
- **Biología real:** Los niños aprenden especies animales, hábitats, dieta, comportamiento
- **Ecología:** Entienden ecosistemas, cadena alimenticia, conservación
- **Ética animal:** Desarrollan empatía y respeto por la vida salvaje
- **Vocabulario científico:** Aprenden términos: especie, hábitat, dieta, reproducción, conservación, biodiversidad
- **Responsabilidad:** Cuidar animales enseña compromiso y dedicación
- **Conciencia ambiental:** Entienden impacto humano en naturaleza (deforestación, cambio climático)
- **Geografía:** Conocen biomas de diferentes continentes (África, Asia, América, Europa)

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Zoo Tycoon - Zoo simulation](https://www.zootycoon.com/) - Inspiración para administración de santuario
- [Planet Zoo - Wildlife simulation](https://www.planetzoo.com/) - Simulación de animales realista
- [National Geographic Kids - Animals](https://kids.nationalgeographic.com/animals) - Datos de especies reales
- [WWF - World Wildlife Fund](https://www.worldwildlife.org/) - Conservación real de especies
- [San Diego Zoo Kids - Animal education](https://kids.sandiegozoo.org/) - Información educativa de animales
- [Web Audio API - Animal sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de animales
- [PWA - Offline sanctuary](https://web.dev/offline/) - PWA para cuidar animales sin internet

---

#### Idea #13: Geometry Quest: Shape Master

**Concepto:**
Juego de geometría y matemáticas donde los jugadores resuelven puzzles geométricos, construyen estructuras, dominan conceptos de espacio y forma, y desbloquean misterios de la matemática universal. Combina Tetris con elementos educativos de geometría euclidiana y trigonometría.

**Motivación:**
- **Desafíos visuales:** Puzzles geométricos que aumentan en complejidad (formas simples → fractales → estructuras 3D)
- **Logros matemáticos:** Badges por conceptos dominados ("Maestro de Triángulos", "Arquitecto de Páragonos")
- **Creatividad estructural:** Construir edificios, puentes, torres con formas geométricas
- **Competencia lógica:** Leaderboard mundial de puntuaciones y tiempos de resolución
- **Descubrimiento matemático:** Ver cómo la geometría explica el universo (Fibonacci, golden ratio, fractales)

**Mecánica Principal:**
Los jugadores navegan por un mundo geométrico abstracto donde cada nivel presenta un puzzle de formas. Las misiones incluyen: completar mosaicos, construir puentes con polígonos, resolver enigmas de ángulos, encontrar figuras ocultas, crear patrones simétricos. Los conceptos progresan: formas básicas (cuadrado, triángulo) → polígonos → círculos y arcos → ángulos y grados → simetría → fractales → geometría 3D. Hay modo historia (descubrir los secretos de la matemática) y modo sandbox (construir libremente).

**Interacción Móvil:**
- **Tap simple:** Seleccionar forma, colocar pieza en puzzle
- **Arrastrar (Drag):** Mover piezas, rotar formas, construir estructuras
- **Pinch:** Zoom en el puzzle (0.5x-3x) para ver detalles
- **Dos dedos (drag):** Pan/mover la vista del mundo geométrico
- **Tap rápido:** Rotar pieza en 45° (shortcut rápido)
- **Tap largo (Long press):** Ver propiedades geométricas (área, perímetro, ángulos)
- **Swipe horizontal:** Cambiar entre vista de puzzle y vista de teoría
- **Gestos complejos:**
  - Shake del dispositivo = "reset level" (reiniciar puzzle actual)
  - Dibujo de forma = crear pieza personalizada (triángulo, cuadrado, pentágono)
  - Doble tap en forma = duplicar (clonar pieza)
  - Arrastrar forma a zona de fusión = combinar polígonos (triángulo + triángulo = cuadrado)
- **Multitouch hasta 4 dedos:** Rotar múltiples formas simultáneamente
- **Escribir:** Calcular ángulos, medir distancias en notebook matemático

**Accesibilidad:**
- Formas con bordes gruesos (min 3px) y colores contrastantes para fácil identificación
- Números de ángulos grandes (min 24px) y claros
- Voice assistant explica concepto ("Este es un triángulo equilátero con 60° en cada ángulo")
- Modo "Hint System" para dar pistas cuando están atascados
- Haptic feedback para colocaciones (vibración al encajar pieza)
- Color coding por tipo de forma (triángulos=verde, cuadrados=azul, círculos=naranja)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de mundo geométrico
  - `<canvas>` para editor de formas personalizado
  - `<canvas>` para visualización de teoría (diagramas interactivos)
  - `<video>` para tutoriales animados de conceptos geométricos
  - `<input type="range">` para controlar rotación y escala
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de formas, físicas geométricas)
  - Geometría library: Three.js para renderizado 3D de estructuras
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del jugador (niveles completados, conceptos aprendidos)
  - Math engine: Custom algorithms para cálculos geométricos (ángulos, áreas, perímetros)
  - Puzzle generator: Custom procedural generation para crear niveles únicos
  - Animaciones: GSAP para transiciones entre puzzles
  - Storage: IndexedDB para guardar progreso y estructuras creadas
- **CSS:**
  - Grid layout para editor de formas (12x12 grid)
  - CSS Transforms para rotación y escala de formas (transform-origin: center)
  - CSS Animations para feedback de encaje (pulse, glow)
  - Backdrop-filter para blur de paneles teóricos
  - CSS Variables para theming (colores de formas, background)
  - Flexbox para contenedores de piezas
- **Otros:**
  - Web Audio API: Sonidos de encaje, rotación, éxito
  - DeviceOrientationEvent: Detectar shake para reset level
  - Touch Events API: Multi-touch para rotar múltiples formas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar progreso y estructuras (offline play)
  - Service Workers: PWA para jugar offline
  - Canvas API: Manipular píxeles para efectos visuales geométricos
  - Speech API: Voice commands para navegación ("siguiente nivel", "hint")

**Características Visuales:**
- **Paleta de colores:**
  - Mundo geométrico: Minimalista con colores pastel (#F0F8FF alice blue, #FFE4E1 misty rose)
  - Formas: Colores vibrantes por tipo (triángulos=#32CD32 lime green, cuadrados=#4169E1 royal blue, círculos=#FFA500 orange, pentágonos=#9932CC dark orchid)
  - Teoría: Diagramas con colores educativos (ángulos en rojo, lados en azul, áreas en verde)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, blur 10px)
- **Animaciones:**
  - Colocar forma: Slide animation con snap-to-grid (0.2s)
  - Encaje correcto: Flash blanco + glow + particle burst (0.3s)
  - Rotar: Smooth rotation animation (0.15s por 45°)
  - Nivel completado: Confetti de formas geométricas (200 particles, 2s)
  - Teoría desbloqueada: Fade in con diagrama interactivo (1s)
- **Feedback visual:**
  - Encaje válido: Borde verde brillante, icono checkmark (0.3s)
  - Encaje inválido: Borde rojo pulsante, texto ("¡No encaja!")
  - Concepto aprendido: Modal con diagrama, explicación, experiencia
  - Combo: Multiplier x2, x3 (encadenar encajes correctos)
- **Personalización:**
  - 100+ niveles de dificultad progresiva
  - 50+ tipos de formas (triángulos, cuadrados, círculos, polígonos, fractales, 3D shapes)
  - Modo sandbox: Construir estructuras propias con formas disponibles
  - Avatar de matemático con 60+ combinaciones (uniforme, accesorios, herramientas)
  - Skins de mundo (minimalista, neon, fractal, 3D)

**Audio:**
- **Efectos de sonido:**
  - Colocar forma: Click satisfactorio (50ms)
  - Encaje correcto: Chime ascendente (C4-E4-G4, 200ms)
  - Rotar: Whoosh suave (100-150ms)
  - Nivel completado: Fanfare de 5 notas (C4-E4-G4-B5-C6, 1.5s)
  - Concepto aprendido: Educational chime (C4-E4-G4-C5, 1s)
  - Combo: Whoosh ascendente por nivel (combo x3 = C5-E5-G5)
- **Música:**
  - Menú principal: Calm minimalist piano (80 BPM)
  - Puzzle activo: Focus ambient (synth pads, 70 BPM)
  - Nivel completado: Upbeat celebration (strings, 100 BPM)
  - Teoría: Educational gentle (piano + flute, 85 BPM)
  - Sandbox: Creative inspiration (lo-fi beats, 90 BPM)
- **Voz:**
  - Tutorial: Voz de matemático amigable ("¡Bienvenido a Geometry Quest! Vamos a descubrir las formas")
  - Hint: Voz de asistente ("Prueba rotar el triángulo 45°")
  - Concepto: Voz de profesor ("Un triángulo equilátero tiene tres lados iguales")
- **Audio espacial:** Sonidos 3D para feedback de posición (formas cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 70-90 horas (3 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de formas (100+ piezas simultáneamente)
  - Latencia: <50ms para respuesta de encaje (feedback instantáneo)
  - Formas máximas: 500 piezas para高端 devices, 200 para低端
  - Memoria máxima: 150MB (incluye sprites de 50 tipos de formas)
  - Cálculos geométricos: <100ms para detectar encaje válido
- **Riesgos técnicos:**
  - Balance de dificultad: Evitar que los puzzles sean frustrantes (demasiado difíciles)
  - Precisión geométrica: Cálculos de encaje deben ser precisos
  - Optimización de renderizado: 100+ formas pueden consumir mucha CPU
  - Generación procedimental: Crear niveles únicos y coherentes

**Valor Educativo:**
- **Geometría real:** Los niños aprenden formas, polígonos, ángulos, simetría, fractales
- **Matemáticas aplicadas:** Desarrollan habilidades de razonamiento espacial y lógico
- **Pensamiento abstracto:** Comprenden conceptos matemáticos abstractos (golden ratio, Fibonacci)
- **Vocabulario matemático:** Aprenden términos: vértice, lado, ángulo, perímetro, área, fracción
- **Creatividad estructural:** Construir con formas fomenta pensamiento de ingeniería
- **Persistencia:** Los puzzles requieren intentos múltiples, enseñando a aprender del error
- **Visualización mental:** Desarrollan capacidad de visualizar formas y estructuras 3D

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Three.js - 3D rendering](https://threejs.org/) - Renderizado de estructuras 3D
- [Tetris - Shape puzzle game](https://tetris.com/) - Inspiración para mecánica de encaje
- [GeoGebra - Interactive geometry](https://www.geogebra.org/) - Geometría interactiva educativa
- [Khan Academy - Math education](https://www.khanacademy.org/math) - Referencia de conceptos geométricos
- [The Elements of Euclid - Interactive geometry book](https://www.euclids-elements.com/) - Teoría geométrica
- [Web Audio API - Math sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos geométricos
- [PWA - Offline geometry](https://web.dev/offline/) - PWA para jugar sin internet

---

#### Idea #14: Language Lab: Word Explorer

**Concepto:**
Juego de idiomas y vocabulario donde los jugadores aprenden múltiples idiomas (inglés, español, francés, alemán, japonés, mandarín), viajan por mundos temáticos, completan misiones lingüísticas y conversan con NPCs nativos. Combina Duolingo con RPG, enseñando vocabulario, gramática y pronunciación.

**Motivación:**
- **Dominio lingüístico:** Desbloquear vocabulario progresivo (500+ palabras por idioma)
- **Viaje cultural:** Cada idioma tiene mundo único (Francia, Japón, España, Alemania, China)
- **Conversación real:** Interactuar con NPCs nativos usando el idioma aprendido
- **Logros poliglotos:** Badges por idiomas dominados ("Maestro del Inglés", "Ninja del Japonés")
- **Competencia global:** Leaderboard de mejores poliglotas del mundo

**Mecánica Principal:**
Los jugadores viajan por 6 mundos temáticos, cada uno representando un idioma (inglés, español, francés, alemán, japonés, mandarín). Cada mundo tiene ciudades, pueblos y zonas culturales. Las misiones incluyen: vocabulario básico → gramática → conversaciones → lectura → escritura → pronunciación. Los conceptos progresan: colores y números → animales → comida → verbos → oraciones completas → diálogos → historias. Los NPCs hablan el idioma nativo y los jugadores responden usando vocabulario aprendido. Hay modo historia (convertirse en poligloto mundial) y modo sandbox (explorar mundos libremente).

**Interacción Móvil:**
- **Tap simple:** Seleccionar respuesta correcta, interactuar con NPC
- **Arrastrar (Drag):** Mover palabras para formar oraciones (word ordering)
- **Pinch:** Zoom en el mapa del mundo (0.5x-2x)
- **Dos dedos (drag):** Pan/mover la vista del mundo
- **Tap rápido:** Saltar diálogo (skip conversation)
- **Tap largo (Long press):** Ver traducción y explicación gramatical
- **Swipe horizontal:** Cambiar entre vista de mapa y vista de lección
- **Gestos complejos:**
  - Shake del dispositivo = "native speaker mode" (escuchar pronunciación nativa)
  - Dibujo de carácter = escribir en idiomas no latinos (hiragana, katakana, kanji, hanzi)
  - Doble tap en NPC = iniciar conversación
  - Arrastrar palabra a zona de construcción = formar oración
- **Multitouch hasta 3 dedos:** Seleccionar múltiples palabras para oraciones complejas
- **Escribir:** Componer oraciones, escribir en notebook de idioma

**Accesibilidad:**
- Palabras con textos grandes (min 24px) y transcripción fonética
- Voice pronunciation: Texto hablado en alta calidad para cada palabra
- Voice assistant repite vocabulario ("Repeat after me: apple")
- Modo "Slow Speech" para escuchar a 0.75x velocidad
- Haptic feedback para respuestas correctas (vibración suave)
- Color coding por tipo de palabra (sustantivo=azul, verbo=rojo, adjetivo=verde)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de mundos isométricos
  - `<canvas>` para representación de NPCs (spritesheets)
  - `<video>` para tutoriales de pronunciación y cultura
  - `<input type="text">` para escribir oraciones y caracteres
  - `<input type="file">` para grabar voz (practice mode)
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de mundos, NPCs)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del jugador (idiomas aprendidos, vocabulario)
  - Speech recognition: Web Speech API para evaluar pronunciación
  - TTS: Web Speech API para reproducir vocabulario nativo
  - Grammar engine: Custom algorithms para validar oraciones
  - Animaciones: GSAP para transiciones entre mundos
  - Data: JSON con 500+ palabras por idioma, 100+ oraciones
  - Storage: IndexedDB para guardar vocabulario y progreso (offline play)
- **CSS:**
  - Grid layout para lecciones (12 columnas responsivo)
  - CSS Transforms para zoom en mundos (transform-origin: center)
  - CSS Animations para feedback de respuestas (pulse, shake)
  - Backdrop-filter para blur de paneles de vocabulario
  - CSS Variables para theming por idioma (colores culturales)
  - Flexbox para contenedores de palabras
- **Otros:**
  - Web Speech API: Speech recognition (evaluar pronunciación) + TTS (reproducir vocabulario)
  - DeviceOrientationEvent: Detectar shake para native speaker mode
  - Touch Events API: Multi-touch para seleccionar múltiples palabras
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar vocabulario y progreso (offline play)
  - Service Workers: PWA para aprender idiomas offline
  - Canvas API: Renderizar mundos y NPCs
  - Speech API: Voice commands para navegación ("siguiente lección", "repetir")

**Características Visuales:**
- **Paleta de colores:**
  - Inglés: Azul británico (#0066CC, blanco, rojo #CC0000)
  - Español: Caliente (#FF4500 orange, amarillo #FFD700, rojo #DC143C)
  - Francés: Elegante (#4B0082 índigo, blanco puro, azul #1E90FF)
  - Alemán: Industrial (#333333 gris oscuro, rojo #CC0000, amarillo #FFD700)
  - Japonés: Estético (#FF69B4 rosa, blanco, rojo #DC143C, negro #000000)
  - Mandarín: Imperial (#FFD700 dorado, rojo #DC143C, negro #000000)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, blur 10px)
- **Animaciones:**
  - NPC hablando: Mouth animation con spritesheet (10 frames, 12 FPS)
  - Respuesta correcta: Checkmark verde + sparkle (0.3s)
  - Respuesta incorrecta: Shake rojo + hint (0.5s)
  - Viaje entre mundos: Warp effect (1s)
  - Palabra aprendida: Glow dorado + emerge (1s)
- **Feedback visual:**
  - Vocabulario aprendido: Icono de book verde en inventario
  - Pronunciación correcta: Waveform animation (0.5s)
  - Oración completada: Modal con experiencia, progreso de idioma
  - Badges desbloqueados: Modal con insignias de poligloto
- **Personalización:**
  - 6 idiomas: Inglés, español, francés, alemán, japonés, mandarín
  - 500+ palabras por idioma (3000+ palabras totales)
  - 100+ oraciones conversacionales por idioma
  - Avatar de explorador lingüístico con 70+ combinaciones (ropa, accesorios por cultura)
  - Skins de mundos (cultural, moderno, histórico, futurista)

**Audio:**
- **Efectos de sonido:**
  - Respuesta correcta: Ding satisfactorio (C5, 150ms)
  - Respuesta incorrecta: Buzz descendente (E2-C2, 200ms)
  - NPC hablando: Voice con acento nativo (varía por idioma)
  - Palabra pronunciada: TTS nativa (Web Speech API)
  - Badges desbloqueados: Fanfare poligloto (8 notas, 2s)
- **Música:**
  - Menú principal: Upbeat multilingual world (120 BPM)
  - Inglés: British pop (piano + drums, 100 BPM)
  - Español: Flamenco/Latin (guitarra + percusión, 110 BPM)
  - Francés: Café accordion (acordeón + piano, 90 BPM)
  - Alemán: Industrial electronic (synth + bass, 100 BPM)
  - Japonés: J-Pop upbeat (synth pop, 120 BPM)
  - Mandarín: Traditional instrumental (erhu + guzheng, 80 BPM)
- **Voz:**
  - Tutorial: Voz de profesor de idiomas amigable ("¡Bienvenido a Language Lab! Vamos a aprender inglés")
  - NPC: Voces nativas con acentos auténticos (inglés británico, español castellano, francés parisino, etc.)
  - Pronunciación: Voz nativa de alta calidad (TTS)
  - Hint: Voz de asistente ("El verbo 'to be' se usa para identidad")
- **Audio espacial:** Sonidos 3D para feedback de posición (NPCs cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de mundos (50+ NPCs simultáneamente)
  - Latencia: <100ms para respuesta de speech recognition (evaluar pronunciación)
  - TTS: <200ms para reproducir palabra nativa
  - Memoria máxima: 250MB (incluye samples de audio de 6 idiomas, 500+ palabras)
  - NPCs máximos: 100 simultáneamente
- **Riesgos técnicos:**
  - Speech recognition calidad: Evaluar pronunciación en diferentes idiomas es complejo
  - TTS nativa: Requiere grabaciones de alta calidad para cada idioma
  - Gestión de vocabulario: 3000+ palabras consumen mucha memoria
  - Balance de dificultad: Progresión debe ser gradual sin ser frustrante

**Valor Educativo:**
- **Idiomas reales:** Los niños aprenden vocabulario, gramática, pronunciación de 6 idiomas
- **Apertura cultural:** Conocen diferentes culturas, países, tradiciones
- **Comunicación:** Desarrollan habilidades de conversación y escucha
- **Vocabulario lingüístico:** Aprenden términos: sustantivo, verbo, adjetivo, oración, pronunciación
- **Memoria auditiva:** Asocian palabras con sonidos específicos
- **Confianza:** Desarrollan seguridad para hablar otros idiomas
- **Neuroplasticidad:** Aprender múltiples idiomas estimula el cerebro

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Web Speech API - Speech Recognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) - Evaluar pronunciación
- [Web Speech API - Text to Speech](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) - Reproducir vocabulario nativo
- [Duolingo - Language learning](https://www.duolingo.com/) - Inspiración para mecánica de vocabulario
- [Memrise - Vocabulary app](https://www.memrise.com/) - Memorización de palabras
- [Rosetta Stone - Language course](https://www.rosettastone.com/) - Pronunciación nativa
- [BBC Languages - Language learning](https://www.bbc.co.uk/languages) - Referencia de idiomas
- [PWA - Offline language learning](https://web.dev/offline/) - PWA para aprender idiomas sin internet

---

#### Idea #15: Cyberpunk City: Hacker Chronicles

**Concepto:**
Juego de hackers y ciberseguridad donde los jugadores penetran sistemas, crackean códigos, infiltran corporaciones corruptas y desvelan conspiraciones. Combina hacking real (cifrados, redes, exploits) con elementos de infiltración stealth y narrativa cyberpunk.

**Motivación:**
- **Misión hacktivista:** Exponer corrupción corporativa y proteger privacidad
- **Progresión de hacker:** Comienzan como script kiddie, avanzan a elite hacker
- **Herramientas reales:** Usan técnicas de hacking reales (criptografía, redes, ingeniería social)
- **Narrativa cyberpunk:** Historia de conspiraciones, corporaciones, rebeldes, IA
- **Competencia de hackers:** Leaderboard de mejores crackers del mundo

**Mecánica Principal:**
Los jugadores son hackers en una ciudad cyberpunk procedimental con corporaciones, redes subterráneas, dark web y zonas residenciales. Las misiones incluyen: penetrar sistemas (bypass security), crackear códigos (cifrado Caesar, RSA, AES), infiltrar servidores (stealth mode), robar datos, exponer corrupción. Las herramientas aprendidas progresan: comandos básicos → redes → criptografía → exploits → malware → IA hacking. Hay modo historia (destruir la corporación opresora OmniCorp) y modo sandbox (hackear sistemas libremente).

**Interacción Móvil:**
- **Tap simple:** Ejecutar comando, seleccionar herramienta, hackear sistema
- **Arrastrar (Drag):** Mover avatar stealth, arrastrar herramientas al panel de hacking
- **Pinch:** Zoom en el mapa de la ciudad (0.5x-3x)
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap rápido:** Escribir comandos en terminal (typing mode)
- **Tap largo (Long press):** Ver información de sistema (firewall, encriptación, vulnerabilidad)
- **Swipe horizontal:** Cambiar entre vista de mapa y vista de terminal
- **Gestos complejos:**
  - Shake del dispositivo = "emergency logout" (salir inmediatamente del sistema)
  - Dibujo de patrón = crackear código (pattern matching)
  - Doble tap en servidor = infiltrar (stealth entry)
  - Arrastrar exploit a sistema = ejecutar ataque
- **Multitouch hasta 3 dedos:** Ejecutar múltiples comandos simultáneamente
- **Escribir:** Componer scripts, escribir en terminal hacker, tomar notas de misión

**Accesibilidad:**
- Terminales con textos grandes (min 20px) y colores contrastantes (negro sobre verde/amarillo)
- Sistemas con iconos grandes (min 80px) y etiquetas de nivel de seguridad
- Voice assistant explica sistema ("Este servidor tiene firewall de nivel 3")
- Modo "Tutorial Mode" con guía paso a paso para beginners
- Haptic feedback para hacks exitosos (vibración al penetrar sistema)
- Color coding por nivel de seguridad (verde= bajo, amarillo= medio, rojo= alto, morado= extremo)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de ciudad cyberpunk
  - `<canvas>` para terminal hacker (matrix effect)
  - `<canvas>` para visualización de redes (nodes, connections)
  - `<video>` para cutscenes de misiones y revelaciones
  - `<textarea>` para terminal de comandos con syntax highlighting
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de ciudad, stealth mechanics)
  - Criptografía: Custom algorithms para cifrado/decifrado (Caesar, Vigenère, AES simulado)
  - Redes: Custom simulation para redes y routing (simplificado)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado del hacker (herramientas, reputation, misiones completadas)
  - Hacking engine: Custom algorithms para validar cracks y exploits
  - Terminal: Custom implementation con syntax highlighting
  - Animaciones: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar progreso y herramientas
- **CSS:**
  - Grid layout para panel de hacking (12 columnas responsivo)
  - CSS Transforms para zoom en ciudad (transform-origin: center)
  - CSS Animations para feedback de hacks (matrix rain, glitch)
  - Backdrop-filter para blur de paneles de terminal
  - CSS Variables para theming cyberpunk (neon green, purple, pink)
  - Flexbox para contenedores de herramientas
- **Otros:**
  - Web Audio API: Sonidos de hacking (typing, beep, success, alert)
  - DeviceOrientationEvent: Detectar shake para emergency logout
  - Touch Events API: Multi-touch para ejecutar múltiples comandos
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar progreso y herramientas (offline play)
  - Service Workers: PWA para hackear offline (modo sandbox)
  - Canvas API: Renderizar matrix effect y redes
  - Speech API: Voice commands para navegación ("ejecutar comando", "logout")

**Características Visuales:**
- **Paleta de colores:**
  - Ciudad cyberpunk: Negro profundo (#000005) + neon verde (#00FF00), cian (#00FFFF), púrpura (#FF00FF), rosa (#FF69B4)
  - Terminal: Fondo negro (#000000) + texto verde (#00FF00) o amarillo (#FFFF00)
  - Redes: Nodes en cian (#00FFFF) con conexiones en púrpura (#FF00FF)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.8, blur 10px, neon borders)
- **Animaciones:**
  - Hackear sistema: Matrix rain effect + glitch (1-2s)
  - Infiltrar stealth: Fade out del avatar (0.5s)
  - Crackear código: Rapid typing animation + lock breaking (0.5s)
  - Misión completada: Flash cian + confetti de código (2s)
  - Exponer corrupción: Hack de noticias + screen takeover (3s)
- **Feedback visual:**
  - Hack exitoso: Borde cian brillante + icono de unlocked (0.5s)
  - Hack fallado: Borde rojo pulsante + alert (0.5s)
  - Sistema vulnerable: Outline amarillo intermitente
  - Logro desbloqueado: Modal con insignia de hacker + animación (1.5s)
- **Personalización:**
  - 50+ herramientas: Sniffers, crackers, exploits, malware, VPNs, proxies, scripts
  - 100+ sistemas para hackear: Corporaciones, bancos, servidores, dark web
  - Avatar de hacker con 80+ combinaciones (ropa, máscara, accesorios cyberpunk)
  - Skins de terminal (matrix, neon, retro, minimalist)
  - Modo sandbox: Hackear cualquier sistema libremente

**Audio:**
- **Efectos de sonido:**
  - Typing en terminal: Mechanical keyboard sound (continuous, 100-300Hz)
  - Hack exitoso: Cybernetic chime (C4-E4-G4-C5, 1s)
  - Crackear código: Rapid clicking + unlocking sound (0.5s)
  - Infiltrar stealth: Subtle whoosh (200ms)
  - Alert de security: Alarm pulsante (500ms on/off)
  - Misión completada: Hacker fanfare (8 notas, 2s)
- **Música:**
  - Menú principal: Cyberpunk synth (neon synths, 120 BPM)
  - Ciudad idle: Ambient drone (industrial sounds, 60 BPM)
  - Hackeando: Intense electronic (synthwave, 130 BPM)
  - Stealth infiltration: Tense suspense (strings low, 70 BPM)
  - Dark web: Dark glitchy (distorted synths, 90 BPM)
- **Voz:**
  - Tutorial: Voz de hacker mentor ("Bienvenido a la red. Vamos a aprender a hackear")
  - Sistema: Voz de IA de seguridad ("¡Acceso denegado! ¡Intruso detectado!")
  - Misión: Voz de contactor ("Necesito que penetres OmniCorp y exponga sus secretos")
- **Audio espacial:** Sonidos 3D para feedback de posición (sistemas cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 130-160 horas (5-7 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de ciudad (100+ sistemas simultáneamente)
  - Latencia: <50ms para respuesta de hacks (feedback instantáneo)
  - Matrix effect: <30ms para renderizar caída de caracteres
  - Memoria máxima: 300MB (incluye assets de 50 herramientas, 100 sistemas)
  - Criptografía: <200ms para crackear código (simplificado)
- **Riesgos técnicos:**
  - Criptografía real vs. juego: Simplificar algoritmos complejos (AES, RSA) para jugabilidad
  - Matrix effect optimizado: No debe consumir mucha CPU
  - Balance de dificultad: Hacks deben ser desafiantes pero no imposibles
  - Seguridad del juego: No enseñar técnicas de hacking realmente peligrosas

**Valor Educativo:**
- **Ciberseguridad real:** Los niños aprenden conceptos de seguridad, redes, criptografía
- **Pensamiento lógico:** Crackear códigos desarrolla razonamiento deductivo
- **Ética digital:** Entienden responsabilidad de hackers (hacktivism vs. cybercrime)
- **Vocabulario técnico:** Aprenden términos: firewall, encriptación, exploit, malware, VPN, proxy
- **Resolución de problemas:** Los hacks requiren análisis, planificación, ejecución
- **Conciencia de privacidad:** Entienden importancia de proteger datos personales
- **Pensamiento crítico:** Las misiones plantean dilemas éticos (¿hackear para bien o mal?)

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Hacknet - Hacking simulation game](https://www.hacknet-game.com/) - Inspiración para mecánica de hacks
- [Uplink - Hacker game](https://www.introversion.co.uk/uplink/) - Hacking realista
- [Mr. Robot - Cyberpunk TV show](https://www.usanetwork.com/mrrobot) - Narrativa hacker
- [Cyberpunk 2077 - Cyberpunk game](https://www.cyberpunk.net/) - Estética y atmósfera
- [OWASP - Web Security](https://owasp.org/) - Referencia de ciberseguridad
- [Web Audio API - Cyber sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos cyberpunk
- [PWA - Offline hacking](https://web.dev/offline/) - PWA para hackear sin internet

---

#### Idea #16: Nature Photographer: Wildlife Snap

**Concepto:**
Juego de fotografía y observación de naturaleza donde los jugadores son fotógrafos de vida salvaje que viajan a diferentes biomas, capturan animales raros, compiten en concursos fotográficos y desbloquean especies desconocidas. Combina gameplay tipo Pokémon Snap con elementos de fotografía real y educación biológica.

**Motivación:**
- **Pasión por la naturaleza:** Capturar momentos únicos de vida salvaje
- **Colección fotográfica:** Desbloquear 200+ especies animales con fotos únicas
- **Concursos profesionales:** Competir en eventos globales de fotografía
- **Progresión de fotógrafo:** Comienzan como amateur, avanzan a National Geographic level
- **Personalización de equipo:** Cámaras, lentes, accesorios fotográficos realistas

**Mecánica Principal:**
Los jugadores viajan por 8 biomas (sabana africana, selva amazónica, desierto sahara, tundra ártica, bosque templado, arrecife de coral, montañas andinas, mangrove costero). Cada bioma tiene 30+ especies animales únicas. El objetivo es tomar la foto perfecta: capturar animales en momentos especiales (cazando, jugando, cuidando crías). Las técnicas fotográficas progresan: foto simple → composición → timing → capturar movimiento → fotos nocturnas → macrofotografía → teleobjetivo. Los jugadores tienen equipo realista: cámaras (DSLR, mirrorless, action cameras), lentes (wide angle, telephoto, macro), accesorios (trípodes, flashes). Hay modo historia (convertirse en fotógrafo de National Geographic) y modo sandbox (explorar biomas libremente).

**Interacción Móvil:**
- **Tap simple:** Enfocar animal, ajustar exposición, tomar foto
- **Arrastrar (Drag):** Mover cámara, hacer pan, seguir animal en movimiento
- **Pinch:** Zoom con lente telephoto (1x-10x) o wide angle (0.5x-1x)
- **Dos dedos (drag):** Pan/mover la vista del bioma
- **Tap rápido:** Cambiar entre modos de cámara (foto, video, time-lapse)
- **Tap largo (Long press):** Ver información de animal (especie, comportamiento, mejor momento para foto)
- **Swipe horizontal:** Cambiar entre lentes (wide, normal, telephoto, macro)
- **Gestos complejos:**
  - Shake del dispositivo = "emergency shutter" (capturar foto inmediatamente)
  - Dibujo de rectángulo = ajustar encuadre (crop frame)
  - Doble tap en animal = modo tracking (seguir movimiento automáticamente)
  - Arrastrar sliders = ajustar exposición, ISO, apertura (manual mode)
- **Multitouch hasta 3 dedos:** Ajustar múltiples parámetros simultáneamente (exposure + focus + zoom)
- **Escribir:** Escribir caption para foto, nombrar especies descubiertas

**Accesibilidad:**
- Animales con outline brillante (cian) cuando están en foco
- Botones de cámara grandes (min 60px) con feedback visual claro
- Voice assistant da tips fotográficos ("El león está en posición perfecta para foto de caza")
- Modo "Auto Mode" para fotógrafos beginners (enfoque automático, exposición automática)
- Haptic feedback para captura de foto (vibración al tomar foto)
- Color coding por tipo de animal (mamífero=azul, ave=verde, reptil=naranja, acuático=cian)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de biomas isométricos
  - `<canvas>` para visor de cámara (viewfinder)
  - `<canvas>` para editor de fotos (post-processing)
  - `<video>` para modo video y time-lapse
  - `<input type="file">` para guardar fotos en galería
  - `<input type="range">` para ajustar exposición, ISO, apertura
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de biomas, animales)
  - Camera simulator: Custom implementation para simular cámara real (exposure, ISO, aperture, focus)
  - Post-processing: Custom filters (vivid, black & white, vintage, HDR)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del fotógrafo (fotos tomadas, especies desbloqueadas, equipo)
  - AI de animales: Custom behavior trees para movimiento realista (cazando, durmiendo, jugando)
  - Animaciones: GSAP para transiciones entre biomas
  - Storage: IndexedDB para guardar fotos y galería (offline play)
- **CSS:**
  - Grid layout para visor de cámara (12x12 grid)
  - CSS Transforms para zoom y pan de cámara (transform-origin: center)
  - CSS Animations para feedback de captura (flash, focus)
  - Backdrop-filter para blur de paneles de configuración
  - CSS Variables para theming por bioma (colores de sabana, selva, desierto)
  - Flexbox para contenedores de equipo
- **Otros:**
  - Web Audio API: Sonidos de cámara (shutter click, focus beep, lens whir)
  - DeviceOrientationEvent: Detectar shake para emergency shutter
  - Touch Events API: Multi-touch para ajustar múltiples parámetros
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar fotos y galería (offline play)
  - Service Workers: PWA para tomar fotos offline
  - Canvas API: Renderizar visor de cámara y biomas
  - Speech API: Voice commands para navegación ("zoom in", "take photo", "switch lens")

**Características Visuales:**
- **Paleta de colores:**
  - Sabana: Dorado (#FFD700), verde (#228B22), azul cielo (#87CEEB)
  - Selva: Verde intenso (#006400), café (#8B4513), neón tropical (#00FF7F)
  - Desierto: Naranja (#FFA500), amarillo (#FFFF00), azul (#87CEEB)
  - Tundra: Blanco (#FFFAFA), gris (#696969), azul hielo (#00BFFF)
  - Arrecife: Turquesa (#40E0D0), coral (#FF7F50), púrpura (#9932CC)
  - Bosque: Verde (#228B22), marrón (#8B4513), amarillo (#FFD700)
  - Visor de cámara: Negro (#000000) con UI de cámara (verde, amarillo, rojo)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, blur 10px)
- **Animaciones:**
  - Enfocar animal: Brillo cian en outline + focus beep (0.3s)
  - Tomar foto: Flash blanco + shutter sound (0.1s)
  - Capturar movimiento: Motion blur effect (0.2s)
  - Animal moviéndose: Walk/run cycle con spritesheet (10-12 FPS)
  - Especie desbloqueada: Foto emerge con glow dorado (1s)
- **Feedback visual:**
  - Foto tomada: Thumbnail en galería, indicador de calidad (estrellas 1-5)
  - Foto perfecta: Modal de celebración + badge (1.5s)
  - Animal en posición: Indicador de "perfect shot" (estrella amarilla)
  - Equipo mejorado: Icono de equipo brilla + stats mejorados
- **Personalización:**
  - 8 biomas: Sabana, selva, desierto, tundra, bosque, arrecife, montañas, mangrove
  - 200+ especies animales (mamíferos, aves, reptiles, peces, anfibios, insectos)
  - 50+ equipos: Cámaras (DSLR, mirrorless, action), lentes (wide, telephoto, macro), accesorios (trípode, flash, filtro)
  - Avatar de fotógrafo con 60+ combinaciones (ropa, cámara, accesorios)
  - Skins de visor de cámara (vintage, moderno, profesional, minimalista)

**Audio:**
- **Efectos de sonido:**
  - Shutter click: Camera shutter (50ms, varía por cámara)
  - Focus beep: High pitch beep (200ms)
  - Lens whir: Motor de zoom (continuous, 100-400Hz)
  - Animal call: Real animal sounds (rugido, canto, silbido, 200-800ms)
  - Perfect shot: Celebration chime (C4-E4-G4-C5, 1s)
  - Badge desbloqueado: Photographer fanfare (6 notas, 2s)
- **Música:**
  - Menú principal: Inspiring orchestral (strings, 80 BPM)
  - Sabana idle: African drums + flute (90 BPM)
  - Selva: Tropical ambient (rainforest sounds, 70 BPM)
  - Desierto: Wind + oud (traditional Middle Eastern, 85 BPM)
  - Tundra: Ethereal ice sounds (wind chimes, 60 BPM)
  - Arrecife: Underwater ambient (bubble sounds, 65 BPM)
  - Bosque: Birds + gentle piano (75 BPM)
  - Modo editor: Creative upbeat (guitarra + synth, 100 BPM)
- **Voz:**
  - Tutorial: Voz de fotógrafo profesional ("¡Bienvenido a Nature Photographer! Vamos a capturar la naturaleza")
  - Tip: Voz de guía ("El león está cazando, este es el momento perfecto para foto")
  - Especie descubierta: Voz de narrador ("¡Has descubierto el leopardo de las nieves!")
- **Audio espacial:** Sonidos 3D para feedback de posición (animales cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 90-110 horas (3-4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de biomas (50+ animales simultáneamente)
  - Latencia: <50ms para respuesta de cámara (shutter instantáneo)
  - Zoom: <30ms para animación de zoom (suave)
  - Memoria máxima: 200MB (incluye sprites de 200 especies, 8 biomas)
  - Post-processing: <200ms para aplicar filtros a foto
- **Riesgos técnicos:**
  - Simulación de cámara: Exposure, ISO, aperture deben ser realistas pero jugables
  - AI de animales: Comportamiento debe ser impredecible pero capturable
  - Optimización de renderizado: 50+ animales simultáneamente pueden consumir mucha CPU
  - Balance de dificultad: Fotos no deben ser imposibles de capturar

**Valor Educativo:**
- **Biología real:** Los niños aprenden especies animales, hábitats, comportamiento
- **Fotografía:** Dominan técnicas de composición, exposición, timing
- **Paciencia y observación:** Capturar fotos perfectas requiere esperar el momento correcto
- **Vocabulario científico:** Aprenden términos: especie, hábitat, comportamiento, ecosistema
- **Conciencia ambiental:** Entienden importancia de conservación y protección de naturaleza
- **Creatividad visual:** Desarrollan ojo fotográfico y sensibilidad estética
- **Respeto por la naturaleza:** Fotografiar animales genera aprecio y empatía

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Pokémon Snap - Photography game](https://www.pokemon.com/us/pokemon-video-games/pokemon-snap/) - Inspiración principal
- [National Geographic - Photography](https://www.nationalgeographic.com/photography) - Referencia fotográfica
- [Wildlife Photography - Professional examples](https://www.nationalgeographic.com/photography/photographers) - Fotos reales de referencia
- [Canon Camera Simulator - Camera interface](https://www.canon-europe.com/pro/camera-simulator/) - Simulación de cámara real
- [Birds of the World - Bird species](https://birdsoftheworld.org/) - Datos de especies reales
- [Web Audio API - Camera sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de cámara
- [PWA - Offline photography](https://web.dev/offline/) - PWA para tomar fotos sin internet

---

#### Idea #17: Math Warriors: Number Battles

**Concepto:**
Juego de combate matemático donde los jugadores aprenden matemáticas avanzadas a través de batallas estratégicas. Combina gameplay tipo RPG con problemas matemáticos reales, permitiendo a los niños dominar aritmética, álgebra, geometría y estadística mientras suben de nivel y desbloquean habilidades especiales.

**Motivación:**
- **Competencia intelectual:** Batallas 1v1 donde resolver problemas matemáticos rápido = ventaja estratégica
- **Progresión visible:** Comienzan con operaciones simples, avanzan a cálculos complejos (cálculo, matrices, probabilidad)
- **Habilidades especiales:** Desbloquean poderes matemáticos (multiplicación exponencial, geometría fractal, estadística predictiva)
- **Torneos globales:** Leaderboard de "Math Masters" con clasificación por nivel y especialidad
- **Personalización de guerrero:** Crear avatar con estilo de combate único (algebra, geometría, cálculo)

**Mecánica Principal:**
Los jugadores controlan "Math Warriors" en un mundo de batalla isométrico donde cada ataque requiere resolver un problema matemático. Los ataques se clasifican por dificultad:
- **Nivel 1 (Novato):** Aritmética básica (suma, resta, multiplicación, división)
- **Nivel 2 (Aprendiz):** Álgebra elemental (ecuaciones lineales, fracciones, porcentajes)
- **Nivel 3 (Guerrero):** Geometría y estadística (áreas, volúmenes, promedios, gráficos)
- **Nivel 4 (Maestro):** Álgebra avanzada (cuadráticas, sistemas, exponenciales)
- **Nivel 5 (Legendaria):** Cálculo y matrices (derivadas, integrales, matrices 3x3)

Cada batalla tiene rondas donde los jugadores intercambian ataques resolviendo problemas. Resolver rápido = daño bonus. Resolver perfectamente (sin errores) = crítico x2. Los jugadores tienen habilidades especiales que requieren resolver problemas complejos para activar (ej: "Tormenta Algebraica" = resolver 3 ecuaciones cuadráticas en 60 segundos).

**Interacción Móvil:**
- **Tap simple:** Seleccionar ataque, habilidad especial, enemigo
- **Arrastrar (Drag):** Mover guerrero en el campo de batalla
- **Pinch:** Zoom en el campo para ver detalles tácticos
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap rápido:** Responder problemas de aritmética rápida (más de 2 respuestas/segundo)
- **Swipe horizontal:** Cambiar entre vista de batalla y vista de progreso
- **Gestos complejos:**
  - Shake del dispositivo = "Math Frenzy" (modo de emergencia, problemas triples x3 daño)
  - Dibujo de símbolo matemático = atajo de ataque (dibujar Σ = suma, π = geometría, ∫ = cálculo)
  - Doble tap en enemigo = estadísticas de debilidad (tipo de problema que le causa más daño)
  - Arrastrar ecuación a enemigo = ataque directo
- **Multitouch hasta 3 dedos:** Resolver múltiples problemas simultáneamente (modo avanzado)
- **Escribir:** Editor de ecuaciones matemáticas con teclado especial (símbolos, fracciones, raíces)

**Accesibilidad:**
- Botones grandes (min 60px) para selección de ataques
- Teclado matemático con símbolos grandes y etiquetas claras
- Voice assistant lee problemas ("Cuál es 15% de 200?")
- Modo "Practice Mode" para entrenar sin presión de batalla
- Haptic feedback para aciertos (vibración corta) y errores (vibración larga)
- Color coding por tipo de problema (aritmética=azul, álgebra=naranja, geometría=verde, cálculo=rojo)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de campo de batalla isométrico
  - `<canvas>` para visualización de ecuaciones (MathJax o KaTeX rendering)
  - `<input type="number">` para respuestas numéricas
  - `<textarea>` para respuestas algebraicas
  - `<video>` para tutoriales animados de conceptos matemáticos
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de batalla, efectos visuales)
  - Math rendering: MathJax o KaTeX (renderizado de ecuaciones LaTeX)
  - Equation validator: Custom parser para validar respuestas matemáticas
  - Battle system: Custom lógica de daño basada en dificultad de problema
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del guerrero (nivel, XP, habilidades)
  - Animaciones: GSAP para efectos de ataque y daño
  - Storage: IndexedDB para guardar progreso (offline play)
  - Math parser: Math.js para evaluar expresiones matemáticas
- **CSS:**
  - Grid layout para panel de habilidades (6 columnas responsivo)
  - CSS Transforms para animaciones de ataque (scale, translate)
  - CSS Animations para feedback de acierto (pulse, glow, shake)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por tipo de guerrero)
  - Flexbox para contenedores de ecuaciones
- **Otros:**
  - Web Audio API: Sonidos de ataque (fireball, lightning, magic)
  - DeviceOrientationEvent: Detectar shake para "Math Frenzy"
  - Touch Events API: Multi-touch para resolver múltiples problemas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar progreso y estadísticas de batallas
  - Service Workers: PWA para jugar offline (modo practice)
  - Canvas API: Renderizar efectos de ataque matemático (números flotando, símbolos)
  - Speech API: Voice commands para navegación ("siguiente ataque", "activar habilidad")

**Características Visuales:**
- **Paleta de colores:**
  - Campo de batalla: Tema mágico con gradientes morados (#4B0082) y azules (#0000FF)
  - Guerreros: Colores por especialidad (algebra=naranja, geometría=verde, cálculo=rojo)
  - Efectos de ataque: Colores dinámicos (fuego=naranja→rojo, hielo=cyan→blanco, rayo=amarillo→azul)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, backdrop-filter blur 10px)
  - Ecuaciones: Colores por tipo (números=blanco, operadores=amarillo, variables=azul, símbolos=rojo)
- **Animaciones:**
  - Ataque de aritmética: Números explotan en aire (0.5s)
  - Ataque de álgebra: Ecuaciones giran y se disuelven (0.7s)
  - Ataque de geometría: Figuras geométricas rotan y colapsan (0.6s)
  - Ataque de cálculo: Símbolos de integración fluyen como rayos (0.8s)
  - Daño crítico: Flash dorado + partículas de estrellas (1s)
  - Habilidad especial: Efecto masivo con partículas (2s)
- **Feedback visual:**
  - Respuesta correcta: Borde verde brillante, icono checkmark animado
  - Respuesta incorrecta: Borde rojo pulsante, shake de la ecuación, hint
  - Ataque exitoso: Daño numérico flota hacia enemigo (50→100→200)
  - Habilidad activada: Efecto de aura pulsante en el guerrero
  - Batalla ganada: Modal con XP ganada, nivel up, desbloqueos
- **Personalización:**
  - 200+ guerreros con estilos únicos (algebra, geometría, cálculo, estadística)
  - 50+ habilidades especiales por especialidad
  - Avatar con 80+ combinaciones (armadura, arma, accesorios matemáticos)
  - Skins de campo de batalla (academia, laboratorio, universo matemático, arena)
  - Temas de ecuaciones (clásico, cyberpunk, vintage, minimalista)

**Audio:**
- **Efectos de sonido:**
  - Aritmética: Pop numbers (200-400ms)
  - Álgebra: Equation dissolve (300ms)
  - Geometría: Shape collapse (250ms)
  - Cálculo: Integral charge (500ms)
  - Daño crítico: Boom con eco (400ms)
  - Habilidad especial: Epic magic spell (1-2s)
  - Batalla ganada: Fanfare victorioso (2s)
- **Música:**
  - Menú principal: Upbeat math electronic (synth + beats, 120 BPM)
  - Batalla: Intense orchestral (strings + brass, 130 BPM)
  - Tutorial: Calm study music (piano + ambient, 80 BPM)
  - Torneo: Epic competition music (choir + drums, 110 BPM)
  - Nivel up: Celebratory fanfare (100 BPM)
- **Voz:**
  - Tutorial: Voz de matemático amigable ("¡Bienvenido a Math Warriors! Vamos a resolver problemas")
  - Habilidad activada: Voz de announcer ("¡Tormenta Algebraica activada!")
  - Batalla ganada: Voz de celebración ("¡Excelente! Has derrotado a tu oponente")
- **Audio espacial:** Sonidos 3D para feedback de posición (ataques desde la izquierda suenan en el canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 90-110 horas (4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de batalla (2 guerreros, efectos visuales)
  - Latencia: <100ms para respuesta de ecuación (feedback instantáneo)
  - Ecuaciones máximas en pantalla: 10 para高端, 5 para低端
  - Memoria máxima: 180MB (incluye sprites de 200 guerreros, efectos visuales)
  - Math rendering: <200ms para renderizar ecuaciones complejas
- **Riesgos técnicos:**
  - Validación de ecuaciones: Parser debe ser robusto para múltiples formatos de respuesta
  - Balance de dificultad: Problemas deben ser desafiantes pero no frustrantes
  - Math rendering: Ecuaciones complejas pueden consumir mucha CPU
  - Sincronización multiplayer: 2 jugadores simultáneos requiere optimización de paquetes

**Valor Educativo:**
- **Matemáticas reales:** Los niños aprenden aritmética, álgebra, geometría, estadística, cálculo
- **Pensamiento rápido:** Resolver problemas bajo presión desarrolla agilidad mental
- **Estrategia matemática:** Elegir el ataque correcto basado en debilidades del enemigo
- **Vocabulario matemático:** Aprenden términos: ecuación, variable, derivada, integral, probabilidad
- **Confianza matemática:** Dominar problemas avanzados mejora autoestima en matemáticas
- **Competencia constructiva:** Battles de matemáticas enseñan a aprender de errores
- **Persistencia:** Problemas difíciles requieren práctica y ensayo

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [MathJax - Math rendering](https://www.mathjax.org/) - Renderizado de ecuaciones LaTeX
- [KaTeX - Fast math rendering](https://katex.org/) - Renderizado rápido de ecuaciones
- [Prodigy Math Game - Math RPG](https://www.prodigygame.com/) - Inspiración para mecánica de batalla
- [DragonBox - Algebra learning](https://dragonbox.com/) - Enseñanza interactiva de álgebra
- [Khan Academy - Math curriculum](https://www.khanacademy.org/math) - Referencia de matemáticas
- [Web Audio API - Math sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de ataque
- [Math.js - Math parser](https://mathjs.org/) - Validación de ecuaciones matemáticas

---

#### Idea #18: History Explorer: Time Traveler

**Concepto:**
Juego de aventura histórica donde los jugadores viajan en el tiempo a diferentes épocas, interactúan con figuras históricas, descubren eventos clave y desbloquean secretos del pasado. Combina gameplay tipo Assassin's Creed con lecciones de historia real, permitiendo a los niños aprender sobre civilizaciones, guerras, revoluciones y avances científicos.

**Motivación:**
- **Descubrimiento histórico:** Cada época tiene eventos y personajes únicos por descubrir
- **Viaje en el tiempo:** Saltar entre épocas (antiguo Egipto, Roma medieval, Revolución Francesa, WWII, Futuro)
- **Interacción con figuras históricas:** Hablar con Cleopatra, Julio César, Napoleón, Einstein
- **Misiones épicas:** Participar en eventos reales (construcción de pirámides, batallas históricas, descubrimientos científicos)
- **Colección de artefactos:** Recolectar objetos históricos (anclajes romanos, pergaminos medievales, mapas de navegación)

**Mecánica Principal:**
Los jugadores son "Time Travelers" con un dispositivo de viaje temporal que les permite visitar diferentes épocas. Cada época tiene misiones主线 que reconstruyen eventos históricos:
- **Antiguo Egipto (2500 AC):** Ayudar a construir pirámides, descubrir tumbas, interactuar con faraones
- **Roma Antigua (100 DC):** Participar en el Senado Romano, asistir a gladiadores, construir acueductos
- **Edad Media (1200 DC):** Vida en castillos, torneos de caballeros, invención de la imprenta
- **Renacimiento (1500 DC):** Conocer a Leonardo da Vinci, Michelangelo, Galileo
- **Revolución Americana (1776):** Luchar por independencia, firmar Declaración, interactuar con George Washington
- **Revolución Industrial (1800 DC):** Revolución de la máquina, trenes, fábricas
- **WWI y WWII (1914-1945):** Batallas, tecnología bélica, resistencia
- **Futuro (2100):** Vida en Marte, IA avanzada, viajes interestelares

Cada misión tiene objetivos históricos que cumplen con precisión (fechas, personajes, eventos). Los jugadores recolectan artefactos históricos que desbloquean información y galería del museo.

**Interacción Móvil:**
- **Tap simple:** Interactuar con personajes históricos, recoger artefactos, seleccionar misiones
- **Arrastrar (Drag):** Mover personaje en el mapa isométrico
- **Pinch:** Zoom en el mapa para ver detalles arquitectónicos
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap rápido:** Esquiva de ataques (en misiones de combate)
- **Swipe horizontal:** Cambiar entre vista de mapa y vista de línea de tiempo
- **Gestos complejos:**
  - Shake del dispositivo = activar dispositivo de viaje temporal (saltar a otra época)
  - Dibujo de símbolo temporal = atajo a época específica (pirámide=Egipto, espada=Roma)
  - Doble tap en personaje = biografía detallada (historia, logros, fecha de nacimiento/muerte)
  - Arrastrar artefacto a inventario = guardar en museo personal
- **Multitouch hasta 3 dedos:** Selección múltiple de objetos para investigar
- **Escribir:** Escribir diario de viajes, anotar descubrimientos históricos

**Accesibilidad:**
- Personajes con iconos grandes (min 80px) y etiquetas claras (nombre, año)
- Voice assistant explica contexto histórico ("Estás en Roma en el año 100 DC, durante el reinado de Trajano")
- Modo "Tour Guide" para visitar épocas sin presión de misiones
- Haptic feedback para descubrimientos (vibración al encontrar artefactos)
- Color coding por época (antiguo=dorado, medieval=bronce, moderno=gris, futurista=cyan)
- Linea de tiempo visual con puntos destacados para fácil navegación

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de mapas isométricos de épocas
  - `<canvas>` para línea de tiempo interactiva (cronología de eventos)
  - `<canvas>` para visualización de artefactos (zoom, rotación)
  - `<video>` para cutscenes de eventos históricos
  - `<details>/<summary>` para biografías de personajes
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de épocas, físicas de movimiento)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del viajero (épocas visitadas, artefactos recolectados)
  - Historical data: JSON con 500+ eventos, personajes, fechas, artefactos
  - Time travel system: Custom lógica para mantener coherencia temporal
  - Animaciones: GSAP para transiciones entre épocas (warp effect)
  - Storage: IndexedDB para guardar progreso (offline play)
  - Character AI: Custom AI para diálogos históricos basados en hechos reales
- **CSS:**
  - Grid layout para línea de tiempo (responsivo con scroll horizontal)
  - CSS Transforms para animaciones de viaje temporal (scale, fade, rotate)
  - CSS Animations para efectos de parpadeo temporal (0.5s)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por época)
  - Flexbox para contenedores de artefactos
- **Otros:**
  - Web Audio API: Sonidos históricos (trompetas romanas, caballos, cañones)
  - DeviceOrientationEvent: Detectar shake para activar viaje temporal
  - Touch Events API: Multi-touch para seleccionar múltiples objetos
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar progreso y galería de museo (offline play)
  - Service Workers: PWA para viajar en el tiempo offline
  - Canvas API: Renderizar efectos de viaje temporal (warp hole, particles)
  - Speech API: Voice commands para navegación ("siguiente época", "ir a Roma")

**Características Visuales:**
- **Paleta de colores:**
  - Antiguo Egipto: Dorado (#FFD700), arena (#F4A460), azul egipcio (#009688)
  - Roma Antigua: Mármol blanco (#F5F5F5), rojo imperial (#DC143C), bronce (#CD7F32)
  - Edad Media: Piedra gris (#808080), madera (#8B4513), roble (#D2691E)
  - Renacimiento: Fresco colores (#FFA07A, #98FB98), lienzo (#F5DEB3)
  - Revolución Industrial: Carbón (#2F4F4F), hierro (#696969), humo (#D3D3D3)
  - Moderno (WWI/II): Gris de uniforme (#696969), metal (#A9A9A9), verde militar (#556B2F)
  - Futuro: Cian (#00CED1), plata (#C0C0C0), neón (#00FF7F)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.6, backdrop-filter blur 10px)
- **Animaciones:**
  - Viaje temporal: Warp effect con estrellas y partículas (2s)
  - Aparecer en época: Fade in con dust effect (1.5s)
  - Recoger artefacto: Flash dorado + brillo (0.5s)
  - Personaje hablando: Lip sync animado (spritesheet, 10 FPS)
  - Evento histórico: Cutscene con animación de evento (3-5s)
- **Feedback visual:**
  - Artefacto descubierto: Icono brillante, modal con información histórica
  - Misión completada: Flash dorado + confetti histórica (relojes, pergaminos)
  - Época completada: Badge con símbolo de la época (pirámide, corona, cohete)
  - Personaje importante: Indicador de "figura histórica" (estrella dorada)
- **Personalización:**
  - 10 épocas históricas (Egipto, Roma, Edad Media, Renacimiento, Revolución Industrial, WWI, WWII, Futuro)
  - 500+ personajes históricos con biografías detalladas
  - 300+ artefactos (anclajes, pergaminos, mapas, uniformes, tecnología)
  - Avatar de viajero temporal con 70+ combinaciones (traje, dispositivo, accesorios)
  - Museo personal con galería de descubrimientos y cronología personal

**Audio:**
- **Efectos de sonido:**
  - Viaje temporal: Warp sound ascending (200-800Hz, 2s)
  - Recoger artefacto: Chime ascendente (C4-E4-G4-C5, 0.5s)
  - Personaje hablando: Voice con ambiente de época (acústica de castillo, eco de templo)
  - Combate: Sword clashing, arrows flying, cannon fire (300-500ms)
  - Descubrimiento: Mystical chime (1s)
  - Época completada: Fanfare histórica (2s)
- **Música:**
  - Antiguo Egipto: Ancient Egyptian instruments (oud, harp, 70 BPM)
  - Roma Antigua: Roman trumpets + lyre (80 BPM)
  - Edad Media: Medieval folk (flute + lute, 90 BPM)
  - Renacimiento: Classical Renaissance (violin + harpsichord, 100 BPM)
  - Revolución Industrial: Steam-driven industrial (rhythmic percussion, 110 BPM)
  - Moderno (WWI/II): Military march (brass + drums, 120 BPM)
  - Futuro: Sci-fi electronic (synth + ambient, 130 BPM)
- **Voz:**
  - Tutorial: Voz de historiador entusiasta ("¡Bienvenido a History Explorer! Viajaremos en el tiempo")
  - Viaje temporal: Voz de dispositivo temporal ("Viajando a Roma en el año 100 DC")
  - Personaje histórico: Voz con acento apropiado (Cleopatra con tono egipcio, César con tono romano)
- **Audio espacial:** Sonidos 3D para feedback de posición (personaje cerca suena más fuerte)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 130-150 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de épocas (1000+ entidades simultáneamente)
  - Latencia: <100ms para respuesta de interacción (feedback instantáneo)
  - Entidades máximas: 2000 para高端, 500 para低端
  - Memoria máxima: 250MB (incluye sprites de 10 épocas, 500 personajes, 300 artefactos)
  - Viaje temporal: <2s para transición entre épocas (warp effect)
- **Riesgos técnicos:**
  - Coherencia temporal: Mantener lógica de tiempo sin paradojas
  - Datos históricos: Precisión de fechas y eventos puede ser compleja de validar
  - Renderizado de épocas: Cada época tiene assets únicos que consumen memoria
  - Sincronización multiplayer: 2 jugadores en diferentes épocas requiere gestión de estado compleja

**Valor Educativo:**
- **Historia real:** Los niños aprenden eventos, personajes, fechas, civilizaciones
- **Comprensión temporal:** Entienden la línea del tiempo, causas y efectos de eventos
- **Perspectiva cultural:** Viven diferentes épocas y culturas, desarrollando empatía histórica
- **Vocabulario histórico:** Aprenden términos: imperio, renacimiento, revolución, industrialización
- **Pensamiento crítico:** Entienden cómo las decisiones históricas afectan el presente
- **Curiosidad intelectual:** Descubrir secretos históricos genera interés por investigar más
- **Memoria visual:** Asocian fechas con imágenes visuales (pirámide=2500 AC, Eiffel=1889)

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Assassin's Creed - Historical game](https://www.ubisoft.com/en-us/game/assassins-creed) - Inspiración para épocas históricas
- [Civilization - History strategy](https://www.civilization.com/) - Línea de tiempo y eventos históricos
- [National Geographic - History](https://www.nationalgeographic.com/history) - Referencia histórica
- [Timeline JS - Interactive timelines](https://timeline.knightlab.com/) - Visualización de cronologías
- [Khan Academy - World history](https://www.khanacademy.org/humanities/world-history) - Referencia de historia
- [Web Audio API - Historical sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos históricos
- [PWA - Offline history exploration](https://web.dev/offline/) - PWA para explorar sin internet

---

#### Idea #19: Robot Builder: Tech Creator

**Concepto:**
Juego de construcción de robots donde los jugadores diseñan, construyen y programan robots personalizados que compiten en misiones y torneos. Combina gameplay tipo LEGO Mindstorms con programación real, permitiendo a los niños aprender ingeniería, electrónica, robótica y código.

**Motivación:**
- **Creatividad sin límites:** Cientos de piezas, módulos y sensores para combinar
- **Robots personalizados:** Crear robots únicos con capacidades especiales
- **Programación real:** Los robots se mueven con código real (Python, JavaScript, Scratch)
- **Competencia técnica:** Torneos de robots con desafíos de ingeniería
- **Desbloqueo de tecnología:** Avanzar desde robots básicos hasta inteligentes (AI, visión computacional)

**Mecánica Principal:**
Los jugadores tienen un taller virtual donde diseñan robots desde cero:
- **Chasis:** Diferentes bases (cuadrado, hexagonal, con ruedas, con orugas)
- **Sensores:** Visión (cámara), tacto (bumpers), ultrasonido (distancia), giroscopio (orientación), GPS (posicionamiento), IMU (movimiento)
- **Actuadores:** Motores DC, servomotores, pistones hidráulicos, brazos robóticos, pinzas
- **Procesadores:** Microcontroladores (Arduino, Raspberry Pi, ESP32), CPU de robot (AI chips)
- **Programación:** Scratch visual (bloques), JavaScript, Python para lógica y comportamiento

Los robots compiten en misiones:
- **Carreras de velocidad:** Robots deben navegar pistas con obstáculos
- **Laberintos:** Usar sensores para encontrar salida
- **Búsqueda y rescate:** Encontrar objetos en entornos complejos
- **Combate:** Robots con armas defienden su territorio
- **Exploración:** Mapear entornos desconocidos con sensores

El sistema de programación permite escribir código real que se ejecuta en el robot virtual. Los robots pueden usar IA (visión computacional, machine learning) para tareas avanzadas.

**Interacción Móvil:**
- **Tap simple:** Seleccionar piezas, sensores, actuadores
- **Arrastrar (Drag):** Ensamblar piezas en el chasis, conectar sensores
- **Pinch:** Zoom en el robot para ver detalles técnicos
- **Dos dedos (drag):** Rotar el robot en 3D (simulado con 2D transforms)
- **Tap rápido:** Seleccionar múltiples piezas simultáneamente
- **Swipe horizontal:** Cambiar entre vista de taller y vista de programación
- **Gestos complejos:**
  - Shake del dispositivo = simular terremoto (probar estabilidad del robot)
  - Dibujo de conexión = cable de sensores (dibujar línea entre componentes)
  - Doble tap en pieza = especificaciones técnicas (voltage, consumo, datasheet)
  - Arrastrar código a robot = cargar programa
- **Multitouch hasta 5 dedos:** Seleccionar múltiples piezas para construcción rápida
- **Escribir:** Editor de código con autocompletado (JavaScript, Python)

**Accesibilidad:**
- Piezas con iconos grandes (min 70px) y etiquetas claras
- Voice assistant explica componentes ("Este es un sensor ultrasónico que mide distancia")
- Modo "Quick Build" para ensamblar robots pre-diseñados
- Haptic feedback para conexiones exitosas (vibración al encajar piezas)
- Color coding por tipo de componente (estructura=azul, sensores=verde, actuadores=naranja, procesador=rojo)
- Tutorial interactivo con paso a paso para principiantes

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de taller y robot 3D (simulado)
  - `<canvas>` para vista de programación (bloques de Scratch)
  - `<canvas>` para simulación de sensores (data visualización)
  - `<textarea>` para editor de código (JavaScript, Python)
  - `<video>` para tutoriales de ingeniería y programación
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de taller, simulación física)
  - Physics engine: Matter.js (simulación de movimiento de robot)
  - Code editor: Monaco Editor (VS Code style) o CodeMirror
  - Scratch blocks: Scratch Blocks (Google Blockly) para programación visual
  - Python runtime: Pyodide (Python en el browser)
  - Robot simulation: Custom physics para motores, sensores, fricción
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del constructor (robots creados, piezas desbloqueadas)
  - Animaciones: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar robots y programas (offline play)
- **CSS:**
  - Grid layout para panel de piezas (10 columnas responsivo)
  - CSS Transforms para rotación 3D de robot (transform-style: preserve-3d)
  - CSS Animations para feedback de construcción (scale, glow)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de código y sensores
- **Otros:**
  - Web Audio API: Sonidos de robot (motores, sensores, alertas)
  - DeviceOrientationEvent: Detectar shake para simulación de terremoto
  - Touch Events API: Multi-touch para selección múltiple de piezas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar robots, programas y progreso (offline play)
  - Service Workers: PWA para construir robots offline
  - Canvas API: Renderizar robot y componentes en 3D simulado
  - Web Workers: Ejecutar código de robot sin bloquear UI
  - Speech API: Voice commands para navegación ("guardar robot", "ejecutar código")

**Características Visuales:**
- **Paleta de colores:**
  - Taller: Industrial con tonos metálicos (#708090), gris (#808080), amarillo seguridad (#FFD700)
  - Robot: Colores por componente (estructura=azul #0000FF, sensores=verde #00FF00, actuadores=naranja #FFA500, procesador=rojo #FF0000)
  - Código: Tema VS Code Dark para editor (fondo #1E1E1E, sintaxis coloreada)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, backdrop-filter blur 10px)
  - Sensores data: Gráficos en tiempo real con colores (línea verde=valor normal, roja=alerta)
- **Animaciones:**
  - Ensamblar pieza: Pieza se encaja con click y glow (0.3s)
  - Robot en movimiento: Motor humming animation (continuous)
  - Sensor activo: LED indicator pulsando (green=active, red=error)
  - Ejecutar código: Console output animation (0.5s)
  - Robot completado: Celebration animation con particles (1.5s)
- **Feedback visual:**
  - Pieza compatible: Outline verde brillante, click sound
  - Pieza incompatible: Outline rojo pulsante, hint ("Esta pieza no encaja aquí")
  - Sensor detectando: Data visualization en tiempo real (gráfico de valores)
  - Código ejecutando: Console output showing results
  - Robot funcionando: Efecto de humo, sparkles, motion trails
- **Personalización:**
  - 200+ piezas (chasis, sensores, motores, procesadores, accesorios)
  - 50+ sensores (cámara, ultrasónico, GPS, giroscopio, IMU, tacto)
  - 30+ actuadores (motores DC, servos, pistones, brazos, pinzas)
  - Modos de programación: Scratch visual, JavaScript, Python
  - Skins de taller (industrial, cyberpunk, minimalista, espacio)
  - Avatar de ingeniero con 60+ combinaciones (uniforme, herramientas, accesorios)

**Audio:**
- **Efectos de sonido:**
  - Ensamblar pieza: Click satisfactorio (50ms)
  - Motor funcionando: Hum with variation por velocidad (100-500Hz, continuous)
  - Sensor activo: Beep variado (200-400ms)
  - Sensor error: Alarm pulsante (500ms)
  - Código ejecutando: Processing sound (0.5s)
  - Robot colisionando: Crash + shake (300ms)
  - Robot completado: Fanfare de ingeniería (2s)
- **Música:**
  - Menú principal: Upbeat electronic tech (synth + beats, 120 BPM)
  - Taller: Industrial ambient (machinery hum, 70 BPM)
  - Programación: Focus music (lo-fi beats, 80 BPM)
  - Competencia: Intense techno (130 BPM)
  - Éxito: Motivational electronic (100 BPM)
- **Voz:**
  - Tutorial: Voz de ingeniero amigable ("¡Bienvenido a Robot Builder! Vamos a construir tu primer robot")
  - Sensor alert: Voz de sistema ("Sensor ultrasónico detectando objeto a 30 cm")
  - Código ejecutado: Voz de consola ("Programa ejecutado exitosamente")
- **Audio espacial:** Sonidos 3D para feedback de posición (motores cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 120-140 horas (5 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de robot 3D simulado (100+ piezas)
  - Latencia: <100ms para respuesta de código ejecutado
  - Simulación física: <50ms para calcular movimiento de robot (Matter.js)
  - Código ejecución: <500ms para ejecutar programas de robot (Web Workers)
  - Memoria máxima: 220MB (incluye sprites de 200 piezas, data de simulación)
- **Riesgos técnicos:**
  - Simulación física: Motores y sensores deben comportarse realistas
  - Ejecución de código: Sandbox seguro para JavaScript/Python sin comprometer seguridad
  - 3D rendering: Renderizar robot con transformaciones 3D en 2D canvas
  - Sincronización multiplayer: 2 robots compitiendo requiere physics sync

**Valor Educativo:**
- **Ingeniería real:** Los niños aprenden mecánica, electrónica, sensores, actuadores
- **Programación real:** Dominan Scratch, JavaScript, Python aplicados a robots
- **Pensamiento lógico:** Diseñar comportamiento del robot requiere algoritmos
- **Física aplicada:** Entienden fuerza, torque, fricción, gravedad en movimiento de robot
- **Electrónica:** Aprenden circuitos, sensores, procesadores, comunicación
- **Resolución de problemas:** Debugging de código y ajuste de parámetros
- **Creatividad técnica:** Diseñar robots únicos desarrolla ingeniería creativa

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Simulación física de robot
- [Google Blockly - Scratch blocks](https://developers.google.com/blockly) - Programación visual
- [CodeMirror - Code editor](https://codemirror.net/) - Editor de código
- [Pyodide - Python in browser](https://pyodide.org/) - Runtime de Python
- [LEGO Mindstorms - Robot building](https://www.lego.com/en-us/mindstorms) - Inspiración para construcción de robots
- [Arduino - Electronics platform](https://www.arduino.cc/) - Referencia de microcontroladores
- [Web Audio API - Robot sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de robot
- [PWA - Offline robot building](https://web.dev/offline/) - PWA para construir sin internet

---

#### Idea #20: Language Master: Word Adventure

**Concepto:**
Juego de aprendizaje de idiomas donde los jugadores viajan por mundos temáticos mientras aprenden vocabulario, gramática, conversación y cultura de diferentes idiomas. Combina gameplay tipo Duolingo con aventura RPG, permitiendo a los niños dominar múltiples idiomas (español, inglés, francés, alemán, japonés, chino, portugués).

**Motivación:**
- **Aventura global:** Viajar por países mientras aprendes el idioma local
- **Comunicación real:** Hablar con NPCs nativos en diferentes idiomas
- **Progresión visible:** Comienzan con saludos básicos, avanzan a conversaciones complejas
- **Múltiples idiomas:** Aprender 7+ idiomas simultáneamente
- **Cultura viva:** Descubrir comida, música, tradiciones de cada país

**Mecánica Principal:**
Los jugadores son "Language Masters" que viajan por 7 mundos temáticos, cada uno representando un idioma:
- **España (Español):** Flamenco, tapas, Plaza Mayor, Alhambra
- **Reino Unido (Inglés):** Big Ben, té, countryside, Londres
- **Francia (Francés):** Torre Eiffel, croissants, Louvre, Provenza
- **Alemania (Alemán):** Oktoberfest, castillos, Berlín, Baviera
- **Japón (Japonés):** Templos, sushi, Anime, Kyoto
- **China (Chino):** Gran Muralla, Pekín, Pato Pekín, Dinastías
- **Brasil (Portugués):** Carnaval, samba, Río de Janeiro, Amazonas

Cada mundo tiene misiones que enseñan diferentes aspectos del idioma:
- **Nivel 1 (Turista):** Saludos, números, colores, días de la semana
- **Nivel 2 (Residente):** Familia, comida, ropa, transporte
- **Nivel 3 (Nativo):** Gramática, verbos, tiempo, preposiciones
- **Nivel 4 (Experto):** Conversación, idiomas expresiones, literatura, cultura
- **Nivel 5 (Maestro):** Negocios, historia, filosofía, arte

Las misiones incluyen:
- **Diálogos:** Hablar con NPCs usando el idioma correcto
- **Traducción:** Traducir frases del idioma nativo al aprendido
- **Escucha:** Entender pronunciación y responder
- **Vocabulario:** Aprender palabras con flashcards y mini-games
- **Gramática:** Completar frases con la forma correcta
- **Cultura:** Descubrir tradiciones, comida, historia del país

**Interacción Móvil:**
- **Tap simple:** Seleccionar respuesta, hablar con NPCs, recoger objetos culturales
- **Arrastrar (Drag):** Ordenar palabras para formar frases
- **Pinch:** Zoom en el mapa para ver detalles del país
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap rápido:** Responder preguntas de vocabulario (más de 2 respuestas/segundo)
- **Swipe horizontal:** Cambiar entre vista de mapa y vista de lección
- **Gestos complejos:**
  - Shake del dispositivo = cambiar de país (teletransporte rápido)
  - Dibujo de símbolo cultural = atajo a país específico (bandera=España, torre=Eiffel)
  - Doble tap en NPC = información cultural (nombre, profesión, frase típica)
  - Arrastrar palabra a frase = construir oración
- **Multitouch hasta 3 dedos:** Seleccionar múltiples palabras para traducción rápida
- **Escribir:** Escribir frases en el idioma aprendido (diario de viaje)
- **Hablar:** Voz para pronunciación (Web Speech API reconoce idioma)

**Accesibilidad:**
- Palabras con texto grande (min 24px) y pronunciación audio
- Voice assistant repite palabras nativas ("Hola se dice Hello en inglés")
- Modo "Slow Conversation" para diálogos a velocidad reducida (0.75x)
- Haptic feedback para aciertos (vibración corta) y errores (vibración larga)
- Color coding por idioma (español=rojo, inglés=azul, francés=verde, alemán=negro, japonés=rosa, chino=rojo dorado, portugués=verde amarillo)
- Flashcards con imágenes y audio para aprendizaje multisensorial

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de mapas de países (isométrico)
  - `<canvas>` para visualización de flashcards (flip animation)
  - `<audio>` para pronunciación de palabras (native speakers)
  - `<input type="text">` para escribir respuestas en el idioma aprendido
  - `<video>` para videos culturales (comida, música, tradiciones)
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de mundos, interacción)
  - Speech recognition: Web Speech API para pronunciación
  - Speech synthesis: Text-to-Speech para audio nativo
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del lingüista (idiomas aprendidos, palabras dominadas)
  - Language data: JSON con 5000+ palabras por idioma, gramática, expresiones
  - Cultural content: JSON con información de países, comida, tradiciones
  - Flashcard system: Custom algoritmo de repetición espaciada (SRS)
  - Animaciones: GSAP para transiciones entre mundos (warp effect)
  - Storage: IndexedDB para guardar progreso y flashcards (offline play)
- **CSS:**
  - Grid layout para panel de idiomas (7 columnas responsivo)
  - CSS Transforms para animaciones de flashcards (rotateY 180deg)
  - CSS Animations para feedback de acierto (pulse, glow)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por idioma)
  - Flexbox para contenedores de vocabulario y diálogos
- **Otros:**
  - Web Audio API: Sonidos de países (música tradicional, ambiente)
  - DeviceOrientationEvent: Detectar shake para cambiar de país
  - Touch Events API: Multi-touch para selección múltiple de palabras
  - Pointer Events API: Unificar mouse/touch/pen input
  - Web Speech API: Reconocimiento de voz para pronunciación
  - Text-to-Speech: Pronunciación nativa de palabras y frases
  - IndexedDB: Guardar progreso y flashcards (offline play)
  - Service Workers: PWA para aprender idiomas offline
  - Canvas API: Renderizar mapas y efectos culturales
  - Speech API: Voice commands para navegación ("siguiente lección", "repetir palabra")

**Características Visuales:**
- **Paleta de colores:**
  - España: Rojo passion (#FF0000), amarillo soleado (#FFD700), naranja terracota (#FF7F50)
  - Reino Unido: Azul real (#00008B), gris lluvioso (#708090), rosa pastel (#FFB6C1)
  - Francia: Bleu de France (#0055A4), blanco (#FFFFFF), rojo (#EF4135)
  - Alemania: Negro (#000000), rojo (#DD0000), oro (#FFCE00)
  - Japón: Sakura rosa (#FFB7C5), rojo blanco (#FF0000), cian (#00CED1)
  - China: Rojo imperial (#DC143C), amarillo dorado (#FFD700), jade (#00A86B)
  - Brasil: Verde bandera (#009C3B), amarillo (#FFDF00), azul celeste (#002776)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.6, backdrop-filter blur 10px)
  - Flashcards: Blanco por delante, azul por detrás con palabra traducida
- **Animaciones:**
  - Viajar a país: Warp effect con mapa mundial girando (2s)
  - Aparecer en país: Fade in con cultura local (música, colores, 1.5s)
  - Flashcard flip: Rotación 180deg para ver traducción (0.5s)
  - NPC hablando: Lip sync animado con expresión facial (spritesheet, 10 FPS)
  - Aprender palabra: Flash dorado + icono de brain (0.5s)
- **Feedback visual:**
  - Respuesta correcta: Borde verde brillante, icono checkmark animado
  - Respuesta incorrecta: Borde rojo pulsante, shake, hint correcta
  - Palabra aprendida: Badge con bandera del idioma, confetti de letras
  - Diálogo exitoso: Modal con frase aprendida, pronunciación audio
  - País completado: Badge con monumento del país (Torre Eiffel, Gran Muralla)
- **Personalización:**
  - 7 idiomas completos (español, inglés, francés, alemán, japonés, chino, portugués)
  - 5000+ palabras por idioma con pronunciación nativa
  - 200+ expresiones idiomáticas por idioma
  - Gramática completa (tiempos verbales, preposiciones, conjugaciones)
  - Contenido cultural (comida, música, tradiciones, historia)
  - Avatar de viajero con 80+ combinaciones (ropa, accesorios culturales)
  - Skins de mapa (clásico, moderno, vintage, ilustrado)

**Audio:**
- **Efectos de sonido:**
  - Palabra aprendida: Chime ascendente (C4-E4-G4-C5, 0.5s)
  - Respuesta correcta: Ding satisfactorio (C5, 150ms)
  - Respuesta incorrecta: Buzz descendente (E2-C2, 200ms)
  - Flashcard flip: Whoosh (100ms)
  - NPC hablando: Voice con acento nativo (pronunciación real)
  - Viaje a país: Airplane whoosh + cultural music intro (2s)
- **Música:**
  - Menú principal: Upbeat world music fusion (instruments globales, 110 BPM)
  - España: Flamenco guitar + castañuelas (120 BPM)
  - Reino Unido: Pub folk music (guitar + violin, 100 BPM)
  - Francia: Accordion + piano (90 BPM)
  - Alemania: Polka + brass (130 BPM)
  - Japón: Koto + shakuhachi (70 BPM)
  - China: Guzheng + erhu (80 BPM)
  - Brasil: Samba + bossa nova (120 BPM)
- **Voz:**
  - Tutorial: Voz de lingüista entusiasta ("¡Bienvenido a Language Master! Vamos a aprender idiomas")
  - Palabra nueva: Pronunciación nativa repetida 3 veces
  - Diálogo NPC: Voice con acento y expresividad cultural
  - Traducción: Voz explicando ("Hola en español es Hello en inglés")
- **Audio espacial:** Sonidos 3D para feedback de posición (NPC cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de mundos (1000+ entidades simultáneamente)
  - Latencia: <200ms para reconocimiento de voz (Web Speech API)
  - Pronunciación: <500ms para sintetizar audio nativo (Text-to-Speech)
  - Entidades máximas: 1500 para高端, 400 para低端
  - Memoria máxima: 280MB (incluye audio de 5000 palabras x 7 idiomas, mapas de 7 países)
- **Riesgos técnicos:**
  - Reconocimiento de voz: Diferentes idiomas tienen diferentes acentos y dificultades
  - Síntesis de audio: Calidad de Text-to-Speech nativa puede variar por idioma
  - Datos lingüísticos: 5000 palabras x 7 idiomas = 35,000 palabras con pronunciación
  - Sincronización multiplayer: 2 jugadores aprendiendo idiomas requiere progreso sync

**Valor Educativo:**
- **Idiomas reales:** Los niños dominan vocabulario, gramática, conversación en 7+ idiomas
- **Cultura global:** Entienden tradiciones, comida, música, historia de diferentes países
- **Pronunciación correcta:** Escuchan y hablan con audio nativo
- **Comunicación multilingüe:** Desarrollan habilidad para comunicarse en diferentes idiomas
- **Memoria visual y auditiva:** Asocian palabras con imágenes y audio
- **Apertura cultural:** Aprender idiomas genera empatía y curiosidad por otras culturas
- **Persistencia:** Aprender idiomas requiere práctica diaria y repetición

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Duolingo - Language learning](https://www.duolingo.com/) - Inspiración para mecánica de aprendizaje
- [Babbel - Language courses](https://www.babbel.com/) - Referencia de currículo lingüístico
- [Memrise - Flashcard learning](https://www.memrise.com/) - Repetición espaciada
- [Web Speech API - Speech recognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) - Reconocimiento de voz
- [Text-to-Speech - Native pronunciation](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) - Pronunciación nativa
- [Google Translate - Translation engine](https://translate.google.com/) - Traducción de referencia
- [PWA - Offline language learning](https://web.dev/offline/) - PWA para aprender sin internet

---

### Lote 6 (Ideas 21-24)
**Fecha:** 2026-02-17
**Ejecución:** 6/25

#### Idea #21: MedTech Academy: Doctor Simulator

**Concepto:**
Juego médico educativo donde los jugadores son doctores en un hospital virtual, diagnosticando enfermedades, realizando procedimientos médicos y tratando pacientes. Combina simulación médica con elementos de biología, enseñando anatomía, enfermedades, tratamientos y ética médica.

**Motivación:**
- **Misión de salvar vidas:** Los pacientes dependen de tus diagnósticos y tratamientos
- **Desafíos médicos progresivos:** Comienzan con resfriados simples, avanzan a cirugías complejas
- **Especialización médica:** Desbloquear especialidades (pediatría, cardiología, neurología)
- **Colección de casos:** 200+ casos médicos con historias únicas
- **Reputación hospitalaria:** Leaderboard de mejores hospitales

**Mecánica Principal:**
Los jugadores son doctores residentes en un hospital con departamentos: emergencia, consulta externa, quirófano, UCI, laboratorio. Cada paciente llega con síntomas específicos (fiebre, dolor de pecho, fractura). Los jugadores deben: examinar al paciente (auscultar, medir signos vitales), pedir exámenes (rayos X, sangre, MRI), diagnosticar la enfermedad, prescribir tratamiento, realizar procedimientos (sutura, cirugía). Los diagnósticos requieren conocimiento médico real (síntomas → enfermedad → tratamiento). Hay modo carrera (convertirse en jefe de medicina) y modo libre (tratar pacientes sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar herramientas médicas, interactuar con pacientes, ver expedientes
- **Arrastrar (Drag):** Mover instrumentos quirúrgicos, organizar expedientes médicos
- **Pinch:** Zoom en el cuerpo del paciente para ver detalles anatómicos (0.5x-5x)
- **Dos dedos (drag):** Pan/mover la vista del cuerpo o habitación
- **Tap rápido:** Auscultar corazón/pulmones (tap en tórax)
- **Tap largo (Long press):** Ver información detallada de enfermedad (síntomas, tratamiento, prevención)
- **Swipe horizontal:** Cambiar entre vista de paciente, vista de laboratorio, vista de expediente
- **Gestos complejos:**
  - Shake del dispositivo = "emergency code blue" (alerta roja de paciente crítico)
  - Dibujo de incisión = realizar cirugía (línea de corte en el cuerpo)
  - Doble tap en órgano = ver información anatómica (función, enfermedades comunes)
  - Arrastrar medicina a paciente = administrar tratamiento
- **Multitouch hasta 5 dedos:** Usar múltiples instrumentos simultáneamente (cirugía compleja)
- **Escribir:** Escribir recetas médicas, notas en expediente del paciente

**Accesibilidad:**
- Instrumentos médicos con iconos grandes (min 80px) y etiquetas claras
- Pacientes con signos vitales resaltados (color coding: verde=normal, amarillo=alerta, rojo=crítico)
- Voice assistant guía diagnóstico ("El paciente tiene fiebre alta y tos persistente")
- Modo "Tutorial Mode" para aprender procedimientos con instrucciones paso a paso
- Haptic feedback para procedimientos (vibración al suturar, inyectar)
- Color coding por tipo de enfermedad (infección=verde, trauma=rojo, crónico=naranja)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de cuerpo humano 3D (simulado con 2D transforms)
  - `<canvas>` para renderizado de instrumentos quirúrgicos
  - `<canvas>` para visualización de exámenes médicos (rayos X, MRI, sangre)
  - `<video>` para tutoriales animados de procedimientos médicos
  - `<input type="range">` para ajustar dosis de medicación
  - `<input type="text">` para escribir recetas y notas médicas
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de hospital, paciente, instrumentos)
  - Medical database: JSON con 200+ enfermedades, síntomas, tratamientos, anatomía
  - Diagnosis system: Custom algorithm para validar síntomas → enfermedad → tratamiento
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del doctor (casos tratados, especialidades desbloqueadas)
  - Animations: GSAP para transiciones entre departamentos y procedimientos
  - Storage: IndexedDB para guardar casos tratados y progreso (offline play)
  - Medical visualization: Custom rendering para órganos, huesos, tejidos
- **CSS:**
  - Grid layout para panel de instrumentos médicos (10x10 grid)
  - CSS Transforms para zoom en cuerpo del paciente (transform-origin: center)
  - CSS Animations para feedback de procedimientos (pulse, shake, glow)
  - Backdrop-filter para blur de expedientes superpuestos
  - CSS Variables para theming (cambiar colores por departamento)
  - Flexbox para contenedores de pacientes y exámenes
- **Otros:**
  - Web Audio API: Sonidos médicos (latido cardíaco, respiración, monitores, instrumental quirúrgico)
  - DeviceOrientationEvent: Detectar shake para emergency code blue
  - Touch Events API: Multi-touch para usar múltiples instrumentos simultáneamente
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar casos tratados y progreso (offline play)
  - Service Workers: PWA para atender pacientes offline
  - Canvas API: Manipular píxeles para renderizado de órganos y tejidos
  - Speech API: Voice commands para navegación ("siguiente paciente", "ver expediente")

**Características Visuales:**
- **Paleta de colores:**
  - Hospital: Tonos clínicos limpios (#F8F9FA blanco, #E9ECEF gris claro, #343A40 gris oscuro)
  - Departamentos: Colores distintivos (emergencia=rojo, consulta=azul, quirófano=verde, UCI=amarillo)
  - Cuerpo humano: Anatomía realista (piel=rosado, sangre=rojo, huesos=blanco, músculos=rojo oscuro)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, backdrop-filter blur 10px)
- **Animaciones:**
  - Examinar paciente: Cursor de examen (estetoscopio, termómetro) con seguimiento táctil
  - Realizar procedimiento: Instrument animation (sutura, inyección, cirugía, 0.5s)
  - Paciente recuperado: Smile animation + thumbs up (1s)
  - Cirugía completada: Flash dorado + confetti de corazones (2s)
  - Diagnóstico correcto: Modal con información de enfermedad + tratamiento
- **Feedback visual:**
  - Signos vitales normales: Borde verde brillante, icono checkmark
  - Signos vitales alerta: Borde amarillo pulsante, mensaje de advertencia
  - Signos vitales críticos: Borde rojo pulsante + alerta sonora
  - Diagnóstico correcto: Modal verde con tratamiento y pronóstico
  - Diagnóstico incorrecto: Modal rojo con hint ("Revisa los síntomas de nuevo")
  - Procedimiento exitoso: Confetti + modal con paciente agradecido
- **Personalización:**
  - 200+ casos médicos (resfriados, fracturas, apendicitis, ataques cardíacos, tumores)
  - 10+ especialidades (pediatría, cardiología, neurología, traumatología, oncología)
  - 50+ instrumentos médicos (estetoscopio, termómetro, rayos X, MRI, escalpelo, suturas)
  - Avatar de doctor con 70+ combinaciones (bata, estetoscopio, gafas, accesorios)
  - Skins de hospital (clásico, moderno, futurista, rural)

**Audio:**
- **Efectos de sonido:**
  - Latido cardíaco: Rhythm normal (60-100 BPM) con variación por paciente
  - Respiración: Breath sound (inhalación, exhalación, 3s ciclo)
  - Monitor hospital: Beeping constante (1 beep/segundo)
  - Instrumental quirúrgico: Clanking, suction, cutting (varios sonidos)
  - Inyección: Pinch sound (100ms)
  - Sutura: Pulling thread sound (200ms)
  - Diagnóstico correcto: Success chime (C4-E4-G4-C5, 1s)
  - Patient recuperado: Thank you sound (voice + chime, 1.5s)
- **Música:**
  - Menú principal: Calm ambient medical music (piano + soft strings, 70 BPM)
  - Consultorio: Light acoustic (guitarra suave, 80 BPM)
  - Emergencia: Tense orchestral (strings + drums, 90 BPM)
  - Quirófano: Focused minimal techno (repetitive pattern, 100 BPM)
  - UCI: Ambient monitor (beeps + drones, 60 BPM)
- **Voz:**
  - Tutorial: Voz de doctor experimentado amigable ("Bienvenido a MedTech Academy")
  - Paciente: Voces distintas con síntomas descritos (dolor, tos, fiebre)
  - Emergencia: Voz de enfermera ("¡Código azul! ¡Paciente en paro cardíaco!")
  - Diagnóstico: Voz de sistema médico ("Diagnóstico confirmado: neumonía")
- **Audio espacial:** Sonidos 3D para feedback de posición (monitor cerca suena más fuerte)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 150-180 horas (6-7 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de cuerpo humano (múltiples órganos visibles)
  - Latencia: <50ms para respuesta de procedimiento médico (feedback instantáneo)
  - Entidades máximas: 300 órganos/tejidos visibles simultáneamente
  - Memoria máxima: 350MB (incluye assets de 200 enfermedades, 50 instrumentos)
  - Diagnosis system: <100ms para validar diagnóstico (síntomas → enfermedad)
- **Riesgos técnicos:**
  - Precisión médica: Balancear realismo con juego (no ser demasiado técnico ni simplificado)
  - Validación de diagnósticos: Detectar enfermedad correcta sin ser demasiado estricto
  - Renderizado anatómico: 300 órganos pueden consumir mucha memoria
  - Ética médica: Presentar tratamientos realistas sin ser gráficos

**Valor Educativo:**
- **Anatomía real:** Los niños aprenden órganos, sistemas, funciones del cuerpo humano
- **Enfermedades:** Entienden causas, síntomas, tratamientos, prevención
- **Procedimientos médicos:** Conocen exámenes, diagnósticos, tratamientos básicos
- **Vocabulario médico:** Aprenden términos: estetoscopio, auscultar, signos vitales, diagnóstico, pronóstico
- **Empatía y cuidado:** Entienden la importancia de ayudar a otros
- **Pensamiento analítico:** Diagnóstico requiere conectar síntomas con enfermedad
- **Responsabilidad:** Los pacientes dependen de decisiones correctas

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Human Anatomy Atlas - Medical reference](https://www.visiblebody.com/) - Referencia anatómica
- [Surgeon Simulator - Surgery game](https://www.bossastudios.com/) - Inspiración para procedimientos quirúrgicos
- [Life simulator - Medical games](https://lifesimulator.org/) - Casos médicos
- [Mayo Clinic - Medical education](https://www.mayoclinic.org/) - Datos médicos reales
- [Web Audio API - Medical sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos médicos
- [PWA - Offline medical learning](https://web.dev/offline/) - PWA para atender pacientes sin internet
- [Medical Terminology - Medical vocabulary](https://www.merriam-webster.com/medical) - Vocabulario médico

---

#### Idea #22: Finance Tycoon: Investment Master

**Concepto:**
Juego de finanzas y emprendimiento donde los jugadores aprenden a gestionar dinero, invertir en mercados, construir negocios y crear riqueza. Combina simulación financiera con elementos educativos de economía y negocios.

**Motivación:**
- **Riqueza visible:** Ver el patrimonio crecer de $1,000 a $1,000,000+
- **Emprendimiento exitoso:** Construir imperios de negocios desde cero
- **Inversiones inteligentes:** Ganar dinero en mercados (stocks, cripto, real estate)
- **Competencia financiera:** Leaderboard global de millonarios
- **Estrategia económica:** Decisiones financieras con impacto real

**Mecánica Principal:**
Los jugadores son empresarios que comienzan con $1,000 de capital inicial. Tienen múltiples vías para generar ingresos: iniciar negocios (tienda, restaurante, startup), invertir en mercados (stocks, bonos, criptomonedas), bienes raíces (comprar propiedades para alquilar), trading (comprar bajo, vender alto). Los mercados tienen ciclos reales (bull markets, bear markets, crashes). Los negocios tienen mecánicas de gestión: contratar empleados, marketing, expansión. Los jugadores deben: balancear riesgo vs. recompensa, diversificar portafolio, pagar impuestos, evitar bancarrota. Hay modo historia (convertirse en magnate) y modo sandbox (finanzas libres sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Comprar/vender stocks, contratar empleados, expandir negocio
- **Arrastrar (Drag):** Mover acciones en portafolio, reorganizar gestión
- **Pinch:** Zoom en gráficos de mercado (0.5x-3x) para ver tendencias
- **Dos dedos (drag):** Pan/mover la vista del gráfico de mercado
- **Tap rápido:** Realizar trades rápidos (scalping en mercados volátiles)
- **Swipe horizontal:** Cambiar entre vista de portafolio, vista de mercados, vista de negocios
- **Gestos complejos:**
  - Shake del dispositivo = "panic sell" (vender todo inmediatamente en crisis)
  - Dibujo de línea de tendencia = análisis técnico (predecir dirección del precio)
  - Doble tap en negocio = ver detalles financieros (ingresos, gastos, ganancias)
  - Arrastrar dinero a inversión = asignar capital (stocks, real estate, negocio)
- **Multitouch hasta 3 dedos:** Selección múltiple de stocks para trades masivos
- **Escribir:** Nombrar negocios, escribir planes de negocio

**Accesibilidad:**
- Gráficos con etiquetas grandes (min 24px) y colores claros (verde=subida, rojo=bajada)
- Botones de trade con feedback visual claro (brillo verde para comprar, rojo para vender)
- Voice assistant explica mercados ("El mercado de tecnología está en bull market")
- Modo "Easy Mode" con mercados menos volátiles para principiantes
- Haptic feedback para trades (vibración al comprar/vender, fuerte para ganancias grandes)
- Color coding por tipo de inversión (stocks=azul, cripto=naranja, real estate=verde)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de gráficos de mercado (candlestick, line charts)
  - `<canvas>` para representación de ciudad (edificios de negocios)
  - `<canvas>` para visualización de portafolio (pie charts, bar graphs)
  - `<input type="range">` para ajustar cantidad de inversión
  - `<input type="number">` para ingresar precios de compra/venta
- **JavaScript:**
  - Chart library: Chart.js o D3.js (gráficos financieros en tiempo real)
  - Market simulation: Custom algorithms para simular mercados (stocks, cripto, real estate)
  - Game engine: Phaser 3 (renderizado de ciudad, negocios)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado financiero (portafolio, negocios, patrimonio)
  - Business logic: Custom sistema para gestión de empleados, marketing, expansión
  - Risk calculation: Custom algorithms para diversificación y análisis de riesgo
  - Animations: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar portafolio y negocios (offline play)
- **CSS:**
  - Grid layout para panel de portafolio (12 columnas responsivo)
  - CSS Transforms para zoom en gráficos (transform-origin: center)
  - CSS Animations para feedback de trades (pulse, glow, flash)
  - Backdrop-filter para blur de información financiera superpuesta
  - CSS Variables para theming (cambiar colores por tipo de inversión)
  - Flexbox para contenedores de mercados y negocios
- **Otros:**
  - Web Audio API: Sonidos financieros (cash register, stock tick, trading bell)
  - DeviceOrientationEvent: Detectar shake para panic sell
  - Touch Events API: Multi-touch para trades simultáneos
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar portafolio y negocios (offline play)
  - Service Workers: PWA para gestionar finanzas offline
  - Canvas API: Renderizar gráficos financieros en tiempo real
  - Speech API: Voice commands para navegación ("comprar Apple", "vender todo")

**Características Visuales:**
- **Paleta de colores:**
  - Mercados: Verde para subidas (#00FF00), rojo para bajadas (#FF0000), azul para neutro (#0000FF)
  - Negocios: Colores por tipo (retail=azul, restaurante=naranja, tech=verde, factory=gris)
  - Real estate: Marrón tierra (#8B4513) con acentos dorados (#FFD700)
  - UI: Semi-transparente con glassmorphism (#000000 opacity 0.7, backdrop-filter blur 10px)
  - Dinero: Oro (#FFD700), plata (#C0C0C0), bronce (#CD7F32)
- **Animaciones:**
  - Gráfico de mercado updating: Línea animándose en tiempo real (candlesticks forming, 0.1s)
  - Comprar stock: Flecha verde ascendente + número flotante (+$1,000)
  - Vender stock: Flecha roja descendente + número flotante (-$500)
  - Negocio expandiéndose: Building construction animation (scale up, 2s)
  - Ganancia masiva: Confetti de billetes dorados (200 particles, 2s)
- **Feedback visual:**
  - Trade exitoso: Borde verde brillante, icono de bolsa de dinero
  - Trade fallado: Borde rojo pulsante, mensaje de error ("Fondos insuficientes")
  - Mercado en bull market: Confeti verde + mensaje ("¡Bull market! ¡Las acciones suben!")
  - Mercado en bear market: Pantalla roja + mensaje ("¡Bear market! ¡Las acciones caen!")
  - Patrimonio millonario: Modal dorado + fuegos artificiales (3s)
- **Personalización:**
  - 10+ tipos de negocios (tienda, restaurante, startup tech, fábrica, hotel, aeropuerto)
  - 50+ stocks (Apple, Google, Tesla, Amazon, etc.)
  - 10+ criptomonedas (Bitcoin, Ethereum, Dogecoin, etc.)
  - Real estate en 10+ ciudades (NYC, London, Tokyo, Singapore, Dubai)
  - Avatar de empresario con 60+ combinaciones (traje, reloj, accesorios)
  - Skins de ciudad (moderna, futurista, clásica, asiática)

**Audio:**
- **Efectos de sonido:**
  - Cash register: Ka-ching (200ms)
  - Stock tick: Ticking sound (short, 50ms)
  - Trading bell: Ring de bolsa de valores (1s)
  - Comprar stock: Ascending chime (C4-E4-G4, 0.5s)
  - Vender stock: Descending chime (G4-E4-C4, 0.5s)
  - Ganancia masiva: Celebration sound (8 notas, 2s)
  - Pérdida masiva: Dramatic crash sound (1s)
- **Música:**
  - Menú principal: Upbeat corporate music (piano + synth, 110 BPM)
  - Mercado abierto: Driving electronic (130 BPM)
  - Gestión de negocio: Calm ambient (strings, 70 BPM)
  - Crisis financiera: Tense orchestral (brass + drums, 90 BPM)
  - Éxito millonario: Triumphant (orchestra + choir, 120 BPM)
- **Voz:**
  - Tutorial: Voz de asesor financiero amigable ("Bienvenido a Finance Tycoon")
  - Market alert: Voz de analista ("¡El mercado de tecnología subió 10%!")
  - Ganancia masiva: Voz de celebración ("¡Felicidades! Has ganado $100,000!")
- **Audio espacial:** Sonidos 3D para feedback de posición (noticias cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 110-130 horas (4-5 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de gráficos de mercado (actualización en tiempo real)
  - Latencia: <50ms para ejecución de trade (feedback instantáneo)
  - Entidades máximas: 100 stocks actualizándose simultáneamente
  - Memoria máxima: 250MB (incluye assets de 50 stocks, 10 negocios, 10 ciudades)
  - Market simulation: <100ms para actualizar precios de todos los stocks
- **Riesgos técnicos:**
  - Balance de mercado: Simular mercados realistas sin ser demasiado volátiles
  - Diversificación de portafolio: Algoritmos para calcular riesgo óptimo
  - Gestión de state: Guardar portafolio completo con miles de transacciones
  - Ética financiera: Enseñar responsabilidad sin promover riesgos excesivos

**Valor Educativo:**
- **Finanzas reales:** Los niños aprenden sobre ahorro, inversión, deuda, interés compuesto
- **Economía de mercado:** Entienden oferta y demanda, bull/bear markets, ciclos económicos
- **Emprendimiento:** Aprenden a iniciar, gestionar y expandir negocios
- **Riesgo vs. recompensa:** Desarrollan juicio financiero para tomar decisiones inteligentes
- **Vocabulario financiero:** Aprenden términos: stock, portfolio, dividendos, ROI, diversificación
- **Matemáticas aplicadas:** Cálculo de porcentajes, interés compuesto, márgenes
- **Responsabilidad:** Entienden el impacto de decisiones financieras

**Referencias e Inspiración:**
- [Chart.js - Charting library](https://www.chartjs.org/) - Gráficos financieros
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Robinhood - Investment app](https://robinhood.com/) - Inspiración para UI de trading
- [SimCity - City builder](https://www.ea.com/games/simcity) - Inspiración para gestión de ciudad
- [Investopedia - Financial education](https://www.investopedia.com/) - Referencia financiera
- [Web Audio API - Financial sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos financieros
- [PWA - Offline finance tracking](https://web.dev/offline/) - PWA para gestionar sin internet
- [Yahoo Finance - Market data](https://finance.yahoo.com/) - Datos de mercados reales

---

#### Idea #23: Physics Playground: Experiment Lab

**Concepto:**
Juego de física aplicada donde los jugadores son científicos en un laboratorio de experimentos, construyendo máquinas, descubriendo leyes físicas y resolving puzzles de ingeniería. Combina simulación física real con elementos educativos de mecánica, óptica, termodinámica y electricidad.

**Motivación:**
- **Descubrimiento científico:** Cada experimento revela una ley física
- **Ingeniería creativa:** Construir máquinas únicas con piezas intercambiables
- **Puzzles desafiantes:** Resolver problemas físicos con lógica y experimentación
- **Competencia de ingeniería:** Leaderboard global de diseños más eficientes
- **Experimentación sin límites:** Crear cualquier cosa imaginable

**Mecánica Principal:**
Los jugadores tienen un laboratorio isométrico con estanterías de piezas: ruedas, poleas, resortes, engranajes, motores, cañones, espejos, lentes, imanes, baterías, cables. Cada misión presenta un puzzle físico: mover una bola a la meta, encender una luz, levantar un peso, construir un puente. Los jugadores deben: seleccionar piezas, conectarlas, probar la máquina, ajustar parámetros (velocidad, ángulo, fuerza). Las misiones enseñan conceptos: gravedad, fricción, momentum, energía, óptica, electricidad. Hay modo historia (convertirse en físico galardonado) y modo sandbox (experimentar libremente).

**Interacción Móvil:**
- **Tap simple:** Seleccionar piezas, conectar componentes, ejecutar experimento
- **Arrastrar (Drag):** Mover piezas en el laboratorio, conectar componentes con cables/cuerdas
- **Pinch:** Zoom en el experimento para ver detalles (0.5x-5x)
- **Dos dedos (drag):** Pan/mover la vista del laboratorio
- **Tap rápido:** Añadir múltiples piezas de un mismo tipo
- **Tap largo (Long press):** Ver especificaciones de pieza (masa, fricción, conductividad)
- **Swipe horizontal:** Cambiar entre vista de laboratorio, vista de inventario, vista de propiedades
- **Gestos complejos:**
  - Shake del dispositivo = "test run" (ejecutar experimento inmediatamente)
  - Dibujo de línea = conectar automáticamente piezas (routing de cable/cuerda)
  - Doble tap en pieza = ver propiedades físicas (peso, material, etc.)
  - Arrastrar pieza a experimento = añadir componente
- **Multitouch hasta 4 dedos:** Conectar múltiples piezas simultáneamente
- **Escribir:** Nombrar experimentos, escribir notas científicas

**Accesibilidad:**
- Piezas con iconos grandes (min 80px) y etiquetas claras de función
- Conexiones resaltadas (outline azul) para fácil identificación
- Voice assistant explica pieza ("Este es un motor con 500 RPM de torque")
- Mode "Tutorial Mode" para aprender conceptos físicos con instrucciones
- Haptic feedback para conexiones (vibración al conectar piezas)
- Color coding por tipo de pieza (mecánica=rojo, eléctrica=azul, óptica=verde, térmica=naranja)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de laboratorio isométrico
  - `<canvas>` para simulación física (máquinas funcionando)
  - `<canvas>` para visualización de fuerzas y vectores
  - `<input type="range">` para ajustar parámetros físicos (velocidad, ángulo, fuerza)
  - `<input type="number">` para ingresar valores exactos
- **JavaScript:**
  - Physics engine: Matter.js (simulación física realista de máquinas, cuerpos, colisiones)
  - Game engine: Phaser 3 (renderizado de laboratorio, piezas)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del físico (experimentos completados, piezas desbloqueadas)
  - Experiment system: Custom algoritmo para validar solución de puzzle
  - Physics calculations: Custom para fuerzas, energía, óptica, electricidad
  - Animations: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar experimentos y progreso (offline play)
- **CSS:**
  - Grid layout para panel de piezas (10x10 grid)
  - CSS Transforms para zoom en experimento (transform-origin: center)
  - CSS Animations para feedback de conexiones (pulse, glow)
  - Backdrop-filter para blur de paneles de propiedades superpuestos
  - CSS Variables para theming (cambiar colores por tipo de pieza)
  - Flexbox para contenedores de experimentos
- **Otros:**
  - Web Audio API: Sonidos físicos (metal clanking, motors humming, gears grinding)
  - DeviceOrientationEvent: Detectar shake para test run
  - Touch Events API: Multi-touch para conectar múltiples piezas simultáneamente
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar experimentos y progreso (offline play)
  - Service Workers: PWA para experimentar offline
  - Canvas API: Renderizar fuerzas y vectores visuales
  - Speech API: Voice commands para navegación ("ejecutar", "reiniciar")

**Características Visuales:**
- **Paleta de colores:**
  - Laboratorio: Tonos científicos (#E3F2FD azul claro, #F5F5F5 gris)
  - Piezas: Colores por tipo (mecánica=rojo, eléctrica=azul, óptica=verde, térmica=naranja)
  - Conexiones: Líneas brillantes (#00FFFF cian) con indicadores de flujo
  - Fuerzas: Vectores coloridos (gravedad=morado, fricción=amarillo, normal=cian)
  - UI: Semi-transparente con glassmorphism (#000000 opacity 0.7, blur 10px)
- **Animaciones:**
  - Mover pieza: Drag animation con snap-to-grid (0.2s)
  - Conectar pieza: Line animation entre puntos (0.3s)
  - Ejecutar experimento: Machine moves with physics (smooth motion)
  - Experimento exitoso: Confetti de engranajes (200 particles, 2s)
  - Ley física descubierta: Flash dorado + fórmula matemática (1.5s)
- **Feedback visual:**
  - Conexión válida: Línea verde brillante, icono de check (0.3s)
  - Conexión inválida: Línea roja pulsante, mensaje de error ("¡No compatible!")
  - Experimento ejecutado: Máquina se mueve con trail de movimiento
  - Experimento fallado: Máquina se detiene con shake rojo
  - Logro desbloqueado: Modal con engranaje dorado + fórmula física (1.5s)
- **Personalización:**
  - 100+ piezas: Ruedas, poleas, resortes, engranajes, motores, cañones, espejos, lentes, imanes, baterías, cables
  - 50+ experimentos: Básicos (mover bola) → Avanzados (construir puente) → Expertos (máquina compleja)
  - Avatar de físico con 60+ combinaciones (bata, gafas, herramientas)
  - Skins de laboratorio (clásico, moderno, sci-fi, industrial)

**Audio:**
- **Efectos de sonido:**
  - Mover pieza: Click satisfactorio (50ms)
  - Conectar piezas: Snap sound (150ms)
  - Motor funcionando: Whirring (continuous, 100-500Hz)
  - Engranaje girando: Grinding (200-400Hz)
  - Experimento exitoso: Success chime (C4-E4-G4, 1s)
  - Ley descubierta: Fanfare científico (6 notas, 2s)
- **Música:**
  - Laboratorio idle: Ambient tech (synth pads, 70 BPM)
  - Diseñando: Upbeat electronic (100 BPM)
  - Ejecutando: Driving techno (120 BPM)
  - Tutorial: Friendly educational (piano + synth, 80 BPM)
- **Voz:**
  - Tutorial: Voz de científico amigable ("Bienvenido a Physics Playground")
  - Hint: Voz de asistente ("Recuerda ajustar el ángulo del cañón")
  - Ley descubierta: Voz narrativa ("Has descubierto la ley de gravedad")
- **Audio espacial:** Sonidos 3D para feedback de posición (motores cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 130-160 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en simulación física (múltiples cuerpos interactuando)
  - Latencia: <50ms para ejecución de experimento (feedback instantáneo)
  - Entidades máximas: 500 piezas simultáneamente
  - Memoria máxima: 200MB (incluye assets de 100 piezas, 50 experimentos)
  - Physics calculation: <50ms para calcular next frame de simulación
- **Riesgos técnicos:**
  - Precisión física: Simular leyes físicas realistas sin ser demasiado complejo
  - Balance de dificultad: Experimentos desafiantes pero no frustrantes
  - Optimización de física: 500 cuerpos pueden consumir mucha CPU
  - Validación de soluciones: Detectar si la máquina cumple el objetivo

**Valor Educativo:**
- **Física real:** Los niños aprenden leyes físicas (gravedad, fricción, momentum, energía)
- **Mecánica aplicada:** Entienden cómo funcionan máquinas (poleas, engranajes, motores)
- **Óptica y electricidad:** Conocen conceptos de luz, espejos, lentes, circuitos
- **Pensamiento lógico:** Los puzzles requieren conectar causas y efectos
- **Experimentación:** Aprenden método científico (hipótesis → prueba → conclusión)
- **Vocabulario científico:** Aprenden términos: fuerza, torque, energía, potencial, cinética
- **Ingeniería:** Desarrollan habilidades para construir y optimizar sistemas

**Referencias e Inspiración:**
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Simulación física
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [The Incredible Machine - Physics puzzle game](https://en.wikipedia.org/wiki/The_Incredible_Machine) - Inspiración para puzzles físicos
- [World of Goo - Physics construction](https://2dboy.com/games/world-of-goo/) - Construcción con física
- [Khan Academy Physics - Physics education](https://www.khanacademy.org/science/physics) - Referencia física
- [Web Audio API - Physics sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos físicos
- [PWA - Offline experimentation](https://web.dev/offline/) - PWA para experimentar sin internet
- [Physics Classroom - Physics reference](https://www.physicsclassroom.com/) - Referencia física

---

#### Idea #24: Journalism Quest: News Reporter

**Concepto:**
Juego de periodismo y comunicación donde los jugadores son reporteros investigando noticias, entrevistando fuentes, escribiendo artículos y publicando historias. Combina investigación con elementos de ética periodística, enseñando habilidades de comunicación, verificación de hechos y narración.

**Motivación:**
- **Contar historias que importan:** Exponer la verdad al público
- **Periodismo investigativo:** Descubrir escándalos, corrupción, historias humanas
- **Carrera de reportero:** Comenzar como becario, avanzar a editor jefe
- **Influencia social:** Las historias afectan a la comunidad (opinión pública, leyes, cambios)
- **Competencia de medios:** Leaderboard global de periodistas más influyentes

**Mecánica Principal:**
Los jugadores son periodistas en una ciudad con distritos: gobierno, corporaciones, comunidad, crimen, cultura. Cada noticia comienza con un lead (pista): rumores de corrupción, crímenes no resueltos, historias humanas, eventos culturales. Los jugadores deben: investigar en la escena (fotografiar evidencia, buscar pistas), entrevistar fuentes (NPCs con información diferente), verificar hechos (cross-check con documentos), escribir el artículo (título, lead, cuerpo, conclusión), publicar (elegir medio: periódico, TV, blog, redes sociales). Las historias tienen impacto real: aumentar conciencia, cambiar políticas, generar debates. Hay modo carrera (convertirse en editor jefe) y modo libre (investigar sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar fuentes, fotografiar evidencia, seleccionar opciones de entrevista
- **Arrastrar (Drag):** Mover periodista en el mapa, arrastrar evidencia al portafolio
- **Pinch:** Zoom en la escena para ver detalles (0.5x-3x)
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap rápido:** Tomar fotos rápidas de evidencia
- **Tap largo (Long press):** Ver información detallada de fuente (nombre, ocupación, confiabilidad)
- **Swipe horizontal:** Cambiar entre vista de escena, vista de entrevista, vista de redacción
- **Gestos complejos:**
  - Shake del dispositivo = "urgent news" (publicar historia inmediatamente como breaking news)
  - Dibujo de marco de foto = tomar fotografía profesional
  - Doble tap en fuente = profundizar entrevista (preguntas adicionales)
  - Arrastrar cita a artículo = incluir en el reporte
- **Multitouch hasta 3 dedos:** Seleccionar múltiples fuentes para entrevistar
- **Escribir:** Escribir artículos, titulares, notas de reportero

**Accesibilidad:**
- Fuentes con iconos grandes (min 80px) y etiquetas claras (nombre, ocupación)
- Evidencias resaltadas (outline amarillo) para fácil identificación
- Voice assistant describe escena ("Aquí hay documentos sobre el escándalo")
- Modo "Assistant Mode" para guía paso a paso en investigaciones
- Haptic feedback para descubrimientos (vibración al encontrar evidencia)
- Color coding por tipo de fuente (oficial=azul, anónima=gris, testigo=verde, experto=naranja)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de ciudad (isométrico)
  - `<canvas>` para editor de artículos (text editor con formateo)
  - `<canvas>` para cámara de fotos (viewfinder, zoom, flash)
  - `<video>` para grabar entrevistas en video
  - `<textarea>` para escribir artículos con spell-check
  - `<input type="file">` para importar imágenes de galería
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de ciudad, escenas)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del periodista (historias publicadas, reputación)
  - Investigation system: Custom algorithm para validar evidencias y fuentes
  - Fact-checking: Custom para verificar hechos con documentos
  - Editor de artículos: Rich text editor con formateo (negrita, cursiva, links)
  - Impact calculation: Custom para calcular impacto de historia (opinión pública, cambios)
  - Animations: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar historias y evidencias (offline play)
- **CSS:**
  - Grid layout para editor de artículos (12 columnas responsivo)
  - CSS Transforms para zoom en escenas (transform-origin: center)
  - CSS Animations para feedback de descubrimiento (pulse, glow)
  - Backdrop-filter para blur de paneles de redacción superpuestos
  - CSS Variables para theming (cambiar colores por medio de comunicación)
  - Flexbox para contenedores de fuentes y evidencias
- **Otros:**
  - Web Audio API: Sonidos de periodismo (click de cámara, grabadora, typing)
  - DeviceOrientationEvent: Detectar shake para urgent news
  - Touch Events API: Multi-touch para seleccionar múltiples fuentes
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar historias y evidencias (offline play)
  - Service Workers: PWA para investigar offline
  - Canvas API: Renderizar cámara de fotos y editor de artículos
  - Speech API: Voice commands para navegación ("siguiente fuente", "publicar")

**Características Visuales:**
- **Paleta de colores:**
  - Ciudad: Tonos urbanos (#7F8C8D gris, #34495E azul oscuro, #E74C3C rojo para noticias urgentes)
  - Medios de comunicación: Colores por medio (periódico=blanco, TV=azul, blog=naranja, redes=rosa)
  - Fuentes: Colores por confiabilidad (oficial=azul, anónima=gris, testigo=verde, experto=naranja)
  - Evidencias: Colores por tipo (documento=marrón, foto=amarillo, video=naranja, audio=verde)
  - UI: Semi-transparente con glassmorphism (#000000 opacity 0.7, backdrop-filter blur 10px)
- **Animaciones:**
  - Tomar foto: Flash de cámara (0.2s) + sonido de shutter
  - Entrevistar: NPC talks with lip sync (spritesheet, 10 FPS)
  - Escribir artículo: Typing animation (caracteres apareciendo uno por uno)
  - Publicar historia: Confetti de letras y símbolos (200 particles, 2s)
  - Impacto de historia: Animation de cambio en ciudad (edificios, gente, 3s)
- **Feedback visual:**
  - Evidencia encontrada: Icono de cámara amarillo brillante
  - Fuente entrevistada: Checkmark verde en perfil de fuente
  - Verificación de hechos: Icono de check (verde=verificado, rojo=no verificado)
  - Artículo publicado: Modal con vista previa + número de lectores
  - Impacto masivo: Modal dorado + cambio en ciudad (nueva ley, edificio, etc.)
  - Reputación aumentada: Barra de progreso con niveles (becario → reportero → editor jefe)
- **Personalización:**
  - 50+ tipos de historias (corrupción, crimen, humano, cultura, deportes, tecnología)
  - 100+ fuentes con personalidades únicas (oficiales, testigos, expertos, anónimos)
  - 4 medios de comunicación (periódico, TV, blog, redes sociales)
  - Avatar de periodista con 60+ combinaciones (cámara, libreta, chaleco, accesorios)
  - Skins de ciudad (moderna, histórica, futurista, asiática)

**Audio:**
- **Efectos de sonido:**
  - Cámara de fotos: Shutter click (100ms)
  - Grabadora: Record beep (short, 50ms)
  - Typing: Keyboard sounds (continuous, varía por velocidad)
  - Publicar artículo: Success chime (C4-E4-G4-C5, 1s)
  - Noticia urgente: Urgent news sound (alerta + breaking news, 2s)
  - Impacto masivo: Fanfare de periodismo (8 notas, 2s)
- **Música:**
  - Menú principal: Upbeat news theme (piano + synth, 110 BPM)
  - Investigando: Suspenseful orchestral (strings, 80 BPM)
  - Entrevistando: Calm conversation (piano, 70 BPM)
  - Escribiendo: Focused minimalist (repetitive pattern, 90 BPM)
  - Publicando: Celebratory (orchestra + choir, 120 BPM)
- **Voz:**
  - Tutorial: Voz de editor experimentado amigable ("Bienvenido a Journalism Quest")
  - Fuente: Voz distinta por personaje (diferentes tonos, acentos, personalidades)
  - Urgent news: Voz de presentador de noticias ("¡Breaking News!")
  - Impacto masivo: Voz narrativa ("Tu historia ha cambiado la ciudad")
- **Audio espacial:** Sonidos 3D para feedback de posición (fuentes cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de ciudad y escenas (200+ entidades)
  - Latencia: <50ms para respuesta de interacción (feedback instantáneo)
  - Entidades máximas: 300 fuentes simultáneamente en la ciudad
  - Memoria máxima: 200MB (incluye assets de 100 fuentes, 50 historias)
  - Article editor: <100ms para formatear texto y añadir elementos
- **Riesgos técnicos:**
  - Balance de ética periodística: Presentar dilemas morales sin ser didáctico
  - Verificación de hechos: Algoritmo para detectar información falsa vs verdadera
  - Impacto de historias: Calcular cambios realistas en la ciudad sin ser exagerado
  - Gestión de state: Guardar miles de historias y evidencias en IndexedDB

**Valor Educativo:**
- **Periodismo real:** Los niños aprenden investigación, entrevista, verificación, escritura
- **Comunicación efectiva:** Desarrollan habilidades para contar historias y comunicar información
- **Ética periodística:** Entienden importancia de verdad, responsabilidad, imparcialidad
- **Pensamiento crítico:** Las investigaciones requieren analizar fuentes y evidencias
- **Vocabulario periodístico:** Aprenden términos: lead, fuente, anónimo, verificación, editorial
- **Empatía y comprensión:** Entrevistar diferentes perspectivas desarrolla entendimiento de otros
- **Impacto social:** Entienden que las historias pueden afectar positivamente a la comunidad

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [The Westport Independent - Censorship game](https://www.doublecoconut.com/) - Inspiración para periodismo
- [Papers, Please - Document inspection](https://paperspleasegame.com/) - Investigación y verificación
- [Newsroom - Journalist game](https://store.steampowered.com/app/1002430/The_Newsroom/) - Gestión de noticias
- [SPJ Code of Ethics - Journalism ethics](https://www.spj.org/ethicscode.asp) - Referencia de ética
- [Web Audio API - News sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de noticias
- [PWA - Offline investigation](https://web.dev/offline/) - PWA para investigar sin internet
- [Journalism Education - Journalism resources](https://www.journalism.org/) - Recursos de periodismo

---

### Lote 7 (Ideas 25-28)
**Fecha:** 2026-02-17
**Ejecución:** 7/25

#### Idea #25: Robot Factory: Automation Lab

**Concepto:**
Juego de automatización y robótica donde los jugadores diseñan, construyen y programan robots para completar misiones industriales. Combina gameplay tipo Factorio con programación visual, enseñando lógica de automatización, cadenas de producción y física básica.

**Motivación:**
- **Creatividad sin límites:** Diseñar robots únicos con módulos intercambiables
- **Logros de ingeniero:** Badges por especialidades ("Maestro de Automatización", "Rey de la Producción")
- **Escala de progresión:** Comienzan con robots simples (brazos básicos), avanzan a fábricas complejas
- **Desafíos de eficiencia:** Optimizar producción con menor consumo de energía
- **Competencia global:** Leaderboard de "quién produce más en menos tiempo"

**Mecánica Principal:**
Los jugadores tienen una fábrica isométrica dividida en estaciones (montaje, pintura, empaquetado). Deben diseñar robots con módulos (brazos, sensores, ruedas, brazos, pinzas) y programar su comportamiento con bloques visuales (tipo Scratch). Los robots se mueven en cintas transportadoras, recolectan materiales, ensamblan productos y los entregan. Las misiones progresan en dificultad: ensamblar widgets → producir coches → construir naves espaciales. Hay modo historia (convertirse en CEO de fábrica) y modo sandbox libre (diseñar sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar módulos, estaciones, robots
- **Arrastrar (Drag):** Mover módulos al robot, conectar bloques de programación
- **Pinch:** Zoom en la fábrica para ver detalles (10x max)
- **Dos dedos (drag):** Pan/mover la vista de la fábrica
- **Tap rápido:** Conectar cables entre módulos
- **Swipe horizontal:** Cambiar entre vista de fábrica y editor de programación
- **Gestos complejos:**
  - Shake del dispositivo = reiniciar robot (reset a estación inicial)
  - Dibujo de cuadrado = seleccionar área de trabajo (multiselección)
  - Doble tap en robot = ver perfil (stats, configuración, historial)
  - Arrastrar bloque de programación a otro = cambiar orden de ejecución
- **Multitouch hasta 5 dedos:** Conectar múltiples bloques simultáneamente
- **Escribir:** Nombrar robots, escribir comentarios de código

**Accesibilidad:**
- Módulos con iconos grandes (min 80px) y etiquetas claras
- Bloques de programación con colores por tipo (movimiento=azul, sensor=verde, acción=naranja)
- Voice assistant explica módulo ("Este brazo puede levantar hasta 5kg")
- Modo "Auto-Program" para código sugerido
- Haptic feedback para conexiones (vibración al conectar bloque)
- Animaciones de demostración para cada módulo

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de fábrica isométrica
  - `<canvas>` para editor de bloques de programación
  - `<canvas>` para simulación de física de robots
  - `<video>` para tutoriales animados de robótica
  - `<input type="text">` para nombrar robots
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de fábrica, físicas de robots)
  - Physics: Matter.js para física realista de brazos y objetos
  - Block programming: Custom engine para bloques visuales (tipo Scratch)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso de la fábrica (robots, producción)
  - AI de oponentes: Bots que compiten en producción
  - Animaciones: GSAP para transiciones
  - Storage: IndexedDB para guardar diseños de robots
- **CSS:**
  - Grid layout para editor de bloques (10x10 grid)
  - CSS Transforms para zoom de fábrica (transform-origin: center)
  - CSS Animations para feedback de conexión (pulse, glow)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de módulos
- **Otros:**
  - Web Audio API: Sonidos industriales (motores, pistones, alarmas)
  - DeviceOrientationEvent: Detectar shake para reiniciar robot
  - Touch Events API: Multi-touch para conectar múltiples bloques
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar robots y programas (offline play)
  - Service Workers: PWA para diseñar robots offline
  - Canvas API: Manipular píxeles para renderizado de robots
  - Web Speech API: Voice commands para programación ("añadir bucle", "conectar sensor")

**Características Visuales:**
- **Paleta de colores:**
  - Fábrica: Tonos industriales (#37474F gris oscuro, #546E7A azul grisáceo)
  - Módulos: Colores por tipo (motor=rojo, sensor=azul, brazo=verde, pinza=naranja)
  - Bloques de programación: Colores por función (movimiento=azul, sensor=verde, acción=naranja, lógica=púrpura)
  - UI: Semi-transparente con glassmorphism (#263238 opacity 0.8, blur 10px)
- **Animaciones:**
  - Robot moviendo: Walk cycle con spritesheet (6 frames, 10 FPS)
  - Brazo actuando: Piston animation (up/down, 0.3s)
  - Producto ensamblado: Flash dorado + spark (0.5s)
  - Robot completado: Glow + confetti de engranajes (2s)
- **Feedback visual:**
  - Módulo conectado: Icono de enchufe verde brillante
  - Bloque programado: Borde azul brillante
  - Robot produciendo: Progress bar animado
  - Desbloqueo: Efecto de luz + gears rotating (1.5s)
- **Personalización:**
  - 100+ módulos: Brazos, sensores, ruedas, pinzas, cámaras, armas
  - Modo sandbox: Diseñar robots sin límites de módulos
  - Avatar de ingeniero con 50+ combinaciones (uniforme, goggles, herramientas)
  - Skins de fábrica (industrial, sci-fi, steampunk, minimalista)

**Audio:**
- **Efectos de sonido:**
  - Motor arrancando: Whir (100-200Hz, 1s)
  - Brazo actuando: Piston sound (300ms)
  - Producto ensamblado: Click satisfactorio (C5-E5, 150ms)
  - Robot chocando: Clank metálico (200-400ms)
  - Alarma: Buzzer pulsante (500ms on/off)
  - Logro: Fanfare industrial (gears + brass, 2s)
- **Música:**
  - Fábrica idle: Ambient industrial (drones, hum, 70 BPM)
  - Producción activa: Rhythmic mechanical (percussion + synth, 110 BPM)
  - Challenge: Upbeat electronic (130 BPM)
  - Sandbox: Lo-fi industrial (80 BPM)
- **Voz:**
  - Tutorial: Voz de ingeniero amigable ("¡Vamos a construir tu primer robot!")
  - Hint: Voz de asistente ("Conecta el sensor al motor")
  - Logro: Voz celebratoria ("¡Excelente! Has dominado la automatización")
- **Audio espacial:** Sonidos 3D para feedback de posición (motores cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 120-140 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de fábrica (50+ robots)
  - Latencia: <50ms para respuesta de programación (feedback instantáneo)
  - Entidades máximas: 200 módulos simultáneamente
  - Memoria máxima: 250MB (incluye sprites de 100 módulos, 50 robots)
  - Physics: <50ms para cálculo de física de brazos
- **Riesgos técnicos:**
  - Balance de física: Brazos deben comportarse realistas sin frustrar
  - Validación de código: Detectar programas infinitos sin bloquear el juego
  - Optimización de bloques: 200 bloques pueden consumir mucha memoria
  - Multitouch: 5 bloques simultáneos requiere multitouch robusto

**Valor Educativo:**
- **Robótica real:** Los niños aprenden módulos, programación, física de robots
- **Lógica de automatización:** Entienden cadenas de producción, eficiencia, optimización
- **Pensamiento algorítmico:** Desarrollan habilidades de programación (secuencias, bucles, condiciones)
- **Vocabulario de ingeniería:** Aprenden términos: motor, sensor, actuador, programación, bucle, condición
- **Matemáticas:** Cálculo de tiempos, distancias, ángulos en movimientos
- **Creatividad técnica:** Diseñar robots únicos fomenta innovación
- **Perseverancia:** Los desafíos de eficiencia requieren múltiples intentos

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Física de robots
- [Scratch - Block programming](https://scratch.mit.edu/) - Inspiración para bloques visuales
- [Factorio - Automation game](https://www.factorio.com/) - Inspiración para automatización
- [Roblox - Game creation](https://www.roblox.com/) - Diseño de robots personalizados
- [Scratch 3.0 - Block coding](https://scratch.mit.edu/scratch_3.0/) - Referencia de bloques
- [Web Audio API - Industrial sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos industriales
- [PWA - Offline design](https://web.dev/offline/) - PWA para diseñar sin internet

---

#### Idea #26: Time Traveler: Historical Quests

**Concepto:**
Juego de aventura histórica donde los jugadores viajan por diferentes épocas (Antiguo Egipto, Edad Media, Renacimiento, Revolución Industrial, Futuro) resolviendo misiones basadas en eventos reales, conociendo personajes históricos y aprendiendo sobre civilizaciones. Combina gameplay tipo Assassin's Creed educativo con elementos de RPG y descubrimiento.

**Motivación:**
- **Viaje en el tiempo:** Explorar épocas diferentes cada misión
- **Descubrimiento de historia:** Conocer hechos reales y personajes históricos
- **Colección de artefactos:** Recolectar objetos históricos (espadas egipcias, pergaminos medievales)
- **Misiones épicas:** Historia主线 con misterios del tiempo (¿qué causó la anomalía temporal?)
- **Personalización de viajero:** Crear avatar con habilidades únicas (historiador, arqueólogo, científico)

**Mecánica Principal:**
Los jugadores son viajeros en el tiempo con un dispositivo que les permite saltar entre épocas. Cada época tiene un mundo isométrico único (Egipto=pirámides y desiertos, Edad Media=castillos y pueblos, Renacimiento=ciudades y museos, Futuro=ciudades futuristas). Las misiones se basan en eventos reales: ayudar a Cleopatra en batallas, apoyar inventores del Renacimiento, resolver misterios de la Revolución Industrial. Los jugadores pueden: recolectar artefactos históricos, interactuar con personajes (faraoes, reyes, científicos), resolver puzzles históricos (descifrar jeroglíficos, traducir latín). Modo historia (20+ horas) y modo sandbox (explorar épocas libremente).

**Interacción Móvil:**
- **Tap simple:** Seleccionar personajes, artefactos, misiones
- **Arrastrar (Drag):** Mover viajero, recolectar artefactos
- **Pinch:** Zoom en el mapa histórico (0.5x-3x)
- **Dos dedos (drag):** Pan/mover la vista de la época
- **Tap rápido:** Interactuar con múltiples objetos (recolectar varios artefactos)
- **Tap largo (Long press):** Ver información histórica detallada (fecha, contexto, importancia)
- **Swipe horizontal:** Cambiar entre épocas (viaje en el tiempo)
- **Gestos complejos:**
  - Shake del dispositivo = activar "time freeze" (pausar el tiempo por 5s)
  - Dibujo de símbolo egipcio/latino = decodificar jeroglíficos/textos
  - Doble tap en personaje = iniciar diálogo
  - Arrastrar artefacto al dispositivo = agregar a colección
- **Multitouch hasta 3 dedos:** Recolectar múltiples artefactos simultáneamente
- **Escribir:** Escribir notas de viaje, traducir textos

**Accesibilidad:**
- Épocas con zonas destacadas (outline dorado) para fácil navegación
- Personajes con iconos grandes (min 80px) y etiquetas claras
- Voice assistant describe época ("Estamos en el Antiguo Egipto, año 2500 A.C.")
- Modo "Hint System" para dar pistas históricas
- Haptic feedback para descubrimientos (vibración al encontrar artefacto)
- Color coding por época (Egipto=amarillo dorado, Edad Media=gris, Renacimiento=azul, Futuro=cian)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de épocas isométricas
  - `<canvas>` para representación de artefactos 3D (simulado con 2D shading)
  - `<canvas>` para dispositivo de viaje en el tiempo
  - `<video>` para cutscenes de eventos históricos
  - `<input type="text">` para escribir notas y traducciones
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de épocas, interacción)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del viajero (épocas visitadas, artefactos)
  - Historical data: JSON con 500+ eventos, personajes, fechas
  - Puzzle system: Custom algorithms para decodificación de jeroglíficos/textos
  - Animaciones: GSAP para transiciones entre épocas
  - Storage: IndexedDB para guardar colección de artefactos
- **CSS:**
  - Grid layout para inventario de artefactos (10x10 grid)
  - CSS Transforms para zoom de épocas (transform-origin: center)
  - CSS Animations para transición de viaje en el tiempo (warp effect)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por época)
  - Flexbox para contenedores de misiones
- **Otros:**
  - Web Audio API: Sonidos históricos (campanas, trompetas, ambientes)
  - DeviceOrientationEvent: Detectar shake para time freeze
  - Touch Events API: Multi-touch para recolectar múltiples artefactos
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar artefactos y progreso (offline play)
  - Service Workers: PWA para explorar épocas offline
  - Canvas API: Manipular píxeles para renderizado de épocas
  - Web Speech API: Voice commands para navegación ("ir a Egipto", "siguiente misión")

**Características Visuales:**
- **Paleta de colores:**
  - Egipto: Amarillo dorado (#D4AF37), arena (#F4E4BC), azul lapis (#26619C)
  - Edad Media: Gris piedra (#707070), madera (#8B4513), rojo royal (#DC143C)
  - Renacimiento: Azul cian (#00CED1), blanco mármol (#F5F5F5), dorado (#FFD700)
  - Futuro: Cian neon (#00FFFF), plata (#C0C0C0), violeta (#9400D3)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.7, blur 10px)
- **Animaciones:**
  - Viaje en el tiempo: Warp effect (stars tunnel, 1.5s)
  - Aparecer en nueva época: Flash blanco + fade in (1s)
  - Recoger artefacto: Glow +收藏动画 (0.5s)
  - Diálogo: Character appears with lip sync (simulado, 0.3s)
  - Misión completada: Confetti de símbolos históricos (2s)
- **Feedback visual:**
  - Artefacto encontrado: Icono brillante con halo dorado
  - Misión activa: Outline pulsante en mapa
  - Personaje interactivo: Icono de diálogo azul
  - Logro desbloqueado: Modal con escudo dorado + efecto
- **Personalización:**
  - 5 épocas: Antiguo Egipto, Edad Media, Renacimiento, Revolución Industrial, Futuro
  - 500+ artefactos históricos (espadas, pergaminos, relojes, chips cuánticos)
  - Avatar de viajero con 60+ combinaciones (ropa por época, accesorios)
  - Skins de épocas (realista, cartoon, minimalista, steampunk)
  - Modo sandbox: Explorar épocas sin restricciones

**Audio:**
- **Efectos de sonido:**
  - Viaje en el tiempo: Whoosh ascendente (200-800Hz, 2s)
  - Recoger artefacto: Chime dorado (C4-E4-G4-C5, 0.5s)
  - Aparecer en época: Thunder (300ms)
  - Diálogo: Character voice varied (200-400ms)
  - Misión completada: Fanfare histórica (orchestral, 2s)
  - Logro: Triumphant chord (C4-E4-G4-B5-C6, 1.5s)
- **Música:**
  - Egipto: Traditional Egyptian (oud + drums, 80 BPM)
  - Edad Media: Medieval (lute + flutes, 70 BPM)
  - Renacimiento: Baroque (strings + harpsichord, 90 BPM)
  - Revolución Industrial: Steampunk mechanical (gears + brass, 100 BPM)
  - Futuro: Cyberpunk electronic (synth + bass, 130 BPM)
- **Voz:**
  - Tutorial: Voz de historiador amigable ("Bienvenido, viajero del tiempo. Tu misión es corregir la historia")
  - Personaje: Voz distinta por época (Cleopatra habla en egipcio antiguo)
  - Misión completada: Voz narrativa dramática ("Has restaurado el curso de la historia")
- **Audio espacial:** Sonidos 3D para feedback de posición (personajes cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 130-150 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de épocas (1000+ objetos)
  - Latencia: <50ms para respuesta de interacción (feedback instantáneo)
  - Entidades máximas: 2000 objetos simultáneamente
  - Memoria máxima: 300MB (incluye assets de 5 épocas, 500 artefactos)
  - Transición de épocas: <2s para cargar nueva época
- **Riesgos técnicos:**
  - Precisión histórica vs. jugable: Simplificar eventos complejos sin perder valor educativo
  - Optimización de épocas: 5 épocas con estilos únicos requiere mucha memoria
  - Balance de juego: Evitar que sea frustrante (pistas demasiado obscuras)
  - Multitouch: 3 artefactos simultáneos requiere multitouch robusto

**Valor Educativo:**
- **Historia real:** Los niños aprenden eventos, fechas, personajes, civilizaciones
- **Comprensión temporal:** Entienden la línea del tiempo y cómo eventos se conectan
- **Vocabulario histórico:** Aprenden términos: faraón, renacimiento, revolución industrial, jeroglífico
- **Pensamiento crítico:** Las misiones requieren entender el contexto histórico
- **Empatía histórica:** Interactuar con personajes de diferentes épocas desarrolla comprensión
- **Curiosidad sobre el pasado:** El viaje en el tiempo fomenta interés por la historia
- **Perseverancia:** Las misiones complejas requieren investigación y resolución

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Assassin's Creed Discovery Tour - Historical exploration](https://www.ubisoft.com/) - Inspiración para épocas
- [Civilization VI - Historical strategy](https://www.civilization.com/) - Referencia histórica
- [Time Tangled Island - Poptropica](https://www.poptropica.com/) - Viaje en el tiempo para niños
- [History.com - Historical events](https://www.history.com/) - Referencia de eventos históricos
- [Web Audio API - Historical sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos históricos
- [PWA - Offline exploration](https://web.dev/offline/) - PWA para explorar épocas sin internet
- [Historical Data - Events and dates](https://www.britannica.com/) - Datos históricos verificados

---

#### Idea #27: Architect's Dream: City Builder

**Concepto:**
Juego de arquitectura y construcción de ciudades donde los jugadores diseñan y construyen edificios, puentes, parques y ciudades enteras, aprendiendo sobre estructuras, materiales y planificación urbana. Combina gameplay tipo SimCity con elementos de ingeniería civil y diseño.

**Motivación:**
- **Creatividad sin límites:** Diseñar ciudades únicas con edificios personalizados
- **Logros de arquitecto:** Badges por especialidades ("Maestro de Puentes", "Rey de Rascacielos")
- **Escala de progresión:** Comienzan con casas simples, avanzan a megaciudades futuristas
- **Desafíos de planificación:** Optimizar tráfico, servicios, energía
- **Competencia global:** Leaderboard de "ciudad más eficiente" y "mayor población"

**Mecánica Principal:**
Los jugadores tienen un lienzo infinito donde construyen ciudades isométricas. Pueden construir: casas residenciales, edificios comerciales, industriales, servicios (hospitales, escuelas, estaciones de policía), infraestructura (carreteras, puentes, metro), parques y monumentos. Cada estructura tiene requisitos (electricidad, agua, carreteras) y efectos (población, felicidad, contaminación). Los jugadores deben: planificar el zonificación (residencial, comercial, industrial), gestionar recursos (electricidad, agua, dinero), responder a desastres (incendios, terremotos, inundaciones), expandir la ciudad. Modo historia (desde pueblo a megaciudad) y modo sandbox (construir sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar estructura, colocar edificio
- **Arrastrar (Drag):** Mover edificios, dibujar carreteras
- **Pinch:** Zoom en el mapa (0.2x-5x) para ver detalles
- **Dos dedos (drag):** Pan/mover la vista de la ciudad
- **Tap rápido:** Colocar múltiples edificios en fila
- **Tap largo (Long press):** Ver información detallada (población, requisitos, ingresos)
- **Swipe horizontal:** Cambiar entre vista de construcción y vista de estadísticas
- **Gestos complejos:**
  - Shake del dispositivo = "modo de emergencia" (activar servicios de emergencia)
  - Dibujo de línea = dibujar carretera/puente (la estructura sigue el dibujo)
  - Doble tap en edificio = editar (demoler, mejorar, personalizar)
  - Arrastrar edificio a otra zona = reubicar (construcción móvil)
- **Multitouch hasta 4 dedos:** Selección múltiple de edificios para upgrades masivos
- **Escribir:** Nombar barrios, escribir mensajes a la ciudadanía

**Accesibilidad:**
- Edificios con iconos grandes (min 80px) y etiquetas claras
- Colores por tipo (residencial=azul, comercial=naranja, industrial=gris, servicios=verde)
- Voice assistant da consejos ("Construye más casas para aumentar población")
- Modo "Auto-Build" para sugerir ubicaciones óptimas
- Haptic feedback para construcción (vibración al completar edificio)
- Grid overlay para alineación precisa

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de ciudad isométrica
  - `<canvas>` para representación de edificios 3D (simulado con 2D shading)
  - `<canvas>` para estadísticas y gráficos
  - `<video>` para cutscenes de eventos de ciudad
  - `<input type="text">` para nombar barrios
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de ciudad, física de puentes)
  - Physics: Matter.js para física de puentes y estructuras
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado de la ciudad (población, recursos, edificios)
  - Pathfinding: A* algorithm para tráfico de ciudadanos
  - AI de ciudadanos: Custom behavior para movimiento diario (trabajo, casa, compras)
  - Animaciones: GSAP para transiciones y construcciones
  - Storage: IndexedDB para guardar ciudad completa (miles de edificios)
- **CSS:**
  - Grid layout para panel de construcción (12 columnas responsivo)
  - CSS Transforms para zoom de ciudad (transform-origin: center)
  - CSS Animations para feedback de construcción (scale up, fade in)
  - Backdrop-filter para blur de estadísticas superpuestas
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de servicios
- **Otros:**
  - Web Audio API: Sonidos urbanos (tráfico, construcción, sirenas)
  - DeviceOrientationEvent: Detectar shake para emergencia
  - Touch Events API: Multi-touch para dibujar carreteras
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar ciudad y progreso (offline play)
  - Service Workers: PWA para construir offline
  - Canvas API: Manipular píxeles para renderizado de edificios
  - Web Speech API: Voice commands para construcción ("construir casa", "construir carretera")

**Características Visuales:**
- **Paleta de colores:**
  - Ciudad: Tonos urbanos (residencial=azul claro, comercial=naranja, industrial=gris, verde=parques)
  - Edificios: Estilo moderno con colores por tipo (rascacielos=plata, casas=marrón/beige)
  - Infraestructura: Carreteras=gris oscuro, agua=azul, puentes=metal
  - UI: Semi-transparente con glassmorphism (#212121 opacity 0.7, blur 10px)
- **Animaciones:**
  - Construcción: Edificio emerge del suelo (scale up, 0.5s)
  - Ciudad creciendo: Partículas de construcción (dust, 1s)
  - Vehículos: Car movement con spritesheet (8 frames, 10 FPS)
  - Día/noche: Transición suave (5s)
  - Nivel up: Confetti de edificios (200 particles, 2s)
- **Feedback visual:**
  - Edificio completado: Flash verde + icono checkmark
  - Edificio inválido (sin recursos): Outline rojo pulsante
  - Servicio activo: Icono de ambulancia/bombero moviéndose
  - Logro: Modal con skyline dorado + fuegos artificiales (2s)
- **Personalización:**
  - 200+ edificios: Casas, oficinas, hospitales, escuelas, estaciones, parques, monumentos
  - 50+ materiales: Ladrillo, concreto, acero, vidrio, madera
  - Modo sandbox: Diseñar edificios personalizados con bloques
  - Skins de ciudad (realista, cartoon, futurista, steampunk)
  - Avatar de alcalde con 50+ combinaciones (traje, accesorios)

**Audio:**
- **Efectos de sonido:**
  - Construcción: Hammering (200-400ms, variación por material)
  - Carretera: Asphalt paver (300ms)
  - Vehículos: Car sounds varied (engine, horn, 100-300ms)
  - Sirenas: Ambulance/police siren (continuous)
  - Desastre: Crash + explosion (500ms)
  - Logro: Fanfare urbana (8 notas, 2s)
- **Música:**
  - Ciudad pequeña: Ambient folk (guitarra, 70 BPM)
  - Ciudad mediana: Upbeat urban (percussion + bass, 100 BPM)
  - Megaciudad: Orchestral cinematic (strings + brass, 90 BPM)
  - Construcción activa: Rhythmic building (percussion, 110 BPM)
  - Estadísticas: Lo-fi chill (80 BPM)
- **Voz:**
  - Tutorial: Voz de arquitecto amigable ("¡Bienvenido! Vamos a construir tu ciudad")
  - Consejo: Voz de asistente ("Construye más carreteras para reducir tráfico")
  - Logro: Voz celebratoria ("¡Excelente! Has creado una ciudad próspera")
- **Audio espacial:** Sonidos 3D para feedback de posición (sirenas cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 110-130 horas (4-5 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de ciudad (5000+ edificios)
  - Latencia: <50ms para respuesta de construcción (feedback instantáneo)
  - Entidades máximas: 10,000 edificios simultáneamente
  - Memoria máxima: 350MB (incluye sprites de 200 edificios, 50 materiales)
  - Pathfinding: <100ms para calcular ruta de ciudadano
- **Riesgos técnicos:**
  - Optimización de renderizado: 10,000 edificios requiere LOD y culling
  - Balance de juego: Evitar que sea frustrante (recursos demasiado escasos)
  - AI de ciudadanos: Miles de ciudadanos moviéndose simultáneamente requiere optimización
  - Física de puentes: Puentes deben ser realistas sin colapsar constantemente

**Valor Educativo:**
- **Ingeniería civil:** Los niños aprenden sobre estructuras, materiales, planificación urbana
- **Economía urbana:** Entienden impuestos, servicios, presupuesto, desarrollo
- **Pensamiento estratégico:** Planificar a largo plazo (zonificación, expansión)
- **Vocabulario de arquitectura:** Aprenden términos: zonificación, infraestructura, rascacielos, ingeniería civil
- **Matemáticas:** Cálculo de áreas, distancias, presupuesto, población
- **Creatividad urbana:** Diseñar ciudades únicas fomenta innovación
- **Responsabilidad cívica:** Entienden el impacto de decisiones en la comunidad

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Física de puentes y estructuras
- [SimCity - City builder](https://www.ea.com/games/simcity) - Inspiración principal
- [Cities: Skylines - Urban planning](https://www.paradoxinteractive.com/) - Planificación urbana
- [Bridge Constructor - Bridge building](https://www.clockwork-empire.com/) - Construcción de puentes
- [Urban Design - City planning](https://www.urbandesign.org/) - Referencia de planificación urbana
- [Web Audio API - Urban sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos urbanos
- [PWA - Offline construction](https://web.dev/offline/) - PWA para construir sin internet

---

#### Idea #28: Bio Explorer: Living Organisms

**Concepto:**
Juego de biología y microscopía donde los jugadores exploran el mundo microscópico, descubren células, bacterias, virus y organismos vivos, aprendiendo sobre estructura celular, procesos biológicos y ecología. Combina gameplay tipo Spore con elementos de educación científica.

**Motivación:**
- **Exploración microscópica:** Ver el mundo a nivel celular (organelos, bacterias, virus)
- **Descubrimiento de organismos:** Encontrar nuevas especies, desbloquear el árbol de la vida
- **Colección de muestras:** Recolectar células, bacterias, virus en diferentes biomas
- **Misiones científicas:** Historia主线 con misterios biológicos (¿qué causó la mutación?)
- **Personalización de científico:** Crear avatar con habilidades únicas (microscopista, genetista, ecólogo)

**Mecánica Principal:**
Los jugadores controlan un microscopio avanzado que les permite explorar muestras biológicas (sangre, agua, suelo, tejidos). Pueden: observar células (animales, vegetales, bacterianas), recolectar organismos (virus, bacterias, protozoos), experimentar con muestras (agregar reactivos, cambiar temperatura), desbloquear el árbol de la vida (evolución de especies). Las misiones enseñan: estructura celular (membrana, núcleo, organelos), procesos biológicos (mitosis, meiosis, fotosíntesis), microorganismos (virus, bacterias, hongos), ecología microbiana (sistemas, mutualismo). Modo historia (descubrir secretos de la vida) y modo sandbox libre (explorar sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar célula, bacteria, virus, muestra
- **Arrastrar (Drag):** Mover microscopio, recolectar organismos
- **Pinch:** Zoom en el microscopio (1x-1000x) para ver detalles celulares
- **Dos dedos (drag):** Pan/mover la vista del microscopio
- **Tap rápido:** Capturar foto de célula (snapshot)
- **Tap largo (Long press):** Ver información detallada (tipo, función, tamaño)
- **Swipe horizontal:** Cambiar entre vista de microscopio y vista de laboratorio
- **Gestos complejos:**
  - Shake del dispositivo = "mover muestra" (agitar la muestra para dispersar organismos)
  - Dibujo de círculo = seleccionar área (multiselección de células)
  - Doble tap en organelo = ampliar (zoom en detalles microscópicos)
  - Arrastrar reactivo a muestra = agregar químico (experimentación)
- **Multitouch hasta 3 dedos:** Recolectar múltiples organismos simultáneamente
- **Escribir:** Nombar especies, escribir notas de laboratorio

**Accesibilidad:**
- Células con contornos resaltados (outline azul) para fácil identificación
- Organelos con iconos grandes (min 60px) y etiquetas claras
- Voice assistant describe célula ("Esta célula animal tiene núcleo y mitocondrias")
- Modo "Hint System" para dar pistas biológicas
- Haptic feedback para descubrimientos (vibración al encontrar especie nueva)
- Color coding por tipo (célula animal=rosa, célula vegetal=verde, bacteria=azul, virus=rojo)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de microscopio (simulación de lente)
  - `<canvas>` para representación de células 3D (simulado con 2D shading)
  - `<canvas>` para laboratorio (reacciones químicas)
  - `<video>` para cutscenes de descubrimientos biológicos
  - `<input type="text">` para nombrar especies y notas
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de microscopio, animaciones celulares)
  - Physics: Custom physics para movimiento celular (flagella, cilia)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del científico (especies descubiertas, muestras)
  - Biological data: JSON con 500+ especies, organelos, procesos
  - Experimentation system: Custom algorithms para reacciones químicas
  - Animaciones: GSAP para transiciones y efectos de zoom
  - Storage: IndexedDB para guardar muestras y especies
- **CSS:**
  - Grid layout para laboratorio (8x8 grid de reactivos)
  - CSS Transforms para zoom de microscopio (transform-origin: center)
  - CSS Animations para feedback de descubrimiento (pulse, glow)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por tipo celular)
  - Flexbox para contenedores de muestras
- **Otros:**
  - Web Audio API: Sonidos biológicos (burbujas, movimiento celular, reacciones)
  - DeviceOrientationEvent: Detectar shake para mover muestra
  - Touch Events API: Multi-touch para recolectar múltiples organismos
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar especies y progreso (offline play)
  - Service Workers: PWA para explorar offline
  - Canvas API: Manipular píxeles para renderizado de células
  - Web Speech API: Voice commands para laboratorio ("añadir reactivo", "ampliar")

**Características Visuales:**
- **Paleta de colores:**
  - Microscopio: Blanco clínico (#FFFFFF), gris metalizado (#B0B0B0)
  - Células: Colores realistas por tipo (animal=rosa claro, vegetal=verde, bacteria=azul)
  - Organelos: Colores únicos (núcleo=azul oscuro, mitocondria=rojo, cloroplasto=verde)
  - Virus: Colores por tipo (COVID=esferas con puntas, influenza=irregular)
  - UI: Semi-transparente con glassmorphism (#E8F5E9 verde claro opacity 0.7, blur 10px)
- **Animaciones:**
  - Zoom: Lente de microscopio enfoca (blur → sharp, 0.5s)
  - Célula moviéndose: Flagella/cilia animation (continuous)
  - Mitosis: División celular (scale 1→2, 2s)
  - Descubrimiento de especie: Flash dorado + spark (0.5s)
  - Reacción química: Burbujas y cambio de color (1s)
- **Feedback visual:**
  - Célula encontrada: Halo pulsante con icono de microscopio
  - Organelo seleccionado: Outline azul brillante
  - Especie nueva: Modal con nombre, foto, información
  - Logro desbloqueado: Modal con ADN animado + confetti (2s)
- **Personalización:**
  - 500+ especies: Células (animal, vegetal, bacteriana), bacterias, virus, protozoos
  - 50+ biomas: Sangre, agua dulce, agua salada, suelo, tejidos
  - Modo sandbox: Experimentar con reactivos sin restricciones
  - Avatar de científico con 50+ combinaciones (bata de laboratorio, gafas, accesorios)
  - Skins de microscopio (clásico, futurista, vintage)

**Audio:**
- **Efectos de sonido:**
  - Zoom: Lens focus (whoosh, 0.3s)
  - Célula moviéndose: Soft ambient (continuous, 50-100Hz)
  - Mitocondria funcionando: Hum (100Hz)
  - Mitosis: Splitting sound (0.5s)
  - Reacción química: Bubbling (300-500ms)
  - Descubrimiento: Chime ascendente (C4-E4-G4-C5, 1s)
  - Logro: Fanfare biológica (ADN sounds + bells, 2s)
- **Música:**
  - Laboratorio idle: Ambient scientific (soft synth, 60 BPM)
  - Exploración activa: Upbeat discovery (piano + strings, 90 BPM)
  - Mitosis: Dramatic orchestral (brass, 80 BPM)
  - Descubrimiento: Ethereal choir (70 BPM)
  - Árbol de la vida: Inspirational (harp + choir, 80 BPM)
- **Voz:**
  - Tutorial: Voz de biólogo amigable ("Bienvenido al laboratorio. Vamos a explorar el mundo microscópico")
  - Hint: Voz de asistente ("Observa el núcleo de esta célula")
  - Descubrimiento: Voz celebratoria ("¡Has descubierto una nueva especie!")
- **Audio espacial:** Sonidos 3D para feedback de posición (células cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 90-110 horas (3-4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de microscopio (500+ células)
  - Latencia: <50ms para respuesta de zoom (feedback instantáneo)
  - Entidades máximas: 1000 células simultáneamente
  - Memoria máxima: 200MB (incluye sprites de 500 especies, 50 biomas)
  - Zoom: <200ms para enfocar (blur → sharp)
- **Riesgos técnicos:**
  - Precisión científica vs. jugable: Simplificar procesos complejos sin perder valor educativo
  - Optimización de zoom: 1000x zoom requiere renderizado dinámico
  - Balance de juego: Evitar que sea frustrante (organismos difíciles de encontrar)
  - Multitouch: 3 organismos simultáneos requiere multitouch robusto

**Valor Educativo:**
- **Biología real:** Los niños aprenden células, organelos, procesos biológicos, microorganismos
- **Método científico:** Observación → hipótesis → experimentación → conclusión
- **Vocabulario biológico:** Aprenden términos: célula, núcleo, mitocondria, mitosis, meiosis, fotosíntesis
- **Ecología microbiana:** Entienden sistemas, mutualismo, competencia en el mundo microscópico
- **Curiosidad científica:** Explorar el mundo invisible fomenta interés por la biología
- **Percepción de escala:** Entienden cuán pequeño es el mundo celular vs. macroscópico
- **Perseverancia:** Las misiones de descubrimiento requieren observación paciente

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Spore - Evolution game](https://www.ea.com/games/spore) - Inspiración para evolución de especies
- [Cellcraft - Cell biology game](https://cellcraftgame.com/) - Juego de células educativo
- [Microscope Simulator - Virtual lab](https://www.microscopemaster.com/) - Simulación de microscopio
- [Khan Academy - Biology](https://www.khanacademy.org/science/biology) - Referencia biológica
- [Web Audio API - Biological sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos biológicos
- [PWA - Offline exploration](https://web.dev/offline/) - PWA para explorar sin internet
- [NIH - Microscopic images](https://www.nih.gov/) - Imágenes microscópicas reales

---

#### Idea #29: Robot Factory: Engineering Lab

**Concepto:**
Taller de robótica virtual donde los niños construyen, programan y prueban sus propios robots. Los jugadores ensamlan robots a partir de piezas, programan comportamiento con bloques de código visual, y compiten en desafíos de ingeniería que enseñan conceptos STEM reales (física, lógica, electrónica).

**Motivación:**
- **Construcción sin límites:** Cientos de piezas para crear robots únicos (chasis, motores, sensores, baterías, CPUs)
- **Desafíos progresivos:** Competencias que aumentan en complejidad (carreras → rescate → combate → exploración)
- **Logros de ingeniero:** Badges por maestría (experto en motores, maestro de sensores, campeón de programación)
- **Competencia global:** Torneos semanales donde los mejores robots compiten
- **Innovación personal:** Compartir diseños de robots con la comunidad, inspirar a otros

**Mecánica Principal:**
Los jugadores tienen una fábrica de robots virtual donde pueden construir desde cero. El proceso tiene tres fases: 1) Construcción - seleccionan chasis, añaden motores, sensores, baterías, CPUs; 2) Programación - usan bloques visuales (tipo Scratch) para definir comportamiento (if-then, bucles, sensores); 3) Prueba - envían el robot a desafíos. Los desafíos incluyen: carrera de obstáculos, misión de rescate en laberinto, combate sumo, exploración de terreno desconocido. Cada desafío requiere diseño específico y código optimizado.

**Interacción Móvil:**
- **Arrastrar (Drag):** Mover piezas a la estructura del robot, conectar componentes
- **Tap simple:** Seleccionar piezas, herramientas, componentes de código
- **Tap rápido:** Girar piezas (para orientación correcta)
- **Pinch:** Zoom en el editor de construcción para ver detalles finos
- **Dos dedos (drag):** Pan/mover la vista del taller
- **Tap largo (Long press):** Ver especificaciones de pieza (potencia, peso, costo)
- **Swipe horizontal:** Cambiar entre vista de taller, vista de programación, vista de prueba
- **Gestos complejos:**
  - Shake del dispositivo = simular terremoto durante prueba (challenge adicional)
  - Dibujo de circuito = conectar componentes eléctricos automáticamente
  - Doble tap en robot = ver vista desglosada (explode view) de todos los componentes
  - Arrastrar componente a código = vincular sensor a bloque de lógica
- **Multitouch hasta 4 dedos:** Seleccionar múltiples piezas simultáneamente
- **Escribir:** Nombrar robots, escribir notas de ingeniería

**Accesibilidad:**
- Piezas con siluetas grandes (min 80px) para fácil selección
- Conectores con indicadores visuales claros (compatibilidad = verde, incompatible = rojo)
- Voice assistant explica piezas ("Este motor DC tiene 500 RPM de velocidad máxima")
- Modo "Snap-to-grid" para alineación perfecta de piezas
- Haptic feedback al conectar piezas correctamente (vibración corta satisfactoria)
- Color coding por tipo de componente (motores=azul, sensores=verde, energía=naranja, control=rojo)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado del taller 3D (simulado con isometric 2D)
  - `<canvas>` para editor visual de código (bloques drag-and-drop)
  - `<canvas>` para simulación física del robot (Box2D o Matter.js)
  - `<video>` para tutoriales animados de ingeniería
  - `<input type="text">` para nombrar robots
- **JavaScript:**
  - Motor de física: Matter.js (simulación de movimiento, colisiones, gravedad)
  - Programación visual: Custom block-based coding engine (inspirado en Scratch)
  - 3D rendering: Three.js o Babylon.js (opcional para robots 3D)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para guardar diseños de robots y código
  - AI de adversarios: Simple behavior trees para robots enemigos
  - Storage: IndexedDB para guardar cientos de diseños de robots
  - Animaciones: GSAP para transiciones entre fases (construcción → programación → prueba)
- **CSS:**
  - Grid layout para panel de piezas (10 columnas responsivo)
  - CSS Transforms para rotación de piezas (transform-origin)
  - CSS Animations para feedback de conexión (glow, pulse)
  - Backdrop-filter para blur de paneles superpuestos (glassmorphism)
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de bloques de código
- **Otros:**
  - Web Audio API: Sonidos de motores, conexión de piezas, algoritmos
  - Web Workers: Simulación física en background sin bloquear UI
  - Touch Events API: Multi-touch para arrastrar múltiples piezas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar biblioteca de robots con código completo
  - Service Workers: PWA para construir robots offline
  - Canvas API: Manipular píxeles para efectos visuales de robots

**Características Visuales:**
- **Paleta de colores:**
  - Taller: Tonos industriales (grises, azules metálicos #4A90E2, naranja construcción #F5A623)
  - Piezas: Colores por tipo (motores=azul, sensores=verde, baterías=naranja, CPUs=rojo)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, backdrop-filter blur 10px)
  - Robot activo: Colores personalizados por usuario (20+ esquemas)
- **Animaciones:**
  - Construcción: Piezas se "encajan" con snap animation (scale down + glow, 0.3s)
  - Conexión eléctrica: Chispas visuales al conectar componentes (0.2s)
  - Robot completado: Celebración con luces LED y rotación 360° (1.5s)
  - Competencia: Robot se mueve con física realista (ruedas giran, suspensiones funcionan)
- **Feedback visual:**
  - Conexión válida: Borde verde brillante, icono checkmark (0.3s)
  - Conexión inválida: Borde rojo pulsante, mensaje de error ("¡Piezas incompatibles!")
  - Código ejecutándose: Bloques se iluminan en orden de ejecución
  - Competencia ganada: Confetti de engranajes y microchips (200 particles, 2s)
- **Personalización:**
  - 200+ piezas: Chasis (10 tipos), motores (20 tipos), sensores (30 tipos), baterías (15 tipos), CPUs (10 tipos)
  - 50+ skins de robot (armaduras, colores, LEDs)
  - Modo freestyle: Construir robots sin límites de piezas
  - Avatar de ingeniero con 40+ combinaciones (gafas, overol, herramientas)
  - Biblioteca de diseños compartidos (community gallery)

**Audio:**
- **Efectos de sonido:**
  - Conectar pieza: Click metálico satisfactorio (100ms)
  - Motor encendido: Whir que sube de tono (50-200Hz, 1s)
  - Sensor activado: Beep único (C5, 150ms)
  - Colisión: Clunk metálico (200-400ms)
  - Código ejecutándose: Chirp por cada bloque activado (50ms)
  - Competencia ganada: Fanfare de 6 notas (C4-E4-G4-B5-C6-E6, 2s)
- **Música:**
  - Taller idle: Ambient industrial (hum de máquinas, percusión suave, 70 BPM)
  - Construcción: Upbeat techno (sintetizadores + beats, 120 BPM)
  - Programación: Focused electronic (arpegios, 90 BPM)
  - Competencia: Intense synth-rock (guitarra sintética + drums, 130 BPM)
  - Logro: Inspirational orchestral (strings + brass, 80 BPM)
- **Voz:**
  - Tutorial: Voz de ingeniero entusiasta ("¡Vamos a construir un robot!")
  - Hint: Voz de asistente ("Este sensor de distancia mide hasta 5 metros")
  - Competencia: Voz de announcer ("¡El robot de [jugador] está liderando!")
- **Audio espacial:** Sonidos 3D para feedback de posición (motores cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 110-130 horas (4-5 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de robots (500+ piezas visibles)
  - Latencia: <50ms para respuesta de conectar pieza (feedback instantáneo)
  - Simulación física: <100ms por timestep (para movimiento fluido)
  - Memoria máxima: 250MB (incluye sprites de 200 piezas, 50 skins)
  - Bloques de código máximos: 200 bloques por programa
- **Riesgos técnicos:**
  - Balance de física: Los robots deben comportarse realistamente pero no ser frustrantes
  - Optimización de simulación física: Muchos robots simultáneos consumen mucha CPU
  - Validación de código: Evitar bucles infinitos que cuelguen el juego
  - Generación de niveles: Desafíos procedimentales variados pero jugables

**Valor Educativo:**
- **Ingeniería real:** Los niños aprenden conceptos de física (fuerza, torque, fricción), electrónica (circuitos, energía), lógica de programación
- **Pensamiento lógico:** Bloques de código enseñan algoritmia, condicionales, bucles
- **Resolución de problemas:** Deben diagnosticar por qué el robot no funciona (falta de energía, código incorrecto)
- **Vocabulario técnico:** Aprenden términos: motor, sensor, actuador, bucle, variable, if-then, torque
- **Creatividad técnica:** Diseñar robots únicos fomenta innovación
- **Trabajo en equipo:** Modo cooperative donde 2-4 jugadores construyen juntos robots complejos
- **Persistencia:** Los robots fallan repetidamente antes de funcionar, enseñando resiliencia

**Referencias e Inspiración:**
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Simulación física realista
- [Blockly - Block coding](https://developers.google.com/blockly) - Editor de bloques de código visual
- [Scratch - Programming for kids](https://scratch.mit.edu/) - Inspiración para programación visual
- [RoboCraft - Robot building game](https://store.steampowered.com/app/301610/Robocraft/) - Inspiración para construcción de robots
- [Robot Arena - Combat robots](https://www.robotarena.com/) - Competencias de combate
- [Lego Mindstorms - Real robotics](https://www.lego.com/en-us/mindstorms) - Robótica educativa real
- [Three.js - 3D rendering](https://threejs.org/) - Renderizado de robots 3D
- [Web Audio API - Engineering sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos industriales

---

#### Idea #30: Time Traveler: History Quest

**Concepto:**
Aventura educativa de viajes en el tiempo donde los niños visitan épocas históricas importantes, interactúan con figuras históricas, y completan misiones que enseñan historia mundial de manera inmersiva. Combina gameplay tipo RPG con lecciones interactivas de historia, geografía y cultura.

**Motivación:**
- **Exploración temporal:** Visitar eras fascinantes (Egipto antiguo, Revolución Francesa, Edad Media, Revolución Industrial)
- **Encuentros históricos:** Conocer figuras legendarias (Cleopatra, Leonardo da Vinci, Abraham Lincoln)
- **Misiones épicas:** Aprender sobre eventos cruciales de primera mano (caída del Imperio Romano, conquista de América)
- **Colección de artefactos:** Recolectar objetos históricos (monedas romanas, armas medievales, relojes de bolsillo)
- **Evolución temporal:** Ver cómo el mundo cambia a través de los siglos (tecnología, cultura, geografía)

**Mecánica Principal:**
Los jugadores son viajeros del tiempo con una máquina temporal que les permite saltar entre épocas. Cada época es un mundo isométrico único con NPCs históricos, misiones主线 y desafíos laterales. Las épocas incluyen: Antiguo Egipto (2500 a.C.), Roma Imperial (100 d.C.), Edad Media (1300 d.C.), Renacimiento (1500 d.C.), Revolución Industrial (1800 d.C.), Guerra Civil Americana (1860s), Segunda Guerra Mundial (1940s), Era Espacial (1960s). Las misiones enseñan eventos clave (construcción de pirámides, caída de Roma, descubrimiento de América, invención de la bombilla). Los jugadores deben resolver puzzles basados en conocimiento histórico y recolectar artefactos para completar su "Museo del Tiempo".

**Interacción Móvil:**
- **Tap simple:** Interactuar con NPCs, recoger objetos, seleccionar opciones de diálogo
- **Arrastrar (Drag):** Mover personaje por el mapa (joystick virtual o drag-to-move)
- **Pinch:** Zoom en el mapa para ver detalles de edificios históricos
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap largo (Long press):** Ver información detallada de NPCs y objetos (contexto histórico)
- **Swipe horizontal:** Cambiar entre vista de mapa y vista de línea temporal
- **Gestos complejos:**
  - Shake del dispositivo = activar salto temporal (cambio de época)
  - Dibujo de esfera = abrir máquina del tiempo (menu de épocas disponibles)
  - Doble tap en personaje = ver perfil completo (historia, contexto, citas famosas)
  - Arrastrar artefacto al inventario = recolectar y guardar
- **Multitouch hasta 2 dedos:** Selección múltiple de objetos en inventario
- **Escribir:** Escribir en diario de viajero, tomar notas históricas

**Accesibilidad:**
- Mapas con áreas generosas (min 80px para NPC interactivo)
- Texto con fuentes legibles (min 16px) y alto contraste
- Voice assistant explica contexto histórico ("Estamos en Egipto antiguo, en 2500 a.C.")
- Modo "Auto-Walk" para que el personaje se mueva automáticamente al destino
- Haptic feedback para eventos históricos importantes (vibración fuerte al conocer una figura legendaria)
- Color coding por época (Egipto=amarillo dorado, Roma=rojo, Medieval=azul, Renacimiento=verde)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para mapas isométricos de cada época
  - `<canvas>` para línea temporal interactiva (timeline visual)
  - `<video>` para cinemáticas históricas (recreaciones animadas)
  - `<input type="text">` para diario de viajero
  - `<details>/<summary>` para información histórica expandible
- **JavaScript:**
  - Game engine: Phaser 3 (isometric rendering y game logic)
  - AI de NPCs: Simple behavior trees para interacciones históricas
  - Pathfinding: A* algorithm para navegación por mapas
  - Timeline system: Custom engine para gestión de épocas y eventos
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para guardar progreso temporal (épocas visitadas, artefactos recolectados)
  - Quiz system: Custom engine para preguntas históricas
  - Animaciones: GSAP para transiciones entre épocas (fade, warp)
- **CSS:**
  - Grid layout para inventario (8 columnas responsivo)
  - CSS Transforms para zoom del mapa (transform-origin: center)
  - CSS Animations para efectos de tiempo (glow, fade, warp)
  - Backdrop-filter para blur de paneles superpuestos (glassmorphism)
  - CSS Variables para theming por época (cambiar colores por era)
  - Flexbox para contenedores de diálogo
- **Otros:**
  - Web Audio API: Sonidos históricos apropiados por época
  - Touch Events API: Multi-touch para interacciones complejas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar progreso temporal (épocas, artefactos, diario)
  - Service Workers: PWA para explorar épocas offline
  - Canvas API: Renderizado de mapas isométricos y efectos temporales

**Características Visuales:**
- **Paleta de colores:**
  - Egipto antiguo: Arena, dorado (#F4A460, #DAA520), azul lapislázuli (#191970)
  - Roma Imperial: Mármol blanco, rojo púrpura (#DC143C), bronce (#CD7F32)
  - Edad Media: Piedra gris, terciopelo azul (#4169E1), madera (#8B4513)
  - Renacimiento: Terracota (#E2725B), verde esmeralda (#50C878), crema (#FFFDD0)
  - Revolución Industrial: Carbón negro (#1C1C1C), óxido (#8B4513), vapor gris (#D3D3D3)
  - Era Espacial: Plata (#C0C0C0), azul cósmico (#191970), naranja NASA (#FF4D00)
  - UI: Adaptada a cada época (papiro en Egipto, pergamino en Medieval, neon moderno)
- **Animaciones:**
  - Salto temporal: Warp effect (estiramiento de espacio-tiempo, 2s)
  - Transición entre épocas: Fade out + fade in con pausita histórica (1.5s)
  - NPCs conversando: Bubbles de diálogo con typing animation
  - Artefacto recolectado: Flash dorado + spin (0.5s)
  - Línea temporal: Desplazamiento suave entre épocas (slide, 0.8s)
- **Feedback visual:**
  - Misión completada: Modal con icono de época + stars (1-5)
  - Artefacto recolectado: Notificación con imagen del objeto (0.5s)
  - Conocer figura histórica: Modal con retrato + biografía (1s)
  - Salto temporal disponible: Reloj de tiempo pulsante (glow dorado)
- **Personalización:**
  - 20+ épocas visitables (desde 3000 a.C. hasta 2000s)
  - 100+ NPCs históricos con biografías completas
  - 50+ artefactos recolectables (armas, monedas, documentos, tecnología)
  - Avatar de viajero temporal con 40+ combinaciones (ropa por época, accesorios)
  - Museo del tiempo personalizable (exhibir artefactos, añadir notas)
  - Diario de viajero con fotos y recuerdos de cada época

**Audio:**
- **Efectos de sonido:**
  - Salto temporal: Whoosh cósmico (200-800Hz, 2s)
  - Recoger artefacto: Chime histórico (varía por época, 150ms)
  - Interacción con NPC: Burble variado (100-300ms)
  - Abrir diario: Sound de libro abriéndose (200ms)
  - Misión completada: Fanfare de época (varía por cultura, 1s)
  - Línea temporal: Tick-tock metálico (500ms)
- **Música:**
  - Menú principal: Orquestal épica con tema temporal (80 BPM)
  - Egipto antiguo: Percusión + flautas de caña (100 BPM)
  - Roma Imperial: Lyra + trompetas romanas (90 BPM)
  - Edad Media: Lira, flauta, coro gregoriano (70 BPM)
  - Renacimiento: Clavecín + violín (100 BPM)
  - Revolución Industrial: Steampunk mecánico (relojes, vapor, 110 BPM)
  - Era Espacial: Orquestal espacial (sintetizadores + brass, 80 BPM)
- **Voz:**
  - Tutorial: Voz de guía temporal misteriosa ("Bienvenido viajero del tiempo. Tu misión es explorar la historia")
  - NPC histórico: Voces con acentos apropiados (ej: Cleopatra con voz egipcia, Lincoln con acento americano del siglo XIX)
  - Narración de épocas: Voz documental con contexto histórico
- **Audio espacial:** Sonidos 3D por época (campanas en Roma, muecas en Egipto)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en mapas isométricos (máximo 500 NPCs simultáneos)
  - Latencia: <100ms para respuesta de diálogo (NPCs conversan fluidamente)
  - Entidades máximas: 1000 por época (NPCs, objetos, edificios)
  - Memoria máxima: 300MB (incluye sprites de 20 épocas, 100 NPCs)
  - Transición temporal: <2s para cargar nueva época (assets on-demand)
- **Riesgos técnicos:**
  - Precisión histórica vs. jugable: Simplificar eventos complejos sin perder valor educativo
  - Gestión de assets: 20 épocas con estilos visuales únicos requiere optimización
  - Balance de dificultad: Puzzles históricos deben ser desafiantes pero no frustrantes
  - Diversidad cultural: Representar épocas y culturas con respeto y precisión

**Valor Educativo:**
- **Historia real:** Los niños aprenden sobre épocas, eventos, figuras históricas
- **Geografía mundial:** Conocen ubicaciones, fronteras, geografía por época
- **Cultura y arte:** Descubren arquitectura, música, vestimenta, costumbres de cada época
- **Perspectiva histórica:** Entienden cómo el mundo evolucionó a través de los siglos
- **Vocabulario histórico:** Aprenden términos: faraón, senado, caballero, renacimiento, revolución, industrialización
- **Pensamiento crítico:** Resuelven puzzles basados en contexto histórico
- **Curiosidad temporal:** Explorar épocas genera interés por aprender más historia
- **Empatía histórica:** Conocer figuras históricas humaniza el pasado

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Isometric rendering y game logic
- [Assassin's Creed - Historical series](https://www.ubisoft.com/en-us/game/assassins-creed) - Inspiración para épocas históricas
- [Civilization - History strategy](https://www.civilization.com/) - Gestión temporal de civilizaciones
- [Khan Academy - World History](https://www.khanacademy.org/humanities/world-history) - Referencia histórica
- [National Geographic Kids - History](https://kids.nationalgeographic.com/history/) - Historia educativa
- [Web Audio API - Historical sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos por época
- [PWA - Offline exploration](https://web.dev/offline/) - PWA para explorar épocas sin internet
- [BBC History - Educational content](https://www.bbc.co.uk/history) - Contenido histórico educativo

---

#### Idea #31: Word Wizard: Linguistic Adventure

**Concepto:**
Aventura de aprendizaje de idiomas donde los niños dominan vocabulario, gramática y pronunciación mientras exploran un mundo mágico de palabras. Combina RPG elements con lecciones interactivas de múltiples idiomas (inglés, español, francés, alemán, chino, japonés), permitiendo progresión por niveles y battles de palabras.

**Motivación:**
- **Progresión lingüística visible:** Comienzan con palabras básicas (saludos, números) → avanzan a conversaciones completas
- **Battles de palabras:** Duelos de vocabulario contra NPC mágicos y otros jugadores
- **Colección de hechizos:** Cada nuevo vocabulario es un "hechizo" que aprenden (conjurar animales, crear objetos, viajar)
- **Exploración de mundos lingüísticos:** Cada idioma tiene su propio mundo con cultura única (España medieval, Japón feudal, Francia renacentista)
- **Competencia global:** Leaderboard de polyglots y torneos semanales de vocabulario

**Mecánica Principal:**
Los jugadores son aprendices de magia en el "Colegio de Hechicería Lingüística". Cada idioma es una disciplina mágica: Inglés = Hechicería Elemental, Español = Encantamientos Naturales, Francés = Magia Renacentista, Alemán = Runas Antiguas, Chino = Caligrafía Mística, Japonés = Katana de Palabras. Las lecciones progresan: 1) Vocabulario básico → 2) Frases y oraciones → 3) Conversaciones → 4) Gramática avanzada → 5) Literatura y cultura. Cada nivel incluye mini-games: memoria de palabras (flip cards), completar oraciones, pronunciación (microfono + reconocimiento de voz), traducción, composición. Los battles de palabras son duelos donde los jugadores deben responder preguntas de vocabulario/gramática más rápido que el oponente.

**Interacción Móvil:**
- **Tap simple:** Seleccionar palabras, opciones de respuesta, hechizos
- **Arrastrar (Drag):** Mover cartas de vocabulario, emparejar palabras con significados
- **Pinch:** Zoom en textos largos para ver detalles de gramática
- **Tap rápido:** Seleccionar respuestas en battles de velocidad (quiz rápido)
- **Dibujar (gesture):** Escribir caracteres chinos/japoneses en pantalla (stroke recognition)
- **Dos dedos (drag):** Pan/mover la vista del mundo mágico
- **Tap largo (Long press):** Ver información extendida de palabra (pronunciación, ejemplo, gramática)
- **Swipe horizontal:** Cambiar entre vista de mundo, vista de lección, vista de diccionario
- **Gestos complejos:**
  - Shake del dispositivo = lanzar hechizo de "recordar palabra" (repaso rápido)
  - Dibujo de estrella = activar modo "battle" (duelo de palabras)
  - Doble tap en palabra = marcar como favorita
  - Arrastrar palabra al libro de hechizos = añadir a lista de conjuros
- **Multitouch hasta 2 dedos:** Seleccionar múltiples cartas simultáneamente
- **Hablar:** Pronunciar palabras para práctica de speaking (recognition de voz)

**Accesibilidad:**
- Textos con fuentes generosas (min 18px) y alto contraste
- Botones táctiles grandes (min 80x80px) para fácil interacción
- Voice assistant pronuncia palabras (text-to-speech con acentos nativos)
- Modo "Slow Learner" para niños que necesitan más tiempo
- Haptic feedback para correcciones (vibración suave = respuesta incorrecta, fuerte = correcta)
- Color coding por tipo de palabra (verbos=azul, sustantivos=verde, adjetivos=naranja)
- Modo "Audio Only" para práctica sin leer

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado del mundo mágico (isométrico)
  - `<canvas>` para mini-games de vocabulario (cards, memory)
  - `<video>` para tutoriales de pronunciación (videos de nativos)
  - `<audio>` para pronunciación de palabras (TTS nativo)
  - `<input type="text">` para escritura de respuestas
  - `<input type="file">` para importar listas de vocabulario personalizadas
- **JavaScript:**
  - Game engine: Phaser 3 o PixiJS (renderizado de mundo)
  - Speech Recognition: Web Speech API (SpeechRecognition) para evaluar pronunciación
  - Text-to-Speech: Web Speech API (speechSynthesis) con voces nativas
  - Handwriting Recognition: Custom algorithm para caracteres chinos/japoneses (stroke detection)
  - Quiz engine: Custom system para preguntas de vocabulario/gramática
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para guardar progreso lingüístico (vocabulario aprendido, niveles completados)
  - Spaced repetition: Algorithm SRS (SuperMemo) para repaso óptimo de palabras
  - Animaciones: GSAP para efectos de hechizos y transiciones
- **CSS:**
  - Grid layout para diccionario (12 columnas responsivo)
  - CSS Transforms para animaciones de cartas (flip, scale)
  - CSS Animations para efectos de hechizos (glow, particle burst)
  - Backdrop-filter para blur de paneles superpuestos (glassmorphism)
  - CSS Variables para theming por idioma (cambiar colores por cultura)
  - Flexbox para contenedores de lecciones
- **Otros:**
  - Web Speech API: Reconocimiento de voz para pronunciación
  - Web Audio API: Sonidos de hechizos, efectos mágicos
  - Touch Events API: Multi-touch para interacciones complejas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar vocabulario aprendido (miles de palabras)
  - Service Workers: PWA para aprender idiomas offline
  - Canvas API: Renderizado de efectos de hechizos y textos
  - MediaRecorder API: Grabar pronunciación del usuario para comparar con nativo

**Características Visuales:**
- **Paleta de colores:**
  - Inglés (Elemental): Azul cielo + blanco + amarillo sol (#87CEEB, #FFFFFF, #FFD700)
  - Español (Naturaleza): Verde bosque + tierra + agua (#228B22, #8B4513, #4169E1)
  - Francés (Renacimiento): Rosa pálido + dorado + azul real (#FFB6C1, #DAA520, #4169E1)
  - Alemán (Runas): Gris piedra + rojo sangre + plateado (#696969, #8B0000, #C0C0C0)
  - Chino (Mística): Rojo jade + negro + oro (#DC143C, #000000, #FFD700)
  - Japonés (Katana): Negro + rojo sangre + cerezo (#000000, #8B0000, #FFB7C5)
  - UI: Adaptada a cada idioma (runas en alemán, caligrafía en chino, renacentista en francés)
- **Animaciones:**
  - Hechizo lanzado: Particle burst + glow + trail (0.5s)
  - Palabra aprendida: Flash dorado + sparkle effect (0.3s)
  - Battle victory: Confetti de letras del alfabeto (200 particles, 2s)
  - Nivel completado: Portal brillante se abre + personaje camina (1.5s)
  - Carta de vocabulario: Flip animation con front/back (0.3s)
- **Feedback visual:**
  - Respuesta correcta: Borde verde brillante, checkmark animado (0.3s)
  - Respuesta incorrecta: Borde rojo pulsante, shake effect (0.5s)
  - Palabra pronunciada correctamente: Ondas de sonido verde (0.2s)
  - Logro desbloqueado: Modal con escudo mágico + hechizos nuevos (1s)
- **Personalización:**
  - 6 idiomas principales (inglés, español, francés, alemán, chino, japonés)
  - 5000+ palabras de vocabulario (organizadas por nivel y categoría)
  - 200+ hechizos (vinculados a vocabulario específico)
  - 6 mundos lingüísticos con estilos únicos (España medieval, Japón feudal, etc.)
  - Avatar de mago con 50+ combinaciones (túnica, sombrero, varita)
  - Libro de hechizos personalizable (organizar hechizos por categoría)
  - Diccionario personal con notas y palabras favoritas

**Audio:**
- **Efectos de sonido:**
  - Hechizo lanzado: Swoosh mágico con variación por elemento (200-600Hz, 0.5s)
  - Palabra aprendida: Chime ascendente (C4-E4-G4, 0.3s)
  - Respuesta correcta: Ding satisfactorio (C5, 150ms)
  - Respuesta incorrecta: Buzz descendente (E2-C2, 200ms)
  - Battle victory: Fanfare de 8 notas (C4-E4-G4-B5-C6-E6-G6-C7, 2s)
  - Abrir diccionario: Sound de libro mágico abriéndose (300ms)
- **Música:**
  - Menú principal: Orquestal mágica con arpa y coro (80 BPM)
  - Inglés (Elemental): Wind instruments + strings (90 BPM)
  - Español (Naturaleza): Guitarra flamenca + percusión (100 BPM)
  - Francés (Renacimiento): Clavecín + violín (85 BPM)
  - Alemán (Runas): Drums + horns heroicos (95 BPM)
  - Chino (Mística): Guzheng + flauta de bambú (75 BPM)
  - Japonés (Katana): Shamisen + taiko drums (110 BPM)
  - Battle: Intense orchestral con percusión (120 BPM)
- **Voz:**
  - Tutorial: Voz de mago anciano ("Bienvenido joven hechicero. Vamos a aprender palabras mágicas")
  - Pronunciación de palabras: Voz nativa por idioma (6 voces diferentes)
  - NPC de idioma: Voces con acentos y personalidades únicas
- **Audio espacial:** Sonidos 3D para hechizos (hechizo de fuego suena desde donde se lanza)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 130-150 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de mundo mágico (máximo 500 NPCs)
  - Latencia de voz: <200ms para reconocimiento de pronunciación (Web Speech API)
  - Precisión de voz: >80% en reconocimiento de palabras nativas
  - Memoria máxima: 400MB (incluye 5000 palabras, 6 mundos, 200 hechizos)
  - Spaced repetition: Algoritmo SRS para repaso óptimo (SuperMemo-2)
- **Riesgos técnicos:**
  - Reconocimiento de voz: Diferentes acentos y dialectos afectan precisión
  - Handwriting recognition: Caracteres chinos/japoneses requieren stroke detection robusto
  - Balance de dificultad: Ajustar dificultad por nivel de habilidad del niño
  - Localización: 6 idiomas requieren contenido culturalmente apropiado

**Valor Educativo:**
- **Aprendizaje de idiomas real:** Los niños dominan vocabulario, gramática, pronunciación de múltiples idiomas
- **Conciencia cultural:** Cada mundo enseña cultura, costumbres, geografía del país
- **Pensamiento lógico:** Traducción y composición requieren análisis de estructura
- **Vocabulario expandido:** 5000+ palabras cubren la mayoría de conversaciones cotidianas
- **Gramática aplicada:** Entienden conjugaciones, tiempos verbales, estructura de oraciones
- **Memoria auditiva:** Reconocimiento de voz mejora escucha y pronunciación
- **Competencia global:** Battles de palabras fomentan aprendizaje competitivo
- **Colaboración:** Modo cooperative donde 2-4 jugadores practican conversaciones juntos

**Referencias e Inspiración:**
- [Web Speech API - Speech Recognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) - Reconocimiento de pronunciación
- [Duolingo - Language learning](https://www.duolingo.com/) - Inspiración para lecciones interactivas
- [Memrise - Vocabulary learning](https://www.memrise.com/) - Spaced repetition y vocabulario
- [Anki - Flashcard system](https://apps.ankiweb.net/) - Algoritmo SRS (SuperMemo)
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Renderizado de mundo
- [Rosetta Stone - Immersive learning](https://www.rosettastone.com/) - Inmersión lingüística
- [Handwriting Recognition - Strokes](https://github.com/GoogleChrome/handwriting.js) - Detección de caracteres
- [PWA - Offline learning](https://web.dev/offline/) - PWA para aprender idiomas sin internet

---

#### Idea #32: Sports Academy: Virtual Training

**Concepto:**
Academia deportiva virtual donde los niños aprenden y practican múltiples deportes, mejoran habilidades motoras, y compiten en torneos. Combina gameplay tipo Wii Sports con sensores del dispositivo (acelerómetro, giroscopio) para movimiento real, enseñando técnica, reglas y valores deportivos.

**Motivación:**
- **Deporte activo:** Los niños se mueven en tiempo real (golpes, tiros, carreras)
- **Progresión atlética visible:** Comienzan como novatos → avanzan a atletas profesionales
- **Competencia deportiva:** Torneos semanales, leaderboards globales, 1v1 challenges
- **Logros atléticos:** Badges por maestría (goleador, defensor, velocista, MVP)
- **Personalización de atleta:** Entrenar múltiples disciplinas (fútbol, baloncesto, tenis, atletismo)

**Mecánica Principal:**
Los jugadores son estudiantes en una academia deportiva con múltiples disciplinas: Fútbol, Baloncesto, Tenis, Atletismo, Natación, Béisbol, Voleibol. Cada deporte tiene modos: 1) Tutorial - aprender técnica básica; 2) Entrenamiento - practicar habilidades específicas (pases, tiros, saques, sprints); 3) Partida - partidos/torneos contra IA o multiplayer; 4) Carrera - progresión de atleta (novato → amateur → profesional → olímpico). Los dispositivos móviles se usan como controladores: acelerómetro detecta velocidad de swing (tenis), giroscopio mide precisión de tiro (baloncesto), touch screen para tácticas. El juego enseña: técnica, reglas, trabajo en equipo, valores deportivos (respeto, disciplina, fair play).

**Interacción Móvil:**
- **Movimiento real (accelerometer):** Swing para tenis/ping-pong, golpes de fútbol
- **Giro del dispositivo (gyroscope):** Apuntar tiros, controlar dirección de tiro
- **Tap simple:** Seleccionar deporte, opción de menú, jugador
- **Arrastrar (Drag):** Dibujar tácticas en tablero virtual, mover jugadores
- **Pinch:** Zoom en campo de juego para ver detalles
- **Dos dedos (drag):** Pan/mover la vista del campo
- **Tap rápido:** Pases rápidos, dribbling
- **Tap largo (Long press):** Ver estadísticas de jugador (goles, asistencias, velocidad)
- **Swipe horizontal:** Cambiar entre vista de campo, vista de tácticas, vista de estadísticas
- **Gestos complejos:**
  - Shake del dispositivo = celebración o señal de tiempo fuera
  - Dibujo de trayectoria = planificar tiro libre o corner (táctica)
  - Doble tap en jugador = ver perfil completo
  - Arrastrar jugador a posición = reorganizar formación de equipo
- **Multitouch hasta 4 dedos:** Controlar múltiples jugadores en simulación táctica
- **Cámara:** Usar cámara frontal para analizar postura (opcional, AR mode)

**Accesibilidad:**
- Modos adaptativos para diferentes niveles de habilidad (fácil, medio, difícil)
- Sensores calibrables para ajustar sensibilidad de movimiento
- Voice assistant explica reglas ("En baloncesto, no puedes caminar con el balón")
- Haptic feedback para eventos (vibración al golpear balón, marcar gol)
- Color coding por equipo (equipo local=azul, visitante=rojo)
- Modo "Sit-and-Play" para niños con movilidad reducida (control táctil only)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de campos/estadios (2D isometric o 3D)
  - `<canvas>` para tablero de tácticas (drawing surface)
  - `<video>` para tutoriales de técnica (videos de profesionales)
  - `<input type="range">` para ajustar sensibilidad de sensores
- **JavaScript:**
  - Game engine: Phaser 3 o Three.js (renderizado de deportes)
  - Sensor APIs: DeviceOrientationEvent (giroscopio), DeviceMotionEvent (acelerómetro)
  - Physics engine: Matter.js o Box2D (simulación de balones, movimiento)
  - AI de oponentes: Behavior trees para jugadores controlados por IA
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso de atleta (habilidades, estadísticas, torneos)
  - Multiplayer: WebSockets para partidas en tiempo real
  - Replay system: Custom engine para grabar y reproducir jugadas
  - Animaciones: GSAP para celebraciones y transiciones
- **CSS:**
  - Grid layout para panel de deportes (6 columnas responsivo)
  - CSS Transforms para rotación de vista de campo
  - CSS Animations para efectos de celebración (confetti, fireworks)
  - Backdrop-filter para blur de estadísticas superpuestas
  - CSS Variables para theming por deporte (cambiar colores por disciplina)
  - Flexbox para contenedores de menús
- **Otros:**
  - DeviceOrientation API: Giroscopio para control de dirección
  - DeviceMotion API: Acelerómetro para detección de swing/speed
  - Web Audio API: Sonidos de estadio, golpes, pitidos
  - Touch Events API: Multi-touch para control táctil
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar progreso de atleta y estadísticas
  - Service Workers: PWA para entrenar offline (modo entrenamiento solo)
  - Canvas API: Renderizado de campos y tablero de tácticas
  - AR mode (opcional): WebXR API para realidad aumentada de deportes

**Características Visuales:**
- **Paleta de colores:**
  - Fútbol: Verde césped (#228B22), blanco líneas (#FFFFFF), balón blanco/negro
  - Baloncesto: Pista madera (#DEB887), naranja balón (#FF8C00), azul/rojo equipos
  - Tenis: Verde arcilla (#8FBC8F) o azul hard court (#4169E1), amarillo balón (#FFD700)
  - Atletismo: Rojo pista (#DC143C), blanco líneas (#FFFFFF), azul competidores (#4169E1)
  - Natación: Azul piscina (#4169E1), rayas carriles (#FFFFFF), balones amarillos (#FFD700)
  - Béisbol: Verde césped (#228B22), tierra marrón (#8B4513), blanca pelota (#FFFFFF)
  - Voleibol: Azul cielo (#87CEEB), amarillo balón (#FFD700), blanco red (#FFFFFF)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.6, backdrop-filter blur 10px)
- **Animaciones:**
  - Golpe de balón: Follow-through motion con trail (0.3s)
  - Gol marcado: Celebración con confetti del color del equipo (1s)
  - Celebración: Animación de jugadores (saltos, baile, abrazos)
  - Transición deportes: Swipe horizontal con iconos de cada deporte (0.8s)
  - Replay: Slow motion de jugada clave (0.5x velocidad)
- **Feedback visual:**
  - Gol marcado: Flash de pantalla + texto "GOOOOL!" + confetti (0.5s)
  - Tiro acertado: Borde verde brillante + trayectoria correcta (0.3s)
  - Tiro fallado: Borde rojo pulsante + shake effect (0.5s)
  - Logro desbloqueado: Modal con medalla deportiva (1s)
  - Estadísticas: Counting numbers animation (0→10→100, 1s)
- **Personalización:**
  - 7 deportes principales (fútbol, baloncesto, tenis, atletismo, natación, béisbol, voleibol)
  - 50+ entrenamientos por deporte (técnica, táctica, condición física)
  - Avatar de atleta con 60+ combinaciones (uniforme, zapatos, accesorios)
  - 30+ estadios/escenarios (campo de fútbol, cancha de baloncesto, pista de atletismo)
  - Modo career: Progresión de atleta (novato → profesional → olímpico)
  - Editor de uniformes: Diseñar colores y patrones de equipo
  - Biblioteca de jugadas: Guardar tácticas favoritas y compartirlas

**Audio:**
- **Efectos de sonido:**
  - Golpe de balón: Thud + whistle (150ms)
  - Gol marcado: Grito de celebración + estadio rugiendo (1-2s)
  - Pitido de árbitro: Whistle agudo (200ms)
  - Dribbling: Rebote de balón (50-100ms por rebote)
  - Aplausos: Multitud con variación (cercanos vs lejanos, 1-5s)
  - Celebración: Cheer + música de estadio (2s)
- **Música:**
  - Menú principal: Upbeat sports anthem (brass + drums, 120 BPM)
  - Pre-partido: Tension building (orquestal, 80 BPM)
  - Partida: Energetic instrumental (rock + pop, 130 BPM)
  - Goles/points: Explosión musical + estadio (150 BPM)
  - Training: Focused motivational (electronic, 110 BPM)
  - Post-partido: Triumphant orchestral (80 BPM)
  - Por deporte: Cada disciplina tiene música distintiva (samba para fútbol, jazz para baloncesto)
- **Voz:**
  - Tutorial: Voz de entrenador entusiasta ("¡Bienvenido a la academia! Vamos a mejorar tu técnica")
  - Commentary: Voz de comentarista deportivo (estilo TV)
  - Instrucciones: Voz de árbitro ("¡Falta!", "¡Gol!")
- **Audio espacial:** Sonidos 3D para feedback de posición (balón cerca suena más fuerte)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 110-130 horas (4-5 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de deportes (máximo 20 jugadores simultáneos)
  - Latencia de sensores: <50ms para respuesta de movimiento (swing, giro)
  - Precisión de sensores: ±5 grados para giroscopio, ±0.5 m/s² para acelerómetro
  - Memoria máxima: 350MB (incluye 7 estadios, 60 avatares, animaciones)
  - Multiplayer latency: <100ms para sincronización en tiempo real
- **Riesgos técnicos:**
  - Calibración de sensores: Diferentes dispositivos tienen sensitividades variadas
  - Simulación física: Balones deben comportarse realistamente (gravedad, fricción, rebote)
  - Balance de dificultad: Entrenamientos deben ser desafiantes pero no frustrantes
  - Optimización de rendering: 7 deportes con estilos visuales únicos requieren assets optimizados

**Valor Educativo:**
- **Deporte real:** Los niños aprenden técnica, reglas, táctica de múltiples deportes
- **Habilidades motoras:** Mejoran coordinación, reflejos, precisión, velocidad
- **Valores deportivos:** Enseñan respeto, disciplina, trabajo en equipo, fair play
- **Salud física:** Fomentan actividad física y ejercicio regular
- **Vocabulario deportivo:** Aprenden términos: dribbling, saque, tiro, falta, carrera, relevo
- **Pensamiento estratégico:** Tácticas y formaciones requieren planificación
- **Competencia sana:** Torneos enseñan a ganar y perder con dignidad
- **Colaboración:** Deportes de equipo (fútbol, baloncesto, voleibol) enseñan trabajo en equipo

**Referencias e Inspiración:**
- [DeviceOrientation API - Gyroscope](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent) - Control de movimiento
- [DeviceMotion API - Accelerometer](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent) - Detección de swing
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Rendering de deportes
- [FIFA Mobile - Soccer game](https://www.ea.com/games/fifa/fifa-mobile) - Inspiración para fútbol
- [NBA 2K Mobile - Basketball game](https://nba2k.2k.com/nba-2k-mobile/) - Inspiración para baloncesto
- [Wii Sports - Motion gaming](https://www.nintendo.com/games/detail/wii-sports-switch/) - Inspiración para control por movimiento
- [Web Audio API - Stadium sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de estadio
- [PWA - Offline training](https://web.dev/offline/) - PWA para entrenar deportes sin internet

---

### Lote 9 (Ideas 33-36)
**Fecha:** 2026-02-17
**Ejecución:** 9/25

#### Idea #33: Cyber Security: Hacker Academy

**Concepto:**
Juego de seguridad informática educativo donde los jugadores aprenden hacking ético, criptografía, análisis de vulnerabilidades y defensa cibernética a través de misiones interactivas. Combina gamificación con conceptos reales de ciberseguridad, enseñando a proteger sistemas y ser hackers éticos (white hat).

**Motivación:**
- **Desafíos de hacking real:** Los jugadores破解密码, encuentran vulnerabilidades y evitan firewalls usando técnicas reales
- **Progresión de habilidades:** Comienzan con conceptos básicos (ASCII, binario) avanzan a exploits complejos
- **Misiones de rescate:** Proteger sistemas de ataques maliciosos (black hat) y recuperar datos robados
- **Competencia global:** Leaderboard de hackers (ranking por nivel, misiones completadas, speedruns)
- **Descubrimiento de secretos:** Encontrar Easter eggs ocultos en sistemas, archivos clasificados

**Mecánica Principal:**
Los jugadores son cadetes en una academia de hackers éticos. Cada misión es un escenario de ciberseguridad: infiltrar servidor corporativo, descifrar mensajes cifrados, analizar código malicioso, proteger base de datos de SQL injection. Las misiones progresan: nivel 1-5 (básico: decodificar ASCII, encontrar contraseñas débiles), nivel 6-10 (intermedio: análisis de paquetes, reconocimiento de patrones), nivel 11-15 (avanzado: exploits, reverse engineering). Los jugadores tienen herramientas virtuales: terminal Linux, Wireshark-lite (sniffer de red), desensamblador, herramientas de criptografía. Hay modo historia (detener ciberataque global) y modo sandbox (hackear sistemas simulados sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar herramientas, comandos, misiones
- **Arrastrar (Drag):** Arrastrar paquetes de red a analizador, mover archivos entre directorios
- **Pinch:** Zoom en el terminal para ver código detallado
- **Dos dedos (drag):** Pan/mover la vista del sistema de archivos
- **Escribir:** Escribir comandos en terminal Linux (ls, cd, grep, cat, ssh)
- **Swipe horizontal:** Cambiar entre vista de terminal, analizador de red, archivos
- **Gestos complejos:**
  - Shake del dispositivo = emergency reboot (simular apagado de sistema)
  - Doble tap rápido en código = seleccionar bloque (copy/paste)
  - Swipe desde arriba = abrir historial de comandos
  - Dibujar patrón = crear contraseña personalizada (gesture-based auth)
- **Multitouch hasta 3 dedos:** Selección múltiple de archivos para análisis batch
- **Tap largo (Long press):** Ver info extendida de comando/archivo (man pages virtual)

**Accesibilidad:**
- Terminal con fuentes legibles (min 16px) y colores alto contraste (verde sobre negro)
- Comandos con autocompletado y sugerencias (help en tiempo real)
- Voice assistant guía misiones ("Usa 'grep' para buscar patrones")
- Modo "Hints" que muestra pistas progresivas (1 hint = sin penalización, 2 hints = -10% puntuación)
- Haptic feedback para errores (vibración cuando comando falla)
- Color coding por tipo de archivo (ejecutable=verde, texto=azul, binario=rojo)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para visualización de red (gráfico de nodos y conexiones)
  - `<canvas>` para terminal virtual (simulando xterm)
  - `<textarea>` con syntax highlighting para edición de código
  - `<video>` para tutoriales de conceptos de ciberseguridad
  - `<input type="text">` para comandos y búsqueda
- **JavaScript:**
  - Terminal emulator: xterm.js o custom implementation
  - Simulación de red: Custom graph engine para visualizar tráfico
  - Criptografía: Web Crypto API (AES, RSA, hashing)
  - Desensamblador simulado: Hex viewer con interpretación básica
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado de misión (progreso, herramientas desbloqueadas)
  - Storage: IndexedDB para guardar progreso y código personalizado
  - Code parsing: RegEx para análisis de vulnerabilidades (SQL injection, XSS)
- **CSS:**
  - Monospace fonts para terminal (Fira Code, JetBrains Mono)
  - CSS Grid para layout de herramientas (panel izquierdo=tools, central=terminal, derecho=files)
  - CSS Variables para theming (dark mode por defecto, modo matrix green)
  - CSS Animations para efectos de hacking (typing text, glitch effect)
  - Backdrop-filter para blur de paneles superpuestos
  - Flexbox para contenedores de comandos
- **Otros:**
  - Web Crypto API: Encriptación/desencriptación real de mensajes
  - Web Speech API: Comandos de voz para terminal ("grep archivo")
  - Touch Events API: Multi-touch para selección múltiple
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar código, archivos, progreso de misiones
  - Service Workers: PWA para jugar offline (misiones de práctica)
  - Canvas API: Visualizar gráficos de red y tráfico de datos
  - Web Workers: Simulación de red y análisis de archivos sin bloquear UI

**Características Visuales:**
- **Paleta de colores:**
  - Terminal: Matrix green (#00FF00) sobre negro (#000000) por defecto
  - Red visualization: Nodos azules (#00BFFF), conexiones grises (#808080), ataque rojo (#FF0000)
  - UI: Dark theme semitransparente (#1A1A1A opacity 0.9, backdrop-filter blur 10px)
  - Herramientas: Iconos color coding (terminal=verde, red=azul, crypto=púrpura, files=naranja)
- **Animaciones:**
  - Terminal typing: Caracteres aparecen uno por uno (10ms delay)
  - Network traffic: Paquetes animan entre nodos (300ms por salto)
  - Hack success: Flash verde + glitch effect (0.5s)
  - Exploit detected: Alert rojo pulsante + shake de pantalla (0.3s)
  - Mision completada: Confetti de datos binarios (0s y 1s, 2s)
- **Feedback visual:**
  - Comando correcto: Borde verde brillante en terminal, +XP
  - Comando incorrecto: Mensaje de error en rojo, haptic feedback
  - Vulnerabilidad encontrada: Nodo brilla en rojo, icono de alerta
  - Desencriptado exitoso: Archivo se desbloquea con animación de candado abriéndose (1s)
- **Personalización:**
  - 10+ temas de terminal (Matrix green, Cyberpunk neon, Retro amber, Modern blue)
  - 20+ avatares de hacker (estilo Anonymous, Mr. Robot, Cyberpunk, Retro)
  - Skins de herramientas (Wireshark, Nmap, Metaspcript virtual)
  - Custom aliases para comandos frecuentes (crear shortcuts)

**Audio:**
- **Efectos de sonido:**
  - Tecla presionada: Click mecánico de teclado (10ms, vary por tecla)
  - Comando ejecutado: Beep de terminal (1000Hz, 50ms)
  - Hack success: Ascendente chime (C4-E4-G4, 200ms)
  - Error: Buzzer descendente (E2-C2, 150ms)
  - Network traffic: Swoosh de datos (100-300ms)
  - Vulnerability found: Alert sonora (D4, 300ms)
  - Mission complete: Fanfare de synth (8 notas, 1.5s)
- **Música:**
  - Menú principal: Cyberpunk electronic (synthwave, 110 BPM)
  - Terminal idle: Ambient tech (pulsing drones, 70 BPM)
  - Hack en progreso: Intense electronic (trance, 140 BPM)
  - Defensiva: Tense orchestral (strings low + drums, 90 BPM)
  - Misión completada: Upbeat victory (electro pop, 130 BPM)
- **Voz:**
  - Tutorial: Voz de instructor de ciberseguridad ("Bienvenido a Hacker Academy. Primera lección: ASCII")
  - Hint: Voz amigable ("Prueba usar 'grep' para buscar patrones")
  - Alerta: Voz de emergencia ("¡Intrusión detectada! ¡Activa firewalls!")
- **Audio espacial:** Sonidos 3D para feedback de red (ataque desde izquierda suena en canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 130-160 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en visualización de red (máximo 1000 nodos)
  - Latencia de terminal: <50ms para respuesta de comandos (feedback instantáneo)
  - Criptografía: <200ms para desencriptar mensajes (RSA 2048 bits)
  - Memoria máxima: 250MB (incluye 20 herramientas, 50 misiones, historial de comandos)
  - Network simulation: <100ms para generar tráfico simulado
- **Riesgos técnicos:**
  - Simulación realista vs. jugable: Simplificar exploits complejos (no usar código real peligroso)
  - Seguridad del juego: Asegurarse de que el juego no sea una herramienta real de hacking
  - Balance de dificultad: Misiones deben ser desafiantes pero no imposibles
  - Optimización de terminal: Renderizado de texto en tiempo real puede consumir CPU

**Valor Educativo:**
- **Ciberseguridad real:** Los niños aprenden conceptos de seguridad informática, vulnerabilidades, defensa
- **Criptografía básica:** Entienden encriptación, hashing, firmas digitales, HTTPS
- **Habilidades de análisis:** Desarrollan pensamiento lógico, reconocimiento de patrones, debugging
- **Ética digital:** Entienden la diferencia entre hacking ético (white hat) y criminal (black hat)
- **Vocabulario técnico:** Aprenden términos: firewall, malware, exploit, payload, cipher, hash, SSL/TLS
- **Pensamiento crítico:** Analizar código para encontrar vulnerabilidades requiere atención al detalle
- **Responsabilidad digital:** Entienden que sus acciones online tienen consecuencias
- **Colaboración:** Modo cooperative donde 2-4 jugadores hackean sistemas juntos en tiempo real

**Referencias e Inspiración:**
- [xterm.js - Terminal emulator](https://xtermjs.org/) - Terminal virtual en el browser
- [Web Crypto API - Cryptography](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) - Encriptación nativa
- [Hack The Box - Hacking platform](https://www.hackthebox.com/) - Inspiración para misiones de hacking
- [OverTheWire - Wargames](https://overthewire.org/wargames/) - Juegos de hacking educativos
- [CTFtime - Capture The Flag competitions](https://ctftime.org/) - Competencias de ciberseguridad
- [OWASP - Web security](https://owasp.org/) - Referencia de vulnerabilidades web
- [CyberChef - Crypto analysis tool](https://gchq.github.io/CyberChef/) - Herramientas de criptografía
- [MDN Web Docs - Security](https://developer.mozilla.org/en-US/docs/Web/Security) - Referencia de seguridad web

---

#### Idea #34: Animal Vet: Wildlife Rescue

**Concepto:**
Juego de veterinaria simulado donde los jugadores rescatan, diagnostican y tratan animales en diferentes ecosistemas (selva, océano, desierto, tundra). Combina gameplay tipo simulator con lecciones de biología, anatomía animal y conservación de especies.

**Motivación:**
- **Misión de rescate:** Los jugadores sienten que están salvando vidas animales reales
- **Progresión veterinaria visible:** Comienzan tratando animales pequeños, avanzan a especies grandes y exóticas
- **Descubrimiento de especies:** Desbloquean animales raros (tigres de bengala, ballenas azules, pandas gigantes)
- **Curiosidad médica:** Entienden cómo funcionan los cuerpos de diferentes especies
- **Competencia global:** Leaderboard de veterinarios (más rescates, mayor tasa de éxito)

**Mecánica Principal:**
Los jugadores son veterinarios en una clínica móvil que viaja a diferentes ecosistemas. Cada misión presenta un animal herido que requiere diagnóstico (examinar, tomar muestras, hacer pruebas) y tratamiento (cirugía, medicación, rehabilitación). Las especies progresan: nivel 1-5 (mamíferos pequeños: conejos, ardillas, gatos), nivel 6-10 (aves y reptiles: águilas, serpientes, tortugas), nivel 11-15 (especies grandes: leones, osos, delfines), nivel 16-20 (exóticas y en peligro: tigres, ballenas, pandas). Los jugadores tienen herramientas veterinarias: estetoscopio, termómetro, microscopio, rayos X, equipo quirúrgico. Hay modo historia (detener epidemia animal global) y modo sandbox (rescate libre sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar herramientas, examinar partes del cuerpo del animal
- **Arrastrar (Drag):** Mover herramientas al cuerpo, arrastrar muestras al microscopio
- **Pinch:** Zoom en el cuerpo del animal para ver detalles (órganos, heridas)
- **Dos dedos (drag):** Pan/mover la vista del cuerpo
- **Tap rápido:** Realizar acciones repetitivas (inyectar medicamento, limpiar herida)
- **Swipe horizontal:** Cambiar entre vista de examen, diagnóstico, tratamiento
- **Gestos complejos:**
  - Shake del dispositivo = "calmar" animal (cuando está agresivo)
  - Dibujo de incisión = cirugía (dibujar línea para hacer corte)
  - Doble tap en órgano = información detallada (anatomía, función)
  - Arrastrar herramienta al cuerpo = aplicar tratamiento (estetoscopio al corazón)
- **Multitouch hasta 4 dedos:** Seleccionar múltiples herramientas para procedimientos complejos
- **Escribir:** Escribir diagnóstico y notas médicas en historial digital

**Accesibilidad:**
- Herramientas con iconos grandes (70x70px mínimo) y etiquetas claras
- Partes del cuerpo con highlighting interactivo (al tocar se ilumina)
- Voice assistant guía procedimientos ("Ahora examina el corazón con el estetoscopio")
- Modo "Easy Mode" con pistas y herramientas preseleccionadas
- Haptic feedback para procedimientos (vibración al inyectar, suave al limpiar)
- Color coding por tipo de herramienta (diagnóstico=azul, tratamiento=verde, cirugía=rojo)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado del cuerpo animal (anatomía interactiva)
  - `<canvas>` para vista microscópica (células, bacterias)
  - `<canvas>` para rayos X (huesos, órganos)
  - `<video>` para tutoriales de procedimientos veterinarios
  - `<input type="text">` para notas médicas
- **JavaScript:**
  - Engine de juego: Phaser 3 (renderizado de cuerpo animal)
  - Anatomía interactiva: Custom engine para órganos, sistemas (circulatorio, respiratorio, digestivo)
  - Diagnóstico: Custom algorithm para síntomas → enfermedad
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para historial de pacientes (miles de animales)
  - Animaciones: GSAP para procedimientos (cirugía, inyecciones)
  - Storage: IndexedDB para guardar historial médico y progreso
- **CSS:**
  - Grid layout para panel de herramientas (12 columnas responsivo)
  - CSS Transforms para zoom del cuerpo (transform-origin: center)
  - CSS Animations para procedimientos (needle animation, bandage wrap)
  - Backdrop-filter para blur de diagnóstico superpuesto
  - CSS Variables para theming dinámico (cambiar colores por ecosistema)
  - Flexbox para contenedores de historial
- **Otros:**
  - Web Audio API: Sonidos de animales (latidos, respiración, vocalizaciones)
  - Touch Events API: Multi-touch para procedimientos complejos
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar historial completo (miles de pacientes, diagnósticos)
  - Service Workers: PWA para jugar offline (modo sandbox sin rescates)
  - Canvas API: Manipular píxeles para efectos de cirugía y tratamiento
  - Web Workers: Simulación de diagnóstico sin bloquear UI

**Características Visuales:**
- **Paleta de colores:**
  - Cuerpo animal: Realista con variaciones por especie (tigrado, moteado, sólido)
  - Órganos: Colores anatómicos (corazón=rojo, pulmones=rosa, hígado=marrón)
  - Herramientas: Color coding (diagnóstico=azul, tratamiento=verde, cirugía=rojo)
  - UI: Clínico semi-transparente (#FFFFFF opacity 0.85, backdrop-filter blur 8px)
  - Ecosistemas: Fondos temáticos (selva=verde, océano=azul, desierto=amarillo)
- **Animaciones:**
  - Animal respirando: Subida/bajada suave del pecho (1s, 20 respiraciones/min)
  - Latido del corazón: Pulso rítmico (60-120 BPM por especie)
  - Inyección: Aguja anima hacia el cuerpo (0.3s)
  - Cirugía: Incisión con efecto de corte (0.5s)
  - Curación: Herida se cierra con animación de skin healing (1.5s)
- **Feedback visual:**
  - Diagnóstico correcto: Borde verde brillante, checkmark (0.3s)
  - Diagnóstico incorrecto: Borde rojo pulsante, mensaje de error
  - Animal curado: Flash blanco + animación de "feliz" (colas moviéndose)
  - Procedimiento completado: Modal con estadísticas (tiempo, precisión, estrellas 1-5)
- **Personalización:**
  - 100+ especies animales (mamíferos, aves, reptiles, anfibios, peces)
  - 50+ herramientas veterinarias (estetoscopio, termómetro, microscopio, rayos X, kit de cirugía)
  - 20+ ecosistemas (selva tropical, océano profundo, desierto, tundra, sabana)
  - Avatar de veterinario con 40+ combinaciones (bata blanca, estetoscopio, gafas)
  - Skins de clínica (moderna, vintage, móvil, hospital)

**Audio:**
- **Efectos de sonido:**
  - Latido del corazón: Pulsing thump (60-120 BPM, varía por especie)
  - Respiración: Suave whoosh (20-40 veces/min)
  - Inyección: Plink de aguja (150ms)
  - Cirugía: Snip de bisturí (200ms)
  - Animal vocalización: Sonidos reales (maullido, ladrido, rugido, chillido)
  - Herramienta seleccionada: Click satisfactorio (50ms)
  - Rescate completado: Happy chime (C4-E4-G4-C5, 1s)
- **Música:**
  - Clínica idle: Ambient calm (soft piano + pads, 70 BPM)
  - Examen: Gentle investigation (minimal strings, 80 BPM)
  - Tratamiento urgente: Tense (cello + drums, 90 BPM)
  - Éxito: Inspirational (uplifting piano, 100 BPM)
  - Ecosistema específico: Música temática (selva=percusión tropical, océano=waves + flutes)
- **Voz:**
  - Tutorial: Voz de veterinaria experimentada ("Bienvenido a Wildlife Rescue. Primera misión: curar un conejo")
  - Hint: Voz amigable ("Usa el estetoscopio para escuchar el corazón")
  - Alerta: Voz de emergencia ("¡El paciente está crítico! ¡Actúa rápido!")
- **Audio espacial:** Sonidos 3D para feedback de posición (latido más fuerte al acercarse al corazón)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de cuerpo animal (máximo 50 órganos)
  - Latencia: <50ms para respuesta de herramientas (feedback instantáneo)
  - Animación de respiración: 60 FPS smooth animation
  - Memoria máxima: 200MB (incluye 100 especies, 50 herramientas, 20 ecosistemas)
  - Diagnóstico: <300ms para análisis de síntomas
- **Riesgos técnicos:**
  - Anatomía realista vs. jugable: Simplificar modelos complejos (no usar datos médicos reales)
  - Balance de dificultad: Diagnósticos deben ser desafiantes pero no frustrantes
  - Optimización de animación: 100+ especies con diferentes cuerpos requieren assets optimizados
  - Precisión médica: Simplificar procedimientos reales (no enseñar cirugía real a niños)

**Valor Educativo:**
- **Biología real:** Los niños aprenden anatomía animal, sistemas corporales, enfermedades comunes
- **Empatía con animales:** Desarrollan compasión y respeto por la vida animal
- **Habilidades de diagnóstico:** Aprenden a observar síntomas, hacer pruebas, concluir
- **Vocabulario veterinario:** Aprenden términos: diagnóstico, síntoma, tratamiento, cirugía, rehabilitación, especie
- **Conservación de especies:** Entienden la importancia de proteger animales en peligro
- **Responsabilidad:** Entienden que sus acciones (tratamiento correcto) impactan la vida del animal
- **Colaboración:** Modo cooperative donde 2-4 veterinarios tratan pacientes juntos

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Rendering de cuerpo animal
- [Vet Games - Veterinary simulations](https://www.vetgames.com/) - Juegos educativos de veterinaria
- [Wild Earth - Wildlife adventure](https://store.steampowered.com/app/4650/Wild_Earth/) - Rescate de animales
- [National Geographic Kids - Animal facts](https://kids.nationalgeographic.com/) - Referencia de especies
- [Web Audio API - Animal sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos animales
- [PWA - Offline rescues](https://web.dev/offline/) - PWA para rescates sin internet

---

#### Idea #35: Geography Explorer: World Tour

**Concepto:**
Juego de geografía educativo donde los jugadores viajan virtualmente por el mundo, descubren países, culturas, capitales, geografía física y monumentos históricos. Combina aventura tipo Pokemon GO con lecciones de geografía, cultura global y mapas interactivos.

**Motivación:**
- **Exploración infinita:** Cada país es único con cultura, comida, monumentos, geografía
- **Colección de sellos:** Desbloquear sellos de todos los países visitados (196 países)
- **Descubrimiento cultural:** Aprender sobre tradiciones, idiomas, gastronomía, música
- **Competencia global:** Leaderboard de exploradores (más países visitados, mayor conocimiento)
- **Logros de viajero:** Badges por continentes completados ("Maestro de Asia", "Explorador de África")

**Mecánica Principal:**
Los jugadores son exploradores globales que inician con un globo aerostático y viajan por un mapa interactivo del mundo. Cada misión es visitar un país: encontrar capitales, identificar monumentos, responder quizzes de geografía, aprender sobre cultura. Los países progresan: nivel 1-5 (América del Sur: Brasil, Argentina, Chile...), nivel 6-10 (Europa: Francia, España, Italia...), nivel 11-15 (Asia: China, Japón, India...), nivel 16-20 (África y Oceanía: Egipto, Kenia, Australia...). Los jugadores tienen herramientas de viaje: globo aerostático, tren, avión, barco. Hay modo historia (completar el "Grand Tour" de todos los continentes) y modo sandbox (viaje libre sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar país, monumento, herramienta de viaje
- **Arrastrar (Drag):** Mover el mapa, arrastrar vehículo de viaje
- **Pinch:** Zoom en el mapa (0.5x-10x) para ver de cerca o todo el mundo
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap largo (Long press):** Ver información detallada del país (capital, población, idioma, moneda)
- **Swipe horizontal:** Cambiar entre vista de mapa, vista de país, quizzes
- **Gestos complejos:**
  - Shake del dispositivo = "turbo travel" (viajar más rápido entre países)
  - Dibujo de ruta = planear viaje (dibujar línea y el vehículo la sigue)
  - Doble tap en monumento = fotografía virtual (desbloquear estampilla)
  - Arrastrar vehículo a destino = viaje directo (shortcut)
- **Multitouch hasta 3 dedos:** Selección múltiple de países para tours masivos
- **Escribir:** Escribir notas de viaje en diario personal

**Accesibilidad:**
- Mapa con zoom generous (min 150px de pantalla = país pequeño)
- Países con etiquetas grandes (min 40px) y banderas claras
- Voice assistant explica país ("Francia es conocida por la Torre Eiffel y el arte")
- Modo "Hints" que muestra pistas progresivas en quizzes
- Haptic feedback para eventos (vibración al descubrir país nuevo)
- Color coding por continente (América=verde, Europa=azul, Asia=rojo, África=naranja, Oceanía=púrpura)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para mapa mundial interactivo (proyección Mercator)
  - `<canvas>` para renderizado de monumentos 3D (simulado con 2D)
  - `<video>` para documentales cortos de países
  - `<input type="text">` para notas de viaje
  - `<details>/<summary>` para secciones colapsables de información
- **JavaScript:**
  - Map engine: Leaflet.js o D3.js (mapa interactivo con capas)
  - Geografía: GeoJSON con datos de países (fronteras, capitales, población)
  - Game engine: Phaser 3 (renderizado de monumentos)
  - Quizzes: Custom algorithm para preguntas de geografía con dificultad adaptativa
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del explorador (países visitados, sellos)
  - Storage: IndexedDB para guardar diario de viaje y sellos coleccionados
  - Animaciones: GSAP para transiciones entre países (zoom, fly)
- **CSS:**
  - CSS Grid para layout de herramientas (panel izquierdo=map, derecho=info)
  - CSS Transforms para zoom del mapa (transform-origin: cursor)
  - CSS Animations para efectos de viaje (fly animation, zoom in)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming dinámico (cambiar colores por continente)
  - Flexbox para contenedores de quizzes
- **Otros:**
  - Web Audio API: Sonidos de viaje (motores, viento, música tradicional)
  - Geolocation API: Opcional para viajar virtualmente a ubicación real del jugador
  - Touch Events API: Multi-touch para pan y zoom del mapa
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar 196 países, sellos, diario de viaje (offline play)
  - Service Workers: PWA para viajar offline (modo sandbox sin datos geográficos)
  - Canvas API: Manipular píxeles para efectos de mapa y monumentos

**Características Visuales:**
- **Paleta de colores:**
  - Mapa mundial: Océanos azules (#4A90E2), tierra verdes (#7ED321), montañas marrones (#8B4513)
  - Países: Colores por continente (América=verde, Europa=azul, Asia=rojo, África=naranja, Oceanía=púrpura)
  - Monumentos: Colores realistas por material (Torre Eiffel=metal gris, Gran Pirámide=arena dorada)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.85, backdrop-filter blur 8px)
  - Sellos: Estampillas coloridas con diseño único por país
- **Animaciones:**
  - Viaje entre países: Fly animation (zoom out → zoom in, 2s)
  - Descubrir país: Flash dorado + estampilla animada (1s)
  - Monumento aparecer: Scale up + glow (0.5s)
  - Quiz correcto: Confetti de banderas nacionales (200 particles, 1.5s)
  - Completar continente: Fanfare del continente (2s)
- **Feedback visual:**
  - País visitado: Icono de estampilla verde en mapa
  - Quiz correcto: Borde verde brillante, +XP
  - Quiz incorrecto: Borde rojo pulsante, mensaje de error
  - Monumento fotografiado: Efecto de flash de cámara (0.3s)
  - Sello desbloqueado: Modal con estampilla + información del país
- **Personalización:**
  - 196 países con datos completos (capital, población, idioma, moneda, cultura, gastronomía)
  - 50+ monumentos históricos (Torre Eiffel, Gran Pirámide, Gran Muralla, Taj Mahal, Machu Picchu)
  - 20+ vehículos de viaje (globo aerostático, tren, avión, barco, camioneta 4x4)
  - Avatar de explorador con 60+ combinaciones (sombrero, ropa, accesorios por continente)
  - Diario de viaje personalizable con fotos y notas
  - Skins de mapa (satelital, político, físico, temático)

**Audio:**
- **Efectos de sonido:**
  - Viaje: Whoosh de viento (200-400ms)
  - Descubrir país: Triunfante chime (C4-E4-G4-C5, 1s)
  - Monumento aparecer: Magia ascendente (G4-B4-D5, 300ms)
  - Quiz correcto: Ding satisfactorio (C5, 150ms)
  - Quiz incorrecto: Buzzer descendente (E2-C2, 150ms)
  - Foto tomada: Click de cámara (100ms)
  - Sellos: Satisfying stamp sound (200ms)
- **Música:**
  - Mapa mundial: Upbeat travel theme (orchestral + ethnic instruments, 100 BPM)
  - Continente específico: Música temática (América=latina, Europa=clásica, Asia=oriental, África=tropical, Oceanía=oceánica)
  - Quiz mode: Tense investigation (minimal strings, 80 BPM)
  - Éxito: Celebratory (trumpets + drums, 120 BPM)
- **Voz:**
  - Tutorial: Voz de guía de viaje entusiasta ("¡Bienvenido a World Tour! Vamos a visitar Francia")
  - Hint: Voz amigable ("La capital de Francia es París")
  - Descubrimiento: Voz de emoción ("¡Has descubierto un nuevo país! ¡Aquí está tu sello!")
- **Audio espacial:** Sonidos 3D para feedback de viaje (viento desde la izquierda suena en canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 90-110 horas (3-4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de mapa (máximo 196 países)
  - Latencia: <100ms para zoom y pan del mapa (feedback instantáneo)
  - Animación de viaje: Smooth zoom out/in sin stutter
  - Memoria máxima: 180MB (incluye 196 países, 50 monumentos, 20 vehículos)
  - Quizzes: <200ms para generar preguntas de geografía
- **Riesgos técnicos:**
  - Datos geográficos precisos: 196 países con fronteras precisas requieren GeoJSON optimizado
  - Balance de dificultad: Quizzes deben ser educativos pero no frustrantes
  - Optimización de mapa: Zoom extremo (10x) puede consumir mucha memoria
  - Traducción cultural: Información de países debe ser culturalmente respetuosa y precisa

**Valor Educativo:**
- **Geografía real:** Los niños aprenden países, capitales, continentes, geografía física
- **Cultura global:** Aprenden sobre tradiciones, idiomas, gastronomía, música de diferentes países
- **Vocabulario geográfico:** Aprenden términos: capital, frontera, continente, océano, monumento, población, idioma, moneda
- **Apertura cultural:** Explorar diferentes culturas fomenta respeto y curiosidad
- **Memoria espacial:** Asocian países con ubicaciones geográficas
- **Habilidades de navegación:** Entienden cómo leer mapas, coordenadas, direcciones
- **Colaboración:** Modo cooperative donde 2-4 exploradores viajan juntos

**Referencias e Inspiración:**
- [Leaflet.js - Interactive maps](https://leafletjs.com/) - Mapa interactivo web
- [D3.js - Data visualization](https://d3js.org/) - Visualización geográfica
- [GeoCountries - Country data](https://github.com/samayo/country-json/) - Datos de países (JSON)
- [GeoJSON - Map data format](https://geojson.org/) - Formato de datos geográficos
- [Pokémon GO - AR exploration](https://www.pokemongo.com/) - Inspiración para exploración
- [National Geographic - World facts](https://www.nationalgeographic.com/) - Referencia de geografía
- [Web Audio API - Travel sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de viaje
- [PWA - Offline exploration](https://web.dev/offline/) - PWA para explorar sin internet

---

#### Idea #36: Entrepreneur Tycoon: Business Builder

**Concepto:**
Juego de emprendimiento simulado donde los jugadores crean y gestionan sus propias empresas, tomando decisiones de negocio, invirtiendo en marketing, contratar empleados y escalar operaciones. Combina tycoon game con lecciones de economía, finanzas y gestión empresarial.

**Motivación:**
- **Poder de crear:** Los jugadores sienten que construyen su imperio desde cero
- **Progresión empresarial visible:** Comienzan con pequeño negocio (lemonade stand), avanzan a corporación multinacional
- **Gestión de dinero real:** Entienden inversión, ROI, ganancias, pérdidas, presupuesto
- **Competencia global:** Leaderboard de empresarios (mayor valor de empresa, más empleados)
- **Toma de decisiones estratégicas:** Cada decisión (contratar, invertir, expandir) tiene impacto

**Mecánica Principal:**
Los jugadores son emprendedores que inician con $1,000 y un pequeño negocio (pueden elegir entre 10: tienda online, restaurante, tech startup, boutique de moda, consultoría, etc.). Cada misión es un año fiscal donde toman decisiones: contratar empleados, invertir en marketing, lanzar productos, expandir a nuevos mercados. Las empresas progresan: nivel 1-5 (startup: 1-5 empleados, < $100K revenue), nivel 6-10 (SME: 6-50 empleados, $100K-$1M), nivel 11-15 (corporación: 51-500 empleados, $1M-$10M), nivel 16-20 (multinacional: 500+ empleados, >$10M). Los jugadores tienen herramientas de negocio: balance sheet, proyecciones financieras, análisis de mercado, CRM. Hay modo historia (construir empresa unicornio) y modo sandbox (tycoon libre sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar decisión, contratar empleado, invertir en marketing
- **Arrastrar (Drag):** Asignar presupuesto a categorías, arrastrar productos a mercado
- **Pinch:** Zoom en gráficos financieros (ROI, revenue, expenses)
- **Dos dedos (drag):** Pan/mover la vista de la empresa
- **Tap rápido:** Contratar múltiples empleados (tap en botón de hire)
- **Swipe horizontal:** Cambiar entre vista de empresa, finanzas, empleados, mercado
- **Gestos complejos:**
  - Shake del dispositivo = "shake up" (reorganizar estructura de la empresa)
  - Dibujo de gráfico = proyección financiera (dibujar línea de trend)
  - Doble tap en empleado = ver detalles (habilidades, salario, rendimiento)
  - Arrastrar empleado a departamento = reasignar (marketing → ventas)
- **Multitouch hasta 3 dedos:** Selección múltiple de decisiones para batch actions
- **Escribir:** Nominar productos, escribir emails a empleados, crear campañas de marketing

**Accesibilidad:**
- Gráficos con zoom generous (min 100px de pantalla = datos importantes)
- Botones de decisión grandes (min 50x50px) con iconos claros
- Voice assistant explica conceptos ("El ROI es el retorno de inversión")
- Modo "Easy Mode" con decisiones preseleccionadas y más presupuesto
- Haptic feedback para decisiones (vibración al contratar, suave al invertir)
- Color coding por tipo de decisión (contratar=verde, invertir=azul, expandir=naranja)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de la empresa (oficina, empleados)
  - `<canvas>` para gráficos financieros (líneas, barras, pie charts)
  - `<canvas>` para visualización de mercado (competidores, share)
  - `<video>` para tutoriales de conceptos de negocio
  - `<input type="text">` para escribir emails y campañas
  - `<input type="range">` para sliders de presupuesto
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de empresa y empleados)
  - Finanzas: Custom algorithm para ROI, profit margin, cash flow
  - Simulación de mercado: Agent-based model para competidores y clientes
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado de la empresa (finanzas, empleados, productos)
  - Charts: Chart.js para visualización de datos financieros
  - Animaciones: GSAP para transiciones entre años fiscales
  - Storage: IndexedDB para guardar historial de decisiones (10+ años)
- **CSS:**
  - Grid layout para panel de decisiones (12 columnas responsivo)
  - CSS Transforms para zoom de gráficos (transform-origin: center)
  - CSS Animations para feedback de decisiones (scale up, flash)
  - Backdrop-filter para blur de estadísticas superpuestas
  - CSS Variables para theming dinámico (cambiar colores por industria)
  - Flexbox para contenedores de empleados
- **Otros:**
  - Web Audio API: Sonidos de oficina (teléfono, teclado, gente hablando)
  - Touch Events API: Multi-touch para selección múltiple
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar 10+ años de historial de empresa (offline play)
  - Service Workers: PWA para gestionar empresa offline (modo sandbox sin eventos de mercado)
  - Canvas API: Manipular píxeles para efectos de gráficos y visualización

**Características Visuales:**
- **Paleta de colores:**
  - Oficina: Tonos profesionales (grises #E0E0E0, azules #2196F3, blancos #FFFFFF)
  - Empleados: Colores por departamento (ventas=verde, marketing=azul, finanzas=naranja)
  - Gráficos financieros: Colores estándar (revenue=verde, expenses=rojo, profit=azul)
  - UI: Profesional semi-transparente (#FFFFFF opacity 0.85, backdrop-filter blur 8px)
  - Industrias: Colores temáticos (tech=azul, retail=naranja, food=verde, fashion=rosa)
- **Animaciones:**
  - Contratar empleado: Empleado aparece en oficina con scale up (0→1x, 0.5s)
  - Invertir en marketing: Campaign banner anima (slide in, 0.3s)
  - Año fiscal completado: Celebración con confetti de dinero (200 particles, 2s)
  - Ganar dinero: Counter animation de revenue ($1,000 → $1,000,000, 1s)
  - Perder dinero: Shake rojo + descenso de gráfico (0.5s)
- **Feedback visual:**
  - Decisión correcta: Borde verde brillante, +ROI
  - Decisión incorrecta: Borde rojo pulsante, mensaje de error ("¡Gastaste demasiado en marketing!")
  - Empleado contratado: Modal con detalles y stats
  - Logro desbloqueado: Modal con escudo dorado + confetti (1.5s)
- **Personalización:**
  - 10+ industrias (tech, retail, food, fashion, consulting, media, healthcare, education, finance, manufacturing)
  - 50+ productos a lanzar (por industria)
  - 30+ tipos de empleados (CEO, CFO, CTO, marketing manager, sales rep, developer, designer)
  - Avatar de CEO con 50+ combinaciones (traje, accesorios, oficina)
  - Diseño de oficina personalizable (layout, colores, plantas, arte)

**Audio:**
- **Efectos de sonido:**
  - Contratar: Ding ascendente (C4-E4, 150ms)
  - Invertir: Ching de dinero (C5, 100ms)
  - Año completado: Cash register (cha-ching, 200ms)
  - Ganancia: Upbeat whoosh (200-400ms)
  - Pérdida: Buzzer descendente (E2-C2, 200ms)
  - Lanzar producto: Drumroll + fanfare (1s)
  - Logro: Fanfare de 8 notas (C4-E4-G4-B5-C6-E6-G6-C7, 2s)
- **Música:**
  - Oficina idle: Ambient productive (soft piano + typing sounds, 80 BPM)
  - Decisiones: Uplifting business (guitar + strings, 100 BPM)
  - Año fiscal: Intense suspense (strings crescendo, 80→110 BPM)
  - Éxito: Celebratory orchestral (trumpets + drums, 120 BPM)
  - Industria específica: Música temática (tech=electronic, retail=upbeat pop, food=latin, fashion=chic)
- **Voz:**
  - Tutorial: Voz de mentor de negocios ("¡Bienvenido a Entrepreneur Tycoon! Vamos a construir tu imperio")
  - Hint: Voz amigable ("Contratar más empleados aumentará productividad")
  - Alerta: Voz de preocupación ("¡Cuidado! Estás gastando más de lo que ganas")
- **Audio espacial:** Sonidos 3D para feedback de posición (teléfono cerca suena más fuerte)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de oficina (máximo 100 empleados visibles)
  - Latencia: <50ms para respuesta de decisiones (feedback instantáneo)
  - Simulación de mercado: <100ms para actualizar estado de competidores
  - Memoria máxima: 200MB (incluye 10 industrias, 50 productos, 30 tipos de empleados)
  - Cálculos financieros: <200ms para calcular ROI, profit margin, cash flow
- **Riesgos técnicos:**
  - Balance de dificultad: El juego debe ser educativo pero no frustrante
  - Realismo vs. jugable: Simplificar conceptos financieros complejos (no usar modelos económicos reales)
  - Simulación de mercado: Agent-based model puede ser computacionalmente costoso
  - Gestión de state: 10+ años de historial con miles de decisiones requiere storage optimizado

**Valor Educativo:**
- **Economía real:** Los niños aprenden ROI, inversión, presupuesto, ganancia, pérdida, cash flow
- **Emprendimiento:** Entienden cómo crear y gestionar una empresa
- **Habilidades de decisión:** Aprenden a tomar decisiones informadas basadas en datos
- **Vocabulario empresarial:** Aprenden términos: revenue, expenses, profit, ROI, marketing, employees, budget, investment
- **Pensamiento estratégico:** Planificación a largo plazo (invertir hoy para beneficios futuros)
- **Responsabilidad financiera:** Entienden que el dinero tiene valor y debe gestionarse cuidadosamente
- **Colaboración:** Modo cooperative donde 2-4 socios gestionan una empresa compartida

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Rendering de oficina
- [Chart.js - Graphing library](https://www.chartjs.org/) - Visualización de datos financieros
- [RollerCoaster Tycoon - Tycoon game](https://store.steampowered.com/app/307700/RollerCoaster_Tycoon_DeLuxe/) - Inspiración para tycoon gameplay
- [Capitalism Lab - Business simulation](https://www.capitalismlab.com/) - Simulación de negocios realista
- [Startup Company - Business sim](https://store.steampowered.com/app/606800/Startup_Company/) - Inspiración para startup mechanics
- [Khan Academy - Finance lessons](https://www.khanacademy.org/economics-finance-domain) - Referencia de finanzas
- [Web Audio API - Office sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de oficina
- [PWA - Offline tycoon](https://web.dev/offline/) - PWA para jugar sin internet

---

## Progreso
- **Total Ideas:** 36/100
- **Lotes Completados:** 9/25
- **Última Actualización:** 2026-02-17 11:04 UTC
- **Total Ideas:** 32/100
- **Lotes Completados:** 8/25
- **Última Actualización:** 2026-02-17 10:49 UTC

---

**Archivo creado:** 2026-02-17 01:02 UTC
**Actualizado:** 2026-02-17 10:20 UTC
**Agente:** Blockito 🧱
#### Idea #7: History Detective: Time Travel Mysteries

**Concepto:**
Juego de resolución de misterios históricos donde los jugadores viajan en el tiempo para investigar eventos importantes, descubrir verdades ocultas y resolver crímenes históricos. Cada caso es un enigma basado en hechos reales que requiere investigación, deducción y conocimiento histórico.

**Motivación:**
- **Curiosidad histórica:** Descubrir secretos y verdades ocultas de eventos históricos reales
- **Misterio y deducción:** Resolver casos como detective sherlockiano con pistas y evidencia
- **Viaje temporal:** Explorar diferentes épocas (antiguo Egipto, Roma imperial, Revolución Francesa, etc.)
- **Logros de investigador:** Badges por casos resueltos ("Sherlock de Roma", "Maestro del Renacimiento")
- **Competencia global:** Leaderboard de detectives con mejor tiempo de resolución

**Mecánica Principal:**
Los jugadores son agentes del "Bureau of Time Mysteries" que viajan a diferentes épocas para resolver casos. Cada caso tiene 3-5 escenas con NPCs históricos, pistas escondidas y puzzles lógicos. Deben recolectar evidencia, interrogar testigos, analizar documentos antiguos y deducir la verdad. El sistema de deducción permite conectar pistas (drag & drop) para formar teorías. Hay modo historia (30+ casos主线) y modo libre (investigar casos aleatorios).

**Interacción Móvil:**
- **Tap simple:** Seleccionar objetos, NPCs, pistas, evidencia
- **Arrastrar (Drag):** Conectar pistas en la tabla de deducción, mover evidencia al inventario
- **Pinch:** Zoom en escenas para ver detalles finos de evidencia
- **Dos dedos (drag):** Pan/mover la vista de la escena
- **Tap largo (Long press):** Ver información extendida de objetos históricos (contexto, fechas, importancia)
- **Swipe horizontal:** Cambiar entre escenas del caso, ver inventario, abrir mapa temporal
- **Gestos complejos:**
  - Shake del dispositivo = ver pista (costa tiempo/puntos)
  - Dibujo de lupa = activar modo búsqueda de evidencia oculta
  - Doble tap en NPC = diálogo profundo (preguntas adicionales)
  - Arrastrar evidencia a NPC = mostrar objeto para interrogar
- **Escribir:** Notebook de detective para escribir notas, conectar pistas, formular teorías
- **Multitouch hasta 4 dedos:** Selección múltiple de pistas para conexiones complejas

**Accesibilidad:**
- Objetos interactivos con outlines brillantes (verde=disponible, rojo=no disponible)
- Texto con tamaños generosos (min 16px) y alto contraste
- Voice assistant explica contexto histórico ("Estamos en Roma en el año 44 a.C.")
- Modo "Easy Mode" con pistas automáticas y menos distracciones
- Haptic feedback para feedback táctil (vibración al encontrar pista, suave para navegación)
- Color coding por tipo de evidencia (documento=azul, objeto=naranja, testimonio=verde)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de escenas históricas (isométrico 2D)
  - `<canvas>` para mapa temporal de épocas
  - `<canvas>` para tabla de deducción (conexiones entre pistas)
  - `<video>` para cutscenes animados de eventos históricos
  - `<input type="text">` para notebook de detective
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de escenas, sistema de click/tap)
  - Framework UI: Vue.js o React (componentes reactivos)
  - State management: Vuex para progreso del detective (casos resueltos, evidencia, notebook)
  - Data: JSON con 30+ casos históricos, NPCs, pistas, soluciones
  - Sistema de deducción: Custom algorithm para conectar pistas y validar teorías
  - Animaciones: GSAP para transiciones entre escenas
  - Storage: IndexedDB para guardar progreso (30+ casos, evidencia, notas)
- **CSS:**
  - Grid layout para escenas históricas (10x10 grid responsivo)
  - CSS Flexbox para contenedores de UI (inventario, deducción, diálogo)
  - CSS Transforms para zoom en escenas (transform-origin: center)
  - CSS Animations para feedback de interacción (pulse, glow, shake)
  - CSS Variables para theming por época (Egipto=dorado, Roma=mármol, etc.)
  - Backdrop-filter para blur de paneles superpuestos
- **Otros:**
  - Web Audio API: Sonidos históricos ambientales (campanas, mercados, batallas)
  - Touch Events API: Multi-touch para arrastrar múltiples pistas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar 30+ casos completos con evidencia y notas
  - Service Workers: PWA para investigar offline (modo sandbox sin leaderboard)
  - Canvas API: Renderizar escenas isométricas y elementos interactivos
  - Web Speech API: Comandos de voz para navegación por menús

**Características Visuales:**
- **Paleta de colores:**
  - Escenas: Tonos históricos por época (Egipto=dorado/arena, Roma=mármol blanco/gris, Medievo=marrón/tierra)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, backdrop-filter blur 5px)
  - Evidencia: Colores por tipo (documento=papel, objeto=madera, testimonio=burbuja de diálogo)
  - Mapa temporal: Gradiente de épocas (antiguo=dorado→moderno=azul)
- **Animaciones:**
  - Viaje temporal: Wipe effect con reloj de arena (1s)
  - Encontrar pista: Flash dorado + icono de lupa (0.5s)
  - Conectar pistas: Línea animada entre evidencia (0.3s)
  - Teoría correcta: Modal de deducción con brillo dorado (1s)
  - Caso resuelto: Confetti de pergaminos antiguos (200 particles, 2s)
- **Feedback visual:**
  - Pista disponible: Objeto brilla sutilmente, icono de interrogación flotante
  - Evidencia recolectada: Se añade al inventario con animación de arrastre
  - Teoría correcta: Checkmark verde + texto "Deducción correcta"
  - Teoría incorrecta: Shake rojo + texto "Falta conectar más pistas"
  - Caso completado: Modal con resumen, estrellas (1-5), desbloqueos
- **Personalización:**
  - 30+ épocas históricas (Egipto antiguo, Roma imperial, Edad Media, Renacimiento, Revolución Industrial, etc.)
  - Avatar de detective con 50+ combinaciones (ropa, lupa, insignias, sombrero)
  - Notebook con 20+ fondos (pergamino antiguo, cuadriculado, mármol)
  - Badges y medallas por casos resueltos (30+ insignias únicas)
  - Temas visuales por época (estilo artístico único: jeroglíficos, frescos, pintura al óleo)

**Audio:**
- **Efectos de sonido:**
  - Click en objeto: Tap suave (50ms)
  - Encontrar pista: Chime ascendente (C4-E4-G4, 200ms)
  - Conectar pistas: Whoosh suave (150ms)
  - Teoría correcta: Ding dorado brillante (C5-E5-G5-C6, 300ms)
  - Viaje temporal: Time travel sound (whirring + fade, 1s)
  - Caso resuelto: Fanfare orquestal (6 notas, 1.5s)
- **Música:**
  - Mapa temporal: Ambient misterioso con campanas de reloj (80 BPM)
  - Egipto antiguo: Instrumentos exóticos, flautas, percusión egipcia (90 BPM)
  - Roma imperial: Lira, corneta, percusión romana (100 BPM)
  - Edad Media: Lute, flauta dulce, gaita medieval (85 BPM)
  - Renacimiento: Violín, clavecín, trompeta (95 BPM)
  - Resolución de caso: Tense orchestral con crescendo (70→100 BPM)
- **Voz:**
  - Tutorial: Voz de detective experimentado ("Bienvenido al Bureau of Time Mysteries")
  - NPC histórico: Voz con acento apropiado a la época (César con acento romano)
  - Pista: Voz de asistente digital ("Quizás debas revisar el documento...")
- **Audio espacial:** Sonidos 3D para inmersión (NPC cerca suena más fuerte)

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 90-110 horas (4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en escenas isométricas con 100+ objetos interactivos
  - Latencia: <100ms para respuesta de tap (feedback instantáneo)
  - Escenas máximas: 5 por caso (30 casos = 150 escenas)
  - Memoria máxima: 180MB (incluye sprites de 30 épocas, NPCs, evidencia)
  - Sistema de deducción: <200ms para validar teoría
- **Riesgos técnicos:**
  - Precisión histórica vs. jugable: Simplificar eventos complejos para niños
  - Balance de dificultad: Casos muy difíciles pueden frustrar
  - Gestión de state: Guardar 30+ casos con evidencia y notas en IndexedDB
  - Optimización de escenas isométricas en móviles de gama baja

**Valor Educativo:**
- **Historia real:** Los niños aprenden eventos históricos importantes (30+ épocas, 100+ eventos)
- **Pensamiento crítico:** Desarrollo de habilidades de deducción y análisis de evidencia
- **Investigación:** Aprenden a recolectar, analizar y conectar información
- **Geografía y cultura:** Exploran diferentes épocas y lugares del mundo
- **Vocabulario histórico:** Aprenden términos: antiguo, imperio, renacimiento, revolución, detective
- **Empatía histórica:** Entienden perspectivas de personas de diferentes épocas
- **Memoria y atención:** Deben recordar pistas y detalles para resolver casos

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Renderizado isométrico
- [Sher Holmes Interactive - Detective game](https://www.sherlockgame.com/) - Inspiración para mecánica de deducción
- [Hidden Object Games - Mystery investigation](https://www.bigfishgames.com/) - Búsqueda de pistas ocultas
- [Assassin's Creed Discovery Mode - Historical exploration](https://assassinscreed.ubisoft.com/) - Exploración histórica
- [Where in the World is Carmen Sandiego? - Geography/history game](https://www.carmensandiego.com/) - Inspiración para viaje temporal
- [Khan Academy World History](https://www.khanacademy.org/humanities/world-history) - Referencia histórica
- [MDN Web Docs - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - Renderizado de escenas
- [Web Audio API - Historical sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos históricos

---

#### Idea #8: Math Quest: Number Kingdom

**Concepto:**
Aventura de matemáticas donde los jugadores exploran un reino mágico poblado por números y símbolos matemáticos. Resuelven puzzles matemáticos para desbloquear áreas, vencer monstruos y restaurar el equilibrio del Reino Numérico. Combina RPG clásico con aprendizaje de matemáticas progresivo.

**Motivación:**
- **Progresión RPG:** Subir de nivel, desbloquear habilidades matemáticas, mejorar stats
- **Desafíos progresivos:** Puzzles que aumentan en dificultad (sumas → multiplicación → fracciones → álgebra)
- **Exploración y descubrimiento:** Desbloquear nuevas áreas del reino (Torre de Pi, Bosque de Fracciones)
- **Logros matemáticos:** Badges por conceptos dominados ("Maestro de la División", "Rey del Álgebra")
- **Competencia global:** Leaderboard de jugadores con mayor nivel matemático

**Mecánica Principal:**
Los jugadores son "Guerreros Matemáticos" que deben salvar el Reino Numérico de la "Oscuridad Matemática". Navegan por un mundo isométrico dividido en zonas basadas en conceptos matemáticos (Valle de la Suma, Montaña de la Multiplicación, Castillo del Álgebra). Cada zona contiene monstruos matemáticos (números que atacan con ecuaciones). Para vencerlos, los jugadores deben resolver ecuaciones rápidamente o usar hechizos matemáticos. Hay modo historia (30+ zonas) y modo desafío (puzzles infinitos generados procedimentalmente).

**Interacción Móvil:**
- **Tap simple:** Seleccionar respuesta correcta de ecuación, atacar monstruo
- **Arrastrar (Drag):** Organizar números en puzzles de lógica matemática
- **Pinch:** Zoom en el mapa del reino para ver áreas
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap rápido:** Responder ecuaciones rápidas (modo batalla)
- **Swipe horizontal:** Cambiar entre vista de mapa, vista de inventario, vista de stats
- **Gestos complejos:**
  - Shake del dispositivo = activar hechizo especial (costa maná)
  - Dibujo de símbolo matemático = lanzar hechizo correspondiente (+, -, ×, ÷)
  - Doble tap en monstruo = ver estadísticas (nivel, ecuación, debilidad)
  - Arrastrar número a zona = resolver puzzle de lógica
- **Escribir:** Modo libre para escribir y resolver ecuaciones personalizadas
- **Multitouch hasta 4 dedos:** Selección múltiple de números para puzzles complejos

**Accesibilidad:**
- Ecuaciones con fuentes grandes (min 20px) y alto contraste
- Botones de respuesta generosos (min 60x60px) para fácil interacción
- Modo "Slow Mode" para ecuaciones con tiempo extra
- Voice assistant lee ecuaciones ("¿Cuánto es 5 × 7?")
- Haptic feedback para feedback táctil (vibración al acertar, suave para navegación)
- Color coding por operación (sumas=verde, restas=rojo, multiplicación=azul, división=naranja)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para mapa isométrico del reino (generado procedimentalmente)
  - `<canvas>` para interfaz de batalla (ecuaciones, respuestas)
  - `<canvas>` para puzzles de lógica matemática
  - `<video>` para cutscenes animados de historia
  - `<input type="text">` para modo libre de ecuaciones
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de mapa, sistema de combate)
  - Matemáticas: Custom algorithms para generación de ecuaciones procedimentales
  - Sistema de RPG: Stats del jugador (nivel, maná, XP, habilidades)
  - Framework UI: Vue.js o React (componentes reactivos)
  - State management: Vuex para progreso del jugador (zonas desbloqueadas, stats, inventario)
  - Generación de puzzles: Algoritmos para crear ecuaciones infinitas adaptativas
  - Animaciones: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar progreso completo (stats, inventario, zonas)
- **CSS:**
  - Grid layout para interfaz de batalla (4x4 grid de opciones de respuesta)
  - CSS Flexbox para contenedores de UI (stats, inventario, habilidades)
  - CSS Transforms para zoom del mapa (transform-origin: center)
  - CSS Animations para feedback de batalla (shake, glow, pulse)
  - CSS Variables para theming por zona matemática (sumas=verde, multiplicación=azul, etc.)
  - Backdrop-filter para blur de paneles superpuestos
- **Otros:**
  - Web Audio API: Sonidos mágicos (hechizos, batalla, victoria)
  - Touch Events API: Multi-touch para puzzles complejos
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar stats, inventario y progreso (offline play)
  - Service Workers: PWA para jugar offline (modo desafío sin leaderboard)
  - Canvas API: Renderizar mapa isométrico y elementos de batalla
  - Math.js: Librería para cálculos matemáticos complejos

**Características Visuales:**
- **Paleta de colores:**
  - Mapa del reino: Tonos mágicos (Valle de Sumas=verde, Montaña de Multiplicación=azul, Castillo del Álgebra=púrpura)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, backdrop-filter blur 5px)
  - Ecuaciones: Colores por operación (+ verde, - rojo, × azul, ÷ naranja)
  - Monstruos matemáticos: Colores brillantes por nivel (novato=amarillo, avanzado=naranja, experto=rojo)
- **Animaciones:**
  - Batalla: Animación de ataque y defensa (0.5s)
  - Hechizo lanzado: Efecto de partículas mágicas (0.3s)
  - Ecuación resuelta: Checkmark verde + flash dorado (0.5s)
  - Subir de nivel: Confetti de números (200 particles, 2s)
  - Zona desbloqueada: Flash de luz + puerta se abre (1s)
- **Feedback visual:**
  - Respuesta correcta: Borde verde brillante, icono checkmark
  - Respuesta incorrecta: Shake rojo + mensaje de error
  - Monstruo vencido: Monstruo desaparece con animación de explosión (0.5s)
  - Hechizo especial: Efecto de borde brillante pulsante en pantalla
  - Subir de nivel: Modal con stats nuevos, habilidades desbloqueadas
- **Personalización:**
  - 30+ zonas matemáticas (Valle de Sumas, Bosque de Fracciones, Torre del Álgebra, Castillo de Geometría)
  - Avatar de guerrero con 60+ combinaciones (armadura, arma, insignias, color)
  - 20+ hechizos matemáticos (Fuego de Sumas, Escudo de Resta, Rayo de Multiplicación)
  - Skins de monstruos (50+ diseños únicos por zona matemática)
  - Temas visuales por zona (estilo artístico único: valle, montaña, castillo)

**Audio:**
- **Efectos de sonido:**
  - Click en respuesta: Tap satisfactorio (50ms)
  - Respuesta correcta: Chime ascendente (C4-E4-G4, 200ms)
  - Respuesta incorrecta: Buzz descendente (E2-C2, 200ms)
  - Hechizo lanzado: Magical whoosh (300ms)
  - Monstruo vencido: Explosion suave (200ms)
  - Subir de nivel: Fanfare de 8 notas (C4-E4-G4-B5-C6-E6-G6-C7, 2s)
- **Música:**
  - Mapa idle: Ambient fantasy con piano suave (70 BPM)
  - Batalla: Upbeat orchestral epic (120 BPM)
  - Zona de sumas: Folk medieval con flauta (90 BPM)
  - Zona de multiplicación: Orchestral majestuosa (100 BPM)
  - Zona de álgebra: Mystical electronic con synth (85 BPM)
  - Victoria: Triumphant orchestral (130 BPM)
- **Voz:**
  - Tutorial: Voz de maestro matemático amigable ("¡Bienvenido al Reino Numérico!")
  - Batalla: Voz de hype ("¡Resuelve rápido para ganar!")
  - Ecuación: Voice assistant lee la ecuación ("5 multiplicado por 7 igual...")
- **Audio espacial:** Sonidos 3D para inmersión en batalla

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 80-100 horas (3-4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en batalla con animaciones de hechizos (partículas)
  - Latencia: <100ms para respuesta de ecuación (feedback instantáneo)
  - Ecuaciones máximas: 10 en pantalla (modo batalla rápida)
  - Memoria máxima: 160MB (incluye sprites de 30 zonas, 50+ monstruos)
  - Generación de puzzles: <50ms para crear ecuación procedimental
- **Riesgos técnicos:**
  - Balance de dificultad: Evitar ecuaciones frustrantes (muy difíciles para el nivel)
  - Generación procedimental de ecuaciones: Mantener dificultad adecuada al nivel del jugador
  - Optimización de animaciones de partículas en móviles de gama baja
  - Gestión de state: Guardar stats y progreso en IndexedDB sin bloqueo

**Valor Educativo:**
- **Matemáticas reales:** Los niños aprenden sumas, restas, multiplicación, división, fracciones, álgebra, geometría
- **Pensamiento rápido:** Desarrollan habilidades de cálculo mental bajo presión
- **Resolución de problemas:** Aprenden a abordar ecuaciones paso a paso
- **Vocabulario matemático:** Aprenden términos: suma, resta, multiplicación, división, fracción, álgebra, ecuación
- **Confianza matemática:** Ganan seguridad al resolver ecuaciones y superar desafíos
- **Memoria y concentración:** Deben recordar operaciones y patrones matemáticos
- **Competencia sana:** Leaderboard fomenta superación personal, no solo ganar

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Renderizado isométrico y batalla
- [Prodigy Math Game - Math RPG](https://www.prodigygame.com/) - Inspiración principal para mecánica RPG+math
- [Khan Academy Math](https://www.khanacademy.org/math) - Referencia de conceptos matemáticos
- [DragonBox Algebra - Algebra learning game](https://dragonbox.com/products/dragonbox-algebra-12/) - Enseñanza de álgebra
- [Mathletics - Math competition platform](https://www.mathletics.com/) - Competencia matemática
- [MDN Web Docs - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - Renderizado de batalla
- [Math.js - Math library](https://mathjs.org/) - Cálculos matemáticos complejos

---

#### Idea #9: Food Factory: Culinary Chemistry

**Concepto:**
Simulador de cocina donde los jugadores aprenden química y ciencia de alimentos al cocinar platos reales. Combinan ingredientes, entienden reacciones químicas (maillard, caramelización, fermentación) y desbloquean recetas del mundo entero. Combina simulación de cocina con educación científica.

**Motivación:**
- **Creatividad culinaria:** Crear platos deliciosos con libertad de experimentación
- **Descubrimiento científico:** Entender por qué los alimentos cambian al cocinar (química en acción)
- **Colección de recetas:** Desbloquear 100+ recetas de diferentes culturas (italiana, japonesa, mexicana, etc.)
- **Logros de chef:** Badges por técnicas dominadas ("Maestro de Salsas", "Rey de la Pizza")
- **Competencia global:** Leaderboard de chefs con más recetas desbloqueadas y mejor puntuación

**Mecánica Principal:**
Los jugadores son "Jefes de Cocina" que trabajan en un laboratorio culinario. Tienen una cocina virtual con herramientas (hornos, estufas, mezcladores, licuadoras) y ingredientes (vegetales, carnes, especias, lácteos). Al cocinar, ven las reacciones químicas en tiempo real (caramelo dorisándose, pan subiendo, carne dándose textura). Cada receta tiene una fase de aprendizaje (entender la ciencia detrás) y una fase de ejecución (cocinar con precisión). Hay modo historia (desbloquear recetas del mundo) y modo sandbox libre (experimentar sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar ingredientes, herramientas, acciones (cortar, mezclar, hornear)
- **Arrastrar (Drag):** Mover ingredientes a herramientas (sartén, horno, bol), mezclar con gestos circulares
- **Pinch:** Zoom en el plato para ver detalles finos
- **Dos dedos (drag):** Pan/mover la vista de la cocina
- **Tap rápido:** Acciones rápidas (picar ingredientes, revolver sartén)
- **Tap largo (Long press):** Ver información científica del ingrediente (propiedades químicas, nutrientes)
- **Swipe horizontal:** Cambiar entre vista de cocina, recetario, inventario
- **Gestos complejos:**
  - Shake del dispositivo = volterear ingrediente (como en sartén)
  - Dibujo de círculo = mezclar ingredientes (agitación en bol)
  - Doble tap en ingrediente = ver reacción química detallada
  - Arrastrar ingrediente a sartén = comenzar cocinado
- **Escribir:** Notebook de chef para escribir notas, ajustes a recetas
- **Multitouch hasta 5 dedos:** Manejar múltiples ingredientes simultáneamente

**Accesibilidad:**
- Ingredientes con iconos grandes (min 50px) y etiquetas claras
- Modo "Slow Motion" para ver reacciones químicas en cámara lenta (0.25x)
- Voice assistant explica reacciones ("El azúcar se está caramelizando a 170°C")
- Modo "Easy Mode" con tiempos más flexibles y menos pasos
- Haptic feedback para feedback táctil (vibración al cocinar, suave para navegación)
- Color coding por tipo de ingrediente (proteína=rojo, vegetal=verde, especia=naranja)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de cocina isométrica
  - `<canvas>` para simulación de reacciones químicas (caramelización, maillard)
  - `<canvas>` para vista del plato en progreso
  - `<video>` para tutoriales animados de técnicas
  - `<input type="text">` para notebook de chef
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de cocina, sistema de cooking)
  - Simulación química: Custom algorithms para reacciones de alimentos (temperatura, tiempo, combinaciones)
  - Sistema de recetas: JSON con 100+ recetas, ingredientes, pasos, ciencia detrás
  - Framework UI: Vue.js o React (componentes reactivos)
  - State management: Vuex para progreso del chef (recetas desbloqueadas, inventario, notebook)
  - Animaciones: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar recetas y notas (offline play)
- **CSS:**
  - Grid layout para cocina isométrica (12x12 grid responsivo)
  - CSS Flexbox para contenedores de UI (inventario, recetario, herramientas)
  - CSS Transforms para zoom en plato (transform-origin: center)
  - CSS Animations para feedback de cooking (smoke, sizzle, glow)
  - CSS Variables para theming por tipo de cocina (italiana=rojo/blanco, japonesa=rojo/negro)
  - Backdrop-filter para blur de paneles superpuestos
- **Otros:**
  - Web Audio API: Sonidos de cocina (sizzle, chop, boil, oven ding)
  - Touch Events API: Multi-touch para manejar múltiples ingredientes
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar 100+ recetas con notas y progreso
  - Service Workers: PWA para cocinar offline (modo sandbox sin leaderboard)
  - Canvas API: Renderizar cocina y reacciones químicas
  - Web Speech API: Comandos de voz para navegación por menús

**Características Visuales:**
- **Paleta de colores:**
  - Cocina: Tonos cálidos y profesionales (acero inoxidable, madera, mármol)
  - Ingredientes: Colores realistas (tomate=rojo, espinaca=verde, limón=amarillo)
  - Reacciones químicas: Colores dinámicos (caramelizado=dorado, quemado=negro, fermentado=burbujeante)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, backdrop-filter blur 5px)
- **Animaciones:**
  - Ingredientes caen al sartén: Physics de caída suave (0.3s)
  - Reacción química: Partículas de humo/vapor suben (0.5-2s)
  - Plato listo: Flash dorado + humo aromático (0.5s)
  - Receta desbloqueada: Modal con plato terminado + confetti de especias (1.5s)
- **Feedback visual:**
  - Ingrediente seleccionado: Resaltado con borde brillante (azul)
  - Cocinando: El ingrediente cambia color/textura en tiempo real
  - Plato listo: Checkmark verde + timer termina
  - Plato quemado: Shake rojo + humo negro
  - Logro desbloqueado: Modal con badge dorado + efectos de luz (1s)
- **Personalización:**
  - 100+ recetas de diferentes culturas (italiana, japonesa, mexicana, francesa, india, etc.)
  - 200+ ingredientes (vegetales, carnes, especias, lácteos, frutas)
  - 50+ herramientas de cocina (hornos, estufas, sartenes, mezcladores, licuadoras)
  - Avatar de chef con 40+ combinaciones (gorro, delantal, accesorios)
  - Skins de cocina (profesional, rústica, moderna, futurista)

**Audio:**
- **Efectos de sonido:**
  - Cortar ingrediente: Chop satisfactorio (varía por ingrediente, 100-200ms)
  - Ingredientes al sartén: Sizzle suave (burbujeo, 200-400ms)
  - Mezclar: Swirl sound (circular, 300ms)
  - Horno ding: Ding metálico brillante (C5, 150ms)
  - Plato listo: Fanfare corto (C4-E4-G4, 300ms)
  - Receta desbloqueada: Celebration music (6 notas, 1.5s)
- **Música:**
  - Cocina idle: Ambient kitchen con sutil sizzle (80 BPM)
  - Cocinando activo: Upbeat cooking music (percusión, 100 BPM)
  - Italiana: Folk italiano con mandolina (90 BPM)
  - Japonesa: Ambient zen con koto (85 BPM)
  - Mexicana: Mariachi-inspired con guitarra (95 BPM)
  - Victoria: Triumphant orchestral (130 BPM)
- **Voz:**
  - Tutorial: Voz de chef profesional ("¡Bienvenido al Laboratorio Culinario!")
  - Reacción química: Voz explica ciencia ("La proteína se está desnaturalizando a 60°C")
  - Receta desbloqueada: Voz de celebración ("¡Excelente! ¡Desbloqueaste Pizza Margarita!")
- **Audio espacial:** Sonidos 3D para inmersión (sartén suena más fuerte si está "cerca")

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en cocina con reacciones químicas animadas (partículas)
  - Latencia: <100ms para respuesta de ingrediente (feedback instantáneo)
  - Recetas máximas: 100+ con múltiples ingredientes cada una
  - Memoria máxima: 200MB (incluye sprites de 200+ ingredientes, 100+ recetas)
  - Simulación química: <200ms para calcular reacción (temperatura, tiempo, combinaciones)
- **Riesgos técnicos:**
  - Balance de realismo vs. jugable: Simplificar reacciones químicas complejas
  - Simulación de temperatura: Mantener consistencia sin ser frustrante
  - Optimización de partículas en móviles de gama baja (limitar humo/vapor)
  - Gestión de state: Guardar 100+ recetas con notas en IndexedDB sin bloqueo

**Valor Educativo:**
- **Química de alimentos:** Los niños aprenden reacciones químicas reales (maillard, caramelización, fermentación)
- **Ciencia aplicada:** Entienden por qué los alimentos se comportan así al cocinar
- **Nutrición:** Aprenden sobre propiedades de alimentos (proteínas, carbohidratos, vitaminas)
- **Culturas del mundo:** Exploran recetas de diferentes países (geografía cultural)
- **Vocabulario científico:** Aprenden términos: maillard, caramelización, fermentación, desnaturalización, oxidación
- **Creatividad y experimentación:** Pueden probar combinaciones y ver qué pasa
- **Pensamiento crítico:** Deben ajustar tiempos y temperaturas para lograr resultados perfectos

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Renderizado de cocina
- [Cooking Simulator - Kitchen simulation game](https://www.cookingsimulator.com/) - Inspiración para mecánica de cocina
- [Food Science Explained - Educational videos](https://www.youtube.com/c/AdamLisagor) - Explicación de ciencia de alimentos
- [Serious Eats - Food science blog](https://www.seriouseats.com/) - Referencia de técnicas y ciencia
- [The Food Lab - Cooking science](https://www.americastestkitchen.com/) - Ciencia detrás de recetas
- [MDN Web Docs - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - Renderizado de cocina
- [Web Audio API - Kitchen sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de cocina

---

#### Idea #10: Language Warriors: Battle of Words

**Concepto:**
Juego de aprendizaje de idiomas donde los jugadores compiten en batallas de palabras, desafiándose a sí mismos y a otros jugadores en tiempo real. Combina gamificación social con aprendizaje de vocabulario, gramática y expresiones en múltiples idiomas (inglés, español, francés, alemán, japonés).

**Motivación:**
- **Competencia social:** Battles 1v1 en tiempo real con jugadores globales
- **Logros lingüísticos:** Badges por niveles de dominio ("Maestro del Inglés", "Samurai del Japonés")
- **Progresión visible:** Ver mejorar vocabulario y gramática con cada batalla
- **Ranking global:** Leaderboard de mejores guerreros de palabras por idioma
- **Descubrimiento cultural:** Aprender expresiones y frases útiles de países reales

**Mecánica Principal:**
Los jugadores son "Guerreros de Palabras" que compiten en batallas de vocabulario y gramática. Cada batalla tiene 3-5 rondas con diferentes tipos de desafíos:
1. **Word Blitz:** Encontrar sinónimos/antónimos rápidamente (30 segundos por ronda)
2. **Grammar Quest:** Completar oraciones con la palabra correcta
3. **Expression Attack:** Traducir expresiones comunes del idioma
4. **Listening Challenge:** Escuchar audio y seleccionar la palabra correcta

Los jugadores tienen stats (vocabulario, gramática, velocidad, precisión) que mejoran con cada batalla. Hay modo historia (desbloquear niveles de dominio) y modo competitivo (battles ilimitados).

**Interacción Móvil:**
- **Tap simple:** Seleccionar palabra/respuesta correcta
- **Tap rápido:** Modo Word Blitz (responder lo más rápido posible)
- **Arrastrar (Drag):** Organizar palabras para formar oraciones (Grammar Quest)
- **Pinch:** Zoom en vocabulario para ver detalles
- **Dos dedos (drag):** Pan/mover la vista del battlefield
- **Tap largo (Long press):** Ver definición extendida, ejemplo de uso, pronunciación
- **Swipe horizontal:** Cambiar entre vista de battle, vocabulario, perfil
- **Gestos complejos:**
  - Shake del dispositivo = usar power-up (doble puntos por 10s)
  - Dibujo de flecha = atacar con palabra (mejora ataque por 2x)
  - Doble tap en palabra = marcar como favorita
  - Arrastrar palabra a oración = completar frase (Grammar Quest)
- **Escribir:** Modo de práctica libre para escribir y traducir frases
- **Multitouch hasta 4 dedos:** Selección múltiple de palabras para combos

**Accesibilidad:**
- Palabras con fuentes grandes (min 18px) y alto contraste
- Modo "Slow Mode" para battles con tiempo extra
- Voice assistant lee palabras en idioma original y traducción
- Modo "Audio Only" para practicar listening sin visual
- Haptic feedback para feedback táctil (vibración al acertar, suave para navegación)
- Color coding por tipo de palabra (verbo=verde, sustantivo=azul, adjetivo=naranja)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para battlefield animado
  - `<canvas>` para visualización de vocabulario (word clouds)
  - `<audio>` para pronunciación de palabras (Text-to-Speech y audio grabado)
  - `<video>` para cutscenes de batalla
  - `<input type="text">` para modo de práctica libre
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de battlefield, sistema de combate)
  - Text-to-Speech: Web Speech API (síntesis de voz en 5+ idiomas)
  - Speech Recognition: Web Speech API (listening challenge)
  - Sistema de vocabulario: JSON con 10,000+ palabras por idioma
  - Sistema de gramática: Algoritmos para generar ejercicios gramaticales
  - Framework UI: Vue.js o React (componentes reactivos)
  - State management: Vuex para progreso del jugador (stats, vocabulario, level)
  - WebSockets: Socket.io para battles en tiempo real (multiplayer)
  - Animaciones: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar vocabulario y progreso (offline play)
- **CSS:**
  - Grid layout para battlefield (4x4 grid de opciones de respuesta)
  - CSS Flexbox para contenedores de UI (vocabulario, perfil, stats)
  - CSS Transforms para animaciones de batalla (shake, glow, pulse)
  - CSS Animations para feedback visual (flash, slide, fade)
  - CSS Variables para theming por idioma (inglés=azul/blanco, japonés=rojo/negro, etc.)
  - Backdrop-filter para blur de paneles superpuestos
- **Otros:**
  - Web Audio API: Pronunciación de palabras (TTS nativo y audio grabado)
  - Web Speech API: Text-to-Speech y Speech Recognition (listening)
  - Touch Events API: Multi-touch para selección múltiple
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar 10,000+ palabras y progreso (offline play)
  - Service Workers: PWA para practicar offline (modo vocabulario sin multiplayer)
  - Canvas API: Renderizar battlefield y word clouds
  - WebSockets: Battles en tiempo real con latencia <100ms

**Características Visuales:**
- **Paleta de colores:**
  - Battlefield: Estilo épico de arena (colores por idioma: inglés=azul/blanco, japonés=rojo/negro, francés=azul/rojo/blanco)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, backdrop-filter blur 5px)
  - Palabras: Colores por tipo (verbo=verde, sustantivo=azul, adjetivo=naranja, adverbio=púrpura)
  - Stats: Colores por habilidad (vocabulario=azul, gramática=verde, velocidad=rojo, precisión=naranja)
- **Animaciones:**
  - Battle comenzar: Flash de arena + sonido épico (0.5s)
  - Ataque con palabra: Palabra viaja del jugador al oponente con trail de partículas (0.3s)
  - Respuesta correcta: Checkmark verde + flash brillante (0.3s)
  - Respuesta incorrecta: Shake rojo + icono de error (0.5s)
  - Battle ganado: Confetti de letras (200 particles, 2s)
- **Feedback visual:**
  - Tu turno: Borde azul brillante pulsante en tu lado del battlefield
  - Oponente atacando: Flecha roja viaja hacia ti
  - Combo activado: Texto "COMBO x3" pulsa con colores
  - Subir de nivel: Modal con stats nuevos y badge desbloqueado (1.5s)
  - Vocabulary aprendido: Palabra brilla en tu word cloud (0.5s)
- **Personalización:**
  - 5+ idiomas (inglés, español, francés, alemán, japonés)
  - 10,000+ palabras por idioma (10,000+ palabras × 5 idiomas = 50,000+ palabras)
  - 50+ categorías de vocabulario (animales, alimentos, colores, emociones, etc.)
  - Avatar de guerrero con 60+ combinaciones (armadura, arma, accesorios, color)
  - Skins de battlefield (estilos épicos: medieval, futurista, cyberpunk, samurai)

**Audio:**
- **Efectos de sonido:**
  - Seleccionar respuesta: Tap satisfactorio (50ms)
  - Respuesta correcta: Chime ascendente (C4-E4-G4, 200ms)
  - Respuesta incorrecta: Buzz descendente (E2-C2, 200ms)
  - Ataque con palabra: Whoosh de ataque (300ms)
  - Combo activado: Power-up sound (charge + release, 500ms)
  - Battle ganado: Fanfare épico (8 notas, 2s)
- **Música:**
  - Menú principal: Upbeat epic orchestral (120 BPM)
  - Battle: Epic combat music (percusión + orquestal, 140 BPM)
  - Inglés: Pop/Rock con guitarra (130 BPM)
  - Japonés: Traditional + electronic mix (120 BPM)
  - Francés: Chanson-inspired + modern (110 BPM)
  - Alemán: Techno-influenced (135 BPM)
  - Victoria: Triumphant orchestral (130 BPM)
- **Voz:**
  - Tutorial: Voz de sensei lingüístico ("¡Bienvenido al Battle de Palabras!")
  - Palabra pronunciada: TTS en idioma nativo (5+ idiomas con acento nativo)
  - Battle: Voz de hype ("¡Rápido! ¡Tienes 10 segundos!")
- **Audio espacial:** Sonidos 3D para inmersión en battlefield

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 120-150 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en battles con animaciones de partículas (atques, combos)
  - Latencia: <100ms para respuesta de selección (feedback instantáneo)
  - Latencia multiplayer: <100ms para sincronización en tiempo real (WebSockets)
  - Vocabulario: 10,000+ palabras por idioma (50,000+ total)
  - Memoria máxima: 250MB (incluye 50,000+ palabras, 5+ audios de pronunciación)
  - TTS: <200ms para pronunciar palabra (Web Speech API)
- **Riesgos técnicos:**
  - Balance de dificultad: Preguntas muy difíciles frustran, muy fáciles aburren
  - Sistema de matching: Emparejar jugadores de nivel similar sin esperar mucho
  - Sincronización multiplayer: Mantener consistencia sin lag en battles
  - Optimización de vocabulario: 50,000+ palabras consumen memoria (cargar por demanda)
  - Calidad de pronunciación TTS: Usar acentos nativos para cada idioma

**Valor Educativo:**
- **Vocabulario real:** Los niños aprenden 10,000+ palabras por idioma (50,000+ total)
- **Gramática aplicada:** Desarrollan habilidades gramaticales en contexto (oraciones, expresiones)
- **Comprensión auditiva:** Listening challenge entrena el oído
- **Pronunciación:** TTS en idioma nativo ayuda a mejorar acento
- **Competencia sana:** Battles fomentan superación personal y aprendizaje
- **Cultura:** Aprenden expresiones y frases útiles de países reales
- **Memoria y velocidad:** Desarrollan vocabulario rápido y memoria a largo plazo

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Renderizado de battlefield
- [Duolingo - Language learning app](https://www.duolingo.com/) - Inspiración para gamificación de idiomas
- [Words With Friends - Word battle game](https://www.zynga.com/games/words-with-friends) - Competición de palabras
- [Memrise - Vocabulary learning](https://www.memrise.com/) - Aprendizaje de vocabulario
- [Anki - Flashcard app](https://apps.ankiweb.net/) - Sistema de repetición espaciada
- [Web Speech API - TTS & Recognition](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - Pronunciación y listening
- [Socket.io - Real-time multiplayer](https://socket.io/) - Battles en tiempo real
- [MDN Web Docs - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - Renderizado de battlefield


---

#### Idea #11: Fitness Quest: Active Heroes

**Concepto:**
Juego de actividad física gamificado donde los niños completan misiones de ejercicio real mientras exploran un mundo fantástico. Combina fitness tracker integrado con aventura RPG, convirtiendo ejercicios cotidianos en poderes de superhéroe para derrotar monstruos y salvar el mundo.

**Motivación:**
- **Héroes reales:** Los niños se sienten poderosos mientras hacen ejercicio
- **Progresión física visible:** Ver cómo mejoran stats reales (velocidad, fuerza, resistencia)
- **Misiones épicas:** Cada ejercicio desbloquea nuevos poderes y zonas del mundo
- **Logros físicos:** Badges por metas alcanzadas ("Corredor de Maratón", "Maestro del Burpee")
- **Competencia sana:** Leaderboard global de "héroes más activos" por zona geográfica

**Mecánica Principal:**
Los jugadores son héroes en un mundo fantástico (reino de Elementos). Cada día reciben misiones de ejercicio:
- **Correr/Caminar:** Navegar entre zonas del mapa (cada 1km = avanzar una zona)
- **Saltos:** Atacar monstruos (cada 10 saltos = derrotar un enemigo)
- **Sentadillas:** Desbloquear cofres de tesoros (cada 20 sentadillas = abrir cofre)
- **Flexiones:** Potenciar ataques especiales (cada 15 flexiones = activar poder)
- **Core:** Activar escudos protectores (planchas de 30 segundos)

El juego usa sensores del móvil (acelerómetro, GPS) para detectar movimiento. Los héroes ganan XP, suben de nivel, desbloquean nuevas habilidades y equipamiento. Hay modo historia (derrotar al Rey Oscuro) y modo fitness diario (ejercicios sin restricciones).

**Interacción Móvil:**
- **Movimiento real:** Caminar/correr (detectado por GPS y acelerómetro)
- **Tap simple:** Aceptar misión, ver stats, seleccionar power-up
- **Arrastrar (Drag):** Mover héroe en el mapa (cuando no está activo tracking de GPS)
- **Pinch:** Zoom en el mapa del mundo (0.5x-2x)
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap largo (Long press):** Ver información detallada de stats (km recorridos, saltos totales, calorías)
- **Swipe horizontal:** Cambiar entre vista de mapa, vista de stats, vista de misiones
- **Gestos complejos:**
  - Shake del dispositivo = activar modo "Frenzy" (doble XP por 5 minutos)
  - Dibujo de trueno = ataque eléctrico (requiere 50 saltos para cargar)
  - Doble tap en monstruo = ataque especial (consume flexiones)
  - Arrastrar power-up a héroe = activar habilidad temporal
- **Escribir:** Nombrar héroe, escribir notas de entrenamiento
- **Multitouch hasta 3 dedos:** Selección múltiple de misiones

**Accesibilidad:**
- Botones grandes (min 60x60px) para fácil interacción mientras se ejercita
- Voice assistant anuncia misiones ("¡Misión del día: 1000 pasos para desbloquear zona!")
- Modo "Adaptativo" ajusta metas según edad y capacidad física
- Haptic feedback para feedback táctil (vibración al completar ejercicio)
- Color coding por tipo de ejercicio (cardio=rojo, fuerza=azul, flexibilidad=verde)
- Modo "Voice Only" para hands-free mientras se corre

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para mapa del mundo isométrico
  - `<canvas>` para visualización de stats (gráficos de progreso)
  - `<video>` para tutoriales de ejercicios
  - `<input type="text">` para nombrar héroe y escribir notas
- **JavaScript:**
  - Sensor APIs: Geolocation API (GPS), Accelerometer API (movimiento), Gyroscope API (rotación)
  - Game engine: Phaser 3 (renderizado de mapa, sistema de combate)
  - Framework UI: Vue.js o React (componentes reactivos)
  - State management: Vuex para estado del héroe (stats, inventario, progreso)
  - Animaciones: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar progreso del héroe (stats, misiones, inventario)
  - Algoritmo de fitness: Custom para detectar tipos de ejercicio (caminar vs correr vs saltar)
  - Charts: Chart.js para visualizar stats de fitness
- **CSS:**
  - Grid layout para panel de misiones (8x6 grid responsivo)
  - CSS Transforms para zoom del mapa (transform-origin: center)
  - CSS Animations para feedback de ejercicio (pulse, glow, shake)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de stats y misiones
- **Otros:**
  - Geolocation API: Tracking de GPS para detectar caminata/carrera
  - Accelerometer API: Detección de saltos, sentadillas, flexiones
  - Gyroscope API: Detección de rotación del dispositivo
  - Web Audio API: Sonidos de combate y ambiente
  - Touch Events API: Multi-touch para selección múltiple
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar stats y progreso (offline play)
  - Service Workers: PWA para trackear ejercicio sin conexión
  - Canvas API: Renderizar mapa y stats

**Características Visuales:**
- **Paleta de colores:**
  - Mapa del mundo: Estilo épico de fantasía (bosque=verde, desierto=amarillo, hielo=blanco/azul, volcán=naranja/rojo)
  - Héroe: Colores por elemento (fuego=rojo, agua=azul, tierra=marrón, aire=blanco)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.6, backdrop-filter blur 10px)
  - Stats: Colores por tipo (cardio=rojo, fuerza=azul, flexibilidad=verde, resistencia=naranja)
- **Animaciones:**
  - Héroe caminando: Walk cycle con spritesheet (8 frames, 12 FPS)
  - Ataque con salto: Jump + attack animation (0.5s)
  - Monstruo derrotado: Shake + fade out + particles (1s)
  - Power-up activado: Glow dorado pulsante (2s)
  - Abrir cofre: Cofre se abre con sparkle effect (1.5s)
- **Feedback visual:**
  - Misión completada: Modal con recompensa, experiencia, desbloqueos
  - Stats mejorados: Counting numbers animation (0→100→1000)
  - Subir de nivel: Flash dorado del héroe + efectos de luz (2s)
  - Power-up activado: Borde dorado pulsante en pantalla
  - Fitness record: Modal con "¡NUEVO RÉCORD!" + confetti (2s)
- **Personalización:**
  - 4+ elementos de héroe (fuego, agua, tierra, aire)
  - 50+ skins de armadura (plata, oro, diamante, elementos raros)
  - 30+ weapons (espadas, hachas, bastones mágicos)
  - 100+ misiones diarias (variadas por tipo de ejercicio)
  - Avatar de héroe con 80+ combinaciones (cabello, ropa, accesorios, color)
  - Skins de mapa (fantasía clásica, cyberpunk, minimalista, pixel art)

**Audio:**
- **Efectos de sonido:**
  - Caminar/pasos: Footstep sounds variados (dirt, grass, stone, 100-200ms)
  - Saltar: Jump sound (whoosh ascendente, 200ms)
  - Ataque: Sword swing + hit (300ms)
  - Monstruo derrotado: Explosion + monster death cry (500ms)
  - Abrir cofre: Cofre open + sparkle (800ms)
  - Power-up: Charge up + release (1s)
  - Subir de nivel: Fanfare épico (8 notas, 2s)
- **Música:**
  - Mapa idle: Epic fantasy orchestral (90 BPM)
  - Combate: Intense battle music (percusión + orquestal, 130 BPM)
  - Misión completada: Triumphant (brass + drums, 120 BPM)
  - Zona de bosque: Ambient forest (birds + wind, 70 BPM)
  - Zona de desierto: Desert winds + drums (80 BPM)
  - Zona de hielo: Ethereal bells + synth pads (75 BPM)
- **Voz:**
  - Tutorial: Voz de entrenador heroico ("¡Bienvenido, Héroe! ¡Tu misión comienza!")
  - Misión activa: Voz de anuncio ("¡Misión: 100 saltos para derrotar el dragón!")
  - Fitness record: Voz de celebración ("¡NUEVO RÉCORD! ¡Sigue así!")
- **Audio espacial:** Sonidos 3D para inmersión (combate desde la izquierda suena en el canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en mapa isométrico con 500+ entidades
  - Latencia: <50ms para respuesta de ejercicio (feedback instantáneo)
  - Sensor detection: <100ms para detectar salto/sentadilla/flexión
  - GPS tracking: Actualizar posición cada 5 segundos (balance batería/precisión)
  - Memoria máxima: 200MB (incluye sprites de 50 armaduras, 30 weapons)
  - Battery life: <5% de consumo por hora de gameplay
- **Riesgos técnicos:**
  - Detección precisa de ejercicios: Diferenciar caminar vs correr vs saltar puede ser difícil en algunos móviles
  - Privacy de GPS: Solicitar permisos explicando claramente por qué se necesita
  - Battery drain: Sensors consumen batería, optimizar para uso eficiente
  - Balance de fitness: Metas muy fáciles aburren, muy difíciles frustran
  - Safety: Advertencias para ejercicios inadecuados para edad

**Valor Educativo:**
- **Salud y bienestar:** Los niños desarrollan hábitos de ejercicio saludable
- **Biología aplicada:** Entienden cómo el ejercicio afecta el cuerpo (cardio, fuerza, flexibilidad)
- **Matemáticas en contexto:** Calculan calorías quemadas, distancias, tiempos
- **Pensamiento estratégico:** Planificar misiones para maximizar progreso (cuándo hacer qué ejercicio)
- **Perseverancia:** Los ejercicios requieren constancia y esfuerzo
- **Autoconocimiento:** Aprenden sus límites físicos y cómo superarlos
- **Disciplina:** Desarrollan hábito diario de actividad física

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Renderizado de mapa y combate
- [Pokemon GO - AR fitness game](https://www.pokemongo.com/) - Inspiración para GPS tracking
- [Zombies, Run! - Fitness narrative game](https://zombiesrungame.com/) - Narrativa fitness épica
- [Fitbit - Fitness tracker](https://www.fitbit.com/) - Inspiración para stats de fitness
- [Geolocation API - GPS tracking](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) - Tracking de movimiento
- [Accelerometer API - Motion detection](https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer) - Detección de ejercicios
- [Web Audio API - Combat sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de combate
- [PWA - Offline fitness](https://web.dev/offline/) - PWA para trackear ejercicio sin internet

---

#### Idea #12: History Hunters: Time Travelers

**Concepto:**
Juego de historia y arqueología donde los jugadores son cazadores del tiempo que viajan a diferentes épocas históricas, descubren civilizaciones antiguas, resuelven misterios arqueológicos y coleccionan artefactos históricos. Combina aventura tipo Indiana Jones con educación histórica real.

**Motivación:**
- **Descubrimiento épico:** Encontrar ciudades perdidas, tesoros antiguos, civilizaciones olvidadas
- **Colección de artefactos:** Desbloquear piezas reales del museo (Egipto, Grecia, Roma, Maya, Azteca, etc.)
- **Misterios por resolver:** Cada época tiene un misterio histórico que requiere investigación
- **Progresión de conocimiento:** Aprender sobre 50+ civilizaciones a lo largo del tiempo
- **Competencia amistosa:** Leaderboard de "quién descubrió más artefactos raros"

**Mecánica Principal:**
Los jugadores son arqueólogos del tiempo con una máquina del tiempo virtual. Viajan a 50+ épocas históricas (desde la Prehistoria hasta el siglo XX). En cada época:
- **Explorar:** Navegar por mapas históricos isométricos de ciudades antiguas
- **Excavar:** Usar herramientas arqueológicas para encontrar artefactos (pincel, piqueta, escoba)
- **Investigar:** Hablar con NPCs históricos, leer documentos antiguos, resolver puzzles
- **Coleccionar:** Guardar artefactos en museo personal con información histórica
- **Descubrir:** Resolver misterios (¿Qué causó la caída de Roma? ¿Dónde está El Dorado?)

El juego tiene sistema de "timeline" donde los jugadores ven cómo las civilizaciones se conectan en el tiempo. Hay modo historia (desvelar el secreto del tiempo) y modo sandbox libre (explorar cualquier época sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar herramienta, hablar con NPC, excavar área
- **Arrastrar (Drag):** Mover arqueólogo en el mapa, arrastrar herramientas de excavación
- **Pinch:** Zoom en el mapa histórico (0.5x-3x) para ver detalles arquitectónicos
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap largo (Long press):** Ver información detallada de artefacto (historia, fecha, cultura)
- **Swipe horizontal:** Cambiar entre vista de mapa, vista de excavación, vista de timeline
- **Gestos complejos:**
  - Shake del dispositivo = "detectar artefacto cercano" (brilla área con tesoros)
  - Dibujo de pincelada = excavar suavemente (quitar arena/del tierra sin dañar)
  - Doble tap en artefacto = añadir a colección favorita
  - Arrastrar herramienta a área = usar herramienta específica (pincel, piqueta, escoba)
- **Multitouch hasta 4 dedos:** Excavar múltiples áreas simultáneamente
- **Escribir:** Nombrar artefactos, escribir notas de investigación

**Accesibilidad:**
- Herramientas con iconos grandes (min 60px) y etiquetas claras
- Voice assistant explica historia ("Esta estatua es de Egipto, 2500 A.C.")
- Modo "Easy Excavation" con menos precisión requerida para niños más pequeños
- Haptic feedback para feedback táctil (vibración al encontrar artefacto)
- Color coding por tipo de artefacto (cerámica=marrón, metal=plateado, joyas=azul)
- Modo "Voice Narration" para escuchar historia completa

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para mapas históricos isométricos (50+ épocas)
  - `<canvas>` para vista de excavación (simulación de capas de tierra)
  - `<canvas>` para timeline interactivo (línea de tiempo histórica)
  - `<video>` para cutscenes de descubrimientos históricos
  - `<input type="text">` para nombrar artefactos y escribir notas
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de mapas, sistema de excavación)
  - Timeline system: Custom para visualizar 50+ épocas históricas
  - AI de NPCs: Diálogos históricos contextualizados por época
  - Framework UI: Vue.js o React (componentes reactivos)
  - State management: Vuex para estado del arqueólogo (épocas visitadas, artefactos, timeline)
  - Storage: IndexedDB para guardar 500+ artefactos y progreso histórico
  - Animaciones: GSAP para transiciones entre épocas
  - Puzzles: Custom algorithms para puzzles históricos (criptografía antigua, rompecabezas)
- **CSS:**
  - Grid layout para panel de herramientas (6x4 grid responsivo)
  - CSS Transforms para zoom del mapa (transform-origin: center)
  - CSS Animations para feedback de excavación (dust particles, glow)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming por época (Egipto=oro/azul, Roma=blanco/mármol, Maya=naranja/jade)
  - Flexbox para contenedores de timeline y museo
- **Otros:**
  - Web Audio API: Sonidos de excavación y ambiente histórico
  - Touch Events API: Multi-touch para excavación simultánea
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar 500+ artefactos con datos históricos (offline play)
  - Service Workers: PWA para explorar épocas offline (modo sandbox sin timeline)
  - Canvas API: Renderizar mapas, excavación, timeline
  - Web Speech API: Narración de historia por voz

**Características Visuales:**
- **Paleta de colores:**
  - Egipto (2500 A.C.): Oro (#FFD700), arena (#F4A460), lapislázuli (#26619C)
  - Grecia (500 A.C.): Mármol blanco (#F5F5F5), azul mediterráneo (#0077BE), terracota (#E2725B)
  - Roma (100 D.C.): Piedra gris (#808080), rojo imperial (#DC143C), bronce (#CD7F32)
  - Maya (600 D.C.): Jade (#00A86B), piedra caliza (#D2B48C), ámbar (#FFBF00)
  - Renacimiento (1500): Tiza (#F5F5DC), rojo terciopelo (#800020), oro (#FFD700)
- **Animaciones:**
  - Viaje en el tiempo: Flash de luz + efecto de "warp" temporal (1.5s)
  - Excavación: Partículas de arena/del tierra suben (0.3-1s)
  - Artefacto descubierto: Flash dorado + glow (0.5s)
  - NPC hablando: Bubbles de texto con fade in/out (0.5s)
  - Timeline scroll: Pan suave entre épocas (0.8s)
- **Feedback visual:**
  - Artefacto cerca: Área brilla con pulsante dorado (0.5s)
  - Excavación exitosa: Artefacto emerge de tierra con sparkle (1s)
  - Pista descubierta: Modal con información histórica (1.5s)
  - Misterio resuelto: Cinematic con explicación histórica (3s)
  - Colección completada: Modal con artefacto real + historia (2s)
- **Personalización:**
  - 50+ épocas históricas (Prehistoria, Egipto, Sumeria, Grecia, Roma, Maya, Azteca, Vikingos, Medioevo, Renacimiento, etc.)
  - 500+ artefactos reales (estatuas, joyas, herramientas, documentos, armaduras)
  - 20+ herramientas arqueológicas (pincel, piqueta, escoba, pala, cepillo)
  - Avatar de arqueólogo con 60+ combinaciones (ropa de época, sombrero, herramientas)
  - Skins de mapas (realista, pintura al óleo, acuarela, cómic)

**Audio:**
- **Efectos de sonido:**
  - Excavar con pincel: Dust sound suave (100-200ms)
  - Excavar con piqueta: Rock crack + thud (300ms)
  - Artefacto descubierto: Mystic chime (C4-E4-G4, 1s)
  - NPC hablando: Voice bubble sound (200ms)
  - Viaje en el tiempo: Whoosh temporal (1.5s)
  - Pista descubierta: Ding de descubrimiento (500ms)
  - Misterio resuelto: Fanfare histórico (8 notas, 2s)
- **Música:**
  - Menú principal: Epic orchestral time travel theme (100 BPM)
  - Egipto: Middle Eastern oud + percussion (90 BPM)
  - Grecia: Lyre + aulos + drums (85 BPM)
  - Roma: Trumpets + timpani + lira (95 BPM)
  - Maya: Marimbas + flutes + drums (80 BPM)
  - Renacimiento: Lute + viol + harpsichord (90 BPM)
  - Timeline: Ambient time flow (synth pads, 70 BPM)
- **Voz:**
  - Tutorial: Voz de historiador amigable ("¡Bienvenido, Cazador del Tiempo!")
  - Época entrante: Voz de narrador ("Estamos en el Egipto de 2500 A.C.")
  - Artefacto descubierto: Voz explica historia ("Esta estatua representa al dios Osiris")
  - Misterio resuelto: Voz de celebración ("¡Has descubierto el secreto!")
- **Audio espacial:** Sonidos 3D por época (ambientes históricos únicos)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 130-160 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en mapas históricos con 300+ entidades
  - Latencia: <50ms para respuesta de excavación (feedback instantáneo)
  - Épocas máximas: 50+ épocas con mapas únicos
  - Artefactos: 500+ artefactos con datos históricos
  - Memoria máxima: 300MB (incluye assets de 50 épocas, 500 artefactos)
  - Timeline: <100ms para navegar entre épocas
- **Riesgos técnicos:**
  - Precisión histórica vs. jugable: Balancear realismo con diversión
  - Generación de mapas históricos: Crear 50+ mapas únicos sin repetir
  - Sistema de timeline complejo: Navegar entre 50+ épocas puede ser confuso
  - Gestión de state: Guardar 500+ artefactos y progreso histórico en IndexedDB
  - Content creation: Investigación histórica para 50+ épocas es trabajo intensivo

**Valor Educativo:**
- **Historia real:** Los niños aprenden sobre 50+ civilizaciones y 500+ artefactos históricos
- **Arqueología aplicada:** Entienden cómo se excava, documenta y preserva el pasado
- **Geografía histórica:** Aprenden dónde estaban ubicadas las civilizaciones
- **Cronología:** Desarrollan sentido de tiempo histórico (qué pasó antes/después)
- **Análisis crítico:** Resuelven misterios históricos investigando evidencias
- **Apertura cultural:** Exposición a 50+ culturas diferentes del mundo
- **Vocabulario histórico:** Aprenden términos: excavación, artefacto, civilización, dinastía, imperio

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Renderizado de mapas históricos
- [Assassin's Creed Discovery Tours - Historical exploration](https://www.ubisoft.com/) - Inspiración para mapas históricos
- [Museum of the World - Interactive timeline](https://britishmuseum.org/) - Timeline de civilizaciones
- [Smithsonian Learning Lab - Educational history](https://learninglab.si.edu/) - Recursos históricos educativos
- [Khan Academy - World History](https://www.khanacademy.org/humanities/world-history) - Referencia histórica
- [Web Audio API - Historical ambiance](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Ambientes históricos
- [PWA - Offline exploration](https://web.dev/offline/) - PWA para explorar épocas sin internet
- [Canvas API - Timeline visualization](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - Renderizado de timeline

---

#### Idea #13: Robotics Lab: Mecha Engineers

**Concepto:**
Juego de robótica y programación donde los niños diseñan, construyen y programan robots virtuales para completar misiones desafiantes. Combina simulación de física real con programación tipo Scratch/Blockly, enseñando lógica de programación, ingeniería y mecánica.

**Motivación:**
- **Ingeniería creativa:** Diseñar robots únicos con piezas personalizables
- **Programación visual:** Bloques de código fáciles de entender (tipo Scratch)
- **Misiones desafiantes:** Niveles progresivos que aumentan complejidad
- **Competencia de robots:** Battles de robots donde compiten diseños y programas
- **Desbloqueo de tecnologías:** Descubrir nuevos sensores, motores, piezas avanzadas

**Mecánica Principal:**
Los jugadores son ingenieros en un laboratorio de robótica. El juego tiene 3 modos:
1. **Diseño:** Armar robots con piezas (chasis, ruedas, brazos mecánicos, sensores, motores, baterías)
2. **Programación:** Usar bloques visuales tipo Scratch para programar comportamiento del robot (avanzar, girar, detectar obstáculos, recoger objetos)
3. **Misión:** Completar desafíos con el robot (laberintos, recolección de objetos, carreras, battles)

Las misiones progresan:
- **Nivel 1-10:** Robot básico con 2 ruedas + programación simple (avanzar, girar)
- **Nivel 11-30:** Sensores (ultrasonido, infrarrojo) + bucles y condicionales
- **Nivel 31-50:** Brazos mecánicos + funciones y variables
- **Nivel 51-70:** Robots con múltiples articulaciones + programación avanzada
- **Nivel 71-100:** Battles de robots contra IA y otros jugadores

Hay modo historia (convertirse en ingeniero jefe) y modo sandbox libre (diseñar sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar pieza, bloque de código, herramienta
- **Arrastrar (Drag):**
  - En modo diseño: Arrastrar piezas al chasis del robot
  - En modo programación: Arrastrar bloques de código al área de trabajo
- **Pinch:** Zoom en el robot para ver detalles mecánicos (0.5x-3x)
- **Dos dedos (drag):** Pan/mover la vista del área de trabajo
- **Tap largo (Long press):** Ver propiedades de pieza (peso, consumo de energía, torque)
- **Swipe horizontal:** Cambiar entre modo diseño, programación, misión
- **Gestos complejos:**
  - Shake del dispositivo = "test robot" (ejecutar programa)
  - Dibujo de línea = conectar piezas con cables
  - Doble tap en bloque de código = ver documentación de comando
  - Arrastrar bloque a otro = anidar bloques (bucles, condicionales)
- **Multitouch hasta 5 dedos:** Conectar múltiples piezas simultáneamente
- **Escribir:** Nombrar robot, escribir comentarios en código

**Accesibilidad:**
- Piezas con iconos grandes (min 60px) y etiquetas claras
- Bloques de código con colores por tipo (movimiento=verde, sensores=azul, lógica=naranja)
- Voice assistant explica bloques ("Este bloque hace avanzar el robot 100 pasos")
- Modo "Easy Code" con bloques predefinidos para principiantes
- Haptic feedback para feedback táctil (vibración al conectar pieza)
- Color coding por tipo de pieza (estructura=gris, movimiento=rojo, sensor=azul, energía=amarillo)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de robot (3D simulado con 2D transforms)
  - `<canvas>` para área de programación de bloques (Blockly-like)
  - `<canvas>` para simulación de física del robot
  - `<video>` para tutoriales de robótica
  - `<input type="text">` para nombrar robot y escribir comentarios
- **JavaScript:**
  - Physics engine: Matter.js o Box2D (simulación de física real del robot)
  - Block coding: Google Blockly (bloques visuales tipo Scratch)
  - Game engine: Phaser 3 (renderizado de robot, sistema de misiones)
  - AI de robots: Algoritmos para movimiento automático, pathfinding (A*)
  - Framework UI: Vue.js o React (componentes reactivos)
  - State management: Vuex para estado del robot (piezas, programa, inventario)
  - Storage: IndexedDB para guardar 100+ diseños de robots
  - Animaciones: GSAP para transiciones entre modos
  - Compilador: Custom para convertir bloques visuales a JavaScript real
- **CSS:**
  - Grid layout para panel de piezas (10x8 grid responsivo)
  - CSS Flexbox para área de bloques de código (snap-to-grid)
  - CSS Transforms para zoom del robot (transform-origin: center)
  - CSS Animations para feedback de conexión (glow, pulse)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por usuario)
- **Otros:**
  - Web Audio API: Sonidos mecánicos de robots (motores, servos, grippers)
  - Touch Events API: Multi-touch para conexión de piezas y bloques
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar 100+ diseños de robots (offline play)
  - Service Workers: PWA para diseñar y programar robots sin conexión
  - Canvas API: Renderizar robot y simulación física
  - Web Speech API: Dictar comentarios en código
  - Matter.js - Physics simulation](https://brm.io/matter-js/) - Simulación física de robots
- [Google Blockly - Visual programming](https://developers.google.com/blockly) - Bloques visuales tipo Scratch
- [Scratch - Block coding for kids](https://scratch.mit.edu/) - Inspiración para programación visual
- [Roblox - Game creation platform](https://www.roblox.com/) - Inspiración para diseño creativo
- [Arduino - Real robotics platform](https://www.arduino.cc/) - Referencia de robótica real
- [Web Audio API - Mechanical sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de motores
- [PWA - Offline engineering](https://web.dev/offline/) - PWA para diseñar robots sin internet
- [Canvas API - Robot rendering](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - Renderizado de robot

**Características Visuales:**
- **Paleta de colores:**
  - Laboratorio: Tonos científicos (#E3F2FD azules claros, #F5F5F5 grises)
  - Robot: Metálico (#A0A0A0, #D3D3D3) con acentos de color por usuario (azul, rojo, verde)
  - Bloques de código: Colores por tipo (movimiento=#4CAF50 verde, sensores=#2196F3 azul, lógica=#FF9800 naranja, variables=#9C27B0 púrpura)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.6, backdrop-filter blur 10px)
- **Animaciones:**
  - Conectar pieza: Click + glow + snap sound (0.2s)
  - Robot moviéndose: Wheel rotation + body tilt (según velocidad)
  - Brazo mecánico: Joint animation (servo motor sound + smooth motion)
  - Programa ejecutándose: Bloques se iluminan en orden (0.1s por bloque)
  - Misión completada: Flash verde + confetti de tuercas (2s)
- **Feedback visual:**
  - Pieza conectada: Borde verde brillante, icono checkmark (0.3s)
  - Programa correcto: Robot se mueve, bloques iluminan en verde
  - Programa incorrecto: Robot se detiene, bloques fallan parpadean en rojo
  - Misión fallida: Shake rojo + mensaje de error ("Robot se chocó")
  - Robot mejorado: Stats mejorados con counting animation (0→10→100)
- **Personalización:**
  - 100+ piezas de robot (chasis, ruedas, brazos, sensores, motores, baterías, LEDs)
  - 50+ tipos de sensores (ultrasonido, infrarrojo, cámara, micrófono, GPS, IMU)
  - 30+ tipos de motores (servo, DC, stepper, actuadores lineales)
  - Avatar de ingeniero con 50+ combinaciones (gafas, camisa, herramientas, casco)
  - Skins de laboratorio (moderno, industrial, espacial, cyberpunk)
  - 200+ bloques de código (movimiento, sensores, lógica, variables, funciones)

**Audio:**
- **Efectos de sonido:**
  - Conectar pieza: Click metálico satisfactorio (150ms)
  - Motor encendido: Servo whir (50-200Hz, continuous)
  - Brazo moviéndose: Servo motor sound (300ms)
  - Robot chocó: Crash + metal bending (500ms)
  - Sensor activado: Beep corto (200ms)
  - Misión completada: Fanfare mecánico (6 notas, 2s)
  - Power-up: Mechanical charge + release (1s)
- **Música:**
  - Laboratorio idle: Ambient industrial (hum de maquinaria, 70 BPM)
  - Diseñando robot: Upbeat electronic (synth, 100 BPM)
  - Programando: Focused lo-fi (keyboard + pads, 80 BPM)
  - Misión activa: Exciting tech (percusión + synth, 120 BPM)
  - Battle de robots: Intense combat music (electronic + drums, 130 BPM)
- **Voz:**
  - Tutorial: Voz de ingeniero amigable ("¡Bienvenido al Laboratorio de Robótica!")
  - Explicación de pieza: Voz técnica ("Este sensor ultrasónico detecta obstáculos a 3 metros")
  - Error en programa: Voz de debugging ("El robot se detuvo en la línea 5")
  - Misión completada: Voz de celebración ("¡Excelente diseño!")
- **Audio espacial:** Sonidos 3D de robots (motores desde la izquierda suenan en el canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 140-170 horas (6-7 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de robot con física (20+ piezas simultáneas)
  - Latencia: <100ms para respuesta de conexión de pieza (feedback instantáneo)
  - Física: <50ms para calcular movimiento del robot (Matter.js optimization)
  - Bloques de código: <200ms para compilar bloque visual a JavaScript
  - Memoria máxima: 250MB (incluye 100+ piezas, 200+ bloques de código)
  - Partículas: 500+ partículas para efectos de confetti de tuercas
- **Riesgos técnicos:**
  - Simulación física realista: Mantener physics estable con múltiples piezas
  - Compilador de bloques: Convertir bloques visuales a JavaScript sin bugs
  - Balance de dificultad: Misiones muy fáciles aburren, muy difíciles frustran
  - Gestión de state: Guardar 100+ diseños de robots en IndexedDB sin bloqueo
  - Performance: 20+ piezas simultáneas pueden consumir mucha CPU en móviles de gama baja

**Valor Educativo:**
- **Robótica real:** Los niños aprenden sobre piezas reales de robots (motores, sensores, baterías)
- **Programación visual:** Desarrollan lógica de programación sin escribir código
- **Ingeniería mecánica:** Entienden cómo funcionan sistemas mecánicos (engranajes, palancas, motores)
- **Física aplicada:** Aprenden sobre fuerza, torque, velocidad, fricción
- **Resolución de problemas:** Las misiones requieren pensar soluciones creativas
- **Pensamiento algorítmico:** Desarrollan habilidades para diseñar algoritmos (avanzar, detectar, reaccionar)
- **Colaboración:** Mode cooperative donde 2-4 jugadores diseñan robots juntos

**Referencias e Inspiración:**
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Simulación física de robots
- [Google Blockly - Visual programming](https://developers.google.com/blockly) - Bloques visuales tipo Scratch
- [Scratch - Block coding for kids](https://scratch.mit.edu/) - Inspiración para programación visual
- [Roblox - Game creation platform](https://www.roblox.com/) - Inspiración para diseño creativo
- [Arduino - Real robotics platform](https://www.arduino.cc/) - Referencia de robótica real
- [Web Audio API - Mechanical sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de motores
- [PWA - Offline engineering](https://web.dev/offline/) - PWA para diseñar robots sin internet
- [Canvas API - Robot rendering](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - Renderizado de robot

---

#### Idea #14: Math Champions: Number Ninjas

**Concepto:**
Juego de matemáticas avanzadas donde los niños son ninjas numéricos que completan misiones matemáticas épicas, desde aritmética básica hasta cálculo y álgebra lineal. Combina acción tipo ninja tower defense con educación matemática rigurosa, enseñando conceptos reales de matemáticas mientras se divierten.

**Motivación:**
- **Poder matemático:** Las matemáticas son habilidades de ninja (más rápido = más poderoso)
- **Misiones épicas:** Derrotar monstruos matemáticos (Dragón de Ecuaciones, Fantasma de Fracciones)
- **Progresión matemática visible:** Ver mejorar habilidades matemáticas (desde sumas simples hasta integrales)
- **Logros ninjas:** Badges por dominio de conceptos ("Maestro del Cálculo", "Samurai del Álgebra")
- **Competencia global:** Leaderboard de "ninjas matemáticos más rápidos"

**Mecánica Principal:**
Los jugadores son ninjas en un mundo de números. Cada misión tiene:
1. **Enemy Waves:** Hordas de monstruos matemáticos atacan (cada monstruo es un problema matemático)
2. **Math Attack:** Los ninjas atacan resolviendo problemas:
   - **Aritmética:** Sumar/restar/multiplicar/dividir números en el aire
   - **Fracciones:** Simplificar fracciones, convertir a decimales
   - **Álgebra:** Resolver x en ecuaciones lineales (2x + 5 = 15)
   - **Geometría:** Calcular áreas, perímetros, volúmenes
   - **Cálculo:** Derivar funciones (para ninjas avanzados)
3. **Power-ups:** Habilidades especiales matemáticas:
   - **Fórmula de ataque:** Usar fórmulas reales para daño masivo
   - **Defensa numérica:** Escudo basado en prime numbers
   - **Teleport algebraica:** Moverse rápido resolviendo ecuaciones

El juego tiene sistema de "Dojo" donde los ninjas practican conceptos antes de misiones. Hay modo historia (derrotar al Rey Matemático) y modo arena infinita (desafíos sin fin).

**Interacción Móvil:**
- **Tap simple:** Seleccionar respuesta correcta, atacar monstruo
- **Tap rápido:** Modo "Ninja Speed" (responder lo más rápido posible)
- **Arrastrar (Drag):** Organizar términos de ecuación para simplificar
- **Pinch:** Zoom en el campo de batalla (0.5x-2x)
- **Dos dedos (drag):** Pan/mover la vista del campo de batalla
- **Tap largo (Long press):** Ver explicación detallada de concepto matemático
- **Swipe horizontal:** Cambiar entre vista de batalla, dojo, stats
- **Gestos complejos:**
  - Shake del dispositivo = usar power-up ninja (ataque especial)
  - Dibujo de símbolo = activar fórmula (ej: dibujar ∑ = suma series)
  - Doble tap en monstruo = ataque crítico (doble daño si respuesta correcta)
  - Arrastrar término a otro = simplificar ecuación (2x + 3x = 5x)
- **Multitouch hasta 4 dedos:** Seleccionar múltiples respuestas simultáneamente
- **Escribir:** Modo de práctica libre para escribir ecuaciones

**Accesibilidad:**
- Problemas matemáticos con fuentes grandes (min 24px) y alto contraste
- Botones de respuesta generosos (min 80x80px)
- Voice assistant lee problemas ("¿Cuánto es 25 multiplicado por 4?")
- Modo "Slow Ninja" para practicar sin tiempo
- Haptic feedback para feedback táctil (vibración al acertar)
- Color coding por tipo de problema (aritmética=rojo, fracciones=azul, álgebra=verde)
- Modo "Math Tutor" con explicaciones paso a paso

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para campo de batalla (renderizado de ninjas y monstruos)
  - `<canvas>` para visualización de ecuaciones (MathJax-like rendering)
  - `<canvas>` para arena infinita (procedural generation de monsters)
  - `<video>` para cutscenes de matemáticas épicas
  - `<input type="text">` para modo de práctica libre
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de batalla, sistema de combate)
  - Math engine: Custom para generar y resolver problemas matemáticos
  - Procedural generation: Algoritmos para generar infinitos monstruos matemáticos
  - Framework UI: Vue.js o React (componentes reactivos)
  - State management: Vuex para estado del ninja (skills, XP, inventario)
  - Storage: IndexedDB para guardar progreso matemático (niveles desbloqueados, stats)
  - Animaciones: GSAP para transiciones entre misiones
  - Charts: Chart.js para visualizar progreso matemático
  - LaTeX parser: MathJax o KaTeX para renderizar ecuaciones complejas
- **CSS:**
  - Grid layout para panel de respuestas (4x4 grid responsivo)
  - CSS Flexbox para contenedores de UI (stats, dojo, inventario)
  - CSS Transforms para animaciones de ataque (scale, translate, rotate)
  - CSS Animations para feedback visual (flash, glow, pulse, shake)
  - CSS Variables para theming (cambiar colores por usuario)
  - Backdrop-filter para blur de paneles superpuestos
- **Otros:**
  - Web Audio API: Sonidos de combate ninja y matemáticas
  - Touch Events API: Multi-touch para selección múltiple
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar progreso matemático (offline play)
  - Service Workers: PWA para practicar matemáticas sin conexión
  - Canvas API: Renderizar batalla y ecuaciones
  - MathJax - Equation rendering](https://www.mathjax.org/) - Renderizado de ecuaciones
- [Khan Academy - Math learning](https://www.khanacademy.org/math) - Referencia matemática
- [Brilliant - Interactive math](https://brilliant.org/) - Matemáticas interactivas
- [Prodigy Math - Math RPG game](https://www.prodigygame.com/) - Inspiración para gamificación de matemáticas
- [DragonBox - Algebra learning](https://dragonbox.com/) - Álgebra visual
- [Web Audio API - Combat sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de combate
- [PWA - Offline math practice](https://web.dev/offline/) - PWA para practicar matemáticas sin internet
- [Canvas API - Battle rendering](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - Renderizado de batalla

**Características Visuales:**
- **Paleta de colores:**
  - Campo de batalla: Estilo épico de torre ninja (rojo=#DC143C, negro=#1A1A1A, dorado=#FFD700)
  - Ninjas: Colores por nivel (novicio=blanco, aprendiz=gris, experto=negro, maestro=dorado)
  - Monstruos matemáticos: Colores por tipo (dragón=rojo, fantasma=azul, ogro=verde)
  - Ecuaciones: Colores por tipo (aritmética=naranja, álgebra=verde, cálculo=púrpura)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, backdrop-filter blur 10px)
- **Animaciones:**
  - Ninja atacando: Slash animation con trail de partículas (0.3s)
  - Monstruo derrotado: Fade out + explosion de números (0.5s)
  - Respuesta correcta: Flash verde + checkmark animado (0.3s)
  - Respuesta incorrecta: Shake rojo + error message (0.5s)
  - Power-up activado: Glow dorado pulsante (2s)
  - Subir de nivel: Flash brillante + effects de luz (2s)
- **Feedback visual:**
  - Problema matemático: Display grande con LaTeX rendering
  - Respuestas: 4 opciones con colores (correcta=verde, incorrectas=rojas)
  - Combo activado: Texto "COMBO x5" pulsa con colores
  - Tiempo restante: Progress bar circular (verde→amarillo→rojo)
  - Stats mejorados: Counting numbers animation (0→50→100)
- **Personalización:**
  - 100+ misiones matemáticas (desde aritmética básica hasta cálculo)
  - 20+ tipos de monstruos matemáticos (dragón de ecuaciones, fantasma de fracciones, etc.)
  - 30+ power-ups ninjas (fórmulas de ataque, defensa, teleport)
  - Avatar de ninja con 80+ combinaciones (máscara, arma, armadura, color)
  - Skins de campo de batalla (templo, torre, dojo, arena)
  - 500+ problemas matemáticos por categoría (aritmética, fracciones, álgebra, geometría, cálculo)

**Audio:**
- **Efectos de sonido:**
  - Ninja slash: Sword whoosh + shing (300ms)
  - Monstruo derrotado: Monster cry + explosion (500ms)
  - Respuesta correcta: Chime ascendente (C4-E4-G4, 200ms)
  - Respuesta incorrecta: Buzz descendente (E2-C2, 200ms)
  - Power-up: Charge up + release (1s)
  - Combo activado: Ninja sound (whoosh + shout, 400ms)
  - Subir de nivel: Fanfare épico (8 notas, 2s)
- **Música:**
  - Menú principal: Epic ninja orchestral (taiko drums + shakuhachi, 100 BPM)
  - Batalla: Intense combat music (percusión + orquestal, 130 BPM)
  - Dojo: Meditative zen music (koto + bamboo flute, 70 BPM)
  - Boss fight: Dramatic boss theme (taiko drums + brass, 120 BPM)
  - Victoria: Triumphant orchestral (130 BPM)
- **Voz:**
  - Tutorial: Voz de sensei ninja ("¡Bienvenido, Ninja Numérico!")
  - Problema matemático: Voz lee ecuación ("¿Cuánto es 7 multiplicado por 8?")
  - Combo alto: Voz de hype ("¡COMBO X10! ¡Sigue así!")
  - Subir de nivel: Voz de celebración ("¡Has ascendido!")
- **Audio espacial:** Sonidos 3D para combate (slash desde la izquierda suena en el canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 110-130 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en batallas con 50+ entidades (ninjas + monstruos)
  - Latencia: <100ms para respuesta de matemática (feedback instantáneo)
  - Problemas matemáticos: <200ms para generar y renderizar (LaTeX/MathJax)
  - Partículas: 500+ partículas para efectos de combate
  - Memoria máxima: 200MB (incluye 100+ misiones, 500+ problemas)
  - Offline: Progresión guardada para practicar sin conexión
- **Riesgos técnicos:**
  - Balance de dificultad: Matemáticas muy fáciles aburren, muy difíciles frustran
  - Sistema de progresión: Mapear correctamente niveles matemáticos (aritmética → álgebra → cálculo)
  - Renderizado de ecuaciones: LaTeX/MathJax puede ser lento en móviles de gama baja
  - Generación de problemas: Crear 500+ problemas únicos sin repetir
  - Performance: 50+ entidades simultáneas pueden consumir mucha CPU

**Valor Educativo:**
- **Matemáticas reales:** Los niños aprenden desde aritmética básica hasta cálculo
- **Fluidez mental:** Desarrollan velocidad y precisión en cálculos mentales
- **Pensamiento lógico:** Resolución de problemas paso a paso
- **Conceptos matemáticos:** Entienden fracciones, álgebra, geometría, cálculo
- **Memoria a largo plazo:** Repetición espaciada retiene conocimiento
- **Competencia sana:** Battles fomentan superación personal y aprendizaje
- **Resilencia:** Los problemas difíciles requieren intentos múltiples

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Renderizado de batalla
- [MathJax - Equation rendering](https://www.mathjax.org/) - Renderizado de ecuaciones
- [Khan Academy - Math learning](https://www.khanacademy.org/math) - Referencia matemática
- [Brilliant - Interactive math](https://brilliant.org/) - Matemáticas interactivas
- [Prodigy Math - Math RPG game](https://www.prodigygame.com/) - Inspiración para gamificación de matemáticas
- [DragonBox - Algebra learning](https://dragonbox.com/) - Álgebra visual
- [Web Audio API - Combat sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de combate
- [PWA - Offline math practice](https://web.dev/offline/) - PWA para practicar matemáticas sin internet
- [Canvas API - Battle rendering](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - Renderizado de batalla

---

## 📊 Resumen del Progreso

### Ideas Completadas
- **Lote 1:** Ideas #1-#6 ✅ (6 ideas) - Programación, Arte, Ciencia, Ecología, Música
- **Lote 2:** Ideas #7-#10 ✅ (4 ideas) - Espacio, Historia, Robótica, Matemáticas
- **Lote 3:** Ideas #11-#14 ✅ (4 ideas) - Conservación, Deportes, Gastronomía, Detectives
- **Lote 4:** Ideas #15-#18 ✅ (4 ideas) - Detectives, Investigación
- **Total:** 18/100 ideas (18% completado)

### Ideas por Categoría
- **Educación STEM:** 6 ideas (Code Quest, Science Lab, Space Explorer, Robotics Lab, Math Champions)
- **Arte y Creatividad:** 3 ideas (Art Battle, Chef Academy, Time Hunters)
- **Ciencias Naturales:** 4 ideas (Eco Warriors, Wildlife Rangers, Science Lab)
- **Deportes y Salud:** 2 ideas (Sports League, Chef Academy)
- **Investigación y Misterio:** 3 ideas (Detective Squad, Time Hunters)

---

#### Idea #15: Wildlife Rangers: Safari Rescue

**Concepto:**
Juego de conservación de vida silvestre donde los jugadores son guardaparques que protegen animales, restauran hábitats y combaten la caza furtiva. Combina simulación de ecosistemas con acción tipo tower defense, enseñando biología, ecología y conservación ambiental.

**Motivación:**
- **Misión heroica:** Salvar especies en peligro de extinción es visceralmente gratificante
- **Conexión con animales:** Cada animal tiene personalidad única e historia
- **Progresión de conservación:** Ver un hábitat degradado convertirse en paraíso floreciente
- **Logros ambientales:** Badges por especies salvadas ("Guardián del Elefante", "Protector de Tigres")
- **Impacto real visible:** Ver crecer la población de animales gracias a las decisiones

**Mecánica Principal:**
Los jugadores son guardaparques en un ecosistema amenazado. El juego tiene 3 sistemas principales:
1. **Protección:** Defender animales de cazadores furtivos (tower defense con trampas, drones, patrullas)
2. **Restauración:** Reconstruir hábitats (replantar árboles, limpiar ríos, crear corredores migratorios)
3. **Investigación:** Rastrear animales con collares GPS, estudiar comportamiento, identificar amenazas

Las misiones progresan:
- **Nivel 1-10:** Proteger especie común (cebras, antílopes) de cazadores básicos
- **Nivel 11-30:** Restaurar hábitat degradado + usar tecnología (drones, cámaras trampa)
- **Nivel 31-50:** Proteger especies en peligro (rinocerontes, tigres) + combatir redes de caza furtiva
- **Nivel 51-70:** Investigar enfermedades, tratar animales heridos, rehabilitar
- **Nivel 71-100:** Crear reservas nacionales completas + educar comunidades locales

Hay modo historia (salvar el ecosistema de extinción) y modo sandbox (crear tu propia reserva).

**Interacción Móvil:**
- **Tap simple:** Seleccionar animal, herramienta, colocar trampa/cámara
- **Arrastrar (Drag):** Mover rangers, reorganizar patrullas, arrastrar recursos
- **Pinch:** Zoom en el mapa del ecosistema (0.5x-3x)
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap largo (Long press):** Ver información detallada de animal (especie, estado, población)
- **Swipe horizontal:** Cambiar entre vista de mapa, vista de animales, vista de estadísticas
- **Gestos complejos:**
  - Shake del dispositivo = alerta de emergencia (cazador detectado, animal herido)
  - Dibujo de patrulla = planear ruta de rangers (sigue el dibujo)
  - Doble tap en animal = ver perfil completo (historia, familia, amenazas)
  - Arrastrar recurso a animal = alimentar/tratar (acción directa)
- **Multitouch hasta 4 dedos:** Selección múltiple de rangers para patrullas simultáneas
- **Escribir:** Nombrar animales, escribir notas de campo

**Accesibilidad:**
- Animales con iconos grandes (min 70px) y etiquetas claras con especie
- Botones táctiles generosos (min 50x50px) con feedback visual claro
- Voice assistant explica especie ("Este elefante es matriarca de la manada")
- Modo "Easy Guard" con recursos más abundantes y amenazas menos frecuentes
- Haptic feedback para eventos (vibración fuerte cuando hay emergencia, suave para interacción)
- Color coding por estado del animal (sano=verde, herido=naranja, en peligro=rojo)
- Modo "Night Vision" para patrullas nocturnas con alto contraste

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para mapa del ecosistema (isométrico, 2048x2048px)
  - `<canvas>` para renderizado de animales (spritesheets animados)
  - `<canvas>` para vista de rastreo GPS (mapa de movimiento de animales)
  - `<video>` para cutscenes de rescates y nacimientos
  - `<input type="text">` para nombrar animales y escribir notas de campo
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de mapa, sistema de animales)
  - AI de animales: Boids algorithm + finite state machine (comer, dormir, migrar)
  - Pathfinding: A* algorithm para movimiento de rangers y animales
  - Sistema de ecosistema: Simulación de población (predador-presa, recursos)
  - Framework UI: Vue.js o React (componentes reactivos)
  - State management: Vuex para estado de la reserva (animales, recursos, amenazas)
  - Storage: IndexedDB para guardar ecosistema (miles de entidades, historias)
  - Animaciones: GSAP para transiciones entre vistas
  - Charts: Chart.js para visualizar población de especies
- **CSS:**
  - Grid layout para panel de herramientas (10 columnas responsivo)
  - CSS Transforms para zoom del mapa (transform-origin: center)
  - CSS Animations para feedback de animales (pulse, shake, fade)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de recursos y stats
- **Otros:**
  - Web Audio API: Sonidos ambientales de selva/sabana
  - DeviceOrientationEvent: Detectar shake para emergencias
  - Touch Events API: Multi-touch para selección múltiple
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar ecosistema completo (animales, hábitat, progreso)
  - Service Workers: PWA para gestionar reserva offline
  - Canvas API: Manipular píxeles para efectos de hábitat
  - Web Speech API: Dictar notas de campo

**Características Visuales:**
- **Paleta de colores:**
  - Ecosistema: Tonos naturales (selva=verde #228B22, sabana=dorado #DAA520, agua=azul #4169E1)
  - Animales: Colores realistas por especie (elefante=gris, león=marrón dorado, cebra=blanco/negro)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, backdrop-filter blur 10px)
  - Alertas: Colores de emergencia (peligro=rojo #DC143C, advertencia=amarillo #FFD700, éxito=verde #32CD32)
- **Animaciones:**
  - Animal caminando: Walk cycle con spritesheet (8 frames, 10 FPS)
  - Ranger patrullando: Walk cycle + flashlight effect (noche)
  - Cazador furtivo detectado: Flash rojo + shake de pantalla (0.5s)
  - Animal rescatado: Fade in de luz + sparkle effect (1s)
  - Hábitat restaurado: Green pulse que se expande (2s)
- **Feedback visual:**
  - Animal seleccionado: Borde brillante dorado + info card (0.3s)
  - Patrulla planeada: Línea punteada azul en el mapa
  - Amenaza detectada: Icono rojo pulsante + área de peligro marcada
  - Logro desbloqueado: Modal con badge animal + confetti de hojas (1.5s)
  - Población creciente: Counting numbers animation (0→10→100)
- **Personalización:**
  - 50+ especies animales (mamíferos, aves, reptiles, insectos)
  - 30+ herramientas de guardaparque (drones, cámaras trampa, collares GPS, vehículos)
  - 20+ tipos de hábitats (bosque tropical, sabana, humedales, manglares)
  - Avatar de guardaparque con 60+ combinaciones (uniforme, equipamiento, vehículo)
  - Skins de ecosistema (realista, acuarela, cómic, documental)

**Audio:**
- **Efectos de sonido:**
  - Animal llamando: Vocalizaciones reales de cada especie (elefante=trumpet, león=roar, pájaro=chirp)
  - Ranger caminando: Footsteps variados (hojas, tierra, agua, 100-200ms)
  - Cazador disparando: Gunshot distante + echo (500ms)
  - Dron volando: Buzz electrónico (continuous, 100Hz)
  - Cámara trampa: Click + shutter (150ms)
  - Animal rescatado: Chime ascendente (C4-E4-G4, 1s)
  - Logro: Wildlife fanfare (8 notas, 2s)
- **Música:**
  - Selva idle: Ambient tropical (pájaros, insectos, agua, 60 BPM)
  - Patrulla activa: Suspense strings (bajo, 70 BPM)
  - Amenaza detectada: Tense orchestral (drums + brass, 90 BPM)
  - Rescate exitoso: Inspirational orchestral (violins + piano, 100 BPM)
  - Hábitat restaurado: Celebratory world music (percusión + flautas, 120 BPM)
- **Voz:**
  - Tutorial: Voz de guardaparque experimentado ("¡Bienvenido al Parque Nacional!")
  - Animal herido: Alerta de emergencia ("¡Tigre herido detectado!")
  - Misión completada: Voz de celebración ("¡Especie salvada!")
- **Audio espacial:** Sonidos 3D para localizar animales (elefante a la izquierda suena en canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en mapa con 200+ animales simultáneos
  - Latencia: <100ms para respuesta de patrulla (feedback instantáneo)
  - Animales máximos: 500 para高端 devices, 200 para低端
  - Memoria máxima: 200MB (incluye sprites de 50 especies, hábitats)
  - Pathfinding: <50ms para calcular ruta de rangers (A* optimization)
- **Riesgos técnicos:**
  - Balance de ecosistema: Simular correctamente predator-presa sin colapsar
  - AI de animales realista: Comportamiento convincente sin exceso de CPU
  - Gestión de state: Guardar miles de animales y progreso en IndexedDB
  - Optimización de sprites: 50 especies con animaciones requiere compresión agresiva

**Valor Educativo:**
- **Biología real:** Los niños aprenden sobre 50+ especies animales, sus hábitats, comportamiento
- **Ecología aplicada:** Entienden ecosistemas, cadenas alimenticias, conservación
- **Geografía:** Aprenden dónde viven las especies (África, Asia, América)
- **Conciencia ambiental:** Entienden la crisis de biodiversidad y cómo ayudar
- **Vocabulario científico:** Aprenden términos: ecosistema, hábitat, depredador, presa, migración
- **Empatía:** Desarrollan conexión emocional con animales y su protección
- **Liderazgo:** Toman decisiones de gestión de recursos con consecuencias reales

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Renderizado de ecosistema
- [Boids algorithm - Flocking simulation](https://www.red3d.com/cwr/boids/) - Comportamiento de animales
- [Planet Zoo - Wildlife simulation](https://www.planetzoogame.com/) - Simulación de animales realista
- [African Parks - Real conservation](https://www.africanparks.org/) - Conservación real
- [WWF - World Wildlife Fund](https://www.worldwildlife.org/) - Información sobre especies
- [National Geographic Kids - Wildlife education](https://kids.nationalgeographic.com/) - Recursos educativos
- [Web Audio API - Jungle sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos ambientales
- [PWA - Offline ranger work](https://web.dev/offline/) - PWA para gestionar reserva sin internet

---

#### Idea #16: Sports League: Ultimate Champions

**Concepto:**
Juego de deportes multideportivo donde los jugadores crean atletas, entrenan, compiten y se convierten en leyendas del deporte. Combina simulación deportiva con gestión de equipo, enseñando sobre múltiples deportes, estrategia táctica y trabajo en equipo.

**Motivación:**
- **Gloria deportiva:** Ganar campeonatos y trofeos es visceralmente emocionante
- **Personalización de atletas:** Crear superatletas únicos con estadísticas personalizadas
- **Competencia global:** Leaderboards mundiales y ligas online
- **Desbloqueo de deportes:** 20+ deportes desde fútbol hasta deportes olímpicos
- **Carrera profesional:** Ver al atleta crecer de novato a leyenda

**Mecánica Principal:**
Los jugadores son entrenadores de atletas en una liga multideportiva. El juego tiene 3 sistemas principales:
1. **Entrenamiento:** Mejorar estadísticas del atleta (velocidad, fuerza, resistencia, técnica)
2. **Competición:** Participar en torneos y campeonatos de diferentes deportes
3. **Gestión:** Manejar el equipo, contrato de patrocinadores, equipamiento, estrategia

Los deportes disponibles:
- **Deportes de equipo:** Fútbol, baloncesto, voleibol, rugby, hockey, béisbol
- **Deportes individuales:** Atletismo, natación, tenis, gimnasia, artes marciales
- **Deportes olímpicos:** Saltos, ciclismo, remo, esquí, snowboard

La progresión:
- **Nivel 1-10:** Un deporte básico (fútbol) + atleta novato
- **Nivel 11-30:** 3-5 deportes + entrenamiento avanzado (gimnasio, nutrición)
- **Nivel 31-50:** 10 deportes + gestión de equipo + contratos de patrocinadores
- **Nivel 51-70:** 15 deportes + eventos internacionales + copas del mundo
- **Nivel 71-100:** 20+ deportes + Juegos Olímpicos + leyenda del deporte

Hay modo carrera (convertirse en leyenda) y modo multijugador (ligas online 1v1, 2v2, 5v5).

**Interacción Móvil:**
- **Tap simple:** Pase, tiro, defensa (depende del deporte)
- **Tap rápido:** Acciones rápidas (dribbling, sprint, bloqueo)
- **Arrastrar (Drag):** Mover jugador, apuntar tiro, dribbling táctico
- **Pinch:** Zoom en el campo/cancha (0.5x-2x)
- **Dos dedos (drag):** Pan/mover la vista del campo
- **Tap largo (Long press):** Ver estadísticas detalladas de atleta/oponente
- **Swipe horizontal:** Cambiar entre vista de partido, vista de equipo, vista de entrenamiento
- **Gestos complejos:**
  - Shake del dispositivo = celebración (taquillazo, fist pump)
  - Dibujo de táctica = planear jugada (pase curvo, tiro a ángulo)
  - Doble tap rápido = habilidad especial (chilena, mate, triple, etc.)
  - Arrastrar jugador a zona = marcar/defender tácticamente
- **Multitouch hasta 5 dedos:** Controlar múltiples jugadores simultáneamente (baloncesto 2v2)
- **Escribir:** Nombrar atleta, equipo, estrategia

**Accesibilidad:**
- Jugadores con iconos grandes (min 60px) y jerseys con números claros
- Botones táctiles generosos (min 50x50px) para acciones principales
- Voice assistant anuncia jugada ("¡Golazo! ¡Excelente tiro!")
- Modo "Assist Mode" con aim assist y predicción de pases
- Haptic feedback para feedback táctil (vibración al marcar gol, atajar tiro)
- Color coding por equipo (azul vs rojo, verde vs amarillo)
- Modo "Slow Motion Replay" para ver jugadas épicas

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para campo/cancha (renderizado isométrico/2.5D)
  - `<canvas>` para vista táctica (jugadores, zonas, rutas)
  - `<canvas>` para entrenamiento (minijuegos de skill)
  - `<video>` para replay de jugadas épicas
  - `<input type="text">` para nombrar atleta y equipo
- **JavaScript:**
  - Physics engine: Matter.js o Box2D (simulación de movimiento de pelota, colisiones)
  - Game engine: Phaser 3 (renderizado de campo, sistema de partido)
  - AI de oponentes: Finite state machine + comportamiento táctico
  - Sistema de estadísticas: Custom para calcular progreso de atleta
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado del equipo y liga
  - Networking: WebSockets (Socket.io) para multijugador en tiempo real
  - Animaciones: GSAP para transiciones entre vistas y celebraciones
  - Charts: Chart.js para visualizar estadísticas del atleta
- **CSS:**
  - Grid layout para panel de tácticas (10x8 grid responsivo)
  - CSS Flexbox para contenedores de UI (stats, entrenamiento, equipo)
  - CSS Transforms para zoom del campo (transform-origin: center)
  - CSS Animations para feedback de acciones (glow, pulse, shake)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por equipo)
- **Otros:**
  - Web Audio API: Sonidos de estadio, multitudes, efectos de partido
  - DeviceOrientationEvent: Detectar shake para celebraciones
  - Touch Events API: Multi-touch para control de múltiples jugadores
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar progreso del atleta (stats, trofeos, historia)
  - Service Workers: PWA para entrenar y jugar offline
  - Canvas API: Renderizar campo y jugadores
  - Web Speech API: Comandos de voz tácticos ("¡Pasa!", "¡Tira!")

**Características Visuales:**
- **Paleta de colores:**
  - Campo/Cancha: Colores realistas por deporte (césped=verde #228B22, baloncesto=madera #DEB887, tenis=azul #4169E1)
  - Jugadores: Jerseys con colores de equipo (personalizables)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, backdrop-filter blur 10px)
  - Estadísticas: Colores por atributo (velocidad=amarillo, fuerza=rojo, técnica=azul)
- **Animaciones:**
  - Jugador corriendo: Run cycle con spritesheet (8 frames, 12 FPS)
  - Tiro/pase: Animation de acción (0.3-0.5s)
  - Gol/marcado: Confetti + celebración (1.5s)
  - Celebración: Animación personalizada (taquillazo, fist pump, baile)
  - Replay: Slow motion de jugada épica (0.5x velocidad)
- **Feedback visual:**
  - Jugador seleccionado: Borde brillante dorado + info card (0.3s)
  - Pase exitoso: Línea verde que sigue la trayectoria (0.5s)
  - Tiro marcado: Flash blanco + icono GOAL/POINT (0.5s)
  - Tiro fallado: Shake rojo + mensaje de error (0.3s)
  - Trofeo ganado: Modal con copa dorada + confetti (2s)
- **Personalización:**
  - 20+ deportes con reglas y mecánicas únicas
  - 100+ opciones de personalización de atleta (físico, cabello, equipamiento)
  - 50+ diseños de jerseys y equipos
  - 30+ habilidades especiales (chilena, mate, triple, slam dunk, etc.)
  - Avatar de entrenador con 40+ combinaciones
  - Skins de estadios (realista, arcade, cómic)

**Audio:**
- **Efectos de sonido:**
  - Pase/tiro: Whistle + sonido de impacto pelota (100-300ms)
  - Gol/marcado: Cheering estadio + sirena de gol (1s)
  - Multitud: Ambient crowd noise (continuous, 60-80 BPM)
  - Silbato del árbitro: Sharp whistle (200ms)
  - Celebración: Victory sound + chant (1.5s)
  - Skill especial: Power-up sound (whoosh + impact, 500ms)
- **Música:**
  - Menú principal: Upbeat sports anthem (rock + drums, 120 BPM)
  - Partido: Dynamic stadium music (drums + brass, 100 BPM)
  - Entrenamiento: Motivational gym music (electronic, 130 BPM)
  - Victoria: Triumphant anthem (orchestra + choir, 140 BPM)
  - Copa del mundo: Epic championship theme (full orchestra, 110 BPM)
- **Voz:**
  - Tutorial: Voz de entrenador legendario ("¡Bienvenido a la Liga de Campeones!")
  - Gol marcado: Narrador de estadio ("¡GOOOOOL! ¡Qué jugada!")
  - Trofeo ganado: Voz de celebración ("¡Campeón del mundo!")
- **Audio espacial:** Sonidos 3D para estadio (multitud desde izquierda/centro/derecha)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 110-130 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en partidos con 22 jugadores (fútbol)
  - Latencia: <50ms para respuesta de controles (crucial para deportes)
  - Multijugador: <100ms de sincronización (WebSockets)
  - Jugadores máximos: 22 simultáneos
  - Memoria máxima: 180MB (incluye 20 deportes, assets de animación)
  - Physics: <16ms para calcular colisiones y movimiento de pelota
- **Riesgos técnicos:**
  - Balance de dificultad: Deportes muy fáciles aburren, muy difíciles frustran
  - Controles táctiles: Diseñar controles intuitivos para 20+ deportes
  - Multijugador en tiempo real: Sincronización sin lag en partidos online
  - AI de oponentes: Comportamiento táctico convincente sin predictibilidad

**Valor Educativo:**
- **Deportes reales:** Los niños aprenden reglas y estrategias de 20+ deportes
- **Estrategia táctica:** Desarrollan pensamiento estratégico y toma de decisiones
- **Trabajo en equipo:** Entienden importancia de colaboración en deportes de equipo
- **Física aplicada:** Aprenden sobre velocidad, fuerza, ángulos, trayectorias
- **Vocabulario deportivo:** Aprenden términos: offside, penalty, dribbling, tactic
- **Disciplina y perseverancia:** El entrenamiento requiere constancia y esfuerzo
- **Competencia sana:** Fomenta superación personal y fair play

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Renderizado de campo
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Simulación de pelota y colisiones
- [FIFA Mobile - Soccer game](https://www.ea.com/fifa/fifa-mobile-game) - Inspiración para fútbol
- [NBA 2K Mobile - Basketball game](https://nba.2k.com/) - Inspiración para baloncesto
- [Olympic Games - Multi-sport](https://www.olympics.com/) - Referencia de deportes olímpicos
- [ESPN Sports Analytics](https://www.espn.com/espn/plus) - Datos y estadísticas deportivas
- [Web Audio API - Stadium sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de estadio
- [Socket.io - Real-time multiplayer](https://socket.io/) - Multijugador en tiempo real

---

#### Idea #17: Chef Academy: Culinary Masters

**Concepto:**
Juego de cocina y gastronomía donde los jugadores aprenden a cocinar recetas de todo el mundo, gestionan restaurantes y compiten en competiciones culinarias. Combina simulación de cocina con gestión de restaurante, enseñando sobre ingredientes, técnicas culinarias y culturas gastronómicas.

**Motivación:**
- **Creatividad culinaria:** Experimentar con ingredientes para crear platos únicos
- **Maestría gastronómica:** Desbloquear recetas de países diferentes
- **Gestión de restaurante:** Ver un pequeño café convertirse en restaurante gourmet
- **Competencia de chefs:** Battles de cocina estilo "MasterChef Junior"
- **Descubrimiento cultural:** Cocinar platos tradicionales de 50+ países

**Mecánica Principal:**
Los jugadores son aprendices de chef que aspiran a convertirse en maestros culinarios. El juego tiene 4 sistemas principales:
1. **Cocina:** Preparar recetas siguiendo pasos (picar, saltear, hornear, decorar)
2. **Gestión de restaurante:** Manejar mesas, clientes, personal, inventario de ingredientes
3. **Exploración culinaria:** Desbloquear recetas de diferentes países y culturas
4. **Competición:** Participar en battles de cocina contra otros chefs

Las recetas progresan por dificultad:
- **Nivel 1-10:** Recetas básicas (huevos fritos, pasta simple, ensaladas)
- **Nivel 11-30:** Recetas intermedias (pizzas, burgers, tacos, sushi básico)
- **Nivel 31-50:** Recetas avanzadas (risotto, paella, curry, ramen)
- **Nivel 51-70:** Recetas gourmet (filet mignon, coq au vin, baklava)
- **Nivel 71-100:** Recetas maestras (cochinillo, wagyu, pastelería francesa compleja)

Los países/culturas: Italia, Francia, Japón, México, India, Tailandia, España, China, Grecia, Turquía, y 40+ más.

Hay modo historia (convertirse en chef estrella Michelin) y modo multijugador (battles 1v1, cooperación en restaurante).

**Interacción Móvil:**
- **Tap simple:** Seleccionar ingrediente, herramienta, servir plato
- **Arrastrar (Drag):**
  - En cocina: Arrastrar ingredientes a la sartén/horno
  - En restaurante: Mover platos a mesas
- **Pinch:** Zoom en la cocina (0.5x-2x) para ver detalles de ingredientes
- **Dos dedos (drag):** Pan/mover la vista del restaurante
- **Tap largo (Long press):** Ver información detallada de ingrediente (origen, propiedades, sustitutos)
- **Swipe horizontal:** Cambiar entre cocina, restaurante, recetario, competición
- **Gestos complejos:**
  - Shake del dispositivo = revolver/enfriar plato
  - Dibujo de corte = picar ingredientes (movimiento de cuchillo)
  - Doble tap en sartén = saltear rápido (action)
  - Arrastrar ingrediente a otro = mezclar/combinar
- **Multitouch hasta 4 dedos:** Manejar múltiples ollas/pastos simultáneamente
- **Escribir:** Nombrar platos propios, escribir notas de receta

**Accesibilidad:**
- Ingredientes con iconos grandes (min 60px) y etiquetas claras
- Utensilios con formas distintivas (cuchillo forma de hoja, espátula forma plana)
- Voice assistant receta paso a paso ("Corta el tomate en cubos de 1cm")
- Modo "Easy Cook" con tiempos más generosos y menos pasos
- Haptic feedback para feedback táctil (vibración al servir plato perfecto)
- Color coding por tipo de ingrediente (proteínas=rojo, vegetales=verde, carbohidratos=amarillo)
- Modo "Slow Cooking" para recetas lentas sin presión de tiempo

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para cocina (renderizado isométrico de estaciones de trabajo)
  - `<canvas>` para vista de restaurante (mesas, clientes, personal)
  - `<canvas>` para recetario visual (fotos de platos con pasos)
  - `<video>` para tutoriales de técnicas culinarias
  - `<input type="text">` para nombrar platos y escribir notas
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de cocina, sistema de recetas)
  - Physics engine: Matter.js (simulación de ingredientes cayendo, mezclas)
  - Sistema de recetas: Custom para 500+ recetas con pasos e ingredientes
  - AI de clientes: Finite state machine (esperar → ordenar → comer → pagar → irse)
  - Framework UI: Vue.js o React (componentes reactivos)
  - State management: Vuex para estado de restaurante (inventario, dinero, personal)
  - Animaciones: GSAP para transiciones y efectos de cocina
  - Charts: Chart.js para visualizar estadísticas de ventas
- **CSS:**
  - Grid layout para estaciones de cocina (10x8 grid responsivo)
  - CSS Flexbox para contenedores de restaurante (mesas, cocina)
  - CSS Transforms para zoom de cocina (transform-origin: center)
  - CSS Animations para feedback de cocción (bubble, steam, sizzle)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por restaurante)
- **Otros:**
  - Web Audio API: Sonidos de cocina (cuchillo cortando, sartén salteando, horno)
  - DeviceOrientationEvent: Detectar shake para revolver
  - Touch Events API: Multi-touch para manejar múltiples ollas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar 500+ recetas y progreso del restaurante
  - Service Workers: PWA para cocinar offline (modo recetario)
  - Canvas API: Manipular píxeles para efectos de ingredientes
  - Web Speech API: Dictar notas de receta

**Características Visuales:**
- **Paleta de colores:**
  - Cocina: Tonos profesionales (acero inoxidable=#C0C0C0, madera=#DEB887, azulejos=#FFFFFF)
  - Restaurantes: Temas por país (Francia=azul/blanco, Japón=rojo/negro, México=verde/amarillo)
  - Ingredientes: Colores realistas (tomate=rojo, lechuga=verde, queso=amarillo)
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, backdrop-filter blur 10px)
- **Animaciones:**
  - Ingrediente cayendo: Physics animation (gravity, bounce)
  - Salteando: Ingredientes saltando en sartén (0.5s)
  - Hornear: Steam subiendo del horno (continuous)
  - Servir plato: Plato deslizándose a mesa (0.5s)
  - Cliente feliz: Smile + thumbs up (0.5s)
- **Feedback visual:**
  - Receta correcta: Plato brilla en dorado + checkmark (0.5s)
  - Receta incorrecta: Shake rojo + mensaje de error ("¡Demasiado salado!")
  - Plato servido: Dinero animado (monedas volando, 1s)
  - Cliente satisfecho: Tip extra + comentario positivo
  - Trofeo ganado: Modal con gorra de chef + confetti (1.5s)
- **Personalización:**
  - 500+ recetas de 50+ países
  - 200+ ingredientes (proteínas, vegetales, especias, salsas)
  - 100+ utensilios de cocina (cuchillos, sartenes, ollas, hornos)
  - 30+ temas de restaurante (francés, japonés, mexicano, italiano, etc.)
  - Avatar de chef con 80+ combinaciones (uniforme, sombrero, accesorios)
  - Creación de recetas propias con editor visual

**Audio:**
- **Efectos de sonido:**
  - Cuchillo cortando: Chop + crunch (100-200ms)
  - Sartén salteando: Sizzle (continuous, 60-80 BPM)
  - Horno: Ding (timer, 150ms)
  - Plato servido: Clink + slide (300ms)
  - Cliente comiendo: Crunch, slurp, yum (200-400ms)
  - Dinero recibido: Coin jingle (500ms)
  - Receta perfecta: Fanfare de cocina (8 notas, 2s)
- **Música:**
  - Menú principal: Upbeat kitchen music (percusión + guitarra, 110 BPM)
  - Cocinando: Focused cooking music (piano + arpa, 90 BPM)
  - Restaurant忙碌: Busy café ambient (clatter + chatter, 100 BPM)
  - Competición: Intense battle music (drums + brass, 120 BPM)
  - Tema por país: Música auténtica de cada cultura (tango en Argentina, flamenco en España)
- **Voz:**
  - Tutorial: Voz de chef maestro ("¡Bienvenido a la Academia de Cocina!")
  - Receta paso: Voz guía ("Ahora saltea las verduras 2 minutos")
  - Cliente satisfecho: Comentario ("¡Delicioso! ¡Volveré!")
  - Trofeo ganado: Voz de celebración ("¡Maestro Culinario!")
- **Audio espacial:** Sonidos 3D de cocina (sartén a la izquierda suena en canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 90-110 horas (4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en cocina con 20+ ingredientes simultáneos
  - Latencia: <100ms para respuesta de cocina (feedback instantáneo)
  - Clientes máximos: 30 simultáneos en restaurante grande
  - Memoria máxima: 200MB (incluye 500 recetas, 200 ingredientes)
  - Physics: <16ms para calcular colisiones de ingredientes
- **Riesgos técnicos:**
  - Balance de dificultad: Recetas muy fáciles aburren, muy difíciles frustran
  - Simulación de cocina realista: Tiempos de cocción sin hacer el juego lento
  - Gestión de restaurante: Balancear economía sin hacerla tediosa
  - Content creation: Investigar 500+ recetas auténticas de 50 países

**Valor Educativo:**
- **Cocina real:** Los niños aprenden técnicas culinarias y 500+ recetas
- **Cultura gastronómica:** Exposición a 50+ países y sus tradiciones culinarias
- **Química aplicada:** Entienden reacciones químicas en la cocina (caramelización, fermentación)
- **Matemáticas:** Cálculo de proporciones, tiempos, conversiones
- **Gestión de tiempo:** Priorizar múltiples tareas en cocina ocupada
- **Vocabulario culinario:** Aprenden términos: sautear, gratinar, emulsionar, reducir
- **Creatividad:** Crear recetas propias y compartirlas con la comunidad
- **Trabajo en equipo:** Gestionar personal y colaboración en restaurante

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Renderizado de cocina
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Simulación de ingredientes
- [Overcooked! - Cooking co-op game](https://www.team17.com/games/overcooked/) - Inspiración para cocina
- [Cooking Mama - Cooking simulation](https://cookingmama.com/) - Recetas paso a paso
- [AllRecipes - Recipe database](https://www.allrecipes.com/) - Referencia de recetas
- [Serious Eats - Culinary science](https://www.seriouseats.com/) - Química de cocina
- [Web Audio API - Kitchen sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de cocina
- [PWA - Offline cookbook](https://web.dev/offline/) - PWA para recetario sin internet

---

#### Idea #18: Detective Squad: Mystery Solvers

**Concepto:**
Juego de detective y resolución de misterios donde los jugadores investigan casos criminales, recolectan evidencias, interrogan sospechosos y resuelven crímenes. Combina aventura point-and-click con lógica deductiva, enseñando pensamiento crítico, análisis de evidencia y razonamiento lógico.

**Motivación:**
- **Misterio y suspenso:** Cada caso es un rompecabezas intrigante
- **Progresión de detective:** Ver mejorar habilidades deductivas (observación, lógica)
- **Casos variados:** 100+ misterios desde robos hasta asesinatos
- **Sistema de reputación:** Mejor detective → casos más difíciles y prestigiosos
- **Colección de trofeos:** Evidencias clave, pistas memorables, casos resueltos perfectamente

**Mecánica Principal:**
Los jugadores son detectives privados en una agencia de investigación. El juego tiene 4 sistemas principales:
1. **Investigación:** Explorar escenas del crimen, buscar evidencia (huellas, ADN, objetos)
2. **Interrogatorio:** Preguntar a sospechosos, detectar mentiras, extractar confesiones
3. **Análisis:** Usar herramientas forenses (microscopio, laboratorio, base de datos)
4. **Deducción:** Conectar pistas, formular hipótesis, resolver el caso

Los casos progresan en complejidad:
- **Nivel 1-10:** Casos simples (robo en tienda, mascota perdida)
- **Nivel 11-30:** Casos intermedios (robo de banco, fraude, estafa)
- **Nivel 31-50:** Casos avanzados (asesinato, secuestro, conspiración)
- **Nivel 51-70:** Casos complejos (serie de crímenes, casos fríos)
- **Nivel 71-100:** Casos maestros (conspiración gubernamental, misterios internacionales)

Hay tipos de casos:
- **Casos urbanos:** Crímenes en ciudad (NY, Londres, París)
- **Casos rurales:** Misterios en pueblo pequeño
- **Casos históricos:** Crímenes del pasado (Jack el Destripador, etc.)
- **Casos de ciencia ficción:** Crímenes futuristas con tecnología avanzada

Modo historia (convertirse en leyenda de detective) y modo casos libres (seleccionar cualquier caso desbloqueado).

**Interacción Móvil:**
- **Tap simple:** Seleccionar evidencia, sospechoso, herramienta
- **Arrastrar (Drag):**
  - En escena: Mover lupa para buscar evidencia
  - En interrogatorio: Arrastrar pregunta a sospechoso
- **Pinch:** Zoom en escena del crimen (0.5x-5x) para ver detalles microscópicos
- **Dos dedos (drag):** Pan/mover la vista de escena
- **Tap largo (Long press):** Ver información detallada de evidencia (descripción, análisis forense)
- **Swipe horizontal:** Cambiar entre escena, interrogatorio, laboratorio, deducción
- **Gestos complejos:**
  - Shake del dispositivo = usar herramienta especial (lupa forense, detector de mentiras)
  - Dibujo de línea = conectar pistas (formular hipótesis)
  - Doble tap en sospechoso = interrogatorio rápido
  - Arrastrar evidencia a sospechoso = acusar
- **Multitouch hasta 3 dedos:** Usar múltiples herramientas simultáneamente
- **Escribir:** Tomar notas de caso, escribir informe final

**Accesibilidad:**
- Evidencias con iconos grandes (min 60px) y etiquetas claras
- Lugares de escena con hotspots brillantes (brillo dorado cuando hay evidencia)
- Voice assistant transcribe interrogatorios ("Sospechoso dice que estaba en casa")
- Modo "Easy Detective" con pistas más claras y menos distracciones
- Haptic feedback para feedback táctil (vibración al encontrar evidencia clave)
- Color coding por tipo de evidencia (huellas=azul, ADN=rojo, objetos=amarillo)
- Modo "Highlight Clues" que resalta evidencia importante automáticamente

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para escenas del crimen (renderizado 2D isométrico/point-and-click)
  - `<canvas>` para vista de deducción (tabla de pistas, red de conexiones)
  - `<canvas>` para laboratorio forense (microscopio, análisis de ADN)
  - `<video>` para testimonios y confesiones
  - `<input type="text">` para notas e informe final
- **JavaScript:**
  - Game engine: PixiJS o Phaser 3 (renderizado de escenas, sistema de evidencia)
  - AI de sospechosos: Custom para generar alibis y respuestas
  - Sistema de deducción: Custom para conectar pistas y generar hipótesis
  - Framework UI: Vue.js o React (componentes reactivos)
  - State management: Vuex para estado del caso (evidencias, sospechosos, progreso)
  - Animaciones: GSAP para transiciones entre escenas
  - Charts: Chart.js para visualizar red de pistas y conexiones
  - Storage: IndexedDB para guardar 100+ casos y progreso del detective
- **CSS:**
  - Grid layout para panel de herramientas (12x8 grid responsivo)
  - CSS Flexbox para contenedores de UI (escena, interrogatorio, laboratorio)
  - CSS Transforms para zoom de escena (transform-origin: center)
  - CSS Animations para feedback de evidencia (glow, pulse, shake)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por caso)
- **Otros:**
  - Web Audio API: Sonidos de investigacion (pasos, puertas, susurros)
  - DeviceOrientationEvent: Detectar shake para herramientas especiales
  - Touch Events API: Multi-touch para uso de múltiples herramientas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar 100+ casos y progreso del detective
  - Service Workers: PWA para investigar casos offline
  - Canvas API: Manipular píxeles para efectos de zoom y lupa
  - Web Speech API: Dictar notas de caso

**Características Visuales:**
- **Paleta de colores:**
  - Escenas del crimen: Noir style (blanco/negro con toques de color rojo)
  - Evidencias: Colores por tipo (huellas=azul #4169E1, ADN=rojo #DC143C, objetos=amarillo #FFD700)
  - UI: Semi-transparente oscuro (negro opacity 0.8, backdrop-filter blur 15px)
  - Laboratorio: Tono científico (azules claros #E3F2FD, verdes #C8E6C9)
- **Animaciones:**
  - Evidencia descubierta: Flash dorado + pulse (0.5s)
  - Zoom con lupa: Circular magnification effect (0.3s)
  - Sospechoso mintiendo: Eye twitch + sweat drop (0.5s)
  - Confesión: Dramatic lighting + camera zoom (1.5s)
  - Caso resuelto: Newspaper headline animation (2s)
- **Feedback visual:**
  - Evidencia clave: Brillo dorado pulsante + icono de estrella
  - Conexión de pistas: Línea entre evidencias (verde = correcta, roja = incorrecta)
  - Sospechoso culpable: Silhouette reveal + flash (1s)
  - Caso resuelto: Modal con badge detective + confetti (2s)
  - Trofeo ganado: Estatua de Sherlock Holmes dorada (1.5s)
- **Personalización:**
  - 100+ casos con escenas únicas
  - 50+ tipos de evidencias (huellas, ADN, cabellos, documentos, objetos)
  - 30+ herramientas forenses (lupa, microscopio, detector de mentiras, base de datos)
  - 200+ sospechosos con avatares únicos
  - Avatar de detective con 70+ combinaciones (abrigo, sombrero, lupa, gafas)
  - Skins de escenas (noir, modern, cartoon, cómic)

**Audio:**
- **Efectos de sonido:**
  - Evidencia descubierta: Chime ascendente (C4-E4-G4, 500ms)
  - Lupa zoom: Magnification sound (whoosh, 200ms)
  - Sospechoso mintiendo: Heartbeat rápido (120 BPM, 0.5s)
  - Confesión: Suspiro de alivio (1s)
  - Caso resuelto: Triumphant fanfare (8 notas, 2s)
  - Trofeo ganado: Badge sound (metallic shine, 1.5s)
- **Música:**
  - Menú principal: Noir jazz (saxofón + piano, 90 BPM)
  - Investigando: Tense detective theme (bajo + strings, 70 BPM)
  - Interrogatorio: Suspense music (drums + piano, 80 BPM)
  - Deducción: Intellectual music (harpsichord + violín, 85 BPM)
  - Caso resuelto: Triumphant anthem (orchestra + choir, 100 BPM)
- **Voz:**
  - Tutorial: Voz de detective legendario ("¡Bienvenido al Escuadrón de Detectives!")
  - Evidencia descubierta: Notificación ("¡Evidencia clave encontrada!")
  - Sospechoso hablando: Voz única por personaje (diferentes tonos, acentos)
  - Caso resuelto: Narrador ("¡Misterio resuelto! ¡Excelente trabajo!")
- **Audio espacial:** Sonidos 3D para localización (pasos desde la izquierda suenan en canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 130-150 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en escenas con 50+ objetos interactivos
  - Latencia: <100ms para respuesta de zoom lupa (feedback instantáneo)
  - Casos máximos: 100 con escenas únicas
  - Memoria máxima: 300MB (incluye 100 escenas, 200 sospechosos)
  - Sistema de deducción: <200ms para procesar conexiones de pistas
- **Riesgos técnicos:**
  - Balance de dificultad: Misterios muy fáciles aburren, muy difíciles frustran
  - AI de sospechosos: Respuestas consistentes sin patrones predecibles
  - Sistema de deducción: Lógica robusta que no permite soluciones ambiguas
  - Content creation: Escribir 100+ casos coherentes y interesantes

**Valor Educativo:**
- **Pensamiento crítico:** Los niños desarrollan análisis lógico y deducción
- **Observación:** Aprenden a notar detalles sutiles y evidencias
- **Razonamiento deductivo:** Conectar pistas, formular hipótesis, probar teorías
- **Vocabulario forense:** Aprenden términos: evidencia, alibi, testigo, ADN, huella
- **Ética:** Entienden importancia de justicia y verdad
- **Historia y cultura:** Casos históricos exponen a diferentes épocas y lugares
- **Resolución de problemas:** Los misterios requieren pensamiento lateral y creatividad

**Referencias e Inspiración:**
- [PixiJS - Rendering engine](https://pixijs.com/) - Renderizado de escenas
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Sistema de juego
- [Sherlock Holmes Consulting Detective - Deduction game](https://spacecowboys.fr/en/game/sherlock-holmes-consulting-detective/) - Inspiración para deducción
- [L.A. Noire - Detective game](https://www.rockstargames.com/lanoire/) - Interrogatorio y evidencia
- [Clue - Mystery board game](https://www.hasbro.com/en-us/product/clue-game) - Clásico de misterio
- [CSI: Crime Scene Investigation - Forensic science](https://www.cbs.com/shows/csi/) - Referencia forense
- [Web Audio API - Mystery sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de misterio
- [PWA - Offline investigation](https://web.dev/offline/) - PWA para investigar sin internet

---

### Lotes Pendientes
- **Lote 4:** Ideas #15-#18 (4 ideas) ✅ COMPLETADO
- **Lote 5:** Ideas #19-#25 (7 ideas) - EN PROGRESO (4/7 completadas)
- ... hasta completar 100 ideas

### Próximos Lotes (Sugerencias)
- Lote 4: Juegos de investigación y estrategia
- Lote 5: Juegos de aventura y exploración
- Lote 6: Juegos de simulación realista
- Lote 7: Juegos de colaboración y cooperación
- Lote 8: Juegos de desafío y competencia
- Lote 9: Juegos de educación avanzada
- Lote 10: Juegos de creatividad e innovación

#### Idea #19: Architecture Studio: Building Dreams

**Concepto:**
Juego de arquitectura y diseño donde los jugadores diseñan y construyen estructuras, aprendiendo principios de ingeniería, física de estructuras y diseño urbano. Combina Minecraft-style building con simulación física realista.

**Motivación:**
- **Creatividad constructiva:** Diseñar edificios, puentes, torres sin límites
- **Progresión visible:** Comienzan con cabañas simples, avanzan a rascacielos complejos
- **Desafíos de ingeniería:** Resolver problemas reales (resistencia, balance, eficiencia)
- **Competencia global:** Leaderboard de "mejores diseños estructurales" y "edificios más altos"
- **Personalización ilimitada:** Crear diseños únicos con cientos de materiales y estilos

**Mecánica Principal:**
Los jugadores son arquitectos en un mundo isométrico donde pueden construir estructuras con bloques de diferentes materiales (madera, piedra, acero, concreto, vidrio). Cada material tiene propiedades físicas reales: resistencia, peso, costo, durabilidad. Los edificios deben soportar cargas (peso propio, viento, terremotos). Hay misiones: construir puentes que resistan tráfico, torres que soporten vientos fuertes, rascacielos eficientes. Modo historia (convertirse en arquitecto maestro) y modo sandbox libre (construir sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Colocar bloques, seleccionar materiales
- **Arrastrar (Drag):** Mover bloques, reorganizar estructuras
- **Pinch:** Zoom en el mundo isométrico (0.5x-5x)
- **Dos dedos (drag):** Pan/mover la vista del mundo
- **Tap rápido:** Colocar múltiples bloques rápidamente
- **Swipe horizontal:** Cambiar entre vista de construcción y vista de análisis estructural
- **Gestos complejos:**
  - Shake del dispositivo = simular terremoto (probar resistencia)
  - Dibujo de línea = crear muro automático
  - Doble tap en bloque = ver propiedades (resistencia, costo)
  - Arrastrar y soltar = mover secciones completas
- **Multitouch hasta 5 dedos:** Colocar múltiples bloques simultáneamente
- **Escribir:** Nombrar edificios, escribir notas de diseño

**Accesibilidad:**
- Bloques con tamaños generosos (min 60px) para fácil colocación
- Materiales con iconos grandes (min 80px) y etiquetas claras
- Voice assistant explica propiedades ("El acero es resistente pero caro")
- Modo "Easy Build" con resistencia aumentada y menos restricciones
- Haptic feedback para eventos (vibración al completar estructura)
- Color coding por tipo de material (madera=marrón, acero=gris, concreto=blanco)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado isométrico del mundo
  - `<canvas>` para simulación física de estructuras
  - `<canvas>` para análisis de cargas y tensiones
  - `<video>` para tutoriales de principios arquitectónicos
  - `<input type="text">` para nombrar edificios
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado isométrico)
  - Physics engine: Custom simplified structural physics (resistencia, balance)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del arquitecto (edificios desbloqueados, materiales)
  - Structural analysis: Algorithm para calcular cargas y tensiones en tiempo real
  - Procedural generation: Generación de terrenos y terrenos urbanos
  - Animaciones: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar construcciones (miles de bloques)
- **CSS:**
  - Grid layout para panel de materiales (10 columnas responsivo)
  - CSS Transforms para zoom del mundo (transform-origin: center)
  - CSS Animations para feedback de construcción (scale up, fade in)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de herramientas
- **Otros:**
  - Web Audio API: Sonidos de construcción (hammering, placing)
  - DeviceOrientationEvent: Detectar shake para simular terremoto
  - Touch Events API: Multi-touch para colocar múltiples bloques
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar mundo completo (miles de bloques, estructuras)
  - Service Workers: PWA para construir offline (modo sandbox)
  - Canvas API: Manipular píxeles para renderizado de materiales

**Características Visuales:**
- **Paleta de colores:**
  - Mundo: Tonos naturales (cielo=azul claro, tierra=verde/marrón)
  - Materiales: Colores realistas (madera=marrón #8B4513, acero=gris #708090, concreto=blanco #F5F5DC)
  - Análisis estructural: Heatmap de tensiones (verde=seguro, amarillo=advertencia, rojo=crítico)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, backdrop-filter blur 10px)
- **Animaciones:**
  - Colocar bloque: Bloque aparece con scale up (0→1x, 0.3s)
  - Terremoto: Shake del mundo + partículas (1s)
  - Edificio completado: Confetti de bloques (200 particles, 2s)
  - Análisis: Heatmap fade in (1s)
- **Feedback visual:**
  - Estructura estable: Borde verde brillante, icono checkmark (0.3s)
  - Estructura inestable: Borde rojo pulsante, advertencia ("¡Cuidado! Puedes colapsar")
  - Edificio completado: Modal con estadísticas (altura, materiales usados, eficiencia)
  - Logro desbloqueado: Modal con escudo dorado + confetti (1.5s)
- **Personalización:**
  - 50+ materiales: Madera, piedra, acero, concreto, vidrio, ladrillo, mármol
  - 100+ texturas: Texturas de madera, piedra, metal para personalización
  - 20+ estilos arquitectónicos: Moderno, gótico, romano, futurista, minimalista
  - Avatar de arquitecto con 40+ combinaciones (ropa, herramientas, casco)
  - Skins de mundo (día, noche, atardecer, nevado, desértico)

**Audio:**
- **Efectos de sonido:**
  - Colocar bloque: Clack satisfactorio (200-300ms)
  - Terremoto: Rumble + shake (500ms)
  - Estructura colapsando: Crash (800ms)
  - Edificio completado: Fanfare de construcción (8 notas, 2s)
  - Material seleccionado: Click (50ms)
  - Análisis completado: Chime ascendente (C4-E4-G4, 1s)
- **Música:**
  - Construcción: Upbeat construction beats (percussion + bass, 100 BPM)
  - Análisis: Intellectual music (piano + synth, 80 BPM)
  - Terremoto: Tense music (strings low, 50 BPM)
  - Edificio completado: Inspirational (orchestra + choir, 90 BPM)
  - Menú principal: Architectural theme (piano + strings, 85 BPM)
- **Voz:**
  - Tutorial: Voz de arquitecto profesional ("Bienvenido al Estudio de Arquitectura")
  - Terremoto alerta: Voz de emergencia ("¡Terremoto! ¡Verifica tu estructura!")
  - Edificio completado: Voz celebratoria ("¡Excelente diseño!")
- **Audio espacial:** Sonidos 3D para feedback de posición (construcción cerca suena más fuerte)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 110-130 horas (5-6 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en mundo isométrico con 5000+ bloques
  - Latencia: <100ms para respuesta de colocación (feedback instantáneo)
  - Bloques máximos: 10,000 para高端 devices, 3,000 para低端
  - Memoria máxima: 250MB (incluye sprites de 50 materiales)
  - Análisis estructural: <200ms para calcular tensiones
- **Riesgos técnicos:**
  - Balance de dificultad: Estructuras demasiado frágiles frustran, demasiado fáciles aburren
  - Optimización de renderizado: Miles de bloques pueden consumir mucha GPU
  - Precisión de física: Estructuras deben comportarse de forma realista
  - Gestión de state: Guardar miles de bloques en IndexedDB

**Valor Educativo:**
- **Ingeniería estructural:** Los niños aprenden principios: resistencia, balance, cargas
- **Física aplicada:** Entienden gravedad, peso, fuerzas, estabilidad
- **Diseño arquitectónico:** Aprenden estilos, proporciones, estética
- **Matemáticas:** Cálculo de áreas, volúmenes, proporciones, ángulos
- **Creatividad y diseño:** Desarrollan pensamiento espacial y visualización 3D
- **Pensamiento crítico:** Resolver problemas estructurales requiere análisis
- **Vocabulario técnico:** Aprenden términos: viga, columna, cimentación, carga, tensión

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Rendering isométrico
- [Minecraft - Block building](https://www.minecraft.net/) - Inspiración para mecánica de bloques
- [Bridge Constructor - Physics puzzle](https://www.headupgames.com/bridge-constructor/) - Simulación física
- [SimCity - Urban planning](https://www.ea.com/games/simcity/simcity-buildit) - Diseño urbano
- [Kerbal Space Program - Rocket engineering](https://www.kerbalspaceprogram.com/) - Ingeniería realista
- [ArchDaily - Architecture reference](https://www.archdaily.com/) - Referencia arquitectónica
- [Web Audio API - Construction sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos
- [PWA - Offline building](https://web.dev/offline/) - PWA para construir sin internet

---

#### Idea #20: Startup Tycoon: Entrepreneur Challenge

**Concepto:**
Juego de emprendimiento donde los jugadores lanzan y administran su propio startup, aprendiendo finanzas, marketing, gestión de equipos y toma de decisiones estratégicas. Combina tycoon game con simulación de negocios realista.

**Motivación:**
- **Construir un imperio:** Transformar idea pequeña en empresa multimillonaria
- **Progresión visible:** Ver empresa crecer desde garage hasta oficina en rascacielos
- **Desafíos de liderazgo:** Contratar, gerenciar equipo, tomar decisiones difíciles
- **Competencia global:** Leaderboard de "empresas más exitosas" y "valúos más altos"
- **Creatividad empresarial:** Crear productos únicos y estrategias de marketing innovadoras

**Mecánica Principal:**
Los jugadores son fundadores de startup. Comienzan con idea + $10,000 en garaje. Deben decidir: producto a desarrollar, equipo a contratar (desarrolladores, diseñadores, marketers), presupuesto de marketing, precios, expansión. Eventos aleatorios afectan el negocio (competidores, cambios de mercado, crisis económicas). Hay métricas: ingresos, costos, satisfacción de clientes, satisfacción de empleados, valor de empresa. Los mejores jugadores logran IPO (salida a bolsa) con valúo >$100M. Modo historia (llegar a IPO) y modo sandbox (administrar sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Contratar empleados, lanzar producto, ver reportes
- **Arrastrar (Drag):** Asignar empleados a proyectos
- **Pinch:** Zoom en la oficina (ver empleados trabajando)
- **Dos dedos (drag):** Pan/mover la vista de la oficina
- **Tap rápido:** Lanzar múltiples campañas de marketing
- **Swipe horizontal:** Cambiar entre vista de oficina y vista de finanzas
- **Gestos complejos:**
  - Shake del dispositivo = evento aleatorio (mercado en auge o crisis)
  - Dibujo de gráfico = planificar proyección de ingresos
  - Doble tap en empleado = ver perfil (skills, salario, satisfacción)
  - Arrastrar y soltar = asignar tareas
- **Multitouch hasta 3 dedos:** Contratar múltiples empleados simultáneamente
- **Escribir:** Nombrar startup, productos, escribir pitch decks

**Accesibilidad:**
- Botones grandes (min 60x60px) con iconos claros
- Dashboard con métricas fáciles de leer (gráficos, números grandes)
- Voice assistant explica decisiones ("Contratar desarrollador aumentará costos pero acelerará desarrollo")
- Modo "Easy Mode" con presupuesto generoso y eventos menos severos
- Haptic feedback para eventos (vibración al IPO, suave para contratación)
- Color coding por tipo de empleado (desarrollador=azul, marketer=naranja, diseñador=verde)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado isométrico de la oficina
  - `<canvas>` para gráficos financieros (ingresos, costos, valor)
  - `<canvas>` para vista de empleados trabajando
  - `<video>` para cutscenes de eventos (IPO, crisis)
  - `<input type="text">` para nombrar startup y productos
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de oficina)
  - Simulation engine: Custom business simulation (ingresos, costos, market)
  - AI de empleados: Simple behavior trees (trabajar, descansar, renunciar)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado de startup (empleados, productos, finanzas)
  - Charts: Chart.js para visualizar métricas (gráficos de barras, líneas)
  - Random events: Sistema de probabilidad para eventos (crisis 5%, auge 10%)
  - Animaciones: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar empresa completa
- **CSS:**
  - Grid layout para dashboard (12 columnas responsivo)
  - CSS Transforms para zoom de la oficina (transform-origin: center)
  - CSS Animations para feedback de contratación (scale up, fade in)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de empleados y métricas
- **Otros:**
  - Web Audio API: Sonidos de oficina (typing, meetings, celebrations)
  - DeviceOrientationEvent: Detectar shake para eventos aleatorios
  - Touch Events API: Multi-touch para contratar múltiples empleados
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar empresa (empleados, productos, finanzas)
  - Service Workers: PWA para administrar offline (modo sandbox)
  - Canvas API: Manipular píxeles para renderizado de oficina

**Características Visuales:**
- **Paleta de colores:**
  - Oficina: Tonos corporativos (gris #F5F5F5, azul #2196F3, blanco)
  - Dashboard: Heatmap de métricas (verde=positivo, rojo=negativo)
  - Empleados: Colores por rol (desarrollador=azul, marketer=naranja, diseñador=verde)
  - Eventos: Colores de alerta (crisis=rojo, auge=verde, normal=gris)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, backdrop-filter blur 10px)
- **Animaciones:**
  - Contratar empleado: Empleado aparece en oficina (walk in, 1s)
  - Producto lanzado: Celebración con confetti (2s)
  - IPO: Flash dorado + fuegos artificiales (3s)
  - Crisis: Shake de pantalla + alerta roja (0.5s)
  - Métricas: Counting numbers animation (0→$1M→$10M, 1s)
- **Feedback visual:**
  - Empleado contratado: Checkmark verde + nombre aparece en oficina
  - Producto exitoso: Barra de ingresos sube (animación verde)
  - IPO: Modal con valúo final, champagne, fuegos artificiales
  - Crisis: Modal con opciones de acción (despedir, préstamo, pivot)
  - Logro desbloqueado: Modal con escudo dorado + confetti (1.5s)
- **Personalización:**
  - 20+ tipos de productos (apps, SaaS, hardware, e-commerce, servicios)
  - 50+ roles de empleados (desarrolladores, marketers, diseñadores, gerentes, abogados)
  - 100+ oficinas (garage, startup hub, corporate building, rascacielos)
  - Avatar de CEO con 60+ combinaciones (ropa, accesorios, oficina)
  - Skins de startup (tech, fashion, food, healthcare, education)

**Audio:**
- **Efectos de sonido:**
  - Contratar empleado: Pop satisfactorio (150ms)
  - Producto lanzado: Fanfare (8 notas, 1s)
  - IPO: Triumphant music (orquesta + choir, 3s)
  - Crisis: Alarm pulsante (500ms)
  - Dinero ganado: Ka-ching (200ms)
  - Empleado renuncia: Door close sound (300ms)
- **Música:**
  - Oficina idle: Ambient corporate music (piano + synth, 70 BPM)
  - Desarrollando producto: Upbeat tech music (electronic + drums, 110 BPM)
  - Marketing campaign: Energetic music (bass + synths, 120 BPM)
  - IPO: Inspirational anthem (orchestra + choir, 90 BPM)
  - Crisis: Tense music (strings low, 50 BPM)
- **Voz:**
  - Tutorial: Voz de mentor de emprendedores ("Bienvenido a Startup Tycoon")
  - Producto lanzado: Notificación ("¡Producto lanzado!")
  - IPO: Narrador ("¡Felicidades! Has llegado a IPO con valúo de $150M")
- **Audio espacial:** Sonidos 3D para feedback de posición (empleados cerca suenan más fuerte)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en oficina con 50+ empleados
  - Latencia: <100ms para respuesta de contratación (feedback instantáneo)
  - Empleados máximos: 200 para高端 devices, 50 para低端
  - Memoria máxima: 200MB (incluye sprites de 50 roles de empleados)
  - Simulación de negocio: <200ms para calcular ingresos/costos mensuales
- **Riesgos técnicos:**
  - Balance de dificultad: Startups demasiado difíciles frustran, demasiado fáciles aburren
  - Simulación económica: Balancear ingresos y costos para que sea realista
  - AI de empleados: Comportamiento consistente pero no predecible
  - Gestión de state: Guardar cientos de empleados y productos en IndexedDB

**Valor Educativo:**
- **Finanzas y contabilidad:** Los niños aprenden ingresos, costos, márgenes, ROI
- **Gestión de equipos:** Entienden contratación, liderazgo, motivación
- **Marketing y ventas:** Aprenden estrategias, precios, segmentación de mercado
- **Toma de decisiones:** Deben priorizar recursos y gestionar riesgos
- **Matemáticas aplicadas:** Cálculo de presupuestos, proyecciones, porcentajes
- **Emprendimiento:** Entienden proceso desde idea hasta empresa exitosa
- **Vocabulario de negocios:** Aprenden términos: IPO, valúo, burn rate, churn, LTV, CAC

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Rendering de oficina
- [Chart.js - Graphing library](https://www.chartjs.org/) - Gráficos financieros
- [Game Dev Story - Tycoon game](https://www.kairosoft.net/kairosoft_game/gamedevstory_en.html) - Inspiración para mecánica
- [Startup Panic - Entrepreneur sim](https://startuppanic.com/) - Simulación de startup
- [Y Combinator - Startup resources](https://www.ycombinator.com/) - Referencia de emprendimiento
- [Forbes - Business news](https://www.forbes.com/) - Referencia de negocios
- [Web Audio API - Office sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos
- [PWA - Offline tycoon](https://web.dev/offline/) - PWA para administrar sin internet

---

#### Idea #21: Newsroom Chronicles: Junior Journalists

**Concepto:**
Juego de periodismo donde los jugadores son reporteros investigando historias, entrevistando fuentes, verificando hechos y publicando artículos. Combina juego de misterio con educación sobre medios, ética periodística y habilidades de comunicación.

**Motivación:**
- **Descubrir la verdad:** Investigar historias ocultas y revelar secretos
- **Progresión profesional:** Comienzan como cadetes, avanzan a periodistas estrella
- **Impacto social:** Los artículos afectan el mundo virtual (cambiar leyes, ayudar comunidades)
- **Competencia editorial:** Leaderboard de "mejores artículos" y "reporteros más influyentes"
- **Creatividad periodística:** Escribir historias con voz única y ángulos originales

**Mecánica Principal:**
Los jugadores son reportistas en una sala de redacción virtual. Cada misión es una historia: crímenes, política, tecnología, ambiente, deportes. Deben: investigar (revisar documentos, visitar escenas), entrevistar fuentes (NPCs con diferentes personalidades y agendas), verificar hechos (contrastar múltiples fuentes), escribir artículos (headline, lead, cuerpo, conclusión). Las historias progresan en dificultad: locales → nacionales → internacionales. Hay editor (mentor) que da feedback: "Falta verificación de esta fuente", "El lead debe ser más impactante". Los mejores artículos ganan premios (Pulitzer virtual). Modo historia (convertirse en reportero estrella) y modo sandbox libre.

**Interacción Móvil:**
- **Tap simple:** Seleccionar fuentes, documentos, preguntas de entrevista
- **Arrastrar (Drag):** Organizar notas, arrastrar citas al artículo
- **Pinch:** Zoom en documentos y evidencias
- **Dos dedos (drag):** Pan/mover la vista de la sala de redacción
- **Tap rápido:** Hacer múltiples preguntas en entrevista
- **Swipe horizontal:** Cambiar entre vista de investigación y editor de artículos
- **Gestos complejos:**
  - Shake del dispositivo = "breaking news" (evento urgente)
  - Dibujo de flecha = conectar fuentes (relación entre evidencias)
  - Doble tap en fuente = ver perfil (credibilidad, agendas previas)
  - Arrastrar y soltar = citar fuente en el artículo
- **Multitouch hasta 3 dedos:** Seleccionar múltiples fuentes simultáneamente
- **Escribir:** Escribir artículos (headline, lead, cuerpo, conclusión)

**Accesibilidad:**
- UI con botones grandes (min 60x60px) y texto legible (16px mínimo)
- Fuentes con iconos grandes (min 80px) y etiquetas claras
- Voice assistant ayuda a escribir ("¿Quieres añadir esta cita?")
- Modo "Easy Mode" con más pistas y fuentes más confiables
- Haptic feedback para eventos (vibración al encontrar evidencia clave)
- Color coding por credibilidad de fuente (verde=alta, amarilla=media, roja=baja)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de la sala de redacción
  - `<canvas>` para vista de documentos y evidencias
  - `<textarea>` con syntax highlighting para editor de artículos
  - `<video>` para cutscenes de entrevistas y eventos
  - `<input type="text">` para escribir headline y preguntas
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de sala de redacción)
  - NLP engine: Custom algorithm para verificar hechos (detectar contradicciones)
  - AI de fuentes: Simple behavior trees (cooperar, evadir, mentir)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del periodista (artículos, fuentes, reputación)
  - Editor de artículos: Custom rich text editor con citación de fuentes
  - Scoring: Algorithm para evaluar calidad (verificación, originalidad, impacto)
  - Animaciones: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar artículos y progreso
- **CSS:**
  - Grid layout para sala de redacción (12 columnas responsivo)
  - CSS Typography para tipografía periodística (serif para artículos, sans-serif para UI)
  - CSS Animations para feedback de investigación (fade in, slide)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de fuentes y documentos
- **Otros:**
  - Web Audio API: Sonidos de sala de redacción (typing, phones, conversations)
  - DeviceOrientationEvent: Detectar shake para breaking news
  - Touch Events API: Multi-touch para seleccionar múltiples fuentes
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar artículos (textos, fuentes, evidencias)
  - Service Workers: PWA para investigar offline (modo sandbox)
  - Canvas API: Manipular píxeles para renderizado de documentos

**Características Visuales:**
- **Paleta de colores:**
  - Sala de redacción: Estilo periodístico (blanco #FFFFFF, gris #F5F5F5, azul #2196F3)
  - Fuentes: Colores por credibilidad (verde #4CAF50, amarillo #FFC107, rojo #F44336)
  - Artículos: Periodista style (texto negro #000000, headline bold)
  - Evidencias: Colores por tipo (documento=azul #2196F3, foto=verde #4CAF50, audio=naranja #FF9800)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, backdrop-filter blur 10px)
- **Animaciones:**
  - Encontrar evidencia: Flash dorado + pulse (0.5s)
  - Entrevistar fuente: Cinematic camera angles (1s)
  - Artículo publicado: Newspaper headline animation (2s)
  - Premio ganado: Confetti de periodos de exclamación (200 particles, 2s)
  - Breaking news: Alerta roja pulsante + ticker tape (3s)
- **Feedback visual:**
  - Evidencia clave: Borde dorado brillante, icono de estrella
  - Fuente confiable: Checkmark verde
  - Artículo bien escrito: Barras de calidad suben (verificación, originalidad, impacto)
  - Premio ganado: Modal con estatua de Pulitzer + confetti (2s)
  - Error en artículo: Subrayado rojo + hint ("Verifica esta fuente")
- **Personalización:**
  - 100+ historias con temas únicos (crímenes, política, tecnología, ambiente, deportes)
  - 200+ fuentes con avatares y personalidades distintas
  - 50+ tipos de evidencias (documentos, fotos, audios, videos)
  - Avatar de periodista con 70+ combinaciones (ropa, cámara, libreta)
  - Skins de sala de redacción (clásica, moderna, TV studio, digital)

**Audio:**
- **Efectos de sonido:**
  - Encontrar evidencia: Chime ascendente (C4-E4-G4, 500ms)
  - Entrevistar fuente: Voice lines únicas por personaje (200-500ms)
  - Artículo publicado: Newspaper crinkle + fanfare (2s)
  - Premio ganado: Triumphant music (orchestra, 2s)
  - Breaking news: Alert pulsante + urgent music (500ms)
  - Typing: Keyboard sounds (continuous mientras escribes)
- **Música:**
  - Sala de redacción: Ambient newsroom (typing, phones, conversations, 70 BPM)
  - Investigando: Tense detective music (bajo + strings, 60 BPM)
  - Entrevista: Cinematic interview music (piano + synth, 75 BPM)
  - Artículo publicado: Upbeat news music (brass + drums, 100 BPM)
  - Premio: Inspirational anthem (orchestra + choir, 90 BPM)
- **Voz:**
  - Tutorial: Voz de editor veterano ("Bienvenido al Newsroom Chronicles")
  - Evidencia encontrada: Notificación ("¡Evidencia clave!")
  - Artículo publicado: Narrador ("¡Artículo publicado!")
- **Audio espacial:** Sonidos 3D para localización (conversaciones desde la izquierda suenan en canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 120-140 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en sala de redacción con 50+ objetos interactivos
  - Latencia: <100ms para respuesta de investigación (feedback instantáneo)
  - Historias máximas: 100 con escenas únicas
  - Memoria máxima: 280MB (incluye 100 historias, 200 fuentes)
  - NLP de verificación: <300ms para detectar contradicciones en fuentes
- **Riesgos técnicos:**
  - Balance de dificultad: Investigaciones muy fáciles aburren, muy difíciles frustran
  - NLP de verificación: Detectar contradicciones de forma precisa sin falsos positivos
  - AI de fuentes: Respuestas consistentes pero no predecibles
  - Writing engine: Editor de artículos intuitivo con feedback útil

**Valor Educativo:**
- **Periodismo real:** Los niños aprenden: investigación, verificación, ética periodística
- **Comunicación:** Desarrollan habilidades de escritura, entrevista, narración
- **Pensamiento crítico:** Verificar hechos, cuestionar fuentes, detectar sesgos
- **Civic engagement:** Entienden importancia de noticias informadas para democracia
- **Vocabulario periodístico:** Aprenden términos: headline, lead, fuente, verificación, editorial, columnista
- **Ética:** Entienden responsabilidad de reportear verdad sin sensacionalismo
- **Investigación:** Desarrollan curiosidad y habilidades de investigación

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Rendering de sala
- [Sherlock Holmes Consulting Detective - Investigation game](https://spacecowboys.fr/en/game/sherlock-holmes-consulting-detective/) - Inspiración para investigación
- [Papers, Please - Bureaucracy game](https://www.3909.co/games/papers-please/) - Verificación de documentos
- [The Westport Independent - Censorship game](https://www.doublezerooneszero.com/) - Ética periodística
- [The New York Times - Journalism reference](https://www.nytimes.com/) - Referencia periodística
- [Poynter Institute - Journalism ethics](https://www.poynter.org/) - Ética periodística
- [Web Audio API - Newsroom sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos
- [PWA - Offline investigation](https://web.dev/offline/) - PWA para investigar sin internet

---

#### Idea #22: Galaxy Explorer: Space Science

**Concepto:**
Juego de astronomía educativo donde los jugadores exploran el universo, descubren planetas, estrellas, nebulosas y black holes, aprendiendo ciencias espaciales reales. Combina exploración espacial con simulación científica precisa.

**Motivación:**
- **Exploración infinita:** El universo generado procedimentalmente es infinito
- **Descubrimiento científico:** Encontrar exoplanetas habitables, nuevas estrellas
- **Misión científica:** Cartografiar el universo, contribuir a la ciencia
- **Competencia astronómica:** Leaderboard de "más planetas descubiertos" y "distancia más lejana"
- **Asombro cósmico:** Ver nebulosas, supernovas, galaxias spiral en 3D

**Mecánica Principal:**
Los jugadores son astrónomos en una nave espacial equipada con telescopio, espectrómetro, y other instrumentos. Navegan por el universo generado procedimentalmente: sistemas solares, estrellas, planetas, lunas, nebulosas, black holes. Cada objeto tiene datos científicos reales: tipo, masa, temperatura, edad, composición. Deben: observar (usar telescopio para ver detalles), analizar (espectrómetro para determinar composición), catalogar (agregar a base de datos). Hay misiones: encontrar Tierra 2.0, observar supernova, explorar black hole. Los mejores astrónomos desbloquean nuevos instrumentos y pueden visitar zonas más distantes. Modo historia (cartografiar la galaxia) y modo sandbox libre.

**Interacción Móvil:**
- **Tap simple:** Seleccionar estrella, planeta, nebulosa para observar
- **Arrastrar (Drag):** Mover nave por el universo (joystick virtual o drag-to-move)
- **Pinch:** Zoom en el universo (0.1x-10x) para ver de cerca o lejanía
- **Dos dedos (drag):** Pan/mover la vista del universo
- **Tap largo (Long press):** Ver datos científicos detallados (masa, temperatura, composición)
- **Swipe horizontal:** Cambiar entre vista de navegación y vista de telescopio
- **Gestos complejos:**
  - Shake del dispositivo = modo de emergencia (alerta de supernova cercana)
  - Dibujo de trayectoria = planear ruta de viaje
  - Doble tap en objeto = añadir a favoritos
  - Arrastrar objeto al telescopio = observación rápida
- **Multitouch hasta 3 dedos:** Selección múltiple de objetos para catalogar
- **Escribir:** Nombrar planetas y estrellas descubiertos, escribir notas científicas

**Accesibilidad:**
- Objetos celestes con tamaños generosos (min 60px en zoom cercano)
- Datos científicos con layout claro (valores grandes, unidades claras)
- Voice assistant explica objetos ("Esta estrella es 10 veces más masiva que el Sol")
- Modo "Auto-Navigate" para que la nave viaje automáticamente
- Haptic feedback para eventos (vibración al descubrir supernova)
- Color coding por tipo de objeto (estrellas=amarillo, planetas=azul, nebulosas=púrpura, black holes=negro)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado del universo (millones de estrellas)
  - `<canvas>` para vista de telescopio (zoom extremo)
  - `<canvas>` para espectrómetro y análisis de luz
  - `<video>` para cutscenes de eventos cósmicos (supernova, black hole)
  - `<input type="text">` para nombrar objetos y escribir notas
- **JavaScript:**
  - Procedural generation: Custom algorithms para universo (estrellas, planetas, nebulosas)
  - Game engine: Phaser 3 (renderizado de universo)
  - Physics engine: Simplified gravitational physics (órbitas, trayectorias)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado del universo (objetos visitados, catálogo)
  - Scientific simulation: Algorithm para generar datos realistas (masa, temperatura, composición)
  - Animaciones: GSAP para transiciones entre vistas
  - Storage: IndexedDB para guardar catálogo (miles de objetos)
- **CSS:**
  - Grid layout para panel de instrumentos (8 columnas responsivo)
  - CSS Transforms para zoom del universo (transform-origin: center)
  - CSS Animations para feedback de observación (fade in, scale)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Variables para theming (cambiar colores por usuario)
  - Flexbox para contenedores de datos científicos
- **Otros:**
  - Web Audio API: Sonidos espaciales (pulsars, black holes, ambientes)
  - DeviceOrientationEvent: Detectar shake para modo emergencia
  - Touch Events API: Multi-touch para seleccionar múltiples objetos
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar universo procedimental (seed + objetos visitados)
  - Service Workers: PWA para explorar offline (modo sandbox)
  - Canvas API: Manipular píxeles para renderizado de nebulosas
  - Perlin Noise: Generación de nebulosas y galaxias

**Características Visuales:**
- **Paleta de colores:**
  - Universo: Negro profundo (#000005) con estrellas multicolores (blanco, azul, rojo, amarillo)
  - Estrellas: Colores por tipo (enana roja=rojo #FF4444, Sol=amarillo #FFFF00, gigante azul=azul #4444FF)
  - Planetas: Colores realistas (terrestre=azul #2196F3, gas gigante=naranja #FF9800, helado=blanco #E3F2FD)
  - Nebulas: Colores etéreos (púrpura #9C27B0, rosa #E91E63, cyan #00BCD4)
  - UI: Semi-transparente oscuro con glassmorphism (#000000 opacity 0.7, backdrop-filter blur 10px)
- **Animaciones:**
  - Nave viajando: Warp speed effect (stars stretch into lines, 2s)
  - Supernova: Explosión de partículas con light bloom (3s)
  - Observar con telescopio: Zoom in suave (1.5s)
  - Black hole: Light bending effect (continuous)
  - Nebula: Cloud animation con particles (continuous)
- **Feedback visual:**
  - Objeto descubierto: Flash verde + icono de checkmark (0.5s)
  - Objeto catalogado: Añadido a base de datos con icono de libro
  - Misión completada: Modal con recompensa, experiencia, desbloqueos
  - Supernova alerta: Borde rojo pulsante + icono de peligro
  - Logro desbloqueado: Modal con escudo dorado + confetti (1.5s)
- **Personalización:**
  - 100+ diseños de naves (exploradoras, científicas, rápidas)
  - 20+ instrumentos (telescopio, espectrómetro, radar, espectroscopio)
  - 10+ skins de universo (realista, artistico, data visualization, Hubble)
  - Avatar de astrónomo con 50+ combinaciones (traje espacial, herramientas, insignias)

**Audio:**
- **Efectos de sonido:**
  - Warp speed: Whoosh ascendente (200-800Hz, 2s)
  - Supernova: Boom masivo + eco (1-3s)
  - Pulsar: Pulsing radio waves (1-10 Hz, continuous)
  - Black hole: Low frequency drone (20-50 Hz, continuous)
  - Objeto descubierto: Chime ascendente (C4-E4-G4, 500ms)
  - Móvil thrusters: Hum (100-200 Hz, continuous)
- **Música:**
  - Universo idle: Ethereal space music (synth pads, drones, 60 BPM)
  - Exploración: Upbeat sci-fi (electronic + strings, 100 BPM)
  - Observando: Contemplative music (piano + synth, 70 BPM)
  - Supernova: Intense orchestral (brass + drums, 120 BPM)
  - Descubrimiento: Mystical music (choir + bells, 80 BPM)
- **Voz:**
  - Tutorial: Voz de astronauta científico ("Bienvenido a Galaxy Explorer")
  - Objeto descubierto: Notificación ("¡Nueva estrella descubierta!")
  - Misión completada: Narrador ("¡Excelente trabajo!")
- **Audio espacial:** Sonidos 3D para feedback de posición (objetos cerca suenan más fuerte)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 130-150 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en universo con 10,000+ estrellas visibles
  - Latencia: <50ms para respuesta de navegación (feedback instantáneo)
  - Objetos máximos: 100,000 estrellas, 10,000 planetas visitados simultáneamente
  - Memoria máxima: 350MB (incluye assets de 100 diseños de nave, texturas de nebulosas)
  - Generación procedimental: <200ms para generar nuevo sistema solar
- **Riesgos técnicos:**
  - Generación procedimental escalable: Mantener performance mientras el universo crece
  - Optimización de renderizado de miles de estrellas: Usar instanced rendering o LOD
  - Precisión científica: Datos deben ser realistas pero accesibles
  - Balance de dificultad: Exploración debe ser accesible sin ser aburrida

**Valor Educativo:**
- **Astronomía real:** Los niños aprenden sobre: estrellas, planetas, nebulosas, black holes, galaxias
- **Física espacial:** Entienden conceptos: gravedad, órbitas, espectros electromagnéticos
- **Método científico:** Observan, analizan, catalogan, formulan hipótesis
- **Matemáticas:** Cálculo de distancias, masas, temperaturas, edades estelares
- **Ciencia aplicada:** Entienden cómo funciona el universo real
- **Vocabulario científico:** Aprenden términos: supernova, nebulosa, exoplaneta, pulsar, espectro
- **Curiosidad científica:** Desarrollan asombro por el cosmos

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Rendering de universo
- [Procedural Generation - Algorithms](https://www.redblobgames.com/maps/terrain-from-noise/) - Generación procedimental
- [No Man's Sky - Space exploration](https://www.nomanssky.com/) - Inspiración para exploración
- [SpaceEngine - Universe simulator](https://spaceengine.org/) - Renderizado realista
- [NASA - Space education](https://www.nasa.gov/stem) - Referencia científica
- [Hubble Site - Astronomy images](https://hubblesite.org/) - Referencia visual
- [Web Audio API - Space sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos espaciales
- [PWA - Offline exploration](https://web.dev/offline/) - PWA para explorar sin internet

---

### Fecha de Actualización
**Última actualización:** 2026-02-17 12:49 UTC
**Ideas agregadas esta sesión:** 4 ideas (#23-#26)

---

## Resumen de Ideas Agregadas - Sesión 3

### Idea #19: Architecture Studio: Building Dreams
- **Género:** Simulación de construcción y arquitectura
- **Enfoque educativo:** Ingeniería estructural, física aplicada, diseño arquitectónico
- **Tecnologías clave:** Phaser 3, structural physics, Chart.js
- **Complejidad:** Alta (110-130 horas)
- **Valor destacado:** Enseña principios reales de ingeniería mientras fomenta creatividad

### Idea #20: Startup Tycoon: Entrepreneur Challenge
- **Género:** Simulación de emprendimiento (tycoon)
- **Enfoque educativo:** Finanzas, gestión de equipos, marketing, toma de decisiones
- **Tecnologías clave:** Phaser 3, Chart.js, Redux, AI de empleados
- **Complejidad:** Media-Alta (100-120 horas)
- **Valor destacado:** Enseña habilidades de negocio y emprendimiento realistas

### Idea #21: Newsroom Chronicles: Junior Journalists
- **Género:** Periodismo e investigación
- **Enfoque educativo:** Periodismo, verificación de hechos, ética periodística, comunicación
- **Tecnologías clave:** Phaser 3, NLP engine, rich text editor
- **Complejidad:** Alta (120-140 horas)
- **Valor destacado:** Desarrolla pensamiento crítico y habilidades de comunicación

### Idea #22: Galaxy Explorer: Space Science
- **Género:** Exploración espacial y astronomía
- **Enfoque educativo:** Astronomía, física espacial, método científico, curiosidad científica
- **Tecnologías clave:** Phaser 3, procedural generation, Perlin Noise
- **Complejidad:** Alta (130-150 horas)
- **Valor destacado:** Exploración infinita con datos científicos reales

---

### Lote 5 (Ideas 23-26)
**Fecha:** 2026-02-17
**Ejecución:** 3/25

---

#### Idea #23: Medical Lab: Virtual Doctor

**Concepto:**
Juego de medicina y salud donde los jugadores son doctores virtuales que diagnostican enfermedades, realizan procedimientos médicos, investigan nuevas enfermedades y administran hospitales. Combina gameplay tipo Surgeon Simulator con lecciones de anatomía, biología humana y salud pública.

**Motivación:**
- **Misión de salvar vidas:** Cada paciente es único y requiere diagnóstico preciso
- **Curiosidad sobre el cuerpo humano:** Explorar anatomía, órganos, sistemas
- **Progresión de médico:** Comienzan como estudiantes de medicina, avanzan a cirujanos de élite
- **Investigación médica:** Descubrir enfermedades y crear tratamientos
- **Hospital management:** Administrar recursos, personal, investigaciones

**Mecánica Principal:**
Los jugadores son doctores en un hospital virtual con departamentos: urgencias, cirugía, laboratorio, investigación, pediatría. Cada caso presenta un paciente con síntomas: fiebre, dolor, inflamación, etc. Los jugadores deben: tomar historial, examinar paciente (auscultar, palpar), ordenar pruebas (análisis de sangre, rayos X, MRI), diagnosticar enfermedad, prescribir tratamiento. Las enfermedades progresan en dificultad: resfriado común → gripe → fracturas → enfermedades cardiacas → tumores → enfermedades raras. Modo historia (convertirse en jefe de medicina) y modo sandbox (tratar pacientes sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar paciente, herramienta, prueba médica
- **Arrastrar (Drag):** Mover estetoscopio a corazón, termómetro a paciente, muestras al laboratorio
- **Pinch:** Zoom en el cuerpo del paciente para ver órganos y sistemas
- **Dos dedos (drag):** Pan/mover la vista del cuerpo
- **Tap rápido:** Tomar pulso del paciente (cuenta 5 segundos)
- **Tap largo (Long press):** Ver información médica detallada (historial, alergias, medicamentos)
- **Swipe horizontal:** Cambiar entre vista de paciente, vista de laboratorio, vista de tratamientos
- **Gestos complejos:**
  - Shake del dispositivo = "código azul" (emergencia crítica, requiere acción inmediata)
  - Dibujo de incisión = realizar cirugía (seguir línea punteada)
  - Doble tap en órgano = ver解剖 detallada (zoom microscópico)
  - Arrastrar herramienta a paciente = realizar procedimiento (inyección, sutura)
- **Multitouch hasta 3 dedos:** Manipular múltiples herramientas simultáneamente
- **Escribir:** Escribir notas médicas, recetas, diagnósticos

**Accesibilidad:**
- Pacientes con iconos grandes (min 80px) y síntomas resaltados
- Órganos y sistemas con color coding (corazón=rojo, pulmones=rosa, hígado=marrón)
- Voice assistant explica procedimientos ("Ahora escucha los pulmones con el estetoscopio")
- Modo "Tutorial" con guías paso a paso para cada procedimiento
- Haptic feedback para procedimientos (vibración al realizar incisión, inyección)
- Modo "Slow Motion" para cirugías complejas (0.5x velocidad)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado del cuerpo humano (anatomía interactiva)
  - `<canvas>` para laboratorio (análisis de sangre, muestras bajo microscopio)
  - `<canvas>` para cirugía (incisiones, suturas, procedimientos)
  - `<video>` para tutoriales animados de procedimientos médicos
  - `<details>/<summary>` para colapsar información médica
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de cuerpo humano, interacción con órganos)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del médico (casos resueltos, especializaciones)
  - Diagnosis system: Custom algorithm para validar diagnósticos (basado en síntomas y pruebas)
  - Procedural patients: Custom generators para crear pacientes únicos (síntomas, historial)
  - Animations: GSAP para transiciones entre departamentos y procedimientos
  - Storage: IndexedDB para guardar casos y progreso (offline play)
- **CSS:**
  - Grid layout para hospital (4x4 grid de departamentos)
  - CSS Transforms para zoom en el cuerpo humano (transform-origin: center)
  - CSS Animations para feedback de procedimientos (pulse, glow)
  - Backdrop-filter para blur de paneles médicos superpuestos
  - CSS Variables para theming por departamento (urgencias=rojo, cirugía=azul, laboratorio=verde)
  - Flexbox para contenedores de herramientas médicas
- **Otros:**
  - Web Audio API: Sonidos médicos (latidos del corazón, respiración, monitores hospitalarios)
  - DeviceOrientationEvent: Detectar shake para código azul
  - Touch Events API: Multi-touch para manipular múltiples herramientas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar casos y progreso (offline play)
  - Service Workers: PWA para tratar pacientes offline
  - Canvas API: Manipular píxeles para renderizado de órganos y tejidos
  - Speech API: Voice commands para navegación ("siguiente paciente", "ver laboratorio")

**Características Visuales:**
- **Paleta de colores:**
  - Hospital: Clinical clean (blanco, gris claro, azul)
  - Cuerpo humano: Realista (piel=tonos café, sangre=rojo, huesos=blanco, músculos=rojo oscuro)
  - Órganos: Colores realistas (corazón=rojo brillante, pulmones=rosa pálido, hígado=marrón rojizo, estómago=rosa grisáceo)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, backdrop-filter blur 10px)
- **Animaciones:**
  - Latidos del corazón: Pulsing animation (1.2 segundos por latido)
  - Respiración: Expansion/contraction de pecho (4 segundos por ciclo)
  - Incisión: Cutting animation con blood effect (0.5s)
  - Sutura: Stitching animation (0.3s por punto)
  - Código azul: Flash rojo pulsante + sonido de emergencia
- **Feedback visual:**
  - Diagnóstico correcto: Borde verde brillante, icono checkmark (0.5s)
  - Diagnóstico incorrecto: Borde rojo pulsante, hint ("Revisa los síntomas nuevamente")
  - Procedimiento completado: Flash blanco + icono de corazón
  - Paciente curado: Paciente sonríe + confetti (2s)
- **Personalización:**
  - 10+ especialidades médicas: Cardiología, neurología, pediatría, cirugía general, urgencias
  - 100+ enfermedades: Desde resfriado común hasta enfermedades raras
  - Avatar de médico con 40+ combinaciones (bata, estetoscopio, gafas, accesorios)
  - Skins de hospital (moderno, clásico, futurista, rural)
  - Modo investigación: Descubrir nuevas enfermedades y crear tratamientos

**Audio:**
- **Efectos de sonido:**
  - Latidos del corazón: Thump-thump (60-100 BPM, variación por paciente)
  - Respiración: Inhalation/exhalation sounds (0.5s inhale, 0.5s exhale)
  - Estetoscopio: Murmur de pulmones y corazón (continuous)
  - Inyección: Prick sound (short, 100ms)
  - Incisión: Cutting sound (300ms)
  - Monitor hospitalario: Beep constante (1 segundo por beep)
  - Código azul: Alarm pulsante (500ms on/off)
- **Música:**
  - Menú principal: Calm clinical music (piano + strings, 70 BPM)
  - Urgencias: Urgent orchestral (strings + brass, 90 BPM)
  - Cirugía: Focused ambient (minimal synth, 60 BPM)
  - Laboratorio: Clean electronic (white noise, 50 BPM)
  - Paciente curado: Warm celebratory (piano + bells, 80 BPM)
- **Voz:**
  - Tutorial: Voz de doctor experimentado amigable ("Bienvenido al hospital")
  - Código azul: Voz de emergencia ("¡CÓDIGO AZUL! ¡URGENCIAS!")
  - Paciente: Voces distintas por paciente (diferentes tonos, acentos)
- **Audio espacial:** Sonidos 3D para feedback de posición (latidos del corazón suenan más fuertes al lado izquierdo)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado del cuerpo humano (órganos y sistemas)
  - Latencia: <50ms para respuesta de interacción con herramientas médicas
  - Entidades máximas: 200 órganos/sistemas simultáneamente
  - Memoria máxima: 200MB (incluye sprites de 100 enfermedades, 50 órganos)
  - Diagnosis algorithm: <100ms para validar diagnóstico
- **Riesgos técnicos:**
  - Precisión médica: Información debe ser realista pero accesible para niños
  - Balance de dificultad: Evitar que diagnósticos sean frustrantes (pistas muy obscuras)
  - Validación de procedimientos: Detectar pasos incorrectos sin ser demasiado estricto
  - Optimización de renderizado: Órganos detallados pueden consumir mucha memoria

**Valor Educativo:**
- **Anatomía real:** Los niños aprenden sobre el cuerpo humano, órganos, sistemas (cardiovascular, respiratorio, digestivo)
- **Biología humana:** Entienden cómo funcionan los sistemas, enfermedades, tratamientos
- **Salud pública:** Aprenden sobre prevención de enfermedades, vacunación, higiene
- **Empatía:** Tratar pacientes desarrolla comprensión y compasión
- **Vocabulario médico:** Aprenden términos: diagnóstico, síntoma, tratamiento, cirugía, anatomía
- **Método científico:** Observan, hipotesan, prueban, concluyen (diagnóstico)
- **Pensamiento crítico:** Analizar síntomas y pruebas para llegar a diagnóstico correcto
- **Colaboración:** Modo cooperative donde 2-4 doctores tratan casos juntos

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Rendering de cuerpo humano
- [Human Anatomy Atlas - 3D anatomy](https://www.visiblebody.com/) - Referencia anatómica
- [Surgeon Simulator - Surgery game](https://www.bossastudios.com/) - Inspiración para gameplay de cirugía
- [Human Resource Machine - Medical diagnosis](https://store.steampowered.com/app/375820/Human_Resource_Machine/) - Lógica de diagnóstico
- [Mayo Clinic - Medical education](https://www.mayoclinic.org/) - Referencia médica
- [WebMD - Health information](https://www.webmd.com/) - Referencia de síntomas y enfermedades
- [Web Audio API - Medical sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos médicos
- [PWA - Offline medical](https://web.dev/offline/) - PWA para tratar pacientes sin internet

---

#### Idea #24: Fashion Designer: Style Studio

**Concepto:**
Juego de diseño de moda donde los jugadores crean ropa, accesorios y colecciones completas, participan en fashion shows, colaboran con clientes y construyen su marca de moda. Combina gameplay tipo Toca Boca con elementos de diseño, creatividad y emprendimiento.

**Motivación:**
- **Creatividad sin límites:** Canvas de diseño con 500+ patrones, texturas, colores
- **Reconocimiento de diseñador:** Fashion shows globales, críticas de moda, awards
- **Construcción de marca:** Crear identidad visual, logo, filosofía de marca
- **Competencia social:** Leaderboard de diseñadores, battles de diseño 1v1
- **Colaboración con clientes:** Diseñar para clientes reales (NPCs) con preferencias únicas

**Mecánica Principal:**
Los jugadores son diseñadores de moda en un studio virtual. Crean prendas de vestir: vestidos, trajes, accesorios, calzado. Tienen herramientas de diseño: dibujo libre, patrones predefinidos, texturas, stickers, capas. Cada colección tiene un tema (verano, invierno, gala, casual, futurista). Las misiones incluyen: diseñar para clientes específicos (novia, ejecutivo, estudiante), crear colecciones temáticas, participar en fashion shows (desfile en pasarela con votación), construir marca (crear logo, filosofía, marketing). Modo carrera (convertirse en diseñador de moda mundialmente famoso) y modo sandbox (diseñar sin restricciones).

**Interacción Móvil:**
- **Dibujar (Drag):** Dibujar patrones, texturas, detalles en prendas
- **Pinch:** Zoom en el canvas de diseño hasta 5x para detalles finos
- **Dos dedos (drag):** Pan/mover el canvas de diseño
- **Tap simple:** Seleccionar herramienta, color, textura, patrón
- **Tap rápido:** Añadir stickers, accesorios rápidos
- **Tap largo (Long press):** Eyeedropper (recoger color del canvas)
- **Swipe horizontal:** Cambiar entre vista de diseño, vista de modelo, vista de colección
- **Gestos complejos:**
  - Shake del dispositivo = "random pattern" (generar patrón aleatorio)
  - Dibujo de línea = añadir costura (línea de costura decorativa)
  - Doble tap en prenda = ver en modelo (preview 3D en maniquí)
  - Arrastrar prenda a modelo = vestir (ver cómo queda en modelo)
- **Multitouch hasta 10 dedos:** Soporte para múltiples pinceles simultáneos
- **Escribir:** Nombrar colecciones, diseñar logos de marca

**Accesibilidad:**
- Herramientas con iconos grandes (60x60px mínimo) y etiquetas claras
- Modo "Simple Design" reduce panel a 6 herramientas esenciales (pincel, colores, texturas, patrones, undo, enviar)
- Voice commands para navegación por menús ("abrir texturas", "seleccionar color azul")
- Color picker con nombres de colores accesibles (screen readers)
- Modelos con múltiples tipos de cuerpo (delgado, promedio, plus-size) para inclusividad

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para diseño de prendas (canvas infinito)
  - `<canvas>` para preview 3D en modelo (simulado con 2D transforms)
  - `<canvas>` para fashion show (pasarela animada)
  - `<input type="color">` para picker nativo en móviles
  - `<input type="file">` para importar texturas de galería
- **JavaScript:**
  - Librería de dibujo: Fabric.js o Konva.js (canvas con objetos editables)
  - Filtrado: CamanJS (filtros de textura en tiempo real)
  - Framework UI: React Native Web (cross-platform mobile-first)
  - State management: Redux para sincronización de canvas
  - AI de clientes: Custom AI para preferencias de clientes (colores favoritos, estilos)
  - Fashion show: Custom animation engine para pasarela
  - Animaciones: GSAP para transiciones suaves de UI
- **CSS:**
  - Grid layout para herramientas de diseño (8 columnas responsivo)
  - CSS Variables para theming dinámico (cambiar colores por diseñador)
  - CSS Transforms para rotación/escala de prendas (transform-origin)
  - Backdrop-filter para blur de paneles superpuestos
  - CSS Custom Properties para animaciones de herramientas (hover, active)
- **Otros:**
  - Web Workers: Procesamiento de filtros y texturas sin bloquear UI
  - IndexedDB: Guardar diseños completos y colecciones offline
  - Canvas API: Manipular píxeles para texturas personalizadas
  - Touch Events API: Multi-touch hasta 10 puntos simultáneos
  - Pointer Events API: Unificar mouse/touch/pen input
  - Service Workers: PWA para diseñar offline y sincronizar cuando hay conexión
  - Blob/File API: Exportar diseños en PNG, JPG, WEBP

**Características Visuales:**
- **Paleta de colores:**
  - Studio: Modern chic (blanco, gris, rosa pastel)
  - Prendas: Colores por colección (verano=vibrante, invierno=oscuro, gala=elegante)
  - Modelos: Pieles variadas (café, negro, blanco, asiático) para inclusividad
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, backdrop-filter blur 10px)
- **Animaciones:**
  - Prenda en modelo: Fade in + scale up (1s)
  - Fashion show: Models walk down runway (walk cycle, 3 FPS)
  - Colección presentada: Flash + confetti (2s)
  - Desbloquear textura: Texture emerges with glow (1.5s)
- **Feedback visual:**
  - Diseño completado: Botón "Terminar" brilla, botón "Ver en modelo" activa
  - Cliente satisfecho: Cliente sonríe + emoji de corazón (❤️)
  - Colección ganadora: Modal con trophy + confetti (2s)
- **Personalización:**
  - 500+ texturas: Animal print, floral, geométrica, abstracta, retro
  - 200+ patrones: Dresses, suits, pants, skirts, accessories, shoes
  - 50+ colores base + mixer para crear colores personalizados
  - Modelos con 30+ tipos de cuerpo, cabello, piel (inclusión)
  - Marca personal con logo, filosofía, slogan

**Audio:**
- **Efectos de sonido:**
  - Pincel stroke: Whoosh suave con variación por velocidad (50-200ms)
  - Seleccionar herramienta: Click satisfactorio (short, 50ms)
  - Añadir textura: Whoosh descendente (100ms)
  - Cliente satisfecho: Chime ascendente (C4-E4-G4, 300ms)
  - Fashion show: Snap de cámara (paparazzi), música de fondo
  - Colección ganadora: Fanfare de 5 notas (C4-E4-G4-B5-C6, 1.5s)
- **Música:**
  - Studio idle: Chic ambient (synth pads, 70 BPM)
  - Diseñando: Upbeat electronic (100 BPM)
  - Fashion show: Runway music (house, 130 BPM)
  - Colección ganadora: Celebratory pop (120 BPM)
- **Voz:**
  - Tutorial: Voz de diseñadora amigable ("¡Bienvenido a tu studio de moda!")
  - Cliente: Voz distinta por cliente (diferentes personalidades)
  - Colección ganadora: Voz celebratoria ("¡Tu colección es increíble!")

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 80-100 horas (3-4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS al diseñar (canvas rendering)
  - Latencia: <50ms para respuesta de pinceladas
  - Canvas size: Hasta 2048x2048px (4K) para alta calidad
  - Memoria máxima: 180MB (incluye texturas de 500 diseños)
  - Client AI: <200ms para generar preferencias de cliente

**Valor Educativo:**
- **Diseño y creatividad:** Los niños desarrollan sentido estético, composición, teoría del color
- **Emprendimiento:** Entienden cómo construir una marca, marketing, clientes
- **Inclusión:** Modelos diversos enseñan diversidad y aceptación
- **Vocabulario de moda:** Aprenden términos: colección, pasarela, croquis, textura, patrón
- **Confianza en auto-expresión:** Diseñar ropa desarrolla identidad personal
- **Colaboración:** Modo collaborative donde 2-4 diseñadores crean colección juntos

**Referencias e Inspiración:**
- [Fabric.js - Canvas con objetos](https://fabricjs.com/) - Manipulación de capas y texturas
- [CamanJS - Filtrado de imagen](https://camanjs.com/) - Texturas y filtros
- [Toca Boca - Fashion apps](https://tocaboca.com/) - Interacción simple con moda
- [Covet Fashion - Fashion styling game](https://covetfashion.com/) - Styling y battles
- [Vogue Runway - Fashion shows](https://www.vogue.com/fashion-shows) - Referencia de fashion shows
- [Fashion Week Online - Industry news](https://www.fashionweekonline.com/) - Referencia de industria
- [PWA - Offline design](https://web.dev/offline/) - PWA para diseñar sin internet

---

#### Idea #25: Energy Master: Renewable Power

**Concepto:**
Juego de energías renovables donde los jugadores construyen y administran sistemas de energía limpia, investigan tecnologías sostenibles y resuelven crisis energéticas. Combina city builder con simulación de energía, enseñando sobre fuentes renovables y sostenibilidad.

**Motivación:**
- **Poder de cambio:** Los jugadores sienten que están salvando el planeta con cada instalación de energía limpia
- **Progresión tecnológica:** Desbloquear nuevas tecnologías (paneles solares avanzados, turbinas eólicas de última generación)
- **Competencia global:** Leaderboard de "qué país logró el mayor porcentaje de energía renovable"
- **Desafíos reales:** Crisis energéticas basadas en problemas reales (apagones, demanda creciente, desastres naturales)
- **Misión educativa:** Entender cómo funciona la energía y por qué es importante la sostenibilidad

**Mecánica Principal:**
Los jugadores son ingenieros de energía en una ciudad que depende de combustibles fósiles. Su misión: transformar la ciudad a 100% energía renovable. Tienen recursos limitados (dinero, materiales, tiempo) y deben construir: paneles solares, turbinas eólicas, hidroeléctricas, geotérmicas, biogás, baterías de almacenamiento. Cada fuente tiene características: producción (kWh), coste, impacto ambiental, confiabilidad. Eventos aleatorios afectan la producción: nublado (menos sol), calma (menos viento), sequía (menos hidro). Hay modo historia (transformar la ciudad a 100% renovable) y modo sandbox (experimentar sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Colocar estructura, recoger recursos, ver estadísticas
- **Arrastrar (Drag):** Mover estructuras, reorganizar el mapa
- **Pinch:** Zoom en el mapa isométrico (0.5x-2x)
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap largo (Long press):** Ver estadísticas detalladas (producción, coste, impacto)
- **Swipe horizontal:** Cambiar entre vista de mapa y vista de estadísticas
- **Gestos complejos:**
  - Shake del dispositivo = evento de desastre (apagón, tormenta)
  - Dibujo de área = seleccionar zona para instalación (solar en techo, eólica en colina)
  - Doble tap en estructura = upgrade (mejorar eficiencia)
  - Arrastrar batería a estructura = conectar almacenamiento
- **Multitouch hasta 4 dedos:** Selección múltiple para upgrades masivos
- **Escribir:** Nombar instalaciones, escribir mensajes a la comunidad

**Accesibilidad:**
- Botones grandes (48x48px mínimo) con etiquetas claras
- Color coding por tipo de energía (solar=amarillo, eólica=azul, hidro=verde)
- Voice assistant explica tecnologías ("Los paneles solares convierten luz del sol en electricidad")
- Modo "Easy Mode" con recursos más abundantes
- Haptic feedback para eventos (vibración cuando hay apagón)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para mapa isométrico (2048x2048px máximo)
  - `<canvas>` para gráficos de energía (producción, consumo, batería)
  - `<video>` para tutoriales de tecnologías
  - `<details>/<summary>` para colapsar información
- **JavaScript:**
  - Game engine: Phaser 3 (isometric rendering)
  - Gestión de recursos: Custom state management (Redux-lite)
  - Simulación de energía: Algoritmo para calcular producción en tiempo real
  - Framework UI: React o Vue.js (componentes reactivos)
  - Charts: Chart.js para visualizar estadísticas
  - Animaciones: GSAP para transiciones
  - Storage: IndexedDB para guardar progreso
- **CSS:**
  - Grid layout para panel de construcción (12 columnas responsivo)
  - CSS Transforms para zoom del mapa
  - CSS Animations para feedback (scale up, fade in)
  - Backdrop-filter para blur de estadísticas
  - CSS Variables para theming
  - Flexbox para contenedores de recursos
- **Otros:**
  - Web Audio API: Sonidos ambientales (viento, agua, electricidad)
  - DeviceOrientationEvent: Detectar shake para desastres
  - Touch Events API: Multi-touch para selección múltiple
  - Pointer Events API: Unificar input
  - IndexedDB: Guardar progreso offline
  - Service Workers: PWA para jugar offline
  - Canvas API: Manipular píxeles para efectos

**Características Visuales:**
- **Paleta de colores:**
  - Mapa: Tonos naturales (cielo=azul, tierra=marrón, agua=azul)
  - Estructuras: Colores por tecnología (solar=amarillo, eólica=blanco, hidro=verde)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, blur 10px)
- **Animaciones:**
  - Construcción: Estructura emerge del suelo (scale up, 0.5s)
  - Paneles solares: Rotan para seguir el sol (animación continua)
  - Turbinas eólicas: Giran (animation, 0.5s por revolución)
  - Apagón: Flash rojo + oscuridad (1s)
- **Feedback visual:**
  - Construcción válida: Borde verde brillante
  - Construcción inválida: Borde rojo pulsante
  - Apagón: Alert modal + botón de emergencia
  - Logro desbloqueado: Modal con escudo dorado

**Audio:**
- **Efectos de sonido:**
  - Panel solar: Hum eléctrico (continuous)
  - Turbina eólica: Whoosh de viento (continuous)
  - Hidroeléctrica: Water rushing (continuous)
  - Apagón: Power down sound (300ms)
  - Logro: Fanfare de 5 notas (C4-E4-G4-B5-C6, 1.5s)
- **Música:**
  - Mapa idle: Ambient natural (viento, agua, 60 BPM)
  - Construyendo: Upbeat electronic (100 BPM)
  - Apagón: Tense orchestral (50 BPM)
  - Éxito: Inspirational (piano + synth, 90 BPM)
- **Voz:**
  - Tutorial: Voz de ingeniera amigable ("¡Construye paneles solares!")
  - Apagón: Voz de emergencia ("¡APAGÓN!")

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 80-100 horas (3-4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en mapa isométrico
  - Latencia: <50ms para respuesta de construcción
  - Entidades máximas: 2000 estructuras
  - Memoria máxima: 150MB
  - Simulación de energía: <100ms para calcular producción

**Riesgos técnicos:**
- Balance de juego: Evitar frustración (recursos muy escasos)
- Precisión científica: Información realista pero accesible
- Optimización: Rendering de miles de estructuras

**Valor Educativo:**
- **Energías renovables:** Los niños aprenden sobre solar, eólica, hidro, geotérmica, biogás
- **Sostenibilidad:** Entienden por qué es importante reducir emisiones
- **Matemáticas:** Cálculo de producción, consumo, baterías
- **Vocabulario científico:** Aprenden términos: kW, kWh, eficiencia, almacenamiento, cuadrícula
- **Responsabilidad ambiental:** Entienden impacto individual y colectivo
- **Pensamiento estratégico:** Planificar a largo plazo

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Rendering
- [Chart.js - Graphing library](https://www.chartjs.org/) - Estadísticas
- [SimCity - City builder](https://www.ea.com/games/simcity) - Inspiración para gestión
- [City Skylines - City simulation](https://www.paradoxinteractive.com/) - Gestión compleja
- [IRENA - Renewable energy data](https://www.irena.org/) - Referencia científica
- [Web Audio API - Environmental sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos

---

#### Idea #26: Biology Explorer: DNA Adventures

**Concepto:**
Juego de biología molecular y genética donde los jugadores exploran el mundo celular, manipulan ADN, descubren genes y entienden cómo funciona la vida a nivel molecular. Combina exploración con laboratorio virtual, enseñando genética, biología celular y evolución.

**Motivación:**
- **Descubrimiento del microcosmos:** Explorar células, orgánulos, moléculas a escala microscópica
- **Manipulación genética:** Editar ADN, crear organismos, descubrir mutaciones
- **Misión científica:** Descubrir cómo funcionan los genes, proteínas, enfermedades genéticas
- **Colección de especies:** Desbloquear 100+ organismos unicelulares y multicelulares
- **Competencia científica:** Leaderboard de descubridores de genes y mutaciones

**Mecánica Principal:**
Los jugadores son biólogos moleculares que navegan por el mundo celular. Exploran 3 niveles: células procariontas (bacterias), células eucariontas (animales, plantas), nivel molecular (ADN, proteínas, enzimas). Cada nivel tiene misiones: observar división celular (mitosis, meiosis), manipular ADN (CRISPR virtual), investigar mutaciones, descubrir genes (funciones de proteínas). Las herramientas incluyen: microscopio virtual (zoom hasta 1000x), editor de ADN (añadir/eliminar/insertar nucleótidos), simulador de proteínas (fold/unfold), laboratorio de experimentos (crear organismos). Modo historia (descubrir el código genético) y modo sandbox (experimentar libremente).

**Interacción Móvil:**
- **Tap simple:** Seleccionar orgánulo, nucleótido, proteína
- **Arrastrar (Drag):** Mover orgánulos, insertar nucleótidos en ADN, fold proteínas
- **Pinch:** Zoom en el mundo celular (1x-1000x, desde célula hasta átomo)
- **Dos dedos (drag):** Pan/mover la vista del microscopio
- **Tap rápido:** Añadir nucleótido (A, T, C, G) rápidamente
- **Tap largo (Long press):** Ver información detallada (estructura, función, secuencia)
- **Swipe horizontal:** Cambiar entre vista de célula, vista de ADN, vista de proteína
- **Gestos complejos:**
  - Shake del dispositivo = "mutación aleatoria" (cambiar nucleótido aleatoriamente)
  - Dibujo de hélice = ver estructura de ADN en 3D
  - Doble tap en proteína = fold/unfold (cambiar conformación)
  - Arrastrar nucleótido a ADN = insertar en secuencia
- **Multitouch hasta 3 dedos:** Manipular múltiples moléculas simultáneamente
- **Escribir:** Nombrar especies descubiertas, escribir notas de laboratorio

**Accesibilidad:**
- Orgánulos con iconos grandes (min 60px) y etiquetas claras
- Color coding por tipo de molécula (A=verde, T=rojo, C=azul, G=amarillo)
- Voice assistant explica conceptos ("El ADN contiene las instrucciones para construir proteínas")
- Modo "Simple Mode" con menos detalles técnicos
- Haptic feedback para eventos (vibración al insertar nucleótido)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para mundo celular (renderizado 3D simulado con 2D)
  - `<canvas>` para estructura de ADN (hélice de doble trenza)
  - `<canvas>` para folding de proteínas (simulación física)
  - `<video>` para tutoriales animados de biología
  - `<details>/<summary>` para colapsar información
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de célula, orgánulos)
  - Simulación molecular: Custom physics engine para folding de proteínas
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del biólogo (genes descubiertos, especies)
  - Algoritmos genéticos: Custom algoritmo para simular evolución y mutaciones
  - Animaciones: GSAP para transiciones entre niveles
  - Storage: IndexedDB para guardar genes y especies (offline play)
- **CSS:**
  - Grid layout para laboratorio (8x8 grid de herramientas)
  - CSS 3D transforms para estructura de ADN (rotar hélice)
  - CSS Animations para feedback de manipulación (pulse, glow)
  - Backdrop-filter para blur de paneles científicos
  - CSS Variables para theming por nivel (célula=rosa, ADN=azul, proteína=verde)
  - Flexbox para contenedores de moléculas
- **Otros:**
  - Web Audio API: Sonidos moleculares (bonds breaking, enzymes)
  - DeviceOrientationEvent: Detectar shake para mutación aleatoria
  - Touch Events API: Multi-touch para manipular múltiples moléculas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar genes y especies (offline play)
  - Service Workers: PWA para explorar offline
  - Canvas API: Manipular píxeles para renderizado de orgánulos
  - Speech API: Voice commands para navegación ("zoom 100x", "ver núcleo")

**Características Visuales:**
- **Paleta de colores:**
  - Célula: Tonalidades orgánicas (rosa, violeta, cian, verde)
  - Núcleo: Púrpura oscuro con bordes brillantes
  - ADN: Azul + nucleótidos coloridos (A=verde, T=rojo, C=azul, G=amarillo)
  - Proteínas: Colores por estructura (α-helice=naranja, β-sheet=verde)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, blur 10px)
- **Animaciones:**
  - División celular: Cell splits en dos (mitosis, 2s)
  - Insertar nucleótido: Nucleótido appears con glow (0.3s)
  - Fold proteína: Proteína se reorganiza (1s)
  - Mutación: Flash rojo + cambio de nucleótido (0.5s)
  - Descubrir gen: Confetti de nucleótidos (2s)
- **Feedback visual:**
  - Secuencia válida: ADN brilla en verde, proteína se forma
  - Secuencia inválida: ADN vibra rojo, hint ("Revisa el codón")
  - Mutación exitosa: Flash dorado + nueva proteína (1s)
  - Especie descubierta: Modal con microscopio + descripción

**Audio:**
- **Efectos de sonido:**
  - Insertar nucleótido: Click satisfactorio (short, 50ms)
  - Bond breaking: Snap (200ms)
  - Proteína folding: Whoosh (300ms)
  - División celular: Squish + split (1s)
  - Mutación: Buzz descendente (300ms)
  - Descubrir gen: Chime ascendente (C4-E4-G4-B5, 1.5s)
- **Música:**
  - Célula idle: Ambient cellular (synth pads, 60 BPM)
  - Editando ADN: Rhythmic electronic (100 BPM)
  - Proteína folding: Mystical (choir + bells, 70 BPM)
  - División celular: Tense orchestral (strings, 80 BPM)
  - Descubrimiento: Celebratory (piano + synth, 90 BPM)
- **Voz:**
  - Tutorial: Voz de bióloga amigable ("¡Bienvenido al mundo molecular!")
  - Mutación: Voz de descubrimiento ("¡Has creado una mutación única!")
  - Especie descubierta: Voz celebratoria ("¡Nueva especie descubierta!")

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 120-140 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de célula (1000+ orgánulos)
  - Latencia: <50ms para respuesta de manipulación de nucleótidos
  - Entidades máximas: 10,000 orgánulos simultáneamente
  - Memoria máxima: 250MB (incluye sprites de 100 especies, 200 genes)
  - Simulación molecular: <200ms para calcular folding de proteína
- **Riesgos técnicos:**
  - Precisión científica: Información debe ser realista pero accesible
  - Simulación de folding: Física de proteínas es computacionalmente intensiva
  - Balance de dificultad: Evitar que sea frustrante (conceptos muy técnicos)
  - Optimización de rendering: 10,000 orgánulos pueden consumir mucha memoria

**Valor Educativo:**
- **Biología real:** Los niños aprenden sobre células, orgánulos, ADN, proteínas, genes
- **Genética:** Entienden cómo funciona el código genético, mutaciones, herencia
- **Evolución:** Aprenden cómo las especies cambian y se adaptan
- **Vocabulario científico:** Aprenden términos: nucleótido, codón, proteína, mitosis, meiosis, mutación
- **Método científico:** Observan, hipotesan, prueban, concluyen (laboratorio virtual)
- **Curiosidad científica:** Desarrollan asombro por el mundo microscópico
- **Bioética:** Discuten implicaciones de edición genética (CRISPR)

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Rendering de célula
- [Foldit - Protein folding game](https://fold.it/) - Inspiración para folding de proteínas
- [Biology Corner - Cell simulation](https://www.biologycorner.com/) - Simulaciones biológicas
- [NCBI - GenBank database](https://www.ncbi.nlm.nih.gov/genbank/) - Referencia de genes
- [Genome.gov - Genetics education](https://www.genome.gov/) - Referencia de genética
- [Web Audio API - Molecular sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos moleculares
- [PWA - Offline exploration](https://web.dev/offline/) - PWA para explorar sin internet

---

### Lote 5: Resumen de Ideas Agregadas

### Idea #23: Medical Lab: Virtual Doctor
- **Género:** Simulación médica
- **Enfoque educativo:** Anatomía, biología humana, salud pública, empatía
- **Tecnologías clave:** Phaser 3, anatomy rendering, diagnosis system
- **Complejidad:** Media-Alta (100-120 horas)
- **Valor destacado:** Enseña medicina real mientras desarrolla empatía y pensamiento crítico

### Idea #24: Fashion Designer: Style Studio
- **Género:** Diseño de moda y creatividad
- **Enfoque educativo:** Diseño, creatividad, emprendimiento, inclusión
- **Tecnologías clave:** Fabric.js, CamanJS, React Native Web
- **Complejidad:** Media (80-100 horas)
- **Valor destacado:** Fomenta creatividad e inclusión con modelos diversos

### Idea #25: Energy Master: Renewable Power
- **Género:** Simulación de energía renovable
- **Enfoque educativo:** Energías renovables, sostenibilidad, matemáticas aplicadas
- **Tecnologías clave:** Phaser 3, Chart.js, energy simulation
- **Complejidad:** Media (80-100 horas)
- **Valor destacado:** Enseña sobre energía limpia y sostenibilidad con información realista

### Idea #26: Biology Explorer: DNA Adventures
- **Género:** Biología molecular y genética
- **Enfoque educativo:** Biología celular, genética, ADN, proteínas, evolución
- **Tecnologías clave:** Phaser 3, molecular physics, genetic algorithms
- **Complejidad:** Alta (120-140 horas)
- **Valor destacado:** Exploración del mundo molecular con datos científicos reales

---

#### Idea #27: Global Explorer: World Cultures

**Concepto:**
Juego de exploración geográfica y cultural donde los jugadores viajan virtualmente por diferentes países, aprenden sobre sus culturas, idiomas, geografía, gastronomía, tradiciones y monumentos. Combina aventura de exploración con inmersión cultural, enseñando geografía, historia mundial, diversidad cultural y apertura mental.

**Motivación:**
- **Exploración sin límites:** Viajar por 50+ países sin salir de casa
- **Descubrimiento cultural:** Aprender sobre tradiciones únicas, fiestas, comida típica
- **Colección de pasaportes:** Desbloquear sellos de cada país visitado y completar el "Pasaporte Global"
- **Misiones de embajador:** Completar tareas culturales (aprender 10 frases en el idioma, probar receta local)
- **Competencia global:** Leaderboard de "embajadores más viajados" por país y continente
- **Conexión humana:** Conectar con jugadores de otros países para intercambio cultural

**Mecánica Principal:**
Los jugadores son "embajadores virtuales" que viajan por un mapa mundial interactivo. Cada país tiene un "Módulo Cultural" con 5 secciones: Geografía (mapa, capital, clima, relieve), Cultura (tradiciones, fiestas, vestimenta), Idioma (10 frases esenciales con pronunciación), Gastronomía (recetas típicas, ingredientes), Monumentos (sitios históricos, arquitectura). Para desbloquear completamente un país, deben completar misiones: aprender frases, responder quizzes, recolectar "artefactos culturales" (objetos virtuales), tomar fotos virtuales de monumentos. Hay modo historia (completar el Pasaporte Global visitando 50 países) y modo libre (explorar sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar país, monumento, artefacto cultural
- **Arrastrar (Drag):** Navegar por mapa mundial (pan), mover elementos en mini-games
- **Pinch:** Zoom en mapa (0.5x-5x) para ver detalles geográficos
- **Dos dedos (drag):** Pan/mover la vista del país seleccionado
- **Tap largo (Long press):** Ver información extendida de país (población, moneda, bandera)
- **Tap rápido:** Aprender frases en idioma (reproducción de audio)
- **Swipe horizontal:** Cambiar entre secciones culturales (geografía, cultura, idioma, comida, monumentos)
- **Gestos complejos:**
  - Shake del dispositivo = "avión despega" (animación de viaje entre países)
  - Dibujo de país = búsqueda rápida (dibujar forma aproximada del país)
  - Doble tap en monumento = modo "foto virtual" (capturar screenshot del monumento)
  - Arrastrar ingrediente a olla = mini-game de cocina (preparar receta local)
- **Multitouch hasta 3 dedos:** Selección múltiple de países para comparar estadísticas
- **Escribir:** Anotaciones en diario de viaje personal

**Accesibilidad:**
- Mapa con países etiquetados claramente (nombre + bandera en icono 80x80px)
- Frases en idioma con pronunciación phonetic y audio (text-to-speech)
- Voice assistant explica curiosidades ("¡En Japón, el arroz se come con palillos!")
- Modo "Easy Mode" con quizzes más sencillos y menos preguntas
- Haptic feedback para viajes suaves (vibración suave al aterrizar en nuevo país)
- Color coding por continente (América=verde, Europa=azul, Asia=rojo, África=naranja, Oceanía=púrpura)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para mapa mundial interactivo (vector-based con zoom)
  - `<canvas>` para renderizado de monumentos 3D (simulado con 2D shading)
  - `<canvas>` para mini-games de cocina (drag ingredientes a olla)
  - `<video>` para videos de tradiciones y fiestas locales
  - `<audio>` para pronunciación de frases en idiomas nativos
  - `<input type="text">` para diario de viaje
  - `<details>/<summary>` para secciones colapsables de información cultural
- **JavaScript:**
  - Map engine: Leaflet.js o Mapbox GL (mapa interactivo vector-based)
  - Game engine: Phaser 3 (renderizado de países, monumentos, mini-games)
  - Text-to-Speech: Web Speech API (pronunciación de frases en 20+ idiomas)
  - Speech Recognition: Web Speech API (práctica de pronunciación por el jugador)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del embajador (países visitados, frases aprendidas)
  - Animaciones: GSAP para transiciones entre países (avión despegando/aterrizando)
  - Storage: IndexedDB para guardar pasaporte, fotos, diario de viaje
  - Data: JSON con 50+ países, geografía, cultura, idiomas, recetas, monumentos
- **CSS:**
  - Grid layout para módulos culturales (5 secciones responsivo)
  - CSS Transforms para zoom del mapa (transform-origin: cursor)
  - CSS Animations para feedback de aprendizaje (glow, pulse, fade)
  - Backdrop-filter para blur de paneles superpuestos (glassmorphism)
  - CSS Variables para theming por continente (América=verdes, Europa=azules)
  - Flexbox para contenedores de frases y vocabulario
- **Otros:**
  - Web Audio API: Pronunciación de frases en idiomas nativos
  - Web Speech API: Text-to-speech y speech recognition para práctica de idiomas
  - Touch Events API: Multi-touch para mini-games de cocina
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar pasaporte completo, fotos virtuales, diario (offline play)
  - Service Workers: PWA para explorar países offline (datos precargados)
  - Canvas API: Renderizado de mapa, monumentos, mini-games
  - Localization API: Formato de fechas, números por región (ej: 1,000 vs 1.000)

**Características Visuales:**
- **Paleta de colores:**
  - Mapa mundial: Colores por continente (América=#4CAF50, Europa=#2196F3, Asia=#F44336, África=#FF9800, Oceanía=#9C27B0)
  - Países seleccionados: Highlight brillante con borde dorado (#FFD700)
  - Monumentos: Texturas realistas con iluminación dinámica
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.9, backdrop-filter blur 10px)
  - Banderas: Renderizadas con colores reales (50+ banderas)
- **Animaciones:**
  - Viaje entre países: Avión animado con trail de humo (2s)
  - Aterrizar en país: Zoom in suave hacia capital (1s)
  - Aprender frase: Flash verde + icono de checkmark (0.5s)
  - Quiz correcto: Confetti de banderas del país (200 particles, 1.5s)
  - Desbloquear país: Modal con sello de pasaporte + música local (1.5s)
- **Feedback visual:**
  - País visitado: Icono de checkmark verde en miniatura del mapa
  - Frase aprendida: Texto brilla en verde + audio de confirmación
  - Quiz completado: Progreso del país avanza (20% → 40% → 60% → 80% → 100%)
  - Foto capturada: Flash de cámara + miniatura en galería personal
- **Personalización:**
  - Pasaporte virtual con foto de avatar del jugador, nombre, nacionalidad
  - Diario de viaje personalizable (fondos, stickers, fotos)
  - Galería de fotos virtuales de monumentos visitados
  - Avatar de embajador con 50+ combinaciones (vestimenta tradicional de cada país)
  - Temas visuales (Clásico, Cartoon, Realista, Minimalista)
  - Skins de mapa (Satellite, Topographic, Political, Physical)

**Audio:**
- **Efectos de sonido:**
  - Avión despegando: Engine sound con ramp up (50→200Hz, 2s)
  - Aterrizar: Landing gear touchdown (300ms)
  - Aprender frase: Chime ascendente (C4-E4-G4, 300ms)
  - Quiz correcto: Ding satisfactorio (C5, 200ms)
  - Quiz incorrecto: Buzz descendente (E2-C2, 300ms)
  - Foto capturada: Shutter click (100ms)
  - Desbloquear país: Fanfare local (música tradicional del país, 2s)
- **Música:**
  - Mapa mundial: Ambient worldly (instrumentos globales: sitar, djembe, piano, 70 BPM)
  - Explorando país: Música tradicional local (cada país tiene leitmotiv único: tango=Argentina, salsa=Cuba, reggae=Jamaica)
  - Aprendiendo idioma: Calm focus (ambient minimalista, 60 BPM)
  - Quiz: Tense but encouraging (orchestral light, 80 BPM)
  - Completando país: Celebratory local (folk upbeat, 100 BPM)
- **Voz:**
  - Tutorial: Voz de embajadora entusiasta ("¡Bienvenido al Pasaporte Global! ¡Vamos a explorar el mundo!")
  - Frases en idioma: Nativos del país pronuncian frases (text-to-speech con acento local)
  - Quiz feedback: Voz de guía ("¡Muy bien! Has aprendido 5 frases en japonés")
  - Logro: Voz celebratoria ("¡Nuevo país desbloqueado! ¡Tu pasaporte crece!")
- **Audio espacial:** Sonidos 3D de ambiente (países tropicales tienen pájaros, países árticos viento)

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 90-110 horas (4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en mapa interactivo (vector-based rendering)
  - Latencia: <100ms para respuesta de interacción en mapa
  - Text-to-Speech: <200ms para pronunciar frase (Web Speech API)
  - Memoria máxima: 200MB (incluye mapas vectoriales, videos de 50 países, monumentos)
  - Offline data: 50MB para precargar datos de países prioritarios (offline play)
- **Riesgos técnicos:**
  - Precisión geográfica: Datos de países, capitales, clima deben ser precisos
  - Localización de audio: 20+ idiomas requiere配音 o TTS de alta calidad
  - Offline support: Servir datos de países sin conexión (precarga inteligente)
  - Mini-games de cocina: Balance de dificultad para que sean divertidos y educativos

**Valor Educativo:**
- **Geografía real:** Los niños aprenden capitales, clima, relieve, población de 50+ países
- **Cultura global:** Entienden tradiciones, fiestas, vestimenta, comida de diferentes culturas
- **Idiomas:** Aprenden frases esenciales en 20+ idiomas (hola, gracias, por favor, ¿dónde está?)
- **Apertura mental:** Desarrollan empatía y respeto por otras culturas
- **Historia mundial:** Aprenden sobre monumentos históricos y su significado cultural
- **Vocabulario cultural:** Aprenden términos: patrimonio, tradición, diversidad, globalización
- **Conectividad:** Conectan con jugadores de otros países para intercambio cultural real

**Referencias e Inspiración:**
- [Leaflet.js - Interactive maps](https://leafletjs.com/) - Mapa mundial vector-based
- [Mapbox GL - Vector tiles](https://docs.mapbox.com/mapbox-gl-js/) - Mapas con zoom avanzado
- [Duolingo - Language learning](https://www.duolingo.com/) - Inspiración para aprendizaje de idiomas
- [Google Arts & Culture - Virtual museums](https://artsandculture.google.com/) - Inspiración para inmersión cultural
- [GeoGuessr - Geography game](https://www.geoguessr.com/) - Exploración geográfica interactiva
- [Worldometer - Country statistics](https://www.worldometers.info/) - Referencia de datos geográficos
- [Web Speech API - TTS/STT](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) - Pronunciación y práctica de idiomas
- [PWA - Offline-first](https://web.dev/offline/) - Precarga de datos para exploración sin internet

---

#### Idea #28: Science Journalist: Investigate!

**Concepto:**
Juego de periodismo científico donde los jugadores son reporteros jóvenes que investigan noticias científicas, verifican datos, entrevistan expertos y publican artículos. Combina periodismo de datos, investigación científica y escritura, enseñando pensamiento crítico, método científico, verificación de fuentes y comunicación de la ciencia.

**Motivación:**
- **Poder de la verdad:** Exponer misinformation, publicar noticias basadas en evidencia
- **Carrera de periodista:** Ascender de pasante a editor jefe del periódico científico
- **Impacto real:** Artículos bien investigados son "publicados" y ganan lectores, likes, premios
- **Misiones de breaking news:** Eventos científicos emergentes (descubrimientos, desastres naturales)
- **Competencia de noticias:** Leaderboard de "periodistas más leídos" y "artículos más virales"
- **Conexión con científicos:** Entrevistar a expertos virtuales (con datos reales)

**Mecánica Principal:**
Los jugadores son periodistas en una redacción científica virtual. Reciben "pitches" de noticias (temas científicos de actualidad: cambio climático, IA, vacunas, espacio). Deben: investigar fuentes (acceder a artículos científicos, bases de datos, entrevistas), verificar datos (cross-check con múltiples fuentes), entrevistar expertos ( NPCs con datos reales), redactar artículo (estructura: lead, body, conclusiones), verificar facts (herramienta de fact-checking), publicar en el periódico. Las noticias se clasifican por categoría (Cambio Climático, Salud, Tecnología, Espacio, Naturaleza). Artículos de alta calidad ganan lectores, likes y premios (Pulitzer Jr.). Hay modo historia (convertirse en editor jefe) y modo libre (investigar cualquier tema).

**Interacción Móvil:**
- **Tap simple:** Seleccionar pitch de noticia, fuente, experto
- **Arrastrar (Drag):** Organizar secciones del artículo (lead → body → conclusiones)
- **Pinch:** Zoom en documento (artículo científico, paper, gráfico)
- **Dos dedos (drag):** Pan/mover la vista del documento
- **Tap rápido:** Añadir highlight a texto importante (para citas)
- **Tap largo (Long press):** Ver contexto de frase, fuente original
- **Swipe horizontal:** Cambiar entre pestañas de investigación (fuentes, expertos, datos, borrador)
- **Gestos complejos:**
  - Shake del dispositivo = "breaking news alert" (nuevo pitch urgente aparece)
  - Dibujo de marca de verificación = fact-check rápido (validar dato)
  - Doble tap en párrafo = expandir/collapse (ver más detalles)
  - Arrastrar experto a artículo = añadir cita (quote from expert)
- **Multitouch hasta 3 dedos:** Selección múltiple de fuentes para comparar datos
- **Escribir:** Redactar artículo completo con editor de texto enriquecido (negrita, cursiva, citas)

**Accesibilidad:**
- Editor de texto con fuente grande (16-20px) y alto contraste
- Fuentes con iconos claros (peer-reviewed=📚, news=📰, government=🏛️)
- Voice assistant explica cómo verificar fuentes ("Este paper es revisado por pares")
- Modo "Fact-Check Assist" que automáticamente valida datos (warnings de misinformation)
- Haptic feedback para acciones importantes (publicar= vibración fuerte, guardar= suave)
- Color coding por veracidad (verde=verificado, amarillo=verificación pendiente, rojo=fake news)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` para infografías y gráficos de datos (Chart.js)
  - `<canvas>` para timeline de investigación (visualizar progreso)
  - `<article>` para renderizado de artículos publicados
  - `<video>` para entrevistas con expertos virtuales
  - `<audio>` para audio de entrevistas (podcast-style)
  - `<textarea>` con contenteditable para editor de artículo (Rich Text)
  - `<details>/<summary>` para fuentes colapsables
- **JavaScript:**
  - Editor de texto: Quill.js o Draft.js (rich text editor)
  - Visualización de datos: Chart.js o D3.js (gráficos, infografías)
  - Fact-checking: Custom algorithm para cross-check fuentes (simulated)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del periodista (artículos, lectores, premios)
  - Data: JSON con 100+ noticias, fuentes, expertos (datos reales)
  - Simulación de lectores: Custom algorithm para engagement (likes, shares basados en calidad)
  - Animaciones: GSAP para transiciones entre redacción y publicación
  - Storage: IndexedDB para guardar borradores, artículos publicados
- **CSS:**
  - Grid layout para redacción (3 columnas: noticias en curso, investigación, borrador)
  - CSS Typography para tipografía de artículos (serif para body, sans-serif para headings)
  - CSS Animations para feedback de fact-check (pulse, glow, shake)
  - Backdrop-filter para blur de paneles de fuentes (glassmorphism)
  - CSS Variables para theming (tema de periódico, modo oscuro/claro)
  - Flexbox para contenedores de fuentes y citas
- **Otros:**
  - Web Audio API: Sonidos de redacción (teclado, notificación de email)
  - Touch Events API: Multi-touch para comparar múltiples fuentes
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar borradores, artículos publicados (offline play)
  - Service Workers: PWA para investigar offline (datos precargados)
  - Canvas API: Renderizado de gráficos y infografías
  - Clipboard API: Copiar/paste de citas y datos
  - Text-to-Speech: Lectura de artículos para revisión final

**Características Visuales:**
- **Paleta de colores:**
  - Redacción: Estilo periódico clásico (#FFFFFF background, #000000 text, serif fonts)
  - Fact-check: Verde (#4CAF50) para verificado, amarillo (#FFC107) para pendiente, rojo (#F44336) para fake news
  - Fuentes: Color coding por tipo (peer-reviewed=azul, news=naranja, government=verde, blog=gris)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.9, backdrop-filter blur 10px)
  - Gráficos: Paleta profesional (azul, verde, naranja, morado para diferentes categorías)
- **Animaciones:**
  - Recibir pitch: Slide in desde derecha (600ms)
  - Fact-check: Pulse verde/rojo por veracidad (0.5s)
  - Publicar artículo: Confetti de periódicos (200 particles, 2s)
  - Ganar premio: Modal con trofeo dorado + fanfare (2s)
  - Breaking news: Flash rojo + ticker tape (1s)
- **Feedback visual:**
  - Artículo verificado: Badge de "Verified" con borde verde
  - Artículo viral: Badge de "Viral" con fuego animado
  - Leer artículo: Counter de lectores animado (0→100→1000→10000)
  - Logro: Modal con insignia de periodista (Reporter, Investigator, Editor, Pulitzer Jr.)
- **Personalización:**
  - Periódico personalizable (nombre, logo, diseño de portada)
  - Avatar de periodista con 40+ combinaciones (camisa, bolígrafo, lente, cámara)
  - Portafolio de artículos publicados con miniaturas y estadísticas
  - Skins de redacción (Minimalista, Clásico, Moderno, Futurista)
  - Templates de artículos (investigación, entrevista, opinión, breaking news)

**Audio:**
- **Efectos de sonido:**
  - Nuevo pitch: Notification chime (C4-E4-G4, 300ms)
  - Teclado escribiendo: Clicking sounds (50ms por keystroke)
  - Fact-check verificado: Chime ascendente (C5-E5-G5, 400ms)
  - Fact-check fake news: Buzz alarmante (E2-C2, 500ms)
  - Publicar: Printing press sound (mechanical, 1s)
  - Ganar premio: Fanfare de 6 notas (C4-E4-G4-B5-C6-E6, 2.5s)
- **Música:**
  - Redacción idle: Ambient newsroom (keyboard clicks, phone rings, 70 BPM)
  - Investigando: Focus electronic (synth pads, 80 BPM)
  - Fact-checking: Tense mystery (orchestral minimalista, 90 BPM)
  - Publicando: Upbeat news (broadcast music, 110 BPM)
  - Ganando premio: Celebratory orchestral (brass + strings, 100 BPM)
- **Voz:**
  - Tutorial: Voz de editora entusiasta ("¡Bienvenido a la redacción! ¡Vamos a investigar!")
  - Fact-check: Voz de verificador ("Esta fuente es verificada: paper revisado por pares")
  - Breaking news: Voz de presentadora ("¡NOTICIA URGENTE! ¡Nuevo descubrimiento científico!")
  - Ganar premio: Voz celebratoria ("¡Has ganado el Pulitzer Jr! ¡Excelente periodismo!")

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-120 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en redacción (renderizado de editor, gráficos)
  - Latencia: <100ms para respuesta de fact-check (cross-check de fuentes)
  - Editor de texto: Sin lag al escribir (optimización de re-render)
  - Memoria máxima: 180MB (incluye artículos, fuentes, gráficos de datos)
  - Offline data: 30MB para precargar noticias y fuentes prioritarias
- **Riesgos técnicos:**
  - Precisión científica: Fuentes, datos, expertos deben ser realistas y actualizados
  - Fact-checking: Balance entre verificación automática y juicio humano (no es sustituto de pensamiento crítico)
  - Editor de texto: Optimizar re-render en móviles (evitar lag al escribir largos artículos)
  - Simulación de lectores: Algoritmo de engagement debe ser equilibrado (no premiar clickbait)

**Valor Educativo:**
- **Periodismo científico:** Los niños aprenden cómo investigar, verificar, comunicar ciencia
- **Pensamiento crítico:** Desarrollan habilidad de evaluar fuentes, detectar misinformation
- **Método científico:** Aplican método científico en periodismo (hipótesis → investigación → conclusiones)
- **Comunicación efectiva:** Aprenden a escribir claro, conciso, basado en evidencia
- **Alfabetización mediática:** Entienden cómo funcionan los medios, la importancia de fuentes verificadas
- **Vocabulario científico:** Aprenden términos: peer-reviewed, evidencia, hipótesis, conclusión, misleading
- **Empatía con ciencia:** Entienden el proceso detrás de los descubrimientos científicos

**Referencias e Inspiración:**
- [Quill.js - Rich text editor](https://quilljs.com/) - Editor de artículo enriquecido
- [Chart.js - Data visualization](https://www.chartjs.org/) - Gráficos e infografías
- [D3.js - Advanced data viz](https://d3js.org/) - Visualización compleja de datos
- [FactCheck.org - Fact-checking](https://www.factcheck.org/) - Inspiración para verificación
- [Science News for Students](https://www.sciencenewsforstudents.org/) - Referencia de periodismo científico joven
- [The Pulitzer Prizes - Journalism](https://www.pulitzer.org/) - Referencia de periodismo de calidad
- [Web Speech API - TTS](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) - Lectura de artículos
- [PWA - Offline journalism](https://web.dev/offline/) - Investigación sin conexión

---

#### Idea #29: Ancient Dig: Archaeology Adventures

**Concepto:**
Juego de arqueología virtual donde los jugadores son exploradores que excavan yacimientos arqueológicos, descubren fósiles, artefactos, civilizaciones perdidas y reconstruyen la historia. Combina excavación realista, restauración de artefactos y investigación histórica, enseñando arqueología, paleontología, historia antigua y preservación cultural.

**Motivación:**
- **Descubrimiento del pasado:** Encontrar objetos de civilizaciones perdidas (Egipto, Grecia, Maya, Roma)
- **Misterio histórico:** Desvelar secretos de civilizaciones desaparecidas (qué pasó, por qué desaparecieron)
- **Colección de museo:** Montar colección personal de artefactos y fósiles
- **Misiones de excavación:** Sitios famosos (Tutankamón, Pompeya, Machu Picchu, Gizeh)
- **Competencia de descubridores:** Leaderboard de "arqueólogos más destacados" por civilización
- **Restauración de historia:** Reconstruir templos, ciudades, entender cómo vivían nuestros ancestros

**Mecánica Principal:**
Los jugadores son arqueólogos que viajan a yacimientos arqueológicos reales (10+ sitios: Valle de los Reyes, Pompeya, Chichén Itzá, Petra, Angkor Wat). Cada yacimiento tiene "Capas de Tiempo" (desde la más reciente hasta la más antigua). Deben: excavar capa por capa (con pico, pincel, cepillo), descubrir artefactos (vasijas, joyas, herramientas, huesos), limpiar y restaurar artefactos (mini-game de limpieza), identificar época y cultura (usar guía de referencia), recolectar datos (fotos, mediciones, notas), reconstruir historia (armando puzzle de civilización). Los artefactos restaurados se guardan en "Museo Virtual" con información histórica. Hay modo historia (descubrir 5 civilizaciones completas) y modo sandbox (excavar sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar herramienta (pico, pincel, cepillo), cavar cuadro de tierra
- **Arrastrar (Drag):** Cavar en capa (deslizar pico), limpiar artefacto (cepillo suave)
- **Pinch:** Zoom en capa de tierra (0.5x-5x) para ver detalles de artefactos
- **Dos dedos (drag):** Pan/mover la vista del yacimiento
- **Tap rápido:** Usar herramienta de limpieza rápida (cepillo de aire)
- **Tap largo (Long press):** Ver información de artefacto (época, cultura, función)
- **Swipe horizontal:** Cambiar entre herramientas (pico → pincel → cepillo → pinzas → cámara)
- **Gestos complejos:**
  - Shake del dispositivo = "tierra suelta" (sacudir pico para quitar tierra)
  - Dibujo de círculo = marcar área para excavar (planificación estratégica)
  - Doble tap en artefacto = modo "foto arqueológica" (capturar antes de extraer)
  - Arrastrar artefacto a mesa de restauración = iniciar mini-game de limpieza
- **Multitouch hasta 3 dedos:** Excavar múltiples cuadros simultáneamente (acelerar excavación)
- **Escribir:** Anotaciones en diario de campo (notas, observaciones, hipótesis)

**Accesibilidad:**
- Herramientas con iconos grandes (60x60px) y etiquetas claras
- Artefactos con high contrast (color coding por época: antiguo=marrón, medieval=gris, moderno=azul)
- Voice assistant explica contexto ("¡Este anillo pertenece al Antiguo Egipto, 1500 a.C.!")
- Modo "Easy Dig" con capas más delgadas y artefactos más fáciles de encontrar
- Haptic feedback para excavación (vibración al golpear terreno, suave para pincel)
- Guía de referencia con imágenes de artefactos reales (para identificación)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de yacimiento (isométrico, capas de tierra)
  - `<canvas>` para mini-game de limpieza de artefactos (brush physics)
  - `<canvas>` para reconstrucción 3D (simulado con 2D transforms)
  - `<video>` para cutscenes de descubrimientos históricos
  - `<audio>` para sonidos de excavación (pico golpeando, tierra cayendo)
  - `<input type="text">` para diario de campo
  - `<details>/<summary>` para colapsar información de artefactos
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de yacimiento, capas, artefactos)
  - Physics engine: Matter.js (simulación de excavación, física de tierra)
  - Mini-game engine: Custom para limpieza de artefactos (particle-based)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del arqueólogo (yacimientos, artefactos, museo)
  - Data: JSON con 10+ yacimientos, 200+ artefactos, datos históricos reales
  - Animaciones: GSAP para transiciones entre yacimientos
  - Storage: IndexedDB para guardar museo, diario de campo, artefactos
- **CSS:**
  - Grid layout para panel de herramientas (5 columnas responsivo)
  - CSS Transforms para zoom en capa (transform-origin: center)
  - CSS Animations para feedback de excavación (dirt falling, artifact reveal)
  - Backdrop-filter para blur de paneles superpuestos (glassmorphism)
  - CSS Variables para theming por civilización (Egipto=dorado, Roma=blanco, Maya=verde)
  - Flexbox para contenedores de artefactos y notas
- **Otros:**
  - Web Audio API: Sonidos de excavación (pico, tierra, cepillo, pinzas)
  - Touch Events API: Multi-touch para excavar múltiples cuadros
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar museo completo, diario de campo, artefactos (offline play)
  - Service Workers: PWA para excavar offline (datos de yacimientos precargados)
  - Canvas API: Renderizado de capas, artefactos, mini-games
  - Camera API: Capturar fotos reales de artefactos (opcional)
  - Vibration API: Haptic feedback para excavación

**Características Visuales:**
- **Paleta de colores:**
  - Yacimiento: Tonos de tierra (marrón #8B4513, ocre #D2691E, beige #F5F5DC)
  - Capas: Gradient por antigüedad (reciente=marrón claro, antiguo=marrón oscuro)
  - Artefactos: Colores por material (oro=#FFD700, bronce=#CD7F32, cerámica=#A0522D)
  - Museo: Exhibición con glassmorphism (#FFFFFF opacity 0.95, blur 15px)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.9, blur 10px)
- **Animaciones:**
  - Excavar: Tierra cae en partículas (100-500 particles, 0.5s)
  - Descubrir artefacto: Flash dorado + objeto emerges (1s)
  - Limpiar artefacto: Brush particles remueven suciedad (1-2s)
  - Restaurar: Artefacto se repara con glow (1.5s)
  - Completar yacimiento: Confetti de cerámica rompiéndose (200 particles, 2s)
- **Feedback visual:**
  - Artefacto descubierto: Brilla dorado + modal de información
  - Capa completada: Progress bar avanza (20% → 40% → 60% → 80% → 100%)
  - Yacimiento desbloqueado: Badge de "Explorado" con icono de pico
  - Logro: Modal con insignia de arqueólogo (Novice, Explorer, Master, Legend)
- **Personalización:**
  - Museo virtual con salas personalizables (Egipto, Roma, Maya, Grecia, China)
  - Colección de artefactos con etiquetas personalizadas (nombre, descripción)
  - Diario de campo personalizable (fondos, stickers, fotos)
  - Avatar de arqueólogo con 50+ combinaciones (sombrero, pico, lupa, ropa de campo)
  - Skins de yacimiento (Realista, Cartoon, Minimalista, Artístico)
  - Caja de herramientas personalizable (colores, iconos)

**Audio:**
- **Efectos de sonido:**
  - Pico golpeando: Chink metálico con variación por suelo (duro=100Hz, suave=50Hz, 100-300ms)
  - Tierra cayendo: Crumble con variación por cantidad (100-500ms)
  - Cepillo limpiando: Swish suave (50-200ms)
  - Pinzas: Click metálico (50ms)
  - Descubrir artefacto: Fanfare breve (C4-E4-G4, 0.5s)
  - Restaurar: Chime ascendente (C5-E5-G5-B5, 1s)
  - Completar yacimiento: Celebration de 5 notas (C4-E4-G4-C5-E5, 2s)
- **Música:**
  - Yacimiento idle: Ambient excavation (wind, distant footsteps, 60 BPM)
  - Excavando: Rhythmic digging (percussion con shovel sounds, 90 BPM)
  - Limpiando artefacto: Focus minimalista (ambient synth, 70 BPM)
  - Descubrimiento: Mystical discovery (orchestral with crescendo, 80→100 BPM)
  - Museo: Calm appreciation (piano + strings, 75 BPM)
- **Voz:**
  - Tutorial: Voz de arqueóloga experta ("¡Bienvenido al yacimiento! ¡Vamos a descubrir el pasado!")
  - Descubrimiento: Voz de asombro ("¡Increíble! ¡Un artefacto del Antiguo Egipto!")
  - Contexto: Voz de historiadora ("Esta vasija fue usada para almacenar grano en 2000 a.C.")
  - Logro: Voz celebratoria ("¡Has completado la excavación de Pompeya!")

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 110-130 horas (5 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en yacimiento (renderizado de capas, partículas de tierra)
  - Latencia: <50ms para respuesta de excavación (feedback inmediato)
  - Partículas máximas: 2000 para高端 devices, 500 para低端 (tierra cayendo)
  - Memoria máxima: 200MB (incluye artefactos 3D, texturas de yacimientos)
  - Offline data: 40MB para precargar yacimientos prioritarios
- **Riesgos técnicos:**
  - Precisión histórica: Artefactos, fechas, contextos deben ser científicamente precisos
  - Simulación de excavación: Física de tierra debe ser realista pero jugable
  - Mini-game de limpieza: Balance de dificultad para que sea satisfactorio, no frustrante
  - Optimización de rendering: Capas múltiples con artefactos pueden consumir mucha memoria

**Valor Educativo:**
- **Arqueología real:** Los niños aprenden métodos de excavación, preservación, restauración
- **Historia antigua:** Entienden civilizaciones (Egipto, Roma, Maya, Grecia, China)
- **Paleontología:** Aprenden sobre fósiles, evolución, eras geológicas
- **Método científico:** Aplican método científico en arqueología (excavar → registrar → analizar → concluir)
- **Vocabulario científico:** Aprenden términos: estratigrafía, carbono-14, antigüedad, civilización, preservación
- **Respeto cultural:** Entienden la importancia de preservar el patrimonio cultural
- **Pensamiento analítico:** Reconstruyen historias basándose en evidencias (detectives del pasado)

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Rendering de yacimiento
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Simulación de excavación
- [Smithsonian - Archaeology resources](https://www.si.edu/) - Referencia de datos arqueológicos
- [British Museum - Collections](https://www.britishmuseum.org/) - Referencia de artefactos reales
- [Dig It! - Archaeology game](https://www.digitalexhibits.org/dig-it/) - Inspiración para excavación
- [Pompeii Excavations](https://www.pompeiisites.org/) - Referencia de yacimiento real
- [Web Audio API - Excavation sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos de excavación
- [PWA - Offline digging](https://web.dev/offline/) - Excavación sin conexión

---

#### Idea #30: Star Constellations: Mythology of the Night

**Concepto:**
Juego de astronomía interactiva donde los jugadores exploran el cielo nocturno, descubren constelaciones, aprenden mitología y conectan estrellas para formar figuras. Combina observación estelar real, historia mitológica y ciencia astronómica, enseñando astronomía, mitología, navegación estelar y el universo.

**Motivación:**
- **Exploración del cosmos:** Descubrir 88 constelaciones del cielo nocturno
- **Misterio mitológico:** Aprender historias de dioses, héroes, monstruos (Orión, Andrómeda, Pegaso)
- **Colección de estrellas:** Desbloquear catálogo de 1000+ estrellas con datos reales
- **Misiones de navegación:** Usar constelaciones como mapa del cielo (guiar barcos, viajeros)
- **Competencia de astrónomos:** Leaderboard de "observadores más dedicados" por hemisferio
- **Conexión histórica:** Entender cómo civilizaciones antiguas usaban las estrellas para agricultura, navegación

**Mecánica Principal:**
Los jugadores son astrónomos que observan el cielo nocturno en tiempo real (basado en ubicación geográfica del jugador). El cielo es un mapa interactivo donde pueden: explorar constelaciones (88 oficiales), conectar estrellas (tap en secuencia para formar figura), aprender mitología (historias de cada constelación), descubrir estrellas (tamaño, color, distancia, temperatura), observar planetas (Marte, Júpiter, Saturno, Venus en tiempo real), crear su propia constelación (imaginación). Las constelaciones se clasifican por hemisferio (Norte, Sur, Ecuatorial) y mitología (Griega, Romana, Árabe, China). Hay modo historia (completar catálogo de 88 constelaciones) y modo libre (observar cualquier momento del año).

**Interacción Móvil:**
- **Tap simple:** Seleccionar estrella, constelación, planeta
- **Arrastrar (Drag):** Pan/mover el cielo (como telescopio)
- **Pinch:** Zoom en el cielo (0.5x-10x) para ver detalles de estrellas
- **Dos dedos (drag):** Pan/mover vista (alternativa a arrastrar)
- **Tap rápido:** Conectar estrellas (formar constelación)
- **Tap largo (Long press):** Ver datos detallados de estrella (magnitud, temperatura, distancia en años luz)
- **Swipe horizontal:** Cambiar hora del día (ver movimiento del cielo en 24h)
- **Gestos complejos:**
  - Shake del dispositivo = "limpiar cielo" (remover nubes, contaminación lumínica)
  - Dibujo de constelación = buscar figura en el cielo (reconocimiento de patrón)
  - Doble tap en constelación = modo "mitología" (ver historia animada)
  - Arrastrar planeta = ver trayectoria orbital (hacia el futuro/pasado)
- **Multitouch hasta 3 dedos:** Selección múltiple de estrellas para comparar datos
- **Escribir:** Anotaciones en diario de observación (notas, sketches)

**Accesibilidad:**
- Cielo con estrellas tamaño generoso (min 10px) para fácil selección
- Constelaciones con líneas gruesas (3-5px) y contraste alto
- Voice assistant explica mitología ("Orión era el cazador gigante de la mitología griega")
- Modo "Assist Mode" que muestra líneas guía para conectar estrellas (para principiantes)
- Haptic feedback para eventos (vibración suave al seleccionar estrella, fuerte al completar constelación)
- Color coding por tipo de estrella (azul=caliente, amarillo=medio, rojo=fría, blanca=enana)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para cielo nocturno (1000+ estrellas renderizadas)
  - `<canvas>` para animaciones de mitología (historias de dioses y héroes)
  - `<canvas>` para trayectorias orbitales de planetas
  - `<video>` para cutscenes de mitología (animaciones de historias)
  - `<audio>` para efectos celestiales (twinkling, shooting stars)
  - `<input type="text">` para diario de observación
  - `<details>/<summary>` para colapsar información de estrellas
- **JavaScript:**
  - Astronomy engine: Celestial.js o Stellarium Web SDK (cálculo de posiciones estelares)
  - Game engine: PixiJS o Phaser 3 (renderizado de cielo, estrellas, constelaciones)
  - Planet positions: Custom algorithm para posición de planetas en tiempo real
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del astrónomo (constelaciones, estrellas, diario)
  - Data: JSON con 88 constelaciones, 1000+ estrellas, mitología, datos astronómicos reales
  - Animaciones: GSAP para transiciones entre constelaciones
  - Storage: IndexedDB para guardar catálogo, diario, observaciones
- **CSS:**
  - CSS Grid para panel de información (2 columnas: datos, mitología)
  - CSS Transforms para zoom del cielo (transform-origin: cursor)
  - CSS Animations para feedback de conexión (lines glowing, stars twinkling)
  - Backdrop-filter para blur de paneles superpuestos (glassmorphism)
  - CSS Variables para theming (modo oscuro, modo día, modo rojo para visión nocturna)
  - Flexbox para contenedores de estrellas y notas
- **Otros:**
  - Web Audio API: Sonidos celestiales (twinkling, shooting stars, planetarium ambience)
  - Geolocation API: Obtener ubicación del jugador para mostrar cielo local
  - Touch Events API: Multi-touch para conectar múltiples estrellas
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar catálogo completo, diario de observación (offline play)
  - Service Workers: PWA para observar offline (cielo precargado para ubicación)
  - Canvas API: Renderizado de estrellas, constelaciones, mitología
  - DeviceOrientation API: Inclinación del dispositivo para controlar telescopio
  - Vibration API: Haptic feedback para observación

**Características Visuales:**
- **Paleta de colores:**
  - Cielo nocturno: Negro profundo (#000005) con gradientes de azules (horizonte=#000080, cenit=#000010)
  - Estrellas: Colores por temperatura (azul=#87CEEB, amarillo=#FFD700, rojo=#FF6B6B, blanca=#FFFFFF)
  - Constelaciones: Líneas doradas brillantes (#FFD700, 3px, glow)
  - Planetas: Colores reales (Marte=rojo, Júpido=naranja, Saturno=amarillo, Venus=blanco)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, backdrop-filter blur 10px)
  - Modo visión nocturna: Rojo (#FF0000) para proteger visión en la oscuridad
- **Animaciones:**
  - Estrellas twinkling: Pulse de brillo (0.5-2s, random)
  - Shooting star: Linea brillante cruzando el cielo (0.3s)
  - Conectar estrellas: Línea dorada aparece con glow (0.3s por conexión)
  - Completar constelación: Flash dorado + figura se ilumina (1s)
  - Mitología: Animación de historia (dioses, héroes, 2-3s)
  - Movimiento de planetas: Trayectorias orbitales en tiempo real (actualización cada hora)
- **Feedback visual:**
  - Estrella seleccionada: Brilla en azul + modal con datos
  - Constelación completada: Badge de "Descubierta" con icono de constelación
  - Shooting star: Alerta visual + sonido (10% de probabilidad cada 2 minutos)
  - Logro: Modal con insignia de astrónomo (Novice, Observer, Astronomer, Legend)
- **Personalización:**
  - Catálogo personal de estrellas con etiquetas personalizadas (nombre, notas)
  - Diario de observación con sketches (dibujar constelaciones propias)
  - Avatar de astrónomo con 40+ combinaciones (telescopio, ropa de campo, lente)
  - Skins de cielo (Realista, Cartoon, Minimalista, Artístico, Infografía)
  - Temas visuales (Modo oscuro, Modo día, Modo rojo visión nocturna)
  - Constelaciones personalizables (crear figuras propias con nombre y historia)

**Audio:**
- **Efectos de sonido:**
  - Seleccionar estrella: Twinkle suave (high frequency ping, 100-300ms)
  - Conectar estrellas: Chime ascendente (C4-E4-G4, 300ms)
  - Completar constelación: Fanfare de 4 notas (C4-E4-G4-C5, 1s)
  - Shooting star: Whoosh across sky (0.3s)
  - Ver mitología: Mystical chime (orchestral, 0.5s)
  - Logro: Fanfare de 5 notas (C4-E4-G4-B5-C5, 1.5s)
- **Música:**
  - Cielo idle: Ambient cosmic (synth pads, distant twinkling, 60 BPM)
  - Explorando constelaciones: Ethereal discovery (piano + choir, 70 BPM)
  - Mitología: Storytelling orchestral (strings + harp, 80 BPM)
  - Completando catálogo: Celestial celebration (celestial choir, 90 BPM)
  - Modo meditación: Space ambient (drones, 50 BPM)
- **Voz:**
  - Tutorial: Voz de astrónoma experta ("¡Bienvenido al universo! ¡Vamos a explorar el cielo nocturno!")
  - Mitología: Voz de narrador ("Orión era el cazador gigante... perseguido por el escorpión")
  - Descubrimiento: Voz de asombro ("¡Una estrella gigante roja! ¡Betelgeuse!")
  - Logro: Voz celebratoria ("¡Has descubierto todas las constelaciones del hemisferio norte!")

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 80-100 horas (3-4 semanas equipo de 2)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en cielo nocturno (1000+ estrellas renderizadas)
  - Latencia: <100ms para respuesta de selección de estrella
  - Stars renderizadas: 1000 para高端 devices, 300 para低端 (ajustar por performance)
  - Memoria máxima: 150MB (incluye datos de estrellas, texturas de constelaciones)
  - Offline data: 30MB para precargar cielo prioritario (constelaciones principales)
- **Riesgos técnicos:**
  - Precisión astronómica: Posiciones de estrellas, planetas deben ser científicamente precisas
  - Geolocation: El cielo debe reflejar la ubicación real del jugador (latitud, longitud)
  - Real-time planet positions: Algoritmo de órbitas debe ser preciso (aunque simplificado)
  - Optimización de rendering: 1000+ estrellas pueden consumir memoria en móviles de gama baja

**Valor Educativo:**
- **Astronomía real:** Los niños aprenden sobre estrellas, constelaciones, planetas, el universo
- **Mitología:** Entienden historias de dioses, héroes, monstruos (culturas antiguas)
- **Navegación estelar:** Aprenden cómo civilizaciones antiguas usaban estrellas para navegación
- **Vocabulario astronómico:** Aprenden términos: magnitud, año luz, constelación, planeta, órbita
- **Conexión histórica:** Entienden la relación entre mitología y observación del cielo
- **Asombro cósmico:** Desarrollan curiosidad por el universo, el espacio, la exploración
- **Pensamiento abstracto:** Visualizan patrones en el cielo (connect-the-dots estelares)

**Referencias e Inspiración:**
- [Celestial.js - Astronomy calculations](https://github.com/szymondl/celestial) - Cálculo de posiciones estelares
- [Stellarium Web - Planetarium](https://stellarium-web.org/) - Referencia de cielo nocturno real
- [NASA - Space resources](https://www.nasa.gov/) - Referencia de datos astronómicos
- [Star Walk Kids - Astronomy app](https://vitotechnology.com/star-walk-kids/) - Inspiración para UI infantil
- [SkySafari - Astronomy app](https://www.southernstars.com/) - Inspiración para catálogo de estrellas
- [Greek Mythology - Constellation stories](https://www.greekmythology.com/) - Referencia de mitología
- [Web Audio API - Cosmic sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos celestiales
- [PWA - Offline star gazing](https://web.dev/offline/) - Observación sin conexión

---

### Lote 6: Resumen de Ideas Agregadas

### Idea #27: Global Explorer: World Cultures
- **Género:** Exploración geográfica y cultural
- **Enfoque educativo:** Geografía, culturas mundiales, idiomas, apertura mental
- **Tecnologías clave:** Leaflet.js, Mapbox GL, Web Speech API, Phaser 3
- **Complejidad:** Media (90-110 horas)
- **Valor destacado:** Enseña sobre 50+ países, culturas e idiomas con inmersión realista

### Idea #28: Science Journalist: Investigate!
- **Género:** Periodismo científico y verificación de hechos
- **Enfoque educativo:** Periodismo científico, pensamiento crítico, método científico, alfabetización mediática
- **Tecnologías clave:** Quill.js, Chart.js, D3.js, React, Redux
- **Complejidad:** Media-Alta (100-120 horas)
- **Valor destacado:** Enseña a investigar, verificar y comunicar ciencia con pensamiento crítico

### Idea #29: Ancient Dig: Archaeology Adventures
- **Género:** Arqueología y paleontología
- **Enfoque educativo:** Arqueología, historia antigua, paleontología, preservación cultural
- **Tecnologías clave:** Phaser 3, Matter.js, Web Audio API, IndexedDB
- **Complejidad:** Media-Alta (110-130 horas)
- **Valor destacado:** Excavación realista con datos históricos y métodos arqueológicos auténticos

### Idea #30: Star Constellations: Mythology of the Night
- **Género:** Astronomía y mitología
- **Enfoque educativo:** Astronomía, constelaciones, mitología, navegación estelar
- **Tecnologías clave:** Celestial.js, Stellarium Web SDK, PixiJS, Geolocation API
- **Complejidad:** Media (80-100 horas)
- **Valor destacado:** Cielo nocturno en tiempo real con 88 constelaciones y mitología griega/romana

---

### Progreso General del Proyecto
**Total ideas documentadas:** 30/100 (30%)
**Ideas faltantes:** 70
**Próximo lote:** Ideas #31-#34

---

#### Idea #31: Robot Builder: Cyber Workshop

**Concepto:**
Juego de construcción y programación de robots donde los niños arman, programan y compiten con sus propios robots. Combina mecánica básica, electrónica y programación en un entorno virtual de taller cyberpunk. Los jugadores diseñan robots pieza por pieza, programan su comportamiento con bloques visuales y compiten en arena de batalla o colaboran en misiones de rescate.

**Motivación:**
- **Creatividad sin límites:** Diseñar robots únicos con 500+ piezas (cuerpo, armas, motores, sensores, IA)
- **Programación divertida:** Aprenden lógica de programación con bloques visuales drag-and-drop
- **Competencia épica:** Batallas de robots en arena con 100+ jugadores simultáneos
- **Colección de robots:** Desbloquean rarezas, ediciones limitadas, robots legendarios
- **Desafío técnico:** Optimizar código, balancear peso, elegir componentes inteligentes

**Mecánica Principal:**
Los jugadores son ingenieros en un taller cyberpunk del año 2077. Comienzan con un robot básico (chasis + motor + 2 ruedas) y progresivamente desbloquean: armas (láser, misiles, escudo), sensores (cámara, radar, ultrasonido), IA (patrulla, ataque, defensa), sistemas especiales (propulsión, armadura, camuflaje). El taller tiene 3 modos: Diseño (armar robot pieza por pieza), Programación (crear comportamiento con bloques visuales), Batalla (competir contra otros jugadores o IA). Modo historia (convertirse en campeón de la arena) y modo sandbox (experimentar sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar pieza, herramienta, modo de programa
- **Arrastrar (Drag):** Mover piezas al chasis, conectar bloques de programa
- **Pinch:** Zoom en el taller (0.5x-3x) para ver detalles técnicos
- **Dos dedos (drag):** Pan/mover la vista del taller o arena
- **Tap rápido:** Rotar pieza en modo diseño (90° por tap)
- **Tap largo (Long press):** Ver especificaciones técnicas de pieza (peso, consumo energía, daño)
- **Swipe horizontal:** Cambiar entre vista de taller, vista de programa, vista de batalla
- **Gestos complejos:**
  - Shake del dispositivo = "test drive" (probar robot en pista de prueba)
  - Dibujo de circuito = conectar piezas eléctricamente (wire mode)
  - Doble tap en robot = ver estadísticas completas (vida, energía, armamento)
  - Arrastrar bloque a bloque = anidar lógica (if/else, loops, funciones)
- **Multitouch hasta 4 dedos:** Seleccionar múltiples piezas para batch operations
- **Escribir:** Nombrar robot, escribir comentarios en código

**Accesibilidad:**
- Piezas con iconos grandes (min 80px) y etiquetas claras (nombre + categoría)
- Bloques de programa con colores distintos (control=azul, sensores=verde, acciones=rojo)
- Voice assistant explica pieza ("Este motor tiene 500 de potencia, consume 20 energía/seg")
- Modo "Drag & Drop Simplificado" con magnetismo para conectar piezas
- Haptic feedback para conexión satisfactoria (vibración al encajar pieza)
- Color coding por tipo de pieza (estructura=gris, movimiento=azul, combate=rojo, sensors=naranja)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de taller y arena (2D isométrico)
  - `<canvas>` para editor de bloques visuales (drag-and-drop)
  - `<canvas>` para simulación física de robots (colisiones, proyectiles)
  - `<video>` para cutscenes de batallas y descubrimientos
  - `<input type="text">` para nombrar robot y comentarios de código
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de taller, física de batalla)
  - Physics engine: Matter.js (simulación de colisiones, gravedad, impacto)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado del robot (piezas, código, stats)
  - Block programming: Custom block editor (inspirado en Scratch, Blockly)
  - Robot simulation: Custom algorithm para balancear peso/potencia/energía
  - AI opponents: Custom AI para bots con diferentes estrategias
  - Multiplayer: WebSockets con Socket.io para batallas en tiempo real
  - Animaciones: GSAP para transiciones y efectos de batalla
  - Storage: IndexedDB para guardar robots y programas (offline play)
- **CSS:**
  - Grid layout para taller (12x12 grid de slots de piezas)
  - CSS Flexbox para editor de bloques (sidebar + canvas)
  - CSS Transforms para zoom y rotación de piezas (transform-origin: center)
  - CSS Animations para feedback de construcción (glow, pulse, shake)
  - Backdrop-filter para blur de paneles superpuestos (glassmorphism)
  - CSS Variables para theming cyberpunk (neón rosa, cian, amarillo)
- **Otros:**
  - Web Audio API: Sonidos cyberpunk (motores, láser, explosiones, metal)
  - DeviceOrientationEvent: Detectar shake para test drive
  - Touch Events API: Multi-touch para controlar múltiples piezas
  - Pointer Events API: Unificar mouse/touch/pen input
  - WebSockets: Multiplayer en tiempo real (latencia <100ms)
  - IndexedDB: Guardar 100+ robots y programas
  - Service Workers: PWA para construir y programar offline
  - Canvas API: Renderizado de robots con sprite stacking
  - Web Workers: Simulación física sin bloquear UI

**Características Visuales:**
- **Paleta de colores:**
  - Taller: Cyberpunk con neones (negro #0A0A0A, cian #00FFFF, rosa #FF00FF, amarillo #FFFF00)
  - Piezas: Metal realista (acero #C0C0C0, titanio #A8A8A8, oro #FFD700)
  - Bloques de programa: Colores por categoría (control=#4A90E2 azul, sensores=#7ED321 verde, acciones=#D0021B rojo)
  - Arena: Industrial (gris oscuro #2C2C2C, luces LED azules/rojas)
  - UI: Semi-transparente con glassmorphism (#000000 opacity 0.7, blur 10px)
- **Animaciones:**
  - Pieza encajando: Scale down + snap effect (0.2s)
  - Bloque conectado: Line animation entre bloques (0.3s)
  - Robot activado: Boot sequence con luces encendiéndose (1.5s)
  - Láser disparando: Beam animation con glow (0.5s)
  - Explosión: Particle burst (100 particles, 1s)
  - Victoria: Confetti cyberpunk (200 particles neón, 2s)
- **Feedback visual:**
  - Pieza válida: Outline cian brillante, icono checkmark
  - Pieza inválida (sin espacio/energía): Outline rojo pulsante, texto en rojo ("¡Peso máximo!")
  - Código ejecutándose: Bloques activos pulsan en verde
  - Robot dañado: Health bar rojo, icono de daño
  - Victoria: Modal dorado con estadísticas (daño causado, energía restante)
- **Personalización:**
  - 500+ piezas: Chasis, ruedas, orugas, alas, propulsores, armas (láser, misil, railgun), sensores, escudos
  - Modo edición de piezas: Personalizar color, textura, decals
  - 50+ skins de taller (cyberpunk, steampunk, minimalista, industrial)
  - Avatar de ingeniero con 60+ combinaciones (goggles, traje, herramientas)
  - Modo sandbox: Experimentar sin límites de peso/energía

**Audio:**
- **Efectos de sonido:**
  - Pieza encajando: Satisfying click (150ms)
  - Bloque conectado: Chime ascendente (C4-E4, 200ms)
  - Robot activado: Power-up sound (500ms)
  - Láser disparando: Pew con eco (300ms)
  - Misil impactando: Boom (400ms)
  - Robot destruido: Crash + explosion (600ms)
  - Victoria: Fanfare cyberpunk (8 notas, 2s)
- **Música:**
  - Menú principal: Cyberpunk electronic (synthwave, 130 BPM)
  - Taller: Industrial ambiance (machinery sounds, 70 BPM)
  - Programación: Focused coding (lo-fi beats, 80 BPM)
  - Batalla: Intense combat (heavy synth + drums, 140 BPM)
  - Victoria: Triumphant orchestral (brass + choir, 110 BPM)
- **Voz:**
  - Tutorial: Voz de ingeniero cyberpunk ("¡Bienvenido al taller! ¡Construye tu primer robot!")
  - Hint: Voz de asistente ("Añade un sensor de radar para detectar enemigos")
  - Batalla: Voz de announcer ("¡ROBOT #1 VS ROBOT #2! ¡PELEA!")
- **Audio espacial:** Sonidos 3D para batalla (disparos desde izquierda suenan en canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 130-160 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en arena de batalla (10 robots máximo)
  - Latencia: <50ms para respuesta de controles (feedback instantáneo)
  - Multiplayer: <100ms de sincronización (WebSockets)
  - Piezas renderizadas: 50 por robot máximo
  - Memoria máxima: 250MB (incluye sprites de 500 piezas)
  - Physics: <50ms para calcular colisiones (Matter.js)
- **Riesgos técnicos:**
  - Balance de peso/energía: Evitar que robots sean invencibles (overpowered)
  - Sincronización multiplayer: 10 robots simultáneos requiere optimización de paquetes
  - Block programming: Crear editor de bloques robusto sin bugs
  - AI inteligente: Bots deben ser desafiantes pero no imposibles

**Valor Educativo:**
- **Ingeniería real:** Los niños aprenden conceptos de mecánica, electrónica, robótica
- **Programación visual:** Aprenden lógica de programación con bloques (if/else, loops, variables, funciones)
- **Física aplicada:** Entienden peso, gravedad, fricción, energía, potencia
- **Pensamiento sistémico:** Balancean peso, energía, armamento (trade-offs)
- **Vocabulario técnico:** Aprenden términos: chasis, motor, sensor, algoritmo, bucle, variable
- **Resolución de problemas:** Los robots fallan → debug código → ajustar piezas → reintentar
- **Creatividad técnica:** Diseñan robots únicos con lógica personalizada

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Simulación física de robots
- [Blockly - Visual programming](https://developers.google.com/blockly) - Editor de bloques visuales
- [Scratch - Block coding](https://scratch.mit.edu/) - Inspiración para programación visual
- [Robocode - Robot battle simulation](https://robocode.sourceforge.io/) - Inspiración para batallas de robots
- [BattleBots - Robot combat show](https://www.discovery.com/battlebots) - Inspiración para combate de robots
- [Web Audio API - Cyberpunk sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos cyberpunk
- [Socket.io - Real-time multiplayer](https://socket.io/) - Multiplayer en tiempo real

---

#### Idea #32: Architecture Master: City Designer

**Concepto:**
Juego de diseño urbano y arquitectura donde los niños planifican y construyen ciudades sostenibles. Combinan creatividad arquitectónica con planificación estratégica, aprendizaje sobre zonificación, transporte, energía renovable, sostenibilidad y gestión de recursos. Los jugadores son alcaldes/arquitectos que transforman tierras baldías en metrópolis prósperas.

**Motivación:**
- **Poder creador:** Ver una ciudad crecer desde tierra vacía hasta metrópolis vibrante
- **Impacto visible:** Las decisiones afectan felicidad de ciudadanos, tráfico, contaminación
- **Sostenibilidad real:** Aprenden sobre energía renovable, transporte público, zonas verdes
- **Personalización arquitectónica:** Diseñan edificios únicos con 500+ estilos arquitectónicos
- **Desafíos urbanos:** Gestionan crisis (tráfico, contaminación, desastres naturales)

**Mecánica Principal:**
Los jugadores son arquitectos-alcaldes de una ciudad en expansión. Comienzan con un terreno baldío y recursos básicos (dinero, energía, agua). Pueden construir: zonas residenciales (casas, apartamentos), comerciales (tiendas, oficinas), industriales (fábricas, almacenes), infraestructura (carreteras, puentes, metro), servicios (hospitales, escuelas, bomberos), energía renovable (plantas solares, eólicas, hidroeléctricas), zonas verdes (parques, bosques, jardines). El sistema simula: tráfico (flujo de vehículos), contaminación (emisiones CO2, calidad aire), felicidad de ciudadanos (encuestas, satisfacción), economía (impuestos, gastos). Hay modo historia (desarrollar metrópolis) y modo sandbox (construir sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Colocar edificio, seleccionar herramienta, consultar estadísticas
- **Arrastrar (Drag):** Mover edificios, dibujar carreteras/zonas
- **Pinch:** Zoom en el mapa (0.5x-4x) para ver ciudad desde satellite o street level
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap rápido:** Rotar edificio (90° por tap) antes de colocar
- **Tap largo (Long press):** Ver detalles completos de edificio (capacidad, costo, mantenimiento)
- **Swipe horizontal:** Cambiar entre vista de mapa, vista de estadísticas, vista de economía
- **Gestos complejos:**
  - Shake del dispositivo = "desastre aleatorio" (terremoto, tormenta)
  - Dibujo de línea = dibujar carretera continuamente (road tool)
  - Dibujo de rectángulo = crear zona (residencial, comercial, industrial)
  - Doble tap en edificio = actualizar/upgrade
  - Arrastrar edificio a reciclaje = demoler (recuperar recursos)
- **Multitouch hasta 3 dedos:** Selección múltiple de edificios para upgrades masivos
- **Escribir:** Nombar barrios, edificios, escribir mensajes a ciudadanos

**Accesibilidad:**
- Edificios con iconos grandes (min 80px) y etiquetas claras (tipo + nivel)
- Carreteras con color coding (principal=blanco, secundaria=gris, metro=azul)
- Voice assistant explica edificio ("Este hospital sirve 5000 ciudadanos, cuesta $50,000")
- Modo "Easy Build" con snap-to-grid para colocar edificios fácilmente
- Haptic feedback para construcción satisfactoria (vibración al colocar edificio)
- Color coding por zona (residencial=verde, comercial=azul, industrial=naranja, servicios=rosa)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado isométrico de ciudad (2048x2048px máximo)
  - `<canvas>` para simulación de tráfico (vehículos moviéndose)
  - `<canvas>` para visualización de contaminación (heatmap)
  - `<canvas>` para gráficos de estadísticas (líneas, barras, pie charts)
  - `<video>` para cutscenes de inauguraciones y eventos
  - `<input type="text">` para nombrar edificios y barrios
- **JavaScript:**
  - Game engine: Phaser 3 (isometric rendering, zoom, pan)
  - Simulation engine: Custom para simular tráfico, contaminación, felicidad
  - Pathfinding: A* algorithm para rutas de vehículos (dijkstra simplificado)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado de ciudad (miles de edificios)
  - Charts: Chart.js para visualizar estadísticas (población, tráfico, contaminación)
  - Storage: IndexedDB para guardar ciudad completa (offline play)
  - Animaciones: GSAP para transiciones y efectos de construcción
- **CSS:**
  - Grid layout para panel de construcción (12 columnas responsivo)
  - CSS Flexbox para contenedores de estadísticas
  - CSS Transforms para zoom del mapa (transform-origin: center)
  - CSS Animations para feedback de construcción (scale up, fade in)
  - Backdrop-filter para blur de paneles superpuestos (glassmorphism)
  - CSS Variables para theming dinámico (cambiar colores por usuario)
- **Otros:**
  - Web Audio API: Sonidos urbanos (tráfico, construcción, ambientes de ciudad)
  - DeviceOrientationEvent: Detectar shake para desastres
  - Touch Events API: Multi-touch para seleccionar múltiples edificios
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar ciudad con miles de entidades
  - Service Workers: PWA para construir y gestionar offline
  - Canvas API: Renderizado isométrico de edificios con sprite stacking
  - Web Workers: Simulación de tráfico sin bloquear UI

**Características Visuales:**
- **Paleta de colores:**
  - Mapa: Tonos urbanos (asfalto gris #404040, zonas verdes #7CB342, agua azul #2196F3)
  - Edificios: Colores por tipo (residencial=#4CAF50 verde, comercial=#2196F3 azul, industrial=#FF9800 naranja)
  - UI: Semi-transparente con glassmorphism (#FFFFFF opacity 0.8, blur 10px)
  - Contaminación: Heatmap (verde→amarillo→rojo)
  - Tráfico: Flujo de vehículos con colores por velocidad (rápido=verde, lento=rojo)
- **Animaciones:**
  - Construcción: Edificio emerge del suelo con scale up (0→1x, 1s)
  - Vehículos: Cars moviéndose en carreteras con sprite animation (8 frames, 12 FPS)
  - Edificio upgrade: Glow dorado + spark effect (0.5s)
  - Desastre: Shake de pantalla + efectos visuales (incendio, inundación, 1s)
  - Inauguración: Confetti + celebración (2s)
- **Feedback visual:**
  - Construcción válida: Outline verde brillante, icono checkmark
  - Construcción inválida (sin recursos/dinero): Outline rojo pulsante, texto en rojo ("¡Faltan $10,000!")
  - Ciudad creciendo: Población counter animado (0→100→1000, 1s)
  - Logro desbloqueado: Modal con escudo dorado + confetti (1.5s)
  - Crisis: Alert modal con icono de peligro + botón de acción ("¡Crisis de tráfico!")
- **Personalización:**
  - 500+ edificios: Casas, apartamentos, tiendas, oficinas, fábricas, hospitales, escuelas, plantas solares, parques
  - 50+ estilos arquitectónicos (moderno, victoriano, brutalista, minimalista, futurista)
  - 20+ biomas iniciales (costa, montaña, desierto, selva, tundra)
  - Avatar de alcalde con 40+ combinaciones (traje, gafas, accesorios)
  - Modo "My City": Crear ciudad propia con nombre, logo, lema

**Audio:**
- **Efectos de sonido:**
  - Construcción: Building sound (cranes, cement mixer, 500ms)
  - Colocar edificio: Satisfying thud (200ms)
  - Tráfico: Car sounds (continuous, volume por cercanía)
  - Dinero ganado: Ka-ching (C5, 150ms)
  - Crisis alert: Alarm pulsante (500ms on/off)
  - Logro: Fanfare de 6 notas (C4-E4-G4-B5-C6-E6, 2s)
- **Música:**
  - Menú principal: Upbeat city builder (piano + strings, 100 BPM)
  - Ciudad idle: Ambient urban (distant traffic, birds, 70 BPM)
  - Construcción activa: Motivational building (percussion + bass, 110 BPM)
  - Crisis: Tense orchestral (strings low, 60 BPM)
  - Éxito/Logro: Inspirational (choir + piano, 90 BPM)
- **Voz:**
  - Tutorial: Voz de arquitecto profesional ("¡Bienvenido a Architecture Master! ¡Vamos a construir tu ciudad!")
  - Crisis alerta: Voz de emergencia ("¡Crisis de contaminación! ¡Construye más zonas verdes!")
  - Logro: Voz celebratoria ("¡Has alcanzado 100,000 habitantes!")
- **Audio espacial:** Sonidos 3D para feedback de posición (tráfico cerca suena más fuerte)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 120-150 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en mapa isométrico con 5000+ edificios
  - Latencia: <100ms para respuesta de construcción (feedback instantáneo)
  - Edificios renderizados: 1000 en pantalla simultáneamente (LOD system)
  - Memoria máxima: 300MB (incluye sprites de 500 edificios)
  - Traffic simulation: <50ms para actualizar posiciones de vehículos
- **Riesgos técnicos:**
  - Balance de ciudad: Evitar que sea frustrante (recursos demasiado escasos, crisis muy frecuentes)
  - Simulación realista vs. jugable: Simplificar modelos complejos (tráfico, contaminación)
  - Optimización de rendering: 5000 edificios requieren LOD (Level of Detail)
  - Gestión de state: Guardar miles de edificios en IndexedDB sin bloqueo

**Valor Educativo:**
- **Arquitectura real:** Los niños aprenden sobre zonificación, planificación urbana, diseño arquitectónico
- **Sostenibilidad:** Entienden energía renovable vs. fósiles, transporte público vs. privado
- **Economía urbana:** Aprenden a balancear impuestos, gastos, crecimiento económico
- **Gestión de recursos:** Planifican a largo plazo (inversiones hoy = beneficios mañana)
- **Vocabulario urbanístico:** Aprenden términos: zonificación, densidad, tráfico, contaminación, sostenibilidad, infraestructura
- **Responsabilidad cívica:** Entienden que las decisiones del alcalde afectan a todos los ciudadanos
- **Creatividad arquitectónica:** Diseñan ciudades únicas con estilo propio

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Isometric rendering y game logic
- [Chart.js - Graphing library](https://www.chartjs.org/) - Visualización de estadísticas
- [SimCity - City builder](https://www.ea.com/games/simcity) - Inspiración principal para gestión urbana
- [Cities: Skylines - City builder](https://www.paradoxinteractive.com/) - Inspiración para simulación compleja
- [Urban Planning - Wikipedia](https://en.wikipedia.org/wiki/Urban_planning) - Referencia de planificación urbana
- [Sustainable Cities - UN](https://www.un.org/sustainabledevelopment/cities/) - Referencia de sostenibilidad urbana
- [Web Audio API - Urban sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos urbanos
- [PWA - Offline city building](https://web.dev/offline/) - PWA para construir sin internet

---

#### Idea #33: Math Quest: Number Kingdom

**Concepto:**
Aventura matemática donde los niños resuelven puzzles matemáticos para avanzar en un mundo mágico. Combina RPG (Role-Playing Game) con conceptos matemáticos progresivos, desde aritmética básica hasta álgebra y geometría. Los jugadores son aventureros que exploran reinos numéricos, luchan contra monstruos matemáticos y desbloquean habilidades basadas en conceptos matemáticos.

**Motivación:**
- **Aventura épica:** Explorar mundos numéricos únicos (Reino de la Suma, Bosque de la Multiplicación, Torre del Álgebra)
- **Progresión matemática visible:** Comienzan con suma simple, avanzan a ecuaciones complejas
- **Poder matemático:** Las habilidades del héroe son conceptos matemáticos (Suma = Curación, Multiplicación = Ataque)
- **Desafíos progresivos:** Bosses matemáticos requieren aplicar conceptos aprendidos
- **Colección de tesoros:** Desbloquean artefactos numéricos, monedas matemáticas, armaduras geométricas

**Mecánica Principal:**
Los jugadores son aventureros en el Reino Numérico, un mundo donde la magia es matemática. El juego tiene 6 mundos: Reino de la Suma (Nivel 1-10), Bosque de la Multiplicación (Nivel 11-20), Montaña de la División (Nivel 21-30), Valle de las Fracciones (Nivel 31-40), Torre del Álgebra (Nivel 41-50), Cima de la Geometría (Nivel 51-60). Cada nivel presenta puzzles matemáticos que desbloquean el camino, tesoros que requieren cálculos, monstruos matemáticos que deben ser derrotados resolviendo ecuaciones. Los héros tienen stats matemáticos: Fuerza = Nivel de álgebra, Magia = Nivel de geometría, Velocidad = Nivel de aritmética. Modo historia (derrotar al Rey del Caos Numérico) y modo arcade (puzzles rápidos sin historia).

**Interacción Móvil:**
- **Tap simple:** Seleccionar respuesta, atacar monstruo, abrir cofre matemático
- **Arrastrar (Drag):** Mover héroe en el mapa, arrastrar números a ecuaciones
- **Pinch:** Zoom en el mapa del reino (0.5x-3x)
- **Dos dedos (drag):** Pan/mover la vista del mundo
- **Tap rápido:** Secuencia rápida de respuestas (combo mode)
- **Tap largo (Long press):** Ver hint de puzzle (costa monedas)
- **Swipe horizontal:** Cambiar entre vista de mapa, vista de combate, vista de inventario
- **Gestos complejos:**
  - Shake del dispositivo = "Math Shield" (bloquear ataque, requiere ecuación rápida)
  - Dibujo de número = escribir respuesta manualmente (handwriting recognition)
  - Doble tap en héroe = ver stats matemáticos (fuerza, magia, velocidad)
  - Arrastrar habilidad a monstruo = lanzar ataque matemático
- **Multitouch hasta 3 dedos:** Selección múltiple de respuestas para puzzles de combinación
- **Escribir:** Nombrar héroe, escribir notas matemáticas

**Accesibilidad:**
- Números con fuentes grandes (min 48px) y alto contraste
- Puzzles con hint system (3 hints por nivel, cuestan monedas)
- Voice assistant lee puzzle ("5 + 3 = ?")
- Modo "Practice Mode" para practicar conceptos sin presión de combate
- Haptic feedback para respuesta correcta (vibración satisfactoria)
- Color coding por tipo de matemática (suma=azul, multiplicación=verde, álgebra=naranja, geometría=púrpura)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de mundo numérico (isométrico)
  - `<canvas>` para sistema de combate (turn-based RPG)
  - `<canvas>` para puzzles matemáticos (drag-and-drop de números)
  - `<canvas>` para representación geométrica (triángulos, círculos, polígonos)
  - `<video>` para cutscenes de descubrimientos y jefes
  - `<input type="text">` para escribir respuestas manuales
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de mundo, combate)
  - Math engine: Custom para generar puzzles progresivos (ajustados al nivel del jugador)
  - Combat system: Turn-based con cálculo de daño basado en matemáticas
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado del héroe (stats, inventario, progreso)
  - Speech recognition: Web Speech API para dictar respuestas
  - Handwriting recognition: Custom canvas algorithm para reconocer números escritos
  - Animaciones: GSAP para transiciones y efectos de combate
  - Storage: IndexedDB para guardar progreso y héroe (offline play)
- **CSS:**
  - Flexbox para layout de combate (stats, habilidades, enemigo)
  - CSS Grid para puzzles matemáticos (grid de respuestas)
  - CSS Transforms para zoom del mundo (transform-origin: center)
  - CSS Animations para feedback de respuestas (glow, shake, pulse)
  - Backdrop-filter para blur de paneles superpuestos (glassmorphism)
  - CSS Variables para theming dinámico (cambiar colores por mundo)
- **Otros:**
  - Web Audio API: Sonidos mágicos (hechizos, combate, descubrimientos)
  - DeviceOrientationEvent: Detectar shake para Math Shield
  - Touch Events API: Multi-touch para seleccionar múltiples respuestas
  - Pointer Events API: Unificar mouse/touch/pen input
  - Web Speech API: Dictar respuestas matemáticas
  - IndexedDB: Guardar progreso con 60+ niveles
  - Service Workers: PWA para jugar offline
  - Canvas API: Renderizado de puzzles geométricos y numéricos

**Características Visuales:**
- **Paleta de colores:**
  - Reino de la Suma: Cielo azul claro (#87CEEB), pastel suave
  - Bosque de la Multiplicación: Verde bosque (#228B22), místico
  - Montaña de la División: Gris pizarra (#708090), rocoso
  - Valle de las Fracciones: Dorado/amarillo (#FFD700), cálido
  - Torre del Álgebra: Morado profundo (#4B0082), misterioso
  - Cima de la Geometría: Plateado/blanco (#C0C0C0), celestial
  - UI: Semi-transparente con glassmorphism (negro opacity 0.7, blur 10px)
- **Animaciones:**
  - Hechizo matemático: Particle effect de números flotantes (0.5s)
  - Ataque del héroe: Slash animation con número (0.3s)
  - Respuesta correcta: Flash verde + confetti de números (0.5s)
  - Respuesta incorrecta: Shake rojo + hint aparece (0.5s)
  - Boss derrota: Explosion de números + loot (2s)
- **Feedback visual:**
  - Respuesta correcta: Outline verde brillante, combo counter incrementa
  - Combo alto: Texto animado "COMBO x10" con números flotantes
  - Puzzle completado: Modal con estrellas (1-5), experiencia, tesoro
  - Nivel up: Glow dorado + stats incrementan
- **Personalización:**
  - 6 mundos únicos con biomas matemáticos distintos
  - 50+ habilidades matemáticas (Curación de Suma, Ataque de Multiplicación, Escudo de Fracción)
  - Avatar de héroe con 80+ combinaciones (armadura, arma, accesorios geométricos)
  - 100+ tesoros numéricos (monedas de oro, gemas matemáticas, artefactos)
  - Skins de héroe (mago, guerrero, arquero matemático)

**Audio:**
- **Efectos de sonido:**
  - Respuesta correcta: Ding ascendente (C4-E4-G4, 200ms)
  - Respuesta incorrecta: Buzz descendente (E2-C2, 300ms)
  - Hechizo lanzado: Magic chime (C5-E5-G5, 300ms)
  - Ataque del héroe: Slash sound (150ms)
  - Moneda recogida: Coin clink (C5, 100ms)
  - Nivel up: Fanfare de 5 notas (C4-E4-G4-B5-C6, 1.5s)
- **Música:**
  - Menú principal: Fantasy orchestral (strings + choir, 90 BPM)
  - Reino de la Suma: Lighthearted flute (pastoral, 80 BPM)
  - Bosque de la Multiplicación: Mystical forest (harp + nature sounds, 70 BPM)
  - Montaña de la División: Epic mountain (brass + drums, 110 BPM)
  - Torre del Álgebra: Enigmatic tower (synth + organ, 85 BPM)
  - Cima de la Geometría: Celestial triumph (choir + bells, 100 BPM)
- **Voz:**
  - Tutorial: Voz de mago matemático ("¡Bienvenido a Math Quest! ¡Los números son tu magia!")
  - Hint: Voz de asistente ("Pista: 5 + 3 = 8")
  - Nivel completado: Voz celebratoria ("¡Has dominado la suma!")
- **Audio espacial:** Sonidos 3D para combate (ataques desde izquierda suenan en canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 90-110 horas (3-4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de mundo (500+ objetos)
  - Latencia: <50ms para respuesta de puzzles (feedback instantáneo)
  - Puzzles generados: 1000+ con dificultad progresiva
  - Memoria máxima: 180MB (incluye sprites de 50 habilidades, 100 tesoros)
  - Handwriting recognition: <200ms para reconocer número escrito
- **Riesgos técnicos:**
  - Generación de puzzles progresivos: Crear puzzles que aumenten en dificultad sin frustrar
  - Balance de combate: El daño debe basarse en matemáticas pero ser divertido
  - Handwriting recognition: Reconocer números escritos con diferente caligrafía
  - Educational balance: Enseñar matemáticas sin parecer aburrido o académico

**Valor Educativo:**
- **Matemáticas reales:** Los niños aprenden aritmética (suma, resta, multiplicación, división), fracciones, álgebra básica, geometría
- **Pensamiento lógico:** Desarrollan razonamiento matemático y resolución de problemas
- **Progresión académica:** Comienzan con suma simple, avanzan a ecuaciones lineales
- **Vocabulario matemático:** Aprenden términos: suma, resta, multiplicación, división, fracción, ecuación, variable, triángulo, círculo
- **Confianza en matemáticas:** Los juegos hacen las matemáticas divertidas, reduciendo ansiedad
- **Persistencia:** Los puzzles requieren intentos múltiples, enseñando resiliencia
- **Aplicación real:** Las habilidades matemáticas del juego corresponden a conceptos escolares

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [DragonBox - Educational math games](https://dragonbox.com/) - Inspiración para matemáticas divertidas
- [Prodigy Math Game - RPG math](https://www.prodigygame.com/) - Inspiración para combate matemático
- [Khan Academy - Math education](https://www.khanacademy.org/math) - Referencia de curriculum matemático
- [Math Playground - Math puzzles](https://www.mathplayground.com/) - Inspiración para puzzles matemáticos
- [Web Speech API - Speech recognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) - Dictar respuestas
- [Web Audio API - Magic sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos mágicos
- [PWA - Offline math play](https://web.dev/offline/) - PWA para jugar sin internet

---

#### Idea #34: Ocean Explorer: Deep Sea Adventure

**Concepto:**
Juego de exploración marina donde los niños sumergen submarinos, descubren especies marinas, investigan ecosistemas oceánicos y combaten amenazas ambientales. Combina aventura submarina con educación sobre la vida marina, océanos, conservación y ciencia oceánica. Los jugadores son exploradores oceánicos que viajan desde la superficie hasta las profundidades abisales.

**Motivación:**
- **Exploración infinita:** Cada zona oceánica es única (arrecife de coral, bosque de algas, fosa abisal)
- **Descubrimiento de especies:** Encontran criaturas raras (tiburones ballena, calamares gigantes, medusas bioluminiscentes)
- **Misión de conservación:** Limpian océanos, protegen especies en peligro, restauran ecosistemas
- **Progresión de profundidad:** Descienden desde la superficie (0m) hasta abismo (10,000m)
- **Personalización de submarino:** Customizan con módulos (sonar, luces, brazo robótico, colector de muestras)

**Mecánica Principal:**
Los jugadores son capitanes de submarinos exploradores en el Océano. Viajan a 10 zonas oceánicas: Arrecife Tropical (0-30m), Bosque de Algas (30-100m), Montaña Submarina (100-500m), Planicie Abisal (500-2000m), Fosa Abisal (2000-5000m), Ventas Hidrotermales (5000-6000m), Abismo (6000-10,000m). Cada zona tiene especies únicas, misiones de conservación (limpiar plástico, liberar tortugas atrapadas, plantar corales), descubrimientos científicos (nuevas especies, ruinas submarinas). Los submarinos tienen stats: profundidad máxima, velocidad, autonomía, capacidad de carga. Modo historia (encontrar la "Ciudad Perdida de la Atlántida") y modo sandbox (explorar libremente).

**Interacción Móvil:**
- **Tap simple:** Seleccionar herramienta, recoger muestra, liberar animal
- **Arrastrar (Drag):** Mover submarino (joystick virtual o drag-to-move)
- **Pinch:** Zoom en el océano (0.5x-5x) para ver detalles marinos
- **Dos dedos (drag):** Pan/mover la vista submarina
- **Tap rápido:** Usar sonar (revela criaturas cercanas, cooldown 10s)
- **Tap largo (Long press):** Ver información detallada de especie (nombre, hábitat, estado de conservación)
- **Swipe horizontal:** Cambiar entre vista de mapa, vista de sonar, vista de inventario
- **Gestos complejos:**
  - Shake del dispositivo = "emergency ascent" (ascenso rápido, evita depredadores)
  - Dibujo de círculo = usar brazo robótico (recoger muestra)
  - Doble tap en criatura = escanear (agregar a bestiario)
  - Arrastrar plástico a recolector = limpiar océano
- **Multitouch hasta 3 dedos:** Selección múltiple de muestras para colectar
- **Escribir:** Nombrar submarino, escribir notas de exploración

**Accesibilidad:**
- Criaturas con iconos grandes (min 80px) y etiquetas claras (nombre + emoji)
- Sonar con visualización clara (blips en radar)
- Voice assistant describe criatura ("Este es un tiburón martillo, especie vulnerable")
- Modo "Slow Diving" para explorar zonas a velocidad reducida (0.5x)
- Haptic feedback para descubrimientos (vibración al encontrar nueva especie)
- Color coding por zona (superficial=azul claro, medio=azul oscuro, profundo=púrpura, abisal=negro)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado submarino (side-scroll o isométrico)
  - `<canvas>` para sistema de sonar (radar con blips)
  - `<canvas>` para representación de profundidad (gradient de azul a negro)
  - `<canvas>` para inventario de muestras (grid con thumbnails)
  - `<video>` para cutscenes de descubrimientos y criaturas
  - `<input type="text">` para nombrar submarino y notas
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado submarino, físicas de agua)
  - Simulation engine: Custom para simular presión, gravedad, flotación
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para estado del submarino (profundidad, oxígeno, muestras)
  - Species database: JSON con 200+ especies marinas (datos reales)
  - Conservation system: Custom para misiones de limpieza y restauración
  - Animaciones: GSAP para transiciones y efectos submarinos
  - Storage: IndexedDB para guardar bestiario y muestras (offline play)
- **CSS:**
  - Flexbox para layout de submarino (stats, profundidad, oxígeno)
  - CSS Grid para inventario de muestras (6x6 grid)
  - CSS Transforms para zoom y rotación de cámara
  - CSS Animations para feedback de descubrimiento (glow, pulse, bubble)
  - Backdrop-filter para blur de paneles superpuestos (underwater effect)
  - CSS Variables para theming dinámico (cambiar colores por zona)
- **Otros:**
  - Web Audio API: Sonidos submarinos (burbujas, sonar, voces de cetáceos)
  - DeviceOrientationEvent: Detectar shake para emergency ascent
  - Touch Events API: Multi-touch para seleccionar múltiples muestras
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar bestiario de 200+ especies
  - Service Workers: PWA para explorar offline
  - Canvas API: Renderizado de criaturas marinas con spritesheets
  - Web Workers: Simulación física sin bloquear UI

**Características Visuales:**
- **Paleta de colores:**
  - Superficial (0-30m): Azul cielo claro (#87CEEB), luz del sol, arrecife colorido
  - Medio (30-500m): Azul profundo (#0066CC), penumbra, bosque de algas
  - Profundo (500-2000m): Azul oscuro (#000080), escasa luz, criaturas bioluminiscentes
  - Abisal (2000-10,000m): Negro profundo (#000000), oscuridad total, son los únicos que brillan
  - UI: Semi-transparente con glassmorphism underwater (cyan opacity 0.6, blur 10px)
- **Animaciones:**
  - Burbujas: Rising bubbles (continuous, 50+ en pantalla)
  - Nado de peces: Swimming animation con spritesheet (8 frames, 12 FPS)
  - Sonar: Radar sweep animation (360°, 2s por sweep)
  - Descubrimiento: Flash cyan + sparkle (0.5s)
  - Criatura bioluminiscente: Glow pulsante (1s周期)
- **Feedback visual:**
  - Nueva especie descubierta: Modal con foto, nombre, descripción, estrellas (1-5)
  - Especie escaneada: Checkmark verde en bestiario
  - Muestra recolectada: Icono de muestra brilla
  - Misión completada: Confetti de burbujas (200 particles, 2s)
  - Oxígeno bajo: Barra roja pulsante + alerta
- **Personalización:**
  - 200+ especies marinas (tortugas, tiburones, ballenas, medusas, calamares, peces payaso)
  - 20+ zonas oceánicas (arrecife de coral, bosque de algas, fosa abisal, ventas hidrotermales)
  - 50+ módulos de submarino (sonar avanzado, luces potentes, brazo robótico, colector de muestras)
  - Avatar de explorador con 40+ combinaciones (traje de buceo, gafas, aletas)
  - Skins de submarino (clásico amarillo, futurista, militar, científico)

**Audio:**
- **Efectos de sonido:**
  - Burbujas: Rising bubbles (continuous, 50-200Hz)
  - Sonar: Ping con eco (200ms, decay 500ms)
  - Criatura descubierta: Mystical chime (C4-E4-G4-B5, 0.5s)
  - Muestra recolectada: Satisfying click (100ms)
  - Oxígeno bajo: Alarm pulsante (500ms on/off)
  - Whale song: Whale vocalizations (continuous, 100-500Hz)
- **Música:**
  - Menú principal: Ocean ambient (waves + seagulls, 70 BPM)
  - Superficial: Upbeat tropical (ukulele + marimbas, 100 BPM)
  - Medio: Ethereal underwater (synth pads + harp, 60 BPM)
  - Profundo: Mysterious abyss (drones + deep bass, 50 BPM)
  - Abisal: Minimalist tension (single tone, 40 BPM)
- **Voz:**
  - Tutorial: Voz de oceanógrafa ("¡Bienvenido a Ocean Explorer! ¡Vamos a descubrir el océano!")
  - Discovery: Voz de asombro ("¡Una nueva especie! ¡Es increíble!")
  - Mission alerta: Voz de emergencia ("¡Tortuga atrapada en plástico! ¡Ayuda!")
- **Audio espacial:** Sonidos 3D para feedback de posición (criaturas cerca suenan más fuertes)

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 80-100 horas (3-4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado submarino (200+ criaturas simultáneamente)
  - Latencia: <50ms para respuesta de controles (feedback instantáneo)
  - Criaturas renderizadas: 500 para高端 devices, 100 para低端
  - Memoria máxima: 200MB (incluye sprites de 200 especies)
  - Sonar simulation: <50ms para actualizar radar
- **Riesgos técnicos:**
  - Simulación de presión: La presión aumenta con profundidad, afecta comportamiento de criaturas
  - Optimización de rendering: 200+ criaturas pueden consumir mucha memoria
  - Bioluminiscencia: Efectos de glow pueden ser costosos en rendimiento
  - Datos científicos: Balancear exactitud científica con diversión de juego

**Valor Educativo:**
- **Biología marina real:** Los niños aprenden sobre 200+ especies, hábitats, comportamiento
- **Conservación oceánica:** Entienden amenazas (plástico, sobrepesca, cambio climático)
- **Ciencia oceánica:** Aprenden sobre zonas oceánicas, presión, bioluminiscencia, adaptaciones
- **Vocabulario científico:** Aprenden términos: arrecife, bioluminiscencia, fosa abisal, adaptación, depredador, presa
- **Conciencia ambiental:** Las misiones de limpieza enseñan sobre contaminación marina
- **Curiosidad científica:** Desarrollan asombro por la vida marina y el océano profundo
- **Exploración y descubrimiento:** Los niños valoran el proceso de investigación científica

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [National Geographic - Ocean resources](https://www.nationalgeographic.com/environment/ocean) - Referencia científica de océanos
- [Ocean Explorer - NOAA](https://oceanexplorer.noaa.gov/) - Inspiración para exploración científica
- [Abzû - Underwater exploration game](https://www.giant-squid.com/games/abzu/) - Inspiración para belleza oceánica
- [Subnautica - Survival ocean game](https://www.unknownworlds.com/subnautica/) - Inspiración para supervivencia submarina
- [Marine Conservation Institute - Ocean conservation](https://marine-conservation.org/) - Referencia de conservación
- [Web Audio API - Underwater sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos submarinos
- [PWA - Offline ocean exploration](https://web.dev/offline/) - PWA para explorar sin internet

---

#### Idea #35: History Time Travel: Ancient Civilizations

**Concepto:**
Juego de aventura histórica donde los jugadores viajan en el tiempo a civilizaciones antiguas, interactúan con figuras históricas, participan en eventos clave y aprenden sobre culturas, política, arte y tecnología de diferentes épocas. Los jugadores son agentes temporales que deben resolver misterios históricos preservando la línea temporal.

**Motivación:**
- **Viaje en el tiempo épico:** Explorar 12 civilizaciones antiguas (Egipto, Grecia, Roma, Mesopotamia, China, Maya, etc.)
- **Interacción con figuras históricas:** Conocer y colaborar con Cleopatra, Julio César, Confucio, Aristóteles
- **Misterios por resolver:** Cada época tiene un enigma histórico que debe ser resuelto
- **Colección de artefactos:** Recoger objetos históricos para el "Museo del Tiempo"
- **Impacto en el futuro:** Las decisiones afectan la línea temporal y revelan cómo el pasado moldea el presente

**Mecánica Principal:**
Los jugadores son agentes del "Crono-Instituto" que viajan a diferentes épocas históricas para prevenir anomalías temporales. Cada civilización tiene un mapa explorable (ciudad, templos, mercados, palacios) con NPCs históricos. Misiones principales incluyen: ayudar a Cleopatra con la política del Nilo, participar en los Juegos Olímpicos de Grecia, construir la Gran Muralla con Qin Shi Huang, testificar el desarrollo de la democracia en Atenas. Las decisiones de los jugadores tienen consecuencias: ayudar a un líder incorrecto puede alterar la historia, creando una línea temporal alternativa. Sistema de "Integridad Temporal" mide cuánto se desviaron de la historia real.

**Interacción Móvil:**
- **Tap simple:** Hablar con NPCs, recoger artefactos, seleccionar opciones de diálogo
- **Arrastrar (Drag):** Mover personaje en el mapa (joystick virtual o drag-to-move)
- **Pinch:** Zoom en el mapa (0.5x-2x) para ver detalles arquitectónicos
- **Dos dedos (drag):** Pan/mover la vista del mapa
- **Tap rápido:** Examinar artefacto (muestra información histórica)
- **Tap largo (Long press):** Ver línea temporal alternativa (qué habría pasado si...)
- **Swipe horizontal:** Cambiar entre vista de mapa, vista de cronología, vista de museo
- **Gestos complejos:**
  - Shake del dispositivo = activar "Time Echo" (ver evento pasado/ futuro)
  - Dibujo de símbolo antiguo = desbloquear conocimiento escondido
  - Doble tap en edificio = entrar en "Virtual Tour" (recorrido detallado)
  - Arrastrar artefacto a bolsa = agregar a colección
- **Escribir:** Tomar notas de viaje, etiquetar artefactos con descripciones históricas

**Accesibilidad:**
- NPCs con diálogos en bubble claros (texto + retrato histórico)
- Edificios con iconos grandes (min 70px) y etiquetas (nombre + época)
- Voice assistant narra contexto histórico ("Estamos en el año 44 a.C., Roma está en crisis")
- Modo "Easy History" con explicaciones simplificadas para concepto complejos
- Haptic feedback para eventos importantes (vibración al hallar artefacto clave)
- Color coding por civilización (Egipto=amarillo/dorado, Grecia=azul/blanco, Roma=rojo/marrón)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de civilizaciones (isométrico 2D)
  - `<canvas>` para línea temporal (timeline interactive)
  - `<canvas>` para museo del tiempo (grid de artefactos)
  - `<video>` para cutscenes históricas animadas
  - `<input type="text">` para notas de viaje y etiquetas
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado isométrico, pathfinding)
  - Narrative system: Custom para branching stories con consecuencias
  - Character AI: Simple dialogue trees con branching options
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para línea temporal y progreso del jugador
  - History database: JSON con 500+ eventos históricos verificados
  - Animaciones: GSAP para transiciones entre épocas (fade, dissolve)
  - Storage: IndexedDB para guardar línea temporal y colección (offline)
- **CSS:**
  - CSS Grid para layout de museo (10 columnas responsivo)
  - CSS Transforms para zoom y rotación de cámara
  - CSS Animations para efectos de tiempo (glitch, dissolve, reverse)
  - Backdrop-filter para blur de paneles históricos
  - CSS Variables para theming dinámico (cambiar colores por civilización)
  - Flexbox para contenedores de diálogo
- **Otros:**
  - Web Audio API: Sonidos históricos (trompetas romanas, flautas griegas)
  - DeviceOrientationEvent: Detectar shake para Time Echo
  - Touch Events API: Multi-touch para selección múltiple
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar 500+ artefactos y eventos históricos
  - Service Workers: PWA para jugar offline (modo sandbox sin eventos globales)
  - Canvas API: Renderizado de edificios históricos con spritesheets
  - Web Workers: Simular consecuencias temporales sin bloquear UI

**Características Visuales:**
- **Paleta de colores:**
  - Egipto (2500 a.C.): Dorado (#FFD700), arena (#F5DEB3), lapislázuli (#26619C)
  - Grecia (500 a.C.): Blanco (#FFFFFF), azul cielo (#87CEEB), mármol (#F5F5DC)
  - Roma (100 a.C.): Rojo imperial (#DC143C), mármol (#FAF0E6), bronce (#CD7F32)
  - China (200 a.C.): Rojo imperial (#C41E3A), jade (#00A86B), oro amarillo (#FFD700)
  - Maya (600 d.C.): Verde jade (#50C878), piedra caliza (#D3D3D3), rojo maya (#9E2A2B)
  - UI: Semi-transparente con glassmorphism histórico (sepia opacity 0.7, blur 10px)
- **Animaciones:**
  - Viaje en el tiempo: Dissolve effect con partículas de reloj (2s)
  - NPC aparece: Fade in + scale up (0.5s)
  - Recoger artefacto: Glow dorado + sparkle (0.3s)
  - Temporal change: Glitch effect con static (0.2s)
  - Línea temporal: Scroll suave con parallax (1s)
- **Feedback visual:**
  - NPC importante: Halo dorado pulsante
  - Artefacto raro: Diamante brillante en icono
  - Decisión importante: Modal con árbol de decisiones
  - Integridad temporal baja: Borde rojo pulsante + aviso
- **Personalización:**
  - 12 civilizaciones explorables con mapas únicos
  - 100+ figuras históricas interactivas (Cleopatra, Julio César, Aristóteles, Confucio, Moctezuma)
  - 500+ artefactos coleccionables (escarabajos egipcios, ánforas griegas, monedas romanas, jade chino)
  - Avatar de agente temporal con 50+ combinaciones (traje futurista, accesorios históricos)
  - Museo del tiempo personalizable (exhibiciones por tema, época, rareza)

**Audio:**
- **Efectos de sonido:**
  - NPC aparece: Whoosh con tema de época (trompeta romana, flauta griega, 150-300ms)
  - Viaje en el tiempo: Ticking clock + whirring (1s)
  - Recoger artefacto: Magical chime (C5-E5-G5, 200ms)
  - Time Echo: Echoey whisper (400ms)
  - Integridad temporal baja: Heartbeat pulsante (60 BPM)
  - Logro: Fanfare orquestal épico (8 notas, 2s)
- **Música:**
  - Menú principal: Mysterious time travel (synth + orchestral, 80 BPM)
  - Egipto: Middle Eastern ambient (oud + percussion, 90 BPM)
  - Grecia: Lyre + flute pastoral (70 BPM)
  - Roma: Epic Roman march (brass + drums, 110 BPM)
  - China: Traditional Chinese (guzheng + pipa, 85 BPM)
  - Maya: Tribal drums + flutes (100 BPM)
- **Voz:**
  - Tutorial: Voz de historiador ("Bienvenido, agente temporal. Tu misión es preservar la historia.")
  - NPC histórico: Voces con acento apropiado (Cleopatra con tono real, Aristóteles con voz solemne)
  - Time Echo: Voz de futuro/pasado ("Esta decisión cambiará el mundo...")
- **Audio espacial:** Sonidos 3D para ambientación (mercado bullicioso suena más fuerte si estás cerca)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 140-170 horas (5-6 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de civilizaciones (500+ NPCs)
  - Latencia: <50ms para respuesta de diálogo (feedback instantáneo)
  - NPCs activos: 200 para高端 devices, 50 para低端
  - Memoria máxima: 250MB (incluye sprites de 100 figuras históricas, 500 artefactos)
  - Timeline simulation: <100ms para calcular consecuencias temporales
- **Riesgos técnicos:**
  - Exactitud histórica vs. diversión: Balancear hechos reales con gameplay entretenible
  - Complejidad de branching narrative: Mantener coherencia en múltiples líneas temporales
  - Renderizado de civilizaciones: Cada época tiene arquitectura única (12 sets de assets)
  - Localization: 12 civilizaciones en diferentes idiomas si es multilenguaje

**Valor Educativo:**
- **Historia real:** Los niños aprenden sobre 12 civilizaciones antiguas, figuras históricas, eventos clave
- **Comprensión causal:** Entienden cómo las decisiones del pasado afectan el presente
- **Cultura y diversidad:** Exploran culturas diferentes (egipcia, griega, romana, china, maya)
- **Vocabulario histórico:** Aprenden términos: democracia, república, faraón, emperador, filosofía, imperio
- **Pensamiento crítico:** Las decisiones con consecuencias enseñan a considerar implicaciones
- **Memoria histórica:** Asocian eventos con fechas y contextos (Cleopatra → Egipto 69-30 a.C.)
- **Empatía histórica:** Entienden las motivaciones de figuras del pasado

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Isometric rendering y game logic
- [Assassin's Creed Discovery Tour](https://www.ubisoft.com/en-us/game/assassins-creed/odyssey/discovery-tour) - Inspiración para exploración histórica
- [History Channel - Ancient civilizations](https://www.history.com/topics/ancient-history) - Referencia de eventos históricos
- [Britannica - World history](https://www.britannica.com/) - Verificación de datos históricos
- [National Geographic Kids - History](https://kids.nationalgeographic.com/history) - Contenido educativo para niños
- [Smithsonian - History resources](https://www.si.edu/) - Inspiración para artefactos y museo
- [Web Audio API - Historical sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Sonidos históricos
- [PWA - Offline history exploration](https://web.dev/offline/) - PWA para viajar en el tiempo sin internet

---

#### Idea #36: Word Wizard: Language Adventure

**Concepto:**
Juego de aventura de vocabulario y gramática donde los jugadores exploran mundos de palabras, aprenden idiomas, completan puzzles lingüísticos y desbloquean poderes mágicos basados en conocimiento. Combina gameplay tipo RPG con educación lingüística, enseñando vocabulario, gramática, ortografía y composición en español e inglés.

**Motivación:**
- **Poder de las palabras:** Cada palabra aprendida desbloquea un hechizo mágico
- **Exploración de mundos lingüísticos:** 6 mundos temáticos (Fantasía, Ciencia, Naturaleza, Deportes, Arte, Espacio)
- **Progresión visible:** Comienzan con palabras básicas, avanzan a vocabulario avanzado
- **Competencia verbal:** Batalla de palabras contra NPC y otros jugadores
- **Creatividad lingüística:** Modo composición donde crean historias y poemas

**Mecánica Principal:**
Los jugadores son "Magos de las Palabras" que viajan por el "Reino del Lenguaje". Cada mundo tiene un tema y enseña vocabulario específico. Los combate son batallas de palabras: el jugador debe completar puzzles lingüísticos (sopa de letras, anagramas, completar oraciones, encontrar sinónimos/antónimos) para lanzar hechizos. Las palabras aprendidas se añaden al "Grimorio de Conocimiento" y pueden ser usadas en combate. Hay modo historia (desbloquear los 6 mundos, derrotar el "Señor del Silencio") y modo libre (practicar cualquier tema desbloqueado). Sistema de "Nivel de Lenguaje" rastreja progresión desde básico hasta avanzado.

**Interacción Móvil:**
- **Tap simple:** Seleccionar letra/palabra, lanzar hechizo, interactuar con NPCs
- **Arrastrar (Drag):** Mover letras en sopa de letras, organizar palabras en anagramas
- **Pinch:** Zoom en puzzles de palabras (0.5x-2x) para ver detalles
- **Dos dedos (drag):** Pan/mover la vista del mapa del mundo
- **Tap rápido:** Completar palabra rápida (time-attack mode)
- **Tap largo (Long press):** Ver definición y ejemplo de uso de la palabra
- **Swipe horizontal:** Cambiar entre vista de combate, vista de grimorio, vista de mapa
- **Gestos complejos:**
  - Shake del dispositivo = "Spell Shuffle" (reorganizar letras aleatoriamente)
  - Dibujo de letra = adivinar letra (guessing game)
  - Doble tap en palabra = agregar a favoritos
  - Arrastrar palabra a hechizo = usar palabra en combate
- **Escribir:** Modo composición donde escriben historias y poemas
- **Multitouch hasta 5 dedos:** Seleccionar múltiples letras simultáneamente (sopa de letters)

**Accesibilidad:**
- Letras con fuentes grandes (min 60px) y alto contraste
- Puzzles con colores por tipo (sustantivos=azul, verbos=rojo, adjetivos=verde)
- Voice assistant lee palabras y definiciones ("La palabra 'magnífico' significa 'extraordinario'")
- Modo "Easy Words" con vocabulario simplificado para principiantes
- Haptic feedback para aciertos (vibración corta al completar palabra)
- TTS (Text-to-Speech) para pronunciación de palabras en español e inglés

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para puzzles de palabras (sopa de letters, anagramas)
  - `<canvas>` para grimorio interactivo (grid de palabras aprendidas)
  - `<canvas>` para mapa de mundos lingüísticos
  - `<audio>` para pronunciación de palabras (TTS)
  - `<input type="text">` para modo composición (escribir historias)
  - `<textarea>` para editor de textos con syntax highlighting
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de puzzles, animaciones)
  - Puzzle system: Custom para sopa de letters, anagramas, crucigramas
  - Dictionary API: Integración con API de diccionario (español e inglés)
  - NLP processing: Simple para sinónimos, antónimos, definiciones
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para grimorio y progreso del jugador
  - TTS engine: Web Speech API (síntesis de voz para pronunciación)
  - Animaciones: GSAP para transiciones y efectos mágicos
  - Storage: IndexedDB para guardar 2000+ palabras aprendidas (offline)
- **CSS:**
  - Flexbox para layout de puzzles (grid de letras)
  - CSS Grid para grimorio (10 columnas responsivo)
  - CSS Transforms para zoom y rotación de letras
  - CSS Animations para efectos mágicos (sparkle, glow, summon)
  - Backdrop-filter para blur de paneles mágicos
  - CSS Variables para theming dinámico (cambiar colores por mundo)
  - Monospace font para editor de composición
- **Otros:**
  - Web Speech API: TTS para pronunciación de palabras
  - Web Speech API: STT para dictar palabras en puzzles
  - Touch Events API: Multi-touch para seleccionar múltiples letras
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar grimorio de 2000+ palabras
  - Service Workers: PWA para jugar offline (modo vocabulario sin leaderboard)
  - Canvas API: Renderizado de letras y puzzles
  - Web Workers: Procesar puzzles complejos sin bloquear UI

**Características Visuales:**
- **Paleta de colores:**
  - Mundo Fantasía: Púrpura mágico (#9B59B6), dorado (#FFD700), blanco brillante (#FFFFFF)
  - Mundo Ciencia: Azul tecnológico (#2196F3), neón cyan (#00E5FF), blanco (#FFFFFF)
  - Mundo Naturaleza: Verde bosque (#228B22), marrón tierra (#8B4513), amarillo sol (#FFD700)
  - Mundo Deportes: Naranja energético (#FF8C00), rojo competitivo (#FF4500), blanco (#FFFFFF)
  - Mundo Arte: Rosa creativo (#FF69B4), magenta vibrante (#FF00FF), negro (#000000)
  - Mundo Espacio: Negro profundo (#000000), estrellas blancas (#FFFFFF), neón morado (#E0B0FF)
  - UI: Semi-transparente con glassmorphism mágico (arcoíris opacity 0.7, blur 10px)
- **Animaciones:**
  - Lanzar hechizo: Spell projectile + explosion de partículas mágicas (1s)
  - Palabra completada: Flash brillante + sparkle dorado (0.5s)
  - Aprender nueva palabra: Glow brillante + icono de libro (0.5s)
  - Batalla ganada: Confetti de letras (200 particles, 2s)
  - Transición entre mundos: Portal effect con swirling colors (1.5s)
- **Feedback visual:**
  - Palabra correcta: Brillo verde + checkmark animado
  - Palabra incorrecta: Borde rojo pulsante + shake
  - Hechizo potente: Glow dorado + efectos especiales
  - Nivel up: Modal con estadísticas incrementadas + celebración
- **Personalización:**
  - 2000+ palabras en español (básico → avanzado)
  - 2000+ palabras en inglés (basic → advanced)
  - 6 mundos temáticos con 30+ niveles cada uno
  - Avatar de mago con 80+ combinaciones (túnica, bastón, accesorios mágicos)
  - Grimorio personalizable (organizar por tema, dificultad, favoritos)

**Audio:**
- **Efectos de sonido:**
  - Lanzar hechizo: Magical whoosh + chime (300ms)
  - Palabra completada: Satisfying chime (C4-E4-G4, 200ms)
  - Palabra incorrecta: Buzz descendente (E2-C2, 200ms)
  - Aprender palabra: Book opening + sparkle (400ms)
  - Batalla ganada: Fanfare de celebración (8 notas, 2s)
  - TTS pronunciation: Voice reads the word (español/inglés)
- **Música:**
  - Menú principal: Magical orchestral (harp + choir, 90 BPM)
  - Mundo Fantasía: Fantasy soundtrack (strings + flute, 80 BPM)
  - Mundo Ciencia: Futuristic electronic (synth + bass, 110 BPM)
  - Mundo Naturaleza: Ambient nature (birds + river, 70 BPM)
  - Mundo Deportes: Upbeat sports music (brass + drums, 130 BPM)
  - Mundo Arte: Creative piano (melody + chords, 85 BPM)
  - Mundo Espacio: Ethereal space (ambient + pads, 60 BPM)
- **Voz:**
  - Tutorial: Voz de mago anciano ("Bienvenido, joven mago. Las palabras son tu poder.")
  - Palabra aprendida: Voz de asistente ("¡Excelente! Has aprendido 'magnífico'.")
  - Pronunciation: TTS pronuncia la palabra ("Magnífico. MAG-NEE-FEE-KO.")
- **Audio espacial:** Sonidos 3D para combate (hechizos desde izquierda suenan en canal izquierdo)

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado de desarrollo:** 80-100 horas (3-4 semanas equipo de 2-3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de puzzles (500+ letras simultáneamente)
  - Latencia: <30ms para respuesta de selección de letra (feedback instantáneo)
  - Palabras cargadas: 4000 para高端 devices (2000 es + 2000 en), 1000 para低端
  - Memoria máxima: 150MB (incluye audio de pronunciación de 2000 palabras)
  - TTS latency: <100ms para pronunciar palabra (Web Speech API)
- **Riesgos técnicos:**
  - TTS availability: Algunos navegadores no soportan Web Speech API bien
  - Pronunciation accuracy: Diferentes acentos pueden confundir a niños
  - Puzzle difficulty: Balancear desafíos para que no sean frustrantes
  - Dictionary API: Dependencia de APIs externas para definiciones

**Valor Educativo:**
- **Vocabulario expansivo:** Los niños aprenden 2000+ palabras en español e inglés
- **Gramática aplicada:** Entienden sinónimos, antónimos, contexto, uso correcto
- **Ortografía y spelling:** Los puzzles refuerzan correcta escritura de palabras
- **Bilingüismo:** Modo paralelo enseña español e inglés simultáneamente
- **Vocabulario literario:** Aprenden palabras sofisticadas (magnífico, extraordinario, fascinante)
- **Creatividad lingüística:** Modo composición fomenta escritura de historias y poemas
- **Confianza verbal:** Los juegos hacen aprender palabras divertido, reduciendo ansiedad

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Wordscapes - Word puzzle game](https://www.wordscapestips.com/) - Inspiración para puzzles de palabras
- [Duolingo - Language learning](https://www.duolingo.com/) - Inspiración para gamification del lenguaje
- [WordReference - Dictionary API](https://www.wordreference.com/) - Referencia de diccionario
- [Vocabulary.com - Word learning](https://www.vocabulary.com/) - Inspiración para enseñanza de vocabulario
- [Web Speech API - Text-to-Speech](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) - Pronunciación de palabras
- [PWA - Offline vocabulary](https://web.dev/offline/) - PWA para aprender palabras sin internet

---

#### Idea #37: Sports Coach: Multi-Sport Training

**Concepto:**
Juego de deportes interactivo donde los niños entrenan múltiples deportes, aprenden técnicas, compiten en campeonatos y desarrollan habilidades físicas y de coordinación. Combina gameplay tipo arcade con educación deportiva, enseñando fútbol, baloncesto, tenis, natación, atletismo y gimnasia. Los jugadores son atletas virtuales que deben entrenar para convertirse en campeones.

**Motivación:**
- **Variedad de deportes:** 8 deportes diferentes con mecánicas únicas
- **Progresión atlética visible:** Comienzan como principiantes, avanzan a atletas profesionales
- **Competencia deportiva:** Campeonatos globales con 100+ jugadores
- **Personalización de atleta:** Crear avatar de atleta único con atributos
- **Técnica real:** Aprenden movimientos reales de cada deporte

**Mecánica Principal:**
Los jugadores son atletas en la "Academia Deportiva Virtual" donde entrenan 8 deportes: fútbol, baloncesto, tenis, natación, atletismo, gimnasia, voleibol y bádminton. Cada deporte tiene modo entrenamiento (aprender técnicas básicas) y modo competencia (campeonatos, ligas, torneos). Los controles están diseñados para móvil: gestos táctiles simulan movimientos reales (swipe para chutar en fútbol, arrastrar para driblar en baloncesto, tap para recibir en tenis). Sistema de atributos (velocidad, fuerza, coordinación, resistencia) que mejoran con entrenamiento. Hay modo historia (convertirse en atleta olímpico) y modo libre (practicar cualquier deporte sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Patear bola, lanzar, recibir, saltar
- **Arrastrar (Drag):** Driblar, mover jugador, controlar dirección de tiro
- **Swipe rápido:** Chutar fuerte, lanzar lejos, salto alto
- **Pinch:** Zoom en el campo de juego (0.5x-2x)
- **Dos dedos (drag):** Pan/mover la vista del campo
- **Tap rápido:** Movimientos rápidos (drible, sprint)
- **Tap largo (Long press):** Ver técnica detallada del movimiento
- **Swipe horizontal:** Cambiar entre vista de campo, vista de estadísticas, vista de entrenamiento
- **Gestos complejos:**
  - Swipe en curva = tiro curvo (fútbol)
  - Doble tap = sprint rápido (atletismo)
  - Shake del dispositivo = celebración (goal/point)
  - Arrastrar en círculo = driblar en círculo (baloncesto)
- **Multitouch hasta 4 dedos:** Controlar múltiples jugadores (fútbol, voleibol)
- **Acelerómetro:** Simular salto (levantar teléfono) y rebote (girar teléfono)

**Accesibilidad:**
- Controles con iconos grandes (min 60px) y tutoriales visuales
- Modo "Easy Controls" con asistencia automática (auto-aim, auto-dribble)
- Voice assistant explica técnica ("Mantén presionado para chutar fuerte")
- Modo "Slow Motion" para practicar movimientos a 0.5x velocidad
- Haptic feedback para acciones (vibración al chutar, recibir, saltar)
- Color coding por deporte (fútbol=verde, baloncesto=naranja, tenis=amarillo)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de campos de juego (8 deportes)
  - `<canvas>` para simulación de física de bola/pelota
  - `<canvas>` para vista de estadísticas atléticas (gráficos de progreso)
  - `<video>` para tutoriales de técnica (videos de profesionales)
  - `<input type="range">` para ajustar sensibilidad de controles
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de campos, físicas)
  - Physics engine: Matter.js o Box2D (simulación de bola/pelota)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para atributos del atleta y progreso
  - Sports logic: Custom algorithms para cada deporte (fútbol physics, tenis ball trajectory)
  - Animations: GSAP para movimientos de atletas y transiciones
  - AI oponente: Simple AI para jugadores CPU (diferentes niveles de dificultad)
  - Storage: IndexedDB para guardar progreso atlético (offline)
- **CSS:**
  - Flexbox para layout de controles (responsive buttons)
  - CSS Grid para selección de deporte (4x2 grid)
  - CSS Transforms para zoom y rotación de cámara
  - CSS Animations para feedback visual (goal animation, point scored)
  - Backdrop-filter para blur de paneles de estadísticas
  - CSS Variables para theming dinámico (cambiar colores por deporte)
  - Media queries para diferentes orientaciones (portrait/landscape)
- **Otros:**
  - DeviceOrientationEvent: Detectar shake para celebración
  - DeviceMotionEvent: Detectar salto y rebote (acelerómetro)
  - Touch Events API: Multi-touch para controlar múltiples jugadores
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar progreso de 8 deportes (entrenamiento + competencia)
  - Service Workers: PWA para entrenar offline (modo práctica sin leaderboard)
  - Canvas API: Renderizado de campos y jugadores
  - Web Workers: Simular física sin bloquear UI

**Características Visuales:**
- **Paleta de colores:**
  - Fútbol: Verde campo (#228B22), blanco líneas (#FFFFFF), balón blanco (#FFFFFF)
  - Baloncesto: Naranja pelota (#FF8C00), madera parque (#DEB887), naranja uniforme (#FF6600)
  - Tenis: Cancha verde (#006400), pelota amarilla (#FFFF00), blanco uniforme (#FFFFFF)
  - Natación: Azul piscina (#1E90FF), blanco líneas (#FFFFFF), azul uniforme (#000080)
  - Atletismo: Rojo pista (#DC143C), blanco líneas (#FFFFFF), azul uniforme (#0000FF)
  - Gimnasia: Magenta mat (#FF00FF), blanco equipo (#FFFFFF), dorado uniforme (#FFD700)
  - Voleibol: Cancha amarilla (#FFD700), pelota blanca (#FFFFFF), azul uniforme (#0000FF)
  - Bádminton: Cancha verde (#90EE90), volante blanco (#FFFFFF), rojo uniforme (#FF0000)
  - UI: Semi-transparente con glassmorphism deportivo (blanco opacity 0.8, blur 10px)
- **Animaciones:**
  - Chutar/lanzar: Swipe animation + ball trail (0.3s)
  - Recibir bola: Catch animation + bounce (0.2s)
  - Sprint: Fast movement + speed lines (0.5s)
  - Gol/Point: Celebration animation + confetti (1s)
  - Transición entre deportes: Dissolve effect (1s)
- **Feedback visual:**
  - Gol/Point: Flash brillante + texto "GOAL!" o "POINT!"
  - Técnica perfecta: Glow dorado + "PERFECT!"
  - Técnica incorrecta: Shake rojo + "TRY AGAIN"
  - Entrenamiento completado: Modal con estadísticas + medalla
- **Personalización:**
  - 8 deportes con mecánicas únicas
  - 100+ movimientos técnicos (chutar, driblar, recibir, saltar, girar)
  - Avatar de atleta con 100+ combinaciones (cuerpo, uniforme, accesorios)
  - Equipos deportivos personalizados (colores, logos, nombres)
  - Campeonatos con trofeos y medallas

**Audio:**
- **Efectos de sonido:**
  - Chutar bola: Kick sound + ball whoosh (200ms)
  - Recibir bola: Catch thud + bounce (150ms)
  - Dribble: Dribble rhythm (100ms each)
  - Sprint: Footsteps + breathing (continuous)
  - Gol/Point: Crowd cheer + whistle (1s)
  - Celebración: Trumpet fanfare (800ms)
- **Música:**
  - Menú principal: Upbeat sports anthem (brass + drums, 130 BPM)
  - Fútbol: Latin sports music (percussion + brass, 120 BPM)
  - Baloncesto: Hip-hop sports beat (bass + drums, 100 BPM)
  - Tenis: Rhythmic pop (synth + percussion, 115 BPM)
  - Natación: Flowing water + gentle beat (90 BPM)
  - Atletismo: High-energy electronic (synth + bass, 140 BPM)
  - Gimnasia: Elegant orchestral (strings + piano, 85 BPM)
  - Voleibol: Energetic pop (guitar + drums, 110 BPM)
  - Bádminton: Light electronic (synth + percussion, 105 BPM)
- **Voz:**
  - Tutorial: Voz de entrenador ("¡Mantén presionado para chutar fuerte!")
  - Gol/Point: Voz de comentarista ("¡GOOOOOOOAL!" o "¡PUNTO!")
  - Entrenamiento completado: Voz celebratoria ("¡Excelente entrenamiento!")
- **Audio espacial:** Sonidos 3D para posicionamiento (pelota cerca suena más fuerte)

**Complejidad Técnica:**
- **Nivel:** Alta
- **Tiempo estimado de desarrollo:** 120-150 horas (4-5 semanas equipo de 3-4)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de campo (200+ sprites)
  - Latencia: <20ms para respuesta de controles (critical para deportes)
  - Física real-time: <16ms para simular bola/pelota (60 FPS physics)
  - Memoria máxima: 200MB (incluye sprites de 8 deportes, animaciones)
  - Accelerometer latency: <30ms para salto/rebote
- **Riesgos técnicos:**
  - Física realista vs. divertida: Balancear simulación con gameplay
  - 8 deportes diferentes: Cada uno requiere lógica única (physics, controles)
  - Controles táctiles: Diferentes dispositivos tienen diferentes sensitividades
  - Multiplayer synchronization: Latencia crítica para competencia en tiempo real

**Valor Educativo:**
- **Deportes reales:** Los niños aprenden 8 deportes con técnicas auténticas
- **Coordinación motora:** Desarrollan reflejos, coordinación ojo-mano, tiempo de reacción
- **Educación física:** Entienden biomecánica, ergonomía, técnicas correctas
- **Trabajo en equipo:** Los deportes colectivos enseñan colaboración (fútbol, voleibol)
- **Disciplina y práctica:** La progresión enseña que la mejora requiere entrenamiento constante
- **Salud y fitness:** Promociona actividad física y deporte
- **Competencia sana:** Los campeonatos enseñan a ganar y perder con respeto

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Matter.js - Physics engine](https://brm.io/matter-js/) - Simulación de bola/pelota
- [FIFA Mobile - Soccer game](https://www.ea.com/fifa/fifa-mobile) - Inspiración para fútbol
- [NBA 2K Mobile - Basketball game](https://www.nba.com/2kmobile) - Inspiración para baloncesto
- [Virtua Tennis - Tennis game](https://www.sega.com/games/virtua-tennis) - Inspiración para tenis
- [Physics Education - Sports physics](https://www.physicsclassroom.com/) - Referencia de física deportiva
- [DeviceOrientation API - Accelerometer](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent) - Controles con acelerómetro
- [PWA - Offline sports training](https://web.dev/offline/) - PWA para entrenar sin internet

---

#### Idea #38: Chef Academy: Culinary World Tour

**Concepto:**
Juego de cocina donde los jugadores viajan por el mundo aprendiendo recetas de diferentes culturas, cocinan platos auténticos, gestionan restaurantes y compiten en competiciones gastronómicas. Combina gameplay tipo cooking game con educación culinaria, enseñando ingredientes, técnicas de cocina, culturas gastronómicas y nutrición. Los jugadores son chefs en formación que recorren el mundo para convertirse en maestros culinarios.

**Motivación:**
- **Viaje gastronómico:** 10 países con cocinas auténticas (Italia, Japón, México, India, Francia, etc.)
- **Aprendizaje de recetas:** 100+ recetas reales con ingredientes y pasos detallados
- **Gestión de restaurante:** Construir y administrar propio restaurante
- **Competencia culinaria:** Torneos de cocina con chefs globales
- **Creatividad en cocina:** Crear platos originales y compartirlos

**Mecánica Principal:**
Los jugadores son aprendices de chef que viajan a 10 países para aprender cocinas tradicionales. Cada país tiene 3 restaurantes con diferentes niveles (street food → casual → fine dining). Los jugadores cocinan platos siguiendo recetas: seleccionan ingredientes, ejecutan técnicas (chopping, frying, baking, grilling) con gestos táctiles, y presentan el plato final. Sistema de "Ingredient Mastery" rastrea dominio de ingredientes (tomato, chicken, rice, cheese) y "Technique Mastery" para habilidades (chopping, sautéing, baking). Las recetas aprendidas se añaden al "Libro de Recetas" y pueden ser cocinadas en modo libre. Hay modo historia (convertirse en "World Chef Champion") y modo libre (cocinar cualquier receta sin restricciones).

**Interacción Móvil:**
- **Tap simple:** Seleccionar ingrediente, herramienta, acción de cocina
- **Arrastrar (Drag):** Mover ingredientes a olla/sartén, organizar plato
- **Swipe rápido:** Cortar ingredientes (gesture de cuchillo), saltear
- **Pinch:** Zoom en el área de cocina (0.5x-2x) para ver detalles
- **Dos dedos (drag):** Pan/mover la vista de la cocina
- **Tap rápido:** Acciones rápidas (flip patty, stir sauce)
- **Tap largo (Long press):** Ver información de ingrediente (origen, nutrición, sustituciones)
- **Swipe horizontal:** Cambiar entre vista de cocina, vista de recetario, vista de restaurante
- **Gestos complejos:**
  - Shake del dispositivo = "Seasoning" (agregar especias)
  - Dibujo de círculo = "Whisk" (batir mezcla)
  - Doble tap en ingrediente = seleccionar cantidad
  - Arrastrar ingrediente a basura = descartar (si se equivoca)
- **Escribir:** Nombrar platos originales, escribir notas de receta
- **Multitouch hasta 4 dedos:** Manipular múltiples ingredientes simultáneamente

**Accesibilidad:**
- Ingredientes con iconos grandes (min 70px) y nombres claros
- Recetas con pasos numerados y timers visuales
- Voice assistant lee recetas ("Cortar 100g de tomates")
- Modo "Slow Cooking" para practicar recetas a velocidad reducida (0.5x)
- Haptic feedback para acciones (vibración al cortar, saltear, hornear)
- Color coding por tipo de ingrediente (vegetales=verde, carnes=rojo, lácteos=amarillo, granos=marrón)

**Tecnologías Requeridas:**
- **HTML5:**
  - `<canvas>` principal para renderizado de cocina (isométrico 2D)
  - `<canvas>` para simulación de cocción (efectos visuales de fuego, humo)
  - `<canvas>` para plato final (presentación visual)
  - `<canvas>` para restaurante (mesas, clientes, chefs)
  - `<video>` para tutoriales de técnica (videos de chefs reales)
  - `<input type="range">` para ajustar temperatura y tiempo
  - `<input type="text">` para nombrar platos originales
- **JavaScript:**
  - Game engine: Phaser 3 (renderizado de cocina, animaciones)
  - Cooking system: Custom para recetas, ingredientes, técnicas de cocina
  - Recipe database: JSON con 100+ recetas auténticas (ingredientes, pasos, tiempos)
  - Ingredient system: Custom para ingredientes (propiedades: calorías, protein, carbs)
  - Framework UI: React o Vue.js (componentes reactivos)
  - State management: Redux para progreso del chef (ingredientes aprendidos, técnicas dominadas)
  - Restaurant simulation: Custom para gestión de clientes, mesas, pedidos
  - Animaciones: GSAP para efectos de cocina (chopping, frying, boiling)
  - Storage: IndexedDB para guardar 100+ recetas y progreso (offline)
- **CSS:**
  - Flexbox para layout de cocina (mesa de trabajo, estanterías)
  - CSS Grid para recetario (10 columnas responsivo)
  - CSS Transforms para zoom y rotación de vista
  - CSS Animations para efectos de cocina (flame, smoke, bubble)
  - Backdrop-filter para blur de paneles de recetas
  - CSS Variables para theming dinámico (cambiar colores por país)
  - Responsive design para portrait/landscape
- **Otros:**
  - DeviceOrientationEvent: Detectar shake para seasoning
  - Touch Events API: Multi-touch para manipular múltiples ingredientes
  - Pointer Events API: Unificar mouse/touch/pen input
  - IndexedDB: Guardar 100+ recetas y 200+ ingredientes
  - Service Workers: PWA para cocinar offline (modo práctica sin leaderboard)
  - Canvas API: Renderizado de cocina y platos
  - Web Workers: Simular cocción sin bloquear UI

**Características Visuales:**
- **Paleta de colores:**
  - Italia: Rojo tomate (#FF6347), verde albahaca (#228B22), blanco mozzarella (#FFFAFA)
  - Japón: Miso rosa (#FFB6C1), arroz blanco (#FFFFFF), wasabi verde (#98FB98)
  - México: Verde chile (#006400), rojo salsa (#DC143C), amarillo maíz (#FFD700)
  - India: Azafrán amarillo (#FFD700), curry naranja (#FF8C00), cúrcuma dorado (#DAA520)
  - Francia: Azul borgoña (#4B0082), crema (#FFFDD0), vino tinto (#722F37)
  - China: Rojo imperial (#C41E3A), jade verde (#00A86B), cerámica azul (#1E90FF)
  - Tailandia: Verde curry (#9ACD32), coco blanco (#FFFAF0), chile rojo (#FF4500)
  - Brasil: Verde lima (#32CD32), amarillo sol (#FFD700), naranja naranja (#FF8C00)
  - Grecia: Oliva verde (#808000), feta blanco (#F5F5DC), azul mar (#000080)
  - EE.UU.: Rojo ketchup (#FF0000), amarillo mostaza (#FFD700), marrón pan (#8B4513)
  - UI: Semi-transparente con glassmorphism culinario (blanco opacity 0.8, blur 10px)
- **Animaciones:**
  - Cortar ingrediente: Chopping animation + flying pieces (0.5s)
  - Saltear: Sauté effect + sizzle particles (continuous)
  - Hervir: Bubbling water + steam rising (continuous)
  - Hornear: Oven glow + baking transformation (1-5s según receta)
  - Plato completado: Presentation shine + garnish sparkle (1s)
  - Cliente comiendo: Eating animation + happy face (2s)
- **Feedback visual:**
  - Receta perfecta: Glow dorado + "PERFECT!" + 5 estrellas
  - Receta correcta: Brillo verde + "DELICIOUS!"
  - Receta quemada/incorrecta: Humo gris + "TRY AGAIN"
  - Cliente satisfecho: Cara feliz + tip monetario
  - Nuevo ingrediente aprendido: Modal con info + sparkle
- **Personalización:**
  - 10 países con cocinas auténticas
  - 100+ recetas (10 por país)
  - 200+ ingredientes con información nutricional
  - Avatar de chef con 100+ combinaciones (uniforme, gorra, utensilios)
  - Restaurante personalizable (decoración, mesas, temática)

**Audio:**
- **Efectos de sonido:**
  - Cortar ingrediente: Chopping sound + knife clink (100ms each)
  - Saltear: Sizzle + oil popping (continuous)
  - Hervir: Bubbling water + steam hiss (continuous)
  - Hornear: Oven beep + timer tick (1s beep)
  - Cliente comiendo: Chewing + "mmm" satisfied (2s)
  - Receta perfecta: Ding celebratorio (C4-E4-G4-C5, 400ms)
- **Música:**
  - Menú principal: Upbeat kitchen anthem (brass + percussion, 130 BPM)
  - Italia: Italian accordion + mandolin (85 BPM)
  - Japón: Koto + shakuhachi (70 BPM)
  - México: Mariachi + trumpets (120 BPM)
  - India: Sitar + tabla (95 BPM)
  - Francia: Accordion + piano (80 BPM)
  - China: Guzheng + erhu (90 BPM)
  - Tailandia: Thai percussion + flute (110 BPM)
  - Brasil: Samba + bossa nova (125 BPM)
  - Grecia: Bouzouki + lyre (85 BPM)
  - EE.UU.: Jazz piano + drums (100 BPM)
- **Voz:**
  - Tutorial: Voz de chef ("¡Bienvenido a la Academia Culinaria! ¡Vamos a cocinar!")
  - Receta paso: Voz de asistente ("Corta 100g de tomates en cubos")
  - Cliente satisfecho: Voz de cliente ("¡Delicioso! ¡5 estrellas!")
- **Audio espacial:** Sonidos 3D para cocina (olla hirviendo suena más fuerte si estás cerca)

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado de desarrollo:** 100-130 horas (4-5 semanas equipo de 3)
- **Requisitos de rendimiento:**
  - Objetivo FPS: 60 FPS en renderizado de cocina (300+ sprites)
  - Latencia: <30ms para respuesta de gestures de cocina (feedback instantáneo)
  - Simulación de cocción: <50ms para actualizar timers y estados
  - Memoria máxima: 180MB (incluye sprites de 200 ingredientes, 100 recetas)
  - Restaurant simulation: 50 clientes simultáneos máximo
- **Riesgos técnicos:**
  - Autenticidad de recetas: Balancear recetas reales con gameplay divertible
  - 10 cocinas diferentes: Cada país requiere assets únicos (ingredientes, música, decoración)
  - Gestión de restaurante: Simulación de clientes, mesas, pedidos puede ser compleja
  - Cooking simulation: Efectos visuales de fuego, humo, burbujas pueden ser costosos

**Valor Educativo:**
- **Cocina real:** Los niños aprenden 100+ recetas auténticas de 10 países
- **Ingredientes y nutrición:** Entienden propiedades nutricionales (calorías, proteínas, carbohidratos)
- **Técnicas de cocina:** Aprenden habilidades culinarias reales (chopping, sautéing, baking)
- **Culturas gastronómicas:** Exploran tradiciones culinarias de todo el mundo
- **Matemáticas aplicadas:** Las recetas requieren mediciones, proporciones, conversiones
- **Creatividad culinaria:** Modo libre fomenta experimentación e innovación
- **Gestión de tiempo y planificación:** Cocinar múltiples platos simultáneamente enseña organización

**Referencias e Inspiración:**
- [Phaser 3 - Game engine](https://photonstorm.github.io/phaser3-docs/) - Game logic y rendering
- [Cooking Fever - Cooking game](https://www.cookingfever.com/) - Inspiración para gameplay de cocina
- [Toca Kitchen - Kids cooking game](https://tocaboca.com/apps/toca-kitchen/) - Inspiración para cocina interactiva
- [AllRecipes - Recipe database](https://www.allrecipes.com/) - Referencia de recetas reales
- [BBC Good Food - Cooking techniques](https://www.bbcgoodfood.com/) - Referencia de técnicas de cocina
- [Nutrition.gov - Food nutrition](https://www.nutrition.gov/) - Referencia de nutrición
- [Web Speech API - Recipe narration](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) - Lectura de recetas
- [PWA - Offline cooking](https://web.dev/offline/) - PWA para cocinar sin internet

---

### Lote 8: Resumen de Ideas Agregadas

### Idea #35: History Time Travel: Ancient Civilizations
- **Género:** Aventura histórica y viaje en el tiempo
- **Enfoque educativo:** Historia, civilizaciones antiguas, figuras históricas, cultura, causalidad
- **Tecnologías clave:** Phaser 3, React, Redux, GSAP, Web Audio API
- **Complejidad:** Alta (140-170 horas)
- **Valor destacado:** 12 civilizaciones antiguas, 100+ figuras históricas, 500+ artefactos, sistema de línea temporal con consecuencias

### Idea #36: Word Wizard: Language Adventure
- **Género:** Aventura de vocabulario y gramática
- **Enfoque educativo:** Vocabulario, gramática, ortografía, bilingüismo (español/inglés), composición
- **Tecnologías clave:** Phaser 3, Web Speech API (TTS/STT), React, Redux, GSAP
- **Complejidad:** Media (80-100 horas)
- **Valor destacado:** 2000+ palabras en español e inglés, 6 mundos lingüísticos, puzzles de palabras, grimorio de conocimiento

### Idea #37: Sports Coach: Multi-Sport Training
- **Género:** Deportes y entrenamiento físico
- **Enfoque educativo:** Deportes, coordinación motora, técnica atlética, trabajo en equipo, salud física
- **Tecnologías clave:** Phaser 3, Matter.js, DeviceOrientation API, React, Redux
- **Complejidad:** Alta (120-150 horas)
- **Valor destacado:** 8 deportes (fútbol, baloncesto, tenis, etc.), controles gestuales, física realista, campeonatos globales

### Idea #38: Chef Academy: Culinary World Tour
- **Género:** Cocina y gastronomía mundial
- **Enfoque educativo:** Cocina, ingredientes, técnicas culinarias, nutrición, culturas gastronómicas
- **Tecnologías clave:** Phaser 3, React, Redux, GSAP, DeviceOrientation API
- **Complejidad:** Media-Alta (100-130 horas)
- **Valor destacado:** 10 países con cocinas auténticas, 100+ recetas reales, 200+ ingredientes, gestión de restaurante

---

### Lote 7: Resumen de Ideas Agregadas

### Idea #31: Robot Builder: Cyber Workshop
- **Género:** Construcción y programación de robots
- **Enfoque educativo:** Ingeniería, robótica, programación visual, física, electrónica
- **Tecnologías clave:** Phaser 3, Matter.js, Blockly, React, Redux, Socket.io
- **Complejidad:** Alta (130-160 horas)
- **Valor destacado:** 500+ piezas para construir, programación visual con bloques, batallas multiplayer

### Idea #32: Architecture Master: City Designer
- **Género:** Diseño urbano y arquitectura
- **Enfoque educativo:** Planificación urbana, sostenibilidad, economía, gestión de recursos
- **Tecnologías clave:** Phaser 3, Chart.js, React, Redux, A* pathfinding
- **Complejidad:** Alta (120-150 horas)
- **Valor destacado:** 500+ edificios, simulación de tráfico/contaminación, ciudades sostenibles con energía renovable

### Idea #33: Math Quest: Number Kingdom
- **Género:** Aventura matemática RPG
- **Enfoque educativo:** Aritmética, álgebra, geometría, fracciones, pensamiento lógico
- **Tecnologías clave:** Phaser 3, Web Speech API, React, Redux, GSAP
- **Complejidad:** Media (90-110 horas)
- **Valor destacado:** 6 mundos matemáticos, combate con ecuaciones, 60+ niveles progresivos, handwriting recognition

### Idea #34: Ocean Explorer: Deep Sea Adventure
- **Género:** Exploración marina y conservación
- **Enfoque educativo:** Biología marina, oceanografía, conservación oceánica, adaptaciones
- **Tecnologías clave:** Phaser 3, React, Redux, Canvas API, Web Workers
- **Complejidad:** Media (80-100 horas)
- **Valor destacado:** 200+ especies marinas, 10 zonas oceánicas (superficial→abisal), misiones de conservación

---

### Progreso General del Proyecto
**Total ideas documentadas:** 38/100 (38%)
**Ideas faltantes:** 62
**Próximo lote:** Ideas #39-#42

**Fecha de actualización:** 2026-02-17
**Cron Job ID:** 5111fe2b-a72c-427b-8985-fb7dc8f3d4f2
**Estado:** ✅ Lote 8 completado - 4 ideas nuevas agregadas
