
import { useState, useEffect } from 'react';

const Myapi1 = () =>{
    let[citylist, updateCity] = useState( [] );

    const getcity = () =>{
        fetch("city.json")
        .then(response=>response.json())
        .then(cityArray=>{
            updateCity( cityArray );
        })
    }

    let[itemlist, updateItem] = useState( [] );
    const getitem = () =>{
        fetch("item.json")
        .then(response=>response.json())
        .then(itemArray=>{
            updateItem( itemArray );
        })
    }

    useEffect(()=>{
        getitem();
    })

    return(
        <div className='container'>
            <h1 align="center"> React fetch(), useState() Example </h1>
            <button onClick={getcity}> Load City </button>
            <fieldset>
                <legend> Total City : {citylist.length} </legend>
                {
                    citylist.map((cityname, index)=>{
                        return(
                            <p key={index}> {cityname} </p>
                        )
                    })
                }
            </fieldset>

            <fieldset>
                <legend> Total Items : {itemlist.length} </legend>
                {
                    itemlist.map((itemname, index)=>{
                        return(
                            <p key={index}> {itemname} </p>
                        )
                    })
                }
            </fieldset>
        </div>
    )
}

export default Myapi1;