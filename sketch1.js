
// Matter.Engine,Matter.bodies,Matter.world

// Namespacing 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box;


function setup() {
  createCanvas(800,400);
  engine = Engine.create(); // engine = Matter.Engine.create();
  world = engine.world;

  
  console.log(box);   
}

function draw(){
  background(0);  
  Engine.update(engine);
  
}