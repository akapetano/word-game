import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import useGuess from "../../hooks/useGuess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const { guess, setGuess } = useGuess();

  return (
    <>
      <GuessInput guess={guess} setGuess={setGuess} answer={answer} />
    </>
  );
}

export default Game;
