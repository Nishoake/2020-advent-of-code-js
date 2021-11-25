const Input = require('./input')

// Parsing the input as an Array of numbers
const getInput = Input.ratings.split('\n').map(Number)


// Defined function for part1 of the problem
const part1 = (input) => {
  // Store input array information
  const maxValue = Math.max(...input)
  const numberOfDeltas = input.length

  // Use relationships to solve for number of stepsBy1 and stepsBy3
  const stepsBy3 = (maxValue - numberOfDeltas + 2) / 2
  const stepsBy1 = numberOfDeltas - stepsBy3 + 1

  return stepsBy1 * stepsBy3
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