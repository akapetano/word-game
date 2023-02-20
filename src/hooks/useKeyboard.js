import { useState } from "react";

export const useKeyboard = () => {
  const [usedKeys, setUsedKeys] = useState([]);

  return { usedKeys, setUsedKeys };
};
