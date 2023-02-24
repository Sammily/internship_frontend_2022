import { CurrentNewsContext } from 'app/App';
import { getStory } from 'app/fetch';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CommentsType, StateAll } from 'utils/types';
import Comment from 'components/comment';
import { useSelector } from 'react-redux';
import styles from './newsPage.module.css';

function NewsPage() {
  const { currentNews } = useContext(CurrentNewsContext);
  const newsIdsAllDataConst = useSelector((state: StateAll) => state.newsIdsAllData.newsIdsAllData);
  const current = newsIdsAllDataConst.filter((item) => item.id === currentNews);
  console.log(current);
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
    setCommentsData(arrayOfComments);
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <button className={styles.button}>
        <Link to="/" className={styles.link}>
          To Main
        </Link>
      </button>
      <div className={styles.header}>NEWS PAGE</div>
      <div className={styles.news}>
        <p>ID: {currentNews}</p>
        <p className={styles.title}>title: {current[0].title}</p>
        <p>url: {current[0].url}</p>
        <span className={styles.details}>data: {dt}</span>
        <span className={styles.details}>author: {current[0].by}</span>
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
      </div>
    </>
  );
}

export default NewsPage;
