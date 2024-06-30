// textContent and innertext
// change
const mainheading = document.getElementById("main-heading");
console.log(mainheading.textContent);
mainheading.textContent = "shut your mouth";
console.log(mainheading.textContent);
// if i hide anthing on website still textcontent will give me all text 
//example I set display :none property still it will give me in console
// innertext will give me only those element which are present on screen that is difference