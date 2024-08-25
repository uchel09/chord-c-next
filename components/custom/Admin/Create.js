/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useState, useCallback } from "react";
import { genres } from "@/lib/staticData";

import ReactSelect from "@/components/Form/ReactSelect";
import { createSinger, getSingerNames } from "@/actions/singerAction";
import toast from "react-hot-toast";
import AsycnReactSelect from "@/components/Form/AsyncReactSelect";
import ChordLyricUI from "@/components/Chords/ChordLyricUI";
import { createChordLyric } from "@/actions/chordAction";

const AdminCreateChord = ({ page }) => {
  if (page !== "create") return null;
  //   Create new Singer State
  const [isCreateSinger, setIsCreateSinger] = useState(false);
  const [addSinger, setAddSinger] = useState("");
  const [loading, setLoading] = useState(false);

  //   Form Add ChordLyric State
  const [singer, setSinger] = useState("");
  const [featuring, setFeaturing] = useState("");
  const [title, setTitle] = useState("");
  const [chordLyric, setChordLyric] = useState("");
  const [country, setCountry] = useState("");
  const [genre, setGenre] = useState("");

  const handleCreateNewSinger = async () => {
    setLoading(true);
    const res = await createSinger(addSinger);
    if (res.errMsg) {
      toast.error(res?.errMsg);
      setLoading(false);
      return;
    }
    setLoading(false);
    toast.success(res?.successMsg);
    setIsCreateSinger(false);
    setAddSinger("");
  };

  const loadOptions = async (inputValue) => {
    const res = await getSingerNames(inputValue);
    return res?.singers.map((item) => ({
      value: item._id,
      label: item.name,
    }));
  };

  const handleChangeSinger = (option) => {
    setSinger(option?.value);
  };
  const handleChangeFeaturing = (option) => {
    setFeaturing(option?.value);
  };
  const handleChangeGenre = (option) => {
    setGenre(option?.value);
  };
  const handleChangeCountry = (option) => {
    setCountry(option?.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await createChordLyric({
      title,
      singer,
      featuring,
      genre,
      country,
      chordLyric,
    });

    if (res.errorMsg) {
      toast.error(res?.errorMsg);
      setLoading(false);
      return;
    }
    setTitle("")
    setSinger("")
    setCountry("")
    setFeaturing("")
    setChordLyric("")
    setGenre("")
    setLoading(false);
    toast.success(res?.successMsg);
  };

  return (
    <>
      {isCreateSinger ? (
        <div className="px-3 flex gap-2">
          <input
            type="text"
            name="createSinger"
            id="createSinger"
            value={addSinger}
            onChange={(e) => setAddSinger(e.target.value)}
            className="w-full md:w-[50%] p-2   rounded-lg border border-slate-400 focus:border-black"
          />
          <Button
            type="button"
            onClick={handleCreateNewSinger}
            disabled={loading}
          >
            Submit
          </Button>
          <Button
            variant="outlined"

            type="button"
            onClick={() => setIsCreateSinger(false)}
            disabled={loading}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <div>
          <Button onClick={() => setIsCreateSinger(true)}>AddSinger</Button>
        </div>
      )}

      {/* //Form ====== submit chordlyrid  */}
      <form
        className="w-full h-full overflow-y-auto p-3 flex flex-col gap-2"
        onSubmit={onSubmit}
      >
        <div className="w-full flex flex-col sm:w-[70%] md:w-[50%] gap-1">
          <label htmlFor="title" className="font-medium">
            Judul Lagu :
          </label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="px-2 py-2  rounded-lg border border-slate-400 focus:border-black"
          />
        </div>
        <div className="w-full flex flex-col sm:w-[70%] md:w-[50%] gap-1">
          <label htmlFor="penyanyi" className="font-medium">
            Penyanyi :
          </label>
          <AsycnReactSelect
            loadOptions={loadOptions}
            handleChange={handleChangeSinger}
          />
        </div>
        <div className="w-full flex flex-col sm:w-[70%] md:w-[50%] gap-1">
          <label htmlFor="featuring" className="font-medium">
            Featuring(Optional) :
          </label>
          <AsycnReactSelect
            loadOptions={loadOptions}
            handleChange={handleChangeFeaturing}
          />
        </div>

        <div className="w-full flex flex-col sm:w-[70%] md:w-[50%] gap-1">
          <label htmlFor="penyanyi" className="font-medium">
            Genre :
          </label>
          <ReactSelect data={genres} handleChange={handleChangeGenre} />
        </div>
        <div className="w-full flex flex-col sm:w-[70%] md:w-[50%] gap-1">
          <label htmlFor="penyanyi" className="font-medium">
            Country :
          </label>
          <ReactSelect
            data={[
              { label: "Lokal", value: "lokal" },
              { label: "Luar Negeri", value: "Luar Negeri" },
            ]}
            handleChange={handleChangeCountry}
          />
        </div>
        <div className="w-full flex relative md:flex-row flex-col gap-5">
          <div className="w-full flex flex-col  gap-1  md:w-[50%]">
            <label htmlFor="penyanyi" className="font-medium">
              Chord and Lyric :
            </label>
            <Textarea
              placeholder="Type your lyric and chord here"
              className="h-[50vh]"
              onChange={(e) => setChordLyric(e.target.value)}
              value={chordLyric}
            />
          </div>
          <div className="w-full md:w-[50%] relative">
            <ChordLyricUI
              chordLyric={chordLyric}
              title={title}
              singer={singer}
            />
          </div>
        </div>

        <div className="w-full mt-2 ">
          <Button className="w-full" type="submit" disabled={loading}>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default AdminCreateChord;
