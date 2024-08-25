"use server";

import SingerModel from "@/models/singerModel";

export async function createSinger(name) {
  try {
    if (!name) {
      throw new Error("Please fill name");
    }

    await SingerModel.create({ name });

    return {
      successMsg: "Add Singer Success",
    };
  } catch (error) {
    console.log(error);
    return {
      errMsg: error.message,
    };
  }
}

export async function getSingerNames(query) {
  try {
    const res = await SingerModel.find({
      name: new RegExp(query, "i"), // Menggunakan regex untuk pencarian yang lebih fleksibel (case-insensitive)
    })
      .limit(10)
      .sort({ updatedAt: -1 });
    const singers = await JSON.parse(JSON.stringify(res));

    return { singers };
  } catch (error) {
    console.log(error);
    return {
      errorMsg: "Internal server Error",
    };
  }
}
