function to12(time) {
  if (time.length !== 4) throw new Error("The time has an invalid format");
  const timeArray = time.split(""); // convert string to an array e.g. ["1", "1", "2", "4"]
  const minutes = timeArray.splice(2).join(""); // last 2 items of timeArray
  const hours = timeArray.splice(0, 2).join(""); // first 2 items of timeArray
  const hourToNumber = Number(hours[0] + hours[1]);
  let isAMOrPM = hours[0] === "0" || hourToNumber < 12 ? " AM" : " PM";
  const output = [];
  if (hourToNumber > 12) {
    output.push(hourToNumber - 12);
  } else {
    output.push(...hours.split(""));
  }
  output.push(":", ...minutes.split(""), isAMOrPM);

  return output.join(""); // Turn output into a string for readability
}

console.log(to12("1124"));
console.log(to12("0900"));
console.log(to12("1455"));
console.log(to12("2346"));
console.log(to12("0030"));
console.log(to12("1230"));
// console.log(to12("00300"));
