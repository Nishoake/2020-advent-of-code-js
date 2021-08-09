const Input = require('./input')

// Parsing the input as an Array of numbers
const getInput = Input.map.split('\n').map(String)


// Defined function for part1 of the problem
const part1 = (input, rise , run) => {

  // Analyzing the input
  const length = input.length
  const width = input[0].length

  const scale = Math.ceil((length * run) / (width))

  let treeCount = 0

  // Iterating over the input and counting the number of trees
  for (let i = 0; i < input.length; i++){
    // To break the loop once we hit the bottom of the slope
    if (i * rise > input.length) break

    // Scaling the string up
    let scaledString = input[i * rise].repeat(scale)

    // Checking to see if toboggan hit a 🌲
    if (scaledString[run * i] === '#') treeCount++
  }

  return treeCount
}

// Execute function for part1 of the problem
const result1 = part1(getInput, 1, 3)
console.log(`Part 1: ${result1} 🌲s hit`)


// Defined function for part2 of the problem
const part2 = () => {
  let treeProduct = []

  // Calculating trees hit for given slopes
  treeProduct.push(part1(getInput, 1, 1))
  treeProduct.push(part1(getInput, 1, 3))
  treeProduct.push(part1(getInput, 1, 5))
  treeProduct.push(part1(getInput, 1, 7))
  treeProduct.push(part1(getInput, 2, 1))

  // Reduce array into a single product
  const reducer = (accumulator, currentValue) => accumulator*currentValue
  let product = treeProduct.reduce(reducer)

  return product
}

// Execute function for part1 of the problem
const result2 = part2()
console.log(`Part 2: Total Product of all Slopes = ${result2} 🌲 to the power of 5`)

// export default {
//   part1,
//   part2,
// }