function findDifferences(arr) {
  const differences = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      differences.push(0);
    } else {
      differences.push(arr[i + 1] - arr[i]);
    }
  }
  return differences;
}

// Tests
console.log("Test 1: ", findDifferences([1, 2, 4, 7]));
console.log("Test 2: ", findDifferences([10, 15, 19, 22, 24, 25]));
console.log("Test 3: ", findDifferences([25, 20, 16, 13, 11, 10]));
console.log("Test 4: ", findDifferences([0, 1, 2, 2, 3, 3, 4, 5]));
console.log("Test 5: ", findDifferences([1, 2, 5, 12, 34, -15, -1, 41, 113, -222, -99, -40, 10, -18, -6, -2, -1]));