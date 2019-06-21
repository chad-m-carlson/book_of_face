import React, {useState} from 'react';
import {Button, } from 'semantic-ui-react';
import axios from 'axios';

const FriendButton = (props) => {
  const [toggleMakeFriend, setToggleMakeFriend] = useState(true);

  // const makeFriend = (id) => {
  //   axios.post(`/api/people/${id}/friends`, {user_id: props.auth.user.id, person_id: id})
  //   .then(setPeople(people.filter( p => {
  //     if (p.id !== id )
  //     return p
  //   })))
  //   .catch( err => alert(`this person is already your Friend`))
  //   showPeople(page)
  //   setToggleMakeFriend(!toggleMakeFriend)
  // };

  return(
    <>
      {toggleMakeFriend &&
        <Button 
        basic color='green'
        onClick={() => props.makeFriend(props.personID)}
        >
          Make Friend!
        </Button>
      }
    </>
  );
};

export default FriendButton