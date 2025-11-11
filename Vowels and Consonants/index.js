function count(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  const output = [0, 0];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      output[0] += 1;
    }
    if (consonants.includes(str[i].toLowerCase())) {
      output[1] += 1;
    }
  }
  return output;
}

// Time Complexity: O(n)

console.log(count("Hello World"));
console.log(count("JavaScript"));
console.log(count("Python"));
console.log(count("freeCodeCamp"));
console.log(count("Hello, World!"));
console.log(count("The quick brown fox jumps over the lazy dog."));