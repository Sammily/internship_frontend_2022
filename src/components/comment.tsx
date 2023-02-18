import React, { useState } from 'react';
import ChildComment from './childComment';

function Comment({
  by,
  id,
  kids,
  parent,
  time,
  text,
}: {
  by: string;
  id: number;
  kids?: number | number[];
  parent: number;
  time: number;
  text: string;
}) {
  const [viewChildComments, setviewChildComments] = useState(false);
  return (
    <>
      <div>
        <b>By: {by}</b>
      </div>
      <div>Kids Comment: {Array.isArray(kids) ? kids.length : 0}</div>
      <div>{text}</div>
      <button
        onClick={() => {
          setviewChildComments(!viewChildComments);
        }}
      >
        Get kids comments
      </button>
      <div>{viewChildComments ? <ChildComment kids={kids} /> : <div>No Child</div>}</div>
    </>
  );
}

export default Comment;
