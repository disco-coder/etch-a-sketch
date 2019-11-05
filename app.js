// Div containing the squares
const container = document.querySelector("#container");

createGrid(16);
colorSquares("black");

// Choose your color button
const chooseColorButton = document.querySelector("#chooseColorButton")
chooseColorButton.addEventListener("click", () => {
    let color = prompt("Choose your color:");
    colorSquares(color);
})

// Random colors button
const randomColorButton = document.querySelector("#randomColorButton")
randomColorButton.addEventListener("click", () => randomColorsSquares())

// Clear grid button
const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => clearGrid());

// Resize grid button
const resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener("click", () => {
    
    // Remove old grid
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    // Prompt for grid size
    do {
        var gridSize = parseInt(prompt("Choose grid size:", "16"))
    } while (isNaN(gridSize));

    createGrid(gridSize);
    colorSquares("black");
})

function clearGrid() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}

function colorSquares(color) {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = color;
        });
    });
}

function randomColorsSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
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