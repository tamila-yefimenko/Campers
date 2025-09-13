import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllCampers,
  fetchCamperById,
  fetchFilteredCampers,
} from './operations';

const initialState = {
  items: [],
  locations: [],
  filtered: [],
  currentCamper: null,
  total: 0,
  page: 1,
  limit: 4,
  filters: {},
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    resetPage(state) {
      state.page = 1;
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    resetFilters(state) {
      state.filters = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.items = action.payload;

        const uniqueLocations = [
          ...new Set(action.payload.map(item => item.location)),
        ];

        state.locations = uniqueLocations;
      })
      .addCase(fetchAllCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilteredCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
        state.isLoading = false;

        if (state.page === 1) {
          state.filtered = action.payload.items;
        } else {
          state.filtered = [...state.filtered, ...action.payload.items];
        }

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

export const { setPage, resetPage, setFilters, resetFilters } =
  campersSlice.actions;

export default campersSlice.reducer;
