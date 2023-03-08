import { createSlice } from '@reduxjs/toolkit'
import {
  createCase,
  getCases,
  // updateCase
} from './casesAPI';

const initialState = []

export const casesSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {
    updateCaseLocally (state, action) {
        const { id, clientFirstName, clientLastName } = action.payload
        const existingCase = state.find(caseInstance => caseInstance.id === id)
        if (existingCase) {
          existingCase.client.firstName = clientFirstName
          existingCase.client.lastName = clientLastName
        }
    }
  },
  extraReducers(builder) {
    builder
    .addCase(getCases.fulfilled, (state, action) => {
      return action.payload
    })
    .addCase(createCase.fulfilled, (state, action) => {
      const newCase = action.payload
      newCase.id = +newCase._links.self.href.split("/cases/")[1]
      newCase.client = {firstName: "", lastName:"", id: newCase._links.client.href.split("/users/")[1]}
      newCase.lawyer = {firstName: "", lastName:"", id: newCase._links.lawyer.href.split("/users/")[1]}
      state = state.push(newCase)
    })
    // .addCase(updateCase.fulfilled, (state, action) => {
    //   const {
    //     caseNumber,
    //     client,
    //     court,
    //     jurisdiction,
    //     judge,
    //     prosecutor,
    //     _links
    //   } = action.payload
    //   const id = _links.self.href.split("/cases/")[1]
    //   const existingCase = state.find(caes => caes.id === id)
    //   if (existingCase) {
    //     existingCase.caseNumber = caseNumber
    //     existingCase.client = client
    //     existingCase.court = court
    //     existingCase.jurisdiction = jurisdiction
    //     existingCase.judge = judge
    //     existingCase.prosecutor = prosecutor
    //   }
    // })
  }
})

export const { updateCaseLocally } = casesSlice.actions;

export default casesSlice.reducer