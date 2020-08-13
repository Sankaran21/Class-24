const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2, box3, box4, box5;
var ground;
var Pig1, Pig2,Pig3;
var Log1,log3,log4,log5;
var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

    Pig1 = new Pig(810,350);

    Log1 = new log(810,260,300,PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    Pig3 = new Pig(810, 220);

    log3 =  new log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new log(760,120,150, PI/7);
    log5 = new log(870,120,150, -PI/7);
    
    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    Pig1.display();
    Log1.display();

    box3.display();
    box4.display();
    Pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
     bird.display();
    
   console.log(mouseX, mouseY);
}