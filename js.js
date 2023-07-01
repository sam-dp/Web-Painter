const DEFUALT_COLOR = '#171717'; // Paint color is black
const DEFAULT_MODE = 'color' // Start in coloring mode
const DEFAULT_SIZE = 50; // Start with 50x50 dimensions


let currentColor = DEFUALT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setColor(color) {
    currentColor = color;
}

function setMode(mode) {
    currentMode = mode;
} 

function setSize(size) {
    currentSize = size;
}


const colorBtn = document.querySelector('#color-btn');
const pickerBtn = document.querySelector('#picker-btn');
const randomBtn = document.querySelector('#randmon-btn');
const eraserBtn = document.querySelector('#eraser-btn');
const clearBtn = document.querySelector('#clear-btn');
const gridSlider = document.querySelector('#grid-range');
const grid = document.querySelector('#grid-container');

colorBtn.onclick = () => setMode('color');
pickerBtn.oninput = (e) => setColor(e.target.value);
randomBtn.onclick = () => setMode('random');
eraserBtn.onclick = () => setMode('eraser');
clearBtn.onclick = () => reloadGrid();



function reloadGrid() {
    grid.innerHTML = '';
    buildGrid(currentSize);
}






// window.onload = () => {
//     buildGrid(DEFAULT_SIZE)
//     activateButton(DEFAULT_MODE)
// }