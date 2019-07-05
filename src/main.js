import instructionGenerators from './generators';

// Set up:

// opCodesGrid: [16][16]

// set first row to ['', 'x0', ... , 'xF']
// set first column to ['', '0x', ... , 'Fx']

// call each generator function
const generateAllInstructions = () => {
  let instructions = [];

  for (let generatorFunction of instructionGenerators) {
    instructions.push(generatorFunction());
  }
  
  return instructions; // list containing all instruction objects
}

const instructions = generateAllInstructions();
console.log(instructions);

// iterate over opcodes to place objects into opCodesGrid


// use opCodesGrid to generate an HTML table
