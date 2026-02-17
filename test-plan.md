# 🧪 Test Plan: El Bebe Games

This document outlines the testing strategy to ensure all games are high-quality, accessible, and performant.

## 1. Testing Philosophy
Testing is not an afterthought; it is integrated into the development of every game. A game is not "Done" until it passes the Core Checklist.

## 2. Core Checklist (Every Game)
Every game must pass these checks before being marked as "Complete" in `master-game-plan.md`.

### 📱 Device & Responsiveness
- [ ] **Mobile Touch**: Tap, Drag,Swipe work seamlessly on touch simulation.
- [ ] **Orientation**: Works in Portrait and Landscape (or handles rotation gracefully).
- [ ] **Resolution**: Elements scale correctly from small phones (320px) to tablets.

### 🎮 Gameplay & Mechanics
- [ ] **Start State**: Game loads instantly (< 2s) and asks for interaction (Start button).
- [ ] **Win Condition**: Clear feedback when the goal is achieved (Sound + Visuals).
- [ ] **Fail State**: Gentle feedback (no "Game Over" red text), encouraging retry.
- [ ] **Interactivity**: All interactive elements provide immediate visual feedback (scale/glow) on touch.

### 🎨 Visuals & Audio
- [ ] **Contrast**: Colors are distinct with good contrast.
- [ ] **Text**: Minimal text, large fonts. All text supports Spanish/English toggle (via global state).
- [ ] **Audio**: Sound effects play on interaction. Mute button functions.

### 🔍 Accessibility
- [ ] **Touch Targets**: All buttons/interactables are at least 48x48px (ideally 60px+).
- [ ] **Color Blindness**: Game is playable without relying *solely* on color (use shapes/icons too).

## 3. Integration Testing (The Platform)
The main website (`index.html`) must:
- [ ] Successfully load the list of games dynamically.
- [ ] Switch languages (ES/EN) instantly without reloading.
- [ ] Launch games in full-screen mode (or iframe) correctly.
- [ ] Return to the menu smoothly.

## 4. Performance Standards
- **FPS**: Maintain 60fps during gameplay.
- **Asset Size**: Total game payload should ideally be < 5MB per game.
- **Battery**: Avoid infinite loops or unoptimized renders that drain battery.

## 5. Manual Verification Process
For each game developed:
1. **Developer Check**: Run local server, test on Chrome Device Mode (iPhone SE, iPad Air).
2. **User Verify**: Artifact walkthrough provided to user for approval.
