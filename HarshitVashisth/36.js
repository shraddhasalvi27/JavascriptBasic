//object inside array
//very useful in real world

const users = [
    {user_id : 1 ,firstName : "parth",gender:"male"},
    {user_id : 2 ,firstName : "harshit",gender:"malesig"},
    {user_id : 3 ,firstName : "rakes",gender:"malemig"}
];

for(let value of users){
    console.log(value);
    console.log(value.user_id);
    console.log(value.firstName);
}

