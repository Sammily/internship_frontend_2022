import React from 'react';

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
  return (
    <>
      <div>By: {by}</div>
      <div>Kids Comment: {Array.isArray(kids) ? kids.length : 0}</div>
      <div>{text}</div>
    </>
  );
}

export default Comment;
