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
            const carrinho = state.find((produto: any) => produto.id === payload.id);
            if (carrinho) {
                carrinho.count++;
            }
        },
        removeCount: (state, { payload }) => {
            const carrinho = state.find((produto: any) => produto.id === payload.id);
            if (carrinho) {
                if (carrinho.count <= 1) {
                    return state.filter((produto: any) => produto.id !== payload.id);
                } else {
                    carrinho.count--;
                }
            }
        },
        removeProduto: (state, { payload }) => {
            return state.filter((produto: any) => produto.id !== payload.id);
        },
        limparCarrinho: () => initialState,
    }
})

export const { addProduto, removeProduto, addCount, removeCount, limparCarrinho } = carrinhoSlice.actions;