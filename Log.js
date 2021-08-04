class Log{
    constructor(x,y,w,h,angle){
        var option={
            restitution:0.8,
            density:1.0,
            friction:1.0
        
        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.width=w
        this.height=h
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
     }
     
     display(){
         var pos=this.body.position
         push()
         rectMode(CENTER)
         rect(pos.x,pos.y,this.width,this.height)
         pop()
     }
     
     } 
    
