//Imaginary practices homepage - perlin noise stuff
let numBeats = 9;
let dir = 0;

//
function setup() {
  createCanvas(width, height);
  colorMode(HSB, 360, 100, 100, 100);
  background(228, 21, 65);
}

function draw() {
  //rgb(131, 138, 165)
  background(228, 21, 65, 10);
  let x = 15;
  radius = 100 //+ sin + (frameCount*0.5);
  
  translate(width/2, height/2);
  for (let i = 0; i < numBeats; i++){
    rotate(360/numBeats);
    push();
    
    dir = map(mouseX, 0, 400, 1, -1);
    console.log(dir);
    //middle of canvas 
    rotate(dir * frameCount * 0.02);
    noStroke();
    strokeWeight(2);
    fill(255);
    ellipse(i * x + 50, radius/4, radius/4);
    pop();
  } 
  x++;
  //t++
}