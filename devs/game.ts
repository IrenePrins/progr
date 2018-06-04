/// <reference path="banana.ts"/>


class Game{

    private bananas : Banana[] = []
    private fireballs : Array<Fireball> = []
    private monkey : Monkey
    private scores: number[] = []
    
   
        constructor(){

            this.monkey = new Monkey(window.innerWidth / 2, 0)
                    
            for(let i = 0; i < 10; i++){
                this.bananas.push(new Banana((Math.random() * window.innerWidth) - 600, (Math.random() * window.innerHeight) - 600))
                
            }

            for(let i = 0; i < 10 ; i++){
                this.fireballs.push(new Fireball(Math.random() * window.innerWidth, Math.random() * -5000))
            }
            
            this.gameLoop()
        }
    
    
    
        public gameLoop(){
            for(var banana of this.bananas){
                if(this.checkCollision(banana.getRectangle(), this.monkey.getRectangle())){
                    this.scores[0] = this.scores[0] + 1
                    // banana.removeBanana();
                    // this.deleteBanana(banana)

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
/*
        public deleteBanana(banana: Banana) : void{
            //plek van banana in array
            let i = this.bananas.indexOf(banana)

            //verwijderd de banaan in array
            this.bananas.splice(i, 1)
        }
        */
    
}    
        window.addEventListener("load", () => new Game())

        /*
        volgende stap:
        collision met fireball en monkey
        monkey laten springen enzo
        scores op scherm
        gamestates
        */
    
    
