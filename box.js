class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
  display(){
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
  }
  };
  