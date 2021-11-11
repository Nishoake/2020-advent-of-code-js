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


// // Defined function for part2 of the problem
// const part2 = (input) => {
//   console.log(`The parsed input = ${input}`)
// }

// // Execute function for part1 of the problem
// const result2 = part2(getInput)
// console.log(`Part 2: ... = ${result2}`)

// export default {
//   part1,
//   part2,
// }