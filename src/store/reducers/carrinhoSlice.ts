import { createSlice } from '@reduxjs/toolkit'

const initialState: any = []

export const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState: initialState,
    reducers: {
        addProduto: (state, { payload }) => {
            const carrinho = state.find((produto: any) => produto.id === payload.id);
            if (carrinho) {
                carrinho.count++;
            } else {
                return [...state, {
                    count: 1,
                    ...payload,
                }]

            }
        },
        addCount: (state, { payload }) => {
            const contador = state.find((produto: any) => produto.id === payload.id);
            if (contador) {
                contador.count++;
            }
        },
        removeCount: (state, { payload }) => {
            const contador = state.find((produto: any) => produto.id === payload.id);
            if (contador) {
                if (contador.count <= 0) {
                    return state.filter((produto: any) => produto.id !== payload.id);
                } else {
                    contador.count--;
                }
            }
        },
        resetarCarrinho: () => initialState,
    }
})