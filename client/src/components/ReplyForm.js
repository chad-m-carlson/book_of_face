import React from 'react';
import {Form, Button, } from 'semantic-ui-react';

const ReplyForm = (props) => (

  
  <Form reply>
    <Form.TextArea size='small' />
    <Button onClick={()=>props.setShowForm(!props.showForm)} content='Add Reply' labelPosition='left' icon='edit' primary/>
  </Form>

)

  export default ReplyForm