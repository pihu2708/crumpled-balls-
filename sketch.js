const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(900,500);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground1 = new Ground(200,400,1500,20)
 wall = new Ground(550,339,20,100)
 wall2 = new Ground(700,339,20,100)

  ball= new Ball (200,20,30)

}



  

  


function draw() {
  background(51);
  Engine.update(engine);
  fill("yellow")
  ground1.display()
  ball.display()
  wall.display()
  wall2.display()
}
function keyPressed() { 
  console.log(keyCode)
  if (keyCode === RIGHT_ARROW) { 
    console.log(ball.body)
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0.1,y:-0.1}); 
  } 
}
