"use strict";
var Banana = (function () {
    function Banana() {
        this.x = 0;
        this.y = 0;
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.div = document.createElement("banana");
        document.body.appendChild(this.div);
        this.position();
    }
    Banana.prototype.update = function () {
    };
    Banana.prototype.position = function () {
        this.x = Math.random() * this.screenWidth;
        this.y = Math.random() * this.screenHeight;
    };
    Banana.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return Banana;
}());
var Fireball = (function () {
    function Fireball() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.ySpeed = 3;
        this.screenHeight = 0;
        this.div = document.createElement("fireball");
        document.body.appendChild(this.div);
        this.x = Math.random() * this.screenWidth;
        this.y = Math.random() * -5000;
    }
    Fireball.prototype.update = function () {
        this.y = this.y + this.ySpeed;
        this.div.style.transform = "transform(" + this.x + "px, " + this.y + "px)";
    };
    return Fireball;
}());
var Game = (function () {
    function Game() {
        this.bananas = [];
        this.fireballs = [];
        this.scores = [];
        this.monkey = new Monkey(37, 39);
        for (var i = 0; i < 10; i++) {
            this.bananas.push(new Banana);
        }
        for (var i = 0; i < 10; i++) {
            this.fireballs.push(new Fireball);
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.bananas; _i < _a.length; _i++) {
            var banana = _a[_i];
            if (this.checkCollision(banana.getRectangle(), this.monkey.getRectangle())) {
                this.scores[0] = this.scores[0] + 1;
                banana.removeBanana();
                this.deleteBanana(banana);
            }
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Game.prototype.deleteBanana = function (banana) {
        var i = this.bananas.indexOf(banana);
        this.bananas.splice(i, 1);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Monkey = (function () {
    function Monkey(left, right) {
        this.div = document.createElement("monkey");
        document.body.appendChild(this.div);
    }
    Monkey.prototype.update = function () {
    };
    Monkey.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return Monkey;
}());
//# sourceMappingURL=main.js.map