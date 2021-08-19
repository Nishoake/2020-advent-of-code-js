const Input = require('./input')

// Parsing the input as an Array of numbers
const getInput = Input.answers.split('\n\n').map(String)

// Defined function for part1 of the problem
const part1 = (input) => {
  // Initialize sumCount
  let sumCount =0

  // Loop through all groups
  for (let i=0; i < input.length; i++){
    // Parse the answers
    const parsed = input[i].replace(/(\r\n|\n|\r)/gm, "")
    // Create a set to keep count each "yes" answer
    let answerSet = new Set()

    // Loop through group's answers
    for (let i = 0; i < parsed.length; i++) {
      answerSet.add(parsed[i])
    }

    // Increment the sumCount by the number of "yes" answers
    sumCount += answerSet.size
  }

  return sumCount
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: Sum of the counts = ${result1}`)


// // Defined function for part2 of the problem
const part2 = (input) => {
  // Initialize sumCount
  let sumCount = 0

  // Loop through all groups
  for (let i=0; i < input.length; i++){
    // Initialize default number of people in group to one
    let numberOfParticipants = 1

    // Update numberOfParticipants to proper count if greater than one
    if (input[i].match(/\n/g)){
      numberOfParticipants = 1 + input[i].match(/\n/g).length
    }
    
    // Parse the answers
    const parsed = input[i].replace(/(\r\n|\n|\r)/gm, "")

    // Create a dictionary to track answers
    let dictionary = {}

    // Loop through group's answers
    for (let i = 0; i < parsed.length; i++) {
      if(!dictionary[parsed[i]]) dictionary[parsed[i]] = 0

      dictionary[parsed[i]]++

      if (dictionary[parsed[i]] === numberOfParticipants) sumCount++
    }
  }

  return sumCount
}

// Execute function for part1 of the problem
const result2 = part2(getInput)
console.log(`Part 2: Sum of the adjusted counts = ${result2}`)