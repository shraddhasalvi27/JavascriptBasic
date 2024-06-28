// Global execution context
//compilation - in js before executing anything first step is compilation
//step3 -> compilation phase -1)Tokenizing - divide code in chumcks,2)parsing - syntax checking,3)code generation
//step 1 ->Early error checking - checking syntax error
//step 2 -> Determining appropriate scope variable
//parsing is to dermine the scope of each and every variable

console.log(this);
console.log(window);
console.log(firstname);
var firstname = shraddha; //it is in global scope

// now lets see execution state
// to execute code we have to create execution cotext
// it is called gloabal execution context
// 