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
      setGuess("");
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
      setGuess("");
      if (numberOfGuesses >= 2) {
        setNumberOfGuesses((prevState) => {
          const nextNumberOfGuesses = prevState - 1;
          return nextNumberOfGuesses;
        });
      } else {
        setGameHasEnded(true);
        setPlayerHasWon(false);
      }
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
        required
        minLength={5}
        maxLength={5}
        disabled={gameHasEnded}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
