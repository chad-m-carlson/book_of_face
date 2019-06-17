import React from 'react';
import {Link, } from 'react-router-dom';
import {Button, Image} from 'semantic-ui-react';

const NoMatch = () => (
  <>
    <Image src="https://blog.hubspot.com/hubfs/404-error-page-examples.jpeg" />
    <br />
    <Link to='/'>
      <Button as='h3' textAlign='center'> Return to Home Page</Button>
    </Link>
  </>
);

export default NoMatch;