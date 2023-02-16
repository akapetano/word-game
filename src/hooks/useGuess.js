import { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";

const useGuess = () => {
  const [guess, setGuess] = useState("");
  const [guessResults, setGuessResults] = useState([]);
  const [numberOfGuesses, setNumberOfGuesses] = useState(
    NUM_OF_GUESSES_ALLOWED
  );

  return {
    guess,
    setGuess,
    guessResults,
    setGuessResults,
    numberOfGuesses,
    setNumberOfGuesses,
  };
};

export default useGuess;
