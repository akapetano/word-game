import React from "react";
import useGuess from "../../hooks/useGuess";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { useGame } from "../../hooks/useGame";
import EndGameBanner from "../EndGameBanner/EndGameBanner";
import Keyboard from "../Keyboard/Keyboard";
import { useKeyboard } from "../../hooks/useKeyboard";

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const {
    guess,
    setGuess,
    guessResults,
    setGuessResults,
    setNumberOfGuesses,
    numberOfGuesses,
    checkGuess,
  } = useGuess();
  const {
    gameHasEnded,
    setGameHasEnded,
    playerHasWon,
    setPlayerHasWon,
    answer,
    resetGame,
    gameHasReset,
  } = useGame();
  const { usedKeys, setUsedKeys } = useKeyboard();
  console.info({ answer });
  return (
    <>
      <GuessResults
        guessResults={guessResults}
        answer={answer}
        checkGuess={checkGuess}
        gameHasReset={gameHasReset}
        gameHasEnded={gameHasEnded}
      />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        setGuessResults={setGuessResults}
        numberOfGuesses={numberOfGuesses}
        setNumberOfGuesses={setNumberOfGuesses}
        answer={answer}
        checkGuess={checkGuess}
        gameHasEnded={gameHasEnded}
        setGameHasEnded={setGameHasEnded}
        setPlayerHasWon={setPlayerHasWon}
        setUsedKeys={setUsedKeys}
      />
      <Keyboard
        guess={guess}
        setGuess={setGuess}
        usedKeys={usedKeys}
        gameHasReset={gameHasReset}
      />
      {gameHasEnded ? (
        <EndGameBanner
          playerHasWon={playerHasWon}
          numberOfGuesses={numberOfGuesses}
          gameHasEnded={gameHasEnded}
          answer={answer}
          resetGame={resetGame}
        />
      ) : null}
    </>
  );
}

export default Game;
