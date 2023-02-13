import { useState } from "react";

const useGuess = () => {
  const [guess, setGuess] = useState("");

  return { guess, setGuess };
};

export default useGuess;
