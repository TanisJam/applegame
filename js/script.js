"use strict";

import { Board } from './board.js';

const width = 15;
const height = 15;
const treeColor = '#75972C';

//not used
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
//not used
let populate = function(array, probability){
    let population = 0;
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
                icon.style.color = treeColor;
                array[x][y].appendChild(icon);
                population++;
            }
        }
    }
    return population;
}


//create board, a matrix with all the divs
let board = new Board(width, height, document.getElementById("board"));
console.log(board.population);

board.populate(0.05, treeColor);
console.log(board.population);

let count = document.createElement('p');
count.innerHTML = "Total trees: " + board.population;
count.style.backgroundColor = '#A87C4F';
count.style.padding = '1em';
count.style.borderRadius = '10%';
document.getElementById("container").appendChild(count);
//let board = createBoard(width, height, document.getElementById("board"));
//populate(board.field, 0.05);