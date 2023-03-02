import { createSlice } from '@reduxjs/toolkit';
import {
  createClient,
  getClients
} from './clientsAPI';

const initialState = [];

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(getClients.fulfilled, (state, action) => {
      return action.payload
    })
    .addCase(createClient.fulfilled, (state, action) => {
      state = state.push(action.payload)      
    })
  }
});

// export const { } = clientsSlice.actions;

export default clientsSlice.reducer;
