import React, {useState,  } from 'react';
import axios from 'axios';
import {Card, Divider, Image, Icon, Button} from 'semantic-ui-react';

const PersonCard = (props) => {
  const [toggleMakeFriend, setToggleMakeFriend] = useState(true);
  
  const makeFriend = (id) => {
    axios.post(`/api/people/${id}/friends`, {user_id: props.auth.user.id, person_id: id})
    // .then(props.setPeople(props.people.filter( p => {
    //   if (p.id !== id )
    //   return p
    // })))
    .catch( err => alert(`this person is already your Friend`))
    // props.showPeople(page)
    setToggleMakeFriend(!toggleMakeFriend)
  };

  const showFriendCount = (count) => {
    if (count <= 0) return ( <Card.Content extra>
        <Icon name='user' />
          No Friends 
        </Card.Content>)
    else if (count = 1) return  (<Card.Content extra>
        <Icon name='user' />
          {count} Friend
        </Card.Content>)
    else return ( <Card.Content extra>
        <Icon name='user' />
          {count} Friends
        </Card.Content>)
  }

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
          onClick={() => makeFriend(props.p.id)}
          >
            Make Friend!
          </Button>
        }
        {showFriendCount(props.p.friends_count)}
       
      </Card>
    </>
  );
};

export default PersonCard;
