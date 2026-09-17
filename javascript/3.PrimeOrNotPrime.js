function primeOrNotPrime(number) {
  // case 1
  if (number < 2) {
    return "Not Prime Number";
  }

  // case 2
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return "Not Prime Number";
    }
  }

  // case 3
  return "Prime Number";
}

const answer = primeOrNotPrime(15);
console.log("Answer =>", answer);
