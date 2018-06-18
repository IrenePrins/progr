class Game {

    public currentscreen : any
    

    constructor(){
        this.currentscreen = new Gameover(this)
        this.gameloop()
    }



    public gameloop(){
        this.currentscreen.update()
        requestAnimationFrame(() => this.gameloop())
    }

    public startlevel(){
        document.body.innerHTML = ""
        this.currentscreen = new Level(this)
        console.log("level gestart")
    }

    public startGameOver(){
        document.body.innerHTML = ""
        this.currentscreen = new Gameover(this)
        console.log("gameover gestart")
    }
    

    
}
window.addEventListener("load", () => new Game())