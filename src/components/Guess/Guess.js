import React from "react";

function Guess({ rowRange, guess }) {
  console.log(guess);
  return (
    <p className="guess">
      {rowRange.map((row) => {
        return (
          <span
            key={crypto.randomUUID()}
            className={`cell ${guess ? guess[row].status : ""}`}
          >
            {guess ? guess[row].letter : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
