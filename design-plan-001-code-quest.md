# Design Plan - Code Quest: Mystery Island
# FASE 1 TDD - Análisis y Planificación

**Juego:** 001-code-quest
**Rango de Edad:** 8-15 años
**ID Único:** code-quest
**Fecha de Planificación:** 2026-02-18

---

## 📋 Resumen del Juego

**Concepto Ajustado:**
Juego de coding puzzles simplificado donde el jugador escribe código JavaScript básico para mover un personaje en una cuadrícula y resolver puzzles. A diferencia del diseño original que mencionaba Phaser 3 (framework de ~1MB que viola las reglas de "No Frameworks"), esta implementación usa HTML5/CSS3/JavaScript puro con una interfaz de code editor simplificada.

**Objetivo del Juego:**
Enseñar conceptos básicos de programación (variables, loops, condicionales) de forma lúdica y progresiva.

---

## 🎯 Requisitos Críticos de game-design-rules.md (Sección 7)

### ✅ 7.1 Level Structure
**Requisito:** Games must be divided into levels. Each level should last between 20 seconds and 5 minutes maximum.

**Implementación:**
- **Cantidad de niveles:** 5 niveles (no infinito)
- **Duración por nivel:** 2-3 minutos cada uno (dentro del rango 20s-5min)
- **Objetivos por nivel:**
  - Nivel 1: Introducción a variables (mover personaje a la meta usando variables de posición)
  - Nivel 2: Loops simples (repetir movimientos usando `for` loops)
  - Nivel 3: Condicionales (usar `if` para evitar obstáculos)
  - Nivel 4: Loops y condicionales combinados
  - Nivel 5: Desafío final (todos los conceptos juntos)

### ✅ 7.2 Visual Feedback (Progress Bar)
**Requisito:** A visual progress bar or timer is mandatory. Show real-time progress.

**Implementación:**
- **Barra de progreso de nivel:** Muestra código escrito / código esperado
- **Temporizador visual:** Cuenta regresiva de tiempo restante en el nivel
- **Indicador de nivel actual:** "Nivel X de 5"
- **Indicador de objetivos:** "Mover personaje a la meta (3 pasos restantes)"

### ✅ 7.3 Persistence (Save State)
**Requisito:** Game progress must be saved proactively using localStorage.

**Implementación:**
- **Clave de localStorage:** `code-quest-progress`
- **Datos guardados:**
  ```javascript
  {
    unlockedLevels: 1,      // Niveles desbloqueados
    currentLevel: 0,         // Nivel actual (0-indexed)
    totalPuzzlesSolved: 0,  // Total de puzzles resueltos
    lastPlayed: "2026-02-18T04:45:00Z",
    playerName: "Player 1"
  }
  ```
- **Carga automática:** Al iniciar el juego, se carga el progreso guardado
- **Guardado automático:** Al completar un nivel, se guarda el progreso

---

## 🎮 Estructura de Niveles Detallada

### Nivel 1: Introducción a Variables (2 min)
**Objetivo:** Mover el personaje 3 espacios a la derecha para llegar a la meta.

**Código Esperado:**
```javascript
let pasos = 3;
for (let i = 0; i < pasos; i++) {
  moverDerecha();
}
```

**Grid:**
```
[🏃] [ ] [ ] [ ] [🏁]
```

**Instrucciones:**
- "Usa la variable `pasos` para decirle al personaje cuántos pasos debe moverse"
- "El loop `for` repetirá el movimiento 3 veces"

**Meta:**
- 3 movimientos a la derecha
- Tiempo límite: 120 segundos (2 minutos)

### Nivel 2: Loops Simples (2.5 min)
**Objetivo:** Mover el personaje en forma de L: 2 derecha, 2 abajo.

**Código Esperado:**
```javascript
for (let i = 0; i < 2; i++) {
  moverDerecha();
}
for (let i = 0; i < 2; i++) {
  moverAbajo();
}
```

**Grid:**
```
[🏃] [ ] [ ] [ ] [ ]
[ ]   [ ] [ ] [ ] [ ]
[ ]   [ ] [ ] [🏁] [ ]
```

**Instrucciones:**
- "Usa dos loops para mover el personaje en forma de L"
- "Primero 2 veces a la derecha, luego 2 veces hacia abajo"

