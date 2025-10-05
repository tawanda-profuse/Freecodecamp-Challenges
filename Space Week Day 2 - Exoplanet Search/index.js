function hasExoplanet(readings) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // Check input:
  if(typeof readings !== "string") throw new Error("Input should be a string");
     
  let total = 0;
  for (const char of readings) {
    if (typeof char === "number") {
      total += Number(char);
    } else {
      total += 10 + alphabet.indexOf(char.toLowerCase());
    }
  }

  const averageReading = Math.floor(total / readings.length);
  const eightyPercent = 0.8 * averageReading;

  const lessThanEighty = readings.split().some((item) => {
    if (typeof item === "number" && item <= eightyPercent) {
      return true;
    } else if (10 + alphabet.indexOf(item.toLowerCase()) <= eightyPercent) {
      return true;
    }
    return false;
  });

  return lessThanEighty;
}

console.log(hasExoplanet("665544554"));
console.log(hasExoplanet("FGFFCFFGG"));
console.log(hasExoplanet("MONOPLONOMONPLNOMPNOMP"));
console.log(hasExoplanet("FREECODECAMP"));
console.log(hasExoplanet("9AB98AB9BC98A"));
console.log(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE"));
