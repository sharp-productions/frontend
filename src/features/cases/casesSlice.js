import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const casesSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {
    caseAdded(state, action) {
        state.push(action.payload)
    }
  }
})

export default casesSlice.reducer