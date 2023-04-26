var diam1=10;
var r=203;
var g=50;
var b=181;

function setup() {
    createCanvas (500,500) // put setup code here
}
function draw() {
  // put drawing code here
background (r,g,181);
fill(106,50,159);
ellipse(250,250,diam1,diam1);
ellipse(50,100,diam1,diam1);
ellipse(450,100,diam1,diam1);
ellipse(50,450,diam1,diam1);
ellipse(450,450,diam1,diam1);
r=mouseX;
b=mouseY;
}
function mousePressed() {
diam1=diam1+5;
}