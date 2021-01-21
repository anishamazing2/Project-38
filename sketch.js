
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, banana1, banana2, banana3;
var bananaGroup, obstacleGroup, banana1Group, banana2Group, banana3Group ;
var score;
var survivalTime = 0;
var ground, invisibleGround;
var score = 0;
var bananaCount = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var GAMEOVER, GAMEOVER_IMAGE;

function preload(){
  
  //loading the running image for the monkey
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  //making the banana image
  bananaImage = loadImage("banana.png");
  
  //creating the rock image or obstacle image
  obstacleImage = loadImage("obstacle.png");
  
  //creating the GAMEOVER animation
  GAMEOVER_IMAGE = loadImage("GAMEOVER_MONKEYS.png");
 
}



function setup() {
  createCanvas(600,400);
  
  //creating the monkey
  monkey=createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  //creating the obstacleGroup and FoodGroup
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  banana1Group = createGroup();
  banana2Group = createGroup();
  banana3Group = createGroup();
  //creating the ground
  ground = createSprite(400,350,1200,10);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  ground.shapeColor = "green";
  console.log(ground.x);
  
  //creating the GAMEOVER SPRITE
  GAMEOVER= createSprite(300,200, 10, 10);
  GAMEOVER.addImage(GAMEOVER_IMAGE);
  
  GAMEOVER.scale = 1;
  
}


function draw() {
  background("lightblue");
  
  if(gameState === PLAY){
    
  
  if (ground.x < 0){
     ground.x = ground.width/2;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  if(keyDown("space")&& monkey.y >= 314) {
        monkey.velocityY = -16;
        
    }
  if(monkey.isTouching(bananaGroup)){
    score = score+1;
    bananaGroup.destroyEach();
  }
  if(monkey.isTouching(banana1Group)){
    score = score+1;
    banana1Group.destroyEach();
  }
  if(monkey.isTouching(banana2Group)){
    score = score+1;
    banana2Group.destroyEach();
  }
  if(monkey.isTouching(banana3Group)){
    score = score+1;
    banana3Group.destroyEach();
  }
  if(monkey.isTouching(obstacleGroup)){
    gameState = END;
    
  }
  stroke("white");
  textSize(10);
  fill("white");
  text("Score: " + score, 500,50);
  
  stroke("white");
  textSize(10);
  fill("white");
  survivalTime = World.seconds;
  text("Survival Time: " + survivalTime, 10,50);
  GAMEOVER.visible = false;
  
  
  
  
  
  spawnObstacles();
  spawnbananas();
  
  }
  else 
    if(gameState === END){
      
      GAMEOVER.visible = true;
      monkey.visible = false;
      
      
      
      obstacleGroup.destroyEach();
      bananaGroup.destroyEach();
      banana1Group.destroyEach();
      banana2Group.destroyEach();
      banana3Group.destroyEach();
      bananaGroup.setVelocityXEach(0);
      bananaGroup.setVelocityXEach(0);
      banana1Group.setVelocityXEach(0);
      banana2Group.setVelocityXEach(0);
      banana3Group.setVelocityXEach(0);
    
    
      
    
    
  }
  monkey.collide(ground);
  drawSprites();
}


function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,328,10,40);
   obstacle.velocityX = -6;
   
    obstacle.addImage(obstacleImage);
  
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 150;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}
function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount == 1) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    bananaCount = bananaCount + 1;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  if (frameCount%240 === 0) {
    banana1 = createSprite(600,120,40,10);
    banana1.y = Math.round(random(120, 200));
    banana1.addImage(bananaImage);
    banana1.scale = 0.1;
    banana1.velocityX = -3;
    bananaCount = bananaCount + 1;
    
     //assign lifetime to the variable
    banana1.lifetime = 200;
    
    //adjust the depth
    banana1.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    banana1Group.add(banana1);
  }
  if (frameCount%240 == 80) {
    banana2 = createSprite(600,120,40,10);
    banana2.y = Math.round(random(120, 200));
    banana2.addImage(bananaImage);
    banana2.scale = 0.1;
    banana2.velocityX = -3;
    bananaCount = bananaCount + 1;
    
     //assign lifetime to the variable
    banana2.lifetime = 200;
    
    //adjust the depth
    banana2.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    banana2Group.add(banana2);
  }
  if (frameCount%240 === 160) {
    banana3 = createSprite(600,120,40,10);
    banana3.y = Math.round(random(120, 200));
    banana3.addImage(bananaImage);
    banana3.scale = 0.1;
    banana3.velocityX = -3;
    banana3Count = bananaCount + 1;
    
     //assign lifetime to the variable
    banana3.lifetime = 200;
    
    //adjust the depth
    banana3.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    banana3Group.add(banana3);
  }
}




