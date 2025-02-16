import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacter = createAsyncThunk("fetchCharacter", () => {
    return axios
        .get('https://rickandmortyapi.com/api/character')
        .then((response) => response.data)
})
const initialState = {
    loading: false,
    characters: [],
    error: '',
}

const characterSlice = createSlice( {
    name: 'character',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCharacter.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchCharacter.fulfilled, (state, action) => {
            state.loading = false
            state.characters = action.payload
            state.error = ''
        })
        builder.addCase(fetchCharacter.rejected, (state, action) => {
            state.loading = false
            state.characters = []
            state.error = action.error.message
        })
    }
})

export default characterSlice.reducer;