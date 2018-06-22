console.log('Hello World');
console.log('We use the console.log() function to print expressions and statements to the console')
console.log("1 == '1' =>", 1 == '1');
console.log("1 === '1' => ", 1 === '1');
console.log("The double equals operator performs type coersion... If the operands are not of the same type, JavaScript attemps to coerce the operands into the same type");
console.log('This can lead to some strange conclusions...');
console.log("3 == '3.0' => ", 3 == '3.0');
console.log("3 === '3.0' => ", 3 === '3.0');
console.log("We can use the 'typeof' keyword to help determine the type of its operand");
console.log('typeof 1 =>', typeof 1);
console.log('typeof NaN => ', typeof NaN);
console.log('typeof "William" =>', typeof 'William');
console.log('typeof true => ', typeof true);
console.log('typeof function foo() { return true; } =>', typeof function foo() { return true; });
console.log('typeof someVariableNotYetDefined => ', typeof someVariableNotYetDefined);
console.log('typeof Symbol() => ', typeof Symbol());
console.log('typeof null => ', typeof null);
console.log('typeof [] => ', typeof []);
console.log('typeof {} => ', typeof {});

console.log("Truthy and Falsy refer to values in JavaScript that are not the 'true' keyword or 'false' keyword, but evalute to true and false");
console.log('The values which are Falsy include: \n\tfalse \n\t0 \n\t"" \n\tNaN \n\tnull \n\tundefined');
console.log("\t'' == false =>", '' == false);
console.log("\t0 == '' =>", 0 == '');
console.log('\t0 == false =>', 0 == false);
console.log("null and undefined are not equal to anything but themselves");
console.log('\tnull == null =>', null == null);
console.log('\tnull == undefined =>', null == undefined);
console.log('\tundefined == undefined =>', undefined == undefined);
console.log('\tundefined == null =>', undefined == null);
console.log("NaN is not equivalent to anything, including itself");
console.log("\tNaN == NaN =>", NaN == NaN);
console.log("\tNaN === NaN =>", NaN === NaN);
console.log("Every other value is truthy");
if ([]) {
    console.log('true');
}
if ('Jim') {
    console.log(true);
}


let NormalPerson = (function() {
    function NormalPerson(name) {
        this.name = name;
    }

    NormalPerson.prototype.getName = function() {
        return this.name;
    }
    return NormalPerson;
})();

let PrivatePerson = (function() {
    let nameSymbol = Symbol();
    function PrivatePerson(name) {
        this[nameSymbol] = name;
    };
    PrivatePerson.prototype.getName = function() {
        return this[nameSymbol];
    };
    return PrivatePerson;
})();


let n = new NormalPerson('William');
let p = new PrivatePerson('William - but, private');
console.log(n.getName());
console.log(p.getName());
console.log('Attempting to change the name of the normal person directly...');
n.name = 'Changed directly';
console.log(n.getName());
console.log('Attempting to change the name of the private person directly...');
p.nameSymbol = 'Changed directly';
console.log(p.getName());