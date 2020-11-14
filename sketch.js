
// Matter.Engine,Matter.bodies,Matter.world

// Namespacing 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var angrybird;
var background,backgroundImage;

function preload(){
  backgroundImage=loadImage('sprites/bg.png');
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create(); // engine = Matter.Engine.create();
  world = engine.world;
  //test_box= new Box(100,300,20,300);
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);
  ground = new Ground(600,height,1200,20);

  pig1 = new Pig(810,350);
  pig2 = new Pig(810,220);

  log1 = new Log(810,260,300,PI);
  log2 = new Log(810,180,300,PI);
  log3 = new Log(750,120,150,PI/4);
  log4 = new Log(880,120,150,-PI/4);

  //test_log=new Log(300,220,30,PI);

  angrybird = new Bird(100,100)
  console.log(box);   
}

function draw(){
  background(backgroundImage);  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  //test_box.display();
  ground.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  //test_log.display();

  angrybird.display();
}