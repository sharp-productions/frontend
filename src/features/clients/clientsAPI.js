import { createAsyncThunk } from '@reduxjs/toolkit';

import { handler403 } from '../../utilities/handler403';

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN

export const createClient = createAsyncThunk('clients/createClient', async (formData) => {
    const response = await fetch(`${API_DOMAIN}/clients`, {
        method: 'POST',
        credentials: 'include',
        body: new URLSearchParams(formData)
    })
    .then(handler403)
    return response.json();
})

export const getClients = createAsyncThunk('clients/getClients', async () => {
    const response = await fetch(`${API_DOMAIN}/clients`, {
        method: 'GET',
        credentials: 'include'
    })
    .then(handler403)
    return response.json();
})

export const getClient = createAsyncThunk('clients/getClient', async (clientId) => {
    const response = await fetch(`${API_DOMAIN}/clients/${clientId}`, {
        method: 'GET',
        credentials: 'include'
    })
    .then(handler403)
    return response.json();
})

export const deleteClient = (clientId) => {

}

export const updateClient = createAsyncThunk('clients/updateClient', async (formData) => {
    const response = await fetch(`${API_DOMAIN}/clients/${formData.id}`, {
        method: 'PUT',
        credentials: 'include',
        body: new URLSearchParams(formData)
    })
    .then(handler403)
    return response.json();
})