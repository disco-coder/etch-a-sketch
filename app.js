const container = document.querySelector("#container");

// Create grid
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    
    for (let j = 0; j < 16; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }
}

const squares = document.querySelectorAll(".square");

// Make squares black on hover
squares.forEach((square) => {
    square.addEventListener("mouseenter", (e) => {
        square.style.backgroundColor = "black";
    });
});

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
});