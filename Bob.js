class Bob
{
    constructor(x,y,r)
  


{
   var options =
     { 
         density:1.2,
         restitution:0.8,
         isStatic:false
         
         } 


this.body=Bodies.circle(x,y,r,options)

this.x=x
this.y=y
this.r=r
World.add(world,this.body)
}

display()
{
   
    push ()
   translate (this.body.position.x,this.body.position.y)
 //  rotate (angle)
    strokeWeight(3)
    fill (255,0,255)
    ellipseMode(RADIUS)
   ellipse(0,0,this.r,this.r)
    
    pop ();

}
}