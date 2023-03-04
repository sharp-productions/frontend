import { createAsyncThunk } from '@reduxjs/toolkit';

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN

export const createCase = createAsyncThunk('cases/createCase', async (formData) => {
    const response = await fetch(`${API_DOMAIN}/cases`, {
        method: 'POST',
        credentials: 'include',
        body: new URLSearchParams(formData)
    })
    return response.json();
})

export const getCases = createAsyncThunk('cases/getCases', async () => {
    const response = await fetch(`${API_DOMAIN}/cases`, {
        method: 'GET',
        credentials: 'include'
    })
    return response.json();
})

export const getCasesByClientId = createAsyncThunk('cases/getCasesByClientId', async (clientId) => {
    const response = await fetch(`${API_DOMAIN}/cases?clientId=${clientId}`, {
        method: 'GET',
        credentials: 'include'
    })
    return response.json();
})

export const getCase = (caseId) => {

}

export const deleteCase = (caseId) => {

}

export const updateCase = (caseId) => {

}