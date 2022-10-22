const container = document.querySelector('#container');
const buttonChangeDimensions = document.querySelector('#changeDimensions');
let startingGridDimension = 32;

function fill() {
    this.classList.add('fill');
}

//generate an n by n grid with a max width of maxWidth pixels
function generateGrid(n, maxWidth) {
    for(let i = 0; i<n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j<n; j++) {
            const square = document.createElement('div');
            square.style.width = maxWidth/n + 'px';
            square.style.height = maxWidth/n + 'px';
            square.addEventListener('mouseover', fill);
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

//clear the grid held within the grid container
function clearGrid(container) {
    while(container.firstChild) {
        while(container.firstChild.firstChild) {
            container.firstChild.removeChild(container.firstChild.firstChild);
        }
        container.removeChild(container.firstChild);
    }
}

generateGrid(startingGridDimension, 960);

//prompt user for new dimensions, clearing the previous grid in favor of the new one
function askUser() {
    let n = prompt('How many squares per side do you want?');
    if(n>100) {
        alert("Please enter a value less than or equal to 100")
    } else if(n<1) {
        alert("Please enter a value greater than 0");
    } else {
        clearGrid(container);
        generateGrid(n, 960);
    }
}

buttonChangeDimensions.addEventListener('click', askUser)





