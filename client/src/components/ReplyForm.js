import React, {useState, useContext} from 'react';
import {AuthContext} from '../providers/AuthProvider';
import {Form, Button, } from 'semantic-ui-react';
import axios from 'axios';

const ReplyForm = (props) => {
  const [commentBody, setCommentBody] = useState('');
  const [commentReciever, setCommentReciever] = useState('');
  const auth = useContext(AuthContext)

  const handleSubmit = () => {
    const {id} = auth.user
    const comment = {commentBody, }
    console.log(id)
    axios.post(`/api/users/${id}/comments`, )
  };

  return(
    // NEED TO GET THE FRIEND ID TO SUBMIT WITH COMMENT
  <Form onSubmit={handleSubmit}>
    <Form.TextArea 
      onChange={(e) => setCommentBody(e.target.value)}  
    />
    <Button 
      // onClick={()=>props.setShowForm(!props.showForm)} 
      content='Add Reply' 
      labelPosition='left' 
      icon='edit' 
      primary/>
  </Form>
)

}

  export default ReplyForm