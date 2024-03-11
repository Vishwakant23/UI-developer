
import { useState } from "react";
import swal from 'sweetalert';

const Newuser = () =>{
    let[fullname, pickName] = useState("");
    let[age, pickAge] = useState("");
    let[education, pickEdu] = useState("");
    let[cityname, pickCity] = useState("");

    const save = () =>{
        let url ="http://localhost:3000/user";
        let newuser = {
            "name":fullname,
            "city":cityname,
            "age":age,
            "edu":education
        };

        let postdata = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(newuser)
        }

        fetch(url, postdata)
        .then(response=>response.json())
        .then(userinfo=>{
            swal(fullname, "Saved Successfully...", "Success");
            pickName(""); pickAge(""); pickCity(""); pickEdu("");
            window.location.href = "#/api3";
        })
    }

    return(
        <div className="container">
            <h1 align="center"> Enter User Details </h1>
            <table align="center" className='mytable'>
                <tbody>
                    <tr>
                        <td> Full Name </td>
                        <td> 
                            <input type="text" value={fullname}
                            onChange={obj=>pickName(obj.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td> Age </td>
                        <td> 
                            <input type="text" value={age}
                            onChange={obj=>pickAge(obj.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td> Education </td>
                        <td> 
                            <input type="text" value={education}
                            onChange={obj=>pickEdu(obj.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td> City </td>
                        <td> 
                            <input type="text" value={cityname}
                            onChange={obj=>pickCity(obj.target.value)}/>
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

export default Newuser;