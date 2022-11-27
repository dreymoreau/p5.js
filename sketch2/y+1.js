var circleX = 50;
var circleY = 20;
function setup() {
  createCanvas(400, 400);
}

function draw() {
//   background
  background(80,0, 90);
  
//   ellipse
  fill(20, 200, 50)
  ellipse(circleX, 30, 50, 50)
  circleX = circleX + 1;
  fill(60, 50, 150)
  ellipse(circleX, 90, 50, 50)
  circleX = circleX + 1;
  fill(circleY, 50, 50)
  ellipse(circleX , 150, 50, 50)
  circleX = circleX + 1;
  fill(200, 50, circleY)
  ellipse(circleX, 210, 50, 50)
  circleX = circleX + 1;
  fill(20, 10, 150)
  ellipse(circleX, 270, 50, 50)
}
