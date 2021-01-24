
var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(300, 200, 80, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true
  movingRect=createSprite(700, 200, 50, 80);
  movingRect.shapeColor="green";
  movingRect.debug=true;
}

function draw() {
  background(255,55,255); 
  movingRect.x=mouseX
  movingRect.y=mouseY; 
  if (movingRect.x -fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2
    && movingRect .y - fixedRect.y < movingRect.height/2 +fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 +fixedRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  drawSprites();
}