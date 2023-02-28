import { createAsyncThunk } from '@reduxjs/toolkit';

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN

export const createClient = createAsyncThunk('clients/create', async (formData) => {
    const response = await fetch(`${API_DOMAIN}/clients`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accepts": "application/json",
        },
        body: new URLSearchParams(formData)
    })
    return response.json();
})

export const getClients = createAsyncThunk('clients/getClients', async () => {
    const response = await fetch(`${API_DOMAIN}/clients`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Accepts": "application/json",
        }
    })
    return response.json();
})

export const deleteClient = (clientId) => {

}

export const getClient = (clientId) => {

}

export const updateClient = (clientId) => {

}