**Meta:**
- 2 movimientos a la derecha + 2 movimientos abajo
- Tiempo límite: 150 segundos (2.5 minutos)

### Nivel 3: Condicionales (3 min)
**Objetivo:** Mover a la derecha evitando un obstáculo (🪨).

**Código Esperado:**
```javascript
for (let i = 0; i < 3; i++) {
  if (!hayObstaculo()) {
    moverDerecha();
  } else {
    moverAbajo();
  }
}
```

**Grid:**
```
[🏃] [ ] [🪨] [ ] [ ]
[ ]   [ ] [ ]   [ ] [ ]
[ ]   [ ] [ ]   [🏁] [ ]
```

**Instrucciones:**
- "Usa un condicional `if` para detectar obstáculos"
- "Si hay un obstáculo, muévete abajo. Si no, muévete a la derecha"

**Meta:**
- Detectar y evitar obstáculo
- Tiempo límite: 180 segundos (3 minutos)

### Nivel 4: Loops y Condicionales Combinados (3 min)
**Objetivo:** Navegar un laberinto simple con 2 obstáculos.

**Código Esperado:**
```javascript
for (let i = 0; i < 4; i++) {
  if (!hayObstaculo()) {
    moverDerecha();
  } else {
    moverAbajo();
  }
}
moverDerecha();
```

**Grid:**
```
[🏃] [ ] [🪨] [ ] [ ]
[ ]   [ ] [ ]   [🪨] [ ]
[ ]   [ ] [ ]   [ ]   [ ]
[ ]   [ ] [ ]   [ ]   [🏁]
```

**Instrucciones:**
- "Combina loops y condicionales para navegar el laberinto"
- "Detecta los obstáculos y muévete alrededor de ellos"

**Meta:**
- Navegar laberinto con 2 obstáculos
- Tiempo límite: 180 segundos (3 minutos)

### Nivel 5: Desafío Final (3 min)
**Objetivo:** Resolver un puzzle complejo con todos los conceptos aprendidos.

**Código Esperado:**
```javascript
for (let i = 0; i < 3; i++) {
  if (!hayObstaculo()) {
    moverDerecha();
  } else {
    moverAbajo();
  }
}
for (let i = 0; i < 3; i++) {
  if (!hayObstaculo()) {
    moverAbajo();
  } else {
    moverDerecha();
  }
}
```

**Grid:**
```
[🏃] [ ] [🪨] [ ] [ ]
[ ]   [ ] [ ]   [🪨] [ ]
[ ]   [ ] [🪨] [ ]   [ ]
[ ]   [ ] [ ]   [ ]   [🏁]
```

**Instrucciones:**
- "Usa todo lo que aprendiste para resolver este puzzle final"
- "Combina variables, loops y condicionales"

**Meta:**
- Resolver puzzle complejo con 3 obstáculos
- Tiempo límite: 180 segundos (3 minutos)

---

## ⏱️ Sistema de Temporización

### Temporizador por Nivel
- **Tipo:** Cuenta regresiva
- **Duración:** 2-3 minutos por nivel (120-180s)
- **Implementación:**
  ```javascript
  let tiempoRestante = LEVELS[currentLevel].timeLimit; // segundos
  let timerInterval = setInterval(() => {
    tiempoRestante--;
    updateTimerDisplay(tiempoRestante);
    if (tiempoRestante <= 0) {
      mostrarModalTiempoAgotado();
      clearInterval(timerInterval);
    }
  }, 1000);
  ```

### Barra de Tiempo Visual
- **Ubicación:** Arriba de la cuadrícula
- **Comportamiento:**
  - Se llena cuando inicia el nivel (color verde)
  - Cambia a amarillo cuando < 50%
  - Cambia a rojo cuando < 25%
- **HTML:**
  ```html
  <div class="timer-bar-container">
    <div class="timer-bar">
      <div class="timer-fill" id="timerFill"></div>
    </div>
    <div class="timer-text" id="timerText">2:00</div>
  </div>
  ```

---

## 📊 Barra de Progreso Visual

### Progreso de Código Escrito
- **Ubicación:** Abajo del editor de código
- **Comportamiento:**
  - Muestra qué porcentaje del código esperado ha escrito el jugador
  - Se actualiza en tiempo real mientras escribe
