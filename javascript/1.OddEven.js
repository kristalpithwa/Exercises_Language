function checkNumberIsOddEven(number) {
  if (number % 2 === 0) {
    return `Number ${number} is Even`;
  } else {
    return `Number ${number} is Odd`;
  }
}

const answer = checkNumberIsOddEven(5);
console.log("Answer =>", answer);
