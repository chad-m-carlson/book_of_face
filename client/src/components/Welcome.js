import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Header, Card, Image, Divider } from 'semantic-ui-react';
import {Link, } from 'react-router-dom';

const Welcome = () => {
  const [people, setPeople] = useState([])

  useEffect( () => {
    axios.get(`/api/random/people`)
      .then (res => {
        setPeople(res.data)
      });
  }, []);

  return (
    <>
      <Header 
        as='h1' 
        textAlign='center' 
        style={{fontFamily: 'monoton', fontSize: '72px', marginTop: '25px'}}> 
      Book of Face</Header>
      <h1 style={{textAlign: 'center'}}><Link to='/register'>Register</Link> for the Book of Face to take advantage of connecting with all your favorite people.</h1>
      <h3>Here is just a small sample of some of the amazing people you can find on the Book of Face</h3>
      <Card.Group>
        { people.map( (p, i) => 
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
            </Card.Content>
          </Card>)}
      </Card.Group>
    </>
    )
};

export default Welcome;