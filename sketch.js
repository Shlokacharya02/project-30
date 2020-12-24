const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16,block17,block18;
var polygon,polygonImg;
var slingShot;



function preload()
{
polygonImg = loadImage("polygon.png");
}


function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600,600,2000,20);
stand1 = new Ground(800,500,300,20);
stand2 = new Ground(1200,370,300,20);
polygon = Bodies.circle(50,200,20);
World.add(world,polygon)

slingShot = new Slingshot(this.polygon,{x:300,y:200})


//level three
block1 = new Block(730,235,30,40);
block2 = new Block(760,235,30,40);
block3 = new Block(790,235,30,40);
block4 = new Block(820,235,30,40);
block5 = new Block(850,235,30,40);
//level two
block6 = new Block(760,195,30,40);  
block7 = new Block(790,195,30,40);
block8 = new Block(820,195,30,40);
//top
block9 = new Block(790,155,30,40);



//level three
block10 = new Block(1130,235,30,40);
block11 = new Block(1160,235,30,40);
block12 = new Block(1190,235,30,40);
block13 = new Block(1220,235,30,40);
block14 = new Block(1250,235,30,40);
//level two
block15 = new Block(1160,195,30,40);  
block16 = new Block(1190,195,30,40);
block17 = new Block(1220,195,30,40);
//top
block18 = new Block(1190,155,30,40);










}

function draw() {
    rectMode(CENTER);
    background("black");
    Engine.update(engine);

    ground.display();
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
    
    stand1.display();
    stand2.display();
    slingShot.display();

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
   
  }

  function mouseDragged(){

Matter.Body.setPosition(this.polygon,{x: mouseX,y: mouseY});
  }

  function mousePressed(){

slingShot.fly();

  }

  function keyPressed(){
if(keyCode === 32){

  slingShot.attach(this.polygon);
}


  }