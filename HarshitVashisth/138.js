// Fetch API

const URL = "http://jsonplaceholder.typicode.com/posts";

const re = fetch(URL)
console.log(re);
// here fetch returns promise
fetch(URL)
    .then(response =>{
        console.log(response);
        // console.log(response.json()); //it will return me promise
        return response.json();
    })
    .then(data => {
        console.log(data);
    })

//fetch will only give me error when there is network error  else check ok value in console

//or else use if else condition in then as then is working (use response.ok value)

