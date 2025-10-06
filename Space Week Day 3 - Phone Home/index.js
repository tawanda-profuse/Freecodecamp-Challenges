function sendMessage(route) {
  let duration = 0;
  const speed = 300000;

  for (let i = 0; i < route.length; i++) {
    if (i !== 0) {
      duration += 0.5;
    }
    if (route[i] === speed) {
      duration += 1;
    } else {
      duration += route[i] / speed;
    }
  }
  return duration.toFixed(4);
}

console.log(sendMessage([300000, 300000]))
console.log(sendMessage([384400, 384400]))
console.log(sendMessage([54600000, 54600000]))
console.log(sendMessage([1000000, 500000000, 1000000]))
console.log(sendMessage([10000, 21339, 50000, 31243, 10000]))
console.log(sendMessage([802101, 725994, 112808, 3625770, 481239]))