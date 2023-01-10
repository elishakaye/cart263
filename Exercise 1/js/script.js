/**
Title of Project
Author Name
This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let x;
let y;

let speedX;
let speedY;

let speed = 10;


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
    background(0); //add a background color to the canvas = black

    noStroke();
    //background(230, 230, 250); //add a color to the ball = lavender
    ellipse(20, 20, 40, 40); //create the ball using ellipse

    //paddles
    rect(50, mouseY, 20, 100)

}