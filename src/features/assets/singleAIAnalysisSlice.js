import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { convertDateToText } from '../../utils/dates';
import { selectAccountAssets } from './accountAssetsSlice';
import OpenAI from 'openai';


const openAIApiKey = import.meta.env.VITE_OPEN_AI_API_KEY;
const client = new OpenAI( { apiKey: openAIApiKey, dangerouslyAllowBrowser: true});
//for testing
/*const response = await client.responses.create({
    model: "gpt-4o",
    input: "Tell me a three sentence bedtime story about a unicorn."
});*/
//
/*  const response = await client.responses.create({
        model: "gpt-4o",
        input: "Tell me a three sentence bedtime story about a unicorn."
    });
    //alert(Object.keys(response));
    alert(response.output[0].content[0].text)
*/

export const generateAIAnalysis = createAsyncThunk(
    'singleAIAnalysis/generateAIAnalysis',
    async () => {
        //alert(testMessage)
        const response = await client.responses.create({
            model: "gpt-4o",
            input: "Tell me a three sentence bedtime story about a unicorn."
        });
        return response;//.output[0].content[0].text;
    }
)


export const singleAIAnalysisSlice = createSlice({
    name: 'singleAIAnalysis',
    initialState: '',
    reducers : {
        addThesisToAsset: (state, action) => {//I was trying to use this slice to update another slice, which I probably shouldn't do
            //const currentAsset = selectAccountAssets.find(asset => )
            return state = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(generateAIAnalysis.pending, (state, action) => {
                alert('pending');
            })
            .addCase(generateAIAnalysis.fulfilled, (state, action) => {
                //alert('trying to succeed');
                //alert(Object.keys(action.payload));
                return action.payload;
                
            })
            .addCase(generateAIAnalysis.rejected, (state, action) => {
                alert('rejected');
                console.log(action.error);
            })
    }
})

export const selectAnalysis = (state) => state.singleAIAnalysis;

export const { /* ??? */ } = singleAIAnalysisSlice.actions;

export default singleAIAnalysisSlice.reducer;