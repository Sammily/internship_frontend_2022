import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newsIdsAllData: [
    {
      by: '',
      descendants: 0,
      id: 0,
      kids: [0],
      score: 0,
      time: 34664545,
      title: 'title',
      type: 'story',
      url: 'www.site.com',
    },
  ],
};

export const newsIdsAllDataSlice = createSlice({
  name: 'newsIdsAllData',
  initialState,
  reducers: {
    newsIdsAllData: (state, action) => {
      console.log(state);
      console.log(action);
      state.newsIdsAllData = action.payload;
    },
  },
});

export const { newsIdsAllData } = newsIdsAllDataSlice.actions;

export default newsIdsAllDataSlice.reducer;
