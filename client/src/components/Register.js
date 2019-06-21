import React from 'react';
import {AuthConsumer, } from '../providers/AuthProvider';
import {Button, Form, Segment, Header, } from 'semantic-ui-react';
import axios from 'axios';

class Register extends React.Component{
  state = {email: '', password: '', passwordConfirmation: '', age: '', location: '', gender: '', avatar_url: '', about: '', name: ''};

  handleSubmit = (e) => {
    e.preventDefault();
    const {auth: {handleRegistration, }, history, } = this.props;
    const {email, password, passwordConfirmation, age, location, gender, avatar_url, about, name} = this.state;
    const newPerson = {email, password, passwordConfirmation, age, location, gender, avatar_url, about, name,}
    if (password === passwordConfirmation){
      handleRegistration(newPerson, history);
      axios.post(`/api/people`, newPerson)}
      else alert('Passwords Do Not Match!');
  };

  handleChange = (e) => {
    const {target: {name, value}} = e
      this.setState({[name]: value});
  };

  render(){

    const {email, password, passwordConfirmation, age, location, gender, avatar_url, about, name, } = this.state;
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
            placeholder='email'
            onChange={this.handleChange}
          />
          <Form.Input
            label='Full Name'
            required
            name='name'
            value={name}
            placeholder='name'
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
            label='Password Confirmation'
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            type='password'
            placeholder='Password Confirmation'
            onChange={this.handleChange}
          />
          <Form.Input
            label='Age'
            name='age'
            value={age}
            placeholder='Age'
            onChange={this.handleChange}
          />
          <Form.Input
            label='Location'
            name='location'
            value={location}
            placeholder='Location'
            onChange={this.handleChange}
          />
          <Form.Input
            label='Gender'
            name='gender'
            value={gender}
            placeholder='Gender'
            onChange={this.handleChange}
          />
          <Form.Input
            label='Avatar'
            name='avatar_url'
            value={avatar_url}
            placeholder='Avatar URL'
            onChange={this.handleChange}
          />
          <Form.Input
            label='About'
            name='about'
            value={about}
            placeholder='About'
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