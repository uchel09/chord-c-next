function chordObject(inputArray) {
  const result = [];
  let index = 0;

  // Jika elemen pertama adalah angka, abaikan
  if (typeof inputArray[0] === "number") {
    result.push({ chord: null, count: inputArray[0] });
    index = 1;
  }

  for (let i = index; i < inputArray.length; i += 2) {
    const chord = inputArray[i];
    const count = i + 1 < inputArray.length ? inputArray[i + 1] : 0;
    result.push({ chord, count });
  }
  return result;
}

export function processChords(inputChords) {
  const chordArray = [];
  let currentChord = "";
  let currentSpaceCount = 0;

  for (let i = 0; i < inputChords.length; i++) {
    const currentChar = inputChords[i];

    if (currentChar === " ") {
      if (currentChord !== "") {
        chordArray.push(currentChord);
        currentChord = "";
      }
      currentSpaceCount++;
    } else {
      if (currentSpaceCount > 0) {
        chordArray.push(currentSpaceCount);
        currentSpaceCount = 0;
      }
      currentChord += currentChar;
    }
  }

  // Menambahkan chord terakhir jika ada
  if (currentChord !== "") {
    chordArray.push(currentChord);
  }

  // Menambahkan jumlah spasi terakhir jika ada
  if (currentSpaceCount > 0) {
    chordArray.push(currentSpaceCount);
  }

  return chordObject(chordArray);
}
