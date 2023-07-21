import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessResults }) {
  const columns = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {columns.map((column) => {
        return <Guess key={crypto.randomUUID()} guess={guessResults[column]} />;
      })}
    </div>
  );
}

export default GuessResults;
