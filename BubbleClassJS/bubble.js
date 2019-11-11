// Example taken from https://www.youtube.com/watch?v=T-HGdc8L-7w&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=23

class Bubble {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    };

    show (){
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    };

}

const bubble1 = new Bubble(200, 150);

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
}

setup();
draw();