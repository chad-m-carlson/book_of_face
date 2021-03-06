import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProfilePage from './components/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import EditProfile from './components/EditProfile';
import Welcome from './components/Welcome';
import {Switch, Route, } from 'react-router-dom';
import {Container, } from 'semantic-ui-react';

function App() {
  return (
    <>
      <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <ProtectedRoute exact path ='/home' component = {Home} />
            <ProtectedRoute exact path ='/profile/edit' component = {EditProfile} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <ProtectedRoute exact path='/profile' component={ProfilePage} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
};

export default App;
