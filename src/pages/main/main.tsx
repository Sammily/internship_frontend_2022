import React from 'react';
import News from 'components/news';
import styles from './main.module.css';

function Main() {
  return (
    <>
      <div className={styles.header}>MAIN PAGE</div>
      <News />
    </>
  );
}

export default Main;
