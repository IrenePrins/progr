/// <reference path="gameElement.ts" />

class Banana extends GameElement{

    
    constructor(x : number, y : number){
        super( x, y, "banana")
        
        
    }
    
    public update() : void{
        

    }

    public getRectangle(){
        return this.div.getBoundingClientRect()
    }

    public removeBanana(){
        this.div.remove()
    }

   
}