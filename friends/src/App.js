import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
import FriendForm from './components/FriendForm';

function App() {

  const logout = () => {
    localStorage.removeItem("token");
    console.log("Logged out!");
  };

  const isAuth = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Module Project - Authentication</p>

          <ul>
            <li>

              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
            <li>
              <Link onClick={logout}>Logout</Link>
            </li>
            <li>
             <Link to="/friends/form">Friends Form</Link>
            </li>
            <li>
              <Link to="/protected"> Protected Page</Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute exact path="/friends/form" component={FriendForm} />
            <PrivateRoute exact path="/friends" component={FriendList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>

        </header>
      </div>
    </Router>
  );
}

export default App;
