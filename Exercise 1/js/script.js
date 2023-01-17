/**
Exercise One - Pong game
Elisha Rodil 
This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let x = 320;
let y = 180;

let speedX = 5;
let speedY = 2;

let r = 25;

let score = 0;
let playerScore;


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(1000, 700); //create a rectangle canvas on the screen
    //background(0); //add a background color to the canvas = black
}


/**
Description of draw()
*/
function draw() {
    background('#ebecf0'); //add a background color to the canvas = black

    //paddles + its functions
    fill(0);
    rect(50, mouseY, 20, 100);
    rect(935, mouseY, 20, 100);

    //the ball feature of the game
    //background(230, 230, 250); //add a color to the ball = lavender
    //ellipse(20, 20, 40, 40); //create the ball using ellipse
    noStroke();
    fill(0);
    ellipse(x, y, r*2, r*2);
    x += speedX;
    y += speedY;
    if (x > width - r || x < r) {
      speedX = -speedX;
    }
    if (y > height - r || y < r) {
      speedY = -speedY;
    }

    //scores
    fill(0);
    textSize(24);
    text("Score: " + score, 20 , 40);
    //text(playerScore, 140,40);
}
