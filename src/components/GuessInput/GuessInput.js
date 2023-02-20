import React from "react";

function GuessInput({
  guess,
  setGuess,
  setGuessResults,
  numberOfGuesses,
  setNumberOfGuesses,
  answer,
  checkGuess,
  gameHasEnded,
  setGameHasEnded,
  setPlayerHasWon,
  setUsedKeys,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length === 5 && guess === answer) {
      setGuessResults((prevState) => {
        const nextGuessResult = [...prevState, checkGuess(guess, answer)];
        return nextGuessResult;
      });
      setUsedKeys((prevState) => {
        const nextUsedKeys = [...prevState, ...checkGuess(guess, answer)];
        return nextUsedKeys;
      });
      setGameHasEnded(true);
      setPlayerHasWon(true);
    } else if (guess.length === 5 && guess !== answer) {
      setGuessResults((prevState) => {
        const nextGuessResult = [...prevState, checkGuess(guess, answer)];
        return nextGuessResult;
      });
      setUsedKeys((prevState) => {
        const nextUsedKeys = [...prevState, ...checkGuess(guess, answer)];
        return nextUsedKeys;
      });
      if (numberOfGuesses >= 2) {
        setNumberOfGuesses((prevState) => {
          const nextNumberOfGuesses = prevState - 1;
          return nextNumberOfGuesses;
        });
      } else {
        setGameHasEnded(true);
        setPlayerHasWon(false);
      }
      console.log(guess);
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
        disabled={gameHasEnded}
      />
    </form>
  );
}

export default GuessInput;
