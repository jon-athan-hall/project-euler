solve = n => {
  let prevNum = 1, currNum = 2, tempNum = 0;
  let total = 0;

  while (currNum < n) {
    if (currNum % 2 === 0) {
      total += currNum;
    }

    tempNum = currNum;
    currNum += prevNum;
    prevNum = tempNum;
  }

  return total;
}

console.log(solve(4000000));