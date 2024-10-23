import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { environment } from '@/environment/env';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const login = createAsyncThunk('auth/login', async (formData) => {
  const response = await axios.post(`${environment.apiUrl}/auth/login`, formData, { withCredentials: true });
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
