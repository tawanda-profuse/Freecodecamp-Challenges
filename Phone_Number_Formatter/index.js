function formatNumber(number) {
  if (number.length !== 11) {
    return "Phone number should be 11 characters";
  }
  // return in this format: "+D (DDD) DDD-DDDD"
  let output = "";
  for (let i = 0; i < number.length; i++) {
    if (i === 0) {
      output += "+";
    }
    if (i === 1) {
      output += " (";
    }
    if (i === 4) {
      output += ") ";
    }
    if (i === 7) {
      output += "-";
    }
    output += number[i];
  }
  return output;
}

const phoneNumber = formatNumber("01256398564");
const phoneNumber2 = formatNumber("256398564");
console.log(phoneNumber);
console.log(phoneNumber2);