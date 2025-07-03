                                            // BASIC STEPS BEFOR EXECUTING CODE
//compilation - in js before executing anything first step is compilation
//There are three steps in compilation phase -> compilation phase -1)Tokenizing - divide code in chuncks,2)parsing - (Abstarct Synatax tree formation-(AST))syntax checking,3)code generation

// In ecma script they did not mentioned about compilation but below are few steps that they ahve written in doc
//step 1 ->Early error checking - checking syntax error
//step 2 -> Determining appropriate scope variable
//parsing is to dermine the scope of each and every variable and understand syntax error




console.log(this);
console.log(window);
console.log(firstname);
var firstname = shraddha; //it is in global scope

// now lets see execution state
// to execute code we have to create execution cotext
// it is called gloabal execution context
// 