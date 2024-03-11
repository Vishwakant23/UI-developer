
import { useState } from "react";

const Myhook3 = () =>{
    let temp = {name:"Apple", price:"200", qty:"10", seller:"Raj"};

    let[itemlist, updateitem ] = useState([temp]);
    let[itemname, pickName] = useState("");
    let[itemprice, pickPrice]= useState("");
    let[itemqty, pickQty]= useState("");
    let[seller, pickSeller]= useState("");

    const save=()=>{
        let newitem = {name:itemname, price:itemprice, qty:itemqty, seller:seller};
        updateitem( itemlist=[...itemlist, newitem]);
        
    }

    const delitem=()=>{
        itemlist.splice( 1);
        updateitem( itemlist = [...itemlist]);
    }

     return(
        <div className="container">
            <h1> Array of object -Add, List, Delete using [...] spread operator </h1>
            <table cellPadding="15" align="left">
                <tbody>
                    <tr>
                        <td>Item Name </td>
                        <td> <input type="text" onChange={obj=>pickName(obj.target.value)}/>{itemname}</td>
                    </tr>
                    <tr>
                        <td>Item price </td>
                        <td> <input type="text" onChange={obj=>pickPrice(obj.target.value)}/>{itemprice}</td>
                    </tr>
                    <tr>
                        <td>Item Qty </td>
                        <td> <input type="text" onChange={obj=>pickQty(obj.target.value)}/>{itemqty}</td>
                    </tr>
                    <tr>
                        <td> Seller  Name </td>
                        <td> <input type="text" onChange={obj=>pickSeller(obj.target.value)}/>{seller}</td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={2}>
                            <button onClick={save}> Save item </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table cellPadding="15" align="right">
                <thead>
                    <tr>
                        <th> Item Name </th>
                        <th> price </th>
                        <th> Qty </th>
                        <th> Seller </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemlist.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.seller}</td>
                                    <td>
                                        <button onClick={delitem.bind(this, index)}> Delete </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
     ) 
}

export default Myhook3;