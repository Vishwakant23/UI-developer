console.log("Nested for loop....");

for(let i=1; i<=5; i++){
    console.log(i, "The Outer loop....");

    for (let j=1; j<=i; j++)
    {
        console.log("\t" , j, "inner loop");

    }
    console.log("/n");
}