let gif;

function preload(){
  gif=loadImage('assets/background.gif');



}


function setup() {// runs ounces
  createCanvas(windowWidth, windowHeight*2);
  fill("red");
  strokeWeight(1);
}

function draw() {
background (255)
var num = 9; // number of squares
var sideLen = windowWidth/num; //side length of square

  for (var x = 0; x < windowWidth; x = x + sideLen) {//squares in x direction
    for (var y = 0; y < windowHeight*2; y = y + sideLen) {// in y direction
image(gif, x, y, windowWidth*0.98/num, windowWidth*0.98/num);
  }
  function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
  }

}

  // quad(x, y,
  //      x + 300, y,
  //      x + 300, y + 300,
  //      x, y + 300);



  // noLoop();
