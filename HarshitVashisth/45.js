//default parameter
function add(a,b=0){
    return a+b;
}
const sum = add(5);

const mul = (a=7,b=9)=> a*b;
mul(8,9);
mul(6);

// it will take the default parameter and it will update the parameter value 
// as undefined if it not there



