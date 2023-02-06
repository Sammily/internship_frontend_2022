import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newsIds: [1, 2, 3],
};

export const newsIdsSlice = createSlice({
  name: 'newsIds',
  initialState,
  reducers: {
    getNewsIds(state, action) {
      state.newsIds = action.payload;
    },
  },
});

export const { getNewsIds } = newsIdsSlice.actions;

export default newsIdsSlice.reducer;
