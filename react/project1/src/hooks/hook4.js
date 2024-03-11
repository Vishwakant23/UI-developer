import{ useState } from "react";
import Myhook5 from "./hook5";

const Myhook4 = () =>{
    let temp = {name:"Apple", price:"200", qty:"10", seller:"Raj"};

    let[itemlist, updateitem ] = useState([temp]);
    let[itemname, pickName] = useState("");
    let[itemprice, pickPrice]= useState("");
    let[itemqty, pickQty]= useState("");
    let[seller, pickSeller]= useState("");

    const save=()=>{
        let newitem = {name:itemname, price:itemprice, qty:itemqty, seller:seller};
        updateitem(itemlist = [...itemlist, newitem]);
        pickName("");   //this is a trick to clear the input field.
        pickPrice(" "); 
        pickQty("");
        pickSeller("");
    }

     return(
        <div className="container">
            <h1 align="center"> Props in React </h1>
            <table cellPadding="15" align="center">
                <tbody>
                    <tr>
                        <td>Item Name </td>
                         <td> <input type="text" onChange={obj => pickName(obj.target.value)} value={itemname} />
                             {itemname}
                         </td>
                    </tr>
                    <tr>
                        <td>Item price </td>
                         <td> <input type="text" onChange={obj => pickPrice(obj.target.value)} value={itemprice} />
                             {itemprice}
                         </td>
                    </tr>
                    <tr>
                        <td>Item Qty </td>
                         <td> <input type="text" onChange={obj => pickQty(obj.target.value)} value={itemqty} />
                             {itemqty}
                         </td>
                    </tr>
                    <tr>
                        <td> Seller  Name </td>
                         <td> <input type="text" onChange={obj => pickSeller(obj.target.value)} value={seller} />
                             {seller}
                         </td>
                    </tr>
                    <tr>
                        <td align="center" colSpan={2}>
                            <button onClick={save}> Save item </button>
                        </td>
                    </tr>
                </tbody>
             </table>
             <h2 align="center"> Available Items : {itemlist.length} </h2>

             {
                 itemlist.map((item, index) => {
                     return (
                         <Myhook5
                            key={index}
                            productname={item.name}
                            productprice={item.price}
                            productqty={item.qty}
                            productseller={item.seller}
                         />     
                     )
                 })
             }             
             
        </div>
     ) 
}

export default Myhook4;