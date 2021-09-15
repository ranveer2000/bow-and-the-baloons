var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage_balloonImage ,blue_balloonImage, backgroundImage;
var arrowCount;
var v;
var red,green,blue,pink;
var score;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  arrow = createSprite(380,100000);
  arrow.addImage(arrowImage);
  arrow.scale = 1;

  v = createSprite(440,200,5,400)
  v.visible = false;

  red = createSprite(10000,1000, 10, 10);
  red.addImage(red_balloonImage);
  pink = createSprite(10000,1000, 10, 10);
  pink.addImage(pink_balloonImage);
  green = createSprite(10000,1000, 10, 10);
  green.addImage(green_balloonImage);
  blue = createSprite(10000,1000, 10, 10);
  blue.addImage(blue_balloonImage);
  score = 0;
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  burstBalloon()
  balloon()
   // release arrow when space key is pressed
  if (keyWentUp("space")) {
    shootArrow();
  }
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    if (select_balloon == 2) {
      blueBalloon();
    }
    if (select_balloon == 3) {
      pinkBalloon();
    }
    if (select_balloon == 4) {
      greenBalloon();
    }
  }
  drawSprites();
  fill("black")
  text("Score:"+score,180,10)
}


// Creating  arrows for bow
 function shootArrow() {
  arrow= createSprite(380, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.scale = 0.3;
}
function burstBalloon(){
  if (arrow.isTouching(red)){
red.remove();
score += 10;
  }
  if (arrow.isTouching(green)){
    green.remove();
    score += 10;
      }
      if (arrow.isTouching(blue)){
        blue.remove();
        score += 10;
          }  
          if (arrow.isTouching(pink)){
            pink.remove();
            score += 10;
              }  
}

function redBalloon() {
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.scale = 0.1;
if (arrow.isTouching(red)){
arrow.remove();
arrowCount -=1
}
}

function blueBalloon() {
  //write code for spwaning blue balloons
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.scale = 0.1;
  if (arrow.isTouching(blue)){
    arrow.remove();
    arrowCount -=1
    }
}

function greenBalloon() {
  //write code for spwaning green balloons
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.scale = 0.1;
  if (arrow.isTouching(green)){
    arrow.remove();
    arrowCount -=1
    }
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.scale = 1.2;
  if (arrow.isTouching(pink)){
    arrow.remove();
    arrowCount -=1
    }
}

function balloon(){
  if (red.isTouching(v)){
    red.remove();
if (score != 0) { 
score -= 10;
}
  }
  if (blue.isTouching(v)){
    blue.remove();
    if (score != 0) { 
      score -= 10;
      }
      }
      if (pink.isTouching(v)){
        pink.remove();
        if (score != 0) { 
          score -= 10;
          }
          }
          if (green.isTouching(v)){
            green.remove();
            if (score != 0) { 
              score -= 10;
              }
              }
}