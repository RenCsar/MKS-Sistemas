import { configureStore } from '@reduxjs/toolkit'
import { carrinhoSlice } from './reducers/carrinhoSlice'
import { produtosSlice } from './reducers/produtosSlice'

export const Store = configureStore({
  reducer: {
    produtos: produtosSlice.reducer,
    carrinho: carrinhoSlice.reducer
  },
})