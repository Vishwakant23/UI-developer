
import { useState } from "react";
import swal from 'sweetalert';

const Newproduct = () =>{
    let[productname, pickName] = useState("");
    let[producttype, pickType] = useState("");
    let[productweight, pickWeight] = useState("");
    let[productcolor, pickColor] = useState("");
    let[productprice, pickPrice] = useState("");

    const save = () =>{
        let url ="http://localhost:3000/user";
        let newproduct = {
            "name":productname,
            "type":producttype,
            "weight":productweight,
            "color":productcolor,
            "price":productprice
        };

        let postdata = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(newproduct)
        }

        fetch(url, postdata)
        .then(response=>response.json())
        .then(productinfo=>{
            swal(productname, "Saved Successfully...", "Success");
            pickName(""); pickType(""); pickWeight(""); pickColor(""); pickPrice("");
            window.location.href = "#/api4";
        })
    }

    return(
        <div className="container">
            <h1 align="center"> Enter Product Details </h1>
            <table align="center" className='mytable'>
                <tbody>
                    <tr>
                        <td> Product Name </td>
                        <td> 
                            <input type="text" value={productname}
                            onChange={obj=>pickName(obj.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td> Product Type </td>
                        <td> 
                            <input type="text" value={producttype}
                            onChange={obj=>pickType(obj.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td> Product Weight </td>
                        <td> 
                            <input type="text" value={productweight}
                            onChange={obj=>pickWeight(obj.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td> Product Color </td>
                        <td> 
                            <input type="text" value={productcolor}
                            onChange={obj=>pickColor(obj.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td> Product Price </td>
                        <td> 
                            <input type="text" value={productprice}
                            onChange={obj=>pickPrice(obj.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center">
                            <button onClick={save}> Save User </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Newproduct;