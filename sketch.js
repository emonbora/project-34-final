
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint

Constraint =Matter.Constraint
var bob1,bob2,bob3,bob4,bob5
var roof1
var rope1,rope2,rope3,rope4,rope5
var mConstraint
var canvas

function preload()
{
	
}

function setup() {
	
	
	canvas = createCanvas(windowWidth/2, windowHeight/1.5)
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options)
	World.add(world,mConstraint)
 
	//Create the Bodies Here.
	bobDiameter = 50
	bob1 = new bob(340,400,"black")
	bob2 = new bob(390,400,"blue")
	bob3 = new bob(440,400,"red")
	bob4 = new bob(490,400,"green")
	bob5 = new bob(540,400,"pink")
	roof1 = new roof(425,250,400,10)
	rope1 = new rope(bob1.body,{x:340,y:200})
	rope2 = new rope(bob2.body,{x:390,y:200})
	rope3 = new rope(bob3.body,{x:440,y:200})
	rope4 = new rope(bob4.body,{x:490,y:200})
	rope5 = new rope(bob5.body,{x:540,y:200})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display();
  bob3.display()
  bob4.display()
  
  rope1.display();
  rope2.display()
  rope3.display()
  rope4.display()
  bob5.display();
  rope5.display();
  
 
}

/*function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}*/

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}

