const keys = [
    ['C', '/', '*', 'AC'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', 'E', '.', 'E'],
];

window.onload = () => {
    const numRows = 5;
    const numCols = 4;
    const grid = document.getElementById("keyGrid");
    for (let row = 0; row < numRows; ++row) {
        for (let col = 0; col < numCols; ++col) {
            if ((row === 4 && col === 1) || (row === 4 && col === 3)) {
                continue;
            }
            const divEle = document.createElement("button");
            const text = keys[row][col];
            if (text === '0') {
                divEle.classList.add("item0");
            } else if (text === '=') {
                divEle.classList.add("itemEquals");
            }
            divEle.appendChild(document.createTextNode(text));
            grid.appendChild(divEle);
        }
    }
}
