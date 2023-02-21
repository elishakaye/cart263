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
let weather;

function preload() {
    weather = loadJSON('https://api.open-meteo.com/v1/forecast?latitude=45.51&longitude=-73.59&hourly=temperature_2m,rain,showers,weathercode,windspeed_10m,winddirection_10m,temperature_80m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_hours,windspeed_10m_max&current_weather=true&timezone=auto');
}


/**
Description of setup
*/
function setup() {
    createCanvas(500, 500);
    background(40);
    // print(weather.current_weather.windspeed);
    // print(weather.current_weather.winddirection);
}


/**
Description of draw()
*/
function draw() {
//display the information on the screen
    // text("Montreal, QC", 10, 50);
    // text("Current wind speed: ");

}