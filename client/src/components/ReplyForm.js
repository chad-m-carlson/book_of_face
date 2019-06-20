import React, {useState,  useContext} from 'react';
import {AuthContext} from '../providers/AuthProvider';
import {Form, Button, } from 'semantic-ui-react';
import axios from 'axios';

const ReplyForm = (props) => {
  const [body, setBody] = useState('');
  const auth = useContext(AuthContext)

  const handleSubmit = () => {
    const {id} = auth.user;
    const {person_id} = props.f;
    const comment = {person_id,body, user_id: id};
    axios.post(`/api/users/${id}/comments`, comment );
    props.setShowForm(!props.showForm);
  };

  return(
  <Form onSubmit={handleSubmit}>
    <Form.TextArea 
      onChange={(e) => setBody(e.target.value)}  
    />
    <Button 
      content='Add Reply' 
      labelPosition='left' 
      icon='edit' 
      primary/>
  </Form>
)

}

  export default ReplyForm