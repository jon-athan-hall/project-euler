def build_array size
  Array 1..size
end

def add_up_multiples numbers
  numbers.reduce(0) do |total, num|
    (num % 3 == 0 or num % 5 == 0) ? total + num : total
  end
end

def solve number
  number_array = build_array(number - 1)
  add_up_multiples(number_array)
end

puts solve 1000