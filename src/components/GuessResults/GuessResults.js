import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import {
  NUM_OF_GUESSES_ALLOWED,
  NUM_OF_LETTERS_PER_WORD,
} from "../../constants";

function GuessResults({ guessResults, answer }) {
  const columns = range(0, NUM_OF_GUESSES_ALLOWED);
  const rows = range(0, NUM_OF_LETTERS_PER_WORD);

  return (
    <div className="guess-results">
      {columns.map((column) => (
        <Guess
          key={crypto.randomUUID()}
          rowRange={rows}
          guess={guessResults[column]}
        />
      ))}
    </div>
  );
}

export default GuessResults;
