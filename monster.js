class Monster{
    constructor(x, y, r) {
        var options = {
           'frictionAir':1,
            'density':1.0
        }
        this.x=x;
        this.r=r;
        this.y=y;
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
       
        this.image=loadImage("Monster-01.png")
       
        World.add(world, this.body);
      }
     
      display(){
       // var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
       // rotate(angle);
      image(this.image,0, 0,this.r+150,this.r);
        pop();
      }
}