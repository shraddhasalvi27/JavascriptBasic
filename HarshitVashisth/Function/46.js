//rest parameters
function num(a,b,c,...g){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(g);

}
num(1,2,3,4,5,6);

function myFunc(a,b,c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`, c);
}

myFunc(1,2,3); // OP - a is 1 , b is 2 , c is 3

myFunc(1,2,3,4); // OP - a is 1 , b is 2 , c is 3


function sum(...num){

    console.log(num);  // [ 1, 2, 3, 4, 5, 6 ] and typeof(n) = Objcet but(like array like object )

    var total = 0;

    for(let i = 0 ; i<num.length ; i++){

        total = total + i ;
    }

    console.log(total);

    return total ;
}

sum(1,2,3,4,5,6);  // 15

console.log(sum(1,2,3,4,5,6)); // 15




