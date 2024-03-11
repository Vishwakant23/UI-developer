
function Myitem() {
    let allitem = [
        {name:"Apple", price:300, qty:100, seller:"Mun"},
        {name:"Mango", price:200, qty:200, seller:"Nun"},
        {name:"Litchi", price:700, qty:300, seller:"Naan"},
        {name:"Orange", price:100, qty:400, seller:"Kun"},
        {name:"Grapes", price:900, qty:500, seller:"Vun"},
    ];
    return (
        <div className="container">
            <h1> Item List :{allitem.length} </h1>
            <table className="mytable">
                <thead>
                    <tr>
                        <th> Item Name </th>
                        <th> Item Price </th>
                        <th> Item Quantity </th>
                        <th> Seller </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allitem.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td> {item.name} </td>
                                    <td> {item.price} </td>
                                    <td> {item.qty} </td>
                                    <td> {item.seller} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
} 
export default Myitem;