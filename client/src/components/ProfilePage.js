import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {AuthConsumer} from '../providers/AuthProvider';
import {Button} from 'semantic-ui-react';

const ProfilePage = (props) => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axios.get(`/api/people/${props.auth.user.id}/friends`)
      .then( res => {
        setFriends(res.data)
      })
      .catch( err => {
        console.log(err)
      })
  },[]);

  const showFriends = () => {

  }

  return(
  <>
    <h1>Profile page</h1>
    <h3>Welcome {props.auth.user.name} </h3>
    <Button onClick={showFriends}>Show Friends</Button>
    <br />
    <br />
    <ul>
      {friends.map( f => {
        return(
          <li key={f.id}>{f.name}</li>
          )
      })}
    </ul>
    
  </>
  );
};

export default class ConnectedProfilePage extends React.Component{
  render(){
    return(

      <AuthConsumer>
    {auth => <ProfilePage {...this.props } auth={auth} />}
  </AuthConsumer>
      )
  }
};