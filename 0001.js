let buildArray = size => {
  let numbers = new Array(size);
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i + 1;
  }
  return numbers;
}

let addUpMultiples = numbers => {
  return numbers.reduce((prev, next) => {
    if (next % 3 === 0 || next % 5 === 0) {
      return prev + next;
    }
    return prev;
  }, 0);
}

let solve = number => {
  const numberArray = buildArray(number - 1);
  const total = addUpMultiples(numberArray);
  return total;
}

console.log(solve(1000));