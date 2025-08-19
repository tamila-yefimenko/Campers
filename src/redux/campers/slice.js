import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const initialState = {
  items: [],
  page: 1,
  limit: 10,
  total: 0,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage } = campersSlice.actions;
export default campersSlice.reducer;
