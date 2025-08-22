import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCamperById,
  fetchCampers,
  fetchFilteredCampers,
} from './operations';

const initialState = {
  items: [],
  filtered: [],
  currentCamper: null,
  page: 1,
  limit: 4,
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
    resetPage: state => {
      state.page = 1;
    },
    resetItems: state => {
      state.filtered = state.items;
      state.page = 1;
      state.total = state.items.length;
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
        state.filtered = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilteredCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filtered = action.payload.items;
        state.page = 1;
        state.total = action.payload.total;
      })
      .addCase(fetchFilteredCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperById.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.currentCamper = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, resetPage, resetItems } = campersSlice.actions;
export default campersSlice.reducer;
