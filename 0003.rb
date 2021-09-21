def prime? n
  for i in 2..(Math.sqrt(n).ceil)
    return false if n % i === 0
  end
  true
end

def solve n
  largest_prime_factor = 1

  for i in 2..(Math.sqrt(n).ceil)
    if (n % i === 0) and prime? i
      largest_prime_factor = i
    end
  end

  largest_prime_factor
end

puts solve 600851475143