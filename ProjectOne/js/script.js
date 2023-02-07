/**
Project One: Particles
Elisha
This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
function preload() {

}
    
let particles = []; //create an array 
let elisha = [];

/**
Description of setup
*/ 
function setup() {
    
    //create a canvas the size of the screen
    createCanvas(window.innerWidth, window.innerHeight); 
    
    const particlesLength = Math.floor(window.innerWidth / 9);
    
    for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());     
    }
    for (let i = 0; i < particlesLength; i++) {
        elisha.push(new Triangle());     
    }
}

/**
Description of draw
*/
function draw() {
    background(0);
    particles.forEach((p, index) => {
        p.update();
        p.draw();
        p.checkParticles(particles.slice(index));
        p.repel();
    })
    elisha.forEach((ps, index) => {
        ps.update();
        ps.display();
        ps.checkParticles(particles.slice(index));
        ps.repel();
    })
}

    
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

//create a class particle that will move on the X and Y axis
//vector = an entity that has both magnitude and direction
class Particle {
    constructor() {
        //position of the particle appear at random places across the screen
        this.pos = createVector(random(width), random(height));
        //velocity of the particle 
        this.vel = createVector(random(-1, 1), random(-1, 1));
        //radius of the particle
        this.size = random(5, 20);

        //this.r = random(0, 255);
        //this.g = random(0, 255);
        //this.b = random(0, 255);
        this.c = color(random(255), random(255), random(255));
    }

    //Update movement by adding velocity
    update(){
        this.pos.add(this.vel);
        this.edges();
    }

    //draw single particle
    draw() {
        noStroke();
        fill(this.c) 
        //drawingContext.filter = 'blur(10px)';
        circle(this.pos.x, this.pos.y, this.size);
    }

    //Detect edges
    /**if X or Y position of the particle is less than < 0 OR X or Y position
    of particle is less than < width or < height of canvas respectively, 
    then multiply -1 with velocity X or Y vector respectively.*/
    edges() {
        if(this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }
        if(this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }

    // Connect particles
    checkParticles(particles) {
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d < 200) {
                //stroke(this.r,this.g, this.b);
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
            }
        });
    };

    //this function will make particles move away from the mouse cursor, creating a hover effect
    repel() {
        this.pos.x = constrain(this.pos.x, 0, width);
        this.pos.y = constrain(this.pos.y, 0, height);
        let distance = dist(this.pos.x, this.pos.y, mouseX, mouseY);
        let mouse = createVector(mouseX, mouseY);
        let difference = p5.Vector.sub(mouse, this.pos);
        difference.setMag(10);

        //If the mouse comes near a particle, it moves away
        if (distance < 200) {
          this.pos.sub(difference);
        }
      }
}

class Triangle{
    constructor(){
           //position of the particle appear at random places across the screen
           this.pos = createVector(random(width), random(height));
           //velocity of the particle 
           this.vel = createVector(random(-1, 1), random(-1, 1));
           //radius of the particle
           this.size = random(5, 15);
   
           //this.r = random(0, 255);
           //this.g = random(0, 255);
           //this.b = random(0, 255);
           this.c = color(random(255), random(255), random(255));
    }
    display(){
        noStroke();
        fill(this.c)
        triangle(this.pos.x, this.pos.y, this.pos.x+10, this.pos.y+10, this.pos.x-10, this.pos.y+10);
    }
    update(){
        this.pos.add(this.vel);
        this.edges();
    }
    edges() {
        if(this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }
        if(this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }

    // Connect particles
    checkParticles(particles) {
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d < 200) {
                //stroke(this.r,this.g, this.b);
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
            }
        });
    };

    //this function will make particles move away from the mouse cursor, creating a hover effect
    repel() {
        this.pos.x = constrain(this.pos.x, 0, width);
        this.pos.y = constrain(this.pos.y, 0, height);
        let distance = dist(this.pos.x, this.pos.y, mouseX, mouseY);
        let mouse = createVector(mouseX, mouseY);
        let difference = p5.Vector.sub(mouse, this.pos);
        difference.setMag(10);

        //If the mouse comes near a particle, it moves away
        if (distance < 200) {
          this.pos.sub(difference);
        }
      }
}