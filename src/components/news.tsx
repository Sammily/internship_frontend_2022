import { LoadingContext } from 'app/App';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { State, StateAll } from 'utils/types';
import NewsItem from './news-item';

function News() {
  //redux
  const newsIdsConst = useSelector((state: State) => state.newsIds.newsIds);
  console.log(newsIdsConst);
  const newsIdsAllDataConst = useSelector((state: StateAll) => state.newsIdsAllData.newsIdsAllData);
  console.log('newsIdsAllDataConst', newsIdsAllDataConst);

  const loading = useContext(LoadingContext);

  return (
    <>
      <h1>{loading && <div>please, wait...</div>}</h1>
      <div>
        {newsIdsAllDataConst.map((item) => (
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
