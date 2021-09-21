def palindrome? n
  n.to_s === n.to_s.reverse
end

def solve
  largest_palindrome_product = 0

  for i in 111..999
    for j in 111..999
      product = i * j
      if (product > largest_palindrome_product and palindrome? product)
        largest_palindrome_product = product
      end
    end
  end

  largest_palindrome_product
end

puts solve