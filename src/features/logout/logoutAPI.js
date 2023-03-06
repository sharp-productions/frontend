import { createAsyncThunk } from '@reduxjs/toolkit';

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN

export const logout = createAsyncThunk('logout/logout', async () => {
    const response = await fetch(`${API_DOMAIN}/logout`, {
        method: 'GET',
        credentials: 'include',
    })
    return response.status
})