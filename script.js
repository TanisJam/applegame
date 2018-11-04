
const width = 10;
const height = 10; 

let createBoard = function(width, height, element){
    //create nested divs
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
    //create a 2d array with all divs
    let field = [];
    for(let i = 0; i < height; i++){
        field.push(element.childNodes[i].childNodes)
    }
    //return it
    return field;
}

//create board, a matrix with all the divs
let board = createBoard(width, height, document.getElementById("board"));

//console.log(board);

for(let x = 0; x < board.length; x++){
    for(let y = 0; y < board[x].length; y++){
        if(Math.random() > 0.9){
            //board[x][y].style.background = '#da1e1e';
            //board[x][y].style.borderRadius = '50%';
            let icon = document.createElement('i');
            icon.classList.add("fas");
            icon.classList.add("fa-tree");
            icon.style.color = 'green';
            board[x][y].appendChild(icon);
        }
    }
}