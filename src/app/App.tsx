import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from 'pages/main/main';
import NewsPage from 'pages/news/newsPage';
import { getNewStories, getStory } from './fetch';
import { AllDataTop100, CurrentNewsContextType } from 'utils/types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { getNewsIds } from './newsIdsSlice';
import { newsIdsAllData } from './newsIdsAllDataSlice';

export const LoadingContext = createContext(true);
export const CurrentNewsContext = createContext<CurrentNewsContextType>({
  currentNews: 0,
  setCurrentNews: () => {
    console.log();
  },
});

function App() {
  const [currentNews, setCurrentNews] = useState(0);
  const allDataTop100: AllDataTop100[] = [];
  let newStories: number[] = [];
  const dispatchRedux = useDispatch<AppDispatch>();

  async function handleGetStory(id: number) {
    const response = await getStory(id);
    allDataTop100.push(response);
  }

  const handleGet = async () => {
    newStories = await getNewStories();
    for (let i = 0; i < 100; i += 1) {
      await handleGetStory(newStories[i]);
    }
    dispatchRedux(getNewsIds(newStories));
    dispatchRedux(newsIdsAllData(allDataTop100));
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <CurrentNewsContext.Provider value={{ currentNews, setCurrentNews }}>
        <Switch>
          <Route path="/news" component={NewsPage}></Route>
          <Route path="/" component={Main}></Route>
        </Switch>
      </CurrentNewsContext.Provider>
    </>
  );
}

export default App;
