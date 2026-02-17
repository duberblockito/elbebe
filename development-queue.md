# Cola de Desarrollo de Juegos

Este documento define el orden de implementación de los juegos para asegurar un crecimiento equilibrado entre las distintas categorías de edad.

## ⚖️ Regla de Equilibrio

La estrategia de desarrollo sigue un ciclo "Round Robin" entre las categorías de edad para asegurar que todas tengan la misma cantidad de juegos disponibles.

**Orden del Ciclo:**
1.  👶 0-1 Años
2.  🧒 1-2 Años
3.  👦 2-3 Años
4.  🧒 3-5 Años
5.  🧒 5-8 Años
6.  👱 8-15 Años

**Lógica:**
-   Se verifica cuántos juegos "Terminados" (✅) hay en cada categoría.
-   El desarrollo pasa a la siguiente categoría que tenga menos o igual cantidad de juegos que la anterior, asegurando que ninguna categoría avance al nivel `N+1` hasta que todas las demás hayan alcanzado el nivel `N`.

## 📊 Estado Actual (Conteo)

| Categoría | Terminados | Meta Actual |
| :--- | :---: | :---: |
| 0-1 Años | 1 | 1 |
| 1-2 Años | 0 | 1 |
| 2-3 Años | 0 | 1 |
| 3-5 Años | 0 | 1 |
| 5-8 Años | 0 | 1 |
| 8-15 Años | 0 | 1 |

*Nota: La categoría 0-1 ya tiene 1 juego. Por lo tanto, el foco pasa a las siguientes categorías para igualarlas a 1.*

## 🚀 Próximos Juegos (Queue)

Basado en la regla anterior, este es el orden inmediato de desarrollo:

1.  **[NEXT]** **1-2 Años**: `001-poppit-burbujas` (Poppit! Burbujas)
2.  **2-3 Años**: `001-pinta-nubes` (Pinta las Nubes)
3.  **3-5 Años**: `001-chef-monstruos` (Chef de Monstruos)
4.  **5-8 Años**: `001-math-blaster` (Math Blaster)
5.  **8-15 Años**: `001-code-quest` (Code Quest)
6.  -- *Fin del Ciclo 1 (Todos tienen 1 juego)* --
7.  **0-1 Años**: `002-caja-sonidos` (Caja de Sonidos)
8.  **1-2 Años**: `002-animalitos-suenan` (Animalitos que Suenan)
... y así sucesivamente.

## 📝 Instrucciones para el Desarrollador

1.  Consulta este archivo para saber cuál es el siguiente juego.
2.  Una vez terminado un juego:
    -   Actualiza el estado en `master-game-plan.md` a ✅ Done.
    -   Incrementa el contador en la tabla de "Estado Actual" de este archivo.
    -   Mueve el juego de "Próximos Juegos" a un historial o elimínalo de la lista.
    -   Verifica si el ciclo se ha completado para añadir la siguiente ronda de juegos a la cola.
