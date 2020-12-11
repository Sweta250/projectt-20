var car,wall;
var speed,weight;







function setup() {
  createCanvas(1600,400);

  speed=random(20,50);
weight=random(400,1500);

  car=createSprite(400, 200, 20, 20);
  car.velocityX=speed;
  wall=createSprite(1200,200,60,80);
  wall.shapeColor="black";
}

function draw() {
  background("pink"); 
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*wieght*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0)
    }
    if(deformation>100 && deformation<180){
      car.shapeColor=color(230,230,0)
    }

    if(deformation<100){
      car.shapeColor=color(0,255,0)
    }

  }
  drawSprites();
}