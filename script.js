const ROWS = 4;
const COLS = 4;

function createGrid () {
    const gridContainer = document.querySelector('.container');
    for (i = 0; i < ROWS; i++){
        for (j = 0; j < COLS; j++){
            const square = document.createElement("div");
            square.classList.toggle("square");
            gridContainer.appendChild(square);
        }
    }

    let squareList = document.querySelectorAll('.square');
    squareList.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.background = "blue";
        })
    })
}



document.addEventListener("DOMContentLoaded", createGrid);