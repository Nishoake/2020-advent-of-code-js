const Input = require('./input')

// Parsing the input as an Array of numbers
const getInput = Input.instructions.split('\n').map(String)


// Defined function for part1 of the problem
const part1 = (input) => {

  const indices = new Set()

  let index = 0
  let acc = 0

  while (!indices.has(index) && index < input.length - 1){

    // add the current index to the set
    indices.add(index)

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

  // Check to see if path terminates
  const isTerminated = index === input.length - 1 ? true : false

  // Check if last instruction is an accumulator
  let lastOperation = input[input.length - 1].match(/(\w{3})\s(\S*)/)
  // console.log(`Last Operation = ${lastOperation}`)

  if (lastOperation[1] === 'acc' && isTerminated) acc += parseInt(lastOperation[2])

  const carePackage = {
    value: acc,
    ogPath: indices,
    isTerminated: isTerminated
  }

  return carePackage
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: ... = ${result1.value}`)


// Defined function for part2 of the problem
const part2 = (input) => {
  const path = part1(getInput).ogPath
  
  // Iterate through the list instructions
  for (let i = 0; i < input.length ; i++)  {
    let parsedOperation = input[i].match(/(\w{3})\s(\S*)/)

    let operation = parsedOperation[1]
    let step = parseInt(parsedOperation[2])

    // check if index is included in set and that instruction is not 'acc'
    if (path.has(i) && operation !== 'acc') {
      const nextIndex = operation === 'nop' ? i + step : i + 1

      // check if the next index is not included in set
      if (!path.has(nextIndex)) {
        // Modify the input
        // Clone the input by using the spread syntax to ensure values are copied and not the reference to the orignal array's address in memory!
        // Note that using '=' will cause errors since arrays in JS are reference values; therefore use spread syntax ex. [...arrayToCopy]
        const modifiedInput = [...input]
        const modifiedString = operation === 'nop' ? modifiedInput[i].replace('nop', 'jmp') : modifiedInput[i].replace('jmp', 'nop')
        modifiedInput[i] = modifiedString

        // Pass modified input into P1 function
        const result = part1(modifiedInput)

        if (result.isTerminated)  return result.value
      }
    }
  }
  // Problem description ensures there is one terminating sequence
}

// Execute function for part1 of the problem
const result2 = part2(getInput)
console.log(`Part 2: ... = ${result2}`)

// export default {
//   part1,
//   part2,
// }