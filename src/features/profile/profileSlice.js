import { createSlice } from '@reduxjs/toolkit';
import { authenticate } from '../login/loginAPI';
// import { updateProfile } from './profileAPI';

const initialState = {};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers(builder) {
    builder
    // authenticate call is made from Login.js
    .addCase(authenticate.fulfilled, (state, action) => {
      localStorage.setItem("profile", JSON.stringify(action.payload))
      return action.payload
    })
  }
});

export const { profileUpdated } = profileSlice.actions;

export default profileSlice.reducer;
