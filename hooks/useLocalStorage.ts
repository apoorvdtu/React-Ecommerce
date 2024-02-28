import { useState, useEffect, Dispatch, SetStateAction } from "react";

export const useLocalStorage = <T>(
  key: string,
  defaultInitialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState(() => {
    const valueJSON = window.localStorage.getItem(key);
    return valueJSON ? JSON.parse(valueJSON) : defaultInitialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  });
  return [state, setState];
};
