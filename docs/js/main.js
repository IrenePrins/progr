"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameElement = (function () {
    function GameElement(x, y, type) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
        this.div = document.createElement(type);
        document.body.appendChild(this.div);
        this.draw();
    }
    GameElement.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return GameElement;
}());
var background = (function (_super) {
    __extends(background, _super);
    function background() {
        return _super.call(this, window.innerHeight, window.innerWidth, "background") || this;
    }
    return background;
}(GameElement));
var Banana = (function (_super) {
    __extends(Banana, _super);
    function Banana(x, y) {
        return _super.call(this, x, y, "banana") || this;
    }
    Banana.prototype.update = function () {
    };
    Banana.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Banana.prototype.removeBanana = function () {
        this.div.remove();
    };
    return Banana;
}(GameElement));
var Game = (function () {
    function Game() {
        this.currentscreen = new Startmenu(this);
        this.gameloop();
    }
    Game.prototype.gameloop = function () {
        var _this = this;
        this.currentscreen.update();
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    Game.prototype.startlevel = function () {
        document.body.innerHTML = "";
        this.currentscreen = new Level(this);
        console.log("level gestart");
    };
    Game.prototype.startGameOver = function () {
        document.body.innerHTML = "";
        this.currentscreen = new Gameover();
        console.log("gameover gestart");
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Gameover = (function () {
    function Gameover() {
        this.div = document.createElement("gameover");
        document.body.appendChild(this.div);
        this.div.innerHTML = "OMG !<br> " + "U COLLECTED 10 BANANAS U SO GREAT!!";
    }
    return Gameover;
}());
var Level = (function () {
    function Level(g) {
        this.bananas = [];
        this.counter = 0;
        this.background = document.createElement("background");
        document.body.appendChild(this.background);
        this.background.style.height = window.innerHeight;
        this.background.style.width = window.innerWidth;
        this.game = g;
        this.monkey = new Monkey(500, 500);
        for (var i = 0; i < 10; i++) {
            this.bananas.push(new Banana((Math.random() * (window.innerWidth - 162)), Math.random() * (window.innerHeight - 120)));
        }
        this.score = document.createElement("score");
        this.score.innerHTML = 'score = ';
        this.update();
    }
    Level.prototype.update = function () {
        for (var _i = 0, _a = this.bananas; _i < _a.length; _i++) {
            var banana = _a[_i];
            if (this.checkCollision(banana.getRectangle(), this.monkey.getRectangle())) {
                console.log("collision functie wordt aangeroepen");
                this.counter++;
                this.score.innerHTML = 'score = ' + this.counter;
                this.deleteBanana(banana);
                banana.removeBanana();
            }
        }
        if (this.counter == 10 || this.counter === 10) {
            this.game.startGameOver();
        }
    };
    Level.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Level.prototype.deleteBanana = function (banana) {
        var i = this.bananas.indexOf(banana);
        this.bananas.splice(i, 1);
    };
    return Level;
}());
var Monkey = (function (_super) {
    __extends(Monkey, _super);
    function Monkey(x, y) {
        var _this = _super.call(this, x, y, "monkey") || this;
        _this.speedLeft = 0;
        _this.speedRight = 0;
        _this.speedDown = 0;
        _this.speedUp = 0;
        _this.div.classList.add("monkey");
        document.body.addEventListener('keydown', function (e) { return _this.onKeyDown(e); });
        document.body.addEventListener('keyup', function (e) { return _this.onKeyUp(e); });
        return _this;
    }
    Monkey.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Monkey.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 38:
                this.speedUp = -10;
                this.y = this.y + this.speedUp;
                this.update();
                break;
            case 40:
                this.speedDown = 10;
                this.y = this.y + this.speedDown;
                this.update();
                break;
            case 37:
                this.speedLeft = -10;
                this.x = this.x + this.speedLeft;
                this.update();
                this.div.classList.add("monkeyleft");
                break;
            case 39:
                this.speedRight = 10;
                this.x = this.x + this.speedRight;
                this.update();
                this.div.classList.remove("monkeyleft");
                break;
        }
    };
    Monkey.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case 38:
                this.speedUp = 0;
                break;
            case 40:
                this.speedDown = 0;
                break;
            case 37:
                this.speedLeft = 0;
                break;
            case 39:
                this.speedRight = 0;
                break;
        }
    };
    Monkey.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return Monkey;
}(GameElement));
var Startmenu = (function () {
    function Startmenu(g) {
        var _this = this;
        this.gameStarted = false;
        this.game = g;
        this.div = document.createElement("start");
        document.body.appendChild(this.div);
        this.div.innerHTML = "START!";
        this.div.addEventListener("click", function () { return _this.clickHandler(); });
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
    }
    Startmenu.prototype.clickHandler = function () {
        this.gameStarted = true;
    };
    Startmenu.prototype.update = function () {
        if (this.gameStarted === true) {
            this.game.startlevel();
        }
    };
    return Startmenu;
}());
var Wall = (function (_super) {
    __extends(Wall, _super);
    function Wall() {
        return _super.call(this, window.innerWidth / 2, window.innerHeight, "wall") || this;
    }
    return Wall;
}(GameElement));
//# sourceMappingURL=main.js.map