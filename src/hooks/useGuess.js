import { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";

const useGuess = () => {
  const [guess, setGuess] = useState("");
  const [guessResults, setGuessResults] = useState([]);
  const [numberOfGuesses, setNumberOfGuesses] = useState(
    NUM_OF_GUESSES_ALLOWED
  );

  const checkGuess = (guess, answer) => {
    if (!guess) {
      return null;
    }

    const guessChars = guess.toUpperCase().split("");
    const answerChars = answer.split("");

    return guessChars.map((guessChar, index) => {
      const answerChar = answerChars[index];

      let status;
      if (guessChar === answerChar) {
        status = "correct";
      } else if (answerChars.includes(guessChar)) {
        status = "misplaced";
      } else {
        status = "incorrect";
      }
      return {
        letter: guessChar,
        status,
      };
    });
  };

  return {
    guess,
    setGuess,
    guessResults,
    setGuessResults,
    numberOfGuesses,
    setNumberOfGuesses,
    checkGuess,
  };
};

export default useGuess;
