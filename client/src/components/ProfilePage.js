import React from 'react';
import {AuthConsumer} from '../providers/AuthProvider';

const ProfilePage = (props) => (
  <>
  <h1>Profile page</h1>
  <h3>Welcome {props.auth.user.name} </h3>
  </>
);

export default class ConnectedProfilePage extends React.Component{
  render(){
    return(

      <AuthConsumer>
    {auth => <ProfilePage {...this.props } auth={auth} />}
  </AuthConsumer>
      )
  }
};