const Engine = Matter.Engine //namespace
const World = Matter.World
const Bodies = Matter.Bodies
var eng , world 
var grd 
var box1 , box2 , box3 , box4 , box5 
var log1 , log2 , log3 , log4
var pig1 , pig2
var bird
function setup() {
  createCanvas(1200,400);
 eng=Engine.create();
 world=eng.world;
 grd=new Ground(600,400,1200,20)
 box1=new Box(700,320,70,70)
 box2=new Box(920,320,70,70)
 box3=new Box(700,240,70,70)
 box4=new Box(920,240,70,70)
 box5=new Box(810,160,70,70)
 log1=new Log(810,260,20,300,PI/2)
 log2=new Log(810,180,20,300,PI/2)
 log3=new Log(760,120,20,150,PI/7)
 log4=new Log(870,120,20,150,-PI/7)
 
  pig1=new Pig(810,350,50,50)
  pig2=new Pig(810,220,50,50)
}

function draw() {
  background("white");
  Engine.update(eng) 
  grd.display() 
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  log1.display()
  log2.display()
  log3.display()
  log4.display()
  pig1.display()
  pig2.display()

}