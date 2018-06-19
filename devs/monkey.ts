/// <reference path="gameElement.ts" />

 class Monkey extends GameElement {

    keyObjects = new Array(255)
    private speedLeft : number = 0
    private speedRight : number = 0
    private speedDown : number = 0
    private speedUp : number = 0

    // private speedX : number = 0
    // private speedY : number = 0

    
    constructor(x : number, y : number){
        super( x, y, "monkey")

        this.div.classList.add("monkey")
       
        document.body.addEventListener('keydown',(e: KeyboardEvent) => this.onKeyDown(e));
        document.body.addEventListener('keyup',(e: KeyboardEvent) => this.onKeyUp(e));
       
       
        }

    

    public update() : void{
        
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    private onKeyDown(event:KeyboardEvent) : void {
        switch(event.keyCode){
            
        case 38: //up
            this.speedUp = -10
            this.y = this.y + this.speedUp
            this.update()
            break
        case 40: //down
            this.speedDown = 10
            this.y = this.y + this.speedDown
            this.update()
            break
        case 37: //left
            this.speedLeft = -10
            this.x = this.x + this.speedLeft
            this.update()
            this.div.classList.add("monkeyleft")
            
            break
        case 39: //right
            this.speedRight = 10
            this.x = this.x + this.speedRight
            this.update()
            this.div.classList.remove("monkeyleft")
            break
        }
        

        
    }   
    
    private onKeyUp(event:KeyboardEvent) : void {
        switch(event.keyCode){
        case 38:
            this.speedUp = 0
            break
        case 40:
            this.speedDown = 0
            break
        case 37:
            this.speedLeft = 0
            break
        case 39:
            this.speedRight = 0
            break
        }
        
    }
    
    public getRectangle(){
        return this.div.getBoundingClientRect()
    }

    

    
}