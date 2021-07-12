let isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

let solve = n => {
  largestPrimeFactor = 1;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if ((n % i === 0) && isPrime(i)) {
      largestPrimeFactor = i;
    }
  }

  return largestPrimeFactor;
}

console.log(solve(600851475143));