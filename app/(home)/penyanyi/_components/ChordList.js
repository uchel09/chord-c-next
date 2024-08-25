import Link from "next/link";
import React from "react";

const ChordListSinger = ({ chords }) => {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto gap-3 mt-5">
      {chords &&
        chords.map((item, index) => {
          const singerName = item?.singer?.name
            ?.replace(/\s+/g, "-")
            .toLowerCase();

          const title = item?.title?.replace(/\s+/g, "-").toLowerCase();
          const id = item?._id?.replace(/\s+/g, "-").toLowerCase();
          return (
            <Link
              href={`/detail-chord/${singerName}/${title}/${id}`}
              key={index}
              className="font-bold text-[#3292ff] w-full md:w-[50%] cursor-pointer border border-[#7eb8ee] px-2 py-1 rounded-md hover:border-[#3292ff] hover:border-2"
            >
              {item?.singer?.name}
              {item?.featuring && `Feat ${item?.featuring?.name}`} -{" "}
              {item?.title}
            </Link>
          );
        })}
    </div>
  );
};

export default ChordListSinger;
