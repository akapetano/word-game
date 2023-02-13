import React from "react";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((guessResult) => (
        <p key={crypto.randomUUID()} className="guess">
          {guessResult}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
