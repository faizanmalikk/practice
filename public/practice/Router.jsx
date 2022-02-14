import React from "react";
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Home from "../../src/containers/Home"
import About from "../../src/containers/About"

class Abc extends React.Component{
    render(){
        return(
            <Router>
              <Routes>
          <Route exact  path="/about"  element={<About/>} />
         
         
         
          <Route exact path="/"  element={<Home/>}/>
       
       
        </Routes>
            </Router>
        )
    }
}
export default Abc;