import React,{useContext, useState, useEffect, } from 'react';
import ReplyForm from './ReplyForm'
import {Form, Button, Comment, } from 'semantic-ui-react';


const FriendComment = (props) => {
  const {f} = props
  const [showForm, setShowForm] = useState(false)


return(
  <>
      <Comment  key={f.person_id}>
        <Comment.Avatar src={f.avatar_url} size='tiny'/>
        <Comment.Content>
          <Comment.Author>{f.name}</Comment.Author>
          <Comment.Text><b><i>Drinking: </i></b> {f.beer}</Comment.Text>
          <Comment.Action id={f.person_id} onClick={() => setShowForm(!showForm)}>
            Reply
          </Comment.Action>
        </Comment.Content>
        </Comment>
    {showForm &&
    <ReplyForm {...props} setShowForm={setShowForm} showForm={showForm}/>
    }
  </>
  );
};

export default FriendComment;