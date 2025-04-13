import { configureStore } from "@reduxjs/toolkit";
import addAssetSearchReducer from './features/add-asset/searchTermSlice';
import addAssetSearchResultsReducer from './features/add-asset/searchResultsSlice';
import accountAssetsReducer from './features/assets/accountAssetsSlice';
import singleAIAnalysisReducer from './features/assets/singleAIAnalysisSlice';

export const store = configureStore({
    reducer: {
        addAssetSearch: addAssetSearchReducer,
        addAssetSearchResults: addAssetSearchResultsReducer,
        accountAssets: accountAssetsReducer,
        singleAIAnalysis: singleAIAnalysisReducer,
    },
})