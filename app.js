// Div containing the squares
const container = document.querySelector("#container");

// Create grid
createGrid(16);

// Make squares black on hover
colorGrid("black");

// Choose your color button
const chooseColorButton = document.querySelector("#chooseColorButton")
chooseColorButton.addEventListener("click", () => {
    let color = prompt("Choose your color:");
    colorGrid(color);
})

// Random colors
const randomColorButton = document.querySelector("#randomColorButton")
randomColorButton.addEventListener("click", () => randomColorGrid())

// Clear grid button
const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => clearGrid());

// Resize grid button
const resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener("click", (e) => {
    
    // Remove old grid
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    // Prompt for grid size
    do {
        var gridSize = parseInt(prompt("Choose grid size:", "16"))
    } while (isNaN(gridSize));

    createGrid(gridSize);
    colorGrid("black");
})

function clearGrid() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}

function colorGrid(color) {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", (e) => {
            square.style.backgroundColor = color;
        });
    });
}

function randomColorGrid() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", (e) => {
            square.style.backgroundColor = getRandomColor();
        });
    });
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        
        for (let j = 0; j < gridSize; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.height = `${(480/gridSize)}px`;
            row.appendChild(square);
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }