import { useCallback, useEffect, useState } from "react"
import words from './constants/wordList.json'
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";
import { MISTAKES } from "./constants/constants";

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
  
  const isLoser = incorrectLetters.length >= MISTAKES;
  const isWinner = wordToGuess
  .split('')
  .every(letter => guessedLetters.includes(letter));

  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return;

    setGuessedLetters(currentLetters => [...currentLetters, letter]);
  }, [guessedLetters, isWinner, isLoser]);

  useEffect(()=> {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if(!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    }
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if(key !== 'Enter') return;

      e.preventDefault();
      setWordToGuess(getWord());
      setGuessedLetters([]);
    }

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    }
  }, [])

  return (
    <div style={{
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      margin: '0 auto',
      alignItems: 'center'
    }}>
      <div style={{fontSize: '2rem', textAlign: 'center'}}>
        {isWinner && <h2>You have won! Refresh to try again!</h2>}
        {isLoser && (<>
          <h2>Nice try! Refresh to try again!</h2>
        </>
        )}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord 
      reveal={isLoser}
      guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{ alignSelf: 'stretch' }}>
      <Keyboard 
      disabled={isWinner || isLoser}
      activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
      inactiveLetters={incorrectLetters}
      addGuessedLetter={addGuessedLetter}/>
      </div>
    </div>
  )
}

export default App
