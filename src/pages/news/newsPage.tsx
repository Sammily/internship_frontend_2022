import { CurrentNewsContext } from 'app/App';
import { getStory } from 'app/fetch';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CommentsType, State, StateAll } from 'utils/types';
import Comment from 'components/comment';
import { useSelector } from 'react-redux';

function NewsPage() {
  const { currentNews, setCurrentNews } = useContext(CurrentNewsContext);
  //redux
  const newsIdsConst = useSelector((state: State) => state.newsIds.newsIds);
  console.log(newsIdsConst);
  const newsIdsAllDataConst = useSelector((state: StateAll) => state.newsIdsAllData.newsIdsAllData);
  console.log('newsIdsAllDataConst', newsIdsAllDataConst);

  const current = newsIdsAllDataConst.filter((item) => item.id === currentNews);
  const dt = new Date(current[0].time * 1000).toLocaleString();
  const comments = current[0].kids;
  console.log(comments);
  const arrayOfComments: CommentsType[] = [];
  const [commentsData, setCommentsData] = useState<CommentsType[]>([]);

  async function getComments() {
    if (Array.isArray(comments)) {
      for (let i = 0; i < comments.length; i += 1) {
        arrayOfComments.push(await getStory(comments[i]));
      }
    }
    console.log(arrayOfComments);
    setCommentsData(arrayOfComments);
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <Link to="/">To Main</Link>
      <div className="news">NEWS PAGE</div>
      <div>ID: {currentNews}</div>
      <h5>url: {current[0].url}</h5>
      <h5>title: {current[0].title}</h5>
      <h5>data: {dt}</h5>
      <h5>author: {current[0].by}</h5>
      <h5>comments count: {Array.isArray(comments) ? comments.length : 0}</h5>
      {commentsData.map((item) => (
        <Comment
          key={item.id.toString()}
          id={item.id}
          by={item.by}
          kids={item.kids}
          parent={item.parent}
          time={item.time}
          text={item.text}
        />
      ))}
    </>
  );
}

export default NewsPage;
