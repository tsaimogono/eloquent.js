let size = 8;
let board = "";

// Loop through each row
for (let row = 0; row < size; row++) {
  // Check if the row number is even
  if (row % 2 === 0) {
    board += " ".repeat(size); // Add spaces for even rows
  } else {
    // Create a string of alternating spaces and hashes for odd rows
    let rowString = "";
    for (let col = 0; col < size; col++) {
      rowString += col % 2 === 0 ? "#" : " "; // Add hash for even columns, space for odd
    }
    board += rowString;
  }
  board += "\n"; // Add newline character after each row
}

console.log(board);
