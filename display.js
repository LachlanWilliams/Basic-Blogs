// display.js

// Create a new div element for the box
const box = document.createElement('div');

// Set the desired styles for the box
box.style.width = '80px';
box.style.height = '80px';
box.style.backgroundColor = 'black';
box.style.margin = 'auto'; // Center horizontally
box.style.position = 'relative';
box.style.top = '50%';


// Get the chessboard element by its ID
const chessboard = document.getElementById('chessboard');

// Append the box to the chessboard element
chessboard.appendChild(box);