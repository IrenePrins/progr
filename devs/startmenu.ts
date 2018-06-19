class Startmenu{
    private div : HTMLElement
    private x : number
    private y : number
    private gameStarted : boolean = false

    private game : Game

    constructor(g : Game){
        this.game = g
        this.div = document.createElement("start")
        document.body.appendChild(this.div)
        this.div.innerHTML = "START!"
        this.div.addEventListener("click", () => this.clickHandler())

        this.x = window.innerWidth/2
        this.y = window.innerHeight/2
               
    }

    

    private clickHandler(){
        this.gameStarted = true
    }

    public update() : void{
        if(this.gameStarted === true){
            this.game.startlevel()
        }

    }

   
}