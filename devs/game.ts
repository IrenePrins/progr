class Game{

    private bananas : Banana[] = []
    private fireballs : Array<Fireball> = []
    
    private scores: number[] = [0]
    private monkey : Monkey

    private score : Element
    
   
        constructor(){

             this.monkey = new Monkey(500 , 500)
                    
            for(let i = 0; i < 10; i++){
                this.bananas.push(new Banana((Math.random() * (window.innerWidth - 162)) , Math.random() * (window.innerHeight - 120)))
                
            }

            for(let i = 0; i < 10 ; i++){
                this.fireballs.push(new Fireball(Math.random() * (window.innerWidth - 130), Math.random() * - 3000))
            }
            
            this.score = document.body.getElementsByTagName("score")[0]
             

            this.gameLoop()

        }
    
    
    
        public gameLoop(){
            for(var banana of this.bananas){
                if(this.checkCollision(banana.getRectangle(), this.monkey.getRectangle())){
                    console.log("collision functie wordt aangeroepen")
                    this.scores[0] = this.scores[0] + 1
                    this.deleteBanana(banana)
                    banana.removeBanana()
                    this.updateScore()
                }

            }            
    
            requestAnimationFrame(()=>this.gameLoop())
        }

        private checkCollision(a: ClientRect, b: ClientRect){
            return (a.left <= b.right &&
                b.left <= a.right &&
                a.top <= b.bottom &&
                b.top <= a.bottom)
        }

        public deleteBanana(banana: Banana) : void{
            
            //plek van banana in array
            let i = this.bananas.indexOf(banana)

            //verwijderd de banaan in array
            this.bananas.splice(i, 1)
        }

        private updateScore(){
            this.score.innerHTML = `Aantal bananen: ${this.scores[0]}`
            
        }

        
        
    
}    
        window.addEventListener("load", () => new Game())

        /*
        volgende stap:
        collision met fireball en monkey
        
        scores op scherm
        gamestates
        */
    
    
