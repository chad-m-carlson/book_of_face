import React from 'react';
import {Comment, } from 'semantic-ui-react';
import styled from 'styled-components';

const DisplayComments = (props) => {
  const {comments} = props
  return(
    <>
    {comments.map( (c, i) => (
      <Comment as={Replies} key={i}>
        <Comment.Content>
          <Comment.Metadata>
            {c.name}
          </Comment.Metadata>
          <Comment.Text>
            {c.body}
          </Comment.Text>
        </Comment.Content>
      </Comment>
    ))}
    </>
  )
};

const Replies = styled.div`
  background-color: #daad86 !important;
  padding: 10px !important;
  margin: 10px 10px 10px 70px !important;
  border-radius: 5px !important;
  width: 80% !important;
  box-shadow: 3px 3px 3px 0px rgba(171,171,171,1);

`;

export default DisplayComments;