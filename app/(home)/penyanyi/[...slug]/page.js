import { getChordBySingerId } from "@/actions/chordAction";

import React from "react";
import ChordListSinger from "../_components/ChordList";

const ListSongOfSinger = async ({ params: { slug } }) => {
  if (!slug.length) return null;

  const singer = decodeURI(slug[0]),
    id = slug[1];

  const chords = await getChordBySingerId(id);

  return (
    <div className="flex flex-col">
      <h2 className="text-[30px] text-[#2962ff]">
        Kumpulan Lagu dan chord dari <b>{singer}</b>
      </h2>
      
        <ChordListSinger chords={chords} />

    </div>
  );
};

export default ListSongOfSinger;
