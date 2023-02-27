import { /* createAsyncThunk, */ createSlice } from '@reduxjs/toolkit';
// import {
//   createClient,
//   deleteClient,
//   getClient,
//   getClients,
//   updateClient
// } from './clientsAPI';

const initialState = [];

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    clientAdded: (state, action) => {
      state.push(action.payload);
    },
    clientUpdated: {
      reducer(state, action) {

      },
      prepare(id, firstName, lastName, email, phone, city, staet /* "state" would be overloaded */, street, zip) {
        return {
          payload: {
            id,
            firstName,
            lastName,
            phone,
            city,
            state: staet,
            street,
            zip
          }
        }
      }
    }
  }
});

export const { clientAdded, clientUpdated } = clientsSlice.actions;

export default clientsSlice.reducer;
