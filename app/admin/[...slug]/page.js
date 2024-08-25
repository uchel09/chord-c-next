import React from "react";
import ChordBase from "@/components/custom/Admin/ChordBase";
import AdminCreateChord from "@/components/custom/Admin/Create";
import UpdateChord from "@/components/custom/Admin/UpdateChord";
import { getChordById } from "@/actions/chordAction";

const AdminPage = async ({ params: { slug } }) => {
  let page = slug[1],
    id = slug[2];
  if (!page) {
    page = "base";
  }

  return (
    <div className="w-full flex flex-col gap-2 h-[100%] shadow-lg bg-white p-2 rounded-md">
      <ChordBase page={page} />
      <AdminCreateChord page={page} />
      <UpdateChord page={page} id={id} />
    </div>
  );
};

export default AdminPage;
