import React, {useState, useEffect, } from 'react';
import FriendButton from './FriendButton';
import axios from 'axios';
import {Card, Divider, Image, Icon, Button} from 'semantic-ui-react';

const PersonCard = (props) => {
  const [toggleMakeFriend, setToggleMakeFriend] = useState(true);

  const makeFriend = (id) => {
    // axios.post(`/api/people/${id}/friends`, {user_id: props.auth.user.id, person_id: id})
    // .then(setPeople(people.filter( p => {
    //   if (p.id !== id )
    //   return p
    // })))
    // .catch( err => alert(`this person is already your Friend`))
    // showPeople(page)
    setToggleMakeFriend(!toggleMakeFriend)
  };

  return(
    <>
      <Card raised >
        <Image src={props.p.avatar_url} />
        <Card.Content>
          <Divider />
          <Card.Header textAlign='center'>
            {props.p.name}
          </Card.Header>
          <Card.Meta>
            Gender: {props.p.gender}
          </Card.Meta>
          <Card.Meta>
            Location: {props.p.location}
          </Card.Meta>
          <Card.Description>
            <b>Favorite Beer:</b> {props.p.beer}
          </Card.Description>
        </Card.Content>
        {toggleMakeFriend &&
          <Button 
          basic color='green'
          onClick={() => makeFriend(props.personID)}
          // style={displayButton}
          >
            Make Friend!
          </Button>
        }
        <Card.Content extra>
          <Icon name='user' />
          {props.p.friends_count} Friends
        </Card.Content>
      </Card>
    </>
  );
};

export default PersonCard;
