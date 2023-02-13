import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import useGuess from "../../hooks/useGuess";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const { guess, setGuess, guessResults, setGuessResults } = useGuess();

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        setGuessResults={setGuessResults}
        answer={answer}
      />
    </>
  );
}

export default Game;
