let Pet = (function() {
  let typeSymbol = Symbol('type');
  let sizeSymbol = Symbol('size');

  function Pet(type, size) {
    this[typeSymbol] = type;
    this[sizeSymbol] = size;
  }
  Pet.prototype.getType = function(){return this[typeSymbol];}
  Pet.prototype.getSize = function(){return this[sizeSymbol];}

  return Pet;
  
}());

let a = new Pet('dog', 4);
console.log(a.getType());//Output: dog
console.log(a.getSize());
a.type = null;
//Stays private
console.log(a.getType());//Output: dog