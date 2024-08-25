import { getChordById } from "@/actions/chordAction";
import DetailChord from "@/components/custom/DetailChord/DetailChord";
import React from "react";

const DetailChordPage =async ({ params: { slug } }) => {
  const id = slug[2];
  console.log(id);

  const chord = await getChordById(id);


  return (
    <>
      <DetailChord  data={chord}/>
    </>
  );
};

export default DetailChordPage;
