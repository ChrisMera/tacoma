import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Splash from "./pages/Splash";
import Admin from "./pages/Admin";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/admin" component={Admin} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
