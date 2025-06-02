const sizeOfGrid = 16;
const container = document.querySelector(".container");

const createGrid = (amtOfGrids) => {
    
    // Create a row 
    for (let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div'); 
        row.classList.add('grid-row');

        // and on every row create multiple boxes
        for (let j = 0; j < amtOfGrids; j++) {
            const widthAndHeight = 960 / sizeOfGrid;
            const box = document.createElement('div');
            box.classList.add('box');

            // Dynamic width & height
            box.style.width = `${widthAndHeight}px`;
            box.style.height = `${widthAndHeight}px`;

            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

createGrid(sizeOfGrid);

// Hover effect
const allDivs = document.querySelectorAll(".box");
allDivs.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'rgb(124, 111, 94)';
    })
})

