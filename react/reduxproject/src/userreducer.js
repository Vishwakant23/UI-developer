

const Userlist = (state=[], action) =>{

    let mydata = Object.assign([], state);

    if( action.type==="adduser")
    {
        mydata.push( action.username );
    }

    if( action.type==="deleteuser")
    {
        mydata.splice( action.userindex, 1 );
    }
     
    
    return mydata;
}

export default Userlist;