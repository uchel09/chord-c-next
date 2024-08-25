import Link from "next/link";
import React from "react";

const SearchMenu = ({ search, page}) => {
  return (
    <div className="w-full border-b-2 text-[#489dff] border-[#489dff] flex gap-4 mt-10">
      <Link
        href={`/search/penyanyi/${search}`}
        className={`px-2 rounded-t-md ${
          page === "penyanyi" ? "bg-[#489dff] text-white" : ""
        }`}
      >
        Penyanyi 
      </Link>
      <Link
        href={`/search/judul/${search}`}
        className={`px-2 rounded-t-md ${
          page === "judul" ? "bg-[#489dff] text-white" : ""
        }`}
      >
        Judul
      </Link>
    </div>
  );
};

export default SearchMenu;
