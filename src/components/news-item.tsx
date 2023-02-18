import { CurrentNewsContext } from 'app/App';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <h5>Title: {title}</h5>
        <h5>Score: {score}</h5>
        <h5>By: {by}</h5>
        <h5>Time: {dt}</h5>
        <h5>ID: {id}</h5>
        <h5>
          <b>kids: {Array.isArray(kids) ? kids.length : 0}</b>
        </h5>
        <Link to="/news">
          <button
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
