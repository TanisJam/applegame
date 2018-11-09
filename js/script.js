"use strict";

const width = 15;
const height = 15;
const treeColor = '#75972C';

var config = {
    apiKey: "AIzaSyCAEoFj3jOjaFkcTbEwklY9dG3Pu3YDyUk",
    authDomain: "apple-trees.firebaseapp.com",
    databaseURL: "https://apple-trees.firebaseio.com",
    projectId: "apple-trees",
    storageBucket: "apple-trees.appspot.com",
    messagingSenderId: "334685750082"
  };
firebase.initializeApp(config);
let database = firebase.database();
let ref = database.ref("fields");

let trees = [];
let div = document.getElementById("board");
let treesCount = document.getElementById("total-trees");
let btnClean = document.getElementById("btn-clean");
let btnSave = document.getElementById("btn-save");
let inputName = document.getElementById("input-name");

let showTotalTrees = function(){
    treesCount.innerHTML = "Total trees: " + board.population;
}

let cliked = function(algo){
    let exp = /[0-9]+/g;
    let cell = (!exp.test(algo.path[0].id))?algo.path[1].id:algo.path[0].id;
    board.plant(cell);
    showTotalTrees();
    console.log(board.planted);
}

//create board, a matrix with all the divs
let board = new Board(width, height, div, cliked);

btnClean.addEventListener('click', function(){
    board.clean();
    showTotalTrees();
});
btnSave.addEventListener('click', function(){
    let data = {
        name: inputName.value,
        field: board.planted
    }
    ref.push(data);
    inputName.value = "";
});

