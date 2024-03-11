import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Myproduct = () =>{
    let[pname,  pickName] = useState("");
    let[pprice, pickPrice] = useState("");
    let[pphoto,   pickPhoto] = useState("");

    const dispatch = useDispatch();
    const save = () =>{
        let productinfo = {name:pname, price:pprice, photo:pphoto};
        let dispatchdata = {type:"newproduct", info:productinfo};
        dispatch(dispatchdata);
        alert("Details sent to store");
        pickName("");  pickPhoto(""); pickPrice("");
    }

    let allproduct = useSelector( state=>state.Productlist );

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center mb-4">
                    <h1> Manage Product : {allproduct.length} </h1>
                </div>
                <p className="col-lg-3">
                    Product Name  <input type="text" className="form-control"
                    value={pname} onChange={obj=>pickName(obj.target.value)}/>
                </p>
                <p className="col-lg-3">
                    Product Price  <input type="text" className="form-control"
                    value={pprice} onChange={obj=>pickPrice(obj.target.value)}/>
                </p>
                <p className="col-lg-3">
                    Product Photo  <input type="text" className="form-control"
                    value={pphoto} onChange={obj=>pickPhoto(obj.target.value)}/>
                </p>
                <p className="col-lg-3 btn-block">
                    <button className="btn btn-primary" onClick={save}> Save Product </button>
                </p>
            </div>
            <div className="row mt-5">
            {
                allproduct.map((product, index)=>{
                    return(
                        <div className="col-lg-3 mb-4" key={index}>
                            <div className="p-3 border rounded">
                                <h3 className="text-center text-primary">{product.name}</h3>
                                <img src={product.photo} className="roundes" height="140" width="100%"/>
                                <p className="text-denger text-center mt-3">Rs.{product.price}</p>

                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Myproduct;