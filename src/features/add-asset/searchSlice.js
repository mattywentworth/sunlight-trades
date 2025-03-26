import { createSlice } from '@reduxjs/toolkit';

//Redux documentation shows the var being declared here and being used on line 8, but I'm following the codeCademy approach I think
//const initialState = '';

export const searchSlice = createSlice({
    name: 'addAssetSearch',
    initialState: '',
    reducers : {
        updateSearchTerm: (state, action) => {
            return state = action.payload;
        }
    }
})

export const { updateSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;