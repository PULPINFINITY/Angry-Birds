const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var boxob,groundob

function setup() {
  createCanvas(1200,400);
  engine = Engine.create()
  world = engine.world
  boxob=new box(700,350,70,70)
  groundob=new ground(600,380,1200,20)
  box2= new box(920,350,70,70)
  pig1= new pig(810,350,50,50)
  bird1= new bird(100,100,50,50)
  log1= new log(810,330,300,15,PI/7)
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  boxob.display()
  groundob.display()
  box2.display()
  pig1.display()
  bird1.display()
  log1.display()
  drawSprites();
}

