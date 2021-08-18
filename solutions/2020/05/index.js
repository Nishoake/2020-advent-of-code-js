const Input = require('./input')

// Parsing the input as an Array of numbers
const getInput = Input.passes.split('\n').map(String)


// Defined function for part1 of the problem
const part1 = (input) => {
  // Initialize the maxSeatID variable
  let maxSeatID = 0
  
  for(let i = 0; i < input.length; i++){
    // Splitting input for rows and columns
    let rows = input[i].substring(0,7)
    let columns = input[i].substring(7)

    // Defining constants
    const rowNumber = 128
    const columnNumber = 8

    // Loop to determine the row number
    for (let i = 0; i < rows.length; i++){
      if(rows[i] === "F") rowNumber = rowNumber - Math.pow(2, 6-i)
    }

    // Loop to determine the column number
    for (let i = 0; i < columns.length; i++){
      if (columns[i] === "L") columnNumber = columnNumber - Math.pow(2, 2-i)
    }

    // Calculating the seat ID
    const seatID = 8 * (rowNumber - 1) + (columnNumber - 1)
    
    // Checking against the maxSeatID
    if(seatID > maxSeatID)  maxSeatID = seatID
  }

  return maxSeatID
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: ${result1} is the highest seat ID`)


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