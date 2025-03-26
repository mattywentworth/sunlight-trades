import { createSlice } from '@reduxjs/toolkit';

//Should I be using createAsyncThunk here???
//may end up wanting to reference this: https://www.educative.io/courses/get-financial-market-data-with-polygon-api-in-javascript/tickers

export const searchResultsSlice = createSlice({
    name: 'addAssetSearchResults',
    initialState: null,
    reducers : {
        updateSearchResults: (state, action) => {
            return state = action.payload;
        }
    }
})

export const selectSearchResults = (state) => state.addAssetSearchResults;

export const { updateSearchResults } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;