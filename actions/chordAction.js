"use server";

import {
  generateChordCountPipeline,
  generateChordPipeline,
} from "@/lib/generateChordPipeline";
import { genrateNextCursor } from "@/lib/next_cursor";
import ChordModel from "@/models/chordModel";
import { Types } from "mongoose";
import { revalidatePath } from "next/cache";

export async function createChordLyric({
  title,
  singer,
  featuring,
  genre,
  country,
  chordLyric,
}) {
  if (!featuring) {
    featuring = null;
  }
  try {
    await ChordModel.create({
      title,
      singer,
      featuring,
      genre,
      country,
      chordLyric,
    });
    revalidatePath("/");
    return {
      successMsg: "Create Chord and Lyric success",
    };
  } catch (error) {
    return {
      errorMsg: error.message,
    };
  }
}

export async function getChords(query) {
  try {
    const search = query?.search;
    const limit = query?.limit * 1 || 6;
    const next = query?.next;

    const pipeline = await generateChordPipeline({ limit, search, next });
    const chords = JSON.parse(
      JSON.stringify(await ChordModel.aggregate(pipeline))
    );

    const next_cursor = genrateNextCursor({ limit, data: chords });

    return { data: chords, next_cursor };
  } catch (error) {
    console.log(error);
    return {
      errorMessage: error.message,
    };
  }
}

export async function getChordsCount(search) {
  try {
    const pipeline = await generateChordCountPipeline({ search });
    const chords = JSON.parse(
      JSON.stringify(await ChordModel.aggregate(pipeline))
    );

    return chords.length;
  } catch (error) {
    return {
      errorMeg: error.message,
    };
  }
}

export async function getChordById(id) {
  try {
    const res = await ChordModel.findOne({ _id: id })
      .populate("singer featuring", "name")
      .lean();

    if (!res) {
      return {
        errorMsg: "Chord tidak ditemukan",
      };
    }
    const chord = await JSON.parse(JSON.stringify(res));
    revalidatePath("/");
    return chord;
  } catch (error) {
    console.error(error);
    return {
      errorMsg: "Internal server error",
    };
  }
}

export async function updateChordLyric({
  id,
  title,
  singer,
  featuring,
  genre,
  country,
  chordLyric,
}) {
  try {
    if (!featuring) {
      featuring = null;
    }

    const _id = new Types.ObjectId(id);

    await ChordModel.findByIdAndUpdate(
      _id,
      {
        title,
        singer,
        featuring,
        genre,
        country,
        chordLyric,
      },
      { new: true }
    );
    revalidatePath("?");
    return {
      successMsg: "Update Success",
    };
  } catch (error) {
    return {
      errorMsg: "Internal server error",
    };
  }
}

export async function deleteChordById(id) {
  try {
    const _id = new Types.ObjectId(id);
    await ChordModel.findByIdAndDelete(_id);

    revalidatePath("/");

    return {
      successMsg: "chord and liryc deleted",
    };
  } catch (error) {
    return {
      errorMsg: "Failed to delete chord",
    };
  }
}

export async function getChordBySingerId(id) {
  try {
    const res = await ChordModel.find({ singer: id })
      .populate("singer featuring", "name")
      .select("title singer featuring genre view");
    const chords = await JSON.parse(JSON.stringify(res));
    return chords;
  } catch (error) {
    console.log(error);
    return [];
  }
}
