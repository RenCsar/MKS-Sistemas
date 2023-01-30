import { configureStore } from '@reduxjs/toolkit'
import { produtosSlice } from './reducers/produtosSlice'

export const Store = configureStore({
    reducer: {
        produtos: produtosSlice.reducer,
      },
})