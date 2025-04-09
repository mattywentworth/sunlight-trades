import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectSearchTerm } from './searchTermSlice';
import { restClient } from '@polygon.io/client-js';
import twelvedata from 'twelvedata';

//Should I be using createAsyncThunk here???
//may end up wanting to reference this: https://www.educative.io/courses/get-financial-market-data-with-polygon-api-in-javascript/tickersd
const polygonAPIKey = import.meta.env.VITE_API_KEY_POLYGON;
const rest = restClient(polygonAPIKey);
const twelvedataAPIKey = import.meta.env.VITE_API_KEY_TWELVEDATA;

//
const config = {
    key: twelvedataAPIKey,
};

const client = twelvedata(config);

const params = {
    symbol: 'AAPL',
};

/*export const testAPICall = client
    .price(params)
    .then(data => {
        console.log(data);
    })*/

/*export const testAPICallTwo = client
    .price(params)
    .then(data => {
        console.log(data);
    })*/
//

export const fetchTickerPriceWhenAdded = createAsyncThunk('addAssetSearchResults/fetchTickerPriceWhenAdded',
    async (stockSymbol) => {
        const response = await client
            .price(stockSymbol);
            /*.then(data => {
                alert(data.price);
            })*/
        return response.price;
    }
)

export const fetchStockSearchResults = createAsyncThunk('addAssetSearchResults/fetchStockSearchResults',
    async (searchTerm) => {
        /*const response = await someAsyncFunc(searchTerm);
        return responseOrSomething;*/
        //alert(searchTerm);
        const response = await rest.reference.tickers({
            market: "stocks",
            search: searchTerm, //addAssetSearchTerm,
            active: "true",
            order: "asc",
            limit: 100,
            sort: "ticker"
        });
        return response.results;
    }
);

//Reddit Project example
export const fetchFeed = createAsyncThunk('feed/fetchFeed',
    async (subredditFetchUrl) => {
        //alert(subredditFetchUrl);
        const response = await fetch(subredditFetchUrl);
        
        const json = await response.json();
        const testData = json.data.children;
        //alert(JSON.stringify(testData));//Function isn't reaching this point, probably returning an unresolved promise?
        return testData;
    }
)
//


export const searchResultsSlice = createSlice({
    name: 'addAssetSearchResults',
    initialState: {
        searchResults: '',
        isPending: false,
        isRejected: false,
        selectedSearchResult: null,
        priceWhenAssetAdded: null
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
    },
    extraReducers: (builder) => {
        builder.
            addCase(fetchStockSearchResults.pending, (state, action) => {
                state.isPending = true;
                state.isRejected = false;
            }).
            addCase(fetchStockSearchResults.fulfilled, (state, action) => {
                state.searchResults = action.payload;
                state.isPending = false;
                state.isRejected = false;
            }).
            addCase(fetchStockSearchResults.rejected, (state, action) => {
                state.isPending = false;
                state.isRejected = true;
            }).
            addCase(fetchTickerPriceWhenAdded.pending, (state, action) => {}).
            addCase(fetchTickerPriceWhenAdded.fulfilled, (state, action) => {
                state.priceWhenAssetAdded = action.payload;
            })
    }
})

export const selectSearchResults = (state) => state.addAssetSearchResults.searchResults;
export const isPending = (state) => state.addAssetSearchResults.isPending;
export const isRejected = (state) => state.addAssetSearchResults.isRejected;
export const selectSelectedSearchResult = (state) => state.addAssetSearchResults.selectedSearchResult;

export const { updateSearchResults, updateSelectedSearchResult } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;