const Input = require('./input')

// Parsing the input as an Array of numbers
const getInput = Input.rules.split('\n').map(String)

// Create a Graph of the example input, represent as an adjacency matrix
// Use this to test your algo before implementing the parsing functionality
// {color: '', capacity: }
const graph = {
  'bright white': [{ color: 'light red', capacity: 1 }, { color: 'dark orange', capacity: 3}],
  'muted yellow': [{ color: 'light red', capacity: 2}, { color: 'dark orange', capacity: 4}],
  'light red': [],
  'dark orange': [],
  'shiny gold': [{ color: 'muted yellow', capacity: 2}, { color: 'bright white', capacity: 1}],
  'dark olive': [{ color: 'shiny gold', capacity: 1}],
  'vibrant plum': [{ color: 'shiny gold', capacity: 2}],
  'faded blue': [{ color: 'dark olive', capacity: 3 }, { color: 'vibrant plum', capacity: 5}],
  'dotted black': [{ color: 'dark olive', capacity: 4 }, { color: 'vibrant plum', capacity: 6}]
}

// Notes:
// 'no other bags.'

// Defined function for part1 of the problem
const part1 = (input) => {
  
  // Represent the graph as an adjacency matrix
  let graph = {}

  // Loop through all the rules
  for (let i = 0; i < input.length; i++) {
    // Parse the Housing Color
    const parsed = input[i].match(/(\w*\s\w*) bags contain (.*)/)

    // console.log(`The ${i} rule = ${parsed[2]}`)

    let housingColor = parsed[1]

    if (!graph[housingColor]) graph[housingColor] = []

    let subColor = parsed[2].split(",")

    if (subColor[0] === 'no other bags.')  continue

    for (let j = 0; j < subColor.length; j++){
      const deepParsed = subColor[j].match(/(\d) (\w*\s\w*) bag/)

      const Capacity = deepParsed[1]
      const Color = deepParsed[2]

      // console.log(`The color ${Color} has a capacity of ${Capacity}`)

      if (!graph[Color]) graph[Color] = []

      const package = {
        color: housingColor,
        capacity: Capacity
      }

      graph[Color].push(package)
    }
    // console.log(`The subcolors = ${subColor[0]}`)
  }

  console.log(`The graph = ${JSON.stringify(graph)}`)

  let queue = []
  let visited = {}

  queue.push('shiny gold')

  while(queue.length > 0){
    let currentColor = queue.shift()
    console.log(`currentColor = ${currentColor}`)

    // console.log(`Previous Graph = ${JSON.stringify(visited)}`)
    if(visited[currentColor]) continue

    visited[currentColor] = true
    // console.log(`After Graph = ${JSON.stringify(visited)}`)

    for(let housingColor of graph[currentColor]){
      // console.log(`${currentColor}'s associated colors = ${JSON.stringify(housingColor)}`)
      // console.log(`---`)

      queue.push(housingColor.color)
    }
  }

  let result = Object.keys(visited).length - 1

  return result
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: The number of bag colors that can eventually contain at least one shiny gold bag is = ${result1}`)


// // Defined function for part2 of the problem
// const part2 = () => {
//   console.log('Insert the result')
// }

// // Execute function for part1 of the problem
// part2()

// export default {
//   part1,
//   part2,
// }