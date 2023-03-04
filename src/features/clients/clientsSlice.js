import { createSlice } from '@reduxjs/toolkit';
import {
  createClient,
  getClients,
  updateClient
} from './clientsAPI';

const initialState = [];

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(getClients.fulfilled, (state, action) => {
      return action.payload
    })
    .addCase(createClient.fulfilled, (state, action) => {
      const newClient = action.payload
      newClient.id = +newClient._links.self.href.split("/users/")[1]
      state = state.push(newClient)
    })
    .addCase(updateClient.fulfilled, (applicationState, action) => {
      console.log("action.payload:", action.payload)
        const {
            firstName,
            lastName,
            dob,
            phone,
            email,
            referralSource,
            address1,
            address2,
            city,
            state,
            zip,
            _links
        } = action.payload
        const id = _links.self.href.split("/users/")[1]
        const existingClient = applicationState.find(client => client.id === +id)
        console.log("existingClient:", existingClient)
        if (existingClient) {
            existingClient.firstName = firstName
            existingClient.lastName = lastName
            existingClient.dob = dob
            existingClient.phone = phone
            existingClient.email = email
            existingClient.referralSource = referralSource
            existingClient.address1 = address1
            existingClient.address2 = address2
            existingClient.city = city
            existingClient.state = state
            existingClient.zip = zip
        }
    })
  }
});

// export const { } = clientsSlice.actions;

export default clientsSlice.reducer;
