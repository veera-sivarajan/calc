window.onload = () => {
    const numRows = 5;
    const numCols = 4;
    const grid = document.getElementById("keyGrid");
    for (let row = 0; row < numRows; ++row) {
        for (let col = 0; col < numCols; ++col) {
            const divEle = document.createElement("div");
            const text = document.createTextNode("Key");
            divEle.appendChild(text);
            grid.appendChild(divEle);
        }
    }
}
