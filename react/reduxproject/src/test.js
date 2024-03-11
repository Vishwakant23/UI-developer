import { useState } from "react";

const Mytest = () =>{
    let[customerlist, updateCustomer] = useState( [] );
    let[newcustomer, pickCustomer] = useState("");
    const save = () =>{
        updateCustomer(customerlist=[...customerlist,newcustomer]);
        pickCustomer("");
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1> Manage Customer : {customerlist.length} </h1>
                    <p>
                        Enter Customer Name : 
                        <input type="text" className="m-3"
                        onChange={obj=>pickCustomer(obj.target.value)}
                        value={newcustomer}/>

                        <button className="btn btn-primary m-3" onClick={save}> Save </button>
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                {
                    customerlist.map((customername, index)=>{
                        return(
                            <p key={index} className="col-lg-3 mb-4"> 
                                {customername} 
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Mytest;