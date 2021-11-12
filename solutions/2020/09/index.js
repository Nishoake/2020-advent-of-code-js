const Input = require('./input')

// Parsing the input as an Array of numbers
const getInput = Input.preamble.split('\n').map(Number)

// Defined function for part1 of the problem
const part1 = (input) => {
  // Initialize the preamble
  const preamble = new Set()
  for (let index = 0; index < 25; index++)  preamble.add(input[index])

  // Iterate over the input to find the invalid number
  for (let i = 0; i < input.length - 25; i++) {
    const target = input[i+25]
    let sumFound = false

    for (let j = 0; j < 25; j++) {
      if (preamble.has(target - input[j + i])) {
        sumFound = true
        break
      }
    }

    if (!sumFound) return target

    preamble.delete(input[i])
    preamble.add(target)
  }
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: ... = ${result1}`)


// Defined function for part2 of the problem
const part2 = (input) => {
  // Receive invalid number from part 1
  const invalidNumber = part1(input)

  // Initialize the boundaries and the sum total of the contiguous set
  let top = 0
  let bottom = 1
  let total = input[top] + input[bottom]

  // Loop through the input until the sum of the contiguous set is equal to the invalid number
  while (total !== invalidNumber) {
    // When sum is less increment bottom boundary by one and add the respective value to the sum
    if (total < invalidNumber){
      ++bottom
      total += input[bottom]
    }
    // When sum is greater increment top boundary by one and subtract the respective value from the sum
    else if (total > invalidNumber){
      total -= input[top]
      ++top
    }
  }

  // Find the min and max
  let min = input[top]
  let max = input[bottom]

  for (let i = top + 1; i <= bottom; i++) min = min > input[i] ? input[i] : min
  for (let j = top + 1; j <= bottom; j++) max = max < input[j] ? input[j] : max

  // Calculate the encryption weakness
  const encryptionWeakness = min + max
  return encryptionWeakness
}

// Execute function for part1 of the problem
const result2 = part2(getInput)
console.log(`Part 2: ... = ${result2}`)

// export default {
//   part1,
//   part2,
// }