//Elements
const container = document.querySelector('#container');
const buttonChangeDimensions = document.querySelector('#buttonChangeDimensions');
const buttonTraditional = document.querySelector('#buttonTraditional');
const buttonGrayscale = document.querySelector('#buttonGrayscale');
const buttonRainbow = document.querySelector('#buttonRainbow');
const buttonClear = document.querySelector('#buttonClear');

//Declared variables
let currentGridDimensions = 32, currentFill = normalFill;



/**Returns random number from min to max (not including max)
 *
 * @param min
 * @param max
 * @returns {number}
 */
function randomNum(min, max) {
    return Math.floor(Math.random() * max + min);
}

/**Fills in square with black color
 *
 */
function normalFill() {
    this.style.backgroundColor = 'black';
}


/**Fills in square with random rgb color
 *
 */
function colorFill() {
    this.style.backgroundColor = `rgb(${randomNum(0, 256)}, ${randomNum(0, 256)}, ${randomNum(0, 256)})`;
}

/**Fills in square gradually from white to black
 *
 */
function grayscaleFill() {
    if (this.style.opacity) {
        this.style.opacity = `${parseFloat(this.style.opacity) + 0.10}`;
    } else {
        this.style.backgroundColor = 'black';
        this.style.opacity = '0.10';
    }
}


/**Generates a grid with n by n dimensions, maxWidth, and the chosenFill (default normalFill)
 *
 * @param n
 * @param chosenFill
 * @param maxWidth
 */
function generateGrid(n=32, chosenFill=normalFill, maxWidth=500) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < n; j++) {
            const square = document.createElement('div');
            square.style.width = maxWidth / n + 'px';
            square.style.height = maxWidth / n + 'px';
            square.addEventListener('mouseenter', chosenFill);
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

/**Clears the grid held within the grid container
 *
 * @param container
 */
function clearGrid(container) {
    while (container.firstChild) {
        while (container.firstChild.firstChild) {
            container.firstChild.removeChild(container.firstChild.firstChild);
        }
        container.removeChild(container.firstChild);
    }
}

/**Prompts user for new dimensions, clearing the previous grid in favor of the new one
 *
 */
function askUser() {
    let n = prompt('How many squares per side do you want?');
    if (n > 100) {
        alert("Please enter a value less than or equal to 100")
    } else if (n < 1) {
        alert("Please enter a value greater than 0");
    } else {
        currentGridDimensions = n;
        clearGrid(container);
        generateGrid(currentGridDimensions, currentFill);
    }
}

/**Loads traditional Etch-A-Sketch fill-style grid
 *
 */
function buttonTraditionalClicked() {
    if(currentFill === normalFill) return;
    clearGrid(container);
    currentFill = normalFill;
    generateGrid(currentGridDimensions, currentFill);
}

/**Loads grayscale Etch-A-Sketch fill-style grid
 *
 */
function buttonGrayscaleClicked() {
    if(currentFill === grayscaleFill) return;
    clearGrid(container);
    currentFill = grayscaleFill;
    generateGrid(currentGridDimensions, currentFill);
}

/**Loads rainbow Etch-A-Sketch fill-style grid
 *
 */
function buttonRainbowClicked() {
    if(currentFill === colorFill) return;
    clearGrid(container);
    currentFill = colorFill;
    generateGrid(currentGridDimensions, currentFill);
}

/**Clears grid
 *
 */
function buttonClearClicked() {
    clearGrid(container);
    generateGrid(currentGridDimensions, currentFill);
}


//Initial grid
generateGrid();


//Buttons
buttonChangeDimensions.addEventListener('click', askUser);
buttonTraditional.addEventListener('click', buttonTraditionalClicked);
buttonGrayscale.addEventListener('click', buttonGrayscaleClicked);
buttonRainbow.addEventListener('click', buttonRainbowClicked);
buttonClear.addEventListener('click', buttonClearClicked);








