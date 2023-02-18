import { getStory } from 'app/fetch';
import React, { useEffect, useState } from 'react';
import { CommentsType } from 'utils/types';

function ChildComment({ kids }: { kids?: number | number[] }) {
  const [childCommentsData, setChildCommentsData] = useState<CommentsType[]>([]);
  const comments = kids;
  const arrayOfComments: CommentsType[] = [];

  async function getComments() {
    if (Array.isArray(comments)) {
      for (let i = 0; i < comments.length; i += 1) {
        arrayOfComments.push(await getStory(comments[i]));
      }
    }
    setChildCommentsData(arrayOfComments);
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      {childCommentsData.map((item) => (
        <div key={item.id}>
          <div>By: {item.by}</div>
          <div>Child Comment: {item.text}</div>
        </div>
      ))}
    </>
  );
}

export default ChildComment;
