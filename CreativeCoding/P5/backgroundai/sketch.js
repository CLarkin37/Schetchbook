
let img;

function preload () {
img = loadImage ('assets/background.png')
}

function setup() {
  // runs ounces
  createCanvas(720, 720);
  fill("red");
  strokeWeight(8);
}

function draw() {

background(220);

translate (60,60);

  for (var x = 0; x < 600; x = x + 300) {
    for (var y = 0; y < 600; y = y + 300) {

    image (img, 0, 0)
  }
  }  // quad(x, y,
  //      x + 300, y,
  //      x + 300, y + 300,
  //      x, y + 300);
  //
  //
  noLoop();
}
