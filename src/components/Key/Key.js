import React from "react";

function Key({ value, guess, disabled, onClick }) {
  return (
    <input
      type="button"
      className={`keyboard-key ${guess ? guess.status : ""}`}
      value={value.toUpperCase()}
      onClick={onClick}
      disabled={disabled}
    />
  );
}

export default Key;
