

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import ChordList from "../ChordList/ChordList";
import { getChords } from "@/actions/chordAction";

const AdminChordBase =async ({ page }) => {
  if (page !== "base") return null;

  const res = await getChords()


  return (
    <>
      <div className="w-[200px]">
        <Button>
          <Link href="/admin/chords/create">Create Chord</Link>
        </Button>
      </div>

      <ChordList data={res?.data} next_cursor={res?.next_cursor} fetchingData={getChords} />
    </>
  );
};

export default AdminChordBase;
