import { useState, useEffect } from 'react';

const Myapi2 = () =>{
    let[bloglist, updateBlog] = useState( [] );

    const getblog = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(blogArray=>{
            updateBlog(blogArray)
        })
    }

    useEffect(()=>{
        getblog();
    }, [1]);

    return(
        <div className='container'>
            <h1 align="center"> Recent Blogs : {bloglist.length} </h1>
            {
                bloglist.map((blog, index)=>{
                    return(
                        <div className='two' key={index}>
                            <h3> {blog.title} </h3>
                            <p> {blog.body} </p>
                        </div>    
                    )
                })
            }
        </div>
    )

}
export default Myapi2;