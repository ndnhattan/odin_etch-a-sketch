const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 16; j++) {
        const item = document.createElement("div");
        item.classList.add("item");
        row.appendChild(item);
    }
    container.appendChild(row);
}

let count = 0;

const list = document.querySelectorAll(".item");
list.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                          ${Math.floor(Math.random() * 256)},
                                          ${Math.floor(Math.random() * 256)})`;
    });
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    const newgrid = prompt("Number of squares per side for new grid: ", "16");
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < newgrid; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < newgrid; j++) {
            const item = document.createElement("div");
            item.classList.add("item");
            row.appendChild(item);
        }
        container.appendChild(row);
    }
    
    const list = document.querySelectorAll(".item");
    list.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                          ${Math.floor(Math.random() * 256)},
                                          ${Math.floor(Math.random() * 256)})`;
        });
    });
});