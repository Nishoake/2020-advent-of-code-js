// const Input = require('./input_test')
const Input = require('./input')

// Parsing the input as an Array of strings
const getInput = Input.batch.split('\n\n').map(String)

// Check if all fields are present
const isPresent = (input, index) => {

  // Parse for all the fields
  const byr = input[index].match(/byr\:(\d{4})(\s|$)/)
  const iyr = input[index].match(/iyr\:(\d{4})(\s|$)/)
  const eyr = input[index].match(/eyr\:(\d{4})(\s|$)/)
  const hcl = input[index].match(/hcl\:#([a-f0-9]{6})(\s|$)/)
  const ecl = input[index].match(/ecl\:(\w{3})(\s|$)/)
  const pid = input[index].match(/pid\:(\d{9})(\s|$)/)

  // Parse specifically for the height field either w
  const metric = input[index].match(/hgt\:(\d*)(cm)/)
  const imperial = input[index].match(/hgt\:(\d*)(in)/)

  // Initialize height variable
  let height = null

  // Setting height to the correct measurement system
  if(metric)  height = metric
  if(imperial)  height = imperial

  // Check if all fields are present
  if (ecl && pid && eyr && hcl && byr && iyr && height){
    const passport = {
      byr: byr[1],
      iyr: iyr[1],
      eyr: eyr[1],
      hgt: height,
      hcl: hcl[1],
      ecl: ecl[1],
      pid: pid[1]
    }

    return passport
  }

  return null
}

const isValid = (passport) => {
  // check to see if entire payload is valid
  // If yes return true
  let fieldCount = 0

  // Validating the fields
  if (passport.byr >= 1920 && passport.byr <= 2002) fieldCount++
  if (passport.iyr >= 2010 && passport.byr <= 2020) fieldCount++
  if (passport.eyr >= 2020 && passport.byr <= 2030) fieldCount++
  if (passport.hcl) fieldCount++
  if (passport.pid) fieldCount++
  if (passport.ecl.length === 3 && (passport.ecl === "amb" || passport.ecl === "blu" || passport.ecl === "brn" || passport.ecl === "gry" || passport.ecl === "grn" || passport.ecl === "hzl" || passport.ecl === "oth" )) fieldCount++

  // Validating the height field
  if (passport.hgt[2] === "cm"){
    if (passport.hgt[1] >= 150 && passport.hgt[1] <= 193) fieldCount++
  }
  if (passport.hgt[2] === "in"){
    if (passport.hgt[1] >= 59 && passport.hgt[1] <= 76) fieldCount++
  }

  // Ensuring all 7 fields valid to return true
  if (fieldCount === 7) return true
}

// Defined function for part1 of the problem
const part1 = (input) => {
  let validCount = 0

  // Validate function checking for all required passport credentials
  const validate = (index) => {

    // Parse for all the fields
    const ecl = input[index].match(/ecl\:/)
    const pid = input[index].match(/pid\:(\d*)/)
    const eyr = input[index].match(/eyr\:(\d*)/)
    const hcl = input[index].match(/hcl\:/)
    const byr = input[index].match(/byr\:(\d*)/)
    const iyr = input[index].match(/iyr\:(\d{4})/)
    const hgt = input[index].match(/hgt\:(\d*)/)

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
console.log(`Part 1: ${result1} passports are valid`)


// Defined function for part2 of the problem
const part2 = (input) => {
  let validCount = 0

  // Run the validate function for all strings from the input
  for (let i = 0; i < input.length; i++) {
    // check to see if all required fields are present
    const passport = isPresent(input, i)

    // Pass the result into if Statement
    // Block runs if value in not null
    if (passport) {
      const check = isValid(passport)

      // if check passes increment count up by one
      if (check) validCount++
    }
  }

  // Return the number of valid passports
  return validCount
}

// Execute function for part2 of the problem
const result2 = part2(getInput)
console.log(`Part 2: ${result2} passports are valid`)

// export default {
//   part1,
//   part2,
// }