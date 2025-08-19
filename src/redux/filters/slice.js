import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  AC: false,
  transmission: '',
  kitchen: false,
  TV: false,
  bathroom: false,
  vehicleType: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      if (key in state) {
        state[key] = value;
      }
    },
    resetFilters: () => ({ ...initialState }),
  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
