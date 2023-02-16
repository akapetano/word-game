import React from "react";

function Guess({ rowRange, guess }) {
  return (
    <p className="guess">
      {rowRange.map((row) => (
        <span key={crypto.randomUUID()} className="cell">
          {guess ? guess?.split("")[row] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
