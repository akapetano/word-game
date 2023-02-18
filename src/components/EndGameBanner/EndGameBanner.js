import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function EndGameBanner({ playerHasWon, numberOfGuesses, answer }) {
  const numOfGuesses = NUM_OF_GUESSES_ALLOWED + 1 - numberOfGuesses;

  return (
    <div className={`${playerHasWon ? "happy" : "sad"} banner`}>
      {playerHasWon && numberOfGuesses ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numOfGuesses === 1
              ? `${numOfGuesses} guess`
              : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default EndGameBanner;