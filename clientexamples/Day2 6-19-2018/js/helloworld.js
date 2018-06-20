console.log('Hello World');
console.log("1 == '1' =>", 1 == '1')
console.log("1 === '1' =>", 1 === '1')
console.log("3 == '3.0' =>", 3 == "3.0")
console.log('0 == false =>', 0 == false)
console.log('"" == false =>', "" == false)
console.log('0 === false =>', 0 === false)
console.log('"" === false =>', "" === false)
console.log('null == null =>', null == null)
console.log('undefined == undefined =>', undefined == undefined)
console.log("typeof 'Cullen' =>", typeof "Cullen")
console.log("typeof infinity =>", typeof Infinity)

/* this variable can be accessed anywhere in the program */
var globalscope = "Hey i'm a globaly scoped variable";

function createlocalScope() {
    console.log('inside the createlocalScope function...');
    var localscope = "hey, i am a locally scoped variable";
    console.log(localscope);
    console.log(globalscope);
}

createlocalScope();

console.log(globalscope);
//commente out because the rest of the program will not run otherwise
//console.log(localscope);

function pitfallsofvar() {
    var myvar = 'instanciated on line 31';
    console.log(myvar);

    var myvar = 'instanciated on line 34';
    console.log(myvar);
}


