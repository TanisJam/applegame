
const width = 15;
const height = 15;

let createBoard = function (width, height, element) {
    //create nested divs
    for (let x = 0; x < height; x++) {
        let row = document.createElement('div');
        row.id = "row-" + (x + 1);

        for (let y = 0; y < width; y++) {
            let col = document.createElement('div');
            col.id = "col-" + (y + 1);
            row.appendChild(col);
        }
        element.appendChild(row);
    }
    //create a 2d array with all divs
    let field = [];
    for (let i = 0; i < height; i++) {
        field.push(element.childNodes[i].childNodes)
    }
    //return it
    return field;
}

let populate = function(array, probability){
    //probability 0.0 - 1.0
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            if (Math.random() > 1-probability) {
                //board[x][y].style.background = '#da1e1e';
                //board[x][y].style.borderRadius = '50%';

                //Create Tree icon
                let icon = document.createElement('i');
                icon.classList.add("fas");
                icon.classList.add("fa-tree");
                icon.style.color = 'green';
                array[x][y].appendChild(icon);
            }
        }
    }
}

//create board, a matrix with all the divs
let board = createBoard(width, height, document.getElementById("board"));

populate(board, 0.05);