- **HTML:**
  ```html
  <div class="progress-bar-container">
    <div class="progress-bar">
      <div class="progress-fill" id="codeProgressFill"></div>
    </div>
    <div class="progress-text">
      Código: <span id="codeProgressText">0%</span>
    </div>
  </div>
  ```

### Indicador de Objetivo
- **Ubicación:** A la derecha del HUD
- **Comportamiento:**
  - Muestra pasos restantes para llegar a la meta
  - Se actualiza mientras el personaje se mueve
- **HTML:**
  ```html
  <div class="objective-indicator">
    <div class="objective-text">
      Objetivo: <span id="objectiveText">Llegar a la meta</span>
    </div>
    <div class="steps-remaining">
      Pasos restantes: <span id="stepsRemaining">3</span>
    </div>
  </div>
  ```

---

## 🎨 Elementos de UI

### HUD (Heads-Up Display)
```
┌─────────────────────────────────────────────────────┐
│  Nivel 1 de 5   │  ⏱️ 2:00   │  💾 Guardar         │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │         GRID (5x5)                          │  │
│  │  [🏃] [ ] [ ] [ ] [🏁]                      │  │
│  │  [ ]   [ ] [ ] [ ] [ ]                       │  │
│  │  [ ]   [ ] [ ] [ ] [ ]                       │  │
│  │  [ ]   [ ] [ ] [ ] [ ]                       │  │
│  │  [ ]   [ ] [ ] [ ] [ ]                       │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │         EDITOR DE CÓDIGO                    │  │
│  │  let pasos = 3;                              │  │
│  │  for (let i = 0; i < pasos; i++) {          │  │
│  │    moverDerecha();                           │  │
│  │  }                                           │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
│  Código: 75%    │   [▶ Ejecutar]  [🔄 Reiniciar]    │
└─────────────────────────────────────────────────────┘
```

### Botones de Acción
- **Ejecutar (▶):** Ejecuta el código del jugador y mueve el personaje
- **Reiniciar (🔄):** Reinicia el nivel actual (resetea posición y tiempo)
- **Guardar (💾):** Guarda el progreso manualmente (automático por defecto)
- **Hint (?):** Muestra una pista del nivel (solo 3 por juego)

### Modales
1. **Nivel Completado:**
   - "¡Nivel Completado!"
   - "Usaste variables y loops correctamente"
   - Botón: "Siguiente Nivel →"

2. **Tiempo Agotado:**
   - "¡Tiempo Agotado!"
   - "El personaje no llegó a la meta a tiempo"
   - Botón: "Intentar de Nuevo"

3. **Juego Completado:**
   - "¡Felicidades! Completaste todos los niveles"
   - "Resolviste 5/5 puzzles de código"
   - Botón: "Jugar de Nuevo"

4. **Hint (Pista):**
   - "Pista: Usa un loop `for` para repetir el movimiento"
   - Botón: "Entendido"

---

## 🧱 Sistema de Persistencia

### Funciones de Persistencia

**saveProgress():**
```javascript
function saveProgress() {
  const progress = {
    unlockedLevels: gameState.unlockedLevels,
    currentLevel: gameState.currentLevel,
    totalPuzzlesSolved: gameState.totalPuzzlesSolved,
    lastPlayed: new Date().toISOString(),
    playerName: gameState.playerName
  };
  localStorage.setItem('code-quest-progress', JSON.stringify(progress));
}
```

**loadProgress():**
```javascript
function loadProgress() {
  const saved = localStorage.getItem('code-quest-progress');
  if (saved) {
    const progress = JSON.parse(saved);
    gameState.unlockedLevels = progress.unlockedLevels || 1;
    gameState.currentLevel = progress.currentLevel || 0;
    gameState.totalPuzzlesSolved = progress.totalPuzzlesSolved || 0;
    gameState.playerName = progress.playerName || "Player 1";
  }
}
```

**clearProgress():**
```javascript
function clearProgress() {
  localStorage.removeItem('code-quest-progress');
  // Reiniciar a nivel 1
  gameState.unlockedLevels = 1;
  gameState.currentLevel = 0;
  gameState.totalPuzzlesSolved = 0;
}
```

---

