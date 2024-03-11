let user = {
    fullname:"Alex",
    mobile:4567890678,
    age:"30 years",
    city:"bangalore"
};

console.log(user.fullname);
console.log(user.mobile);
console.log(user.age);
console.log(user.city);

let userlist = [
    {fullname:"Alex 1",mobile:4567890678,age:"30 years",city:"bangalore"},
    {fullname:"Alex 2",mobile:4567890678,age:"30 years",city:"bangalore"},
    {fullname:"Alex 3",mobile:4567890678,age:"30 years",city:"bangalore"},
    {fullname:"Alex 4",mobile:4567890678,age:"30 years",city:"bangalore"}

];

userlist.map((myuser, index)=>{
    console.log(myuser.fullname,  myuser.mobile,  myuser.age,  myuser.city);
    console.log("------------------------------------");
})
