const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world; 
var ground;
var ball;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world  = engine.world;
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  var ball_options = {
    restitution: 1.0
  }
  ball   = Bodies.circle(mouseX,70, 15,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(mouseX,ball.position.y,15,15);
}