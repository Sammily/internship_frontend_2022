import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import News from 'components/news';
import { CurrentNewsContext } from 'app/App';

function Main() {
  return (
    <>
      <div className="main">MAIN PAGE</div>
      <News />
    </>
  );
}

export default Main;
