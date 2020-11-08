
var ground;
var monkey , monkey_running;
var banana,bananaGroup ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;
var monketGroup;
 var groundGroup;
function preload(){
  
  
  monkey_running =                    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   ground=createSprite(400,350,900,10);
  ground.x=ground.width/2;
  obstacleGroup= new Group();
  foodGroup= new Group();
  monkeyGroup= new Group();
  groundGroup= new Group();
   monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
   monkey.collide(ground);
}


function draw() {
  survivalTime=0
 background("white");  
  if (keyDown("space")) {
    monkey.velocityY=-4;
  }
  console.log(ground.x);
   monkey.velocityY=monkey.velocityY+0.8;
  var survivalTime=0;
  monkey.collide(ground);
  stroke("white");
  textSize(20);
  fill("white");
  text("score "+ score ,500,50);
if (monkey.isTouching(obstacleGroup)) {
  monkeyGroup.add(monkey);
  monkeyGroup.destroyEach();
  obstacleGroup.destroyEach();
  foodGroup.destroyEach(); 
   groundGroup.add(ground);
  groundGroup.destroyEach();
  
  
  
}
 survivalTime= survivalTime + Math.round(frameCount/60);

  
  stroke("black");
  textSize(20);
  fill("black");
 
  text("survivalTime :"+ survivalTime , 100,50 ); 
   
  if (monkey.isTouching(foodGroup)) {
    foodGroup.destroyEach();
  }
  Obstacle();
  Food();
  drawSprites();
}
  
  
  
 

function Food(){
  if  (World.frameCount%80===0){
      banana = createSprite(400,Math.round(random(20, 300)), 10, 10);
    banana.addImage(bananaImage);
  
    banana.velocityX=-3;
    banana.scale=0.1;
    banana.lifetime=130;
    foodGroup.add(banana);
  
  }
}
function Obstacle(){
  if  (World.frameCount%300===0){
    obstacle = createSprite(400,Math.round(random(20, 300)), 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.lifetime=130;
    obstacle.velocityX=-3;
    obstacle.scale=0.1;
    obstacleGroup.add(obstacle);
  
  }
}



