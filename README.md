# El Bebe Games

El Bebe Games es un portal de juegos educativos y divertidos diseñados específicamente para niños de 0 a 15 años.

## Descripción

Este proyecto es un sitio web estático que ofrece una colección curada de juegos organizados por rangos de edad. El objetivo es proporcionar un entorno seguro, fácil de usar y visualmente atractivo para que los niños jueguen y aprendan.

## Características

- **Diseño Responsivo**: Funciona en computadoras, tabletas y teléfonos móviles.
- **Filtro por Edad**: Permite seleccionar juegos adecuados para diferentes etapas de desarrollo (0-1, 1-2, 2-3, 3-5, 5-8, 8-15 años).
- **Interfaz Amigable**: Botones grandes, colores vibrantes y navegación sencilla.
- **Soporte Multilingüe**: Estructura preparada para inglés y español.

## Estructura del Proyecto

```
elbebe/
├── public/
│   ├── assets/       # Imágenes y recursos multimedia
│   ├── css/          # Hojas de estilo (style.css, animations.css)
│   ├── games/        # Archivos de los juegos individuales
│   ├── js/           # Lógica del sitio (main.js, home.js)
│   └── index.html    # Página principal
├── games-backlog/    # Ideas y planes para futuros juegos
├── master-game-plan.md # Plan maestro de desarrollo
└── README.md         # Este archivo
```

## Cómo Usar

1.  Clona el repositorio o descarga los archivos.
2.  Abre el archivo `public/index.html` en tu navegador web de preferencia.
3.  ¡Disfruta de los juegos!

## Desarrollo

Para realizar cambios en el diseño o la lógica:

-   **Estilos**: Edita `public/css/style.css`.
-   **Lógica**: Edita `public/js/home.js` (para la página principal) o `public/js/main.js` (funciones globales).

## 🤖 Prompt para Agentes de IA

Si utilizas un asistente de IA para desarrollar nuevos juegos, usa este prompt para garantizar que siga los estándares del proyecto:

```text
Actúa como un Experto en Desarrollo de Juegos Web y UX Infantil.
Tu objetivo es desarrollar el siguiente juego en la cola de producción.

Por favor, lee y analiza los siguientes archivos de contexto antes de empezar:

1.  CONTEXTO DE COLA (Qué juego sigue):
    @[development-queue.md]
    (Identifica el juego marcado como [NEXT] en la sección "Próximos Juegos")

2.  REGLAS DE DISEÑO (Estándares Técnicos):
    @[game-design-rules.md]
    (Sigue estrictamente estas reglas: HTML/CSS/JS puro, estructura de carpetas, responsividad móvil)

3.  ESPECIFICACIONES DEL JUEGO (Mecánicas y Assets):
    (Identifica el archivo correspondiente en games-backlog/ según el ID del juego)

4.  REGISTRO CENTRAL (Integración):
    @[public/js/games-list.json]
    (Archivo donde DEBES registrar el juego nuevo para que aparezca en el home)

TAREA:
Implementa de principio a fin el siguiente juego.
Asegúrate de:
1. Crear la carpeta y archivos en 'public/games/[id-juego]/'.
2. Implementar la lógica y diseño según el backlog.
3. Registrar el juego en 'games-list.json' (CRÍTICO).
4. Actualizar 'CHANGELOG.md' y marcarlo como hecho en 'development-queue.md'.
```
