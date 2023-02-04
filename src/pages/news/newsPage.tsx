import { CurrentNewsContext } from 'app/App';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

function NewsPage() {
  const { currentNews, setCurrentNews } = useContext(CurrentNewsContext);
  return (
    <>
      <Link to="/">To Main</Link>
      <div className="news">NEWS PAGE</div>
      <div>{currentNews}</div>
    </>
  );
}

export default NewsPage;