## 🎲 Progresión de Dificultad

### Comparación entre Niveles

| Nivel | Conceptos | Objetivos | Tiempo | Dificultad |
|-------|-----------|-----------|--------|------------|
| 1 | Variables | 3 movimientos | 120s | ★☆☆☆☆ |
| 2 | Loops simples | 4 movimientos (L-shape) | 150s | ★★☆☆☆ |
| 3 | Condicionales | Detectar 1 obstáculo | 180s | ★★★☆☆ |
| 4 | Loops + Condicionales | 2 obstáculos | 180s | ★★★★☆ |
| 5 | Todos los conceptos | 3 obstáculos | 180s | ★★★★★ |

### Sistema de Desbloqueo
- **Nivel 1:** Siempre desbloqueado (inicial)
- **Nivel 2-5:** Se desbloquean al completar el nivel anterior
- **Jugador puede repetir:** Niveles ya completados para mejorar tiempo

---

## 📱 Responsividad (375x667px)

### Layout Portrait (375px de ancho)
- Grid: 5x5, 300px de ancho
- Editor de código: 280px de ancho, 150px de alto
- Botones: 100px de ancho (stack vertical)
- Fuente: 14px para código, 16px para instrucciones

### Touch Events
- **Ejecutar:** Botón táctil grande (60px de alto)
- **Reiniciar:** Botón táctil grande (60px de alto)
- **Hint:** Botón pequeño (40px x 40px) en esquina

---

## ✅ CHECKLIST TDD - ANTES DE ESCRIBIR CÓDIGO

- [x] He leído game-design-rules.md completamente
- [x] He documentado la estructura de niveles (5 niveles, no infinito)
- [x] He documentado el sistema de temporización (120-180s por nivel)
- [x] He documentado la barra de progreso visual (código escrito, pasos restantes)
- [x] He documentado la progresión de dificultad (variables → loops → condicionales → combinados)
- [x] He documentado localStorage para guardar progreso (`code-quest-progress`)
- [x] He validado que NO es un juego infinito (5 niveles con objetivos claros)
- [x] He creado el archivo `design-plan-001-code-quest.md`

**Estado del CHECKLIST:** ✅ COMPLETADO

---

## 🎯 Validación Contra game-design-rules.md

### Regla 2: Technical Requirements
- [x] **Technology:** HTML5, CSS3, Vanilla JavaScript ✅
- [x] **No Frameworks:** NO se usará Phaser 3 (violaría la regla), implementación con JS puro ✅
- [x] **Static Serving:** Correrá localmente sin build step ✅
- [x] **Responsiveness:** Funcionará en 375x667px (iPhone SE) ✅
- [x] **Touch Events:** Botones táctiles optimizados ✅

### Regla 7: Levels & Progression
- [x] **7.1 Level Structure:** 5 niveles, cada uno 2-3 minutos ✅
- [x] **7.2 Visual Feedback:** Barra de progreso + temporizador visual ✅
- [x] **7.3 Persistence:** LocalStorage con clave `code-quest-progress` ✅

### Regla 4: Game Registration
- [x] **Entry Point:** `index.html` ✅
- [x] **manifest.json:** Válido con metadatos completos ✅
- [x] **Games-list.json:** Se registrará el juego ✅

---

## 📝 Notas Técnicas Importantes

### Sintaxis Simplificada de JavaScript
Para niños de 8-15 años, el código será:
- Simple y legible
- Sin sintaxis compleja (arrow functions, destructuring, etc.)
- Con comentarios explicativos en cada función
- Validación de errores amigables

### Validación de Código
- El editor de código no será un Monaco/CodeMirror completo (demasiado pesado)
- Será un `textarea` con syntax highlighting básico (coloreo manual)
- Validación de errores básica:
  - Variables no declaradas
  - Loops infinitos
  - Sintaxis básica (paréntesis, llaves)

### Movimiento del Personaje
- Animación suave entre celdas (CSS transitions)
- Sonidos de paso (opcional, si no viola reglas de tamaño)
- Efectos visuales al completar puzzle

---

**Plan Aprobado para Implementación** ✅
**Validación TDD Completada:** ✅
**Listo para FASE 2 TDD (Validación de Requisitos) y FASE 3 TDD (Implementación)**
