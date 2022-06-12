import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {setisloading} from './isLoading.slice'

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productslice = createSlice({
		name: 'products',
    initialState: [],
    reducers: {
        setproducts: (state, action) => {
            return action.payload
        }
    }
})

export const {setproducts}=productslice.actions;



export const getproducts = () => (dispatch) => {
    dispatch(setisloading(true)); 
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then(res => dispatch(setproducts(res.data.data.products)))
        .finally(() => dispatch(setisloading(false)));
}


export const filterproducts = (query) => (dispatch) => {
    dispatch(setisloading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${query}`)
        .then(res => dispatch(setproducts(res.data.data.products)))
        .finally(() => dispatch(setisloading(false)));
}


export const filtercategory = (q) => (dispatch) => {
    dispatch(setisloading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${q}`)
        .then(res => dispatch(setproducts(res.data.data.products)))
        .finally(() => dispatch(setisloading(false)));
}



export default productslice.reducer;