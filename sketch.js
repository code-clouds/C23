const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;

var tower;
var cannon;
var ground;
var angle;

function preload(){
    bg = loadImage("assets/background.gif");

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    angle = -PI/4
    ground = new Ground(0, height-1, width*2, 1); 
    tower = new Tower(150,350,160,310);
    cannon = new Cannon(180, 110, 100, 50, angle);
}

function draw(){
    background(0);
    image(bg, 0, 0, width, height);
    Engine.update(engine);
    ground.display();
    tower.display();
    cannon.display();
   
}
