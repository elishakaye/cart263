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
var words = [];
var values = [];
var data;

function preload() {
    data = loadTable("top_youtube_2.csv", "csv", "header");
}

/**
Description of setup
*/
function setup() {
    createCanvas(400, 400);
    noStroke();
    colorMode(HSB, 360, 100, 100, 100);
    background(0);
    //print(data);
    
    for(var i = 0; i < data.getRowCount(); i++){
      for(var j = 0; j < data.getColumnCount(); j++){
        if(j == 0) words.push(data.getString(i, j));
        if(j == 1) values.push(data.getNum(i, j));
      }
    }
    //print(words);

    for(var i = 0; i < 20; i++){
        var w = words[i];
        var n = views[i];
        var y = height/2;
        var s = map(n, 0, max(views), 0, 50);
        var c = map(n, 0, max(views, 0, 360));

        fill(c, 100, 100);
        textSize(s);
        text(w, 0, y);
        translate(textWidth(w), 0);
    }
}

/**
Description of draw()
*/
function draw() {

}