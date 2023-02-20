import React from "react";
import Key from "../Key/Key";
import { KEYBOARD_KEYS } from "../../constants";

function Keyboard({ guess, setGuess, usedKeys }) {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {KEYBOARD_KEYS[0].map((key) => (
          <Key
            key={key.value}
            value={key.value}
            guess={usedKeys.find((usedKey) => usedKey.letter === key.label)}
            onClick={(event) =>
              setGuess(
                (prevLetter) => prevLetter + event.target.value.toUpperCase()
              )
            }
            disabled={guess.length === 5}
          />
        ))}
      </div>
      <div className="keyboard-row">
        {KEYBOARD_KEYS[1].map((key) => (
          <Key
            key={key.value}
            value={key.value}
            guess={usedKeys.find((usedKey) => usedKey.letter === key.label)}
            onClick={(event) =>
              setGuess(
                (prevLetter) => prevLetter + event.target.value.toUpperCase()
              )
            }
            disabled={guess.length === 5}
          />
        ))}
      </div>
      <div className="keyboard-row">
        {KEYBOARD_KEYS[2].map((key) => (
          <Key
            key={key.value}
            value={key.value}
            guess={usedKeys.find((usedKey) => usedKey.letter === key.label)}
            onClick={(event) =>
              setGuess(
                (prevLetter) => prevLetter + event.target.value.toUpperCase()
              )
            }
            disabled={guess.length === 5}
          />
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
