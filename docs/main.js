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
    }
    GameElement.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return GameElement;
}());
var Banana = (function (_super) {
    __extends(Banana, _super);
    function Banana(x, y) {
        var _this = _super.call(this, x, y, "banana") || this;
        _this.draw();
        return _this;
    }
    Banana.prototype.update = function () {
    };
    Banana.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return Banana;
}(GameElement));
var Fireball = (function (_super) {
    __extends(Fireball, _super);
    function Fireball(x, y) {
        var _this = _super.call(this, x, y, "fireball") || this;
        _this.ySpeed = 3;
        return _this;
    }
    Fireball.prototype.update = function () {
        this.y = this.y + this.ySpeed;
        this.draw();
    };
    return Fireball;
}(GameElement));
var Game = (function () {
    function Game() {
        this.bananas = [];
        this.fireballs = [];
        this.scores = [];
        this.monkey = new Monkey(window.innerWidth / 2, 0);
        for (var i = 0; i < 10; i++) {
            this.bananas.push(new Banana((Math.random() * window.innerWidth) - 600, (Math.random() * window.innerHeight) - 600));
        }
        for (var i = 0; i < 10; i++) {
            this.fireballs.push(new Fireball(Math.random() * window.innerWidth, Math.random() * -5000));
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.bananas; _i < _a.length; _i++) {
            var banana = _a[_i];
            if (this.checkCollision(banana.getRectangle(), this.monkey.getRectangle())) {
                this.scores[0] = this.scores[0] + 1;
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
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Monkey = (function (_super) {
    __extends(Monkey, _super);
    function Monkey(x, y) {
        return _super.call(this, x, y, "monkey") || this;
    }
    Monkey.prototype.update = function () {
    };
    Monkey.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return Monkey;
}(GameElement));
//# sourceMappingURL=main.js.map