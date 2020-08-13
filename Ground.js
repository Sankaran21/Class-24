class Ground{
  constructor(x,y,width,height){
    var option={
      isStatic:true 
    }
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
  }  
  display(){
    var posit = this.body.position;
    rectMode(CENTER);
    fill("brown")
     rect(posit.x,posit.y,this.width,this.height);
  }
}