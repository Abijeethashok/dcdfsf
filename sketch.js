const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Composites = Matter.Composites;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform1 = new Ground(900, 140, 200, 10);

    ground = new Ground(600,height,1200,20);

    platform = new Ground(150, 305, 300, 170);

    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});

    block = new Box(900,130,50,50)
    block1 = new Box(925,130,50,50)
    block2 = new Box(875,130,50,50)
    block3 = new Box(910,100,50,50)
    block4 = new Box(890,100,50,50)
    block5 = new Box(900,70,30,30)
    block6 = new Box(900,360,50,50)
    block7 = new Box(875,360,50,50)
    block8 = new Box(925,360,50,50)
    block9 = new Box(950,360,50,50)
    block10 = new Box(850,360,50,50)
    block11 = new Box(890,340,40,40)
    block12 = new Box(910,340,40,40)
    block13 = new Box(930,340,40,40)
    block14 = new Box(870,340,40,40)
    block15 = new Box(880,325,30,30)
    block16 = new Box(900,325,30,30)
    block17 = new Box(920,325,30,30)
    block18 = new Box(905,315,20,20)
    block19 = new Box(895,315,20,20)
    block20 = new Box(900,310,15,15)
}


function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();

    block.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();

    platform1.display();

    bird.display();

    platform.display();
    
    slingshot.display();  

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}