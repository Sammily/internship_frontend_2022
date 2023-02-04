import { AllDataContext, CurrentNewsContext } from 'app/App';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

function NewsPage() {
  const { currentNews, setCurrentNews } = useContext(CurrentNewsContext);
  const data = useContext(AllDataContext);
  const current = data.filter((item) => item.id === currentNews);
  const dt = new Date(current[0].time * 1000).toLocaleString();
  const comments = current[0].kids;
  console.log(comments);
  return (
    <>
      <Link to="/">To Main</Link>
      <div className="news">NEWS PAGE</div>
      <div>{currentNews}</div>
      <h5>url: {current[0].url}</h5>
      <h5>title: {current[0].title}</h5>
      <h5>data: {dt}</h5>
      <h5>author: {current[0].by}</h5>
      <h5>comments count: {Array.isArray(comments) ? comments.length : 0}</h5>
    </>
  );
}

export default NewsPage;
