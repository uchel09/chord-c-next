"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SearchSingerList = ({ page, search, data }) => {
  if (page !== "penyanyi") return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const handleClick = (item) => {
    router.push(`/penyanyi/${item?.name}/${item?._id}`);
  };

  return (
    <div className="flex-1 gap-4 w-full h-full overflow-y-auto flex flex-col mt-5">
      {data?.map((item, index) => (
        <span
          key={index}
          className="font-bold text-[#3292ff] w-full md:w-[50%] cursor-pointer border border-[#7eb8ee] px-2 py-1 rounded-md hover:border-[#3292ff] hover:border-2"
          onClick={() => handleClick(item)}
        >
          Kumpulan chord Lagu <b>{item?.name}</b>{" "}
        </span>
      ))}
    </div>
  );
};

export default SearchSingerList;
