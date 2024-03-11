import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Mydashboard from "./dashboard";
import Myuser from "./user";
import Myapi from "./api";
import Myproduct from "./product";
import Mytest from "./test";

function App() {
  return (
    <HashRouter>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-4 text-center text-danger">
              <h1> React With Redux </h1>
          </div>
          <div className="col-lg-8 text-end">
              <div className="btn-group">
                  <Link className="btn btn-primary"   to="/">Dashboard</Link>
                  <Link className="btn btn-success"   to="/user">Manage User</Link>
                  <Link className="btn btn-info"      to="/product">Manage Product</Link>
                  <Link className="btn btn-danger"    to="/api">Manage Api</Link>
                  <Link className="btn btn-secondary" to="/test">React Test</Link>
              </div>
          </div>
        </div>
      </div>
      
      <Routes>
        <Route exact path="/" element={  <Mydashboard/>  }/>
        <Route exact path="/user" element={  <Myuser/>   }/>
        <Route exact path="/product" element={  <Myproduct/> }/>
        <Route exact path="/api" element={  <Myapi/> }/>
        <Route exact path="/test" element={  <Mytest/> }/>
      </Routes>
    </HashRouter>
  );
}

export default App;
