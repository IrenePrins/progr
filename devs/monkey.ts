/// <reference path="gameElement.ts" />

class Monkey extends GameElement{
    
    constructor(x : number, y : number){

        super( x, y, "monkey")
        
    }

    public update() : void{

    }

    public getRectangle(){
        return this.div.getBoundingClientRect()
    }
}