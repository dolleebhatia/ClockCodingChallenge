

function gear(x,y,vertexNum,rOut,rIn,c){
  this.pos = createVector(x, y);
  //this.r = r;
  this.vertexNum = vertexNum;
  this.rIn = rIn;
  this.rOut = rOut;
  this.c = c;

  this.update = function(){
    push();
      translate(this.pos.x,this.pos.y);
      rotate(radians(c));
      beginShape();
        for (var i = 0;i < this.vertexNum;i++) {
          if (i%4==2 || i%4==3) {
            var r = this.rOut;
          }
          else {
            var r = this.rIn;
          }
          //vertex(r*cos(degrees(radians(360*i/this.vertexNum))), r*sin(degrees(radians(360*i/this.vertexNum))));
          vertex(r*cos(360*i/this.vertexNum), r*sin(360*i/this.vertexNum));

        }
      endShape(CLOSE);
    pop();
  }
}
