// Jorge Juarez : ./js/Enemy.js
// Used in conjunction with ../views/index.html
let Enemy = (
    function () {
        let enImgSymbol = Symbol('en_img');
        let dxSymbol = Symbol('dx');
        let dySymbol = Symbol('dy');
        let dWidthSymbol = Symbol('dWidth');
        let dHeightSymbol = Symbol('dHeight');
        let velocitySymbol = Symbol('velocity');
        let baseHPSymbol = Symbol('basehp');
        let HPSymbol = Symbol('hp');

        function Enemy(en_img, dx, dy, dWidth, dHeight, velocity, basehp, hp) {
            this[enImgSymbol] = en_img;
            this[dxSymbol] = dx;
            this[dySymbol] = dy;
            this[dWidthSymbol] = dWidth;
            this[dHeightSymbol] = dHeight;
            this[velocitySymbol] = velocity;
            this[baseHPSymbol] = basehp;
            this[HPSymbol] = hp;
        };
        Enemy.prototype.getEnImg = function () {
            return this[enImgSymbol];
        };
        Enemy.prototype.getDx = function () {
            return this[dxSymbol];
        };
        Enemy.prototype.getDy = function () {
            return this[dySymbol];
        };
        Enemy.prototype.getDWidth = function () {
            return this[dWidthSymbol];
        };
        Enemy.prototype.getDHeight = function () {
            return this[dHeightSymbol];
        };
        Enemy.prototype.getVelocity = function () {
            return this[velocitySymbol];
        };
        Enemy.prototype.getBaseHP = function(){
            return this[baseHPSymbol];
        }
        Enemy.prototype.getHP = function(){
            return this[HPSymbol];
        }

        Enemy.prototype.setEnImg = function(enImg){
            this[enImgSymbol] = enImg;
        }
        Enemy.prototype.setDx = function (dx) {
            this[dxSymbol] = dx;
        };
        Enemy.prototype.setDy = function (dy) {
            this[dySymbol] = dy;
        };
        Enemy.prototype.setDWidth = function (dWidth) {
            this[dWidthSymbol] = dWidth;
        };
        Enemy.prototype.setDHeight = function (dHeight) {
            this[dHeightSymbol] = dHeight;
        };
        Enemy.prototype.setVelocity = function (velocity) {
            this[velocitySymbol] = velocity;
        };
        Enemy.prototype.setBaseHP = function(basehp){
            this[baseHPSymbol] = basehp;
        }
        Enemy.prototype.setHP = function(hp){
            this[HPSymbol] = hp;
        }
        return Enemy;
    }
)();