import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Form/Login';
import NoMatch from './components/NoMatch/NoMatch';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/destination/:title">
            <Destination />
          </PrivateRoute>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/notFound">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
