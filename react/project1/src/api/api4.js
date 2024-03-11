import { useState, useEffect } from 'react';


const Myapi4 = () =>{
    let[userlist, updateUser] = useState( [] );

    const getuser = () =>{
        fetch("http://localhost:3000/user")
        .then(response=>response.json())
        .then(userArray=>{
            updateUser(userArray);
            updateinfo(userArray[0]);
        })
    }

    useEffect(()=>{
        getuser()
    }, [1]);

    let[fullinfo, updateinfo] = useState( {} )
    const getDetails = (userinfo) => {
        updateinfo(userinfo);
    }

    return(
        <div className='container'>
            <h1 align="center"> User List : {userlist.length} </h1>
        
            <table align="left" cellPadding="20">
                <thead>
                    <tr>
                        <th> Full Name </th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.map((user, index)=>{
                            return(
                                <tr key={index}>
                                    <td onClick={getDetails.bind(this, user)}> {user.name} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <table align="right" cellPadding="20">
            <tbody>
                <tr>
                    <td colSpan="2"> <h1> {fullinfo.name} </h1></td>
                </tr>
                <tr> <td> User Id </td>    <td> {fullinfo.id} </td> </tr>
                <tr> <td> Age </td>        <td> {fullinfo.age} </td> </tr>
                <tr> <td> Education </td>  <td> {fullinfo.edu} </td> </tr>
                <tr> <td> City </td>       <td> {fullinfo.city} </td> </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Myapi4;