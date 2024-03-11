import { useState } from "react";

const Myhook1 = () => {
    let citylist = ["Bangalore", "Mumbai", "Pune", "Chennai"];
    const [Bangalore, Mumbai, a, b] = citylist;
    
    //console.log(useState()); //[undefined,f]
    //let [abc, xyz] = [undefined, f];
    //abc ?
    //xyz ?
    //let[x, y] = [100, f];

    let [counter, updateCounter] = useState(1100);
    let [msg, updateMsg] = useState("");
    let [user, updateUser] = useState(['Kumar', 'Amar', 'Sunil', 'Sam']);

    const one =()=> {
        updateCounter(counter + 10);
        updateMsg("The Counter is incresed - "+counter);
        
    }

    const two =()=> {
        updateCounter(counter - 5);
        updateMsg("Sorry, The Counter is moving down - "+counter);
    }

    const three =()=> {
        updateCounter(counter * 5);
        
    }

    const four =()=> {
        updateCounter(counter / 5);
        
    }

    let rate = 10;

    return (
        <div className="container">
            <h1> How to use useState() Hooks & What is State Management </h1>
            <p> { citylist[0] } </p>
            <p> { Bangalore } </p>
            <p> { a } </p>
            <p> { b } </p>
            <h1> The Counter is : {counter} </h1>
            <button onClick={ one }> Click To + by 10 </button>
            <button onClick={ two }> Click To - by 5 </button>
            <button onClick={ three }> Click To * by 5 </button>
            <button onClick={four}> Click To / by 5 </button>

            <h2> {msg} </h2>

            <p> { rate * counter } </p>
            <p> { rate * counter + 50 } </p>
            <p> {rate * 50 + counter} </p>
            {
                user.map((name, index) => {
                  return(
                      <p key={index}> {name} </p>
                )  
                })
            }
            
        </div>
    )
}

export default Myhook1;