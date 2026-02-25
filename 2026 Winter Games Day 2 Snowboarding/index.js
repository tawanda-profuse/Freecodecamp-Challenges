function getLandingStance(startStance, rotation) {
  const flips = Math.floor(Math.abs(rotation) / 180);
  const isEven = flips % 2 === 0;

  if (isEven) return startStance;

  return startStance === "Regular" ? "Goofy" : "Regular";
}

// Tests
console.log(getLandingStance("Regular", 90));
console.log(getLandingStance("Regular", 180));
console.log(getLandingStance("Goofy", -270));
console.log(getLandingStance("Regular", 2340));
console.log(getLandingStance("Goofy", 2160));
console.log(getLandingStance("Goofy", -540));