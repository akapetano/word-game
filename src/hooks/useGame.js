import { useState } from "react";
import useGuess from "./useGuess";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";

export const useGame = () => {
  const [gameHasEnded, setGameHasEnded] = useState(false);
  const [playerHasWon, setPlayerHasWon] = useState(false);
  const { setGuess, setGuessResults, setNumberOfGuesses } = useGuess();

  const resetGame = () => {
    setGuess("");
    setGuessResults([]);
    setNumberOfGuesses(NUM_OF_GUESSES_ALLOWED);
  };

  return {
    gameHasEnded,
    setGameHasEnded,
    playerHasWon,
    setPlayerHasWon,
    resetGame,
  };
};
