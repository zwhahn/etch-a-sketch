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
            square.style.background = "red";
        })
    })
}

function updateGridSize () {
    let newGridSize = prompt("Grid Row Size (max 100):","4");
    console.log(`${typeof newGridSize}`)
    if (newGridSize > 100 || newGridSize <= 0) {
        alert("Row size is out of range! Please limit to 0-100");
        return;
    }
    if (newGridSize === null){
        return;
    }
    console.log(`newGridSize: ${newGridSize}`)
    const gridContainer = document.querySelector('.container');
    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove()
    }
    createGrid(newGridSize);
}

let updateGridSizeButton = document.querySelector("button") 
updateGridSizeButton.addEventListener("click", updateGridSize)
document.addEventListener("DOMContentLoaded", createGrid(gridSize));