import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FriendComment from './FriendComment';
import {AuthConsumer} from '../providers/AuthProvider';
import {Comment,} from 'semantic-ui-react';

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
  },[props.auth.user.id]);

  return(
  <>
    <h1>Profile page</h1>
    <h3>Welcome {props.auth.user.name} </h3>
    <br />
    <br />
    <Comment.Group>
      {friends.map( f => 
      <FriendComment f={f} key={f.person_id}/>
        )}
    </Comment.Group>
    
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