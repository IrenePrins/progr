class Startmenu{

    private game : Game 
    private div : HTMLElement

    constructor(g: Game){
        this.game = g
        this.div = document.createElement("start")
        document.body.appendChild(this.div)
        this.div.innerHTML = "START!"
        this.div.addEventListener("click", this.clickHandler)
    }
    public update(){
        
    }

    private clickHandler(){
        this.game.showLevel();
    }
}