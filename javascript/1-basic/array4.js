let user = [
    {city:"bangalore", account:['alex', 'ganesh']},
    {city:"mumbai", account:['suresh', 'sumit','raj']},
    {city:"pune", account:['sanmukh',]}
   
];

user.map((info, index)=>{
    console.log(info.city);

    for(let i=0; i<info.account.length; i++){
        console.log("\t",info.account[i]);
    }

    console.log("------------------------");
})