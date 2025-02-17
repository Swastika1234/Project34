class Ball{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("hero.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image( this.image,0, 0, this.width+150, this.height+50);
        pop();
      }
}