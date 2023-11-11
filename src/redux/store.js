import { configureStore } from '@reduxjs/toolkit';
import petsReducer from './features/petsSlice'; 
import  favouriteSlice from './features/favouiteSlice'; 
import { api } from './features/apiSlice';

export const store = configureStore({
  reducer: {
    pets: petsReducer,
    favourite: favouriteSlice,
    [api.reducerPath]:api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
