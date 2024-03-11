import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";



const Myapi = () =>{
    let [bloglist, updateBlog]=useState( [] );
    const getBlog= () =>{
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(blogArray=>{
            updateBlog(blogArray)
        })
    }


    useEffect(()=>{
        getBlog();
    },[1]);



    const dispatch= useDispatch();
    const save = ()=>{
        let dispatchdata={blogdata:bloglist, type:"newblog"}
        dispatch(dispatchdata);
        alert("data Sent to Redux");
    }


    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1> Manage Api Data </h1>
                    <p>
                        <button className="btn btn-primary m-3"
                        onClick={save}> Send Data to Redux </button>
                    </p>
                </div>
            </div>
            <div className="row">
                {
                    bloglist.map((blog, index)=>{
                        return(
                            <div className="col-lg-4 mb-4" key={index}>
                                <div className="p-4 rounded border">
                                    <h4>{blog.title} </h4>
                                    <p>{blog.body}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myapi;