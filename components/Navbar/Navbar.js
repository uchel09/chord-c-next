"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchForm from "@/components/Form/SearchForm";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleAction = (e) => {
    const value = e.get("search");
    if (value) {
      router.push(`/search/penyanyi/${value}`);
    }
  };

  return (
    <div className="flex w-[90%] mx-auto justify-between items-center relative">
      <Link href="/" className="flex items-center gap-3">
        <span
          className="text-[#3292ff] font-bold text-[30px] hidden sm:inline"
        >
          Chord
        </span>
        <Image src="/chell-chord.png" alt="hero" width={30} height={30} />
      </Link>

      {/* Search Form  */}

      <SearchForm handleAction={handleAction} />
    </div>
  );
};

export default Navbar;
