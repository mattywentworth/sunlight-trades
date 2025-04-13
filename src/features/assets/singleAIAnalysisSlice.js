import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { convertDateToText } from '../../utils/dates';
import { selectAccountAssets } from './accountAssetsSlice';
import OpenAI from 'openai';


const openAIApiKey = import.meta.env.VITE_OPEN_AI_API_KEY;
const client = new OpenAI( { apiKey: openAIApiKey, dangerouslyAllowBrowser: true});

export const generateAIAnalysis = createAsyncThunk(
    'singleAIAnalysis/generateAIAnalysis',
    async () => {
        alert('function is firing')
        const response = await client.responses.create({
            model: 'gpt-4o',
            input: "Please tell me a dark joke that includes a twist I won't see coming"
        });
        return response;
    }
)

export const singleAIAnalysisSlice = createSlice({
    name: 'singleAIAnalysis',
    initialState: '',
    reducers : {
        placeholder: (state, action) => {
            return state = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(generateAIAnalysis.pending, (state, action) => {
                alert('pending');
            })
            .addCase(generateAIAnalysis.fulfilled, (state, action) => {
                alert(action.payload);
            })
            .addCase(generateAIAnalysis.rejected, (state, action) => {
                alert('rejected');
            })
    }
})

export const selectAnalysis = (state) => state.singleAIAnalysis;

export const { /* ??? */ } = singleAIAnalysisSlice.actions;

export default singleAIAnalysisSlice.reducer;