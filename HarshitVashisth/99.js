// Deeply understand dom tree, root node , element nodes, text nodes - done

// first upper node is document - root node

//then html node - root element,child node document

//child node of html - head

// child node of head is text node
//after there is script tag - child node of head

//consider new line and space

// body - chile node of html
//div - child node of body
// h1 - child node of div
// p- child node of div

// above is complete dom tree of index2.js


const rootNode = document.getRootNode();
console.log(rootNode.childNodes);

const htmlElementNode = rootNode.childNodes[0];
const headElementNode = htmlElementNode.childNodes[0];
console.log(htmlElementNode);
console.log(htmlElementNode.childNodes);
console.log(headElementNode.parentNode);
console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.nextSibling);
// nextElementSibling
// sibling relation

const h1 = document.querySelector("h1");
const div = h1.parentNode;

div.style.color ="#efefef";
div.style.backgroundColor = "#333";






 