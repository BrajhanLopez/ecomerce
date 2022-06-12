import { createSlice } from '@reduxjs/toolkit';
import {setisloading} from './isLoading.slice'
import axios from "axios";
import getConfig from "../../utils/getConfig";
// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const carslice = createSlice({
		name: 'car',
    initialState: [],
    reducers: {
        setcar: (state, action)=>{

            return action.payload
        }
    }
})
export const {setcar} = carslice.actions;

export const getcar = () => (dispatch) => {
    dispatch(setisloading(true));
    return axios
      .get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", getConfig())
      .then((res) => dispatch(setcar(res.data)))
      .finally(() => dispatch(setisloading(false)));
  };


export default carslice.reducer;