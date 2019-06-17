import React from 'react';
import {AuthConsumer, } from '../providers/AuthProvider';
import {Button, Form, Segment, Header, } from 'semantic-ui-react';

class Register extends React.Component{
  state = {email: '', password: '', passwordConfirmation: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    const {auth: {handleRegistration, }, history, } = this.props;
    const {email, password, passwordConfirmation} = this.state;
    if (password === passwordConfirmation)
      handleRegistration({email, password, passwordConfirmation}, history);
      else alert('Passwords Do Not Match!');
  };

  handleChange = (e) => {
    const {target: {name, value}} = e
      this.setState({[name]: value});
  };

  render(){
    const {email, password, passwordConfirmation} = this.state;
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Register for Book of Face</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label='email'
            required
            autoFocus
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <Form.Input
            label='Password'
            required
            name='password'
            value={password}
            type='password'
            placeholder='Password'
            onChange={this.handleChange}
          />
          <Form.Input
            label='passwordConfirmation'
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            type='password'
            placeholder='Password Confirmation'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Register!</Button>
          </Segment>
        </Form>
      </Segment>
    );
  };
};

export default class ConnectedRegister extends React.Component{
  render(){
    return(
      <AuthConsumer>
        {auth => <Register {...this.props } auth={auth} />}
      </AuthConsumer>
    )
  }
}