"use client"
import React from 'react';
import './Comment.css'
interface CommentListProps {
  comments: string[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div>
        <div className='Comlist'>
        {comments.map((comment, index) => (
          <><div className=''><p className='List text'>{comment}</p></div></>
        ))}
        </div>
    </div>
    
  );
};

export default CommentList;
