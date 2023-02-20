import { useState } from "react";
import { WORDS } from "../data";
import { sample } from "../utils";

export const useGame = () => {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [gameHasEnded, setGameHasEnded] = useState(null);
  const [playerHasWon, setPlayerHasWon] = useState(null);
  const [gameHasReset, setGameHasReset] = useState(false);

  return {
    gameHasEnded,
    setGameHasEnded,
    playerHasWon,
    setPlayerHasWon,
    gameHasReset,
    setGameHasReset,
    answer,
    setAnswer,
  };
};
