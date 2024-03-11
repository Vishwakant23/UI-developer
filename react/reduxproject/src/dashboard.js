import { useSelector } from "react-redux";

const Mydashboard = () =>{
    let alluser = useSelector( state=>state.Userlist );
    let allproduct = useSelector( state=>state.Productlist );
    let bloglist = useSelector( state=>state.Apilist );

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1> React & Redux Dashboard </h1>
                </div>
            </div>
            <div className="row mt-4">
               <div className="col-lg-3">
                    <h3> Total Users : {alluser.length} </h3>
                    {
                        alluser.map((name, index)=>{
                            return(
                                <p key={index}> {index+1} # {name}</p>
                            )
                        })
                    }
               </div>
               <div className="col-lg-9">
                    <div className="row">
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

export default Mydashboard;