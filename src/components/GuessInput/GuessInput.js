import React from "react";

function GuessInput({ guess, setGuess, answer }) {
  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length === 5 && guess === answer) {
      console.log({ guess: guess });
      alert("You win!");
      setGuess("");
    }
    alert("Word must have more than 5 letters.");
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
