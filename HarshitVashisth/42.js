//function inside function
const app =() =>{
    console.log("inside app");

    const num = () => {
        console.log("hello world");
    }

    const add = (num1,num2) => num1+num2;

    console.log("function inside function");
    num();
    add(8,9);
}

app();

