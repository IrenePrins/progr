class GameElement{

    protected x : number = 0
    protected y : number = 0

   // protected speedY : number = 0

    protected div : HTMLElement




    constructor(x : number, y : number, type: string){
        this.x = x
        this.y = y

        

        this.div = document.createElement(type)
        document.body.appendChild(this.div)


        

        this.draw()

    }

    protected draw() : void{
       
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    

    
}