import { createSlice } from '@reduxjs/toolkit';
import { authenticate } from '../login/loginAPI';
// import { updateProfile } from './profileAPI';

const initialState = {};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // profileUpdated: {
    //   reducer(state, action) {

    //   },
    //   prepare(id, firstName, lastName, email, phone, city, staet /* "state" would be overloaded */, street, zip) {
    //     return {
    //       payload: {
    //         id,
    //         firstName,
    //         lastName,
    //         phone,
    //         city,
    //         state: staet,
    //         street,
    //         zip
    //       }
    //     }
    //   }
    // }
  },
  extraReducers(builder) {
    builder
    .addCase(authenticate.fulfilled, (state, action) => {
      state.profile = action.payload
    })
  }
});

export const { profileUpdated } = profileSlice.actions;

export default profileSlice.reducer;
