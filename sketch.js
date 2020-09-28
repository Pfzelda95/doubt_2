
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ball,ballsprite,ground;
var d1,d2,d3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	var options = {

		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	var options2 = {
		isStatic:true
	}

	ballsprite = createSprite(width/2,80,10,10);
	ball = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false,friction:0.5}); 
	
	//Create the Bodies Here.
	ground = new box(400,650,800,5,options2);
	d1 = new box(600,602,5,80,options2);
	d2 = new box(670,602,5,80,options2);
	d3 = new box(635,645,70,5,options2);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  d1.display();
  d2.display();
  d3.display();
  ground.display();
  ballsprite.x = ball.position.x;
  ballsprite.y = ball.position.y;


	keyPressed();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.body.applyForce(ball.body,ball.body.position,{x:85,y:-85});




	}





}




























