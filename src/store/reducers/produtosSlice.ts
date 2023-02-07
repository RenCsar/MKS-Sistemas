import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { TProdutos, TProdutosState, TStore } from '../../utils/types';

export const getProdutos = createAsyncThunk<TProdutos[], undefined>('Produtos/getData', async () => {
    const response = await axios.get('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
    return [...response.data.products]
});

export const produtosSlice = createSlice({
    name: 'produtos',
    initialState: {
        data: [],
        status: 'idle',
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProdutos.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getProdutos.fulfilled, (state: TProdutosState, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(getProdutos.rejected, (state: TProdutosState, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const produtosStatus = (state: TStore) => state.produtos.status
export const produtosError = (state: TStore) => state.produtos.error