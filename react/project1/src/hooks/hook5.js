
const Myhook5 = (iteminfo) => {
    return (
        <fieldset>
            <legend> {iteminfo.productname} </legend>
            <p> Rs.{iteminfo.productprice} </p>
            <p> inStock : {iteminfo.productqty} </p>
            <p> Seller : {iteminfo.productseller} </p>
       </fieldset>
   ) 

}

export default Myhook5;