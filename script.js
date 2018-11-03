
const width = 10;
const height = 10; 

let createBoard = function(width, height, element){
    for(let x = 0; x < height; x++){
        let row = document.createElement('div');
        row.id = "row-"+(x+1);  

        for(let y = 0; y < width; y++){
            let col = document.createElement('div');
            col.id = "col-"+(y+1);
            row.appendChild(col);
        }
        element.appendChild(row);
    }
    return element;
}

//create board and getting references on field array
let board = createBoard(width, height, document.getElementById("board"));
let field = [];
for(let i = 0; i < height; i++){
    field.push(board.childNodes[i].childNodes)
}
console.log(field);

for(let x = 0; x < field.length; x++){
    for(let y = 0; y < field[x].length; y++){
        if(Math.random() > 0.9){
            //let icon = document.createElement('i');
            //field[x][y].appendChild(icon);
        field[x][y].style.background = '#da1e1e';
        field[x][y].style.borderRadius = '50%';
        }
    }
}