import { configureStore } from "@reduxjs/toolkit";
import addAssetSearchReducer from './features/add-asset/searchTermSlice';
import addAssetSearchResultsReducer from './features/add-asset/searchResultsSlice';

export const store = configureStore({
    reducer: {
        addAssetSearch: addAssetSearchReducer,
        addAssetSearchResults: addAssetSearchResultsReducer,
    },
})