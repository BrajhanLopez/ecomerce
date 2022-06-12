import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const isloadingslice = createSlice({
		name: 'isloading',
    initialState: false,
    reducers: {
        setisloading: (state,action)=>{
            return action.payload
        }
    }
})

export const {setisloading} = isloadingslice.actions;

export default isloadingslice.reducer;