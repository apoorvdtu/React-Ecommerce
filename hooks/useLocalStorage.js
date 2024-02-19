import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultInitialValue) => {
  const [state, setState] = useState(() => {
    const valueJSON = window.localStorage.getItem(key);
    return valueJSON ? JSON.parse(valueJSON) : defaultInitialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  });
  return [state, setState];
};
