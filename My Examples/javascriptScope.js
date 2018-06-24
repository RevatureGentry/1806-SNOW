console.log("Scope refers to the part of the program in which the variable is visible");
console.log("The variable scopes in JavaScript are");
console.log('Global => bindings defined outside of any function or block, available throughout the program');
console.log('Local => bindings for function parameters or declared inside a function, available only inside that function');
console.log('Block => bindings declared with "let" and "const" are available inside the block they are declared');
console.log('In pre 2015 JavaScript, only functions created new scopes. The way to (old school) create bindings were by using the "var" keyword');
console.log('Bindings created with the "var" keyword are visible throughout the whole function they appear in, or globally if they are not inside a function');

var globalScope = "Hey! I'm a globally scoped variable";
function createLocalScope() {
    console.log('Inside createLocalScope()...');
    var localScope = "Hey! I'm a locally scoped variable";
    console.log('printing globalScope... ', globalScope);
    console.log('printing localScope... ', localScope);
}

createLocalScope();
console.log('Attempting to print localScope, outside of the function in which it was created...');
// Commented the following line out because the rest of the program will not run otherwise
// console.log(localScope);
console.log('However, we still can print the globalScope variable...', globalScope);
console.log('JavaScript distinguishes not just global and local bindings, ',
'blocks and functions can be created inside other blocks and functions, creating multiple degrees of locality');

let globallyScopedWithLet = "Defined in global scope with 'let'";
function createNestedScope() {
    let locallyScopedWithLet = "Defined in local scope with 'let'";
    function furtherNestedScope() {
        let furtherNestedScopeWithLet = "Defined in a nested scope with 'let'";
        console.log('Printing globallyScopedWithLet... ', globallyScopedWithLet);
        console.log('Printing locallyScopedWithLet... ', locallyScopedWithLet);
        console.log('Printing furtherNestedScopeWithLet... ', furtherNestedScopeWithLet);
    }
    furtherNestedScope();
    // console.log('Attempting to print furtherNestedScopeWithLet, outside of scope...', furtherNestedScopeWithLet);
}

createNestedScope();

console.log("The 'let' keyword helps with namespaces, as each function introduces a new namespace for the variables to be defined");
function howLetHelpsWithNamespaces() {
    let myVar = "Outer";
    function nextLevel() {
        let myVar = "Next Level";
        function innermost() {
            let myVar = "Innermost";
            console.log(myVar);
        }
        innermost();
        console.log(myVar);
    }
    nextLevel();
    console.log(myVar);
}

howLetHelpsWithNamespaces();

const myVar = 0;
function constAlsoCreatesBlockScope() {
    const myVar = 10;
    function nextLevel() {
        const myVar = 20;
        function innermost() {
            const myVar = 30;
            console.log(myVar);
        }
        innermost();
        console.log(myVar);
    }
    nextLevel();
    console.log(myVar);
}

constAlsoCreatesBlockScope();
console.log(myVar); // This is the myVar defined on line 57
// console.log(myVar++);

function downfallsOfVarKeyword() {
    var createdWithVar = 10;
    console.log(createdWithVar);
    var createdWithVar = 20;
    console.log(createdWithVar);
}

downfallsOfVarKeyword();

function howLetHelpsWithTheDownfallsOfVar() {
    let createdWithLet = 10;
    console.log(createdWithLet);
    let createdWithLet = 20;
    console.log(createdWithLet);
}

howLetHelpsWithTheDownfallsOfVar();
