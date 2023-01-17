/**
Create a TicTacToe exercise
Elisha
This is a template. You must fill in the title,
author, and this description to match your project!
*/

let grids = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let rowDistance = 25;
let columnDistance = 25;

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(500, 500);
    background(100);

    drawGrid();
}


/**
Description of draw()
*/
function draw() {
    //draw X and O
    //turn tracker
    //check if someone wins
    //score counter
}

function drawGrid(){
    for (let i = 0; i < 3; i++){

        //for (let k = 0; k < 3; k++){
           // text(grid[k], k + columnDistance, i + rowDistance);
            //columnDistance += 25;
        //}
        //rowDistance += 25;
        //columnDistance += 25;
    }
}