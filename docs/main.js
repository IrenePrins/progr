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
var Fireball = (function (_super) {
    __extends(Fireball, _super);
    function Fireball(x, y) {
        var _this = _super.call(this, x, y, "fireball") || this;
        _this.ySpeed = 3;
        _this.update();
        return _this;
    }
    Fireball.prototype.update = function () {
        this.y = this.y + this.ySpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Fireball;
}(GameElement));
var Game = (function () {
    function Game() {
        this.bananas = [];
        this.fireballs = [];
        this.scores = [0];
        this.monkey = new Monkey(500, 500);
        for (var i = 0; i < 10; i++) {
            this.bananas.push(new Banana((Math.random() * (window.innerWidth - 162)), Math.random() * (window.innerHeight - 120)));
        }
        for (var i = 0; i < 10; i++) {
            this.fireballs.push(new Fireball(Math.random() * (window.innerWidth - 130), Math.random() * -3000));
        }
        this.score = document.body.getElementsByTagName("score")[0];
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.bananas; _i < _a.length; _i++) {
            var banana = _a[_i];
            if (this.checkCollision(banana.getRectangle(), this.monkey.getRectangle())) {
                console.log("collision functie wordt aangeroepen");
                this.scores[0] = this.scores[0] + 1;
                this.deleteBanana(banana);
                banana.removeBanana();
                this.updateScore();
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
    Game.prototype.updateScore = function () {
        this.score.innerHTML = "Aantal bananen: " + this.scores[0];
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Monkey = (function (_super) {
    __extends(Monkey, _super);
    function Monkey(x, y) {
        var _this = _super.call(this, x, y, "monkey") || this;
        _this.keyObjects = new Array(255);
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
                this.speedUp = -100;
                this.y = this.y + this.speedUp;
                this.update();
                break;
            case 40:
                this.speedDown = 100;
                this.y = this.y + this.speedDown;
                this.update();
                break;
            case 37:
                this.speedLeft = -100;
                this.x = this.x + this.speedLeft;
                console.log("case 37 wordt aangeroepen");
                this.update();
                this.div.classList.add("monkeyleft");
                break;
            case 39:
                this.speedRight = 100;
                this.x = this.x + this.speedRight;
                console.log("case 39 wordt aangeroepen");
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
//# sourceMappingURL=main.js.map