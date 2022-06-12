import { configureStore } from '@reduxjs/toolkit'
import isloading from './slices/isLoading.slice'
import products from './slices/products.slice'
import car from './slices/car.slice'
import cart from './slices/cart.slice'


export default configureStore({
  reducer: {
isloading, products, car, cart
	}
})