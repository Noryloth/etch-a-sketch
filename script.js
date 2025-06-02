const sizeOfGrid = 16;
const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");

const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    // Create a row 
    for (let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div'); 
        row.classList.add('grid-row');

        // and on every row create multiple boxes
        for (let j = 0; j < amtOfGrids; j++) {
            
            const box = document.createElement('div');
            box.classList.add('box');

            // Dynamic width & height
            const widthAndHeight = 960 / amtOfGrids;
            box.style.width = `${widthAndHeight}px`;
            box.style.height = `${widthAndHeight}px`;

            // Hover effect
            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = ('rgb(68, 61, 51)');
            })

            row.appendChild(box);
        }
        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
}

createGrid(sizeOfGrid);

// New grid button
resetButton.addEventListener("click", () => {
    let userSize = Number(prompt('Enter a size for a new grid!'));

    while (userSize > 100) {
    userSize = prompt("Maximum is 100.");
    }
    
    const wrapper = document.querySelector('.wrapper');
    wrapper.remove();
    createGrid(userSize);
})