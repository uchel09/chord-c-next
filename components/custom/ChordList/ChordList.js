"use client";

import { deleteChordById } from "@/actions/chordAction";
import SearchForm from "@/components/Form/SearchForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ChordList = ({ data, next_cursor, fetchingData }) => {
  const [chords, setChords] = useState(data);
  const [next, setNext] = useState(next_cursor);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAction = async (e) => {
    const s = e.get("search");
    setSearch(s);
    const res = await fetchingData({ search:s });
    setChords([...res?.data]);
    setNext(res?.next_cursor);
  };
  async function handleLoadMore() {
    if (next === "stop" || loading) return;

    setLoading(true);
    const res = await fetchingData({ next, search });

    const newData = [...chords, ...res?.data];
    setChords(newData);
    setNext(res?.next_cursor);

    setLoading(false);
  }

  const handleDeleteChord = async (id) => {
    setLoading(true);
    const res = await deleteChordById(id);

    if (res?.errorMsg) {
      toast.error(res?.errorMsg);
      return;
    }
    setChords((chords) => chords.filter((item) => item._id !== id));
    setLoading(false);
    toast.success(res?.successMsg);
  };

  return (
    <div className=" flex flex-col gap-3  w-full h-full relative overflow-hidden">
      <div className=" w-[70%] ">
        <SearchForm handleAction={handleAction} />
      </div>
      <div className="  flex  w-full flex-col justify-start items-start overflow-y-auto gap-12 bg-white py-5">
        {chords.map((item, index) => (
          <div key={index} className="flex gap-2 w-full">
            <div className="w-[50%] h-[40px] bg-white shadow-lg px-2 rounded-[5px] flex items-center ">
              <span>
                {item?.singer?.name}
                {item?.featuring && (
                  <span>
                    <span className="font-bold text-sm"> Feat </span>{" "}
                    {item?.featuring?.name}
                  </span>
                )}
              </span>
              - <span>{item?.title}</span>
            </div>

            <Link href={`/admin/chords/update/${item?._id}`}>
              <Button disabled={loading} type="button">
                Edit
              </Button>
            </Link>
            <Button
              variant="outlined"
              className="bg-red-400 text-white hover:bg-red-500"
              type="button"
              onClick={() => handleDeleteChord(item?._id)}
              disabled={loading}
            >
              Hapus
            </Button>
          </div>
        ))}
        <div className="flex w-full items-center">
          <button
            disabled={loading}
            type="button"
            onClick={handleLoadMore}
            className={`p-3 bg-blue-500 text-white rounded-2xl hover:rounded-md ${
              next === "stop" && "hidden"
            }`}
          >
            {" "}
            {loading ? "Loading...": "Loadmore"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChordList;
