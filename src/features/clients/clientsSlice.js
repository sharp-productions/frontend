import { /* createAsyncThunk, */ createSlice } from '@reduxjs/toolkit';
import {
  createClient,
//   deleteClient,
//   getClient,
  getClients,
//   updateClient
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
      state.clients = action.payload
    })
    .addCase(createClient.fulfilled, (state, action) => {
      state.clients.push(action.payload)      
    })
  }
});

export const { clientAdded, clientUpdated } = clientsSlice.actions;

export default clientsSlice.reducer;
