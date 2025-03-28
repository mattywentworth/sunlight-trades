import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from './searchTermSlice';

//Should I be using createAsyncThunk here???
//may end up wanting to reference this: https://www.educative.io/courses/get-financial-market-data-with-polygon-api-in-javascript/tickersd


export const searchResultsSlice = createSlice({
    name: 'addAssetSearchResults',
    initialState: {
        searchResults: '',
        selectedSearchResult: null
    },
    reducers : {
        updateSearchResults: (state, action) => {
                state.searchResults = action.payload;
        },
        updateSelectedSearchResult: (state, action) => {
            /*const {ticker, companyName} = action.payload;
            alert(ticker);*/
            //alert(action.payload);
            state.selectedSearchResult = action.payload;
            //state.selectedSearchResult.ticker = action.payload.ticker;
            //state.selectedSearchResult.ticker = action.payload.company;
        }
    }
})

export const selectSearchResults = (state) => state.addAssetSearchResults.searchResults;
export const selectSelectedSearchResult = (state) => state.addAssetSearchResults.selectedSearchResult;

export const { updateSearchResults, updateSelectedSearchResult } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;