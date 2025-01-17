var gridSize = 4;

function createGrid (gridSize) {
    const gridContainer = document.querySelector('.container');
    gridSizeSquare = gridSize ** 2;
    for (i = 0; i < gridSizeSquare; i++){
        const square = document.createElement("div");
        square.classList.toggle("square");
        square.style.width = `${100/gridSize}%`;
        square.style.height = `${100/gridSize}%`;
        gridContainer.appendChild(square);
        }
    addHoverEffect();
}

function addHoverEffect () {
    let squareList = document.querySelectorAll('.square');
    squareList.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.background = "#2a9d8f";
        })
    })
}

function updateGridSize () {
    let newGridSize = prompt("Grid Row Size (max 100):","4");
    console.log(`${typeof newGridSize}`)
    if (newGridSize === null){
        return;
    } 
    else if (newGridSize > 100 || newGridSize <= 0) {
        alert("Your imagination is more than this grid can handle! Please limit to 0-100");
        return;
    }
    console.log(`newGridSize: ${newGridSize}`)
    const gridContainer = document.querySelector('.container');
    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove()
    }
    createGrid(newGridSize);
    gridSize = newGridSize;
}

function clearSquares() {
    let squareList = document.querySelectorAll('.square');
    squareList.forEach((square) => {
        square.style.background = "#fefae0";
    })
}

document.addEventListener("DOMContentLoaded", createGrid(gridSize));

let updateGridSizeButton = document.getElementById("change_size"); 
updateGridSizeButton.addEventListener("click", updateGridSize);

let resetBtn = document.getElementById("reset")
resetBtn.addEventListener("click", () => clearSquares());