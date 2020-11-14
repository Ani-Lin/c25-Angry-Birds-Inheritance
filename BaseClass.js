class BaseClass {
    constructor(x,y,width,height){

        // properties of the box class  
        var options = {
           restitution : 0.8,
           friction : 1.0,
           density : 1.0
       }   
  
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.w=width;
       this.h=height;
       this.image = loadImage('sprites/base.png');
       World.add(world,this.body);
  
    }

    display() {
        var pos=this.body.position;
        var angle = this.body.angle;
        
        push()
        angleMode(RADIANS)
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}