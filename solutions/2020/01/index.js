const Input = require('./input')

// Parsing the input as an Array of numbers
const getInput = Input.numbers.split('\n').map(Number)



// Function returning product of the two numbers that sum to 2020
const twoSum = (input) => {

  // Establishing an empty object
  let hashTable = {}

  // Running a for loop that will iterate over
  for (let i = 0; i < input.length; i++) {

    // Check if the corresponding pair number is in the hash table
    if (hashTable[input[i]]) {
      console.log(`The Two numbers summing to 2020: ${input[i]}, ${hashTable[input[i]]}`)
      return input[i] * hashTable[input[i]]
    }

    // Else store the given number under it's corresponding pair number
    hashTable[2020 - input[i]] = input[i]
  }
}


// Function returning product of the two numbers that sum to 2020
const threeSum = (input) => {

  // Running a for loop that will iterate over
  for (let i = 0; i < input.length; i++) {
    // Establishing an empty object
    let hashTable = {}
    let difference = 2020 - input[i]

    // Nested for loop
    for (let j = i + 1; j < input.length; j++) {
      // Check if the corresponding pair number is in the hash table
      if (hashTable[input[j]]) {
        console.log(`The Three numbers summing to 2020: ${input[i]}, ${input[j]}, ${hashTable[input[j]]}`)
        return input[i] * input[j] * hashTable[input[j]]
      }

      if (input[j] < difference) {
        hashTable[difference - input[j]] = input[j]
      }
    }


    // Else store the given number under it's corresponding pair number

  }
}



// Defined function for part1 of the problem
const part1 = () => {
  console.log(twoSum(getInput))
}

// Execute function for part1 of the problem
part1()


// Defined function for part2 of the problem
const part2 = () => {
  console.log(threeSum(getInput))
}

// Execute function for part1 of the problem
part2()

// export default {
//   part1,
//   part2,
// }