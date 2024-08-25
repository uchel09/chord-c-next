import { processChords } from "@/lib/chordObject"
import { Fragment } from "react";
import { useChordLyricContext } from "@/Context/ChordLiricContext";

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
export function Chords({ children, isLine }) {
  const { selectedChord, handleClick, handleSelectedChord } =
    useChordLyricContext();

  // Proses chordsMap, pastikan processChords telah didefinisikan
  const chordsMap = processChords(children);
  return (
    <div className="flex items-center text-[13px] text-[#2962ff] h-4">
      {chordsMap.map((item, index) => {
        return (
          <Fragment key={index}>
            <span
              key={index}
              className={`cursor-pointer relative  ${
                isLine && selectedChord === item.chord ? "text-teal-500" : ""
              }`}
              onClick={() => handleClick(item.chord)} // Menggunakan fungsi dalam onClick
            >
              {item.chord}
              <div
                className={`${
                  isLine && selectedChord === item.chord ? null : "hidden"
                } w-[50px] h-[40px] bg-blue-300 absolute top-[16px] z-20 -right-[50px]`}
              ></div>
            </span>
            {item.count ? (
              <span
                onClick={() => {
                  handleSelectedChord();
                }}
                className="whitespace-pre font-mono text-[16px]"
              >
                {" ".repeat(item.count)}
              </span>
            ) : (
              <div
                className="w-full h-4 "
                onClick={() => handleSelectedChord()}
              ></div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
export function Lyrics({ children }) {
  return (
    <span className="whitespace-pre font-mono text-[16px] ">{children}</span>
  );
}
