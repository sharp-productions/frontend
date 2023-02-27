import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded(state, action) {
        state.push(action.payload)
    }
  }
})

export default notesSlice.reducer