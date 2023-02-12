import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { TProdutos, TProdutosState, TStore } from '../../utils/types';
import { API } from '../../utils/api'

export const getProdutos = createAsyncThunk<TProdutos[], undefined>('Produtos/getData', async () => {
    const response = await API.get('')
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