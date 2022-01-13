function setup() {
  createCanvas(500,500);
  background(220);
}
  
  var x = 0;
  var y = 0;
  var h = -50;

function draw() {
    translate(0,0);
    for(var i = 0; i < 10; i ++){
      triangle(x,y,x + 50,y,x + 50,y + 50)
      triangle(x,y,x,y + 50,x + 50,y + 50)
      x += 50;
      y = 0;
    }
    x = 0;
    y = 0;
    translate(0,50);
    for(var a = 0; a < 10; a ++){
      triangle(x,y,x + 50,y,x + 50,y + 50)
      triangle(x,y,x,y + 50,x + 50,y + 50)
      x += 50;
    }
    x = 0;
    y = 0;
    translate(0,50);
    for(var b = 0; b < 10; b ++){
      triangle(x,y,x + 50,y,x + 50,y + 50)
      triangle(x,y,x,y + 50,x + 50,y + 50)
      x += 50;
    }
    x = 0;
    y = 0;
    translate(0,50);
    for(var c = 0; c < 10; c ++){
      triangle(x,y,x + 50,y,x + 50,y + 50)
      triangle(x,y,x,y + 50,x + 50,y + 50)
      x += 50;
    }
    x = 0;
    y = 0;
    translate(0,50);
    for(var d = 0; d < 10; d ++){
      triangle(x,y,x + 50,y,x + 50,y + 50)
      triangle(x,y,x,y + 50,x + 50,y + 50)
      x += 50;
    }
    x = 0;
    y = 0;
    translate(0,50);
    for(var e = 0; e < 10; e ++){
      triangle(x,y,x + 50,y,x + 50,y + 50)
      triangle(x,y,x,y + 50,x + 50,y + 50)
      x += 50;
    }
    x = 0;
    y = 0;
    translate(0,50);
    for(var f = 0; f < 10; f ++){
      triangle(x,y,x + 50,y,x + 50,y + 50)
      triangle(x,y,x,y + 50,x + 50,y + 50)
      x += 50;
    }
    x = 0;
    y = 0;
    translate(0,50);
    for(var g = 0; g < 10; g ++){
      triangle(x,y,x + 50,y,x + 50,y + 50)
      triangle(x,y,x,y + 50,x + 50,y + 50)
      x += 50;
    }
    x = 0;
    y = 0;
    translate(0,50);
    for(var h = 0; h < 10; h ++){
      triangle(x,y,x + 50,y,x + 50,y + 50)
      triangle(x,y,x,y + 50,x + 50,y + 50)
      x += 50;
    }
    x = 0;
    y = 0;
    translate(0,50);
    for(var j = 0; j < 10; j ++){
      triangle(x,y,x + 50,y,x + 50,y + 50)
      triangle(x,y,x,y + 50,x + 50,y + 50)
      x += 50;
    }
    x = 0;
    y = 0;
    translate(0,50);
    for(var k = 0; k < 10; k ++){
      triangle(x,y,x + 50,y,x + 50,y + 50)
      triangle(x,y,x,y + 50,x + 50,y + 50)
      x += 50;
    }
    x = 0;
    y = 0;
}
