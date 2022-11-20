import React from 'react';


const CommentList = ({ comments }) => {
    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>;
    })

    return (
        <div>
            {renderedComments}
        </div>
    );
};

export default CommentList;