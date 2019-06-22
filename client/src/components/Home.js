import React, {useState, useEffect, }from 'react';
import PersonCard from './PersonCard';
import axios from 'axios';
import {AuthConsumer} from '../providers/AuthProvider';
import {Header, Card, Button,  } from 'semantic-ui-react';

const Home = (props) => {
  const [people, setPeople] = useState([]);

  const [page, setPage] = useState(0);
  const [shownPeople, setShownPeople] = useState([]);
  const [showButton, setShowButton] = useState(true);

  const findFriendsClick = (x) => {
    // showPeople(x);
    toggleButton();
  };
  
  useEffect( ()=> {
    axios.get(`/api/people/`)
      .then( res => {
        setPeople(res.data)
      })
      .catch( err => console.log(err));
  },[]);
  
  const pageCounter = (operator) => {
    if (operator === 'plus') setPage(page + 1)
    else setPage(page - 1);
    // showPeople(page)
  };
  
  const toggleButton = () => {
    setShowButton(!showButton)
  };

  // const showPeople = (page) => {
  //   let sp = people.slice(page*8, page*8+8);
  //   setShownPeople(sp)
  // };
  
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
      { people.map( (p, i) => 
        <PersonCard 
          key={i} p={p} 
          shownPeople={shownPeople} 
          people={people} 
          setShowButton={setShownPeople} 
          people={people}
          setPeople={setPeople}
          auth={props.auth}
          // showPeople={showPeople}
          />
      )}
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
