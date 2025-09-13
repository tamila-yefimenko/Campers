import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const camperAPI = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/',
});

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await camperAPI.get('/campers');
      return data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredCampers = createAsyncThunk(
  'campers/fetchFiltered',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState().campers;
      const { filters, page, limit } = state;

      const params = new URLSearchParams({
        ...filters,
        page,
        limit,
      }).toString();

      const { data } = await camperAPI.get(`/campers?${params}`);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return { items: [], total: 0 };
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchById',
  async (id, thunkAPI) => {
    try {
      const { data } = await camperAPI.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
