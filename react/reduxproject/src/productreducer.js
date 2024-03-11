import { act } from "react-dom/test-utils";

const Productlist = (state=[], action) =>{

    let mydata = Object.assign([], state);
    if( action.type==="newproduct")
    {
        mydata.push (action.info);
    }
    return mydata;
}

export default Productlist;