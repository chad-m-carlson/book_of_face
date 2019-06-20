import React from 'react';

const DisplayComments = (props) => {
  const {comments} = props
  return(
    <>
    {comments.map( c => (
      <p>{c.body}</p>
    ))}
    </>
  )
};

export default DisplayComments;