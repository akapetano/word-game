import React from "react";
import useGuess from "../../hooks/useGuess";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { useGame } from "../../hooks/useGame";
import EndGameBanner from "../EndGameBanner/EndGameBanner";
import Keyboard from "../Keyboard/Keyboard";
import { useKeyboard } from "../../hooks/useKeyboard";

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
    setAnswer,
    resetGame,
  } = useGame();
  const { usedKeys, setUsedKeys } = useKeyboard();
  console.info({ answer });

  return (
    <>
      <GuessResults guessResults={guessResults} />
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
      <Keyboard guess={guess} setGuess={setGuess} usedKeys={usedKeys} />
      {gameHasEnded ? (
        <EndGameBanner
          playerHasWon={playerHasWon}
          numberOfGuesses={numberOfGuesses}
          gameHasEnded={gameHasEnded}
          answer={answer}
          resetGame={resetGame}
          setNumberOfGuesses={setNumberOfGuesses}
          setGuess={setGuess}
          setGuessResults={setGuessResults}
          setUsedKeys={setUsedKeys}
          setPlayerHasWon={setPlayerHasWon}
          setGameHasEnded={setGameHasEnded}
          setAnswer={setAnswer}
        />
      ) : null}
    </>
  );
}

export default Game;
