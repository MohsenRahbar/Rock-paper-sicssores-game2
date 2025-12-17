# 🎮 Rock Paper Scissors Game 2 ✂️🪨

A modern, interactive **Rock Paper Scissors Game** built with **TypeScript**, **DOM manipulation**, **Audio feedback**, and **Responsive design**. Includes **Autoplay mode**, **Keyboard shortcuts**, and fully **tested with Jest**.  

---

### Table of Contents

<details>
  <summary>▶ Expand Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#technologies-used">Technologies Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li>
      <a href="#usage">Usage</a>
    </li>
        <li>
      <a href="#docker">Docker</a>
    </li>
    <li>
      <a href="#tests">Unit Tests</a>
    </li>
    <li>
      <a href="#project-structure">Project Structure</a>
    </li>
    <li>
      <a href="#license">license</a>
    </li>
    <li>
      <a href="#author">Author</a>
    </li>
  </ol>
</details>

---

## About The Project

**Rock Paper Scissors Game 2** is a fully interactive game that allows users to play the classic Rock Paper Scissors game against the computer. It includes advanced features like autoplay, keyboard shortcuts, audio feedback for win/lose/tie, and a responsive design for mobile and desktop screens.

---

### Screenshot

![Game Screenshot](./images/Screenshot.png)

---

### Features
- Play Rock, Paper, or Scissors against the computer.
- Autoplay mode: computer plays automatically.
- Keyboard shortcuts: `R` for Rock, `P` for Paper, `S` for Scissors, `A` to toggle Autoplay.
- Audio feedback for wins, losses, and ties.
- Responsive design for mobile and desktop.
- Score tracking with localStorage.
- Fully tested with Jest unit tests.

### Technologies Used
- **TypeScript** for type-safe code.
- **HTML & CSS** for UI.
- **DOM Manipulation** for interactivity.
- **Audio API** for sound effects.
- **Jest** for unit testing.

---

## Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/MohsenRahbar/Rock-paper-sicssores-game.git


2. Install dependencies:

   ```bash
   npm install
   ```
3. Compile TypeScript to JavaScript:

   ```bash
   tsc
   ```
4. Start the live server:

   ```bash
   npx live-server
   ```

---

## Usage

* Click on **Rock**, **Paper**, or **Scissors** to play.
* Press keyboard keys (`R`, `P`, `S`) to play using shortcuts.
* Toggle **Autoplay** with the button or press `A`.
* Reset scores using the **Reset** button.
* See visual feedback of moves and results in real-time.

---

## Docker

This project can be easily run inside a **Docker container**, so you don’t need to install Node.js or dependencies locally.

### Prerequisites

* Docker installed
  👉 [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

---

### Build Docker Image

From the project root directory, run:

```bash
docker build -t rock-paper-scissors-game .
```

---

## Tests

* Run all Jest unit tests:

  ```bash
  npm test
  ```

* All game logic functions (e.g., `pickUpComputerMove`, `playGame`, `toggleAutoPlay`) are fully covered.

---

## Project Structure

```
Rock-paper-sicssores-game/
│
├─ dist/                 # Compiled JS
├─ images/               # Emojis and icons
├─ Music/                # winer.mp3, loser.mp3, tie.mp3
├─ tests/                # Jest unit tests
├─ stylegame.css          # Styles
├─ rook-paper-sicssores.ts # TypeScript source
├─ rook-paper-sicssores.js # Compiled JS
├─ index.html             # Game HTML
├─ package.json
└─ tsconfig.json
```
---

# License
This project is open-source and licensed under MIT License.

---

## Author

Created with ❤️ by **MohsenRahbar**
[GitHub Profile](https://github.com/MohsenRahbar)
