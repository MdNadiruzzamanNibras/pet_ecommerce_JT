import { createSlice } from '@reduxjs/toolkit';

const petsSlice = createSlice({
    name: "pets",
    initialState: {
    pets: [],
    filteredPets: [],
    categoryFilter: 'all',
    sortOption: 'none',
    },
    reducers: {
        setPets: (state, action) => {
      state.pets = action.payload;
      state.filteredPets = action.payload;
        },
        setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
       setSortOption: (state, action) => {
      state.sortOption = action.payload;
        },
        applyFiltersAndSort: (state) => {
            if (state.categoryFilter !== 'all') {
        state.filteredPets = state.pets.filter(pet => pet.category === state.categoryFilter);
      } else {
        state.filteredPets = state.pets;
            }
            
            state.filteredPets.sort((a, b) => {
        if (state.sortOption === 'lowToHigh') {
          return a.price - b.price;
        } else if(state.sortOption === 'highToLow'){
          return b.price - a.price;
        } else {
            return 0
        }
             });


        }

    }
})
 export const {
      setPets,
      setCategoryFilter,
      setSortOption,
      applyFiltersAndSort,
} = petsSlice.actions;

export default petsSlice.reducer;