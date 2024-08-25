import { getAllChords, getChords, getChordsCount } from "@/actions/chordAction";
import { getSingerNames } from "@/actions/singerAction";
import SearchChordList from "@/components/custom/Search/ChordList";
import SearchMenu from "@/components/custom/Search/Menu";
import SearchSingerList from "@/components/custom/Search/SingerList";
import React from "react";

const SearchPage = async ({ params: { slug } }) => {
  const page = slug[0],
    search = decodeURI(slug[1]),
    id = decodeURI(slug[2]);

  const { singers } = await getSingerNames(search);
  let chords;
  if (search) {
    chords = await getChords({ search: search });
  }

  return (
    <div className="w-full h-full ">
      <h2 className="font-medium text-[25px] text-[#489dff]">
        Penyanyi dan Judul untuk <span className="font-bold">({search})</span>
      </h2>
      <SearchMenu page={page} search={search} />
      <SearchChordList page={page} search={search} data={chords?.data} next_cursor={chords?.next_cursor}/>
      <SearchSingerList page={page} search={search} data={singers} />
    </div>
  );
};

export default SearchPage;
