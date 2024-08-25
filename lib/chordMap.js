/* eslint-disable no-unused-vars */
// Daftar chord dasar
export const chordMap = {
  C: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  "C#": ["C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"],
  D: ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#"],
  "D#": ["D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"],
  E: ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"],
  F: ["F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
  "F#": ["F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F"],
  G: ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#"],
  "G#": ["G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"],
  A: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
  "A#": ["A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"],
  B: ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#"],
};

// Fungsi untuk mentranspose notasi
const transposeNote = (note, semitones) => {
  for (const [key, notes] of Object.entries(chordMap)) {
    if (notes.includes(note)) {
      const index = notes.indexOf(note);
      const newIndex = (index + semitones + 12) % 12; // Menangani transposisi melingkar
      return notes[newIndex];
    }
  }
  return note; // Kembalikan nota asli jika tidak ditemukan
};

// Fungsi untuk memisahkan notasi utama dari bagian tambahan
const parseChord = (chord) => {
  const match = chord.match(/^([A-G][#b]?)(.*)/);
  if (!match) return { root: chord, suffix: "" };
  return { root: match[1], suffix: match[2] };
};

// Fungsi untuk mentranspose chord
export const transposeChord = (chord, semitones) => {
  return chord
    .split("/")
    .map((part) => {
      const { root, suffix } = parseChord(part);
      const transposedRoot = transposeNote(root, semitones);
      return `${transposedRoot}${suffix}`;
    })
    .join("/");
};

// Contoh penggunaan
const originalChord1 = "C#m";
const originalChord2 = "G/C";
const semitones = 4;



