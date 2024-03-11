import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// useDispatch - send data from react to redux
// useSelector - bring data from redux to react 
// both belongs to react-redux 

 
const Myuser = () =>{
    let dispatch = useDispatch();

    let[fullname, pickName] = useState("");
    const save = () =>{
        let dispatchdata = {username:fullname, type:"adduser"};
        dispatch( dispatchdata );// sending to store 
        pickName("");
    }

    const deluser = (index)=>{
        let dispatchdata = {userindex:index, type:"deleteuser"};
        dispatch( dispatchdata )
    }

    const alluser = useSelector( state=>state.Userlist );

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1> Manage User : {alluser.length} </h1>
                    <p>
                        Enter Name : <input type="text" className="m-3"
                        onChange={obj=>pickName(obj.target.value)}
                        value={fullname}/>
                        <button className="btn btn-primary m-3"
                        onClick={save}> Save User </button>
                    </p>
                </div>
            </div>
            
            <div className="row mt-4 text-center">
                {
                    alluser.map((name, index)=>{
                        return(
                            <div className="col-lg-2 mb-4" key={index}>
                                <div className="p-3 border">
                                    <p> {name} </p>
                                    <button className="btn btn-danger btn-sm"
                                    onClick={deluser.bind(this, index)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myuser;