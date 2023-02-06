import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import newsIdsReducer from './newsIdsSlice';
import newsIdsAllDataReducer from './newsIdsAllDataSlice';

export const store = configureStore({
  reducer: {
    newsIds: newsIdsReducer,
    newsIdsAllData: newsIdsAllDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
