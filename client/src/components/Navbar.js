import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Menu, } from 'semantic-ui-react';
import {Link, withRouter, } from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: {user, handleLogout}, location, } = this.props;
    if (user){
      return(
        <Menu.Menu position='right'>
          <Link to='/profile'>
            <Menu.Item
              as={MenuButton}
              id='profile'
              name='profile'
              active={location.pathname ==='/profile'}
            />
          </Link>
          <Link to='/'>
          <Menu.Item
            as={MenuButton}
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
            />
          </Link>
        </Menu.Menu>
      )
    } else {
      return(
        <Menu.Menu position='right'>
        <Link to='/login'>
          <Menu.Item
            as={MenuButton}
            id='login'
            name='login'
            active={location.pathname === '/login'}
            />
        </Link>
        <Link to='/register'>
          <Menu.Item
            as={MenuButton}
            id='register'
            name='register'
            active={location.pathname === '/register'}
            />
        </Link>
      </Menu.Menu>
      );
    };
  };
  
  render() {
    return(
      <div>
        <Menu pointing secondary style={{backgroundColor: '#4267b2', borderBottom: '1px solid black'}}>
          <Link to='/' >
            <Menu.Item
              as={MenuButton}
              name='home'
              id='home'
              active={this.props.location.pathname ==='/'}
            />
          </Link>
          { this.rightNavItems()}
        </Menu>
      </div>
    );
  };
};

export class ConnectedNavbar extends React.Component {
  render() {
    return(
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth}/>
          }
      </AuthConsumer>
    );
  };
};

const MenuButton = styled.div`
  color: white !important;
  &:hover{
    background: rgba(0, 0, 0, .1)!important;
  }
`;

export default withRouter(ConnectedNavbar);