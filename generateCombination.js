const readline = require("readline");

// Create an interface for reading and writing to the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function for displaying combinations
function displayCombination(combination) {
  console.log("Combination:", combination);
}

// Function for generating combinations
function generate(prefix, remaining) {
  if (remaining.length === 0) {
    displayCombination(prefix);
    count++;
  } else {
    const usedChars = new Set();

    for (let i = 0; i < remaining.length; i++) {
      const char = remaining[i];

      if (!usedChars.has(char)) {
        usedChars.add(char);

        generate(prefix + char, remaining.slice(0, i) + remaining.slice(i + 1));
      }
    }
  }
}

let count = 0;

// Request input data from the user
rl.question("Введите строку для генерации комбинаций: ", (input) => {
  generate("", input);
  console.log("Количество комбинаций:", count);

  // Closing the interface after work is completed
  rl.close();
});
