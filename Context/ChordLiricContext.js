"use client"

import { useContext, createContext, useState } from "react";

const ChordLyricContext = createContext();
// eslint-disable-next-line react/prop-types
export function ChordLyricProvider({ children }) {
  const [selectedChord, setSelectedChord] = useState("");

  const handleClick = (chord) => {
    setSelectedChord(chord === selectedChord ? "" : chord);
  };
  const handleSelectedChord = () => {
    setSelectedChord("");
  };

  return (
    <ChordLyricContext.Provider
      value={{ selectedChord, handleClick, handleSelectedChord }}
    >
      {children}
    </ChordLyricContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useChordLyricContext = () => useContext(ChordLyricContext);
