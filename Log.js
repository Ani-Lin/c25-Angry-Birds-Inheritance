class Log {
    constructor(x,y,height,angle){

      // properties of the box class  
      var options = {
         'restitution' : 1.0,
         'friction' : 1.0,
         'density' : 1.0
     }   

     this.body=Bodies.rectangle(x,y,20,height,options);
     Matter.Body.setAngle(this.body,angle);
     this.w=20;
     this.h=height;

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
        fill ("white");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop()
    }

}