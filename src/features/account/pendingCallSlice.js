import { createSlice } from '@reduxjs/toolkit';

export const pendingCallSlice = createSlice({
    name: 'pendingCall',
    initialState: false,
    reducers : {
        updatePendingState: (state, action) => {//I was trying to use this slice to update another slice, which I probably shouldn't do
            //const currentAsset = selectAccountAssets.find(asset => )
            //alert(action.payload);
                return state = action.payload;
        }
    }
})

export const selectPendingCall = (state) => state.pendingCall;

export const { updatePendingState } = pendingCallSlice.actions;

export default pendingCallSlice.reducer;