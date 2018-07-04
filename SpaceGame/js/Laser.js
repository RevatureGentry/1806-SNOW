// Jorge Juarez - ./js/Laser.js
// used in conjunction with ../views/index.html
// This file is designated to house the Ship class with all its wonderful features
let Laser = (
    function () {
        let lsrImgSymbol = Symbol('lsr_img');
        let dxSymbol = Symbol('dx');
        let dySymbol = Symbol('dy');
        let dWidthSymbol = Symbol('dWidth');
        let dHeightSymbol = Symbol('dHeight');
        let velocitySymbol = Symbol('velocity');
        let strengthSymbol = Symbol('strength');

        function Laser(lsr_img, dx, dy, dWidth, dHeight, velocity = 0, strength = 0) {
            this[lsrImgSymbol] = lsr_img;
            this[dxSymbol] = dx;
            this[dySymbol] = dy;
            this[dWidthSymbol] = dWidth;
            this[dHeightSymbol] = dHeight;
            this[velocitySymbol] = velocity;
            this[strengthSymbol] = strength;
        };
        Laser.prototype.getLsrImg = function () { // getters!
            return this[lsrImgSymbol];
        };
        Laser.prototype.getDx = function () {
            return this[dxSymbol];
        };
        Laser.prototype.getDy = function () {
            return this[dySymbol];
        };
        Laser.prototype.getDWidth = function(){
            return this[dWidthSymbol];
        }
        Laser.prototype.getDHeight = function(){
            return this[dHeightSymbol];
        }
        Laser.prototype.getVelocity = function () {
            return this[velocitySymbol];
        };
        Laser.prototype.getStength = function () {
            return this[strengthSymbol];
        };

        Laser.prototype.setDx = function (dx) { // setters!
            this[dxSymbol] = dx;
        };
        Laser.prototype.setDy = function (dy) {
            this[dySymbol] = dy;
        };
        Laser.prototype.setDWidth = function(dWidth){
            this[dWidthSymbol] = dWidth;
        };
        Laser.prototype.setDHeight = function(dHeight){
            this[dHeightSymbol] = dHeight;
        };
        Laser.prototype.setVelocity = function(velocity){
            this[velocitySymbol] = velocity;
        };
        Laser.prototype.setStrength = function (strength) {
            this[strengthSymbol] = strength;
        };
        return Laser;
    }
)();