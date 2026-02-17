# Game Plan: Pelota que Rueda

**Source Idea:** 0-1/ideas-0-1.md
**Original ID:** Idea #11

## Concept
Ball on screen. Tilt device (gyroscope) or touch drag to roll. Physics simulation. Sounds on wall collision.

## Requirements
- **Level**: N/A.
- **Progress**: N/A.
- **Persistence**: N/A.

## Assets
- [ ] Ball sprite
- [ ] Wall/Floor textures
- [ ] Impact sounds

## Development Steps
1. Create `/games/pelota-rueda/`
2. Integrate Gyroscope API (with permission request)
3. Fallback to Touch Drag if no gyro
4. Simple Physics Engine (Matter.js light or custom)
