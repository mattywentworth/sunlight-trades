import { configureStore } from "@reduxjs/toolkit";
import addAssetSearchReducer from './features/add-asset/searchSlice';

export const store = configureStore({
    reducer: {
        addAssetSearch: addAssetSearchReducer,
    },
})