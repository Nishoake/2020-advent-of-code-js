const Input = require('./input_test')

// Parsing the input as an Array of strings
const getInput = Input.batch.split('\n\n').map(Boolean)

console.log(getInput)