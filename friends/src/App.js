import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
import FriendForm from './components/FriendForm';
import React, { Fragment } from 'react'
import LandingPage from './components/LandingPage';

function App() {



  const isAuth = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
      
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <PrivateRoute exact path="/friends/form" component={FriendForm} />
            <PrivateRoute exact path="/friends" component={FriendList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>

    
      </div>
    </Router>
  );
}

export default App;
