# 🎮 Juegos por Rango de Edad

## Objetivo
Investigar y documentar 100 ideas de juegos en HTML/JavaScript por cada rango de edad, diseñados para ser jugados en el celular de los padres.

## Estructura de Carpetas

| Rango de Edad | Descripción | Ideas Objetivo | Estado |
|--------------|-------------|----------------|--------|
| 0-1 años | Bebés y primeros meses | 100 | ⏳ Pendiente |
| 1-2 años | Primeros pasos y lenguaje | 100 | ⏳ Pendiente |
| 2-3 años | Pre-escolar temprano | 100 | ⏳ Pendiente |
| 3-5 años | Pre-escolar avanzado | 100 | ⏳ Pendiente |
| 5-8 años | Primaria temprana | 100 | ⏳ Pendiente |
| 8-15 años | Primaria avanzada + secundaria | 100 | ⏳ Pendiente |

## Proceso de Trabajo

### Cron Jobs (6 agentes)
Cada rango tiene su propio cron job que:
- Se ejecuta cada 15 minutos
- Genera 4 ideas de juegos por ejecución
- Total: 25 ejecuciones = 100 ideas (6.25 horas por rango)

### Formato de Ideas
Cada idea debe incluir:
- **Nombre del juego**
- **Edad objetivo**
- **Motivación clave** (qué motiva al niño)
- **Mecánica principal**
- **Tecnologías** (HTML/JS/CSS específicos)
- **Interacción móvil** (touch, swipe, tap, etc.)
- **Características visuales** (colores, animaciones, sonidos)
- **Complejidad técnica** (nivel de desarrollo requerido)
- **Valor educativo** (si aplica)
- **Referencias** (enlaces a inspiración, documentación, etc.)

## Cron Jobs IDs

| Rango | Cron Job ID | Frecuencia | Lotes Completados | Ideas Generadas | Estado |
|-------|-------------|------------|-------------------|------------------|--------|
| 0-1 | `03d80dee-6272-4a68-baae-f50c3e53ff77` | cada 15 min | 0/25 | 0/100 | ✅ Activo |
| 1-2 | `05af7370-897b-4c8e-8abd-6fb8d509282b` | cada 15 min | 0/25 | 0/100 | ✅ Activo |
| 2-3 | `5697fbc3-c2aa-4097-aeaf-9501779c1c51` | cada 15 min | 0/25 | 0/100 | ✅ Activo |
| 3-5 | `f974e98e-ee14-41fd-b7e4-6e04a262ddc0` | cada 15 min | 0/25 | 0/100 | ✅ Activo |
| 5-8 | `2b2060f2-efbc-4e48-ad95-7ed9c819d781` | cada 15 min | 0/25 | 0/100 | ✅ Activo |
| 8-15 | `5111fe2b-a72c-427b-8985-fb7dc8f3d4f2` | cada 15 min | 0/25 | 0/100 | ✅ Activo |

## Comandos de Gestión

### Ver estado de todos los cron jobs
```bash
openclaw cron list
```

### Ejecutar manualmente un cron job
```bash
openclaw cron run <job-id>
```

### Ver historial de ejecuciones
```bash
openclaw cron runs <job-id>
```

### Detener un cron job
```bash
openclaw cron update <job-id> --patch '{"enabled": false}'
```

---

**Creado:** 2026-02-17 01:02 UTC
**Mantenedor:** Blockito 🧱
