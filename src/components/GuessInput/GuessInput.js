import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({
  guess,
  setGuess,
  setGuessResults,
  setNumberOfGuesses,
  answer,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length === 5 && guess === answer) {
      setGuessResults((prevState) => {
        const nextGuessResult = [...prevState, guess];
        return nextGuessResult;
      });
      console.log({ guess: guess });
      alert("You win!");
      setGuess("");
      setGuessResults([]);
      setNumberOfGuesses(NUM_OF_GUESSES_ALLOWED);
    } else if (guess.length === 5 && guess !== answer) {
      setGuessResults((prevState) => {
        const nextGuessResult = [...prevState, guess];
        return nextGuessResult;
      });
      setNumberOfGuesses((prevState) => {
        return prevState - 1;
      });
    } else {
      alert("Your guess must be a 5-letter word.");
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess.toUpperCase()}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        min={5}
        max={5}
      />
    </form>
  );
}

export default GuessInput;
