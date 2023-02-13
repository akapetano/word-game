import { useState } from "react";

const useGuess = () => {
  const [guess, setGuess] = useState("");
  const [guessResults, setGuessResults] = useState([]);

  return { guess, setGuess, guessResults, setGuessResults };
};

export default useGuess;
