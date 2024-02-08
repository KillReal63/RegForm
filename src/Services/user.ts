import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../Api/userApi';

export type SliceState = {
  user: unknown;
  loading: boolean;
  error: string | null | undefined;
};

const initialState: SliceState = {
  user: {},
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
