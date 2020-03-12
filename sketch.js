var fixedRect, movingRect;
var ob1, ob2, ob3, ob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  ob1 = createSprite(100,100,50,50);
  ob1.shapeColor = "yellow";
  ob2 = createSprite(100,600,50,50);
  ob2.shapeColor = "red";
  ob3 = createSprite(100,300,50,50);
  ob4 = createSprite(100,400,50,50);

  ob2.velocityY = -5;
  ob1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(ob1,ob2);

  drawSprites();
}