import { useState } from "react";
import useGuess from "./useGuess";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";
import { WORDS } from "../data";
import { sample } from "../utils";
import { useKeyboard } from "./useKeyboard";

export const useGame = () => {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [gameHasEnded, setGameHasEnded] = useState(null);
  const [playerHasWon, setPlayerHasWon] = useState(null);
  const { setGuess, setGuessResults, setNumberOfGuesses } = useGuess();
  const { setUsedKeys } = useKeyboard();
  const [gameHasReset, setGameHasReset] = useState(false);

  const startGame = () => {
    setAnswer(sample(WORDS));
    setGameHasReset((prev) => !prev);
  };

  const resetGame = () => {
    setGuess("");
    setGuessResults(null);
    setUsedKeys([]);
    setNumberOfGuesses(NUM_OF_GUESSES_ALLOWED);
    setPlayerHasWon(null);
    setGameHasEnded(null);
    setGameHasReset(true);
    startGame();
  };

  return {
    gameHasEnded,
    setGameHasEnded,
    playerHasWon,
    setPlayerHasWon,
    resetGame,
    gameHasReset,
    setGameHasReset,
    answer,
    setAnswer,
  };
};
