
   let item = ["Apple","Milk","Water","Soap","Sugger"];

   let paroduct = new Array("Apple",100, true , 2521654671245);

   /*

        Structure of array
        arrayname[position] =>Element

        item[0]=>Apple
        item[1]=>Milk
        item[2]=>Water
        item[3]=>Soap
        item[4]=>Sugar

   */
    console.log(item[0]);
    console.log(item[4]);

    console.log("Elementa of array using for loop \n");

    for (let i=0; i<=item.length; i++)
    {
        console.log(i, "=>", item[1]);   
    }

    console.log("-----using while loop----");
    let i=0;
    while( i<item.length)
    {
        console.log("item[i]");
        i++;
    }

    console.log("----Using forEach----");

    let myitem = ["Apple","Milk","Water","Soap","Sugger"];
    myitem. forEach( function (itemname , index){
        console.log( index, "########", itemname);
    })
    

