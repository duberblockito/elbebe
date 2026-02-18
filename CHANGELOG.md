# Changelog

Todos los cambios notables en este proyecto se documentarán en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto se adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.2.0] - 2026-02-18

### Added
-   **Juego Nuevo**: "Pinta las Nubes" (2-3 años) - Toca nubes grises para revelar animales coloridos ocultos, feedback visual y auditivo, pronunciación de nombres de animales.
-   **Categoría**: Expandida la categoría 2-3 Años con el primer juego del grupo.
-   **Audio**: Implementación de Web Audio API para sonidos de pop y celebración.
-   **Accesibilidad**: Integración de Web Speech API para pronunciar nombres de animales.

### Changed
-   Actualizado `games-list.json` con la versión 1.2.0 y el nuevo juego registrado.

## [1.1.0] - 2026-02-18

### Added
-   **Juego Nuevo**: "Poppit! Burbujas Mágicas" (1-2 años) - Sistema de partículas canvas, multi-touch, burbujas animadas con sonidos generados dinámicamente (Web Audio API).
-   **Categoría**: Expandida la categoría 1-2 Años con el primer juego del grupo.

### Changed
-   Actualizado `games-list.json` con la versión 1.1.0 y el nuevo juego registrado.

## [Unreleased]

### Added
-   Archivo `README.md` con información del proyecto.
-   Archivo `CHANGELOG.md` para seguimiento de versiones.

### Fixed
-   **Burbujas Mágicas**: El nivel 1 ahora inicia correctamente al cargar el juego.
-   **Burbujas Mágicas**: Tamaños de burbujas ahora se calculan dinámicamente según la resolución de pantalla (6%-12% del lado más pequeño) para asegurar que siempre sean fáciles de tocar para niños pequeños.
-   **Burbujas Mágicas**: Corregido el problema de burbujas bloqueadas - el sistema de respawn ahora funciona correctamente incluso cuando el juego está pausado o entre niveles.

## [0.2.1] - 2026-02-17 (Mejoras Visuales y Técnicas)

### Added
-   **UI**: Nueva "Barra de Marca" separada del Header para mejorar la jerarquía visual y evitar problemas en móviles.
-   **Mobile**: Ajuste en la posición `sticky` de los filtros para adaptarse al nuevo header.
-   **Legal**: Agregado archivo `LICENSE` (MIT) y documentación en README.
-   **Procesos**: Establecida regla "Bugs Primero" en `development-queue.md` y creado template seguro para reportes en `bugs/template.md`.
-   **Procesos**: Clarificado el ciclo de vida de Git (Fetch/Pull -> Feature Branch -> Auto-Merge -> Master Push).
-   **Procesos**: Optimizado el Prompt para Agentes IA en README (Prioridad de Bugs y Flujo Git explícito).
-   **Procesos**: Refinada estrategia de Bugs: "Uno a la vez, en orden alfabético".

### Fixed
-   **Mobile**: Corrección del apilamiento de texto en el logo (que anteriormente rompía el diseño).
-   **Tech**: Movida la importación de fuentes CSS al inicio del archivo para cumplir estándares y eliminar warnings.
-   **Seguridad**: Validación de ausencia de `eval()` y uso seguro de `setTimeout`.

## [0.2.0] - 2026-02-17 (Diseño y Branding)

### Added
-   **Branding**: Título actualizado a "elbebe: Juegos diseñados para Susana y Julieta".
-   **Diseño**: Nuevo tema visual colorido ("Kid-Friendly"), tipografía `Comic Neue` y `Nunito`, y botones "chunky".
-   **Bilingüe**: Soporte completo ES/EN en Header, Footer, Home, Privacidad, Términos y About.
-   **Documentación**:
    -   `development-queue.md` para estrategia Balanceada (Round Robin).
    -   Prompt para Agentes IA en `README.md`.
    -   Reglas de Registro en `game-design-rules.md`.
-   **Página About**: Historia personal del creador.

### Changed
-   Actualizada lógica de cambio de idioma en `main.js` para ser instantánea y recursiva.
-   Mejorada la accesibilidad con etiquetas `aria` y contrastes de color.

## [0.1.0] - 2026-02-17

### Added
-   Estructura inicial del sitio web (`public/index.html`).
-   Estilos básicos responsivos y amigables para niños (`public/css/style.css`).
-   Sistema de filtrado de juegos por edad.
-   Marcadores de posición para juegos en diferentes categorías de edad.
