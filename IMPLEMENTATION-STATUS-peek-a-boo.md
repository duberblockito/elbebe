# Estado de Implementación: Peek-a-Boo (0-1-004)

**Fecha:** 2026-02-19 04:30 UTC
**Implementador:** Elbebe Implementador (Cron Job 65509351)
**Estado:** ⏸️ INICIADO - Pendiente completación en próxima ejecución

---

## Resumen

**Juego:** Peek-a-Boo (Animales que Salen)
**Categoría:** 0-1 Años (Infants)
**Fuente:** Idea #4 de `/games-idea/0-1/ideas-0-1.md`

---

## Conflicto de Requisitos

### Backlog vs Reglas de Diseño

**Backlog (games-backlog/0-1-004-peek-a-boo.md):**
```
- Level: Infinite
- Progress: N/A
- Persistence: N/A
```

**game-design-rules.md Sección 7 (Levels & Progression):**
```
1. Level Structure:
   - Games must be divided into levels.
   - Each level should last between 20 seconds and 5 minutes maximum.

2. Visual Feedback (Progress Bar):
   - A visual progress bar or timer is mandatory.

3. Persistence (Save State):
   - Game progress must be saved proactively.
   - Use localStorage to save state.
```

### Decisión del Implementador

**Razón:** Seguir estrictamente game-design-rules.md, que es el estándar técnico del proyecto.

**Estrategia de implementación:**
1. **Sistema de niveles:** 5 niveles progresivos con duración incremental (10s → 30s)
   - Nivel 1: 10 segundos, 1 animal
   - Nivel 2: 15 segundos, 2 animales
   - Nivel 3: 20 segundos, 3 animales
   - Nivel 4: 25 segundos, 4 animales
   - Nivel 5: 30 segundos, 4 animales + repetición infinita

2. **Barra de progreso:** Temporizador visual que muestra tiempo restante por nivel
   - Color verde → amarillo → rojo según tiempo restante
   - Ubicación: parte superior de la pantalla

3. **Persistencia:** Guardar en `localStorage` (`peek-a-boo-progress`)
   ```json
   {
     "currentLevel": 1,
     "animalsRevealed": 5,
     "totalPlayTime": 120
   }
   ```

---

## Especificación Técnica del Juego

### Concepto
4 cuadrados con puertas/cortinas cerradas en un grid 2x2. Al tocar un cuadrado, se abre suavemente y aparece un animal con su sonido característico. La puerta se cierra automáticamente después de 2 segundos.

### Interacción Móvil
- **Tap simple:** Abrir puerta/cortina
- **Responsive:** Grid adaptable (2x2 portrait, 1x4 landscape)
- **Accesibilidad:** Botones muy grandes (150-200px), contraste alto

### Tecnologías Requeridas
- **HTML5:** `<div>` elements para grid, CSS transitions para puertas
- **JavaScript:** Vanilla JS con event listeners, `requestAnimationFrame`, localStorage
- **CSS:** Grid/Flexbox layout, transitions suaves (0.3-0.5s), responsive design

### Características Visuales
- **Paleta de colores:** Colores pastel brillantes con alto contraste
- **Animaciones:** Puerta se desliza suavemente, animal aparece con fade-in + scale up
- **Tamaño de elementos:** Cuadrados 150-200px, animales 80-100px

### Audio
- **Efectos de sonido:** Puerta abriéndose ("clack" suave) + sonido del animal ("miau", "guau", etc.)
- **Música:** Sin música de fondo para no distraer
- **Calidad:** Sonidos cortos (0.5-1s), limpios y suaves

### Complejidad Técnica
- **Nivel:** Baja-Media
- **Tiempo estimado de desarrollo:** 6-8 horas
- **Requisitos de rendimiento:** 30-60 FPS, memoria mínima (<50MB)
- **Dependencias:** Ninguna - vanilla JS + CSS

---

## Valor Educativo
- **Objeto permanencia:** Entiende que objetos siguen existiendo aunque no se vean
- **Anticipación:** Aprende a esperar resultado con expectación
- **Memoria:** Recuerda qué animal está detrás de cada puerta
- **Asociación:** Animal ↔ sonido

