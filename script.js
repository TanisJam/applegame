
const width = 10;
const height = 10; 

let tablero = document.getElementById("tablero");

let crearTablero = function(width, height, element){
    for(let x = 0; x < width; x++){
        let row = document.createElement('div');
        row.id = "row-"+(x+1);  

        for(let y = 0; y < height; y++){
            let col = document.createElement('div');
            col.id = "col-"+(y+1);
            row.appendChild(col);
        } 
        
        
        element.appendChild(row);
    }
}

crearTablero(width, height, tablero);
