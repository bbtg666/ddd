import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./components/TopMenu.js";
import { Route, Switch  } from "react-router-dom";
import Login from './components/Login'
import List from './components/live'
import PrivateRoute from './components/protectRoute'
import Aboutus from './components/about';


function Index (){
  return <h1>Home</h1>;
}

function App() {
  return (
    <div className="App">
      <Router>
          <TopMenu />
          <Route path="/" exact component={Index} />
          <PrivateRoute component={List} path="/live"/> 
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/login" exact component={Login} />
      </Router>
    </div>
  );
}
export default App;
