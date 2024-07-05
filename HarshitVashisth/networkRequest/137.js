// Promisifying XHR requests and chaining using then method

const URL = "http://jsonplaceholder.typicode.com/posts";
function sendrequest(method,url){
    return new Promise(function(resolve,reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = function(){
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response);
            }else{
                reject(new Error("Something went wrong"));
            }
        }
        xhr.send();
    })
}

sendrequest("GET",URL)
    .then(response =>{
        const data = json.parse(response);
        return data;
    })
    .then(data =>{
        const id = data[3].id;
        return id;
    })
    .catch(error =>{
        console.log("something went wrog");
    })

