def solve n
  total, prev_num, curr_num = 0, 1, 2

  while curr_num < n do
    if curr_num % 2 === 0
      total += curr_num
    end

    prev_num, curr_num = curr_num, prev_num + curr_num
  end

  total
end

puts solve 4000000