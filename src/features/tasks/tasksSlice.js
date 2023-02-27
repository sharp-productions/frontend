import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded(state, action) {
        state.push(action.payload)
    }
  }
})

export default tasksSlice.reducer