// import state from "sweetalert/typings/modules/state";

const Apilist = (state=[], action) =>{

    let mydata = [Object.assign([], state)];
    if(action.type==="newblog")
    {
        mydata = action.bolgdata;
    }
    return mydata;
}

export default Apilist;