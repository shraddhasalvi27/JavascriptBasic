// XHR requests
const xhr = new XMLHttpRequest();
console.log(xhr);

// get,post,put,patch

// we request to the server and get response 
//browser by default do the get request


// create JSON file
// in json strings are double quotes

const xhr = new XMLHttpRequest();
console.log(xhr);
const xhr = new XMLHttpRequest();
console.log(xhr);

const URL = "http://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log( xhr.response);
        console.log(typeof xhr.response); //it will give me ans string
        const response = xhr.response;
        const data = JSON.parse(response); // it used to convert the data to js object 
        console.log(data);
        console.log(typeof data);  //now it will give me nas object
    }
}

//it will run only when my ready state is four
xhr.onload = function(){
    console.log(xhr.readyState);
}

xhr.send();

// mdn readystatechange search