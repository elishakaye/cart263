/**
Project Two - Data & Table
ELISHA 
This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
var values = [];
var data;

var innerCircle = 30;

function preload() {
    data = loadTable("Spotify_Top_50_Songs.csv", "csv", "header");
}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 0, 100);
  // print(data);
  for(var i = 0; i < data.getRowCount(); i++) {
    for(var j = 0; j < data.getColumnCount(); j++) {
      values.push(data.getNum(i, j));
    }
  }
  // print(values);
  var innerCircle = 30;
  for(var i = 0; i < values.length; i++) {
    var n = values[i];
    var x = width/2;
    var y = height/2;
    var w = 1;
    var h = -map(n, 0, max(values), 0, height/2 - innerCircle);
    var r = map(i, 0, values.length, 0, TWO_PI);
    var c = map(n, 0, max(values), 120, 360);
    fill(c, 100, 100);
    push();
    translate(x, y);
    rotate(r);
    rect(0, -innerCircle, w, h);
    pop();
  }
}

/**
Description of draw()
*/
let s = 'The Top 50 songs of 2021';

function draw() {
  // Text wraps within text box
  fill(0);
  textSize(50);
  text(s, 30, 30, 400, 300);

  //description/info
  textSize(18);
  fill(50);
  text('These are the top 50 songs in 2021 using Spotify.', 30, 200);
  text('Each stroke/line represents an artist + their song that is the most played in that year. Here is the list of the top artist of that year:', 30, 219, 400, 300);
}