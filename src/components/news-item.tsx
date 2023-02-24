import { CurrentNewsContext } from 'app/App';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './news.module.css';

function NewsItem({
  by,
  descendants,
  id,
  kids,
  score,
  time,
  title,
  type,
  url,
}: {
  by: string;
  descendants: number;
  id: number;
  kids?: number | number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}) {
  const dt = new Date(time * 1000).toLocaleString();
  const { currentNews, setCurrentNews } = useContext(CurrentNewsContext);
  return (
    <>
      <div className={styles.news}>
        <p className={styles.title}>{title}</p>
        <span className={styles.details}>By: {by}</span>
        <span className={styles.details}>Date: {dt}</span>
        <span className={styles.details}>Score: {score}</span>
        <div>
          <b>kids: {Array.isArray(kids) ? kids.length : 0}</b>
        </div>
        <Link to="/news">
          <button
            className={styles.button}
            onClick={() => {
              setCurrentNews(id);
            }}
          >
            Go to More Info
          </button>
        </Link>
      </div>
    </>
  );
}

export default NewsItem;
