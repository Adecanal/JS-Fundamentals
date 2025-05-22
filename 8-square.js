#!/usr/bin/node
const size = parseInt(process.argv[2]);  // Get and convert the argument

if (isNaN(size)) {
  console.log('Missing size');
  process.exit();  // Stop if invalid size
}
if (size <= 0) {
  process.exit();  // Exit silently for non-positive numbers
}
for (let i = 0; i < size; i++) {         // Loop for each row
  let row = '';                          // Start with empty string
  for (let j = 0; j < size; j++) {       // Loop for each column
    row += 'X';                          // Add an 'X' to the row
  }
  console.log(row);                      // Print the completed row
}
