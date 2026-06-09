# Number Guessing Game (Modern Dark UI)

A minimalist, modern, and fully responsive Number Guessing Game built with pure web technologies. This project highlights efficient state management, strict type casting, and clean user experience (UX) interactions.

## ✨ Features

- **Smart Validation:** Prevents invalid inputs (empty strings, non-numeric values, or out-of-bounds numbers) seamlessly.
- **Dynamic Feedback:** Provides real-time clues (`Too high!`, `Too low!`) to guide the user toward the secret number.
- **Score System:** Every player starts with 10 attempts. Each incorrect guess decreases the score.
- **Highscore Tracking:** Locally persists and displays the best record across multiple game rounds without unnecessary memory overhead.
- **State Reset:** A dedicated reset system resets the game parameters and generates a new random number while keeping the highscore intact.

## 🛠️ Tech Stack & Concepts Covered

- **Frontend:** HTML5, CSS3 (Modern Dark Theme, Flexbox, Gradients, Smooth Transitions).
- **JavaScript Core:** - Explicit Type Conversion / Type Casting (using the unary `+` operator for secure input processing).
  - Mathematical logic utilizing `Math.floor()` and `Math.random()`.
  - Data validation handling with `isNaN()`.
  - DOM Manipulation & Event Handling (`onclick`, `textContent`).

## 📂 Project Structure

```text
├── index.html      # Game layout and structure
├── style.css       # Custom modern dark UI styling
└── script.js       # Core game logic and state control

🧠 Behind the Logic
Instead of using heavy arrays to store performance history, the Highscore feature relies on an optimal standalone variable comparison. The highscore state is deliberately decoupled from the game's reset event listener, ensuring that top achievements are preserved cleanly across multiple gaming sessions.
```
