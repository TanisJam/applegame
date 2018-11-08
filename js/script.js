"use strict";

const width = 15;
const height = 15;
const treeColor = '#75972C';

let trees = [];
let div = document.getElementById("board");
let treesCount = document.getElementById("total-trees");
let btnReload = document.getElementById("btn-reload");

let plant = function(number, color){
    trees.forEach((x) => board.clean(x));
    trees = [];
    while(trees.length < number){
        let randomNumber = Math.floor( (Math.random() * (width*height))+1 );
        if(trees.indexOf(randomNumber) == -1){
            trees.push(randomNumber);
        }
    }
    trees.forEach((x) => board.plant(x, color));
    treesCount.innerHTML = "Total trees: " + board.population;
}


//create board, a matrix with all the divs
let board = new Board(width, height, div);

//board.populate(0.05, treeColor);

btnReload.addEventListener('click', function(){
    let treesNumber = Math.floor(Math.random()*13)+2;
    plant(treesNumber, treeColor);
});

treesCount.innerHTML = "Total trees: " + board.population;



/*
let count = document.createElement('p');
count.innerHTML = "Total trees: " + board.population;
count.style.backgroundColor = '#A87C4F';
count.style.padding = '1em';
count.style.borderRadius = '10%';
document.getElementById("container").appendChild(count);
*/