const keys = [
    ['C', '/', '*', 'AC'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', 'calc'],
    ['0', 'E', '.', 'E'],
];


function buttonHandler(text) {
    const display = document.getElementById("displayArea");
    if (text === 'AC') {
        display.value = "";
    } else if (text === 'C') {
        display.value = display.value.substring(0, display.value.length - 1);
    } else if (['+', '-', '*', '/'].includes(text)) {
        display.value += ' ' + text + ' ';
    } else {
        display.value += text;
    }
}

window.onload = () => {
    const numRows = 5;
    const numCols = 4;
    const grid = document.getElementById("keyGrid");
    for (let row = 0; row < numRows; ++row) {
        for (let col = 0; col < numCols; ++col) {
            if ((row === 4 && col === 1) || (row === 4 && col === 3)) {
                continue;
            }
            const button = document.createElement("button");
            const text = keys[row][col];
            button.classList.add("button-" + text);
            button.appendChild(document.createTextNode(text));
            button.addEventListener("click", () => { buttonHandler(text) });
            grid.appendChild(button);
        }
    }
}
