class Pig {
    constructor(x,y){

      // properties of the box class  
      var options = {
         restitution : 0.9,
         friction : 1.0,
         density : 1.0
     }   

     this.body=Bodies.rectangle(x,y,50,50,options);
     this.w=50;
     this.h=50;

     World.add(world,this.body);

    }

    display() {
        var pos=this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(5);
        stroke ("green")
        fill ("blue");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop()
    }

}