
var gearSe1;
var gearSe2;
var gearMn1;
var gearMn2;
var img; //watch image
var img2; //seconds hand logo
var c;

function mousePressed(){
  c = mouseX; //debug
}

function preload(){
  img = loadImage('hb2.png');
  img2 = loadImage('seconds2.png')
}

function setup(){
  createCanvas(800, 800);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw(){
  background(10);
  let hr = hour();
  let mn = minute();
  let se = second();
  let dt = day();
  let end1 = map(se, 0, 60, 0, 360);
  let end2 = map(mn, 0, 60, 0, 360);
  let end3 = map(hr%12, 0, 12, 0, 360);

push();
  translate(height/2, width/2);
  image(img, 20, 1, 500, 550);
  rotate(-90);

  strokeWeight(10);
  stroke(10);
  //arc (0, 0, 300, 300, 0, 360);

  //Draw gears
  strokeWeight(1);
  stroke(200,200);
  gearSe1 = new gear(0,0,120,40,29, -end1*360);
  fill(0);
  gearSe1.update();
  gearSe2 = new gear(-56,-68,120,50,43, end1*360);
  gearSe2.update();


  stroke(200,200);
  fill(0,255);
  ellipse(0,0,15,15);
  ellipse(-56,-68,80,80);
  stroke(200,180);
  rect(-56,-108,3,79);
  push();
  rotate(70);
  rect(-84,68,3,-50);
  pop();
  push();
  rotate(120);
  rect(-30,44,3,79);
  pop();
  fill(192);
  ellipse(-56,-68,30,30);
  noFill();
  gearMn2 = new gear(41,52,240,28,27,end1*360);
  gearMn1 = new gear(41,52,240,23,20,mn*360);
  stroke(192,192,192);
  gearMn1.update();
  gearMn2.update();

  //noStroke();
  fill(0,255);
  //ellipse(41,52,46,46);



  //Hour Markers and Date

  for (var i = 0; i<12; i++){
    noStroke();
    fill(255,255,0);
    rectMode(CENTER);
    rect (148,0,10,3)
    if (i==3){
      //noFill();
      stroke(192,192,192);
      noFill();
      strokeWeight(1);
      ellipse(120,1,34,34);
      textSize(17);
      noStroke();
      fill(192,190);
      text(dt, 110, 7);
    }
    rotate(30);
  }

    //Draw Minutes Hand
    push();
      rotate(end2);
      strokeWeight(6);
      stroke(255,255,0);
      line(0,0,130,0);
    pop();

    //Draw Hours Hand
    push();
      rotate(end3);
      strokeWeight(10);
      stroke(255,255,0);
      line(0,0,65,0);
    pop();

  //Draw Seconds Hand
  push();
    rotate(end1);
    strokeWeight(1);
    stroke(255,0,0);
    rectMode(CENTER);
    stroke(255,0,0);
    strokeWeight(2);
    line(-50,0,130,0);
    image(img2, -63 , 0, 25, 25);

    strokeWeight(1);
    stroke(255,0,0);
    fill(255);
    triangle(126,-3,126,4, 135,0 );
    fill(255,0,0);
    ellipse (0,0,15,15);
    stroke(255,255);
    strokeWeight(1);

    noStroke();
    fill(255,255);
    //rect(106,0,42,5);
    fill(0);
    ellipse (0,0,8,8);
  pop();

pop();

noFill();
stroke(255);


// //debug
// strokeWeight(2);
// fill(255);
// if (mn < 10){mn = '0' + mn;}
// if (hr<10){hr = '0' + hr;}
// if (se < 10){se = '0' + se;}
// text(hr + ':' + mn + ':' + se, 10,20);

}
