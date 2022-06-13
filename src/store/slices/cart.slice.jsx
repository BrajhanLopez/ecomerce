import { createSlice } from '@reduxjs/toolkit';
import {setisloading} from './isLoading.slice'
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { getcar } from './car.slice';
// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const cartslice = createSlice({
		name: 'cart',
    initialState: [],
    reducers: {
        setcart: (state, action)=>{

            return action.payload
        }
    }
})
export const {setcart} = cartslice.actions;

export const getcart = () => (dispatch) => {
    dispatch(setisloading(true));
    return axios
      .get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
      .then((res) => dispatch(setcart(res.data)))
      .finally(() => dispatch(setisloading(false)));
  };


  export const postcart = (cart) => (dispatch) => {
    dispatch(setisloading(true));
    return axios
      .post("https://ecommerce-api-react.herokuapp.com/api/v1/cart?11",cart, getConfig())
      .then(() =>{
        dispatch(getcart())
        alert('producto añadido al carrito')
      })
      .finally(() => dispatch(setisloading(false)));
  };

  export const postbuy = () => (dispatch) => {
    dispatch(setisloading(true));
    return axios
      .post("https://ecommerce-api-react.herokuapp.com/api/v1/purchases",{}, getConfig())
      .then(() =>{
        dispatch(getcar())
        dispatch(setcart([]))
        
        
      })
      .finally(() => dispatch(setisloading(false)));
  };


  export const deleteprod = (n) => (dispatch) => {
    dispatch(setisloading(true));
    return axios
      .delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${n}`, getConfig())
      .then(() =>{
        dispatch(getcar())
        //dispatch(setcart([]))
        
        
      })
      .finally(() => dispatch(setisloading(false)));
  };

export default cartslice.reducer;