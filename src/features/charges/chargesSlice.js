import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const chargesSlice = createSlice({
  name: 'charges',
  initialState,
  reducers: {
    chargeAdded(state, action) {
        state.push(action.payload)
    }
  }
})

export default chargesSlice.reducer