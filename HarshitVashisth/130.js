// Promise and settimeout

//I want to resolve/reject promise after two seconds

function myPromise(){
    return new Promise((resolve,reject)=>{
        const value = true;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000)
    })
}
myPromise()
.then(()=>{console.log("resolved")})
.catch(()=>{console.log("rejected")})