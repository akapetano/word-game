import React from "react";
import { range } from "../../utils";
import { NUM_OF_LETTERS_PER_WORD } from "../../constants";

function Guess({ guess }) {
  const rows = range(NUM_OF_LETTERS_PER_WORD);

  return (
    <p className="guess">
      {rows.map((row) => {
        return (
          <span
            key={crypto.randomUUID()}
            className={`cell ${guess && guess[row] ? guess[row].status : ""}`}
          >
            {guess && guess[row] ? guess[row].letter : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