---

## Plan de Implementación

### Paso 1: Preparación
- [ ] Sincronizar repositorio: `git fetch && git pull origin master`
- [ ] Crear rama: `git checkout -b feature/peek-a-boo`

### Paso 2: Estructura de Directorios
- [ ] Crear `/public/games/peek-a-boo/`
- [ ] Crear subdirectorios:
  - `assets/` (imágenes de animales)
  - `css/` (estilos del juego)
  - `js/` (lógica del juego)

### Paso 3: Archivos Base
- [ ] Crear `index.html` (punto de entrada HTML)
- [ ] Crear `css/game.css` (estilos responsivos)
- [ ] Crear `js/game.js` (lógica del juego)
- [ ] Crear `manifest.json` (metadatos)

### Paso 4: Implementación de HTML
- [ ] Grid de 2x2 con puertas/cortinas
- [ ] Animaciones CSS de apertura/cierre
- [ ] Área para animales ocultos
- [ ] Barra de temporizador visual

### Paso 5: Implementación de CSS
- [ ] Layout responsivo (portrait: 2x2, landscape: 1x4)
- [ ] Colores pastel brillantes con alto contraste
- [ ] Transiciones suaves (0.3-0.5s)
- [ ] Estilos de puerta/cortina

### Paso 6: Implementación de JavaScript
- [ ] Sistema de niveles (5 niveles progresivos)
- [ ] Temporizador visual (verde → amarillo → rojo)
- [ ] Event listeners para touch/click
- [ ] Lógica de apertura/cierre de puertas
- [ ] Reproducción de sonidos (AudioContext o audio elements)
- [ ] Persistencia en localStorage

### Paso 7: Assets
- [ ] Crear/reutilizar imágenes de animales (4 animales: gato, perro, pájaro, vaca)
- [ ] Crear/reutilizar sonidos de animales (4 sonidos)
- [ ] Crear thumbnail.jpg (300x300px)

### Paso 8: Registro e Integración
- [ ] Registrar en `public/js/games-list.json`
- [ ] Actualizar `CHANGELOG.md` (v1.14.0)
- [ ] Actualizar `master-game-plan.md` (marcar como Done)
- [ ] Actualizar `development-queue.md` (incrementar contador 0-1 Años)

### Paso 9: Prueba y Validación
- [ ] Probar en móvil (iPhone SE 375x667px)
- [ ] Verificar responsividad en tablet
- [ ] Verificar persistencia en localStorage
- [ ] Verificar todos los sonidos funcionan

### Paso 10: Entrega
- [ ] Commit: `git commit -m "feat: implement peek-a-boo"`
- [ ] Push: `git push origin feature/peek-a-boo`
- [ ] Merge a master
- [ ] Push de master

---

## Referencias e Inspiración
- [CSS Animations and Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [Touch Events API](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [Web Audio API - Creating Simple Sounds](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Creating_sounds)
- [Object Permanence in Babies](https://www.zerotothree.org/resource/brain-development/object-permanence/)
- [Peek-a-Boo Educational Games](https://www.pbs.org/parents/child-development/toddler)

---

## Notas Importantes

1. **Conflicto resuelto:** Priorizar game-design-rules.md sobre el backlog
2. **Niveles progresivos:** Implementar 5 niveles para cumplir con Sección 7
3. **Persistencia requerida:** Guardar progreso aunque el backlog diga "N/A"
4. **Simpleza:** Mantener el juego simple para bebés (0-1 años), sin reglas complejas
5. **Accesibilidad:** Contraste alto, elementos grandes (150-200px mínimo)

---

## Estado Actual

**Fecha:** 2026-02-19 04:30 UTC
**Progreso:** Planificación completada, pendiente implementación
**Próximo paso:** Iniciar implementación en próxima ejecución del cron job

**Implementador:** Blockito (El Bebe Implementador)
**Sesión:** agent:main:cron:65509351-103a-4725-a2de-c938b373e244
