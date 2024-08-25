import { useEffect, useRef, useState } from "react";
import { useChordLyricContext } from "@/Context/ChordLiricContext";
import ProcessString from "./ProcessString";
import { TransposeControl } from "./TranposeControl";

const ChordLyricUI = ({ chordLyric,title,singer }) => {
  const { handleSelectedChord } = useChordLyricContext();
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(500); // Kecepatan dalam milidetik
  const containerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolling, scrollSpeed]);

  const handleSpeedChange = (event) => {
    setScrollSpeed(Number(event.target.value));
  };

  const toggleAutoScroll = () => {
    setIsScrolling(!isScrolling);
  };
  const startAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }

    if (isScrolling) {
      scrollIntervalRef.current = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop += 1; // Mengubah 1 jika ingin kecepatan berbeda
        }
      }, scrollSpeed);
    }
  };
  return (
    <div
      className="w-full h-full bg-white overflow-y-auto rounded-lg  pl-2 "
      ref={containerRef}
    >
      <TransposeControl />
      <div
        onClick={() => handleSelectedChord()}
        className="absolute right-5 top-5 flex flex-col-reverse justify-end items-end gap-2"
      >
        <button
          type="button"
          onClick={toggleAutoScroll}
          className=" p-1 w-[40px] bg-[#2962ff] text-white rounded"
        >
          {isScrolling ? "Stop" : "Start"}
        </button>
        <select
          onChange={handleSpeedChange}
          value={scrollSpeed}
          className="ml-4 p-1 border rounded"
        >
          <option value={100}>Very Slow</option>
          <option value={70}>Slow</option>
          <option value={40}>Medium</option>
          <option value={20}>Fast</option>
          <option value={10}>Very Fast</option>
        </select>
      </div>
      <div className="w-full mb-4">
        <h1 className="text-[25px] font-bold ">{title}-{singer}</h1>
      </div>

      <ProcessString str={chordLyric} />
    </div>
  );
};

export default ChordLyricUI;
