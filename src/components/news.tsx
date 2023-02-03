import { getNewStories, getStory } from 'app/fetch';
import { iteratorSymbol } from 'immer/dist/internal';
import React, { useEffect, useState } from 'react';
import NewsItem from './news-item';

type Top100 = number[];
export type AllDataTop100 = {
  by: string;
  descendants: number;
  id: number;
  kids?: number | number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

function News() {
  const top100: Top100 = [];
  const allDataTop100: AllDataTop100[] = [];
  let newStories: number[] = [];
  const AllData = [];
  const [apiAllData, setApiAllData] = useState<AllDataTop100[]>();
  const [apiData, setApiData] = useState<Top100>();

  async function handleGetStory(id: number) {
    const response = await getStory(id);
    allDataTop100.push(response);
  }

  const handleGet = async () => {
    newStories = await getNewStories();
    console.log(newStories);
    setApiData(newStories);
    for (let i = 0; i < 10; i += 1) {
      await handleGetStory(newStories[i]);
    }
    console.log(allDataTop100);
    setApiAllData(allDataTop100);
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <div>{apiData?.length}</div>
      <div>{apiAllData?.length}</div>
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
