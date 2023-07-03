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
const randomBtn = document.querySelector('#random-btn');
const eraserBtn = document.querySelector('#eraser-btn');
const clearBtn = document.querySelector('#clear-btn');
const gridSize = document.querySelector('#grid-size');
const gridSlider = document.querySelector('#grid-range');
const grid = document.querySelector('#grid-container');


gridSlider.oninput = function() {
    setGridSize(this.value);
    updateGridSize(this.value);
}

function updateGridSize(size) {
    gridSize.innerHTML = `${size} x ${size}`;
}

colorBtn.onclick = () => setMode('color');
pickerBtn.oninput = (e) => setColor(e.target.value);
randomBtn.onclick = () => setMode('random');
eraserBtn.onclick = () => setMode('eraser');
clearBtn.onclick = () => reloadGrid();

function setGridSize(size) {
    setSize(size);
    reloadGrid();
}

function reloadGrid() {
    clearGrid();
    buildGrid(currentSize);
}

function clearGrid() {
    grid.innerHTML = '';
}

function buildGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)

    grid.appendChild(gridElement)
  }

}

function changeColor(e) {
    if(!e.buttons > 0) return;
    if (currentMode === 'random') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#FFFFFF'
    }
  }

window.onload = () => {
    updateGridSize(DEFAULT_SIZE);
    gridSlider.value = DEFAULT_SIZE;

    pickerBtn.value = DEFUALT_COLOR;

    buildGrid(DEFAULT_SIZE);
}
