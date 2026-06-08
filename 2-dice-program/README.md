# 🎲 Random Dice Game

A lightweight, responsive, and clean web application that simulates a rolling dice. This project showcases structured DOM manipulation, reusable function design, and the utilization of JavaScript's `Math` object.

## 🚀 Features

- **Roll**: Generates a truly random integer between 1 and 6 using a precise mathematical formula.
- **Reset**: Reverts the dice display smoothly back to 0.
- Interactive UI with custom button hover effects and shadow layouts.

## 🛠️ Tech Stack

- **HTML5**: Semantic and clean document structure.
- **CSS3**: Modern layouts using viewport units (`rem`, `em`), centralized positioning, and hover state animations.
- **JavaScript (ES6+)**: Event handling and encapsulated UI rendering logic via `updateDisplay()`.

## 🧠 Core Logic Applied

- Mastered the random integer generation formula:
  `Math.floor(Math.random() * 6) + 1`
- Avoided code duplication by centralizing text mutations into a single independent renderer function.
