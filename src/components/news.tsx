import React from 'react';
import { useSelector } from 'react-redux';
import { StateAll } from 'utils/types';
import NewsItem from './news-item';

function News() {
  const newsIdsAllDataConst = useSelector((state: StateAll) => state.newsIdsAllData.newsIdsAllData);

  return (
    <>
      <h1>{newsIdsAllDataConst[0].by === 'initialValue' && <div>please, wait...</div>}</h1>
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
