import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {AuthConsumer} from '../providers/AuthProvider';
import {Button} from 'semantic-ui-react';

const ProfilePage = (props) => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axios.get(`/api/people`)
      .then( res => {
        setFriends(res.data)
      })
      .catch( err => {
        console.log(err)
      })
  },[]);

  const handleNewFriend = (e, {target, id}) => {
    axios.put(`/api/people/${id}`)
  };

  const showFriends = () => {

  }

  return(
  <>
    <h1>Profile page</h1>
    <h3>Welcome {props.auth.user.name} </h3>
    <Button onClick={showFriends}>Show Friends</Button>
    <br />
    <br />
    {friends.map( f => {
      return(
        <div  key={f.id}>
          <p>{f.name}</p>
          <Button
            onClick={handleNewFriend}
            id={f.id}
          >Add friend
          </Button>
        </div>
      )
    })};
    
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