function calculatePenaltyDistance(rounds) {
  let penaltyDistance = 0;
  const isValid = (num) => num >= 0 && num <=5;

  for(let i = 0; i < rounds.length; i++){
    const misses = 5 - rounds[i]

    if(isValid){
      penaltyDistance += 150 * misses;
    }
  }
  return penaltyDistance;
}

// Tests
console.log(calculatePenaltyDistance([4, 4]));
console.log(calculatePenaltyDistance([5, 5]));
console.log(calculatePenaltyDistance([4, 5, 3, 5]));
console.log(calculatePenaltyDistance([5, 4, 5, 5]));
console.log(calculatePenaltyDistance([4, 3, 0, 3]));