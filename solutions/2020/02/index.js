const Input = require('./input')

// Parsing the input as an Array of numbers
const getInput = Input.passwords.split('\n').map(String)


// Defined function for part1 of the problem
const part1 = (input) => {
  let validCount = 0

  // Validate function based on letter count
  const validate = (index) => {
    // variables capturing date from given parsing string
    const [string, min, max, letter, password] = input[index].match(/(\d+)-(\d+) (\w)\: (\w+)/)

    // Initalize the letter count
    let count = 0

    // Analyze the password
    for(let i = 0; i < password.length; i++){
      if(password[i] === letter)  count++
    }

    // Check if count is within range
    if(min <= count && count <= max)  return true

    // Else not valid
    return false
  }

  // Run the validate function for all strings from the input
  for(let i = 0; i < input.length; i++){
    if (validate(i))  validCount++
  }

  // Return the number of valid passwords
  return validCount
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: ${result1} passwords are valid`)


// Defined function for part2 of the problem
const part2 = (input) => {
  let validCount = 0

  // Position function based on letter position
  const position = (index) => {
    // variables capturing date from given parsing string
    const [string, first, second, letter, password] = input[index].match(/(\d+)-(\d+) (\w)\: (\w+)/)

    // Initalize valid as false to start
    let valid = false

    // Running if checks in series for the first and second position
    if (password[first - 1] === letter) valid = !valid
    if (password[second - 1] === letter) valid = !valid


    return valid
  }

  // Run the position function for all strings from the input
  for (let i = 0; i < input.length; i++) {
    if (position(i)) validCount++
  }

  // Return the number of valid passwords
  return validCount
}

// Execute function for part2 of the problem
const result2 = part2(getInput)
console.log(`Part 2: ${result2} passwords are valid`)

// export default {
//   part1,
//   part2,
// }