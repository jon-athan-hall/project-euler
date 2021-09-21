let isPalindrome = number => {
  if (typeof number !== 'string') {
    number = String(number);
  }

  return (number === [...number].reverse().join(''));
}

let solve = () => {
  let largestPalindromeProduct = 0;

  for (let i = 111; i < 1000; i++) {
    for (let j = 111; j < 1000; j++) {
      let product = i * j;
      if (product > largestPalindromeProduct && isPalindrome(product)) {
        largestPalindromeProduct = product;
      }
    }
  }

  return largestPalindromeProduct;
}

console.log(solve());