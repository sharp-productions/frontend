import { createAsyncThunk } from '@reduxjs/toolkit';

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN

export const authenticate = createAsyncThunk('login/authenticate', async (formData) => {
    const response = await fetch(`${API_DOMAIN}/login`, {
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