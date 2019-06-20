import React,{useState, } from 'react';
import ReplyForm from './ReplyForm'
import { Comment, } from 'semantic-ui-react';
import styled from 'styled-components';


const FriendComment = (props) => {
  const {f} = props
  const [showForm, setShowForm] = useState(false)


return(
  <>
    <Comment as={CommentContainer} key={f.person_id}>
      <Comment.Avatar src={f.avatar_url} size='tiny'/>
      <Comment.Content>
        <Comment.Author>{f.name}</Comment.Author>
        <Comment.Text><b><i>Drinking: </i></b> {f.beer}</Comment.Text>
        <Comment.Action id={f.person_id} onClick={() => setShowForm(!showForm)}>
          Reply
        </Comment.Action>
      </Comment.Content>
      {showForm &&
      <ReplyForm {...props} setShowForm={setShowForm} showForm={showForm}/>
      }
      </Comment>
  </>
  );
};

const CommentContainer = styled.div`
  border: 1px solid gray !important;
  border-radius: 5px !important;
  background-color: azure !important;
  cursor: arrow !important;
  box-shadow: 3px 3px 3px 0px rgba(171,171,171,1);
  padding: 10px !important;
  margin: 15px !important;
`;

export default FriendComment;