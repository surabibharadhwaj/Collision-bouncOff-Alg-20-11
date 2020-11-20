var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3; gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100, 300, 50, 80);
  gameObject1.shapeColor = "orange";

  gameObject2 = createSprite(200, 300, 50, 80);
  gameObject2.shapeColor = "orange";

  gameObject3 = createSprite(300, 300, 50, 80);
  gameObject3.shapeColor = "orange";

  gameObject4 = createSprite(400, 300, 50, 80);
  gameObject4.shapeColor = "orange";

 
}

function draw() {
  background("white");  
  movingRect.x=World.mouseX;
  movingRect.y = World.mouseY;
 
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  drawSprites();
}


