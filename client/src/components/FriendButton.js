import React, {useState} from 'react';
import {Button, } from 'semantic-ui-react';
import axios from 'axios';

const FriendButton = (props) => {
  const [toggleMakeFriend, setToggleMakeFriend] = useState(true);

  // if (props.toggleMakeFriend)
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
  // else return null
};

export default FriendButton