function canDonate(donor, recipient) {
  if (donor.includes("O")) {
    if (donor.includes("+") && !recipient.includes("+")) {
      return false;
    }
    return true;
  }

  if (donor.includes("A") && recipient.includes("A")) {
    if (donor.includes("+") && !recipient.includes("+")) {
      return false;
    }
    return true;
  }

  if (donor === "B-" && recipient.includes("B")) {
    return true;
  }

  if (donor === "AB" && recipient === "AB") {
    return true;
  }

  if (donor.includes("+") && recipient.includes("+")) {
    return true;
  }

  return false;
}

// Tests
console.log(canDonate("B+", "B+"));
console.log(canDonate("O-", "AB-"));
console.log(canDonate("O+", "A-"));
console.log(canDonate("A+", "AB+"));
console.log(canDonate("A-", "B-"));
console.log(canDonate("B-", "AB+"));
console.log(canDonate("B-", "A+"));
console.log(canDonate("O-", "O+"));
console.log(canDonate("O+", "O-"));
console.log(canDonate("AB+", "AB-"));
