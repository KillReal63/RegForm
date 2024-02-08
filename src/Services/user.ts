import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../Api/userApi';

const initialState = {
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, () => {})
      .addCase(registerUser.fulfilled, () => {})
      .addCase(registerUser.rejected, () => {});
  },
});

export default userSlice.reducer;
