import React from "react";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((guessResult) => (
        <p key={crypto.randomUUID()} className="guess">
          {guessResult.split("").map((letter) => (
            <span class="cell">{letter}</span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
