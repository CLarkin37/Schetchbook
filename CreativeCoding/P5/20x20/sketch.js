function setup() {
  // runs ounces
  createCanvas(windowWidth, windowHeight);
  fill("red");
  strokeWeight(1);
}

function draw() {
  
var num = 20; // number of squares
  
  var sideLen = windowWidth/num; //side length of square
  
  for (var x = 0; x < windowWidth; x = x + sideLen)
{//squares in x direction
    
  for (var y = 0; y < windowWidth; y = y + sideLen)
{//squares in y direction
    
  quad(x, y, 
       x + 300, y, 
       x + 300, y + 300, 
       x, y + 300);
  }
  
  }
  
  
  noLoop();
}