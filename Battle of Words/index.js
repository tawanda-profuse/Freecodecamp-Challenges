function battle(ourTeam, opponent) {
  // Could use Regex but I'll use a hard-coded array
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let ourScore = 0;
  let opponentScore = 0;

  // Helper function
  const checkString = (arr, current) => {
    const isCapitalInside = arr.some(item => item.toUpperCase() === current);
    const isLowerInside = arr.some(item => item.toLowerCase() === current);
    const currentIndex = arr.findIndex(item => item === current.toUpperCase());
    return { isCapitalInside, isLowerInside, currentIndex }
  }
  // Iterate over ourTeam 
  for (let i = 0; i < ourTeam.length; i++) {
    const { isCapitalInside, isLowerInside, currentIndex } = checkString(alphabet, ourTeam[i]);

    if (isCapitalInside) {
      ourScore += (currentIndex + 1) * 2;
    } else if (isLowerInside) {
      ourScore += currentIndex + 1;
    }
  }
  // Iterate over opponent 
  for (let i = 0; i < opponent.length; i++) {
    const { isCapitalInside, isLowerInside, currentIndex } = checkString(alphabet, opponent[i]);

    if (isCapitalInside) {
      opponentScore += (currentIndex + 1) * 2;
    } else if (isLowerInside) {
      opponentScore += currentIndex + 1;
    }
  }
  return ourScore > opponentScore ? "We win" : ourScore < opponentScore ? "We lose" : "Draw";
}

console.log(battle("hello world", "hello word"));
console.log(battle("Hello world", "hello world"));
console.log(battle("lorem ipsum", "kitty ipsum"));
console.log(battle("hello world", "world hello"));
console.log(battle("git checkout", "git switch"));
console.log(battle("Cheeseburger with fries", "Cheeseburger with Fries"));
console.log(battle("We must never surrender", "Our team must win")); 

// There seems to be an error because the last test case has ourTeam.length === 24 and opponent.length === 14 and is calculated as { ourScore: 310, opponentScore: 227 }

// Time complexity = O(n^2)
