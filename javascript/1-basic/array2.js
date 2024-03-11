let booklist=[
    "html",
     "css",
      "bootstarp",
      "javascript",
      "php",
      "mysql",
      "node",
      "angular"
    ];
    booklist.map(bookname =>{
        console.log("=>",bookname);
    })

    console.log("------map() with index------\n");

    booklist.map((value, index)=>{
        console.log( index,value);
    })


    console.log("------map() with index------\n");

    booklist.map(function(bookname, index) {
        console.log(index, " => " , bookname)

    })

    
    console.log("------forEach() with index------\n");

    booklist.foreach(function(bookname, index) {
        console.log(index, " => " , bookname)

    })

    