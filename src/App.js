import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Food from './Food';
import Bookings from './Bookings';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/food" component={Food} />
          <Route exact path="/bookings" component={Bookings} />
          <Route path="/" render={() =>
            (
              <Redirect to="/" />
            )
          } />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
