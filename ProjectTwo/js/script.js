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
let speed = 0;
let direction = 0;

function preload() {
    let url = 'https://api.open-meteo.com/v1/forecast?latitude=45.51&longitude=-73.59&hourly=temperature_2m,rain,showers,weathercode,windspeed_10m,winddirection_10m,temperature_80m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_hours,windspeed_10m_max&current_weather=true&timezone=auto';
    weather = loadJSON(url);
}

/**
Description of setup
*/
function setup() {
    createCanvas(500, 500);
    background(0);
    print(weather);
    // print(weather.current_weather.windspeed);
    // print(weather.current_weather.winddirection);
    // print(weather.latitude);
    // print(weather.longitude);

    speed = weather.current_weather.windspeed;
    direction = weather.current_weather.winddirection;
}

/**
Description of draw()
*/
function draw() {
//display the information on the screen
    fill(255);
    text("Montreal, QC", 180, 250);
    text("Current wind speed: "+ speed, 180, 270);
    text("Current wind direction: "+ direction, 180, 290);

//display the background cloudy weather


//display the longitude + latitude of the city by a circle
    circle();

//5 circles for the last 5 hours

//time till sunset, sunrise for current

}