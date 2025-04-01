import { createSlice } from '@reduxjs/toolkit';

export const accountAssetsSlice = createSlice({
    name: 'accountAssets',
    initialState: [],
    reducers : {
        addAssetToAccount: (state, action) => {
            return [...state, action.payload];
        }
    }
})

export const selectAccountAssets = (state) => state.accountAssets;

export const { addAssetToAccount } = accountAssetsSlice.actions;

export default accountAssetsSlice.reducer;