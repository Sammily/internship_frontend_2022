import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from 'pages/main/main';
import NewsPage from 'pages/news/newsPage';
import { getNewStories, getStory } from './fetch';
import { AllDataTop100, CurrentNewsContextType, Top100 } from 'utils/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { getNewsIds } from './newsIdsSlice';
import { newsIdsAllData } from './newsIdsAllDataSlice';

export const LoadingContext = createContext(true);
export const CurrentNewsContext = createContext<CurrentNewsContextType>({
  currentNews: 0,
  setCurrentNews: () => {
    console.log(1);
  },
});

function App() {
  const [apiAllData, setApiAllData] = useState<AllDataTop100[]>([]);
  const [apiData, setApiData] = useState<Top100>([]);
  const [loading, setLoading] = useState(true);
  const [currentNews, setCurrentNews] = useState(0);
  const allDataTop100: AllDataTop100[] = [];
  let newStories: number[] = [];

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
    setLoading(false);
    dispatchRedux(getNewsIds(newStories));
    dispatchRedux(newsIdsAllData(allDataTop100));
  };

  const dispatchRedux = useDispatch<AppDispatch>();

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <LoadingContext.Provider value={loading}>
        <CurrentNewsContext.Provider value={{ currentNews, setCurrentNews }}>
          <Switch>
            <Route path="/news" component={NewsPage}></Route>
            <Route path="/" component={Main}></Route>
          </Switch>
        </CurrentNewsContext.Provider>
      </LoadingContext.Provider>
    </>
  );
}

export default App;
