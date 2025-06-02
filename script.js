const sizeOfGrid = 16;
const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");

// Get a random RGB
const createRandomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return {r, g ,b}
}

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

            // // Hover effect
            // box.addEventListener("mouseenter", () => {
            //     box.style.backgroundColor = ('rgb(92, 54, 28)');
            // })

            // // Hover effect with random RGB
            // const {r, g, b} = createRandomRGB();
            // box.addEventListener("mouseenter", () => {
            //     const bgColor = "rgb(" + r + "," + g + "," + b + ")"
            //     box.style.backgroundColor = (bgColor);
            // })

            // Hover effect with 10% darkening effect 
            box.addEventListener("mouseenter", () => {
                const currentOpacity = box.style.opacity;
                box.style.backgroundColor = ('rgb(92, 54, 28)');
                if (currentOpacity) {
                    box.style.opacity = Number(currentOpacity) + 0.1;
                } else { 
                    box.style.opacity = 0.1;
                }
                
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