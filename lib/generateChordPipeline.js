export async function generateChordPipeline({ search, limit, next }) {
  const base_pipeline = [
    {
      $match: {
        updatedAt: next ? { $lt: new Date(next) } : { $exists: true },
      },
    },
    {
      $sort: { updatedAt: -1 },
    },
    {
      $limit: limit,
    },
    {
      $lookup: {
        from: "singers", // Nama koleksi yang akan digabungkan
        let: { singer_id: "$singer" }, // Variabel lokal yang didefinisikan untuk digunakan dalam pipeline
        pipeline: [
          { $match: { $expr: { $eq: ["$_id", "$$singer_id"] } } },
          { $project: { name: 1 } },
        ],
        as: "singer", // Nama field baru dalam hasil yang akan berisi hasil lookup
      },
    },
    {
      $lookup: {
        from: "singers", // Nama koleksi yang akan digabungkan
        let: { featuring_id: "$featuring" }, // Variabel lokal yang didefinisikan untuk digunakan dalam pipeline
        pipeline: [
          { $match: { $expr: { $eq: ["$_id", "$$featuring_id"] } } },
          { $project: { name: 1 } },
        ],
        as: "featuring", // Nama field baru dalam hasil yang akan berisi hasil lookup
      },
    },
    {
      $unwind: {
        path: "$featuring",
        preserveNullAndEmptyArrays: true, // Agar dokumen tanpa featuring tetap ada
      },
    },
    {
      $unwind: "$singer",
    },
    {
      $project: {
        chordLyric: 0,
        country: 0,
        view: 0,
        genre: 0,
      },
    },
  ];



  if (search) {
    const search_pipeline = [
      {
        $match: {
          $or: [
            { title: { $regex: search, $options: "i" } }, // Pencarian berdasarkan title
            { "singer.name": { $regex: search, $options: "i" } }, // Pencarian berdasarkan nama penyanyi
          ],
        },
      },
    ];
    return [...base_pipeline, ...search_pipeline];
  }

  return base_pipeline;
}
export async function generateChordCountPipeline({ search }) {
  const base_pipeline = [
    {
      $sort: { updatedAt: -1 },
    },
    {
      $lookup: {
        from: "singers", // Nama koleksi yang akan digabungkan
        let: { singer_id: "$singer" }, // Variabel lokal yang didefinisikan untuk digunakan dalam pipeline
        pipeline: [
          { $match: { $expr: { $eq: ["$_id", "$$singer_id"] } } },
          { $project: { name: 1 } },
        ],
        as: "singer", // Nama field baru dalam hasil yang akan berisi hasil lookup
      },
    },
  
    {
      $unwind: "$singer",
    },
    {
      $project: {
        singer:1
      },
    },
  ];



  if (search) {
    const search_pipeline = [
      {
        $match: {
          $or: [
            { title: { $regex: search, $options: "i" } }, // Pencarian berdasarkan title
            { "singer.name": { $regex: search, $options: "i" } }, // Pencarian berdasarkan nama penyanyi
          ],
        },
      },
    ];
    return [...base_pipeline, ...search_pipeline];
  }

  return base_pipeline;
}
