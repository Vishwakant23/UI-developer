
import { useState } from "react";

const Myhook2 = () => {
    let [booklist, updateBook] = useState(['html', 'css', 'node', 'php', 'react']);
    let [msg, updateMsg] = useState("");
    let [newbook, pickBook] = useState();

    const save = () => {
        updateBook(booklist = [...booklist, newbook]);      // a = a + b;
        updateMsg(newbook + " Added Successfully !");
    }
    
    const delbook = (index) => {
        let name = booklist[index];
        // a = a - b;
        booklist.splice(index, 1); // a - b
        updateBook(booklist = [...booklist]); // a = a
        updateMsg(name + " Deleted Successfully !");
    }

    return (
        <div className="container">
            <h1> useState(), [...]spread operator example </h1>
            <p> Book Is : {newbook} </p>
            <p> 
                Enter Book Name : <input type="text" onChange={xyz=>pickBook(xyz.target.value)} />
                <button onClick={save}> Save Book </button>
            </p>
            <p align="center"> {msg} </p>
            {
                booklist.map((bookname, index) => {
                    return (
                        <p key={index} className="four"> 
                            {bookname} 
                            <br/> 
                            <button onClick={ delbook.bind(this,index) }> Delete </button> 
                        </p>
                    )
                })
            }
        </div>
    )
    
}

export default Myhook2;