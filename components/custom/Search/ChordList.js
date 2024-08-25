"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchChordList = ({ page, search, data, next_cursor, fetchingData }) => {
  const [chords, setChords] = useState(data);
  const router = useRouter();

  const handleClick = (item) => {

    const singerName = item?.singer?.name?.replace(/\s+/g, "-").toLowerCase();
    const title = item?.title?.replace(/\s+/g, "-").toLowerCase();
    const id = item?._id.replace(/\s+/g, "-").toLowerCase()
    router.push(`/detail-chord/${singerName}/${title}/${id}`)
  };

  if (page !== "all") return null;
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto gap-3 mt-5">
      {chords &&
        chords.map((item, index) => (
          <span
          onClick={()=>handleClick(item)}
            key={index}
            className="font-bold text-[#3292ff] w-full md:w-[50%] cursor-pointer border border-[#7eb8ee] px-2 py-1 rounded-md hover:border-[#3292ff] hover:border-2"
          >
            {item?.singer?.name}
            {item?.featuring && `Feat ${item?.featuring}`} - {item?.title}
          </span>
        ))}
    </div>
  );
};

export default SearchChordList;
