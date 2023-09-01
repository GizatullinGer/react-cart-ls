import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import cart from './slices/cartSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		cart,
	},
})
