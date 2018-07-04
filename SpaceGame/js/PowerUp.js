// Jorge Juarez : ./js/PowerUp.js
// Used in conjunction with ../views/index.html

let PowerUp = (
    function () {
        let pUpImgSymbol = Symbol('pUpImg');
        let pUpIdSymbol = Symbol('pUpId');
        let dxSymbol = Symbol('dx');
        let dySymbol = Symbol('dy');
        let dWidthSymbol = Symbol('dWidth');
        let dHeightSymbol = Symbol('dHeight');
        let velocitySymbol = Symbol('velocity');
        let msgSymbol = Symbol('msg');
        function PowerUp(pUpImg = ice_pupspr, pUpId = "ice", dx = 0, dy = 0, dWidth = 0, dHeight = 0, 
                velocity = 0, msg) {
            this[pUpImgSymbol] = pUpImg;
            this[pUpIdSymbol] = pUpId;
            this[dxSymbol] = dx;
            this[dySymbol] = dy;
            this[dWidthSymbol] = dWidth;
            this[dHeightSymbol] = dHeight;
            this[velocitySymbol] = velocity;
            this[msgSymbol] = msg;
        }
        PowerUp.prototype.getPUpImg = function () {
            return this[pUpImgSymbol]; 
        };
        PowerUp.prototype.getPUpId = function(){
            return this[pUpIdSymbol];
        }
        PowerUp.prototype.getDx = function () {
            return this[dxSymbol];
        };
        PowerUp.prototype.getDy = function () {
            return this[dySymbol];
        };
        PowerUp.prototype.getDWidth = function () {
            return this[dWidthSymbol];
        };
        PowerUp.prototype.getDHeight = function () {
            return this[dHeightSymbol];
        };
        PowerUp.prototype.getVelocity = function () {
            return this[velocitySymbol];
        };
        PowerUp.prototype.getMsg = function(){
            return this[msgSymbol];
        }

        PowerUp.prototype.setDx = function (dx) {
            this[dxSymbol] = dx;
        };
        PowerUp.prototype.setDy = function (dy) {
            this[dySymbol] = dy;
        };
        PowerUp.prototype.setDWidth = function (dWidth) {
            this[dWidthSymbol] = dWidth;
        };
        PowerUp.prototype.setDHeight = function (dHeight) {
            this[dHeightSymbol] = dHeight;
        };
        PowerUp.prototype.setVelocity = function (velocity) {
            this[velocitySymbol] = velocity;
        };
        return PowerUp;
    }
)();