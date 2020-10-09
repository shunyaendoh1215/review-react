import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import './App.scss';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./foundations/Layout";

// you can use history api (ex. props.history.push('hoge');)
const LayoutWithRouter = withRouter(Layout);

const App = () => {
  return (
    <Router>
      <LayoutWithRouter>
        <Switch>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </div>
        </Switch>
      </LayoutWithRouter>
    </Router>
  );
}

export default App;
