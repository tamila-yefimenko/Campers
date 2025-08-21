import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const camperAPI = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/',
});

// export const fetchCampers = createAsyncThunk(
//   'campers/fetchAll',
//   async (_, { getState, rejectWithValue }) => {
//     try {
//       const { filters, campers } = getState();

//       const params = {
//         page: campers.page,
//         limit: campers.limit,
//         ...filters,
//       };

//       const { data } = await camperAPI.get('/campers', { params });
//       return data.items;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || 'Failed to fetch campers'
//       );
//     }
//   }
// );

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await camperAPI.get('/campers');
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch campers'
      );
    }
  }
);

export const fetchFilteredCampers = createAsyncThunk(
  'campers/fetchFiltered',
  async (filters, thunkAPI) => {
    try {
      const params = new URLSearchParams(filters).toString();
      const { data } = await camperAPI.get(`/campers?${params}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
