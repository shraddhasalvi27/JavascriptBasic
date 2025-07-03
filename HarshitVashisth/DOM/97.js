// select multiple elements and loop through them
// get multiple elements using getElements by class name
// get multiple elements using querySelectorAll

// multiple elements can have same class name
const navItems = document.getElementsBytagName("nav-item");  //HTMLcollection
console.log(navItems);
// it will give me array like objects I can iterate through it
console.log(navItems[1]);
console.log(typeof navItems);
console.log(Array.isArray(navItems));

// const navItems = document.querySelectorAll("nav-item");  //NodeList

console.log(navItems[1]);


//simple for loop
// for of loop
// forEach
// we cant use forEach loop to iterate through HTMLcollection


for(let i =0;i<navItems.length;i++){
    // console.log(navItems[i]);
    const navItems = navItems[i];
    navItems.style.backgroundColor = "#fff";
    navItems.style.color = "green";
    navItems.style.fontWeight = "bold";
}
