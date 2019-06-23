 import React from 'react';
import {AuthConsumer, } from '../providers/AuthProvider';
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class Login extends React.Component {
  state = {email: '', password: '' };

  handleSubmit = (e) => {
    const {handleLogin} = this.props.auth
    const {email, password, } = this.state;
    e.preventDefault();
    handleLogin({email, password}, this.props.history);
  };

  handleChange = (e) => {
    const {target: {name, value, } } = e
    this.setState({[name]: value});
  };

  render() {
    const { email, password, } = this.state;
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label='Email'
            value={email}
            autoFocus
            required
            name='email'
            placeholder='Email'
            onChange={this.handleChange}
          />
          <Form.Input
            label='Password'
            value={password}
            required
            name='password'
            type='password'
            placeholder='Password'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>

      </Segment>
    );
  };
};

export default class ConnectedLogin extends React.Component{
  render() {
    return(
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  };
};