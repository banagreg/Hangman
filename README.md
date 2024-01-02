# Hangman Game

Welcome to the Hangman game! This is a small project built using TypeScript and React. The game aims to recreate the classic hangman experience that many of us enjoyed during our childhood and help me grow my TypeScript knowledge.

## Table of Contents

- [Hangman Game](#hangman-game)
	- [Table of Contents](#table-of-contents)
	- [Features](#features)
	- [Installation](#installation)
	- [Game Rules](#game-rules)

## Features

- **Interactive Gameplay:** Experience the thrill of the classic hangman game with an interactive interface.
- **Random Word Generation:** The game generates a random word for each new round.
- **Visual Feedback:** Visual cues and feedback for correct and incorrect guesses.
- **Score Tracking:** Keep track of your wins and losses.

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine:

	```bash
   git clone https://github.com/banagreg/Hangman.git
	```
2. Navigate to the project directory:
   ```bash
   cd hangman
   ```
3. Install dependencies using npm or yarn::
   ```bash
	npm install
	#or
	yarn install
   ```

## Game Rules
- The game selects a random word, and your objective is to guess that word by suggesting letters.
- You have a limited number of attempts to guess the word. For each incorrect guess, a part of the hangman is drawn.
- Guess the word before the hangman is completely drawn to win the round.
- If the hangman is fully drawn before you guess the word, you lose the round.

<img src="hangman\src\images\hangman_loss.png" alt="Hangman Game" width="700"/>
<img src="hangman\src\images\hangman_win.png" alt="Hangman Game" width="700"/>