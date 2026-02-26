function countLettersAndNumbers(str) {
  const count = { numbers: 0, letters: 0 };
  // Regular expressions:
  const isLetter = /^[a-z]$/i;
  const isNumber = /^[0-9]$/;

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(isLetter)) {
      count.letters += 1;
    } else if(str[i].match(isNumber)) {
      count.numbers += 1;
    }
  }

  return `The string has ${count.letters} letter${count.letters !== 1 ? "s" : ""} and ${count.numbers} number${count.numbers !== 1 ? "s" : ""}.`;
}

// Tests
console.log(countLettersAndNumbers("helloworld123"));
console.log(countLettersAndNumbers("Catch 22"));
console.log(countLettersAndNumbers("A1!"));
console.log(countLettersAndNumbers("12345"));
console.log(countLettersAndNumbers("password"));