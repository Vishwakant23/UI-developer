import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Myitem from "./basic/item";
import Myhome from "./basic/home";
import Customerlist from "./basic/customer";
import Mybook from "./basic/book";
import Myuser from "./basic/user";
import Myhook1 from "./hooks/hook1";
import Myhook2 from "./hooks/hook2";
import Myhook3 from "./hooks/hook3";
import Myhook4 from "./hooks/hook4";

import Myapi1 from "./api/api1";
import Myapi2 from "./api/api2";
import Myapi3 from "./api/api3";
import Newuser from "./api/adduser";
import EditMyuser from "./api/edituser";
import Myapi4 from "./api/api4";
import Myapi5 from "./api/api5";
import Newproduct from "./api/addproduct";


function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/" className="toplink"> Home </Link>
        <Link to="/itemlist" className="toplink"> Item </Link>
        <Link to="/customerlist" className="toplink"> Customer </Link>
        <Link to="/booklist" className="toplink"> Books </Link>
        <Link to="/userlist" className="toplink"> Users </Link>
        <Link to="/hook1" className="toplink"> Hook-1 </Link>
        <Link to="/hook2" className="toplink"> Hook-2 </Link>
        <Link to="/hook3" className="toplink"> Hook-3 </Link>
        <Link to="/hook4" className="toplink"> Props </Link>
        <Link to="/api1" className="toplink"> Api1 </Link>
        <Link to="/api2" className="toplink"> Api2 </Link>
        <Link to="/api3" className="toplink"> Api3 </Link>
        <Link to="/newuser" className="toplink"> Adduser </Link>
        <Link to="/api4" className="toplink"> Api4 </Link>
        <Link to="/api5" className="toplink"> Api5 </Link>
        <Link to="/newproduct" className="toplink"> Addproduct </Link>
 
      </nav>

      <Routes>
        <Route exact path="/" element={ <Myhome/>}/>
        <Route exact path="/itemlist" element={ <Myitem/>}/>
        <Route exact path="/customerlist" element={ <Customerlist/>}/>
        <Route exact path="/booklist" element={ <Mybook/>}/>
        <Route exact path="/userlist" element={ <Myuser/>}/>
        <Route exact path="/userlist" element={ <Myuser/>}/>
        <Route exact path="/hook1" element={ <Myhook1/>}/>
        <Route exact path="/hook2" element={ <Myhook2/>}/>
        <Route exact path="/hook3" element={ <Myhook3/>}/>
        <Route exact path="/hook4" element={ <Myhook4/>}/>
        <Route exact path="/api1" element={ <Myapi1/>}/>
        <Route exact path="/api2" element={ <Myapi2/>}/>
        <Route exact path="/api3" element={ <Myapi3/>}/>
        <Route exact path="/newuser" element={ <Newuser/>}/>
        <Route exact path="/edituser/:userid" element={ <EditMyuser/>}/>
        <Route exact path="/api4" element={ <Myapi4/>}/>
        <Route exact path="/api5" element={ <Myapi5/>}/>
        <Route exact path="/newproduct" element={ <Newproduct/>}/>
        
      </Routes>
    </HashRouter>
  );
}

export default App;

// Myitem(); - in Javasript 
// <Myitem/> - in jsx