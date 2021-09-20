const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4, log5;
var pig1, pig2;
var bird1;

function setup(){
    var canvas = createCanvas(960,600);
    engine = Engine.create();
    world = engine.world;

  //Suelo
    ground = new Ground(480,height,960,40);
  //Nivel1
    box1 = new Box(620,320,70,70);
    pig1 = new Pig(700,350);
    box2 = new Box(780,320,70,70);
    log2 = new Log(700,260,230,PI/2);
  //Nivel2
    box3 = new Box(620,240,70,70);
    pig2 = new Pig(700,220);
    box4 = new Box(780,240,70,70);
    log3 = new Log(700,180,230,PI/2);
  //Nivel3
    box5 = new Box(700,160,70,70);
    log4 = new Log(645,120,150,PI/7);
    log5 = new Log(755,120,150,-PI/7);
  //Pajaro piu piu
    bird1 = new Bird(50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
  //Suelo
    ground.display();
  //Nivel1
    box1.display();
    pig1.display();
    box2.display();
    log2.display();
  //Nivel2
    box3.display();
    pig2.display();
    box4.display();
    log3.display();
  //Nivel3
    box5.display();
    log4.display();
    log5.display();
  //Pajaro piu piu
    bird1.display();
}
