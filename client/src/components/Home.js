import React, {useState, useEffect, }from 'react';
import axios from 'axios';
import FriendButton from './FriendButton';
import {AuthConsumer} from '../providers/AuthProvider';
import {Header, Card, Divider, Image, Button, Icon } from 'semantic-ui-react';

const Home = (props) => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(0);
  const [shownPeople, setShownPeople] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [toggleMakeFriend, setToggleMakeFriend] = useState(true);

  
  const findFriendsClick = (x) => {
    showPeople(x);
    toggleButton();
  };
  
  const showPeople = (page) => {
    let sp = people.slice(page*8, page*8+8);
    setShownPeople(sp)
  };
  
  const pageCounter = (operator) => {
    if (operator === 'plus') setPage(page + 1)
    else setPage(page - 1);
    showPeople(page)
  };
  
  const toggleButton = () => {
    setShowButton(!showButton)
  };
  
  const makeFriend = (id) => {
    axios.post(`/api/people/${id}/friends`, {user_id: props.auth.user.id, person_id: id})
    .then(setPeople(people.filter( p => {
      if (p.id !== id )
      return p
    })))
    .catch( err => alert(`this person is already your Friend`))
    showPeople(page)
    setToggleMakeFriend(!toggleMakeFriend)
  };
  
  useEffect( ()=> {
    axios.get(`/api/people/`)
      .then( res => {
        setPeople(res.data)
      })
      .catch( err => console.log(err));
  },[]);

  // const renderMakeFriendButton = (id) => (
  //   <>
  //     {toggleMakeFriend &&
  //       <Button 
  //       basic color='green'
  //       onClick={() => makeFriend(id)}
  //       >
  //         Make Friend!
  //       </Button>
  //     }
  //   </>
  // )

  return(
  <>
    <Header 
      as='h1' 
      textAlign='center' 
      style={{fontFamily: 'monoton', fontSize: '72px'}}> 
    Book of Face</Header>
    <Button 
      onClick={() => findFriendsClick(0)}
      style={showButton ? {display: 'inline-block'} : {display: 'none'}}
      >Find Friends</Button>
    <Card.Group itemsPerRow={4}>
      { shownPeople.map( (p, i) => 
        <Card raised key={i}>
          <Image src={p.avatar_url} />
          <Card.Content>
            <Divider />
            <Card.Header textAlign='center'>
              {p.name}
            </Card.Header>
            <Card.Meta>
              Gender: {p.gender}
            </Card.Meta>
            <Card.Meta>
              Location: {p.location}
            </Card.Meta>
            <Card.Description>
              <b>Favorite Beer:</b> {p.beer}
            </Card.Description>
          </Card.Content>
          {/* MAKE ONE BUTTON DISSAPEAR ON CLICK NOT ALL */}
          {/* {renderMakeFriendButton(p.id)} */}
          <FriendButton personID={p.id} makeFriend={makeFriend} toggleMakeFriend={toggleMakeFriend} />
          
          <Card.Content extra>
            <Icon name='user' />
            {Math.floor(Math.random()*1012)} Friends
          </Card.Content>
        </Card>)}
    </Card.Group>
    <br />
    <br />
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Button 
        onClick={() => pageCounter('minus')}
        style={(page < 1) ? {display: 'none'} : {display: 'block'}}
        >Previous</Button>
      <Button 
        onClick={() => pageCounter('plus')}
        style={showButton ? {display: 'none'} : {display: 'block'}}
        >Next</Button> 
    </div>
  </>
  );
};

export default class ConnectedHome extends React.Component{
  render(){
    return(
      <AuthConsumer>
        {auth => <Home {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  };
};
