import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    eventAdded(state, action) {
        state.push(action.payload)
    }
  }
})

export default eventsSlice.reducer