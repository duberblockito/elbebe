# 🎮 Ideas de Juegos - 2-3 Años

## Objetivo
Investigar y documentar 100 ideas de juegos en HTML/JavaScript diseñados para niños de 2-3 años, jugables en celulares.

## Características del Rango de Edad

### Desarrollo Cognitivo y Motor
- **Lenguaje:** Forman oraciones de 2-3 palabras, vocabulario en expansión (50-200 palabras)
- **Atención:** 5-10 minutos máximo de concentración continua
- **Motoras finas:** Pueden hacer tap preciso, arrastrar objetos simples, swipe todavía difícil
- **Cognitivo:** Entienden causa-efecto básico, reconocen colores y formas simples
- **Sociales:** Juego paralelo, imitación de adultos, buscan validación/aprobación

### Motivaciones Clave
- **Independencia:** "Yo puedo hacerlo solo" - prefieren acciones que controlan directamente
- **Logro:** Celebrar pequeños éxitos, feedback inmediato
- **Aprendizaje:** Curiosidad por el lenguaje, nombres de objetos, sonidos
- **Recompensa:** Sonidos, animaciones, aplausos, emojis felices
- **Repetición:** Les gusta hacer lo mismo una y otra vez para dominarlo

### Limitaciones y Consideraciones
- **Atención limitada:** Ciclos de juego cortos (30-60 segundos)
- **Interacción simple:** Solo tap y arrastrar; swipe requiere coordinación avanzada
- **Sin texto:** Deben entenderse solo con imágenes y sonidos
- **Sin pérdida:** No hay "game over", solo redirección a intento nuevo
- **Seguridad:** Sin anuncios, sin compras, sin enlaces externos

---

## Ideas de Juegos

### Lote 1 (Ideas 1-4)
**Fecha:** 2026-02-17
**Ejecución:** 4/25

#### Idea #1: Pinta las Nubes ☁️🎨

**Concepto:**
El niño toca nubes grises en el cielo y se convierten en nubes de colores brillantes con animales escondidos dentro. Cada nube revela un animal diferente al tocarla.

**Motivación:**
- **Independencia:** El niño controla completamente la transformación con un solo tap
- **Logro:** Ver la nube cambiar instantáneamente y aparecer el animal
- **Aprendizaje:** Aprender nombres de animales en español e inglés

**Mecánica Principal:**
Pantalla con cielo azul y 5-6 nubes grises estáticas. Al tocar una nube, se expande suavemente (animación CSS de 0.5s), cambia a un color brillante (rosa, amarillo, verde, naranja, púrpura), y aparece el animal dentro con una animación de "pop". El animal hace su sonido y dice su nombre en español. Tocando el animal de nuevo, repite el sonido y nombre en inglés.

**Interacción Móvil:**
- **Tipo:** Tap (toca nube → transformación)
- **Accesibilidad:** Nubes grandes (80-100px), targets fáciles, respuesta inmediata
- **Sin requisitos de precisión:** Tap en cualquier parte de la nube funciona

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para el cielo y nubes, `<button>` elements con ARIA labels
- **JavaScript:** Vanilla JS para detección de tap, gestión de estados, CSS transitions
- **CSS:** Animaciones keyframes (expand, color-change, pop-in), responsive design (100% altura), flexbox para centrado
- **Otros:** Web Audio API para sonidos de animales, localStorage para progreso

