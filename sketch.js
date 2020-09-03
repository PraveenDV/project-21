var bullet,wall;

var speed,weight,thickness

var object1,object2;

function setup() {
  createCanvas(1600,400);

  speed=random(40,50);
  weight=random(30,52);
  thickness=random(22,83);



  bullet=createSprite(50, 200, 30, 30);
  wall=createSprite(1250,200,thickness,height/2);

  

  bullet.velocityX=speed;
}

function draw() {
  background(0);
  

  if(Istouching(bullet,wall)){
    bullet.velocityX=0;
    var damage=05*weight*speed*speed/(thickness*thickness*thickness);
  
  if(damage<10){
    wall.shapeColor="green";
  }
  if(damage>10){
    wall.shapeColor="red";
  }
  }
  drawSprites();
}

function Istouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 && 
     object2.x-object1.x<object2.width/2+object1.width/2){
       return true;
     }else{
       return false;
     }
}