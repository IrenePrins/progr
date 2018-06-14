class Game{
    private screen: any

    constructor(){
        this.screen = new Startmenu(this)
        this.gameloop()
    }

    public gameloop(){
        this.screen.update()
        requestAnimationFrame(() => this.gameloop)
    }

    public showLevel(){
        document.body.innerHTML = ""
        console.log("test")
        this.screen = new Level(this)
    }

    public showGameover(screen : Gameover){
        this.screen = screen
    }
}
window.addEventListener("load" , ()=> new Game())