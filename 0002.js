solve = n => {
  let prevNum = 1, currNum = 2;
  let total = 0;

  while (currNum < n) {
    if (currNum % 2 === 0) {
      total += currNum;
    }

    [prevNum, currNum] = [currNum, prevNum + currNum]
  }

  return total;
}

console.log(solve(4000000));