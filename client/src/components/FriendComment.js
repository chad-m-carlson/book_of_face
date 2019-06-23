import React,{useState, useEffect} from 'react';
import ReplyForm from './ReplyForm';
import axios from 'axios';
import DisplayComments from './DisplayComments';
import { Comment, } from 'semantic-ui-react';
import styled from 'styled-components';


const FriendComment = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const {f} = props;

  useEffect( () => {
    const {person_id} = props.f    
    axios.get(`/api/persons/${person_id}/comments`)
      .then( res => {
        setComments(res.data)
      });
  },[showForm,]);

  const showFriendCount = (count) => {
    if (count <= 1) return <Comment.Metadata>{count} Friend</Comment.Metadata>
    else return <Comment.Metadata>{count} Friends</Comment.Metadata>
  }


return(
  <>
    <Comment as={CommentContainer} key={f.person_id}>
      <Comment.Avatar src={f.avatar_url} size='tiny'/>
      <Comment.Content>
        <Comment.Actions 
          id={f.person_id} 
          onClick={() => setShowForm(!showForm)} 
          style={{float: 'right', cursor: 'pointer'}}>
          Reply
        </Comment.Actions>
        <Comment.Author>{f.name}</Comment.Author>
        {showFriendCount(f.friends_count)}
        <Comment.Text><b><i>Favorite Beer: </i></b> {f.beer}</Comment.Text>
        {comments.length > 0 &&
        <Comment.Actions 
          onClick={() => setShowComments(!showComments)}
          id={f.person_id} 
          style={{cursor: 'pointer'}}
          >
          Show Comments
        </Comment.Actions>}
      </Comment.Content>
      {showForm &&
      <ReplyForm {...props} setShowForm={setShowForm} showForm={showForm}/>
      }
      {showComments &&
      <DisplayComments comments={comments}/>
      }
      </Comment>
  </>
  );
};

const CommentContainer = styled.div`
  border: 1px solid gray !important;
  border-radius: 5px !important;
  background-color: #fbeec1 !important;
  cursor: arrow !important;
  box-shadow: 3px 3px 3px 0px rgba(171,171,171,1);
  padding: 20px !important;
  margin: 25px !important;
`;

export default FriendComment;