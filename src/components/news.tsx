import { AllDataContext, DataContext, LoadingContext } from 'app/App';
import React, { useContext } from 'react';
import NewsItem from './news-item';

function News() {
  const apiData = useContext(DataContext);
  const apiAllData = useContext(AllDataContext);
  const loading = useContext(LoadingContext);

  return (
    <>
      <h1>{loading && <div>please, wait...</div>}</h1>
      <div>
        {apiAllData?.map((item) => (
          <NewsItem
            key={item.id}
            id={item.id}
            descendants={item.descendants}
            by={item.by}
            kids={item.kids}
            score={item.score}
            time={item.time}
            title={item.title}
            type={item.type}
            url={item.url}
          />
        ))}
      </div>
    </>
  );
}

export default News;
