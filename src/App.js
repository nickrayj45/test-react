import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/pages/Home";

function App() {
  return (
      <>
      <Router>
          <Navbar>
            <Switch>
                <Route path="/" exact component={Home}/>
                {/* <Route path="/projects" exact component={Projects}/>
                <Route path="/about" exact component={About}/>
                <Route path="/contact" exact component={Contact}/> */}
            </Switch>
          </Navbar>
      </Router>
      </>
  )
}

export default App;
