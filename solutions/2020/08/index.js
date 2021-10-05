const Input = require('./input')

// Parsing the input as an Array of numbers
const getInput = Input.instructions.split('\n').map(String)


// Defined function for part1 of the problem
const part1 = (input) => {
  console.log(`The parsed input = ${input[8]}`)

  const indices = new Set()

  let index = 0
  let acc = 0

  while (!indices.has(index)){

    // add the current index to the set
    indices.add(index)

    // Log the accumulator and index value
    console.log(`Acc = ${acc}`)
    console.log(`Index = ${index}`)

    let parsedOperation = input[index].match(/(\w{3})\s(\S*)/)

    let operation = parsedOperation[1]
    let step = parseInt(parsedOperation[2])

    if(operation === 'nop') index++
    else if(operation === 'jmp') index += step
    else if(operation === 'acc'){
      acc += step
      index++
    }

    
  }

  return acc
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