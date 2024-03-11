
const Customerlist = () => {
    let allcustomer = [
        {city:"Bangalore", user:['Ram', 'Kumar', 'Sunil']},
        {city:"Chennai", user:['Sundar', 'Bala', 'Anil']},
        {city:"Delhi", user:['Karnan', 'Subash', 'Uman']},
        {city:"Pune", user:['Hari', 'Mubash', 'Amar']}
    ]
    return (
        <div className="container">
            <h1> Customer List : {allcustomer.length} </h1>
            {
                allcustomer.map((customer, index) => {
                    return(
                        <fieldset key={index}>
                            <legend> {customer.city} </legend>
                            {
                                customer.user.map((fullname, index2) => {
                                    return (
                                        <p key={index2}> {fullname}</p>
                                    )
                                })
                            }
                       </fieldset>
                    )
                })
            }
        </div>
    )
}

export default Customerlist;

