
// what is concept of combine reducer

import Userlist from "./userreducer";
import Productlist from "./productreducer";
import Apilist from "./apireducer";

import { combineReducers } from "redux";

const Mainreducer = combineReducers({
    Userlist, Productlist, Apilist
});


export default Mainreducer;
