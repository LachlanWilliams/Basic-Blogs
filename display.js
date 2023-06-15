// display.js

// Create a new div element for the box
const box = document.createElement('div');

// Set the desired styles for the box
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = 'black';

// Get the chessboard element by its ID
const chessboard = document.getElementById('chessboard');

// Append the box to the chessboard element
chessboard.appendChild(box);