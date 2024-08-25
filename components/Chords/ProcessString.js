import { useState } from "react";
import { Chords, Lyrics } from "./ChordsLiric";
import { useChordLyricContext } from "@/Context/ChordLiricContext";
import { transposeChord } from "@/lib/chordMap";
import { useTransposeContext } from "@/Context/TransposeContext";

const ProcessString = ({ str }) => {
  const [selectLine, setSelectLine] = useState(-1);
  const { handleSelectedChord } = useChordLyricContext();
  const { semitones } = useTransposeContext(); //

  return str?.split("\n").map((line, index) => {
    // Chords
    if (line.includes("<ch>")) {
      const chordsWithSpaces = line
        .replace(/<\/?ch>/g, "") 
        .replace(
          /([A-G][#b]?(?:m|maj|min|7|dim|aug|sus[24]?)?)(\/[A-G][#b]?(?:m|maj|min|7|dim|aug|sus[24]?)?)?/g,
          (match) => {
            // Transpose chord
            const transposedChord = transposeChord(match, semitones);
            return transposedChord;
          }
        )
        .replace(/-/g, " "); // Ganti tanda '-' dengan spasi

      return (
        <span
          key={index}
          onClick={() => setSelectLine(index)}
          className="w-full"
        >
          <Chords isLine={selectLine === index}>{chordsWithSpaces}</Chords>
        </span>
      );

      //Lyrics
    } else if (line.includes("<ly>")) {
      const liricsWithSpaces = line
        .replace(/<\/?ly>/g, "")
        .replace(/([A-Za-z]+)(?:\s*-\s*(\d+))?/g, (_, chords, spaces) => {
          const liricWithSpaces = spaces
            ? `${chords} ${" ".repeat(Number(spaces))}`
            : chords;
          return liricWithSpaces;
        })
        .replace(/-/g, " "); // Ganti tanda '-' dengan spasi
      return (
        <div
          key={index}
          onClick={() => {
            handleSelectedChord();
          }}
          className="h-[15px] flex items-center mb-2"
        >
          <Lyrics>{liricsWithSpaces}</Lyrics>
        </div>
      );
      // Enter
    } else if (line.includes("<br>")) {
      return (
        <div
          key={index}
          className="h-4 w-[100%] pb-4"
          onClick={() => handleSelectedChord()}
        ></div>
      );
    } else {
      return null;
    }
  });
};

export default ProcessString;
