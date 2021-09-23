const Input = require('./input')

// Parsing the input as an Array of numbers
const getInput = Input.rules.split('\n').map(String)

// Create a Graph of the example input, represent as an adjacency matrix
// Use this to test your algo before implementing the parsing functionality
// {color: '', capacity: }
// const graph = {
//   'bright white': [{ color: 'light red', capacity: 1 }, { color: 'dark orange', capacity: 3}],
//   'muted yellow': [{ color: 'light red', capacity: 2}, { color: 'dark orange', capacity: 4}],
//   'light red': [],
//   'dark orange': [],
//   'shiny gold': [{ color: 'muted yellow', capacity: 2}, { color: 'bright white', capacity: 1}],
//   'dark olive': [{ color: 'shiny gold', capacity: 1}],
//   'vibrant plum': [{ color: 'shiny gold', capacity: 2}],
//   'faded blue': [{ color: 'dark olive', capacity: 3 }, { color: 'vibrant plum', capacity: 5}],
//   'dotted black': [{ color: 'dark olive', capacity: 4 }, { color: 'vibrant plum', capacity: 6}]
// }

// Notes:
// 'no other bags.'

const parseInput1 = (input) => {
  // Represent the graph as an adjacency matrix
  let graph = {}

  // Loop through all the rules
  for (let i = 0; i < input.length; i++) {
    // Parse the Housing Color
    const parsed = input[i].match(/(\w*\s\w*) bags contain (.*)/)


    let housingColor = parsed[1]

    if (!graph[housingColor]) graph[housingColor] = []

    let subColor = parsed[2].split(",")

    if (subColor[0] === 'no other bags.') continue

    for (let j = 0; j < subColor.length; j++) {
      const deepParsed = subColor[j].match(/(\d) (\w*\s\w*) bag/)

      const Capacity = deepParsed[1]
      const Color = deepParsed[2]

      if (!graph[Color]) graph[Color] = []

      const package = {
        color: housingColor,
        capacity: Capacity
      }

      graph[Color].push(package)
    }
  }

  return graph
}

const parseInput2 = (input) => {
  // Represent the graph as an adjacency matrix
  let graph = {}

  // Loop through all the rules
  for (let i = 0; i < input.length; i++) {
    // Parse the Housing Color
    const parsed = input[i].match(/(\w*\s\w*) bags contain (.*)/)


    let housingColor = parsed[1]

    if (!graph[housingColor]) graph[housingColor] = []

    let subColor = parsed[2].split(",")

    if (subColor[0] === 'no other bags.') continue

    for (let j = 0; j < subColor.length; j++) {
      const deepParsed = subColor[j].match(/(\d) (\w*\s\w*) bag/)

      const Capacity = deepParsed[1]
      const Color = deepParsed[2]

      if (!graph[Color]) graph[Color] = []

      const package = {
        color: Color,
        capacity: Capacity
      }

      graph[housingColor].push(package)
    }
  }
  console.log(`The Graph is = ${JSON.stringify(graph)}`)
  return graph
}

// Defined function for part1 of the problem
const part1 = (graph) => {
  
  // // Represent the graph as an adjacency matrix
  // let graph = {}

  // // Loop through all the rules
  // for (let i = 0; i < input.length; i++) {
  //   // Parse the Housing Color
  //   const parsed = input[i].match(/(\w*\s\w*) bags contain (.*)/)

  //   // console.log(`The ${i} rule = ${parsed[2]}`)

  //   let housingColor = parsed[1]

  //   if (!graph[housingColor]) graph[housingColor] = []

  //   let subColor = parsed[2].split(",")

  //   if (subColor[0] === 'no other bags.')  continue

  //   for (let j = 0; j < subColor.length; j++){
  //     const deepParsed = subColor[j].match(/(\d) (\w*\s\w*) bag/)

  //     const Capacity = deepParsed[1]
  //     const Color = deepParsed[2]

  //     // console.log(`The color ${Color} has a capacity of ${Capacity}`)

  //     if (!graph[Color]) graph[Color] = []

  //     const package = {
  //       color: housingColor,
  //       capacity: Capacity
  //     }

  //     graph[Color].push(package)
  //   }
  //   // console.log(`The subcolors = ${subColor[0]}`)
  // }

  // console.log(`The graph = ${JSON.stringify(graph)}`)

  let queue = []
  let visited = {}

  queue.push('shiny gold')

  while(queue.length > 0){
    let currentColor = queue.shift()

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
const graph1 = parseInput1(getInput)
const result1 = part1(graph1)
console.log(`Part 1: The number of bag colors that can eventually contain at least one shiny gold bag is = ${result1}`)


// Defined function for part2 of the problem
const part2 = (graph) => {
  
  // let queue = []
  // let accumulator = 0

  // queue.push('shiny gold')

  // while (queue.length > 0) {
  //   let currentColor = queue.shift()
  //   let totalCapacity = 0

  //   for (let subColor of graph[currentColor]) {
  //     // console.log(`${currentColor}'s associated colors = ${JSON.stringify(housingColor)}`)
  //     // console.log(`---`)

  //     queue.push(subColor.color)

  //     totalCapacity += subColor.capacity
  //   }
  // }

  // let result = Object.keys(visited).length - 1

  // return result


  // Establish data structures for DFS
  let stack = []
  let forks = {}

  // Establish counter variables
  let sum = 0
  let test = 1

  // Should we define outside of is statement?
  // let factor
  // let capcity

  stack.push('shiny gold')

  while(stack.length > 0){
    let parentColor = stack.pop()
    let factor = 1

   if (parentColor !== 'shiny gold'){
      factor = forks[parentColor]
      
      // console.log(`parentColor = ${JSON.stringify(graph[parentColor])}`)

      sum += factor
      // console.log(`newColor = ${parentColor}`)
    }

    // Check if children exist
    if (graph[parentColor].length > 0){
      // If yes loop over children
      for (let i = 0; i < graph[parentColor].length; i++){
        // let value = `[${parentColor}][${i}]`
        let value = graph[parentColor][i].color

        // Add reference to parent-child relationship and the factor at that point of the tree as the value
        forks[value] = factor * graph[parentColor][i].capacity

        // Push reference to the fork into the stack
        stack.push(value)

        // console.log(`child color = ${value}`)
      }
    }

    console.log(`Test#: ${test}`)
    test++
  }

  return sum
}

// Execute function for part2 of the problem
const graph2 = parseInput2(getInput)
const result2 = part2(graph2)
console.log(`Part 2: ${result2} individual bags are required inside your single shiny gold bag`)
// part2()

// export default {
//   part1,
//   part2,
// }