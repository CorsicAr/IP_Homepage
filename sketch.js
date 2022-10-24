//Imaginary practices homepage - perlin noise stuff
let numBeats = 12;
let dir = 0;
let nScl = 0.1;
let nAmp = 5;
let Word = ["I","M", "A","G","I","N","A","R","Y", "P", "R","A","C","T","I","C","E","S"]
//
function setup() {
  createCanvas(windowWidth, windowHeight/2);
  colorMode(HSB, 360, 100, 100, 100);
  background(228, 21, 65);
  textSize(width/100);
  textAlign(CENTER, CENTER);
  numBeats = Word.length;
}
let rot = 0;
function draw() {
  //rgb(131, 138, 165)
  background(228, 21, 65, 10);
  let dimension;
  if(width<height){
    dimension = width;
  }else{
    dimension=height;
  }
  let x = dimension/(numBeats*4);
  radius = x*20; //+ sin + (frameCount*0.5);
  
  translate(width/2, height/2);
  let mDist = dist(mouseX,mouseY, width/2, height/2);
  mDist = constrain(mDist,0,dimension/3);
  dir = map(mDist, 0, dimension/3, 3, 1);
  x/=constrain(dir,1,100);

  rot +=  0.015 * (dir)
  push();
  for (let i = 0; i < numBeats; i++){
    rotate(360/numBeats);
    push();
    
    var n = noise(frameCount * nScl, i);
    //middle of canvas 
    rotate(rot);
    strokeWeight(2);
    stroke(255);
    noFill();
    let ofset = sin(radians( ((((rot + i)%numBeats))/numBeats)*180)) * numBeats;
    ellipse(ofset * x + dir * nAmp*n+ 50, radius/4, radius/4);
    text(Word[i], ofset * x + dir * nAmp*n+ 50, radius/4,);
    pop();
  } 
  x++;
  pop();
  /*
  console.log(document.URL);
  if(document.URL!="https://imaginarypractices.studio/"){
    fill(255);
    let n = sin(frameCount * nScl*nScl);
    n = map(n, 0,1,0.46,0.47);
    text("\/ SCROLL DOWN \/",  0,height*n);

    console.log("done");
  }
  */
}
