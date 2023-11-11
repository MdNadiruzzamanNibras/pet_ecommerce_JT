import { createSlice } from '@reduxjs/toolkit';

const  favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
    pets: [],
    
    },
   reducers:{addTofavourite: (state, action) => {
            const existing = state.pets.find(
              (pet) => pet._id === action.payload._id
            );
      
            if (existing) {
              existing.quantity = existing.quantity + 1;
            } else {
              state.pets.push({ ...action.payload, quantity: 1 });
            }
      
    
          },}
})
 
export const {addTofavourite} =  favouriteSlice.actions

export default  favouriteSlice.reducer;