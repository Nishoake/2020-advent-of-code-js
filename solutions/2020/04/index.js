const Input = require('./input')

// Parsing the input as an Array of numbers
const getInput = Input.batch.split('\n\n').map(String)


// Defined function for part1 of the problem
const part1 = (input) => {
  let validCount = 0
  console.log(`Total number of passports = ${input.length}`)

  // Validate function checking for all required passport credentials
  const validate = (index) => {

    // Parse for all the fields
    const ecl = input[index].match(/ecl\:/gm)
    const pid = input[index].match(/pid\:(\d*)/gm)
    const eyr = input[index].match(/eyr\:(\d*)/gm)
    const hcl = input[index].match(/hcl\:/gm)
    const byr = input[index].match(/byr\:(\d*)/gm)
    const iyr = input[index].match(/iyr\:(\d*)/gm)
    const hgt = input[index].match(/hgt\:(\d*\w*)/gm)

    // Check if all fields are present
    if (ecl && pid && eyr && hcl && byr && iyr && hgt)  return true

  }

  // Run the validate function for all strings from the input
  for (let i = 0; i < input.length; i++) {
    if (validate(i)) validCount++
  }

  // Return the number of valid passports
  return validCount
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: ${result1} passwords are valid`)


// Defined function for part2 of the problem
const part2 = () => {
  console.log('Insert the result')
}

// Execute function for part1 of the problem
part2()

// export default {
//   part1,
//   part2,
// }