"use client"

/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState } from "react";

const TransposeContext = createContext({
  semitones: 0,
  reset: () => null,
  increment: () => null,
  decrement: () => null,
});

// eslint-disable-next-line react/prop-types
export function TransposeProvider({ children }) {
  const [semitones, setSemitones] = useState(0);
  const reset = () => setSemitones(0);
  const increment = () => setSemitones((semitones + 1) % 12);
  const decrement = () => {
    if (semitones === 0) {
      setSemitones(11);
    } else {
      setSemitones((semitones - 1) % 12);
    }
  };
  return (
    <TransposeContext.Provider
      value={{ semitones, reset, increment, decrement }}
    >
      {children}
    </TransposeContext.Provider>
  );
}

export const useTransposeContext = () => useContext(TransposeContext);