**Características Visuales:**
- **Paleta de colores:** Azul cielo (#87CEEB), nubes grises (#D3D3D3) → colores brillantes (rosa #FF69B4, amarillo #FFD700, verde #32CD32, naranja #FFA500, púrpura #9370DB)
- **Animaciones:** Nube se expande 1.5x su tamaño (transition: transform 0.5s ease-out), animal aparece con scale 0 → 1 (keyframe animation)
- **Feedback visual:** Brillo momentáneo (box-shadow), confetti de estrellas al tocar animal
- **Personajes:** Animales estilo cartoon (gato, perro, pato, conejo, oveja, cerdo)

**Audio:**
- **Efectos de sonido:** "Pop" suave al transformar nube, "Whoosh" al expandir, sonidos de animales reales
- **Música:** Fondo instrumental suave (piano + campanitas) en loop, volumen bajo (20%)
- **Voz:** TTS (Web Speech API) para decir "¡Gato!", "¡Cat!" con voz femenina suave

**Complejidad Técnica:**
- **Nivel:** Baja
- **Tiempo estimado:** 8-12 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <5MB total size

**Valor Educativo:**
- Reconocimiento de animales
- Vocabulario bilingüe básico
- Asociación sonido-animal
- Desarrollo motor fino (tap)
- Colores y contrastes visuales

**Referencias e Inspiración:**
- [Web Speech API - speechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
- [MDN - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Touch Events API](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [PBS Kids: Animal Sounds Game](https://pbskids.org/games/animal/) (inspiración de mecánica simple)

---

#### Idea #2: Arrastra la Fruta al Plato 🍎🍌

**Concepto:**
Frutas animadas aparecen en la pantalla flotando suavemente. El niño debe arrastrar cada fruta al centro de un plato de picnic. Al soltarla correctamente, la fruta se asienta en el plato y aplaude.

**Motivación:**
- **Independencia:** El niño mueve objetos físicamente (drag-and-drop)
- **Logro:** Completar el plato con diferentes frutas
- **Aprendizaje:** Nombres de frutas y colores

**Mecánica Principal:**
Pantalla con plato blanco en el centro y frutas flotando alrededor (manzana roja, banana amarilla, naranja naranja, uva morada, fresa roja). Cada fruta tiene un movimiento flotante suave (CSS animation float 2s). El niño toca y arrastra la fruta al plato. Al soltar sobre el plato (detectado con hit-testing), la fruta se coloca en el plato con animación de "bounce", se reproduce aplauso y TTS dice el nombre en español.

**Interacción Móvil:**
- **Tipo:** Arrastrar y soltar (drag-and-drop)
- **Accesibilidad:** Frutas medianas (60-70px), plato grande (150-180px), hit-testing generoso (+20px margin)
- **Sin requisitos de precisión:** Soltar cerca del plato funciona (magnetic snap)

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements con draggable attribute o Touch API, `<img>` para frutas
- **JavaScript:** Touch events (touchstart, touchmove, touchend), hit-testing con getBoundingClientRect(), gestión de estado de frutas
- **CSS:** Animaciones keyframes (float, bounce-in, snap), transitions para drag feedback, responsive layout (flexbox), transform para movimiento
- **Otros:** Web Audio API para aplausos, localStorage para trackear frutas completadas

**Características Visuales:**
- **Paleta de colores:** Fondo verde pasto (#90EE90), plato blanco (#FFFFFF), frutas colores vibrantes naturales
- **Animaciones:** Frutas flotan suavemente (animation: float 2s ease-in-out infinite), al arrastrar: scale 1.1 + shadow, al soltar: bounce (scale 1.2 → 1.0, 0.3s)
- **Feedback visual:** Fruta brilla al tocar, plato brilla cuando fruta está sobre él, partículas de confetti al completar
- **Personajes:** Frutas con caritas sonrientes (SVG o emoji styling)

**Audio:**
- **Efectos de sonido:** "Boing" al soltar fruta correctamente, aplausos completos, "Oops" sonido suave si suelta fuera del plato
- **Música:** Música de picnic alegre (guitarra + tambor ligero), volumen bajo (25%)
- **Voz:** TTS para "¡Manzana!", "¡Banana!", "¡Naranja!", "¡Uva!", "¡Fresa!" en español

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 12-16 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <8MB total size, smooth drag en low-end devices

**Valor Educativo:**
- Coordinación mano-ojo (drag-and-drop)
- Reconocimiento de frutas
- Colores (rojo, amarillo, naranja, morado)
- Vocabulario de alimentos
- Conteo (1-5 frutas)

**Referencias e Inspiración:**
- [HTML5 Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Touch Events - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [CSS Transforms - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Sago Mini: Picnic Game](https://sagomini.com/) (inspiración de mecánica de picnic)

---

#### Idea #3: Los Animales Cantan 🐵🐶🐱

**Concepto:**
Pantalla con 4-6 animales (mono, perro, gato, vaca, pato, cerdo). Cada animal tiene una nota musical sobre su cabeza. Al tocar un animal, hace su sonido característico y la nota brilla. Si tocas en secuencia (1-2-3), tocan una melodía corta.

**Motivación:**
- **Independencia:** El niño crea su propia música tocando animales
- **Logro:** Hacer sonar secuencias de sonidos
- **Aprendizaje:** Asociar animales con sonidos y melodías simples

**Mecánica Principal:**
Animales en fila horizontal, cada uno con número (1, 2, 3, 4) y nota musical (Do, Re, Mi, Fa). Al tocar animal 1, hace "¡Ooh ooh!" (mono) y nota Do brilla. Animal 2: "¡Guau!" (perro) + nota Re, etc. Si el niño toca 1-2-3-4 en orden, los animales hacen un mini concierto (todos suenan juntos en secuencia) y confetti aparece. Si toca en cualquier orden, solo suenan individualmente.

**Interacción Móvil:**
- **Tipo:** Tap individual (toca animal → sonido)
- **Accesibilidad:** Animales medianos-grandes (70-80px), notas visibles sobre ellos, targets fáciles
- **Sin requisitos de secuencia:** Puede tocar en cualquier orden

**Tecnologías Requeridas:**
- **HTML5:** `<button>` elements con ARIA labels, SVG para notas musicales, `<audio>` para sonidos pre-grabados
- **JavaScript:** Event listeners para click/tap, gestión de secuencia (array de índices), Web Audio API para mezclar sonidos, timeout para detectar secuencia (2s ventana)
- **CSS:** Animaciones (scale al tocar, glow en notas), responsive layout (flexbox wrap), gradient para fondo
- **Otros:** Web Audio API para sincronización, localStorage para desbloquear melodías adicionales

**Características Visuales:**
- **Paleta de colores:** Fondo arcoíris gradiente suave, animales colores brillantes (mono marrón, perro café, gato naranja, vaca blanco-negro), notas doradas (#FFD700)
- **Animaciones:** Animal se levanta al tocar (scale 1.1 + translateY -10px), nota brilla (animation: glow 0.5s), confetti al completar secuencia
- **Feedback visual:** Nota se ilumina con color del animal, partículas de música (♪ ♫ ♭) flotando
- **Personajes:** Animales cartoon con ojos grandes y sonrisa amigable

**Audio:**
- **Efectos de sonido:** Sonidos de animales reales (mono: "ooh-ooh", perro: "guau-guau", gato: "miau", vaca: "muuu", pato: "cuac-cuac", cerdo: "oink-oink")
- **Música:** Fondo instrumental suave (piano + flauta), volumen bajo (30%)
- **Melodía:** Secuencia 1-2-3-4 toca "Do-Re-Mi-Fa" melodía corta (3 segundos) con armonía

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <10MB total size, bajo latency audio (<50ms)

**Valor Educativo:**
- Asociación animal-sonido
- Nociones básicas de música (notas Do, Re, Mi, Fa)
- Secuenciación (1-2-3-4)
- Memoria (recordar orden para mini concierto)
- Creatividad (tocar en cualquier orden)

**Referencias e Inspiración:**
- [Web Audio API - OscillatorNode](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)
- [HTML5 Audio Best Practices](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [Baby Einstein - Animal Sounds](https://www.babyeinstein.com/) (inspiración de educación musical)
- [Kiddopia: Animal Music Game](https://kiddopia.com/) (referencia similar)

---

#### Idea #4: Los Bloques Caen 🧱🏗️

**Concepto:**
Bloques de colores con formas (triángulo, círculo, cuadrado) caen suavemente desde arriba. El niño toca un bloque antes de que toque el fondo, y el bloque "explota" en confetti colorido y hace un sonido divertido ("¡Plaf!", "¡Boom!", "¡Plop!").

**Motivación:**
- **Independencia:** El niño atrapa bloques con un tap rápido
- **Logro:** Atrapar bloques antes de que desaparezcan
- **Aprendizaje:** Reconocer formas (triángulo, círculo, cuadrado)

**Mecánica Principal:**
Bloques caen desde la parte superior con velocidades diferentes (velocidad = altura de pantalla ÷ 3 segundos). Cada bloque tiene forma (triángulo rojo, círculo azul, cuadrado verde). Al tocar bloque, se reproduce sonido divertido (aleatorio de ["¡Plaf!", "¡Boom!", "¡Plop!", "¡Zas!"]) y explota en confetti de su color. Si bloque toca el fondo, desaparece suavemente (fade out) sin sonido. No hay pérdida ni "game over".

**Interacción Móvil:**
- **Tipo:** Tap (toca bloque → explosión)
- **Accesibilidad:** Bloques medianos (50-60px), movimiento lento (3-4s para caer), targets fáciles
- **Sin penalización:** Bloques que tocan fondo simplemente desaparecen

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para animación de bloques caendo, requestAnimationFrame para 60 FPS
- **JavaScript:** Clase Block con propiedades (x, y, speed, shape, color, velocity), game loop simple, detección de tap en canvas, confetti particle system
- **CSS:** Fullscreen canvas (100% height/width), no scroll, overlay de texto simple opcional
- **Otros:** Web Audio API para sonidos explosión, localStorage para trackear bloques atrapados

**Características Visuales:**
- **Paleta de colores:** Fondo cielo claro (#F0F8FF), bloques colores brillantes (triángulo rojo #FF4444, círculo azul #4444FF, cuadrado verde #44FF44), confetti colores mezclados
- **Animaciones:** Bloques caen con gravedad realista (aceleración), al explotar: 20-30 partículas de confetti (animation: expand 0.5s + fade), fade out al tocar fondo
- **Feedback visual:** Brillo momentáneo al tocar, confetti colorido, partículas de formas (△ ○ □) flotando
- **Personajes:** Bloques con caritas sonrientes simples (emoji-style)

**Audio:**
- **Efectos de sonido:** Explosiones divertidas (aleatorio de 4 sonidos), sin sonido al tocar fondo
- **Música:** Fondo instrumental alegre (tambor + campanitas), volumen bajo (20%)
- **Sin voz:** Sin TTS para mantener ritmo rápido

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 16-20 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <12MB total size, smooth animation con 20+ bloques en pantalla

**Valor Educativo:**
- Coordinación mano-ojo (tap rápido)
- Reconocimiento de formas (triángulo, círculo, cuadrado)
- Noción de gravedad y movimiento
- Tiempo y velocidad (bloques caen, atrapar rápido)
- Colores y contrastes visuales

**Referencias e Inspiración:**
- [HTML5 Canvas Animation Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Confetti Effect Tutorial](https://www.kirupa.com/html5/confetti.htm)
- [Sago Mini: Blocks Game](https://sagomini.com/) (inspiración de bloques interactivos)

---

### Lote 2 (Ideas 5-8)
**Fecha:** 2026-02-17
**Ejecución:** 4/25

#### Idea #5: Apila los Animales 🐘🦒🦁

**Concepto:**
El niño toca animales que aparecen en la parte inferior de la pantalla y se apilan uno encima del otro formando una torre. Cada animal se coloca encima del anterior con una animación suave de "plop". Cuando la torre tiene 5 animales, todos hacen un sonido alegre juntos y aparecen aplausos.

**Motivación:**
- **Independencia:** El niño crea su propia torre tocando animales
- **Logro:** Ver la torre crecer y completarse
- **Aprendizaje:** Nombres de animales grandes y secuenciación

**Mecánica Principal:**
Pantalla con base de torre en el centro (rectángulo verde pasto) y animales disponibles en la parte inferior (elefante, jirafa, león, hipopótamo, cebra). Al tocar un animal, se anima hacia la torre y se apila encima (con animación de salto + plop). Los animales se apilan en orden tocado. Al llegar a 5 animales, todos se sacuden felices y aplauden. Toque en la torre reinicia el juego.

**Interacción Móvil:**
- **Tipo:** Tap individual (toca animal → apilar)
- **Accesibilidad:** Animales grandes (80-90px), base de torre ancha (120px), targets muy fáciles
- **Sin requisitos de precisión:** Tap en cualquier parte del animal funciona

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para animales y torre, flexbox para layout, ARIA labels
- **JavaScript:** Event listeners, array de animales en torre, CSS transitions para animación de apilar, detección de colisión simple
- **CSS:** Animaciones keyframes (bounce-in, stack-up, shake), transforms para movimiento, responsive design (100% altura)
- **Otros:** Web Audio API para sonidos, localStorage para trackear altura máxima

**Características Visuales:**
- **Paleta de colores:** Fondo cielo azul claro (#87CEEB), torre base verde (#90EE90), animales colores naturales (elefante gris, jirafa amarillo-manchado, león dorado, hipopótamo púrpura, cebra blanco-negro)
- **Animaciones:** Animal salta hacia torre (translateY -100px → 0, 0.5s), al llegar: bounce (scale 1.2 → 1.0), al completar 5: todos se sacuden (shake 0.3s)
- **Feedback visual:** Brillo al tocar animal, sombra debajo de torre, confetti al completar
- **Personajes:** Animales estilo cartoon con ojos grandes y sonrisa

**Audio:**
- **Efectos de sonido:** "Boing" al apilar animal, aplausos completos al completar torre, "Woohoo!" al reiniciar
- **Música:** Fondo instrumental alegre (trompeta + tambor), volumen bajo (25%)
- **Voz:** TTS para "¡Elefante!", "¡Jirafa!", "¡León!", "¡Hipopótamo!", "¡Zebra!" en español

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 10-14 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <8MB total size

**Valor Educativo:**
- Coordinación mano-ojo (tap + timing)
- Secuenciación (apilar en orden)
- Reconocimiento de animales grandes
- Concepto de altura y acumulación
- Vocabulario de animales

**Referencias e Inspiración:**
- [CSS Transform - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Flexbox Layout - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Sago Mini: Tower Game](https://sagomini.com/) (inspiración de apilar)
- [PBS Kids: Stack Animals](https://pbskids.org/games/) (referencia similar)

---

#### Idea #6: Los Carros Vamos 🚗🚚🚜

**Concepto:**
Vehículos de colores aparecen en una carretera animada que atraviesa la pantalla. El niño toca un vehículo y este acelera hacia la derecha con un sonido de motor ("Vroom!", "Bruum!", "Rrrr!"). Al salir de la pantalla, cuenta uno y aparece un nuevo vehículo.

**Motivación:**
- **Independencia:** El niño hace que los vehículos se muevan
- **Logro:** Contar cuántos vehículos pasaron
- **Aprendizaje:** Nombres de vehículos y sonidos característicos

**Mecánica Principal:**
Pantalla con carretera horizontal (gris con líneas blancas) y cielo arriba. Vehículos aparecen en el lado izquierdo y se mueven lentamente hacia la derecha (velocidad base: 20px/s). Al tocar un vehículo, acelera (5x velocidad) con sonido de motor y sale de pantalla. Contador en esquina: "🚗 5". Vehículos: carro rojo, camión azul, tractor verde, autobús amarillo, moto morada. Cada uno tiene sonido diferente.

**Interacción Móvil:**
- **Tipo:** Tap (toca vehículo → acelera)
- **Accesibilidad:** Vehículos grandes (70-80px), carretera ancha (200px), targets generosos
- **Sin requisitos de precisión:** Tap en cualquier parte del vehículo funciona

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para carretera y vehículos, requestAnimationFrame para animación suave
- **JavaScript:** Clase Vehicle con propiedades (x, y, speed, type, color), game loop, detección de tap en canvas, contador
- **CSS:** Fullscreen canvas (100% height/width), overlay de contador en esquina
- **Otros:** Web Audio API para sonidos de motores, localStorage para trackear count máximo

**Características Visuales:**
- **Paleta de colores:** Fondo cielo (#87CEEB), carretera gris (#708090), línea blanca (#FFFFFF), vehículos colores vibrantes (rojo #FF4444, azul #4444FF, verde #44FF44, amarillo #FFFF00, morado #9932CC)
- **Animaciones:** Vehículos se mueven a velocidad base (20px/s), al tocar: aceleran (100px/s) con motion blur (opcional), ruedas giran
- **Feedback visual:** Vehículo brilla al tocar, contador aumenta con animación, partículas de humo al acelerar
- **Personajes:** Vehículos con caritas y ojos grandes

**Audio:**
- **Efectos de sonido:** Motores: carro ("Vroom!"), camión ("Bruum!"), tractor ("Rrrr!"), autobús ("Puuuf!"), moto ("Bzzzz!")
- **Música:** Fondo instrumental de carretera (guitarra + batería ligera), volumen bajo (20%)
- **Voz:** TTS para "¡Carro!", "¡Camión!", "¡Tractor!", "¡Autobús!", "¡Moto!" en español

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 12-16 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <10MB total size, smooth animation con 5+ vehículos

**Valor Educativo:**
- Coordinación mano-ojo (tap rápido)
- Conteo básico (1-10)
- Reconocimiento de vehículos
- Sonidos característicos
- Concepto de movimiento y velocidad

**Referencias e Inspiración:**
- [Canvas Animation - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Cars Game](https://sagomini.com/) (inspiración de vehículos)
- [PBS Kids: Vehicle Sounds](https://pbskids.org/games/) (referencia similar)

---

#### Idea #7: Mezcla los Colores 🎨🌈

**Concepto:**
Gotas de colores (rojo, amarillo, azul) caen suavemente desde arriba. El niño toca una gota y esta cae al fondo, creando un charco de color. Si dos gotas de diferentes colores se mezclan en el fondo, crean un nuevo color (rojo + amarillo = naranja, azul + amarillo = verde, rojo + azul = morado).

**Motivación:**
- **Independencia:** El niño crea colores nuevos tocando gotas
- **Logro:** Ver colores mezclarse y crear nuevos
- **Aprendizaje:** Conceptos básicos de mezcla de colores

**Mecánica Principal:**
Gotas caen desde la parte superior con movimiento suave (gravedad baja). Al tocar una gota, esta cae al fondo (velocidad aumentada) y forma un charco en el fondo de la pantalla. Si dos charcos de diferentes colores se tocan, se mezclan animadamente y crean un charco del color resultante. Toque en charcos grandes los limpia (reinicia mezcla).

**Interacción Móvil:**
- **Tipo:** Tap (toca gota → caer al fondo)
- **Accesibilidad:** Gotas grandes (50-60px), movimiento lento (2-3s para caer), targets fáciles
- **Sin penalización:** Gotas que no se tocan siguen cayendo lentamente

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para gotas y charcos, requestAnimationFrame para 60 FPS, detección de colisión entre charcos
- **JavaScript:** Clases Drop (gota) y Puddle (charco), sistema de mezcla de colores (hexadecimal blending), game loop, detección de tap
- **CSS:** Fullscreen canvas (100% height/width), no scroll
- **Otros:** Web Audio API para sonidos de goteo, localStorage para desbloquear colores especiales

**Características Visuales:**
- **Paleta de colores:** Fondo blanco (#FFFFFF) o pasto claro, gotas colores base (rojo #FF4444, amarillo #FFFF00, azul #4444FF), mezclas (naranja #FFA500, verde #00FF00, morado #800080)
- **Animaciones:** Gotas caen con gravedad suave, al tocar fondo: se expanden en charco (scale 1 → 2, 0.5s), al mezclar: transición de color (transition 0.3s), partículas de agua al mezclar
- **Feedback visual:** Gota brilla al tocar, charcos pulsan al mezclarse, ondas de agua
- **Personajes:** Gotas con caritas simples, charcos con bordes brillantes

**Audio:**
- **Efectos de sonido:** "Plop" al tocar gota, "Splash" al caer al fondo, "Shimmer" al mezclar colores
- **Música:** Fondo instrumental acuático (arpa + campanitas), volumen muy bajo (15%)
- **Sin voz:** Sin TTS para mantener ritmo de mezcla

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 16-20 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <10MB total size, smooth animation con 15+ gotas

**Valor Educativo:**
- Conceptos de mezcla de colores
- Noción de causa-efecto (tocar → caer → mezclar)
- Coordinación mano-ojo
- Reconocimiento de colores
- Creatividad (experimentar combinaciones)

**Referencias e Inspiración:**
- [Color Mixing Algorithms](https://www.fastcompany.com/90269695/how-to-mix-colors-programmatically)
- [Canvas Collision Detection](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)
- [Sago Mini: Color Mixing](https://sagomini.com/) (inspiración de colores)
- [Toca Boca: Color Mixing](https://tocaboca.com/) (referencia similar)

---

#### Idea #8: El Ritmo de los Animales 🥁🐔🐮

**Concepto:**
Animales aparecen en pantalla y el niño toca el ritmo de sus sonidos. Cada animal tiene un patrón de sonido simple (2-3 golpes). Al tocar en el ritmo correcto, el animal baila y felicita. No hay "fallo", solo el animal repite el patrón.

**Motivación:**
- **Independencia:** El niño toca el ritmo libremente
- **Logro:** Ver el animal bailar al seguir el ritmo
- **Aprendizaje:** Conceptos básicos de ritmo y timing

**Mecánica Principal:**
Animal aparece en centro con puntos de ritmo sobre su cabeza (1-2-3). El animal hace su patrón de sonido (ej: "Cuac-cuac-cuac" con pausas). Puntos brillan en sincronía. El niño toca la pantalla al mismo ritmo. Si toca dentro de ventana de timing (+/- 0.3s), el animal baila y aplaude. Si toca fuera del ritmo, el animal repite el patrón amablemente ("Otra vez... Cuac-cuac-cuac").

**Interacción Móvil:**
- **Tipo:** Tap rítmico (toca en ritmo del animal)
- **Accesibilidad:** Animal grande (100-120px), puntos visibles, pantalla entera es trigger
- **Sin penalización:** El animal siempre repite el patrón amablemente

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para animal y puntos, event listeners para tap, Web Audio API para síntesis de sonido
- **JavaScript:** Sistema de timing (performance.now() para medir latencia), detección de ventana de ritmo (+/- 300ms), array de patrones de sonido
- **CSS:** Animaciones keyframes (bounce, dance, pulse), responsive layout (flexbox centrado)
- **Otros:** Web Audio API para síntesis de sonidos, localStorage para trackear ritmos completados

**Características Visuales:**
- **Paleta de colores:** Fondo gradiente suave (rosa → amarillo), animales colores brillantes, puntos dorados (#FFD700)
- **Animaciones:** Animal hace "bounce" al hacer sonido (translateY -5px, 0.2s), puntos brillan en sincronía (scale 1.3 → 1.0), al completar ritmo: animal baila (dance 1s) + confetti
- **Feedback visual:** Puntos se iluminan al tocar correctamente, animal se sacuda si toca fuera del ritmo, partículas de música (♪ ♫)
- **Personajes:** Animales con caritas expresivas y ojos grandes

**Audio:**
- **Efectos de sonido:** Patrón de sonido del animal (ej: pato "Cuac-cuac-cuac" con pausas), "Ding!" al tocar correcto, "Hmm..." al tocar fuera de ritmo, aplausos al completar
- **Música:** Sin música de fondo (para que el niño se enfoque en el ritmo del animal)
- **Voz:** TTS para "¡Muy bien!", "¡Otra vez!" con voz femenina suave

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 18-22 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <12MB total size, baja latencia audio (<30ms), timing preciso (+/- 50ms)

**Valor Educativo:**
- Conceptos básicos de ritmo y timing
- Coordinación mano-ojo
- Escucha activa
- Memoria de corto plazo (recordar patrón)
- Sensibilidad musical

**Referencias e Inspiración:**
- [Web Audio API - Timing](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices)
- [performance.now() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)
- [Baby Einstein: Rhythm Games](https://www.babyeinstein.com/) (inspiración de ritmo)
- [Kiddopia: Musical Animals](https://kiddopia.com/) (referencia similar)

---

### Lote 3 (Ideas 9-12)
**Fecha:** 2026-02-17
**Ejecución:** 4/25

#### Idea #9: Esconde y Busca Animales 🐰🦊🐻

**Concepto:**
Animales aparecen en la pantalla y se esconden detrás de objetos simples (árbol, casa, roca). El niño toca el objeto para revelar el animal escondido. El animal asoma la cabeza y hace un sonido divertido.

**Motivación:**
- **Independencia:** El niño descubre animales escondidos por sí solo
- **Logro:** Encontrar todos los animales escondidos
- **Aprendizaje:** Nombres de animales y ubicación espacial

**Mecánica Principal:**
Pantalla con 5-6 objetos en diferentes posiciones (árbol grande a la izquierda, casa al centro, roca a la derecha, arbusto arriba, seta abajo). Animales están escondidos detrás (conejo detrás del árbol, zorro detrás de la casa, oso detrás de la roca, etc.). Al tocar un objeto, este se mueve suavemente a la izquierda (transition: transform 0.5s) y el animal asoma la cabeza con animación de "peek". El animal hace su sonido característico y dice su nombre en español. Tocando el animal de nuevo, se esconde de nuevo.

**Interacción Móvil:**
- **Tipo:** Tap (toca objeto → revelar animal)
- **Accesibilidad:** Objetos grandes (80-100px), animales medianos (50-60px), targets fáciles
- **Sin requisitos de precisión:** Tap en cualquier parte del objeto funciona

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para objetos y animales, z-index para capas (animal detrás del objeto), ARIA labels
- **JavaScript:** Event listeners para tap, gestión de estado (escondido/revelado), CSS transitions para animación de descubrir
- **CSS:** Animaciones keyframes (peek, hide, slide), transforms para movimiento de objetos, responsive layout (flexbox)
- **Otros:** Web Audio API para sonidos de animales, localStorage para trackeer animales encontrados

**Características Visuales:**
- **Paleta de colores:** Fondo prado verde (#90EE90), objetos naturales (árbol verde #228B22, casa roja #DC143C, roca gris #696969), animales colores brillantes (conejo blanco #FFFFFF, zorro naranja #FFA500, oso marrón #8B4513)
- **Animaciones:** Objeto se desliza (translateX -40px, 0.5s), animal asoma (scale 0.5 → 1.0 + translateY 20px, 0.3s), al esconderse: reverso de asomo
- **Feedback visual:** Objeto brilla al tocar, animal parpadea cuando se revela, partículas de hojas al descubrir
- **Personajes:** Animales estilo cartoon con ojos grandes y sonrisa

**Audio:**
- **Efectos de sonido:** "Whoosh" al deslizar objeto, "Peek-a-boo!" (voz suave) al revelar animal, sonidos de animales (conejo: snif, zorro: yip, oso: grumble)
- **Música:** Fondo instrumental de bosque (piano + flauta), volumen bajo (20%)
- **Voz:** TTS para "¡Conejo!", "¡Zorro!", "¡Oso!", "¡Ardilla!", "¡Búho!" en español

**Complejidad Técnica:**
- **Nivel:** Baja-Media
- **Tiempo estimado:** 10-14 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <6MB total size

**Valor Educativo:**
- Ubicación espacial (detrás de, encima de)
- Reconocimiento de animales
- Vocabulario de naturaleza
- Memoria de objetos escondidos
- Habilidades de observación

**Referencias e Inspiración:**
- [CSS Transforms - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Z-index and Layering - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [Sago Mini: Hide and Seek](https://sagomini.com/) (inspiración de esconder-buscar)
- [PBS Kids: Peek-a-Boo Animals](https://pbskids.org/games/) (referencia similar)

---

#### Idea #10: Viste al Osito 🧸👕👖

**Concepto:**
Un osito peluche aparece en el centro de la pantalla. Ropa y accesorios (camisa, pantalones, gorro, zapatos) flotan alrededor. El niño toca una prenda y esta vuela al osito, colocándose automáticamente en la posición correcta. Al vestir completamente al osito, este hace una pose feliz y aplaude.

**Motivación:**
- **Independencia:** El niño viste al osito tocando prendas
- **Logro:** Ver al osito completamente vestido
- **Aprendizaje:** Nombres de ropa y partes del cuerpo

**Mecánica Principal:**
Osito desnudo en centro (tamaño 120-140px). 4 prendas flotando alrededor: camisa roja (arriba), pantalones azules (abajo), gorro amarillo (arriba), zapatos morados (abajo). Al tocar una prenda, esta se anima hacia el osito (curva bezier suave) y se coloca en la posición correcta. Cada prenda hace un sonido suave al colocarse. Al vestir las 4 prendas, el osito hace una pose (brazos arriba, sonrisa grande) y aplaude. Toque en el osito reinicia el juego.

**Interacción Móvil:**
- **Tipo:** Tap (toca prenda → viste al osito)
- **Accesibilidad:** Prendas grandes (60-70px), osito muy grande (120-140px), targets generosos
- **Sin requisitos de precisión:** Tap en cualquier parte de la prenda funciona

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para osito y prendas, absolute positioning para prendas flotantes, ARIA labels
- **JavaScript:** Event listeners para tap, animaciones con CSS transforms, gestión de estado (prendas colocadas), detección de completado
- **CSS:** Animaciones keyframes (float, dress-up, pose-happy), bezier curves para movimiento suave, transforms para colocación
- **Otros:** Web Audio API para sonidos de ropa, localStorage para trackeer ositos vestidos

**Características Visuales:**
- **Paleta de colores:** Fondo habitación suave (#FFF8DC), osito marrón (#8B4513), prendas colores vibrantes (camisa roja #FF4444, pantalones azul #4444FF, gorro amarillo #FFFF00, zapatos morado #9932CC)
- **Animaciones:** Prendas flotan suavemente (float 3s ease-in-out infinite), al vestir: movimiento curvo hacia osito (0.6s), al completar: osito hace pose (translateY -10px + rotate 10deg, 0.5s)
- **Feedback visual:** Prenda brilla al tocar, osito se ilumina cuando se viste completamente, confetti de corazones al completar
- **Personajes:** Osito peluche con botones grandes y sonrisa amigable

**Audio:**
- **Efectos de sonido:** "Shhff" al colocar prenda, "Click" al ajustar, aplausos completos al completar vestuario
- **Música:** Fondo instrumental infantil (xilófono + piano), volumen bajo (25%)
- **Voz:** TTS para "¡Camisa!", "¡Pantalones!", "¡Gorro!", "¡Zapatos!" en español

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <10MB total size

**Valor Educativo:**
- Nombres de ropa y accesorios
- Partes del cuerpo (cabeza, torso, pies)
- Concepto de vestirse
- Coordinación mano-ojo
- Vocabulario de vestimenta

**Referencias e Inspiración:**
- [CSS Bezier Curves](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- [Absolute Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Toca Boca: Dress Up Games](https://tocaboca.com/) (inspiración de vestir)
- [Sago Mini: Dress the Bear](https://sagomini.com/) (referencia similar)

---

#### Idea #11: Une los Puntos ✨⭐🔵

**Concepto:**
Estrellas brillantes aparecen en pantalla conectadas por líneas punteadas. El niño toca las estrellas en orden (1, 2, 3, 4) y las líneas se iluminan conectando las estrellas. Al conectar todas, aparece una figura sorpresa (forma simple: corazón, estrella, sol, luna).

**Motivación:**
- **Independencia:** El niño crea una figura tocando estrellas
- **Logro:** Ver la figura completarse brillando
- **Aprendizaje:** Secuencia numérica (1, 2, 3, 4) y formas

**Mecánica Principal:**
4 estrellas aparecen en pantalla con números grandes (1, 2, 3, 4) en el centro. Líneas punteadas conectan las estrellas en orden. Al tocar estrella 1, la línea hacia la estrella 2 se ilumina suavemente (animación de stroke-dashoffset). Tocar estrella 2 ilumina línea hacia 3, etc. Al tocar la estrella 4, todas las líneas brillan juntas y aparece una figura en el centro (corazón, estrella, sol, luna) con animación de "pop" y confetti. Toque en figura reinicia el juego.

**Interacción Móvil:**
- **Tipo:** Tap secuencial (toca estrellas en orden 1→2→3→4)
- **Accesibilidad:** Estrellas grandes (70-80px), números muy visibles (texto 24-28px), targets fáciles
- **Sin penalización:** Si toca fuera de orden, no pasa nada (espera el toque correcto)

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` o `<svg>` para estrellas y líneas, `<div>` para números y figura final
- **JavaScript:** Event listeners para tap, gestión de secuencia (currentDot = 1, 2, 3, 4), animación de líneas (stroke-dashoffset), detección de completado
- **CSS:** Animaciones keyframes (glow, pop, shake), responsive layout (flexbox centrado)
- **Otros:** Web Audio API para sonidos de conexión, localStorage para trackeer figuras completadas

**Características Visuales:**
- **Paleta de colores:** Fondo noche estrellada (#191970), estrellas doradas brillantes (#FFD700), números blanco (#FFFFFF), figuras colores pastel (corazón rosa #FFB6C1, estrella amarillo #FFD700, sol naranja #FFA500, luna plateado #C0C0C0)
- **Animaciones:** Estrella brilla al tocar (animation: glow 0.5s), línea se ilumina (stroke-dashoffset 0→100, 0.3s), figura aparece con pop (scale 0→1.2→1.0, 0.5s), confetti al completar
- **Feedback visual:** Estrella se ilumina al tocar correctamente, líneas brillan gradualmente, figura pulsa al completar
- **Personajes:** Sin personajes, solo figuras geométricas brillantes

**Audio:**
- **Efectos de sonido:** "Ding" al tocar estrella correcta, "Buzz" suave si toca fuera de orden, "Ta-da!" al completar figura
- **Música:** Fondo instrumental mágico (campanitas + arpa), volumen muy bajo (15%)
- **Voz:** TTS para "¡Uno!", "¡Dos!", "¡Tres!", "¡Cuatro!" al tocar cada estrella

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 12-16 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <8MB total size

**Valor Educativo:**
- Secuencia numérica (1-4)
- Reconocimiento de formas (corazón, estrella, sol, luna)
- Habilidades de observación
- Coordinación mano-ojo
- Concepto de completar una figura

**Referencias e Inspiración:**
- [SVG Stroke Animation](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Stroke_animation)
- [Canvas Path Drawing](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
- [Sago Mini: Connect the Dots](https://sagomini.com/) (inspiración de unir puntos)
- [PBS Kids: Dot to Dot](https://pbskids.org/games/) (referencia similar)

---

#### Idea #12: Burbujas Pop 💙💚💛

**Concepto:**
Burbujas de colores aparecen flotando suavemente desde el fondo de la pantalla hacia arriba. El niño toca una burbuja y esta hace "¡Pop!" con una explosión de confetti colorido y sonido divertido. Las burbujas tienen tamaños y velocidades diferentes.

**Motivación:**
- **Independencia:** El niño explota burbujas tocándolas
- **Logro:** Ver la explosión de colores y confetti
- **Aprendizaje:** Nociones de tamaño (grande, pequeño) y velocidad

**Mecánica Principal:**
Burbujas aparecen desde el fondo y flotan hacia arriba con movimiento suave (velocidad: 30-50px/s según tamaño). Cada burbuja tiene color diferente (azul, verde, amarillo, rosa, púrpura) y tamaño variado (40-80px). Al tocar una burbuja, esta hace "¡Pop!" (efecto de sonido), se expande brevemente (scale 1.2→0, 0.2s) y explota en 20-30 partículas de confetti de su color. Las partículas caen con gravedad suave y desaparecen. No hay límite de burbujas; siguen apareciendo.

**Interacción Móvil:**
- **Tipo:** Tap (toca burbuja → ¡Pop!)
- **Accesibilidad:** Burbujas medianas-grandes (40-80px), movimiento lento (2-3s para cruzar pantalla), targets fáciles
- **Sin penalización:** Burbujas que no se tocan siguen flotando hacia arriba y desaparecen

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para burbujas y confetti, requestAnimationFrame para 60 FPS, detección de tap en canvas
- **JavaScript:** Clase Bubble con propiedades (x, y, size, color, speed), sistema de partículas para confetti, game loop simple, hit-testing circular
- **CSS:** Fullscreen canvas (100% height/width), no scroll
- **Otros:** Web Audio API para sonidos de pop, localStorage para trackeer burbujas explotadas

**Características Visuales:**
- **Paleta de colores:** Fondo gradiente cielo-azul (#87CEEB → #E0F6FF), burbujas colores translúcidos (azul #00BFFF, verde #00FF7F, amarillo #FFD700, rosa #FF69B4, púrpura #DA70D6), confetti colores sólidos
- **Animaciones:** Burbujas flotan hacia arriba con movimiento ondulante (sine wave), al explotar: partículas se expanden (0.5s) + caen con gravedad, burbuja desaparece (scale 1.2→0)
- **Feedback visual:** Burbuja brilla al tocar (box-shadow), reflejos de luz en superficie, confetti cae suavemente y se desvanece
- **Personajes:** Sin personajes, solo burbujas con reflejos brillantes

**Audio:**
- **Efectos de sonido:** "Pop" suave al explotar burbuja (variación tonal según tamaño: burbujas grandes = pop más grave), "Whoosh" si burbuja desaparece sin explotar
- **Música:** Fondo instrumental de burbujas (piano + campanitas cristalinas), volumen muy bajo (15%)
- **Sin voz:** Sin TTS para mantener ritmo de juego

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 10-14 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <8MB total size, smooth animation con 15+ burbujas simultáneas

**Valor Educativo:**
- Coordinación mano-ojo (tap rápido)
- Nociones de tamaño (grande vs pequeño)
- Concepto de movimiento (flotar hacia arriba)
- Causa-efecto (tocar → explotar)
- Colores y contrastes visuales

**Referencias e Inspiración:**
- [Canvas Particle Systems](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [Circular Hit Detection](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection/Circular_collision_detection)
- [Sago Mini: Bubbles](https://sagomini.com/) (inspiración de burbujas)
- [Toca Boca: Bubble Pop](https://tocaboca.com/) (referencia similar)

---

### Lote 4 (Ideas 13-16)
**Fecha:** 2026-02-17
**Ejecución:** 4/25

#### Idea #13: Alimenta al Dinosaurio 🦖🍎🥦

**Concepto:**
Un dinosaurio hambriento aparece en el centro de la pantalla con su boca abierta. Alimentos (carne, verduras, frutas) flotan alrededor. El niño toca un alimento y este vuela hacia la boca del dinosaurio. El dinosaurio mastica con animación divertida y hace un sonido satisfecho ("¡Ñam!", "¡Delicioso!").

**Motivación:**
- **Independencia:** El niño alimenta al dinosaurio tocando alimentos
- **Logro:** Ver al dinosaurio feliz después de comer
- **Aprendizaje:** Nombres de alimentos y categorías (carnívoros vs herbívoros)

**Mecánica Principal:**
Dinosaurio grande (130-150px) en centro con boca abierta animada (masticando cada 2s). Alimentos flotan alrededor: carne roja (filete), verduras verdes (brócoli, lechuga), frutas (manzana, banana). Al tocar un alimento, este vuela en curva hacia la boca del dinosaurio (0.6s). El dinosaurio mastica 2-3 veces, traga (animación de gulp) y hace sonidos de satisfacción. Contador de comidas: "🍎 10". Si toca 10 veces, el dinosaurio hace una pose feliz y aplaude.

**Interacción Móvil:**
- **Tipo:** Tap (toca alimento → alimenta al dinosaurio)
- **Accesibilidad:** Dinosaurio muy grande (130-150px), alimentos grandes (60-70px), targets generosos
- **Sin requisitos de precisión:** Tap en cualquier parte del alimento funciona

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para dinosaurio y alimentos, absolute positioning, ARIA labels
- **JavaScript:** Event listeners para tap, animaciones con CSS transforms (bezier curves para movimiento), gestión de contador, detección de completado
- **CSS:** Animaciones keyframes (chew, gulp, happy-pose), bezier curves para vuelo de alimentos, transforms para movimiento
- **Otros:** Web Audio API para sonidos de masticación, localStorage para trackeer comidas

**Características Visuales:**
- **Paleta de colores:** Fondo prehistórico simple (césped verde #90EE90 + cielo #87CEEB), dinosaurio verde (#228B22) con ojos grandes, alimentos colores vibrantes naturales (carne #DC143C, verduras #32CD32, frutas #FF6347)
- **Animaciones:** Dinosaurio mastica (scale 1.05 + translateY -5px, 0.3s), alimento vuela en curva (0.6s), al tragar: gulp (scale 1.2 → 1.0), al completar 10: pose feliz (brazos arriba + sonrisa grande)
- **Feedback visual:** Dinosaurio brilla al comer, contador aumenta con animación, confetti de comida al completar
- **Personajes:** Dinosaurio amigable con dientes grandes pero no asustadores, ojos expresivos

**Audio:**
- **Efectos de sonido:** "Munch-munch" al masticar, "Gulp" al tragar, "¡Ñam!" suave al comer, aplausos al completar 10
- **Música:** Fondo instrumental prehistórico (tambor + flauta), volumen bajo (20%)
- **Voz:** TTS para "¡Carne!", "¡Verdura!", "¡Fruta!" en español

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <12MB total size

**Valor Educativo:**
- Nombres de alimentos (carne, verduras, frutas)
- Concepto de alimentación
- Conteo básico (1-10)
- Coordinación mano-ojo
- Animales prehistóricos

**Referencias e Inspiración:**
- [CSS Bezier Curves - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- [Absolute Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Sago Mini: Feed the Animals](https://sagomini.com/) (inspiración de alimentar)
- [PBS Kids: Dinosaur Train](https://pbskids.org/games/dinosaur/) (referencia similar)

---

#### Idea #14: El Sol y la Luna ☀️🌙⭐

**Concepto:**
El niño toca el cielo para cambiar entre día y noche. Durante el día, el sol brilla y pájaros vuelan. Durante la noche, la Luna aparece con estrellas y búho ulula. El niño toca alternadamente para ver ambos ciclos.

**Motivación:**
- **Independencia:** El niño controla el ciclo día/noche tocando el cielo
- **Logro:** Ver el cambio completo de ambiente
- **Aprendizaje:** Conceptos de día/noche y astronomía básica

**Mecánica Principal:**
Pantalla ocupa 100% de la pantalla. Inicia en día: sol en esquina superior derecha, cielo azul claro, nubes blancas, pájaros volando. Al tocar el cielo, transición suave a noche (2s): sol baja, Luna sube, cielo cambia a azul oscuro, estrellas aparecen, búho sale. Toque de nuevo, transición inversa a día. Cada ciclo tiene sonidos diferentes (día: pájaros, noche: grillos + búho). No hay límite de ciclos; el niño puede cambiar cuantas veces quiera.

**Interacción Móvil:**
- **Tipo:** Tap en pantalla entera (toca cielo → cambia día/noche)
- **Accesibilidad:** Toda la pantalla es trigger (100% área), transición suave visible
- **Sin requisitos de precisión:** Tap en cualquier parte funciona

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para cielo, sol, Luna, estrellas, pájaros, búho, requestAnimationFrame para transiciones suaves
- **JavaScript:** Estado de día/noche, sistema de transición (gradual change de colores), animación de objetos (pájaros volando, estrellas titilando), detección de tap
- **CSS:** Fullscreen canvas (100% height/width), no scroll
- **Otros:** Web Audio API para sonidos de ambiente, localStorage para trackeer ciclos

**Características Visuales:**
- **Paleta de colores día:** Cielo azul claro (#87CEEB), sol amarillo brillante (#FFD700), nubes blancas (#FFFFFF), pájaros marrones/gris
- **Paleta de colores noche:** Cielo azul oscuro (#191970), Luna plateada (#C0C0C0), estrellas blancas (#FFFFFF), búho marrón
- **Animaciones:** Transición suave de día a noche (2s, CSS opacity), sol desciende, Luna asciende, estrellas titilan (opacity 0.5-1.0, 1s), pájaros vuelan en movimiento ondulante
- **Feedback visual:** Cielo brilla al tocar, transición gradual visible, partículas de luz al cambiar
- **Personajes:** Sol con cara feliz, Luna con crateres simpáticos, búho con ojos grandes

**Audio:**
- **Efectos de sonido día:** Pájaros cantando (chirp-chirp), viento suave
- **Efectos de sonido noche:** Grillos, ulular de búho ("¡Hoo-hoo!")
- **Música:** Sin música de fondo (para que el niño escuche sonidos de ambiente)
- **Sin voz:** Sin TTS para mantener ambiente natural

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 16-20 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <15MB total size, smooth transitions

**Valor Educativo:**
- Conceptos de día/noche
- Astronomía básica (sol, Luna, estrellas)
- Ciclos naturales
- Animales diurnos vs nocturnos
- Sensibilidad al ambiente

**Referencias e Inspiración:**
- [Canvas Gradient Transitions](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Day and Night](https://sagomini.com/) (inspiración de ciclo día/noche)
- [PBS Kids: Nature Games](https://pbskids.org/games/) (referencia similar)

---

#### Idea #15: Los Gemelos Ríen 👶👶😄

**Concepto:**
Dos gemelos aparecen lado a lado en la pantalla con caritas serias. Al tocar un gemelo, este empieza a reír con animación contagiosa. Si tocas ambos gemelos, se contagian entre ellos y hacen una fiesta de risas. Toque en gemelos reinicia el juego.

**Motivación:**
- **Independencia:** El niño hace reír a los gemelos tocándolos
- **Logro:** Ver la fiesta de risas de ambos gemelos
- **Aprendizaje:** Contagio emocional y empatía básica

**Mecánica Principal:**
Dos bebés gemelos (80-90px cada uno) aparecen lado a lado con caritas serias. Al tocar gemelo 1, este empieza a reír (animación: ojos se cierran, boca se abre, cuerpo se sacude). Si tocas gemelo 2 dentro de 3 segundos, este también empieza a reír y ambos se "contagian" (ritmo sincronizado, caritas muy felices, movimiento coordinado). Aparece texto de risas ("¡Ja-ja-ja!", "¡Je-je-je!"). Toque en gemelos reinicia el juego a caritas serias.

**Interacción Móvil:**
- **Tipo:** Tap individual (toca gemelo → reír) o secuencial (toca ambos → fiesta de risas)
- **Accesibilidad:** Gemelos grandes (80-90px), targets muy fáciles, pantalla dividida clara
- **Sin requisitos de secuencia:** Puede tocar en cualquier orden

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para gemelos, flexbox para layout lado a lado, ARIA labels
- **JavaScript:** Event listeners para tap, gestión de estado (serio/ririendo/fiesta), sincronización de animaciones cuando ambos ríen, timeout para "contagio"
- **CSS:** Animaciones keyframes (laugh, bounce, shake), responsive layout (100% altura), transforms para sacudidas
- **Otros:** Web Audio API para sonidos de risas, localStorage para trackeer fiestas

**Características Visuales:**
- **Paleta de colores:** Fondo habitación suave (rosa claro #FFC0CB o azul claro #ADD8E6), gemelos piel natural (#F5DEB3), ropa colores complementarios (uno azul, uno rosa)
- **Animaciones:** Gemelo se sacuda al reír (shake 0.3s), ojos se cierran (scale 0.5 → 0), boca se abre (height 10px → 20px), al contagiar: ambos se mueven sincronizados (bounce 0.4s), texto de risas aparece flotando
- **Feedback visual:** Gemelo brilla al tocar, contornos de risa alrededor al contagiar, confetti de emojis (😂, 🤣) al hacer fiesta
- **Personajes:** Gemelos con caritas muy expresivas (ojos grandes, sonrisa seria inicial, sonrisa feliz al reír)

**Audio:**
- **Efectos de sonido:** Risas grabadas de niños (varias: "Ja-ja-ja", "Je-je-je", "Ji-ji-ji"), sincronizadas cuando ambos ríen
- **Música:** Sin música de fondo (para que el niño se enfoque en las risas)
- **Sin voz:** Sin TTS para mantener ambiente natural

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 12-16 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <10MB total size, sincronización precisa de animaciones

**Valor Educativo:**
- Contagio emocional
- Empatía básica
- Expresión facial (serio vs feliz)
- Concepto de compartir alegría
- Audiovisual coordination

**Referencias e Inspiración:**
- [CSS Keyframe Animations - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Flexbox Layout - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Toca Boca: Baby Games](https://tocaboca.com/) (inspiración de bebés interactivos)
- [Sago Mini: Babies](https://sagomini.com/) (referencia similar)

---

#### Idea #16: Pinta con Dedos 👆🎨🖌️

**Concepto:**
Un lienzo en blanco ocupa la pantalla. El niño usa su dedo para dibujar libremente líneas de colores. Hay 5 colores disponibles en la parte inferior. Al tocar "🧹" (escoba), el lienzo se limpia. No hay restricciones; el niño puede dibujar lo que quiera.

**Motivación:**
- **Independencia:** El niño dibuja libremente con su dedo
- **Logro:** Crear sus propias obras de arte
- **Aprendizaje:** Explorar colores y expresión creativa

**Mecánica Principal:**
Lienzo blanco (canvas) ocupa 90% de la pantalla. Parte inferior (10%) tiene 5 botones de colores circulares (rojo, azul, amarillo, verde, rosa) y botón de limpiar (emoji 🧹). Inicia con color rojo seleccionado (indicador visual). El niño toca y arrastra su dedo para dibujar líneas suaves (lineWidth: 8-12px, lineCap: round). Al tocar botón de color, cambia color activo con transición suave. Al tocar limpiar, el lienzo se limpia con animación de "paso de escoba" (barrido horizontal). Sin límite de dibujo; el niño puede crear cuantas veces quiera.

**Interacción Móvil:**
- **Tipo:** Touch + drag (dibuja líneas) + tap (selecciona color/limpia)
- **Accesibilidad:** Lienzo grande (90% de pantalla), botones de color grandes (40-50px), colores muy contrastantes
- **Sin requisitos de precisión:** Dibujo libre sin restricciones, touch response inmediato

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para lienzo de dibujo, `<button>` elements para selección de color, Touch API para dibujo
- **JavaScript:** Touch events (touchstart, touchmove, touchend) para dibujo, gestión de estado de color (currentColor), contexto 2D del canvas (lineTo, stroke, strokeStyle), función de limpieza
- **CSS:** Fullscreen layout, botones de color con transitions para selección, responsive design (100% altura)
- **Otros:** localStorage para guardar dibujos (opcional), Web Audio API para sonidos de dibujo

**Características Visuales:**
- **Paleta de colores:** Lienzo blanco (#FFFFFF), botones colores brillantes (rojo #FF4444, azul #4444FF, amarillo #FFFF00, verde #44FF44, rosa #FF69B4), botón limpiar gris (#696969)
- **Animaciones:** Botón de color seleccionado brilla (box-shadow + scale 1.1), al cambiar color: transition 0.2s, al limpiar: animación de barrido (escoba pasa de izquierda a derecha, 1s)
- **Feedback visual:** Línea aparece instantáneamente al tocar, color seleccionado tiene indicador visual fuerte, limpiar con animación visual clara
- **Personajes:** Sin personajes, solo lienzo y botones con emojis (🧹 para limpiar)

**Audio:**
- **Efectos de sonido:** "Shhff" suave al dibujar (frecuencia: cada 50ms mientras se dibuja), "Whoosh" al limpiar lienzo, "Ding" al cambiar color
- **Música:** Sin música de fondo (para que el niño se enfoque en dibujar)
- **Sin voz:** Sin TTS para mantener libertad creativa

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 10-14 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, smooth drawing sin lag, <8MB total size

**Valor Educativo:**
- Exploración de colores
- Expresión creativa
- Coordinación fina (dedos)
- Desarrollo motor fino
- Arte y estética básica

**Referencias e Inspiración:**
- [Canvas API - Drawing Lines](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
- [Touch Events - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [Toca Boca: Drawing Games](https://tocaboca.com/) (inspiración de dibujo libre)
- [Sago Mini: Color and Draw](https://sagomini.com/) (referencia similar)

### Lote 5 (Ideas 17-20)
**Fecha:** 2026-02-17
**Ejecución:** 4/25

#### Idea #17: Cuenta las Estrellas ⭐🌙🔢

**Concepto:**
Estrellas brillantes aparecen en el cielo nocturno una por una. Cada vez que aparece una estrella, el número aparece grande en la pantalla. Al tocar la estrella, esta brilla más y un cuento de estrellas suena ("¡Estrella!", "¡Dos estrellas!", etc.). Al llegar a 10, las estrellas forman una constelación.

**Motivación:**
- **Independencia:** El niño hace aparecer estrellas tocando el cielo
- **Logro:** Ver el contador aumentar y completar 10 estrellas
- **Aprendizaje:** Conteo numérico (1-10) y concepto de constelaciones

**Mecánica Principal:**
Cielo nocturno azul oscuro (#191970) ocupa pantalla completa. Inicia vacío. Al tocar el cielo, aparece una estrella dorada brillante (#FFD700) en posición aleatoria. El número grande (60-80px) aparece en el centro: "1", "2", "3", etc. La estrella titila (animation: twinkle 1s infinite). Al tocar una estrella ya existente, esta brilla más (scale 1.5 → 1.0, 0.3s) y TTS dice el número actual ("¡Una estrella!", "¡Dos estrellas!", "¡Diez estrellas!"). Al llegar a 10, las estrellas se mueven suavemente para formar una constelación simple (ej: estrella de 5 puntas) y aplausos suenan.

**Interacción Móvil:**
- **Tipo:** Tap en cielo (crea estrella) + tap en estrella (brilla más)
- **Accesibilidad:** Cielo completo es trigger (100% área), estrellas grandes (40-50px), números muy visibles
- **Sin requisitos de precisión:** Tap en cualquier parte del cielo crea estrella

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para cielo y estrellas, `<div>` para números grandes, requestAnimationFrame para 60 FPS
- **JavaScript:** Array de estrellas con posiciones, contador (1-10), detección de tap en canvas, algoritmo simple de constelación (posiciones predefinidas)
- **CSS:** Fullscreen canvas (100% height/width), overlay de números con font-size grande (60-80px), z-index layers
- **Otros:** Web Audio API para sonidos de estrella, localStorage para trackeer constelaciones completadas

**Características Visuales:**
- **Paleta de colores:** Cielo nocturno (#191970), estrellas doradas (#FFD700), Luna plateada (#C0C0C0) en esquina, números blanco (#FFFFFF)
- **Animaciones:** Estrellas titilan (opacity 0.7-1.0, scale 0.9-1.1, 1s), al crear: pop-in (scale 0→1.2→1.0, 0.4s), al tocar estrella: glow brillante (box-shadow), al completar 10: estrellas se mueven a constelación (transition positions 1s)
- **Feedback visual:** Número grande aparece en centro con fade (opacity 0→1, 0.3s), estrella brilla al tocar, Luna ilumina suavemente
- **Personajes:** Sin personajes, solo elementos astronómicos brillantes

**Audio:**
- **Efectos de sonido:** "Twinkle" suave al crear estrella (campanita), "Ping" más alto al tocar estrella existente, "Ta-da!" al completar constelación
- **Música:** Fondo instrumental nocturno (piano + campanitas cristalinas), volumen muy bajo (15%)
- **Voz:** TTS para "¡Una estrella!", "¡Dos estrellas!", "¡Diez estrellas!" en español, voz femenina suave

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 12-16 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <10MB total size, smooth animation con 10+ estrellas

**Valor Educativo:**
- Conteo numérico (1-10)
- Concepto de acumulación
- Astronomía básica (estrellas, constelaciones)
- Habilidades de observación
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [Canvas Text Rendering - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Star Count](https://sagomini.com/) (inspiración de contar estrellas)
- [PBS Kids: Number Games](https://pbskids.org/games/) (referencia similar)

---

#### Idea #18: Forma el Rompecabezas 🧩🐶🐱

**Concepto:**
Un rompecabezas simple de 4 piezas aparece en pantalla. Cada pieza tiene una parte de un animal (ej: cabeza de perro, cuerpo de gato). Las piezas están mezcladas. El niño toca una pieza y esta se mueve hacia su posición correcta con un sonido de "¡Click!". Al completar las 4 piezas, el animal aparece completo y celebra.

**Motivación:**
- **Independencia:** El niño resuelve el rompecabezas tocando piezas
- **Logro:** Ver el animal completo al terminar
- **Aprendizaje:** Concepto de partes-entidad (cabeza, cuerpo, patas) y resolución de problemas

**Mecánica Principal:**
4 piezas de rompecabezas (60-70px cada una) aparecen mezcladas en la pantalla (posiciones aleatorias). Cada pieza muestra una parte de animal (ej: cabeza de perro, torso, pata delantera, pata trasera). Una guía suave (outlines translúcidos) muestra dónde debe ir cada pieza. Al tocar una pieza, esta se anima hacia su posición correcta (bezier curve, 0.6s) y hace sonido "Click!". Cuando la pieza llega a su posición, se fija con un brillo visual. Al completar las 4 piezas, el animal aparece completo (animación de "unión") con confetti y aplausos. Toque en animal reinicia el juego.

**Interacción Móvil:**
- **Tipo:** Tap individual (toca pieza → mueve a posición correcta)
- **Accesibilidad:** Piezas grandes (60-70px), guía translúcida visible, targets generosos
- **Sin requisitos de precisión:** Tap en cualquier parte de la pieza funciona

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para piezas y guía, absolute positioning para posiciones, ARIA labels
- **JavaScript:** Event listeners para tap, animaciones con CSS transforms (bezier curves), gestión de estado (piezas fijadas/pendientes), detección de completado
- **CSS:** Animaciones keyframes (click, snap-in, celebrate), bezier curves para movimiento suave, transforms para colocación
- **Otros:** Web Audio API para sonidos de click, localStorage para trackeer rompecabezas completados

**Características Visuales:**
- **Paleta de colores:** Fondo suave (celeste #E0F6FF), piezas colores vibrantes (ej: perro café #8B4513, gato naranja #FFA500), guía translúcida (outline gray #CCCCCC, opacity 0.3)
- **Animaciones:** Piezas flotan suavemente (float 2s ease-in-out infinite), al tocar: movimiento curvo hacia posición correcta (0.6s), al fijar: brillo momentáneo (box-shadow), al completar: animal se une (scale 1.0 → 1.1 → 1.0, 0.5s) + confetti
- **Feedback visual:** Pieza brilla al tocar, guía se ilumina cuando pieza está cerca, contorno de celebración al completar
- **Personajes:** Animales con piezas separadas (perro, gato, vaca, etc.)

**Audio:**
- **Efectos de sonido:** "Click" mecánico al fijar pieza, "Clack" si pieza ya está en su lugar, aplausos completos al completar rompecabezas
- **Música:** Fondo instrumental de rompecabezas (piano + xilófono), volumen bajo (20%)
- **Voz:** TTS para "¡Cabeza!", "¡Cuerpo!", "¡Pata!" al tocar cada pieza, "¡Muy bien!" al completar

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 16-20 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <12MB total size, smooth animations

**Valor Educativo:**
- Resolución de problemas simples
- Concepto de partes-entidad (cabeza, cuerpo, patas)
- Coordinación mano-ojo
- Habilidades espaciales
- Memoria visual

**Referencias e Inspiración:**
- [CSS Bezier Curves - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- [Absolute Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Toca Boca: Puzzle Games](https://tocaboca.com/) (inspiración de rompecabezas)
- [PBS Kids: Puzzle Animals](https://pbskids.org/games/) (referencia similar)

---

#### Idea #19: El Xilófono Mágico 🎵🎹🎶

**Concepto:**
Un xilófono colorido aparece con 5 teclas de colores. Al tocar una tecla, suena una nota musical (Do, Re, Mi, Fa, Sol) y la tecla brilla. Si el niño toca en secuencia (1-2-3-4-5), toca una melodía corta completa. Hay diferentes melodías desbloqueables.

**Motivación:**
- **Independencia:** El niño crea música tocando teclas
- **Logro:** Tocar melodías completas
- **Aprendizaje:** Nociones básicas de música (notas Do-Sol) y secuenciación

**Mecánica Principal:**
Xilófono horizontal con 5 teclas (80-90px de ancho cada una) en colores (rojo, naranja, amarillo, verde, azul). Cada tecla tiene nota y número (1: Do, 2: Re, 3: Mi, 4: Fa, 5: Sol). Al tocar una tecla, suena nota (sintetizada con Web Audio API) y la tecla brilla (animation: press 0.2s). Si el niño toca 1-2-3-4-5 en orden, suena melodía corta ("Do-Re-Mi-Fa-Sol" con armonía) y confetti musical (♪ ♫ ♭) aparece. Hay 3 melodías desbloqueables (melodía 1, 2, 3) que el niño puede tocar en cualquier orden.

**Interacción Móvil:**
- **Tipo:** Tap individual (toca tecla → nota)
- **Accesibilidad:** Teclas grandes (80-90px), colores muy contrastantes, targets fáciles
- **Sin requisitos de secuencia:** Puede tocar en cualquier orden, pero melodía completa requiere 1-2-3-4-5

**Tecnologías Requeridas:**
- **HTML5:** `<button>` elements para teclas con ARIA labels, Web Audio API para síntesis de notas
- **JavaScript:** Event listeners para tap, Web Audio API (OscillatorNode, GainNode) para notas, gestión de secuencia (array de índices), timeout para detectar melodía completa (3s ventana)
- **CSS:** Animaciones keyframes (press, glow, bounce), responsive layout (flexbox wrap), gradient para fondo
- **Otros:** Web Audio API para síntesis de melodías, localStorage para desbloquear melodías adicionales

**Características Visuales:**
- **Paleta de colores:** Fondo gradiente arcoíris suave (rosa → amarillo → verde), teclas colores vibrantes (rojo #FF4444, naranja #FFA500, amarillo #FFFF00, verde #44FF44, azul #4444FF), números blanco (#FFFFFF)
- **Animaciones:** Tecla se presiona al tocar (scale 0.9 → 1.0, 0.2s), brilla (box-shadow + scale 1.05, 0.3s), al completar melodía: confetti de notas (♪ ♫ ♭) flotando hacia arriba
- **Feedback visual:** Tecla ilumina al tocar, números destacados, partículas de música al completar melodía
- **Personajes:** Sin personajes, solo xilófono colorido y notas flotantes

**Audio:**
- **Efectos de sonido:** Notas sintetizadas (Do: 261.6Hz, Re: 293.7Hz, Mi: 329.6Hz, Fa: 349.2Hz, Sol: 392.0Hz) con timbre de xilófono (sine wave + decay), armonía al completar melodía
- **Música:** Sin música de fondo (para que el niño se enfoque en crear su propia música)
- **Voz:** TTS para "¡Do!", "¡Re!", "¡Mi!", "¡Fa!", "¡Sol!" al tocar cada tecla, "¡Melodía completa!" al tocar 1-2-3-4-5

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 18-22 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <10MB total size, baja latencia audio (<30ms), timing preciso (+/- 50ms)

**Valor Educativo:**
- Nociones básicas de música (notas Do-Sol)
- Secuenciación (1-2-3-4-5)
- Creatividad musical
- Coordinación mano-ojo
- Memoria de melodías

**Referencias e Inspiración:**
- [Web Audio API - OscillatorNode](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)
- [HTML5 Audio Best Practices](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [Baby Einstein - Musical Games](https://www.babyeinstein.com/) (inspiración de educación musical)
- [Sago Mini: Music Maker](https://sagomini.com/) (referencia similar)

---

#### Idea #20: Los Patos Nadan 🦆🌊💦

**Concepto:**
Patos amarillos aparecen en un estanque con agua animada. El niño toca un pato y este nada hacia donde tocó con un sonido de "¡Cuac!". Si toca el agua, salpica. Al tocar todos los patos (3-5), hacen una carrera divertida hacia la orilla.

**Motivación:**
- **Independencia:** El niño guía a los patos tocando
- **Logro:** Ver la carrera de patos al completar
- **Aprendizaje:** Concepto de movimiento acuático y animales acuáticos

**Mecánica Principal:**
Estanque con agua animada (gradiente azul #4169E1 → #87CEEB) ocupa pantalla. 3-5 patos amarillos (#FFD700) con gorros de colores flotan en el estanque. El agua tiene ondas suaves (animation: ripple 2s infinite). Al tocar un pato, este nada hacia la posición del toque (bezier curve, 0.8s) y hace "¡Cuac!". Al tocar el agua (no en pato), salpicaduras (partículas de agua) aparecen. Contador de patos tocados: "🦆 3/5". Al tocar todos los patos, estos hacen una carrera hacia la orilla (derecha de pantalla) con animación de chapoteo y aplausos. Toque en estanque reinicia el juego.

**Interacción Móvil:**
- **Tipo:** Tap en pato (nadar hacia posición) + tap en agua (salpicaduras)
- **Accesibilidad:** Patos grandes (60-70px), estanque grande (100% pantalla), targets generosos
- **Sin requisitos de precisión:** Tap en cualquier parte del pato o agua funciona

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para estanque, agua, patos, ondas, partículas, requestAnimationFrame para 60 FPS
- **JavaScript:** Clases Duck (pato) y WaterParticle (partícula de agua), sistema de navegación (bezier curve hacia toque), hit-testing para patos vs agua, detección de completado
- **CSS:** Fullscreen canvas (100% height/width), no scroll
- **Otros:** Web Audio API para sonidos de cuac y salpicaduras, localStorage para trackeer carreras

**Características Visuales:**
- **Paleta de colores:** Agua gradiente (#4169E1 → #87CEEB), patos amarillos (#FFD700) con gorros (rojo #FF4444, azul #4444FF, verde #44FF44), ondas blancas (#FFFFFF), salpicaduras burbuja (#E0FFFF)
- **Animaciones:** Patos flotan suavemente (float 3s ease-in-out infinite), al nadar: movimiento curvo hacia toque (0.8s), ondas se expanden (scale 1 → 2, 0.5s), al carrera: patos chapotean hacia orilla (1.5s)
- **Feedback visual:** Pato brilla al tocar, salpicaduras explotan en partículas, ondas se expanden en el agua
- **Personajes:** Patos con gorros coloridos y ojos grandes, muy amigables

**Audio:**
- **Efectos de sonido:** "¡Cuac!" al tocar pato (variación tonal según pato), "Splash!" al tocar agua (partículas), chapoteo durante carrera
- **Música:** Fondo instrumental de estanque (piano + campanitas de agua), volumen muy bajo (15%)
- **Voz:** TTS para "¡Pato!", "¡Nada!" al tocar, "¡Carrera!" al completar todos los patos

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 16-20 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <12MB total size, smooth animation con 5+ patos + partículas

**Valor Educativo:**
- Concepto de movimiento acuático
- Animales acuáticos (patos)
- Coordinación mano-ojo
- Causa-efecto (tocar → nadar → carrera)
- Habilidades espaciales

**Referencias e Inspiración:**
- [Canvas Particle Systems](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Duck Pond](https://sagomini.com/) (inspiración de patos)
- [PBS Kids: Water Games](https://pbskids.org/games/) (referencia similar)

### Lote 6 (Ideas 21-24)
**Fecha:** 2026-02-17
**Ejecución:** 4/25

#### Idea #21: Lava la Ropa 🧺👕🧴

**Concepto:**
Una lavadora y una cuerda de tender aparecen en pantalla. Ropa sucia (manchada) está en el canasto. El niño arrastra la ropa a la lavadora, esta se lava con animación de burbujas y sonido de agua, y luego cuelga en la cuerda limpia y brillante.

**Motivación:**
- **Independencia:** El niño lava y tiende ropa por sí solo
- **Logro:** Ver la ropa limpia colgando en la cuerda
- **Aprendizaje:** Tareas cotidianas, nombres de ropa, limpieza

**Mecánica Principal:**
Pantalla dividida: lavadora (izquierda), canasto de ropa sucia (abajo), cuerda de tender (arriba). Ropa sucia manchada (camisa con mancha marrón, pantalón con mancha azul) está en el canasto. Al arrastrar ropa a la lavadora, la puerta se cierra, lavadora vibra con animación, burbujas aparecen y sonido de agua suena (3s). La puerta se abre y la ropa sale limpia (brillante). El niño arrastra la ropa a la cuerda y se cuelga con un "¡Click!". Al tender 5 prendas, todas bailan en el viento.

**Interacción Móvil:**
- **Tipo:** Arrastrar y soltar (drag-and-drop): canasto → lavadora → cuerda
- **Accesibilidad:** Ropa grande (60-70px), lavadora grande (100px), cuerda ancha (toda la parte superior), hit-testing generoso (+25px margin)
- **Sin penalización:** Si suelta ropa fuera, regresa al canasto amablemente

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para lavadora, ropa, cuerda, Touch API para drag-and-drop
- **JavaScript:** Touch events (touchstart, touchmove, touchend), gestión de estado (sucia/lavando/limpia/colgada), hit-testing con getBoundingClientRect(), animaciones con CSS transitions
- **CSS:** Animaciones keyframes (vibrate, bubble-dry, sway-in-wind), transforms para movimiento, responsive layout (flexbox)
- **Otros:** Web Audio API para sonidos de lavado, localStorage para trackeer ropa lavada

**Características Visuales:**
- **Paleta de colores:** Fondo habitación suave (#FFF8DC), lavadora blanca (#FFFFFF) con botones azules, ropa colores vibrantes con manchas (camisa roja #FF4444 mancha marrón #8B4513, pantalón azul #4444FF mancha gris #696969), cuerda café (#8B4513)
- **Animaciones:** Lavadora vibra (shake 0.3s) mientras lava, burbujas suben (scale 0→1.5→0, 1s), ropa se balancea en el viento (sway 2s infinite), al completar 5: ropa baila juntas (dance 1s)
- **Feedback visual:** Ropa brilla al salir de lavadora, cuerda se ilumina al colgar, confetti de burbujas al completar
- **Personajes:** Sin personajes, solo objetos de lavandería con estilo cartoon

**Audio:**
- **Efectos de sonido:** "Gurglegurgle" al lavar, "Sshhh-fwooosh" al abrir lavadora, "Click" al colgar en cuerda, viento suave al balancearse
- **Música:** Fondo instrumental de lavandería (piano + arpa), volumen bajo (20%)
- **Voz:** TTS para "¡Camisa!", "¡Pantalón!", "¡Limpia!" al completar

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 18-22 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <15MB total size, smooth drag en low-end devices

**Valor Educativo:**
- Tareas cotidianas (lavar ropa)
- Nombres de ropa y prendas
- Concepto de limpieza (sucia → limpia)
- Secuenciación (lavar → tender)
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [HTML5 Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Touch Events - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [Toca Boca: Laundry Games](https://tocaboca.com/) (inspiración de lavandería)
- [Sago Mini: Wash Day](https://sagomini.com/) (referencia similar)

---

#### Idea #22: El Tren Carga Vagones 🚂🚃📦

**Concepto:**
Un tren locomotora colorida con 4 vagones vacíos aparece en una vía férrea. Cajas de colores (roja, azul, verde, amarilla) flotan alrededor. El niño toca una caja y esta vuela automáticamente al vagón del color correspondiente. Al cargar los 4 vagones, el tren parte con silbido.

**Motivación:**
- **Independencia:** El niño carga el tren tocando cajas
- **Logro:** Ver el tren completo partir en viaje
- **Aprendizaje:** Asociar colores, conteo, secuenciación

**Mecánica Principal:**
Tren con locomotora + 4 vagones (cada uno colorido: rojo, azul, verde, amarillo) en vía férrea (gris #696969) atraviesa pantalla. 8 cajas flotan alrededor (2 de cada color). Al tocar una caja, esta vuela en línea recta hacia el vagón del mismo color (0.5s) y hace "¡Clack!". La caja se asienta en el vagón con animación de "bounce". Contador: "📦 4/12". Al cargar todos los vagones, el tren hace "¡Choo-choo!", silbido ("¡Woo-woo!") y parte hacia la derecha con humo de chimenea.

**Interacción Móvil:**
- **Tipo:** Tap (toca caja → vuela al vagón)
- **Accesibilidad:** Cajas grandes (50-60px), vagones grandes (70-80px), colores muy contrastantes
- **Sin requisitos de precisión:** Tap en cualquier parte de la caja funciona

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para tren, vagones, cajas, absolute positioning, ARIA labels
- **JavaScript:** Event listeners para tap, gestión de estado (cajas flotando/cargadas), animaciones con CSS transforms, detección de completado (todos los vagones llenos)
- **CSS:** Animaciones keyframes (bounce, steam-smoke, move-train), bezier curves para vuelo de cajas, transforms para movimiento del tren
- **Otros:** Web Audio API para sonidos de tren, localStorage para trackeer trenes cargados

**Características Visuales:**
- **Paleta de colores:** Fondo campo verde (#90EE90), vía gris (#696969), locomotora roja (#DC143C), vagones colores (rojo #FF4444, azul #4444FF, verde #44FF44, amarillo #FFFF00), cajas colores sólidos
- **Animaciones:** Cajas flotan suavemente (float 2s ease-in-out infinite), al cargar: vuelo en línea recta (0.5s), al asentar: bounce (scale 1.2→1.0, 0.3s), al partir: tren se mueve + humo de chimenea (partículas)
- **Feedback visual:** Caja brilla al cargar, vagón se ilumina al llenarse, humo blanco sale de chimenea, confetti de colores al partir
- **Personajes:** Tren con cara feliz en locomotora (ojos grandes, sonrisa), ruedas girando

**Audio:**
- **Efectos de sonido:** "¡Clack!" al cargar caja, "¡Choo-choo!" del tren, "¡Woo-woo!" silbido al partir, ruedas de tren (click-clack-click-clack)
- **Música:** Fondo instrumental de tren (tambor + silbato suave), volumen bajo (20%)
- **Voz:** TTS para "¡Caja roja!", "¡Caja azul!" al tocar, "¡Todos los vagones!" al completar

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <12MB total size, smooth animation con 12+ cajas

**Valor Educativo:**
- Asociación color-color
- Conteo (1-12 cajas)
- Secuenciación (cargar todos los vagones)
- Concepto de transporte
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [CSS Transforms - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Absolute Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Sago Mini: Train](https://sagomini.com/) (inspiración de trenes)
- [PBS Kids: Train Games](https://pbskids.org/games/) (referencia similar)

---

#### Idea #23: Duerme al Bebé 👶🌙🛏️

**Concepto:**
Un bebé aparece en la cuna jugando con juguetes. El niño toca objetos de la habitación (luz, cortinas, peluche, música) para preparar el ambiente de sueño. Al tocar todo, el bebé bosteza y se duerme con animación de sueños.

**Motivación:**
- **Independencia:** El niño prepara el ambiente de sueño
- **Logro:** Ver al bebé dormir feliz
- **Aprendizaje:** Rutina de dormir, cuidado, empatía

**Mecánica Principal:**
Habitación con bebé en cuna (centro, 100-120px), luz encendida (esquina superior izquierda), cortinas abiertas (arriba), peluche en suelo, música (abajo). El bebé juega con juguete (animación de rebote). El niño debe tocar 4 elementos en cualquier orden:
1. Luz → se apaga (transición a noche)
2. Cortinas → se cierran (oscurece habitación)
3. Peluche → bebé lo toma y abraza
4. Música → suena canción de cuna suave

Al completar los 4, el bebé bosteza (animación) y se acuesta en cuna con ojos cerrados. Burbujas de sueños (★, 🌙, ☁️) flotan. Toque en habitación despierta al bebé.

**Interacción Móvil:**
- **Tipo:** Tap secuencial (toca 4 elementos en cualquier orden)
- **Accesibilidad:** Elementos grandes (50-70px), bebé muy grande (100-120px), targets muy fáciles
- **Sin penalización:** Puede tocar en cualquier orden, no hay "fallo"

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para habitación, bebé, elementos, ARIA labels
- **JavaScript:** Event listeners para tap, gestión de estado (elementos completados), transiciones de día/noche (opacity, background), timeout para "dormir"
- **CSS:** Animaciones keyframes (yawn, sleep, dream-bubbles), transitions para cambio de ambiente, transforms para movimiento
- **Otros:** Web Audio API para canción de cuna y sonidos, localStorage para trackeer bebés dormidos

**Características Visuales:**
- **Paleta de colores día:** Habitación suave (rosa #FFC0CB), luz amarilla (#FFD700), cortinas celeste #87CEEB, bebé piel #F5DEB3, cuna madera #DEB887
- **Paleta de colores noche:** Habitación oscura (#4B0082), luz apagada (gris #696969), bebé igual, cuna igual
- **Animaciones:** Bebé rebota (bounce 1s) mientras juega, al apagar luz: transition 1s (día → noche), bosteza (translateY -5px, mouth open/close, 1s), al dormir: ojos se cierran (scale 1→0), sueños flotan (float 2s infinite)
- **Feedback visual:** Elemento brilla al tocar, contorno de sueño (★, 🌙, ☁️) al dormir bebé, habitación se oscurece gradualmente
- **Personajes:** Bebé con carita muy expresiva (ojos grandes, sonrisa jugando, ojos cerrados durmiendo)

**Audio:**
- **Efectos de sonido día:** Bebé ríe ("¡Je-je!"), juguete rebota ("Boing"), luz "Click", cortinas "Whoosh", peluche "Squeak", música "♪♪♪" (canción de cuna)
- **Efectos de sonido noche:** Grillos, viento suave, respiración del bebé
- **Música:** Canción de cuna suave (piano + arpa) solo al activar música, volumen bajo (25%)
- **Voz:** TTS para "¡Luz apagada!", "¡Cortinas cerradas!", "¡Dulces sueños!" en español

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <10MB total size, smooth transitions

**Valor Educativo:**
- Rutina de dormir
- Cuidado y empatía
- Secuenciación (preparar ambiente)
- Concepto de día/noche
- Responsabilidad

**Referencias e Inspiración:**
- [CSS Transitions - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transitions)
- [Sleep Routines Research](https://www.sleepfoundation.org/children-and-sleep/bedtime-routine-tips)
- [Toca Boca: Baby Games](https://tocaboca.com/) (inspiración de cuidado de bebés)
- [Sago Mini: Bedtime](https://sagomini.com/) (referencia similar)

---

#### Idea #24: Los Insectos Vuelan 🦋🐝🐞

**Concepto:**
Insectos (mariposa, abeja, mariquita) vuelan por un jardín colorido. El niño toca un insecto y este vuela hacia una flor. Al tocar la flor, el insecto libera polen brillante y hace un sonido felíz. Al tocar todos los insectos (5-7), hacen un ballet aéreo.

**Motivación:**
- **Independencia:** El niño guía a los insectos hacia flores
- **Logro:** Ver el ballet aéreo de todos los insectos
- **Aprendizaje:** Insectos del jardín, polinización, colores

**Mecánica Principal:**
Jardín con flores coloridas (rosa #FF69B4, amarillo #FFD700, naranja #FFA500) en fondo verde (#90EE90). 5-7 insectos vuelan libremente: mariposa (alas multicolor), abeja (amarilla-negra), mariquita (roja con puntos), libélula (azul), escarabajo (verde), polilla (marrón), mosquito (gris - opción). Insectos vuelan con movimiento ondulante (sine wave, 2-4s). Al tocar un insecto, este vuela hacia la flor más cercana (bezier curve, 0.8s) y libera polen brillante (partículas #FFD700) con sonido "¡Buzz!". Contador: "🦋 5/7". Al tocar todos, insectos hacen ballet aéreo (vuelan en círculos sincronizados) con confetti de polen.

**Interacción Móvil:**
- **Tipo:** Tap (toca insecto → vuela a flor) + tap en flor (libera polen)
- **Accesibilidad:** Insectos medianos-grandes (50-70px), flores grandes (60-80px), movimiento lento (2-4s)
- **Sin penalización:** Si insecto ya está en flor, repite animación de polen

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para jardín, flores, insectos, partículas de polen, requestAnimationFrame para 60 FPS
- **JavaScript:** Clases Insect y Flower, sistema de navegación (bezier curve a flor más cercana), hit-testing para insectos vs flores, detección de completado, sistema de partículas
- **CSS:** Fullscreen canvas (100% height/width), no scroll
- **Otros:** Web Audio API para sonidos de insectos y polen, localStorage para trackeer ballets

**Características Visuales:**
- **Paleta de colores:** Fondo jardín (#90EE90), flores vibrantes (rosa #FF69B4, amarillo #FFD700, naranja #FFA500, morado #9370DB), insectos colores naturales (mariposa multicolor, abeja #FFD700, mariquita #DC143C), polen dorado (#FFD700)
- **Animaciones:** Insectos vuelan con movimiento ondulante (sine wave, translateX + translateY), al volar a flor: bezier curve (0.8s), al polenizar: partículas de polen explotan (20-30 partículas, expand 0.5s + fade), al ballet: vuelan en círculo sincronizado (2s)
- **Feedback visual:** Insecto brilla al tocar, flor se ilumina al polenizar, polen brilla y flota, confetti de colores al ballet
- **Personajes:** Insectos estilo cartoon con ojos grandes y alas brillantes

**Audio:**
- **Efectos de sonido:** Insectos: mariposa ("Flutter-flutter"), abeja ("Buzz-buzz"), mariquita ("Bzzzt"), polen ("Sparkle", "Shimmer"), ballet: "¡Ooh!" colectivo
- **Música:** Fondo instrumental de jardín (piano + flauta + violín), volumen muy bajo (15%)
- **Voz:** TTS para "¡Mariposa!", "¡Abeja!", "¡Mariquita!" al tocar, "¡Ballet!" al completar

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 18-22 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <15MB total size, smooth animation con 7+ insectos + partículas

**Valor Educativo:**
- Insectos del jardín (mariposa, abeja, mariquita, etc.)
- Polinización (insecto → flor → polen)
- Colores de flores
- Concepto de vuelo y movimiento
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [Canvas Particle Systems](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Garden](https://sagomini.com/) (inspiración de jardín de insectos)
- [PBS Kids: Insect Games](https://pbskids.org/games/) (referencia similar)

---

### Lote 7 (Ideas 25-28)
**Fecha:** 2026-02-17
**Ejecución:** 4/25

#### Idea #25: El Buzón de Cartas 📬✉️📨

**Concepto:**
Un buzón azul con banderola roja aparece en pantalla. Cartas de colores (roja, azul, amarilla, verde) flotan alrededor. El niño toca una carta y esta vuela hacia el buzón. Al caer dentro, el buzón hace "¡Clack!" y la carta desaparece con animación de "zrrr-zrrr". Al meter 10 cartas, el cartero (un personaje simpático) aparece y reparte las cartas con aplausos.

**Motivación:**
- **Independencia:** El niño pone cartas en el buzón tocándolas
- **Logro:** Meter todas las cartas y ver al cartero
- **Aprendizaje:** Concepto de envío, colores, conteo básico

**Mecánica Principal:**
Buzón azul (#4169E1) con banderola roja (#DC143C) en centro (120-140px). 12 cartas flotan alrededor (3 de cada color: roja #FF4444, azul #4444FF, amarilla #FFFF00, verde #44FF44). Cada carta tiene un sello colorido en la esquina. Al tocar una carta, esta vuela en línea recta hacia el buzón (0.5s) y entra con sonido "¡Clack!". El buzón hace "zrrr-zrrr" y la carta desaparece. Contador: "📬 5/10". Al meter 10 cartas, el cartero (personaje uniformado) aparece del lado izquierdo, camina hacia el buzón, abre la tapa, saca cartas y las reparte con aplausos. Toque en buzón reinicia el juego.

**Interacción Móvil:**
- **Tipo:** Tap (toca carta → vuela al buzón)
- **Accesibilidad:** Cartas grandes (50-60px), buzón muy grande (120-140px), targets generosos
- **Sin requisitos de precisión:** Tap en cualquier parte de la carta funciona

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para buzón, cartas, cartero, absolute positioning, ARIA labels
- **JavaScript:** Event listeners para tap, animaciones con CSS transforms (bezier curves), gestión de contador (cartas metidas), detección de completado, array de cartas
- **CSS:** Animaciones keyframes (fly-to-box, zrrr-zrrr, deliver), bezier curves para vuelo de cartas, transforms para movimiento del cartero
- **Otros:** Web Audio API para sonidos de buzón, localStorage para trackeer entregas

**Características Visuales:**
- **Paleta de colores:** Buzón azul (#4169E1), banderola roja (#DC143C), cartas colores vibrantes con sellos (rojo #FF4444 sello dorado #FFD700, etc.), fondo jardín suave (#90EE90)
- **Animaciones:** Cartas flotan suavemente (float 2s ease-in-out infinite), al volar al buzón: línea recta (0.5s), buzón hace "zrrr-zrrr" (shake 0.3s), al completar 10: cartero camina + saca cartas (1.5s)
- **Feedback visual:** Carta brilla al tocar, buzón se ilumina al meter carta, cartero aparece con animación, confetti de sellos al completar
- **Personajes:** Cartero simpático con uniforme azul, gorra, bolsa de cartas, sonrisa grande

**Audio:**
- **Efectos de sonido:** "¡Clack!" al meter carta en buzón, "zrrr-zrrr" al procesar, "Whoosh" si carta se escapa, "¡Hola!" del cartero al aparecer
- **Música:** Fondo instrumental de cartero (tambor + flauta), volumen bajo (20%)
- **Voz:** TTS para "¡Carta roja!", "¡Carta azul!" al tocar, "¡Cartero!" al completar 10

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <12MB total size

**Valor Educativo:**
- Concepto de envío de cartas
- Colores (4 colores de cartas)
- Conteo básico (1-10)
- Secuenciación (meter → procesar → repartir)
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [CSS Transforms - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Absolute Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Sago Mini: Mailbox](https://sagomini.com/) (inspiración de buzón de cartas)
- [PBS Kids: Mail Games](https://pbskids.org/games/) (referencia similar)

---

#### Idea #26: Los Globos de Aire 🎈🌈🎉

**Concepto:**
Globos de colores (rojo, azul, amarillo, verde, rosa, púrpura) flotan desde el fondo hacia arriba. El niño toca un globo y este hace "¡Pop!" con explosión de confetti colorido y sonido divertido. Si toca el cielo (parte superior), aparecen más globos. Al explotar 15 globos, aparece un globo gigante de felicidad con aplausos.

**Motivación:**
- **Independencia:** El niño explota globos tocándolos
- **Logro:** Ver el globo gigante al completar 15
- **Aprendizaje:** Nociones de tamaño, colores, conteo

**Mecánica Principal:**
Cielo azul claro (#87CEEB) ocupa pantalla completa. Globos de diferentes tamaños (40-80px) flotan hacia arriba con movimiento ondulante (sine wave, 2-4s para cruzar pantalla). Cada globo tiene color diferente (rojo #FF4444, azul #4444FF, amarillo #FFFF00, verde #44FF44, rosa #FF69B4, púrpura #9932CC). Al tocar un globo, este hace "¡Pop!" con tonalidad según tamaño (globo grande = pop más grave), se expande (scale 1.2→0, 0.2s) y explota en 25-35 partículas de confetti de su color. Contador: "🎈 7/15". Al explotar 15, globo gigante (150-180px) aparece en centro con confetti masivo y aplausos. Toque en globo gigante reinicia el juego.

**Interacción Móvil:**
- **Tipo:** Tap (toca globo → ¡Pop!)
- **Accesibilidad:** Globos medianos-grandes (40-80px), movimiento lento (2-4s), targets fáciles
- **Sin penalización:** Globos que no se tocan siguen flotando hacia arriba y desaparecen

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para globos y confetti, requestAnimationFrame para 60 FPS, detección de tap en canvas
- **JavaScript:** Clase Balloon con propiedades (x, y, size, color, speed), sistema de partículas para confetti, game loop simple, hit-testing circular, contador
- **CSS:** Fullscreen canvas (100% height/width), no scroll
- **Otros:** Web Audio API para sonidos de pop (tonalidad según tamaño), localStorage para trackeer globos explotados

**Características Visuales:**
- **Paleta de colores:** Cielo azul claro (#87CEEB), globos colores translúcidos brillantes (6 colores), confetti colores sólidos, nubes blancas (#FFFFFF) flotando
- **Animaciones:** Globos flotan hacia arriba con movimiento ondulante (sine wave), al explotar: partículas se expanden (0.5s) + caen con gravedad, globo desaparece (scale 1.2→0), al completar 15: globo gigante aparece con pop masivo
- **Feedback visual:** Globo brilla al tocar (box-shadow), reflejos de luz en superficie, confetti cae suavemente y se desvanece, globo gigante pulsa
- **Personajes:** Sin personajes, solo globos con brillitos y nubes

**Audio:**
- **Efectos de sonido:** "Pop" suave al explotar globo (variación tonal según tamaño: globos grandes = pop más grave), "Whoosh" si globo desaparece sin explotar, "Ta-da!" al aparecer globo gigante
- **Música:** Fondo instrumental festivo (piano + trompeta + campanitas), volumen muy bajo (15%)
- **Sin voz:** Sin TTS para mantener ritmo de juego

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 12-16 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <10MB total size, smooth animation con 20+ globos simultáneos

**Valor Educativo:**
- Coordinación mano-ojo (tap rápido)
- Nociones de tamaño (grande vs pequeño)
- Colores (6 colores de globos)
- Concepto de flotar hacia arriba
- Conteo básico (1-15)

**Referencias e Inspiración:**
- [Canvas Particle Systems](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [Circular Hit Detection](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection/Circular_collision_detection)
- [Toca Boca: Balloon Pop](https://tocaboca.com/) (referencia similar)
- [Sago Mini: Balloons](https://sagomini.com/) (inspiración de globos)

---

#### Idea #27: El Cocinero Pequeño 👨‍🍳🍳🥘

**Concepto:**
Un cocinero pequeño con gorro blanco aparece en una cocina. Ingredientes (tomate, lechuga, queso, pan) flotan en la mesa. El niño toca un ingrediente y este vuela hacia el plato del cocinero. Al completar una receta (4 ingredientes), el cocinero hace un plato completo y lo sirve con aplausos.

**Motivación:**
- **Independencia:** El niño ayuda al cocinero tocando ingredientes
- **Logro:** Ver el plato completo servido
- **Aprendizaje:** Nombres de ingredientes, recetas básicas, cocina

**Mecánica Principal:**
Cocina con fogón rojo, mesadas de madera (#DEB887). Cocinero pequeño (100-120px) con gorro blanco (#FFFFFF) en centro. 8 ingredientes flotan en la mesa: tomate rojo (#FF6347), lechuga verde (#32CD32), queso amarillo (#FFD700), pan marrón (#8B4513), huevo blanco (#F5F5DC), pollo dorado (#DAA520), zanahoria naranja (#FFA500), papa marrón (#D2691E). Plato blanco en frente del cocinero (80-100px). Al tocar un ingrediente, este vuela en curva hacia el plato (0.6s) y se asienta con "¡Plonk!". Contador: "🥘 3/4". Al completar 4 ingredientes (receta), el cocinero hace un plato completo (animación de mezclar) y lo sirve con aplausos. Toque en cocinero reinicia el juego.

**Interacción Móvil:**
- **Tipo:** Tap (toca ingrediente → vuela al plato)
- **Accesibilidad:** Ingredientes grandes (50-60px), plato grande (80-100px), cocinero muy visible (100-120px), targets generosos
- **Sin requisitos de precisión:** Tap en cualquier parte del ingrediente funciona

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para cocina, cocinero, ingredientes, plato, absolute positioning, ARIA labels
- **JavaScript:** Event listeners para tap, animaciones con CSS transforms (bezier curves), gestión de estado (ingredientes en plato), detección de completado (receta terminada)
- **CSS:** Animaciones keyframes (fly-to-plate, mix, serve), bezier curves para movimiento suave, transforms para colocación
- **Otros:** Web Audio API para sonidos de cocina, localStorage para trackeer recetas completadas

**Características Visuales:**
- **Paleta de colores:** Fondo cocina (azul pastel #ADD8E6), mesadas madera (#DEB887), fogón rojo (#DC143C), ingredientes colores naturales vibrantes, plato blanco (#FFFFFF)
- **Animaciones:** Ingredientes flotan suavemente (float 2s ease-in-out infinite), al volar al plato: curva bezier (0.6s), al completar receta: cocinero mezcla (shake 0.5s) y sirve (pose felíz 1s)
- **Feedback visual:** Ingrediente brilla al tocar, plato se ilumina al agregar ingrediente, cocinero celebra al completar receta, confetti de comida al servir
- **Personajes:** Cocinero pequeño con gorro blanco, delantal, sonrisa amigable, ojos grandes

**Audio:**
- **Efectos de sonido:** "¡Plonk!" al poner ingrediente en plato, "¡Sizzle!" al cocinar (opcional), "¡Mmm!" del cocinero al completar receta, aplausos al servir
- **Música:** Fondo instrumental de cocina (piano + xilófono), volumen bajo (20%)
- **Voz:** TTS para "¡Tomate!", "¡Lechuga!", "¡Queso!", "¡Pan!" al tocar, "¡Plato listo!" al completar receta

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <12MB total size

**Valor Educativo:**
- Nombres de ingredientes (8 alimentos)
- Concepto de receta (mezcla de ingredientes)
- Colores naturales de alimentos
- Secuenciación (agregar 4 ingredientes)
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [CSS Bezier Curves - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- [Absolute Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Toca Boca: Kitchen](https://tocaboca.com/) (inspiración de cocina)
- [Sago Mini: Chef](https://sagomini.com/) (referencia similar)

---

#### Idea #28: Los Animales del Zoológico 🦁🐘🦒

**Concepto:**
Un zoológico con 5 jaulas aparece en pantalla. Los animales (león, elefante, jirafa, zebra, mono) están escondidos detrás de las jaulas. El niño toca una jaula y el animal asoma la cabeza, hace su sonido característico y el cuidador aparece con comida. Al tocar todas las jaulas, los animales hacen un safari together.

**Motivación:**
- **Independencia:** El niño descubre animales tocando jaulas
- **Logro:** Ver el safari together de todos los animales
- **Aprendizaje:** Nombres de animales del zoológico, sonidos

**Mecánica Principal:**
Zoológico con 5 jaulas (cada una 80-100px) en fila horizontal. Jaulas tienen barrotes visuales. Animales escondidos: león (#FFD700), elefante (#808080), jirafa (#F5DEB3), zebra (#FFFFFF con rayas), mono (#8B4513). Cuidador (personaje con gorra y uniforme verde) aparece al tocar jaula. Al tocar jaula 1 (león), el animal asoma la cabeza (scale 0.5→1.0 + translateY 20px, 0.3s) hace "¡Roar!", el cuidador aparece con carne y el león come. Tocando jaula 2 (elefante), asoma, hace "¡Trumpet!", cuidador aparece con manzana, etc. Contador: "🦁 2/5". Al tocar todas las jaulas, los animales salen de sus jaulas, caminan juntos y hacen un safari con aplausos. Toque en zoológico reinicia el juego.

**Interacción Móvil:**
- **Tipo:** Tap (toca jaula → animal asoma)
- **Accesibilidad:** Jaulas grandes (80-100px), animales medianos (50-60px), targets muy fáciles
- **Sin penalización:** Puede tocar en cualquier orden, no hay "fallo"

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para zoológico, jaulas, animales, cuidador, absolute positioning, ARIA labels
- **JavaScript:** Event listeners para tap, gestión de estado (jaulas descubiertas), animaciones con CSS transforms, detección de completado (todas las jaulas descubiertas)
- **CSS:** Animaciones keyframes (peek, feed, walk-together), bezier curves para movimiento suave, transforms para aparición
- **Otros:** Web Audio API para sonidos de animales, localStorage para trackeer safaris

**Características Visuales:**
- **Paleta de colores:** Fondo zoológico (verde prado #90EE90), jaulas metal gris (#696969) con barrotes, animales colores naturales, cuidador uniforme verde (#228B22)
- **Animaciones:** Animal asoma al tocar jaula (peek 0.3s), cuidador aparece y alimenta (feed 0.5s), al completar todos: animales salen de jaulas y caminan juntos (walk-together 2s)
- **Feedback visual:** Jaula brilla al tocar, animal parpadea al aparecer, cuidador trae comida con animación, confetti de animales al safari
- **Personajes:** Animales estilo cartoon con ojos grandes, cuidador amigable con gorra y sonrisa

**Audio:**
- **Efectos de sonido:** León: "¡Roar!", elefante: "¡Trumpet!", jirafa: "¡Munch!", zebra: "¡Neigh!", mono: "¡Ooh-ooh!", cuidador: "¡Aquí está tu comida!"
- **Música:** Fondo instrumental de zoológico (tambor + flauta), volumen bajo (20%)
- **Voz:** TTS para "¡León!", "¡Elefante!", "¡Jirafa!", "¡Zebra!", "¡Mono!" al tocar jaula, "¡Safari!" al completar

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <10MB total size

**Valor Educativo:**
- Animales del zoológico (5 animales)
- Sonidos característicos de animales
- Nombres de animales en español
- Concepto de zoo y hábitat
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [CSS Transforms - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Absolute Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Sago Mini: Zoo](https://sagomini.com/) (inspiración de zoológico)
- [PBS Kids: Zoo Games](https://pbskids.org/games/) (referencia similar)

---

### Lote 8 (Ideas 29-32)
**Fecha:** 2026-02-17
**Ejecución:** 4/25

#### Idea #29: Las Flores Crecen 🌸🌻🌷

**Concepto:**
Un jardín con tierra aparece en pantalla. El niño toca la tierra y una semilla se planta. Con cada toque adicional, la flor crece: semilla → brote → tallo → hojas → botón → flor completa. Al florecer, la flor hace un sonido feliz y libera pétalos brillantes.

**Motivación:**
- **Independencia:** El niño hace crecer las flores tocando
- **Logro:** Ver la flor completarse y florecer
- **Aprendizaje:** Ciclo de vida de las plantas, paciencia, causa-efecto

**Mecánica Principal:**
Jardín con tierra marrón (#8B4513) en la parte inferior (30% altura), cielo azul (#87CEEB) arriba. Inicia con tierra vacía. Al tocar la tierra, una semilla pequeña (15px) aparece con "¡Plif!" suave. La semilla tiene 6 etapas de crecimiento:
1. Semilla (tap 1) → aparece
2. Brote (tap 2) → pequeño tallo verde emerge
3. Tallo (tap 3) → tallo crece 30px
4. Hojas (tap 4) → 2 hojas aparecen
5. Botón (tap 5) → botón de color aparece en cima
6. Flor (tap 6) → flor completa con pétalos

Cada etapa hace un sonido ("¡Plif!", "¡Pop!", "¡Grow!", "¡Leaf!", "¡Bud!", "¡Bloom!") y muestra TTS del nombre. Al completar la flor (etapa 6), la flor pulsa con brillo, libera pétalos brillantes (partículas #FFD700) y hace "¡Bloom-beautiful!". Hay 5 tipos de flores desbloqueables (rosa #FF69B4, girasol #FFD700, tulipán #FF4500, margarita #FFFFFF, orquídea #9932CC).

**Interacción Móvil:**
- **Tipo:** Tap secuencial (6 toques por flor)
- **Accesibilidad:** Tierra grande (30% altura), cada toque crea la siguiente etapa, no hay penalización por tocar fuera de orden
- **Sin penalización:** Puede tocar en cualquier lugar de la tierra, siempre avanza a la siguiente etapa

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para jardín, tierra, flores, etapas de crecimiento, requestAnimationFrame para 60 FPS
- **JavaScript:** Clase Flower con propiedades (stage, type, color, x, y), array de etapas (1-6), detección de tap en tierra, sistema de partículas para pétalos, TTS para nombres de etapas
- **CSS:** Fullscreen canvas (100% height/width), no scroll
- **Otros:** Web Audio API para sonidos de crecimiento, localStorage para desbloquear tipos de flores

**Características Visuales:**
- **Paleta de colores:** Cielo azul (#87CEEB), tierra marrón (#8B4513), flores colores vibrantes (rosa #FF69B4, girasol #FFD700, tulipán #FF4500, margarita #FFFFFF, orquídea #9932CC), tallo verde (#228B22)
- **Animaciones:** Etapa 1: semilla aparece con pop-in (scale 0→1, 0.3s), etapa 2: brote emerge (translateY -10px, 0.4s), etapa 3: tallo crece (scale Y 1→3, 0.5s), etapa 4: hojas se despliegan (scale 0→1, 0.3s), etapa 5: botón se expande (scale 0→1.2→1.0, 0.4s), etapa 6: flor completa pulsa con glow
- **Feedback visual:** Cada etapa brilla al aparecer, pétalos brillantes flotan al completar, confetti de naturaleza (🌸, 🌻, 🌷)
- **Personajes:** Sin personajes, solo flores con pétalos detallados y centros brillantes

**Audio:**
- **Efectos de sonido:** "¡Plif!" (semilla), "¡Pop!" (brote), "¡Grow!" (tallo), "¡Leaf!" (hojas), "¡Bud!" (botón), "¡Bloom-beautiful!" (flor completa) - sonidos naturales y orgánicos
- **Música:** Fondo instrumental de jardín (piano + flauta + violín), volumen muy bajo (15%)
- **Voz:** TTS para "¡Semilla!", "¡Brote!", "¡Tallo!", "¡Hojas!", "¡Botón!", "¡Flor!" en español, voz femenina suave

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 18-22 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <12MB total size, smooth animations con 5+ flores en pantalla

**Valor Educativo:**
- Ciclo de vida de las plantas
- Paciencia y causa-efecto
- Nombres de partes de la planta
- Colores de flores
- Secuenciación (6 etapas por flor)

**Referencias e Inspiración:**
- [Canvas Growth Animations](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Garden](https://sagomini.com/) (inspiración de jardín)
- [Toca Boca: Flower Games](https://tocaboca.com/) (referencia similar)

---

#### Idea #30: Peces en el Acuario 🐠🐟🐡

**Concepto:**
Un acuario cristalino aparece con agua azul. Peces de colores nadan libremente. El niño toca el agua y los peces nadan hacia ese lugar. Al tocar un pez, este hace un sonido burbujeante ("¡Blub!") y burbujas de colores salen. Al tocar todos los peces (5-7), hacen una carrera de natación.

**Motivación:**
- **Independencia:** El niño guía a los peces tocando el agua
- **Logro:** Ver la carrera de natación de todos los peces
- **Aprendizaje:** Animales acuáticos, movimiento acuático, colores

**Mecánica Principal:**
Acuario con agua azul (#1E90FF → #87CEEB gradiente) ocupa pantalla completa. 5-7 peces nadan libremente: pez dorado (#FFD700), pez azul (#4169E1), pez payaso (#FF4500 + blanco), pez globo (#FFA500), pez arcoíris (multicolor), pez gato (#8B4513), pez betta (rojo #DC143C). Peces nadan con movimiento ondulante (sine wave, 3-5s). Burbujas (#E0FFFF) suben del fondo con movimiento lento. Al tocar el agua (no en pez), los peces nadan hacia la posición del toque (bezier curve, 1s). Al tocar un pez, este hace "¡Blub!" (tonalidad según tamaño), burbujas de colores salen de su boca (partículas #FFD700, #FF69B4, #44FF44). Contador: "🐠 3/7". Al tocar todos los peces, estos hacen una carrera de natación hacia la derecha con chapoteo y aplausos.

**Interacción Móvil:**
- **Tipo:** Tap en agua (peces nadan hacia toque) + tap en pez (burbujea)
- **Accesibilidad:** Acuario grande (100% pantalla), peces medianos-grandes (50-70px), targets generosos
- **Sin penalización:** Peces que ya nadaron hacia el toque repiten la animación

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para acuario, peces, burbujas, requestAnimationFrame para 60 FPS
- **JavaScript:** Clases Fish y Bubble, sistema de navegación (bezier curve hacia toque), hit-testing para peces vs agua, sistema de partículas para burbujas, detección de completado
- **CSS:** Fullscreen canvas (100% height/width), no scroll
- **Otros:** Web Audio API para sonidos de peces y burbujas, localStorage para trackeer carreras

**Características Visuales:**
- **Paleta de colores:** Agua gradiente (#1E90FF → #87CEEB), peces colores vibrantes naturales, burbujas translúcidas (#E0FFFF), fondo de acuario con plantas y rocas
- **Animaciones:** Peces nadan con movimiento ondulante (sine wave), al nadar hacia toque: bezier curve (1s), al tocar pez: burbujas de colores salen (partículas suben 1.5s + fade), al carrera: peces nadan rápido a la derecha (2s)
- **Feedback visual:** Pez brilla al tocar, burbujas explotan en partículas, agua se ilumina al tocar, confetti de burbujas al carrera
- **Personajes:** Peces estilo cartoon con ojos grandes, aletas brillantes, escamas reflectantes

**Audio:**
- **Efectos de sonido:** Peces: "¡Blub!" (tonalidad según tamaño: peces grandes = blub más grave), burbujas "¡Pop-pop-pop!", carrera: "¡Swoosh!" colectivo
- **Música:** Fondo instrumental de acuario (piano + campanitas acuáticas), volumen muy bajo (15%)
- **Voz:** TTS para "¡Pez dorado!", "¡Pez azul!", "¡Carrera!" al completar todos los peces

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 18-22 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <15MB total size, smooth animation con 7+ peces + burbujas

**Valor Educativo:**
- Animales acuáticos (7 tipos de peces)
- Concepto de movimiento acuático
- Colores de peces
- Causa-efecto (tocar agua → peces nadan)
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [Canvas Particle Systems](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Fish Tank](https://sagomini.com/) (inspiración de acuario)
- [PBS Kids: Ocean Games](https://pbskids.org/games/) (referencia similar)

---

#### Idea #31: Los Autos del Taller 🚗🔧⚙️

**Concepto:**
Un taller mecánico con autos descompuestos aparece. El niño toca una herramienta (llave, martillo, destornillador) y el auto correspondiente se repara con animación de herramientas. Al reparar todos los autos (4-6), estos salen del taller en desfile con aplausos.

**Motivación:**
- **Independencia:** El niño repara autos tocando herramientas
- **Logro:** Ver el desfile de autos reparados
- **Aprendizaje:** Herramientas básicas, reparación, nombres de autos

**Mecánica Principal:**
Taller con fondo de concreto (#C0C0C0) y paredes de ladrillo (#A52A2A). 4-6 autos descompuestos aparecen: auto rojo con llanta pinchada, auto azul con parabrisas roto, auto verde con puerta abollada, auto amarillo con motor humeante, etc. Herramientas flotan arriba: llave (#FFD700), martillo (#8B4513), destornillador (#FF4500), alicate (#708090). Al tocar una herramienta, esta vuela hacia el auto correspondiente (ej: llave → auto con llanta pinchada) con animación (0.6s), hace "¡Click!" y repara el auto. El auto hace un sonido de motor ("¡Vroom!") y brilla. Contador: "🔧 2/6". Al reparar todos los autos, estos salen del taller en desfile (derecha de pantalla) con sirenas y aplausos.

**Interacción Móvil:**
- **Tipo:** Tap en herramienta (vuela al auto correspondiente)
- **Accesibilidad:** Herramientas grandes (50-60px), autos grandes (80-100px), targets generosos
- **Sin penalización:** Si toca la herramienta equivocada, no pasa nada (espera la correcta)

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para taller, autos, herramientas, absolute positioning, ARIA labels
- **JavaScript:** Event listeners para tap, animaciones con CSS transforms (bezier curves), gestión de estado (autos reparados/pendientes), detección de completado
- **CSS:** Animaciones keyframes (tool-fly, repair, vroom, parade), bezier curves para movimiento suave, transforms para colocación
- **Otros:** Web Audio API para sonidos de reparación y motores, localStorage para trackeer autos reparados

**Características Visuales:**
- **Paleta de colores:** Fondo concreto (#C0C0C0), paredes ladrillo (#A52A2A), autos colores vibrantes (rojo #FF4444, azul #4444FF, verde #44FF44, amarillo #FFFF00), herramientas metálicas brillantes (llave #FFD700, martillo #8B4513, destornillador #FF4500)
- **Animaciones:** Herramienta vuela en curva hacia auto (0.6s), al reparar: herramienta hace animación de "click" (rotate 45° → 0°, 0.3s), auto brilla (box-shadow), al completar: autos salen en desfile con sirenas
- **Feedback visual:** Herramienta brilla al tocar, auto se ilumina al reparar, herramientas metálicas reflejan luz, confetti de engranajes al completar
- **Personajes:** Autos con caritas y ojos grandes (estilo Cars)

**Audio:**
- **Efectos de sonido:** "¡Click!" de herramienta, "¡Vroom!" de motor al reparar, sirena ("¡Wee-woo!") al desfile, engranajes girando ("¡Grrr!")
- **Música:** Fondo instrumental de taller (tambor + guitarra), volumen bajo (20%)
- **Voz:** TTS para "¡Llave!", "¡Martillo!", "¡Auto rojo!", "¡Reparado!" al completar

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <12MB total size, smooth animations

**Valor Educativo:**
- Nombres de herramientas básicas (4 tipos)
- Concepto de reparación (descompuesto → reparado)
- Colores de autos
- Secuenciación (reparar todos los autos)
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [CSS Transforms - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Absolute Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Toca Boca: Garage](https://tocaboca.com/) (inspiración de taller)
- [Sago Mini: Mechanic](https://sagomini.com/) (referencia similar)

---

#### Idea #32: El Castillo de Arena 🏰🏖️🐚

**Concepto:**
Una playa con arena aparece. El niño toca la arena y el niño (personaje pequeño) construye un castillo capa por capa. Al completar el castillo, banderas aparecen y el niño celebra con aplausos. Hay diferentes tipos de castillos desbloqueables.

**Motivación:**
- **Independencia:** El niño construye el castillo tocando la arena
- **Logro:** Ver el castillo completo con banderas
- **Aprendizaje:** Construcción, capas, formas, paciencia

**Mecánica Principal:**
Playa con arena amarilla (#F4A460) ocupa pantalla completa. Océano azul (#4169E1) en parte inferior. Personaje pequeño (60-70px) con sombrero y pala aparece listo para construir. El castillo tiene 5 capas:
1. Base (tap 1) → cuadrado de arena
2. Paredes (tap 2) → 4 muros aparecen
3. Torres (tap 3) → 4 torres en esquinas
4. Puerta (tap 4) → puerta de madera aparece
5. Bandera (tap 5) → bandera roja en cima

Cada capa hace un sonido ("¡Scrape!", "¡Build!", "¡Tower!", "¡Door!", "¡Flag!") y muestra TTS del nombre. Al completar la capa 5, el castillo brilla, banderas ondean, el niño celebra (salta + aplaude) y conchas marinas (🐚) aparecen alrededor. Hay 3 tipos de castillos desbloqueables (castillo clásico, castillo de princesa, fortaleza).

**Interacción Móvil:**
- **Tipo:** Tap secuencial (5 toques por castillo)
- **Accesibilidad:** Arena grande (100% pantalla), personaje visible, cada toque crea la siguiente capa
- **Sin penalización:** Puede tocar en cualquier lugar de la arena, siempre avanza a la siguiente capa

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para playa, arena, castillo, personaje, requestAnimationFrame para 60 FPS
- **JavaScript:** Clase Castle con propiedades (stage, type, x, y), array de capas (1-5), detección de tap en arena, sistema de partículas para conchas, TTS para nombres de capas
- **CSS:** Fullscreen canvas (100% height/width), no scroll
- **Otros:** Web Audio API para sonidos de construcción, localStorage para desbloquear tipos de castillos

**Características Visuales:**
- **Paleta de colores:** Arena (#F4A460), océano (#4169E1), castillo arena (#DEB887), bandera roja (#DC143C), personaje piel (#F5DEB3) con sombrero (#696969)
- **Animaciones:** Capa 1: base aparece con pile-up (scale Y 0→1, 0.5s), capa 2: muros suben (translateY -20px, 0.4s), capa 3: torres aparecen en esquinas (scale 0→1, 0.5s), capa 4: puerta aparece con creak (rotateX -90°→0°, 0.6s), capa 5: bandera ondea (wave animation, 2s infinite)
- **Feedback visual:** Cada capa brilla al aparecer, castillo pulsa al completar, banderas ondean, conchas marinas aparecen alrededor, confetti de arena
- **Personajes:** Personaje pequeño con sombrero, pala, sonrisa grande

**Audio:**
- **Efectos de sonido:** "¡Scrape!" (rastrillar arena), "¡Build!" (construir), "¡Tower!" (torres aparecen), "¡Door!" (puerta abre), "¡Flag!" (bandera ondea), celebración: "¡Yay!" del niño
- **Música:** Fondo instrumental de playa (piano + maracas), volumen muy bajo (15%)
- **Voz:** TTS para "¡Base!", "¡Paredes!", "¡Torres!", "¡Puerta!", "¡Bandera!" en español, voz femenina suave

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 18-22 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <12MB total size, smooth animations

**Valor Educativo:**
- Concepto de construcción (capas)
- Nombres de partes de castillo
- Formas (cuadrado, torres, puerta)
- Paciencia y secuenciación
- Creatividad (3 tipos de castillos)

**Referencias e Inspiración:**
- [Canvas Layer Animations](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Beach](https://sagomini.com/) (inspiración de playa)
- [Toca Boca: Sandbox](https://tocaboca.com/) (referencia similar)

---

### Lote 9 (Ideas 33-36)
**Fecha:** 2026-02-17
**Ejecución:** 4/25

#### Idea #33: Pinta con Pinceles 🎨🖌️🌈

**Concepto:**
El niño toca un pincel de color y este pinta trazos grandes en un lienzo blanco. Al terminar de pintar, puede tocar un botón para "mostrar" la pintura con aplausos. Cada pincel hace un sonido diferente al pintar.

**Motivación:**
- **Independencia:** El niño crea arte tocando pinceles
- **Logro:** Ver su propia creación con celebración
- **Aprendizaje:** Nombres de colores y expresión artística

**Mecánica Principal:**
Pantalla con lienzo blanco grande ocupando 80% de la pantalla. En la parte superior, 4 pinceles de colores: rojo (#FF4444), azul (#4444FF), amarillo (#FFFF00), verde (#44FF44). Al tocar un pincel, este se selecciona (brilla) y el niño puede arrastrar su dedo por el lienzo para pintar trazos gruesos (stroke-width: 20px). Cada pincel hace sonido diferente al pintar: rojo ("Swish!"), azul ("Whoosh!"), amarillo ("Zap!"), verde ("Vroom!"). Contador de trazos: "🖌️ 5". Al tocar botón "¡Muestra!" (abajo), la pintura brilla, aplausos suenan y el niño celebra. Botón "Borrar" reinicia el lienzo.

**Interacción Móvil:**
- **Tipo:** Tap (seleccionar pincel) + Arrastrar (pintar en lienzo)
- **Accesibilidad:** Pinceles grandes (50-60px), lienzo muy grande (80% pantalla), stroke grueso fácil de ver
- **Sin penalización:** Puede pintar en cualquier lugar, colores se mezclan superponiéndose

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para lienzo y trazos, touch events para dibujar (touchstart, touchmove, touchend), ARIA labels
- **JavaScript:** Canvas API para dibujar trazos (moveTo, lineTo, stroke), gestión de estado (pincel seleccionado), array de trazos, detección de completado
- **CSS:** Flexbox para layout (pinceles arriba, lienzo centro, botones abajo), canvas responsivo (width: 100%, height: 60%)
- **Otros:** Web Audio API para sonidos de pinceles, localStorage para guardar creaciones

**Características Visuales:**
- **Paleta de colores:** Fondo gris claro (#F5F5F5), lienzo blanco (#FFFFFF), pinceles colores brillantes, botones azules (#1E90FF)
- **Animaciones:** Pincel brilla al seleccionar (box-shadow), trazos aparecen suavemente al arrastrar, al "mostrar": lienzo brilla (scale 1.05 → 1.0), confetti de colores
- **Feedback visual:** Pincel seleccionado es más grande (scale 1.2), trazos tienen sombra suave, botones se iluminan al tocar
- **Personajes:** Sin personajes, solo pinceles y lienzo

**Audio:**
- **Efectos de sonido:** Pinceles: rojo ("Swish!"), azul ("Whoosh!"), amarillo ("Zap!"), verde ("Vroom!") al pintar, "¡Ta-da!" al mostrar, aplausos completos
- **Música:** Fondo instrumental de arte (piano + violín), volumen muy bajo (10%)
- **Voz:** TTS para "¡Rojo!", "¡Azul!", "¡Amarillo!", "¡Verde!", "¡Muestra!", "¡Borrar!" en español

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <10MB total size, smooth drawing (sin lag)

**Valor Educativo:**
- Nombres de colores (4 colores base)
- Expresión artística básica
- Coordinación mano-ojo (dibujar)
- Creatividad y auto-expresión
- Concepto de crear algo propio

**Referencias e Inspiración:**
- [Canvas Drawing API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
- [Touch Events for Drawing](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [Toca Boca: Paint](https://tocaboca.com/) (inspiración de pintar)
- [Sago Mini: Art](https://sagomini.com/) (referencia similar)

---

#### Idea #34: Encaja las Formas 🔺⭕🟦

**Concepto:**
Formas geométricas (triángulo, círculo, cuadrado, estrella) aparecen en un lado y huecos correspondientes en el otro. El niño arrastra cada forma al hueco correcto. Al encajar, la forma hace un "¡Click!" y brilla.

**Motivación:**
- **Independencia:** El niño encaja formas por sí solo
- **Logro:** Ver todas las formas encajadas correctamente
- **Aprendizaje:** Formas geométricas básicas y conceptos de encaje

**Mecánica Principal:**
Pantalla dividida en dos columnas. Izquierda: formas flotando (triángulo rojo, círculo azul, cuadrado verde, estrella amarilla). Derecha: huecos correspondientes. Al tocar y arrastrar una forma, esta sigue el dedo con escala 1.1 (feedback de selección). Al soltar sobre el hueco correcto (hit-testing con +/- 30px tolerancia), la forma se ajusta al hueco con animación de "snap-in" (scale 1.2 → 1.0, 0.2s), hace "¡Click!" y brilla. Si suelta en hueco incorrecto, la forma regresa a posición original con animación de "spring-back" (0.3s). Al encajar todas las 4 formas, todas brillan juntas, confetti aparece y celebración suena.

**Interacción Móvil:**
- **Tipo:** Arrastrar y soltar (drag-and-drop)
- **Accesibilidad:** Formas medianas-grandes (60-70px), huecos grandes (70-80px), hit-testing generoso (+30px)
- **Sin penalización:** Forma regresa amablemente si se suelta incorrectamente

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para formas y huecos, Touch API (touchstart, touchmove, touchend), absolute positioning
- **JavaScript:** Event listeners para drag-and-drop, detección de colisión (hit-testing), gestión de estado (encajadas/pendientes), animaciones CSS
- **CSS:** Animaciones keyframes (snap-in, spring-back, glow), transforms para movimiento, flexbox para layout
- **Otros:** Web Audio API para sonidos de encaje, localStorage para trackeer formas completadas

**Características Visuales:**
- **Paleta de colores:** Fondo pastel (#F0F8FF), formas colores brillantes (triángulo #FF4444, círculo #4444FF, cuadrado #44FF44, estrella #FFD700), huecos blanco (#FFFFFF) con borde gris (#D3D3D3)
- **Animaciones:** Forma se levanta al arrastrar (scale 1.1 + translateY -5px), al encajar: snap-in (scale 1.2 → 1.0), si falla: spring-back (translateY -10px → 0, 0.3s), al completar: todas brillan + confetti
- **Feedback visual:** Hueco brilla cuando forma está sobre él, forma se ilumina al encajar, partículas de estrellas al completar
- **Personajes:** Sin personajes, solo formas geométricas

**Audio:**
- **Efectos de sonido:** "¡Click!" al encajar correctamente, "¡Oops!" suave si falla, "¡Yay!" al completar todas, aplausos
- **Música:** Fondo instrumental de puzzles (xilófono + piano), volumen bajo (20%)
- **Voz:** TTS para "¡Triángulo!", "¡Círculo!", "¡Cuadrado!", "¡Estrella!" en español al encajar cada forma

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 12-16 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <8MB total size, smooth drag sin lag

**Valor Educativo:**
- Formas geométricas básicas (4 formas)
- Concepto de encaje y correspondencia
- Coordinación mano-ojo (drag-and-drop)
- Espacialidad (ubicar en posición correcta)
- Colores asociados a formas

**Referencias e Inspiración:**
- [Touch Events - Drag and Drop](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [CSS Transforms - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Sago Mini: Shapes](https://sagomini.com/) (inspiración de formas)
- [PBS Kids: Shape Games](https://pbskids.org/games/) (referencia similar)

---

#### Idea #35: La Granja Musical 🐮🐔🐷

**Concepto:**
Animales de granja (vaca, gallina, cerdo, oveja) aparecen en un prado verde. Al tocar un animal, este hace su sonido característico y una nota musical aparece sobre su cabeza. Si tocas animales en secuencia, crean una melodía sencilla.

**Motivación:**
- **Independencia:** El niño crea música tocando animales
- **Logro:** Hacer sonar melodías cortas
- **Aprendizaje:** Sonidos de animales de granja y melodía básica

**Mecánica Principal:**
Prado verde (#90EE90) ocupa toda la pantalla. 4 animales distribuidos: vaca (izquierda), gallina (arriba centro), cerdo (derecha), oveja (abajo centro). Cada animal tiene nota sobre cabeza (vaca: Do, gallina: Re, cerdo: Mi, oveja: Fa). Al tocar animal, hace su sonido (vaca: "Muu", gallina: "Cocorocó", cerdo: "Oink", oveja: "Beee") y nota brilla. Si el niño toca 1-2-3-4 en orden, los animales hacen un mini concierto (todos suenan en secuencia) y confetti de granos aparece. Si toca en cualquier orden, solo suenan individualmente. No hay fallo, solo creación.

**Interacción Móvil:**
- **Tipo:** Tap individual (toca animal → sonido)
- **Accesibilidad:** Animales grandes (80-90px), notas visibles, targets fáciles
- **Sin requisitos de secuencia:** Puede tocar en cualquier orden

**Tecnologías Requeridas:**
- **HTML5:** `<button>` elements con ARIA labels, `<audio>` para sonidos pre-grabados de animales, SVG para notas musicales
- **JavaScript:** Event listeners para click/tap, gestión de secuencia (array de índices), Web Audio API para mezclar sonidos, timeout para detectar secuencia (2s ventana)
- **CSS:** Animaciones (scale al tocar, glow en notas), responsive layout (flexbox wrap), gradiente para fondo
- **Otros:** Web Audio API para sincronización, localStorage para desbloquear melodías adicionales

**Características Visuales:**
- **Paleta de colores:** Prado verde (#90EE90), cielo azul (#87CEEB), animales colores naturales (vaca blanco-negro, gallina roja-amarilla, cerdo rosa, oveja blanca), notas doradas (#FFD700)
- **Animaciones:** Animal se levanta al tocar (scale 1.1 + translateY -8px, 0.2s), nota brilla (animation: glow 0.5s), confetti de granos al concierto, animal salta al completar
- **Feedback visual:** Nota se ilumina con color del animal, partículas de granos de maíz al completar secuencia, animal hace "happy dance"
- **Personajes:** Animales estilo granja cartoon con ojos grandes y sonrisa

**Audio:**
- **Efectos de sonido:** Vaca: "Muu", gallina: "Cocorocó", cerdo: "Oink", oveja: "Beee" (sonidos reales), "Ding!" al tocar, mini concierto: melodía "Do-Re-Mi-Fa" (3s)
- **Música:** Fondo instrumental de granja (acordeón + tambor), volumen bajo (20%)
- **Voz:** TTS para "¡Vaca!", "¡Gallina!", "¡Cerdo!", "¡Oveja!" en español al tocar cada animal

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <10MB total size, baja latencia audio (<50ms)

**Valor Educativo:**
- Animales de granja (4 tipos)
- Sonidos característicos
- Nociones musicales básicas (notas Do, Re, Mi, Fa)
- Secuenciación (1-2-3-4 para mini concierto)
- Creatividad musical

**Referencias e Inspiración:**
- [Web Audio API - AudioContext](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext)
- [HTML5 Audio Best Practices](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [Sago Mini: Farm](https://sagomini.com/) (inspiración de granja)
- [PBS Kids: Farm Sounds](https://pbskids.org/games/) (referencia similar)

---

#### Idea #36: El Semáforo Mágico 🚦🚗🛑

**Concepto:**
Un semáforo con luces roja, amarilla, verde aparece. El niño toca las luces y hace que los carros frenen, esperen o aceleren. Carros animados aparecen y reaccionan al color del semáforo.

**Motivación:**
- **Independencia:** El niño controla el tráfico tocando luces
- **Logro:** Ver carros frenar y acelerar según su comando
- **Aprendizaje:** Colores del semáforo, conceptos de parar/esperar/ir

**Mecánica Principal:**
Pantalla con carretera horizontal gris (#708090) en centro. Semáforo grande (100-120px) en esquina superior derecha con 3 luces: roja (#FF0000), amarilla (#FFFF00), verde (#00FF00). Carros pequeños (40-50px) aparecen desde izquierda y se mueven a la derecha (velocidad base: 30px/s). Inicia en verde: carros aceleran (100px/s) con sonido "Vroom!". Al tocar luz roja: se ilumina, carros frenan suavemente (velocidad → 0 en 1s) con sonido "¡Squeak!" y se detienen. Luz amarilla: carros desaceleran (100px/s → 30px/s) con sonido "Hmm...". Luz verde: carros aceleran con "Vroom!". Contador de carros: "🚗 5". No hay colisiones; carros se alinean detrás de otros.

**Interacción Móvil:**
- **Tipo:** Tap en luces (roja → parar, amarilla → esperar, verde → ir)
- **Accesibilidad:** Semáforo muy grande (100-120px), luces grandes (30-35px), targets muy fáciles
- **Sin requisitos de precisión:** Tap en cualquier parte de la luz funciona

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para carretera, semáforo y carros, requestAnimationFrame para animación suave
- **JavaScript:** Clase Car con propiedades (x, y, speed, state), clase TrafficLight con estado actual, game loop, detección de tap en semáforo
- **CSS:** Fullscreen canvas (100% height/width), overlay de contador en esquina
- **Otros:** Web Audio API para sonidos de motores y frenado, localStorage para trackeer carros

**Características Visuales:**
- **Paleta de colores:** Cielo (#87CEEB), carretera (#708090), semáforo negro (#000000), luces (roja #FF0000, amarilla #FFFF00, verde #00FF00), carros colores vibrantes (rojo #FF4444, azul #4444FF, amarillo #FFFF00)
- **Animaciones:** Carros se mueven a velocidad actual, al frenar: desaceleración suave (easing), al acelerar: aceleración (con "motion blur" opcional), semáforo brilla al tocar
- **Feedback visual:** Luz seleccionada es más brillante (box-shadow), carros frenan con "smoke" partículas, luces parpadean en transiciones
- **Personajes:** Carros con caritas y ojos grandes

**Audio:**
- **Efectos de sonido:** "Vroom!" al acelerar (verde), "¡Squeak!" al frenar (rojo), "Hmm..." al esperar (amarilla), "¡Clack!" al tocar semáforo
- **Música:** Fondo instrumental de ciudad (tambor + guitarra ligera), volumen bajo (15%)
- **Voz:** TTS para "¡Rojo!", "¡Amarillo!", "¡Verde!" al tocar cada luz

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 16-20 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <12MB total size, smooth animation con 8+ carros

**Valor Educativo:**
- Colores del semáforo (rojo, amarillo, verde)
- Conceptos de parar/esperar/ir
- Reglas de tráfico básicas
- Causa-efecto (tocar luz → carros reaccionan)
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [Canvas Animation - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Traffic](https://sagomini.com/) (inspiración de tráfico)
- [PBS Kids: Safety Games](https://pbskids.org/games/) (referencia similar)

---

### Lote 10 (Ideas 37-40)
**Fecha:** 2026-02-17
**Ejecución:** 4/25

#### Idea #37: La Cocina de Mamá 🍳🥣👩‍🍳

**Concepto:**
Una cocina simple aparece con ingredientes y utensilios. El niño toca ingredientes (huevo, harina, leche) y estos se van a un bowl. Al completar 3 ingredientes, aparece una torta con velas y canción de cumpleaños.

**Motivación:**
- **Independencia:** El niño cocina por sí mismo tocando ingredientes
- **Logro:** Ver la torta completada con celebración
- **Aprendizaje:** Nombres de ingredientes y conceptos básicos de cocina

**Mecánica Principal:**
Pantalla con cocina: counter (#F5F5DC) en centro, bowl blanco (#FFFFFF), estantería con ingredientes (huevo blanco, harina en saco, leche en botella). Al tocar un ingrediente, este vuela hacia el bowl (bezier curve, 0.5s) y hace sonido ("¡Plaf!", "¡Swoosh!", "¡Splosh!"). El ingrediente se mezcla en el bowl (animación de whisking). Contador: "🥣 3/3". Al completar los 3 ingredientes, el bowl desaparece y aparece una torta redonda (#F4A460) con 3 velas encendidas, música de cumpleaños suena y confetti de colores aparece. Toque en torta reinicia.

**Interacción Móvil:**
- **Tipo:** Tap individual (toca ingrediente → cocina)
- **Accesibilidad:** Ingredientes grandes (50-60px), bowl muy grande (100px), targets generosos
- **Sin requisitos de precisión:** Tap en cualquier parte del ingrediente funciona

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para ingredientes, bowl, torta, absolute positioning, ARIA labels
- **JavaScript:** Event listeners para tap, animaciones CSS (bezier curves), gestión de estado (ingredientes agregados), detección de completado
- **CSS:** Animaciones keyframes (mix, fly, celebrate), bezier curves para movimiento suave, transforms para vuelo de ingredientes
- **Otros:** Web Audio API para sonidos de cocina, localStorage para trackear tortas completadas

**Características Visuales:**
- **Paleta de colores:** Counter (#F5F5DC), bowl (#FFFFFF), ingredientes (huevo #FFFACD, harina #F5DEB3, leche #ADD8E6), torta (#F4A460), velas rojas (#DC143C)
- **Animaciones:** Ingrediente vuela en curva hacia bowl (0.5s), al llegar: bowl se agita (shake 0.3s), al mezclar: animation whisking (0.5s), al completar: torta aparece con pop (scale 0→1.2→1.0), velas parpadean
- **Feedback visual:** Ingrediente brilla al tocar, bowl se ilumina cuando se mezcla, torta pulsa al completar, confetti de velas
- **Personajes:** Sin personajes, solo ingredientes y utensilios con estilo cartoon

**Audio:**
- **Efectos de sonido:** "¡Plaf!" (huevo), "¡Swoosh!" (harina), "¡Splosh!" (leche), "¡Whirrr!" al mezclar, "¡Happy Birthday!" melodía suave al completar
- **Música:** Canción de cumpleaños suave (piano + voz de niño), volumen bajo (20%)
- **Voz:** TTS para "¡Huevo!", "¡Harina!", "¡Leche!" en español al tocar cada ingrediente

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <10MB total size

**Valor Educativo:**
- Nombres de ingredientes (3 básicos)
- Concepto de cocina y mezcla
- Secuenciación (1-2-3 ingredientes)
- Coordinación mano-ojo
- Celebración y logro

**Referencias e Inspiración:**
- [CSS Bezier Curves - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- [Absolute Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Toca Boca: Kitchen](https://tocaboca.com/) (inspiración de cocina)
- [Sago Mini: Cooking](https://sagomini.com/) (referencia similar)

---

#### Idea #38: Los Trenes Vamos 🚂🛤️🚃

**Concepto:**
Un tren pequeño aparece en una vía de ferrocarril que atraviesa la pantalla. El niño toca el tren y este avanza por la vía haciendo "¡Chu-chu!". Vagones de colores se enganchan automáticamente. Al completar 5 vagones, el tren hace un viaje completo.

**Motivación:**
- **Independencia:** El niño hace que el tren avance tocándolo
- **Logro:** Ver el tren completo con todos los vagones
- **Aprendizaje:** Concepto de tren, vagones y movimiento sobre vías

**Mecánica Principal:**
Pantalla con vía de ferrocarril (gris #708090) y traviesas (madera #8B4513) que cruza horizontalmente. Tren pequeño (50-60px) con locomotora roja (#DC143C) aparece al inicio. Al tocar el tren, este avanza por la vía con animación de balanceo (velocidad: 40px/s) y hace "¡Chu-chu!". Mientras avanza, vagones de colores se enganchan automáticamente (amarillo, verde, azul, morado). Cada vagón se engancha con "¡Click!". Contador: "🚃 5/5". Al completar los 5 vagones, el tren hace un viaje completo (cruza la pantalla entera) con silbido y confetti. Toque en tren reinicia.

**Interacción Móvil:**
- **Tipo:** Tap (toca tren → avanza)
- **Accesibilidad:** Tren grande (50-60px + vagones), vía ancha (100px), targets generosos
- **Sin requisitos de precisión:** Tap en cualquier parte del tren funciona

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para vía, tren y vagones, requestAnimationFrame para animación suave
- **JavaScript:** Clase Train con propiedades (x, y, speed, wagons[]), clase Wagon, game loop, detección de tap en canvas, sistema de enganche de vagones
- **CSS:** Fullscreen canvas (100% height/width), overlay de contador en esquina
- **Otros:** Web Audio API para sonidos de tren, localStorage para trackear trenes completados

**Características Visuales:**
- **Paleta de colores:** Cielo (#87CEEB), césped (#90EE90), vía gris (#708090), traviesas (#8B4513), locomotora roja (#DC143C), vagones colores (amarillo #FFFF00, verde #44FF44, azul #4444FF, morado #9932CC)
- **Animaciones:** Tren avanza con balanceo (tilt -3° → 3°, 0.3s), vagones se enganchan con snap (scale 1.1 → 1.0), humo sale de chimenea, al viajar completo: acelera (velocidad 2x)
- **Feedback visual:** Tren brilla al tocar, vagones pulsan al engancharse, humo de locomotora, confetti al completar viaje
- **Personajes:** Tren con carita en locomotora (ojos grandes, sonrisa), vagones con ventanas

**Audio:**
- **Efectos de sonido:** "¡Chu-chu!" al avanzar, "¡Click!" al enganchar vagón, silbido ("¡Woo-woo!") al completar, ruido de ruedas
- **Música:** Fondo instrumental de tren (acordeón + tambor), volumen muy bajo (15%)
- **Voz:** TTS para "¡Tren!", "¡Vagón!" al enganchar, "¡Viaje!" al completar

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 16-20 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <12MB total size, smooth animation con tren + 5 vagones

**Valor Educativo:**
- Concepto de tren y vagones
- Movimiento sobre vías
- Colores de vagones
- Conteo (1-5 vagones)
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [Canvas Animation - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Trains](https://sagomini.com/) (inspiración de trenes)
- [PBS Kids: Train Games](https://pbskids.org/games/) (referencia similar)

---

#### Idea #39: La Biblioteca Mágica 📚✨📖

**Concepto:**
Libros de colores grandes aparecen en una estantería. Al tocar un libro, este se abre mágicamente, imágenes dentro cobran vida (animación simple) y se cuenta una historia corta con TTS. Al terminar 3 historias, todos los libros se abren a la vez y celebran.

**Motivación:**
- **Independencia:** El niño elige qué libro leer tocándolo
- **Logro:** Ver las historias cobrar vida
- **Aprendizaje:** Concepto de libro, lectura y vocabulario simple

**Mecánica Principal:**
Pantalla con estantería de madera (#8B4513) y 5 libros grandes (60-70px) en colores (rojo, azul, verde, amarillo, morado). Al tocar un libro, este se abre con animación mágica (sparkles, glow) y la pantalla se transforma en el interior del libro (fondo blanco #FFFFFF). Imágenes simples dentro cobran vida (ej: gato bostezando, perro corriendo, pájaro volando). TTS cuenta historia corta ("Había una vez un gato que..."). Contador: "📚 3/3". Al terminar 3 historias, todos los libros se abren a la vez en la estantería, confetti de letras aparece y celebración suena. Toque en estantería reinicia.

**Interacción Móvil:**
- **Tipo:** Tap (toca libro → se abre historia)
- **Accesibilidad:** Libros grandes (60-70px), estantería ancha, targets generosos
- **Sin requisitos de secuencia:** Puede tocar cualquier libro en cualquier orden

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para estantería y libros, SVG para imágenes animadas dentro de libros, ARIA labels
- **JavaScript:** Event listeners para tap, gestión de estado (libros leídos), animaciones CSS de apertura, sistema de historias (array de textos), Web Speech API para TTS
- **CSS:** Animaciones keyframes (open, magic, sparkle), transforms para apertura de libro, responsive layout (flexbox)
- **Otros:** Web Audio API para efectos mágicos, localStorage para trackear historias leídas

**Características Visuales:**
- **Paleta de colores:** Estantería (#8B4513), libros colores (rojo #FF4444, azul #4444FF, verde #44FF44, amarillo #FFFF00, morado #9932CC), interior libro (#FFFFFF)
- **Animaciones:** Libro se abre con "flip" (rotateY -180°→0°, 0.6s), sparkles aparecen (scale 0→1→0, 0.8s), imágenes cobran vida (bounce, shake), al completar 3: todos los libros abiertos brillan
- **Feedback visual:** Libro brilla al tocar, sparkles mágicos al abrir, imágenes animadas dentro, confetti de letras (A, B, C) al completar
- **Personajes:** Sin personajes principales, solo imágenes animadas (gato, perro, pájaro, etc.)

**Audio:**
- **Efectos de sonido:** "¡Zap!" (magia) al abrir libro, "¡Swoosh!" al cerrar, "¡Ta-da!" al completar 3 historias, confetti de letras
- **Música:** Fondo instrumental mágico (piano + campanitas), volumen muy bajo (15%)
- **Voz:** TTS para historias cortas (3-5 frases) en español, voz femenina suave, "¡Cuento terminado!" al finalizar cada historia

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 18-22 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <15MB total size

**Valor Educativo:**
- Concepto de libro y lectura
- Vocabulario simple (historias cortas)
- Imaginación y narrativa
- Animales y objetos cotidianos
- Escucha activa

**Referencias e Inspiración:**
- [Web Speech API - speechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
- [SVG Animations - MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform)
- [Sago Mini: Storytime](https://sagomini.com/) (inspiración de libros)
- [Toca Boca: Stories](https://tocaboca.com/) (referencia similar)

---

#### Idea #40: El Jardín de Flores 🌸🌻🌺

**Concepto:**
Un jardín verde aparece con capullos cerrados. El niño toca un capullo y este florece en una flor colorida con animación suave. Cada flor hace un sonido diferente al florecer. Al florecer 5 flores, las mariposas vienen y bailan alrededor.

**Motivación:**
- **Independencia:** El niño hace florecer el jardín tocando capullos
- **Logro:** Ver el jardín lleno de flores coloridas
- **Aprendizaje:** Concepto de florecer, nombres de flores y colores

**Mecánica Principal:**
Pantalla con jardín verde (#90EE90) y césped (#32CD32). 5 capullos cerrados (40-50px) distribuidos en posiciones aleatorias: rosa, girasol, tulipán, margarita, orquídea. Al tocar un capullo, este se abre con animación suave (scale 0.5 → 1.0, 0.6s) y se convierte en flor colorida (rosa #FF69B4, girasol #FFD700, tulipán #FF4500, margarita #FFFFFF, orquídea #DA70D6). Cada flor hace sonido diferente ("¡Pop!", "¡Puff!", "¡Ping!"). Contador: "🌸 5/5". Al florecer las 5 flores, mariposas (3-4) aparecen y bailan alrededor de las flores con animación ondulante. Toque en jardín reinicia.

**Interacción Móvil:**
- **Tipo:** Tap individual (toca capullo → florece)
- **Accesibilidad:** Capullos grandes (40-50px), jardín amplio, targets fáciles
- **Sin requisitos de secuencia:** Puede tocar cualquier capullo en cualquier orden

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para jardín, capullos, flores, mariposas, requestAnimationFrame para 60 FPS
- **JavaScript:** Clase Flower con propiedades (x, y, type, state), array de capullos y flores, sistema de partículas para mariposas, detección de tap en canvas
- **CSS:** Fullscreen canvas (100% height/width), overlay de contador en esquina
- **Otros:** Web Audio API para sonidos de florecer, localStorage para trackear jardines completados

**Características Visuales:**
- **Paleta de colores:** Césped (#32CD32), jardín (#90EE90), cielo (#87CEEB), capullos verdes (#228B22), flores colores (rosa #FF69B4, girasol #FFD700, tulipán #FF4500, margarita #FFFFFF, orquídea #DA70D6), mariposas (púrpura #9370DB, azul #4169E1)
- **Animaciones:** Capullo florece (scale 0.5 → 1.0 + rotate 0→10°, 0.6s), pétalos se expanden suavemente, al completar: mariposas aparecen con pop (scale 0→1.2→1.0) y bailan (ondulante, 2s infinite)
- **Feedback visual:** Capullo brilla al tocar, flor pulsa al florecer, mariposas dejan rastro de color, confetti de pétalos al completar
- **Personajes:** Sin personajes, solo flores y mariposas con estilo cartoon

**Audio:**
- **Efectos de sonido:** "¡Pop!" (rosa), "¡Puff!" (girasol), "¡Ping!" (tulipán), "¡Poof!" (margarita), "¡Plink!" (orquídea) al florecer, "¡Flutter!" cuando mariposas aparecen
- **Música:** Fondo instrumental de jardín (piano + flauta + cuerdas), volumen muy bajo (10%)
- **Voz:** TTS para "¡Rosa!", "¡Girasol!", "¡Tulipán!", "¡Margarita!", "¡Orquídea!" en español al florecer cada flor

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 12-16 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <10MB total size, smooth animation con 5+ flores + mariposas

**Valor Educativo:**
- Concepto de florecer y crecimiento
- Nombres de flores (5 tipos)
- Colores variados
- Causa-efecto (tocar → florecer)
- Naturaleza y belleza

**Referencias e Inspiración:**
- [Canvas Animation - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Garden](https://sagomini.com/) (inspiración de jardín)
- [Toca Boca: Flowers](https://tocaboca.com/) (referencia similar)

### Lote 11 (Ideas 41-44)
**Fecha:** 2026-02-17
**Ejecución:** 4/25

#### Idea #41: El Espejo Mágico 🪞👶😊

**Concepto:**
Un espejo grande ocupa la pantalla. Un bebé animado aparece en el centro. Al tocar el espejo, el bebé hace diferentes expresiones faciales y emociones correspondientes (feliz, triste, sorprendido, enojado). Cada expresión tiene emojis que aparecen alrededor.

**Motivación:**
- **Independencia:** El niño explora emociones tocando el espejo
- **Logro:** Ver diferentes expresiones faciales
- **Aprendizaje:** Reconocimiento de emociones básicas y expresiones

**Mecánica Principal:**
Espejo grande (120-140px) con marco dorado (#FFD700) ocupa centro de pantalla. Bebé animado con cara neutral aparece dentro. Al tocar el espejo, el bebé cambia a una emoción aleatoria:
1. Feliz: sonrisa grande, ojos brillantes, emojis 😄😊🥰
2. Triste: boca triste, ojos caídos, emojis 😢😭☹️
3. Sorprendido: boca abierta, ojos grandes, emojis 😲😮🤯
4. Enojado: ceño fruncido, boca seria, emojis 😠😡🤬

Cada emoción tiene TTS que dice la emoción en español ("¡Feliz!", "¡Triste!", "¡Sorprendido!", "¡Enojado!"). Contador de emociones: "😊 5". Al tocar 5 veces diferentes, el bebé hace una cara muy feliz y aplaude. Toque en espejo reinicia.

**Interacción Móvil:**
- **Tipo:** Tap (toca espejo → cambia emoción)
- **Accesibilidad:** Espejo muy grande (120-140px), bebé grande (80-100px), targets muy fáciles
- **Sin requisitos de secuencia:** Puede tocar en cualquier orden

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para espejo y bebé, CSS transforms para expresiones faciales, ARIA labels
- **JavaScript:** Event listeners para tap, array de emociones (feliz, triste, sorprendido, enojado), Web Speech API para TTS, gestión de estado (emoción actual)
- **CSS:** Animaciones keyframes (happy, sad, surprised, angry), transforms para cambios de expresión (scale ojos, rotate cejas), responsive layout (flexbox centrado)
- **Otros:** Web Audio API para sonidos de emociones, localStorage para trackear emociones exploradas

**Características Visuales:**
- **Paleta de colores:** Marco espejo dorado (#FFD700), interior espejo plateado (#C0C0C0), bebé piel (#F5DEB3), ropa azul (#1E90FF), emojis colores vibrantes
- **Animaciones:** Bebé cambia expresión suavemente (transition: all 0.4s ease-out), emojis aparecen con pop (scale 0→1.2→1.0, 0.3s), al completar 5: bebé hace "happy dance" (bounce 1s)
- **Feedback visual:** Emojis flotan alrededor del espejo, bebé brilla al cambiar emoción, confetti de corazones al completar
- **Personajes:** Bebé con cara muy expresiva (ojos grandes, cejas movibles, boca animada)

**Audio:**
- **Efectos de sonido:** "Ding!" suave al cambiar a feliz, "Sigh..." a triste, "Wow!" a sorprendido, "Grr..." a enojado, aplausos al completar
- **Música:** Fondo instrumental de emociones (piano + violín suave), volumen muy bajo (10%)
- **Voz:** TTS para "¡Feliz!", "¡Triste!", "¡Sorprendido!", "¡Enojado!" en español, voz femenina suave

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 12-16 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <8MB total size

**Valor Educativo:**
- Reconocimiento de emociones (4 básicas)
- Expresiones faciales
- Vocabulario de emociones
- Empatía y autoconocimiento
- Consciencia emocional

**Referencias e Inspiración:**
- [Web Speech API - speechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
- [CSS Transforms - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Toca Boca: Emotions](https://tocaboca.com/) (inspiración de emociones)
- [Sago Mini: Emotions](https://sagomini.com/) (referencia similar)

---

#### Idea #42: Lluvia de Sorpresas 🌧️🎁⭐

**Concepto:**
Objetos coloridos (estrellas, regalos, corazones, caramelos) caen del cielo como una lluvia suave. El niño toca un objeto antes de que toque el suelo y este explota en confetti colorido con un sonido divertido. Los objetos tienen tamaños y velocidades diferentes.

**Motivación:**
- **Independencia:** El niño atrapa objetos cayendo del cielo
- **Logro:** Explorar objetos diferentes y verlos explotar
- **Aprendizaje:** Nociones de gravedad, velocidad y objetos cotidianos

**Mecánica Principal:**
Cielo azul claro (#87CEEB) ocupa pantalla completa. Objetos caen desde la parte superior en patrón de lluvia (spawn rate: 1-2 objetos/segundo). Objetos: estrellas doradas (#FFD700), regalos rojos (#DC143C) con lazo dorado, corazones rosa (#FF69B4), caramelos multicolor. Cada objeto tiene tamaño variado (30-60px) y velocidad según tamaño (más pequeños caen más rápido). Al tocar un objeto, este hace "¡Pop!" (efecto de sonido) y explota en 15-25 partículas de confetti de su color. Las partículas caen con gravedad suave. No hay límite; siguen cayendo.

**Interacción Móvil:**
- **Tipo:** Tap (toca objeto → ¡Pop!)
- **Accesibilidad:** Objetos medianos-grandes (30-60px), movimiento suave (1.5-2.5s para caer), targets generosos
- **Sin penalización:** Objetos que tocan el suelo desaparecen suavemente (fade out)

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para objetos y confetti, requestAnimationFrame para 60 FPS, detección de tap en canvas
- **JavaScript:** Clase FallingObject con propiedades (x, y, size, speed, type, color), sistema de partículas para confetti, game loop, hit-testing circular
- **CSS:** Fullscreen canvas (100% height/width), no scroll
- **Otros:** Web Audio API para sonidos de pop, localStorage para trackear objetos atrapados

**Características Visuales:**
- **Paleta de colores:** Cielo (#87CEEB), objetos colores brillantes (estrella #FFD700, regalo #DC143C, corazón #FF69B4, caramelo multicolor), confetti colores sólidos
- **Animaciones:** Objetos caen con gravedad (aceleración), al explotar: partículas se expanden (0.5s) + caen, objeto desaparece (scale 1.2→0), reflejo de luz en objetos
- **Feedback visual:** Objeto brilla al tocar (box-shadow), partículas caen suavemente, reflejos brillantes en objetos
- **Personajes:** Sin personajes, solo objetos con emojis o íconos

**Audio:**
- **Efectos de sonido:** "Pop" suave al explotar (variación tonal según tipo), "Whoosh" si objeto desaparece en suelo
- **Música:** Fondo instrumental de lluvia feliz (piano + campanitas), volumen muy bajo (15%)
- **Sin voz:** Sin TTS para mantener ritmo de juego

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <12MB total size, smooth animation con 20+ objetos simultáneos

**Valor Educativo:**
- Concepto de gravedad y caída
- Objetos cotidianos (estrellas, regalos, corazones, caramelos)
- Coordinación mano-ojo (tap rápido)
- Causa-efecto (tocar → explotar)
- Nociones de tamaño y velocidad

**Referencias e Inspiración:**
- [Canvas Particle Systems](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Falling Stars](https://sagomini.com/) (inspiración de objetos cayendo)
- [Toca Boca: Rain](https://tocaboca.com/) (referencia similar)

---

#### Idea #43: Los Pececitos Nadan 🐠🐟🌊

**Concepto:**
Peces de colores diferentes nadan en un acuario con agua animada. El niño toca un pez y este nada hacia donde tocó. Si toca el agua, burbujas aparecen. Al tocar todos los peces (4-6), estos hacen una danza acuática sincronizada.

**Motivación:**
- **Independencia:** El niño guía a los peces tocando
- **Logro:** Ver la danza acuática de todos los peces
- **Aprendizaje:** Animales acuáticos, colores y movimiento en agua

**Mecánica Principal:**
Acuario con agua azul (#1E90FF → #00BFFF) ocupa pantalla completa. Plantas acuáticas verdes (#228B22) en fondo. 4-6 peces de diferentes colores nadan libremente:
- Pez globo naranja (#FFA500)
- Pez dorado amarillo (#FFD700)
- Peze azul (#4169E1)
- Pez payaso rojo-blanco (#DC143C/#FFFFFF)
- Pez tropical morado (#9932CC)
- Pez gato gris (#708090)

Peces nadan con movimiento ondulante (sine wave, 2-3s). Al tocar un pez, este nada hacia la posición del toque (bezier curve, 0.8s) y hace "¡Bloop!". Al tocar el agua (no en pez), burbujas (partículas) aparecen. Contador: "🐠 5/6". Al tocar todos, peces hacen danza acuática (vuelan en círculos sincronizados) con confetti de burbujas.

**Interacción Móvil:**
- **Tipo:** Tap en pez (nadar hacia posición) + tap en agua (burbujas)
- **Accesibilidad:** Peces medianos-grandes (50-70px), acuario grande (100% pantalla), targets generosos
- **Sin requisitos de precisión:** Tap en cualquier parte del pez o agua funciona

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para acuario, agua, peces, plantas, requestAnimationFrame para 60 FPS
- **JavaScript:** Clases Fish (pez) y Bubble (burbuja), sistema de navegación (bezier curve hacia toque), hit-testing para peces vs agua, detección de completado
- **CSS:** Fullscreen canvas (100% height/width), no scroll
- **Otros:** Web Audio API para sonidos de peces y burbujas, localStorage para trackear danzas

**Características Visuales:**
- **Paleta de colores:** Agua gradiente (#1E90FF → #00BFFF), peces colores vibrantes, plantas verdes (#228B22), burbujas blancas (#FFFFFF) con reflejo
- **Animaciones:** Peces nadan ondulante (sine wave), al nadar hacia toque: movimiento curvo (0.8s), al danza: vuelan en círculos (1.5s), burbujas suben y explotan
- **Feedback visual:** Pez brilla al tocar, cola aletea al nadar, burbujas explotan en confetti, ondas en agua
- **Personajes:** Peces con ojos grandes, aletas animadas, sonrisas amigables

**Audio:**
- **Efectos de sonido:** "¡Bloop!" al tocar pez (variación tonal según pez), "¡Pop!" cuando burbuja explota, chapoteo durante danza
- **Música:** Fondo instrumental acuático (piano + campanitas de agua), volumen muy bajo (15%)
- **Voz:** TTS para "¡Peze!", "¡Pez dorado!", "¡Peze tropical!" al tocar

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 16-20 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <15MB total size, smooth animation con 6+ peces + burbujas

**Valor Educativo:**
- Animales acuáticos (6 tipos)
- Colores de peces
- Concepto de movimiento en agua
- Coordinación mano-ojo
- Causa-efecto (tocar → nadar → danza)

**Referencias e Inspiración:**
- [Canvas Particle Systems](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Aquarium](https://sagomini.com/) (inspiración de acuario)
- [Toca Boca: Fish](https://tocaboca.com/) (referencia similar)

---

#### Idea #44: El Ascensor de Animales 🛗🐘🦁🐒

**Concepto:**
Un ascensor grande aparece en un edificio con varios pisos. El niño toca un botón de piso y el ascensor se mueve. Animales esperan en diferentes pisos y entran al ascensor. Al completar 5 animales, el ascensor hace un viaje al último piso.

**Motivación:**
- **Independencia:** El niño opera el ascensor tocando botones
- **Logro:** Ver el ascensor lleno de animales llegar al último piso
- **Aprendizaje:** Concepto de pisos, números y transporte vertical

**Mecánica Principal:**
Edificio vertical con 5 pisos (números 1-5 en la izquierda). Ascensor grande (80-100px de ancho, 120-150px de alto) con puertas doradas (#FFD700). Animales esperan en pisos aleatorios: elefante (piso 1), león (piso 2), mono (piso 3), jirafa (piso 4), oso (piso 5). Cada animal tiene botón de llamado al lado. Al tocar el botón de un piso, el ascensor se mueve hacia ese piso (velocidad: 150px/s) con sonido "¡Ding!". Las puertas se abren (animation: slide-open 0.5s) y el animal entra (marcha hacia adentro, 0.6s). Puertas se cierran y ascensor sube/baja al siguiente piso. Contador: "🐘 2/5". Al recoger 5 animales, ascensor viaja al piso 5 (más alto) con música de celebración y confetti. Toque en edificio reinicia.

**Interacción Móvil:**
- **Tipo:** Tap en botones de piso (ascensor se mueve)
- **Accesibilidad:** Botones grandes (50-60px), ascensor muy grande, números muy visibles (40-50px)
- **Sin requisitos de precisión:** Tap en cualquier parte del botón funciona

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para edificio, ascensor, animales, requestAnimationFrame para animación suave
- **JavaScript:** Clase Elevator con propiedades (currentFloor, targetFloor, state, animals[]), array de animales con pisos, sistema de movimiento (velocidad constante), detección de tap en botones
- **CSS:** Fullscreen canvas (100% height/width), overlay de contador en esquina
- **Otros:** Web Audio API para sonidos de ascensor, localStorage para trackear viajes completados

**Características Visuales:**
- **Paleta de colores:** Edificio gris (#A9A9A9), ascensor dorado (#FFD700) con puertas metálicas, animales colores naturales (elefante gris, león dorado, mono marrón, jirafa amarillo-manchado, oso marrón), botones azules (#1E90FF)
- **Animaciones:** Ascensor se mueve verticalmente con suavidad, puertas se abren (scale X 1→0, 0.5s), animal entra (marcha hacia dentro), puertas se cierran, al completar 5: ascensor viaja rápido (2x velocidad) con confetti
- **Feedback visual:** Botón brilla al tocar, ascensor tiene luz indicadora, puertas reflectan luz, animales hacen "happy dance" al entrar
- **Personajes:** Animales con caritas amigables y ojos grandes

**Audio:**
- **Efectos de sonido:** "¡Ding!" cuando ascensor llega a piso, "¡Whirr!" al moverse, "¡Whoosh!" al abrir puertas, "¡Click!" al tocar botón, "¡Yay!" al completar 5 animales
- **Música:** Fondo instrumental de ascensor (piano + campanitas de ascensor), volumen muy bajo (15%), música de celebración al completar
- **Voz:** TTS para "¡Piso 1!", "¡Piso 2!", "¡Piso 3!", "¡Piso 4!", "¡Piso 5!" al tocar cada botón

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 18-22 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <15MB total size, smooth elevator animation

**Valor Educativo:**
- Concepto de pisos y números (1-5)
- Transporte vertical (ascensor)
- Animales grandes (5 tipos)
- Secuenciación (recoger animales en orden)
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [Canvas Animation - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Elevator](https://sagomini.com/) (inspiración de ascensor)
- [PBS Kids: Building Games](https://pbskids.org/games/) (referencia similar)

---

### Lote 12 (Ideas 45-48)
**Fecha:** 2026-02-17
**Ejecución:** 4/25

#### Idea #45: Los Bloques de Construcción 🧱🏗️🔷

**Concepto:**
Bloques de formas diferentes (cuadrado, triángulo, círculo, rectángulo) aparecen en el suelo. El niño toca un bloque y este vuela hacia una plataforma donde se apila con otros bloques. Al apilar 8 bloques, se construye una torre que celebra con aplausos.

**Motivación:**
- **Independencia:** El niño construye torres tocando bloques
- **Logro:** Ver la torre completa y alta
- **Aprendizaje:** Formas geométricas, conceptos de apilar y altura

**Mecánica Principal:**
Pantalla con suelo de concreto (#C0C0C0) y cielo (#87CEEB). Plataforma rectangular marrón (#8B4513) en centro (100px de ancho). 12 bloques flotan alrededor: 4 cuadrados rojos (#FF4444), 3 triángulos azules (#4444FF), 3 círculos verdes (#44FF44), 2 rectángulos amarillos (#FFFF00). Cada bloque tiene 50-60px de tamaño. Al tocar un bloque, este vuela en línea recta hacia la plataforma (0.5s) y se apila encima de los otros con animación de "plop". Contador: "🧱 8/8". Al apilar 8 bloques, la torre brilla, hace "¡Ta-da!" y confetti de formas aparece. Toque en torre reinicia.

**Interacción Móvil:**
- **Tipo:** Tap (toca bloque → apila)
- **Accesibilidad:** Bloques medianos-grandes (50-60px), plataforma ancha (100px), targets generosos
- **Sin penalización:** Bloques que no se tocan siguen flotando

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para bloques, plataforma, absolute positioning, ARIA labels
- **JavaScript:** Event listeners para tap, animaciones con CSS transforms, gestión de estado (bloques apilados), array de bloques, detección de completado
- **CSS:** Animaciones keyframes (fly, stack, celebrate), transforms para movimiento, flexbox para layout
- **Otros:** Web Audio API para sonidos de bloques, localStorage para trackeer torres

**Características Visuales:**
- **Paleta de colores:** Cielo (#87CEEB), suelo (#C0C0C0), plataforma (#8B4513), bloques colores vibrantes (rojo #FF4444, azul #4444FF, verde #44FF44, amarillo #FFFF00)
- **Animaciones:** Bloques flotan suavemente (float 2s ease-in-out infinite), al apilar: vuelo en línea recta (0.5s), al llegar: plop (scale 1.2 → 1.0, 0.2s), al completar: torre pulsa (scale 1.05 → 1.0)
- **Feedback visual:** Bloque brilla al tocar, plataforma se ilumina al apilar, sombra debajo de torre, confetti de formas al completar
- **Personajes:** Sin personajes, solo bloques con bordes brillantes

**Audio:**
- **Efectos de sonido:** "¡Plif!" al apilar bloque, "¡Clack!" si bloque ya está en torre, "¡Ta-da!" al completar, aplausos completos
- **Música:** Fondo instrumental de construcción (tambor + guitarra), volumen bajo (20%)
- **Voz:** TTS para "¡Cuadrado!", "¡Triángulo!", "¡Círculo!", "¡Rectángulo!" al tocar cada bloque

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <12MB total size, smooth animation con 12+ bloques

**Valor Educativo:**
- Formas geométricas (4 tipos)
- Concepto de apilar y construir
- Noción de altura y equilibrio
- Colores de formas
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [CSS Transforms - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Absolute Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Sago Mini: Blocks](https://sagomini.com/) (inspiración de bloques)
- [PBS Kids: Building Games](https://pbskids.org/games/) (referencia similar)

---

#### Idea #46: El Túnel Misterioso 🚂🌉🚂

**Concepto:**
Un tren pequeño entra en un túnel oscuro y sale al otro lado con animales diferentes. El niño toca el túnel y el tren viaja a través. Al completar 5 viajes, el tren hace un desfile con todos los animales.

**Motivación:**
- **Independencia:** El niño hace que el tren viaje por el túnel
- **Logro:** Ver diferentes animales aparecer del túnel
- **Aprendizaje:** Animales, concepto de túnel y transporte

**Mecánica Principal:**
Pantalla con paisaje dividido: lado izquierdo (prado verde #90EE90, cielo #87CEEB), túnel grande en centro (gris #696969, arco oscuro), lado derecho (cielo #87CEEB). Tren pequeño (50-60px) con locomotora roja (#DC143C) aparece en el lado izquierdo. Al tocar el túnel, el tren viaja a través (bezier curve, 1.5s) y sale en el lado derecho con un animal diferente (primera vuelta: vaca, segunda: caballo, tercera: oveja, cuarta: cerdo, quinta: gallo). El animal hace su sonido y TTS dice su nombre. Contador: "🚂 5/5". Al completar 5 viajes, el tren hace un desfile por toda la pantalla con todos los animales montados. Toque en paisaje reinicia.

**Interacción Móvil:**
- **Tipo:** Tap en túnel (tren viaja)
- **Accesibilidad:** Túnel muy grande (120-140px), tren visible (50-60px), animales grandes (60-70px)
- **Sin requisitos de precisión:** Tap en cualquier parte del túnel funciona

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para paisaje, túnel, tren, animales, requestAnimationFrame para animación suave
- **JavaScript:** Clases Train, Tunnel, Animal, sistema de viaje (tren entra → sale con animal), array de animales (vaca, caballo, oveja, cerdo, gallo), detección de tap en túnel
- **CSS:** Fullscreen canvas (100% height/width), overlay de contador en esquina
- **Otros:** Web Audio API para sonidos de tren y animales, localStorage para trackeer viajes

**Características Visuales:**
- **Paleta de colores:** Prado (#90EE90), cielo (#87CEEB), túnel (#696969), tren rojo (#DC143C), animales colores naturales (vaca blanco-negro, caballo marrón, oveja blanca, cerdo rosa, gallo rojo-amarillo)
- **Animaciones:** Tren viaja a través del túnel (bezier curve, 1.5s), al salir: animal aparece con pop (scale 0→1.2→1.0, 0.4s), al completar 5: desfile (tren recorre pantalla entera, 2s)
- **Feedback visual:** Túnel brilla al tocar, tren tiene humo de chimenea, animales hacen "happy dance" al aparecer, confetti al desfile
- **Personajes:** Tren con cara feliz, animales con ojos grandes y sonrisa

**Audio:**
- **Efectos de sonido:** Tren: "¡Chu-chu!" al viajar, "¡Woo-woo!" silbido, animales: "Muu", "Neigh", "Beee", "Oink", "Cocorocó", desfile: "¡Yay!" colectivo
- **Música:** Fondo instrumental de tren (acordeón + tambor), volumen muy bajo (15%)
- **Voz:** TTS para "¡Vaca!", "¡Caballo!", "¡Oveja!", "¡Cerdo!", "¡Gallo!" en español al salir del túnel

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 16-20 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <12MB total size, smooth animation con tren + animales

**Valor Educativo:**
- Animales de granja (5 tipos)
- Concepto de túnel y transporte
- Sonidos característicos de animales
- Secuenciación (5 viajes)
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [Canvas Animation - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Tunnel](https://sagomini.com/) (inspiración de túnel)
- [PBS Kids: Train Games](https://pbskids.org/games/) (referencia similar)

---

#### Idea #47: Los Planetas Giran 🪐🌍🌕

**Concepto:**
El Sol aparece en el centro y planetas (Tierra, Luna, Marte, Júpiter) giran alrededor. El niño toca un planeta y este se detiene, hace un sonido y muestra información simple. Al tocar todos los planetas, hacen una alineación especial.

**Motivación:**
- **Independencia:** El niño explora el sistema solar tocando planetas
- **Logro:** Ver la alineación de todos los planetas
- **Aprendizaje:** Concepto básico de planetas y órbita

**Mecánica Principal:**
Espacio oscuro (#000080) con estrellas brillantes ocupa pantalla. Sol grande (#FFD700, 100-120px) en centro. Planetas giran en órbitas: Tierra (#4169E1), Luna (#C0C0C0), Marte (#FF4500), Júpiter (#DAA520). Cada planeta tiene órbita circular visible (línea punteada #FFFFFF, opacity 0.3). Planetas giran con velocidad diferente (Tierra: 3s, Luna: 2s, Marte: 4s, Júpiter: 5s por órbita). Al tocar un planeta, este se detiene, hace sonido ("¡Buzz!") y TTS dice su nombre. El planeta pulsa y muestra información visual (ej: Tierra → agua y tierra). Contador: "🌍 4/4". Al tocar todos, los planetas se alinean en línea recta hacia el Sol y brillan juntos. Toque en espacio reinicia.

**Interacción Móvil:**
- **Tipo:** Tap en planeta (se detiene + información)
- **Accesibilidad:** Planetas grandes (50-70px), Sol muy grande (100-120px), órbitas visibles
- **Sin requisitos de precisión:** Tap en cualquier parte del planeta funciona

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para espacio, Sol, planetas, órbitas, estrellas, requestAnimationFrame para 60 FPS
- **JavaScript:** Clases Planet y Sun, sistema de órbitas (trigonometría simple: x = cos(θ), y = sin(θ)), detección de tap en canvas, array de planetas (4), gestión de estado (detenido/girando)
- **CSS:** Fullscreen canvas (100% height/width), overlay de contador en esquina
- **Otros:** Web Audio API para sonidos de espacio, localStorage para trackeer alineaciones

**Características Visuales:**
- **Paleta de colores:** Espacio (#000080), Sol (#FFD700), Tierra (#4169E1), Luna (#C0C0C0), Marte (#FF4500), Júpiter (#DAA520), estrellas (#FFFFFF)
- **Animaciones:** Planetas giran en órbitas circulares (trigonometría), al detenerse: pulsan (scale 1.0 → 1.2 → 1.0, 0.5s), al alinear: se mueven a línea recta (1s), estrellas titilan (opacity 0.5-1.0, 2s)
- **Feedback visual:** Planeta brilla al tocar, órbita se ilumina cuando planeta está detenido, información visual aparece, confetti de estrellas al alinear
- **Personajes:** Planetas con detalles visuales (Tierra: agua/verde, Marte: rojo/rocas, Júpiter: bandas)

**Audio:**
- **Efectos de sonido:** "¡Buzz!" al tocar planeta, "¡Hum!" del Sol, "¡Alineación!" al completar, sonidos espaciales (swoosh, beep)
- **Música:** Fondo instrumental espacial (sintetizador + campanitas cósmicas), volumen muy bajo (15%)
- **Voz:** TTS para "¡Tierra!", "¡Luna!", "¡Marte!", "¡Júpiter!" en español al tocar cada planeta

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 18-22 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <15MB total size, smooth orbital animation con 4+ planetas + estrellas

**Valor Educativo:**
- Concepto básico de sistema solar
- Planetas (4: Tierra, Luna, Marte, Júpiter)
- Órbitas y rotación
- Concepto de alineación
- Astronomía elemental

**Referencias e Inspiración:**
- [Canvas Orbital Animation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [Trigonometry for Games](https://www.mathsisfun.com/algebra/trigonometry.html)
- [Sago Mini: Space](https://sagomini.com/) (inspiración de espacio)
- [PBS Kids: Space Games](https://pbskids.org/games/) (referencia similar)

---

#### Idea #48: La Tierra de Animales 🌍🐘🦁🐧

**Concepto:**
Un globo terráqueo grande aparece con 5 continentes. Animales (elefante, león, pingüino, canguro, oso) están escondidos en diferentes continentes. El niño toca un continente y el animal asoma la cabeza, hace su sonido y muestra su nombre.

**Motivación:**
- **Independencia:** El niño descubre animales en el mundo tocando continentes
- **Logro:** Encontrar todos los animales escondidos
- **Aprendizaje:** Continentes, animales de diferentes regiones, geografía básica

**Mecánica Principal:**
Globo terráqueo grande (150-180px) en centro con 5 continentes visibles (África, Asia, Europa, América del Sur, Antártida). Continentes tienen colores suaves (África: amarillo-ocre #DAA520, Asia: rojo-claro #FF6347, Europa: verde-claro #32CD32, América: azul-claro #87CEEB, Antártida: blanco #FFFFFF). Animales escondidos: elefante (África), león (África), panda (Asia), pingüino (Antártida), canguro (Australia - parte de Asia), oso (Europa). Al tocar un continente, este se ilumina y el animal asoma la cabeza (scale 0.5→1.0 + translateY 20px, 0.4s). El animal hace su sonido y TTS dice su nombre en español. Contador: "🌍 5/5". Al encontrar los 5 animales, todos aparecen juntos en el globo con confetti y celebración. Toque en globo reinicia.

**Interacción Móvil:**
- **Tipo:** Tap en continente (animal asoma)
- **Accesibilidad:** Globo muy grande (150-180px), continentes visibles (50-70px cada uno), animales grandes (40-50px)
- **Sin requisitos de precisión:** Tap en cualquier parte del continente funciona

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para globo, continentes, animales, requestAnimationFrame para 60 FPS
- **JavaScript:** Clases Globe, Continent, Animal, sistema de detección de tap en continentes, array de animales (5), gestión de estado (escondido/revelado), sistema de asomo (animación)
- **CSS:** Fullscreen canvas (100% height/width), overlay de contador en esquina
- **Otros:** Web Audio API para sonidos de animales, localStorage para trackeer animales encontrados

**Características Visuales:**
- **Paleta de colores:** Océano (#1E90FF), continentes colores suaves (África #DAA520, Asia #FF6347, Europa #32CD32, América #87CEEB, Antártida #FFFFFF), animales colores naturales
- **Animaciones:** Globo rota suavemente (rotation Y -5°→5°, 3s infinite), al tocar continente: se ilumina (opacity 0.6→1.0, 0.3s), animal asoma (scale 0.5→1.0 + translateY 20px, 0.4s), al completar: todos los animales pulsan (scale 1.0→1.2→1.0)
- **Feedback visual:** Continente brilla al tocar, animal parpadea al aparecer, globo tiene reflejo de luz, confetti de animales al completar
- **Personajes:** Animales con caritas estilo cartoon, ojos grandes y sonrisa

**Audio:**
- **Efectos de sonido:** Elefante: "¡Trumpet!", león: "¡Roar!", panda: "¡Munch!", pingüino: "¡Squawk!", canguro: "¡Boing!", oso: "¡Grrr!", "¡Ta-da!" al completar todos
- **Música:** Fondo instrumental mundial (tambor + flauta), volumen muy bajo (15%)
- **Voz:** TTS para "¡Elefante!", "¡León!", "¡Panda!", "¡Pingüino!", "¡Canguro!", "¡Oso!" en español al asomar

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 18-22 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <15MB total size, smooth animation con globo rotante + 5 animales

**Valor Educativo:**
- Continentes del mundo (5)
- Animales de diferentes regiones (5 tipos)
- Geografía básica
- Sonidos de animales
- Concepto de globalización

**Referencias e Inspiración:**
- [Canvas Animation - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: World](https://sagomini.com/) (inspiración de mundo)
- [PBS Kids: Geography Games](https://pbskids.org/games/) (referencia similar)

---

### Lote 13 (Ideas 49-52)
**Fecha:** 2026-02-17
**Ejecución:** 4/25

#### Idea #49: La Cocina de Pasteles 🧁🎂👩‍🍳

**Concepto:**
Una cocina con mesada aparece. El niño toca ingredientes (harina, azúcar, huevo) y estos se van a un bowl. Al completar 3 ingredientes, aparece un pastel con velas y canción de cumpleaños.

**Motivación:**
- **Independencia:** El niño cocina pasteles tocando ingredientes
- **Logro:** Ver el pastel completado con celebración
- **Aprendizaje:** Nombres de ingredientes y conceptos básicos de cocina

**Mecánica Principal:**
Pantalla con cocina: mesada (#F5F5DC) en centro, bowl blanco (#FFFFFF), estantería con ingredientes (harina en saco, azúcar en bolsa, huevo en cartón). Al tocar un ingrediente, este vuela hacia el bowl (bezier curve, 0.5s) y hace sonido ("¡Swoosh!", "¡Plaf!", "¡Crack!"). El ingrediente se mezcla en el bowl (animación de whisking). Contador: "🥣 3/3". Al completar los 3 ingredientes, el bowl desaparece y aparece un pastel redondo (#F4A460) con 3 velas encendidas, música de cumpleaños suena y confetti de colores aparece. Toque en pastel reinicia.

**Interacción Móvil:**
- **Tipo:** Tap individual (toca ingrediente → cocina)
- **Accesibilidad:** Ingredientes grandes (50-60px), bowl muy grande (100px), targets generosos
- **Sin requisitos de precisión:** Tap en cualquier parte del ingrediente funciona

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para ingredientes, bowl, pastel, absolute positioning, ARIA labels
- **JavaScript:** Event listeners para tap, animaciones CSS (bezier curves), gestión de estado (ingredientes agregados), detección de completado
- **CSS:** Animaciones keyframes (mix, fly, celebrate), bezier curves para movimiento suave, transforms para vuelo de ingredientes
- **Otros:** Web Audio API para sonidos de cocina, localStorage para trackear pasteles completados

**Características Visuales:**
- **Paleta de colores:** Mesada (#F5F5DC), bowl (#FFFFFF), ingredientes (harina #F5DEB3, azúcar #FFFAF0, huevo #FFFACD), pastel (#F4A460), velas rojas (#DC143C)
- **Animaciones:** Ingrediente vuela en curva hacia bowl (0.5s), al llegar: bowl se agita (shake 0.3s), al mezclar: animation whisking (0.5s), al completar: pastel aparece con pop (scale 0→1.2→1.0), velas parpadean
- **Feedback visual:** Ingrediente brilla al tocar, bowl se ilumina cuando se mezcla, pastel pulsa al completar, confetti de velas
- **Personajes:** Sin personajes, solo ingredientes y utensilios con estilo cartoon

**Audio:**
- **Efectos de sonido:** "¡Swoosh!" (harina), "¡Plaf!" (azúcar), "¡Crack!" (huevo), "¡Whirrr!" al mezclar, "¡Happy Birthday!" melodía suave al completar
- **Música:** Canción de cumpleaños suave (piano + voz de niño), volumen bajo (20%)
- **Voz:** TTS para "¡Harina!", "¡Azúcar!", "¡Huevo!" en español al tocar cada ingrediente

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <10MB total size

**Valor Educativo:**
- Nombres de ingredientes (3 básicos)
- Concepto de cocina y mezcla
- Secuenciación (1-2-3 ingredientes)
- Coordinación mano-ojo
- Celebración y logro

**Referencias e Inspiración:**
- [CSS Bezier Curves - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- [Absolute Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Toca Boca: Kitchen](https://tocaboca.com/) (inspiración de cocina)
- [Sago Mini: Baking](https://sagomini.com/) (referencia similar)

---

#### Idea #50: Los Aviones Vuelan ✈️☁️🌤️

**Concepto:**
Aviones de colores aparecen en el cielo. El niño toca un avión y este vuela hacia donde tocó. Si toca el cielo, nubes aparecen. Al tocar todos los aviones (4-6), estos hacen una formación aérea.

**Motivación:**
- **Independencia:** El niño guía a los aviones tocando
- **Logro:** Ver la formación aérea de todos los aviones
- **Aprendizaje:** Concepto de vuelo y transporte aéreo

**Mecánica Principal:**
Cielo azul claro (#87CEEB) ocupa pantalla completa con nubes blancas (#FFFFFF) flotando. 4-6 aviones de diferentes colores vuelan libremente: avión rojo (#FF4444), avión azul (#4444FF), avión amarillo (#FFFF00), avión verde (#44FF44), avión rosa (#FF69B4), avión morado (#9932CC). Aviones vuelan con movimiento ondulante (sine wave, 3-5s). Al tocar un avión, este vuela hacia la posición del toque (bezier curve, 1s) y hace "¡Vroom!". Al tocar el cielo (no en avión), nubes aparecen. Contador: "✈️ 5/6". Al tocar todos los aviones, estos hacen una formación aérea (vuelan en círculos sincronizados) con confetti de nubes.

**Interacción Móvil:**
- **Tipo:** Tap en avión (vuela hacia posición) + tap en cielo (nubes)
- **Accesibilidad:** Aviones grandes (60-80px), cielo grande (100% pantalla), targets generosos
- **Sin penalización:** Aviones que ya volaron repiten la animación

**Tecnologías Requeridas:**
- **HTML5:** `<canvas>` para cielo, aviones, nubes, requestAnimationFrame para 60 FPS
- **JavaScript:** Clases Airplane y Cloud, sistema de navegación (bezier curve hacia toque), hit-testing para aviones vs cielo, detección de completado, sistema de partículas
- **CSS:** Fullscreen canvas (100% height/width), no scroll
- **Otros:** Web Audio API para sonidos de aviones, localStorage para trackear formaciones

**Características Visuales:**
- **Paleta de colores:** Cielo (#87CEEB), aviones colores vibrantes (6 colores), nubes blancas (#FFFFFF), sol amarillo (#FFD700)
- **Animaciones:** Aviones vuelan con movimiento ondulante (sine wave), al volar a toque: bezier curve (1s), nubes flotan (float 3s infinite), al formación: vuelan en círculo (2s)
- **Feedback visual:** Avión brilla al tocar, nubes aparecen con pop, estelas de humo detrás de aviones, confetti de nubes al formación
- **Personajes:** Aviones con caritas y ojos grandes

**Audio:**
- **Efectos de sonido:** "¡Vroom!" al tocar avión (variación tonal según avión), "¡Whoosh!" si avión desaparece, formación: "¡Ooh!" colectivo
- **Música:** Fondo instrumental de vuelo (piano + campanitas), volumen muy bajo (15%)
- **Voz:** TTS para "¡Avión rojo!", "¡Avión azul!" al tocar, "¡Formación!" al completar

**Complejidad Técnica:**
- **Nivel:** Media-Alta
- **Tiempo estimado:** 16-20 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <12MB total size, smooth animation con 6+ aviones + nubes

**Valor Educativo:**
- Concepto de vuelo
- Transporte aéreo
- Colores de aviones
- Causa-efecto (tocar → volar → formación)
- Coordinación mano-ojo

**Referencias e Inspiración:**
- [Canvas Particle Systems](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [requestAnimationFrame - MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Sago Mini: Airplanes](https://sagomini.com/) (inspiración de aviones)
- [PBS Kids: Flight Games](https://pbskids.org/games/) (referencia similar)

---

#### Idea #51: El Hospital de Animales 🏥🐶🐱

**Concepto:**
Un hospital veterinario simple aparece con animales enfermos. El niño toca una herramienta (estetoscopio, termómetro, jeringa) y el animal correspondiente se cura con animación. Al curar todos los animales (4-6), estos salen del hospital felices.

**Motivación:**
- **Independencia:** El niño cura animales tocando herramientas
- **Logro:** Ver a los animales curados y felices
- **Aprendizaje:** Herramientas médicas básicas y cuidado

**Mecánica Principal:**
Hospital con fondo blanco (#FFFFFF) y paredes verde-azul (#87CEEB). 4-6 animales enfermos aparecen: perro con venda, gato con fiebre, conejo con dolor, pajarito con ala rota, etc. Herramientas flotan arriba: estetoscopio (#FFD700), termómetro (#FF4500), jeringa (#1E90FF), vendajes (#32CD32). Al tocar una herramienta, esta vuela hacia el animal correspondiente (ej: estetoscopio → perro) con animación (0.6s), hace "¡Beep!" y cura el animal. El animal hace sonido de alivio y brilla. Contador: "🏥 5/6". Al curar todos los animales, estos salen del hospital en desfile con aplausos.

**Interacción Móvil:**
- **Tipo:** Tap en herramienta (vuela al animal correspondiente)
- **Accesibilidad:** Herramientas grandes (50-60px), animales grandes (80-100px), targets generosos
- **Sin penalización:** Si toca la herramienta equivocada, no pasa nada (espera la correcta)

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para hospital, animales, herramientas, absolute positioning, ARIA labels
- **JavaScript:** Event listeners para tap, animaciones con CSS transforms (bezier curves), gestión de estado (animales curados/pendientes), detección de completado
- **CSS:** Animaciones keyframes (tool-fly, cure, celebrate), bezier curves para movimiento suave, transforms para colocación
- **Otros:** Web Audio API para sonidos médicos, localStorage para trackear animales curados

**Características Visuales:**
- **Paleta de colores:** Hospital (#FFFFFF), paredes (#87CEEB), animales colores naturales, herramientas metálicas brillantes (estetoscopio #FFD700, termómetro #FF4500, jeringa #1E90FF)
- **Animaciones:** Herramienta vuela en curva hacia animal (0.6s), al curar: herramienta hace animación de "beep" (pulse 0.3s), animal brilla (box-shadow), al completar: animales salen en desfile
- **Feedback visual:** Herramienta brilla al tocar, animal se ilumina al curar, herramientas metálicas reflejan luz, confetti de corazones al completar
- **Personajes:** Animales con caritas expresivas y ojos grandes

**Audio:**
- **Efectos de sonido:** "¡Beep!" de estetoscopio, "¡Ding!" de termómetro, "¡Puff!" de jeringa, "¡Yay!" del animal al curarse, aplausos al completar
- **Música:** Fondo instrumental de hospital (piano + flauta), volumen bajo (20%)
- **Voz:** TTS para "¡Estetoscopio!", "¡Termómetro!", "¡Perro!", "¡Curado!" al completar

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS, <12MB total size, smooth animations

**Valor Educativo:**
- Herramientas médicas básicas (4 tipos)
- Concepto de curación (enfermo → curado)
- Cuidado y empatía
- Nombres de animales
- Secuenciación (curar todos los animales)

**Referencias e Inspiración:**
- [CSS Transforms - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Absolute Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Toca Boca: Hospital](https://tocaboca.com/) (inspiración de hospital)
- [Sago Mini: Doctor](https://sagomini.com/) (referencia similar)

---

#### Idea #52: Los Juguetes del Caja 🧸🤖🧩

**Concepto:**
Una caja de juguetes grande aparece cerrada. El niño toca la caja y se abre. Juguetes diferentes (oso, robot, pelota, rompecabezas) salen uno por uno. Al sacar todos los juguetes, estos juegan juntos.

**Motivación:**
- **Independencia:** El niño abre la caja y saca juguetes
- **Logro:** Ver a todos los juguetes jugando juntos
- **Aprendizaje:** Nombres de juguetes y conceptos de compartir

**Mecánica Principal:**
Caja de juguetes grande (120-140px) con tapa roja (#DC143C) y cuerpo azul (#1E90FF) en centro. Inicia cerrada. Al tocar la caja, la tapa se abre (rotateX -180°, 0.5s) y un juguete sale con animación de pop:
1. Oso de peluche (#8B4513)
2. Robot plateado (#C0C0C0)
3. Pelota roja (#FF4444)
4. Rompecabezas (pieza cuadrada azul)

Cada juguete hace sonido al salir ("¡Boing!", "¡Beep!", "¡Bounce!", "¡Click!") y TTS dice su nombre. Los juguetes se distribuyen alrededor de la caja. Contador: "🧸 4/4". Al sacar los 4 juguetes, estos juegan juntos (robot baila, oso aplaude, pelota rebota, pieza del rompecabezas gira) con confetti. Toque en caja reinicia.

**Interacción Móvil:**
- **Tipo:** Tap en caja (abre y saca juguete)
- **Accesibilidad:** Caja muy grande (120-140px), juguetes medianos-grandes (50-70px), targets muy fáciles
- **Sin requisitos de secuencia:** La caja siempre saca el siguiente juguete en orden

**Tecnologías Requeridas:**
- **HTML5:** `<div>` elements para caja, juguetes, absolute positioning, ARIA labels
- **JavaScript:** Event listeners para tap, animaciones con CSS transforms (rotateX, translate), array de juguetes (4), gestión de estado (juguetes sacados), Web Speech API para TTS
- **CSS:** Animaciones keyframes (open, pop-out, play-together), bezier curves para movimiento suave, transforms para apertura de caja
- **Otros:** Web Audio API para sonidos de juguetes, localStorage para trackear sesiones de juego

**Características Visuales:**
- **Paleta de colores:** Caja tapa roja (#DC143C), cuerpo azul (#1E90FF), juguetes (oso #8B4513, robot #C0C0C0, pelota #FF4444, rompecabezas #4444FF), fondo habitación suave (#FFF8DC)
- **Animaciones:** Caja se abre con flip (rotateX -180°, 0.5s), juguete sale con pop (scale 0→1.2→1.0, 0.4s), al jugar: robot baila (bounce 1s), oso aplaude (scale 1.1 → 1.0), pelota rebota (translateY -20px → 0, 0.3s)
- **Feedback visual:** Caja brilla al tocar, juguete brilla al salir, tapa de caja se ilumina al completar, confetti de juguetes al jugar
- **Personajes:** Juguetes con caritas simpáticas (oso con ojos grandes, robot con antenas, pelota con sonrisa)

**Audio:**
- **Efectos de sonido:** Oso: "¡Boing!", robot: "¡Beep!", pelota: "¡Bounce!", rompecabezas: "¡Click!" al sacar, "¡Whoosh!" al abrir caja, "¡Yay!" colectivo al jugar
- **Música:** Fondo instrumental de juguetería (piano + xilófono), volumen muy bajo (15%)
- **Voz:** TTS para "¡Oso!", "¡Robot!", "¡Pelota!", "¡Rompecabezas!" en español al sacar cada juguete

**Complejidad Técnica:**
- **Nivel:** Media
- **Tiempo estimado:** 14-18 horas de desarrollo
- **Requisitos de rendimiento:** 60 FPS en celulares medios, <10MB total size

**Valor Educativo:**
- Nombres de juguetes (4 tipos)
- Concepto de compartir y jugar juntos
- Secuenciación (sacar juguetes 1-2-3-4)
- Coordinación mano-ojo
- Imaginación y juego

**Referencias e Inspiración:**
- [CSS Transforms - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Absolute Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Toca Boca: Toy Box](https://tocaboca.com/) (inspiración de juguetes)
- [Sago Mini: Toys](https://sagomini.com/) (referencia similar)

---

## Progreso
- **Total Ideas:** 52/100
- **Lotes Completados:** 13/25
- **Última Actualización:** 2026-02-17 17:48 UTC

---

**Archivo creado:** 2026-02-17 01:02 UTC
**Agente:** Blockito 🧱
