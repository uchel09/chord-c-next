import { Search } from 'lucide-react';
import React from 'react'

const SearchForm = ({handleAction}) => {
  return (
    <div>
      <form
        action={handleAction}
        className="w-full items-center flex rounded-full bg-[#96c2ff]   border-gray-400 border px-3 gap-2  focus-within:border-2 focus-within:border-[#96c2ff]"
      >
        <input
          type="search"
          name="search"
          placeholder="Search..."
          autoComplete="off"
          required
          className="w-full bg-transparent h-[35px] py-[2px] px-1 outline-none text-base"
        />
        <button
          className="flex h-full px-3 items-center border-l-2"
          type="submit"
        >
          <Search color="white" />
        </button>
      </form>
    </div>
  );
}

export default SearchForm