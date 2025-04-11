import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { convertDateToText } from '../../utils/dates';
import twelvedata from 'twelvedata';

const twelvedataAPIKey = import.meta.env.VITE_API_KEY_TWELVEDATA;

const config = {
    key: twelvedataAPIKey,
};

const client = twelvedata(config);

const params = {
    symbols: ['AAPL', 'MSFT', 'GOOGL'],
    methods: ['price']
};

export const fetchTickerPriceOnAssetTableLoad = createAsyncThunk('accountAssets/fetchTickerPriceOnTableLoad',
    async (stockSymbol) => {
        const response = await client
            .timeSeries(stockSymbol);
        return response.price;
    }
);

/*const fetchStockPrice = createAsyncThunk('accountAssets',
    async(ticker, thunkAPI) => {
        const response = await someAsyncFunc(ticker);
        return responseOrSomething;
    }
);*/

export const accountAssetsSlice = createSlice({
    name: 'accountAssets',
    initialState: [
        {
            assetId: 1,
            dateAded: 'updateThis',
            dateAddedReadable: 'Apr 6, 2025',
            ticker: 'AAPL',
            companyName: 'Apple Computers, Inc.',
            logo: 'https://api.polygon.io/v1/reference/company-branding/YXBwbGUuY29t/images/2025-04-04_icon.png?apiKey=8eHKYYCBO4ruodl7XgaumuOgwSxSuS43',
            watchBuySell: [
                {
                    date: 'updateThis',
                    dateReadable: 'Apr 6, 2025',
                    action: 'buy'
                }
            ],
            stockOrOptions: 'stock',
            quantity: 10,
            costBasis: 201.73,
            initalValue: 2017.30,
            stopLossYesNo: 'No',
            stopLossPercentage: null,
            takeProfitYesNo: 'No',
            takeProfitPercentage: null,
            confidenceLevel: [
                {
                    dateAdded: 'updateThis',
                    dateAddedReadable: 'Apr 6, 2025',
                    level: 3
                }
            ],
            thesis: [
                {
                    dateAdded: 'updateThis',
                    dateAddedReadable: 'Apr 6, 2025',
                    thesis: 'This is an initial thesis, which is poorly thought out and must be updated sometime soon.'
                }
            ]           
        }
    ],
    reducers : {
        addAssetToAccount: (state, action) => {
            const numAssets = state.length;
            let nextAssetID = numAssets + 1;
            const dateObject = Date();
            const readableDate = convertDateToText(dateObject);
            const {payload: { ticker, companyName, logo, watchOrBuy, stockOrOptions, assetQty, costBasis, stopLossYesNo, stopLossPercentage, takeProfitYesNo, takeProfitPercentage, confidenceLevel, thesis }} = action;
            const initialValue = assetQty * costBasis;
            const addedAsset = {
                assetId: nextAssetID,
                dateAdded: dateObject,
                dateAddedReadable: readableDate,
                ticker: ticker,
                companyName: companyName,
                logo: logo,
                watchBuySell: [
                    {
                    date: dateObject,
                    dateReadable: readableDate,
                    action: watchOrBuy//might need to test this to make sure my edit functions properly
                    }
                ],
                stockOrOptions: stockOrOptions,
                quantity: assetQty,
                costBasis: costBasis,
                initialValue: initialValue,
                todaysValues: {
                    open: 'someValue',
                    current: 'someValue',
                    dollarChange: 'someValue',
                    percentChange: 'someValue'
                },
                stopLossYesNo: stopLossYesNo,
                stopLossPercentage: stopLossPercentage,
                takeProfitYesNo: takeProfitYesNo,
                takeProfitPercentage: takeProfitPercentage,
                confidenceLevel: [
                    {
                        dateAdded: dateObject,
                        dateAddedReadable: readableDate,
                        level: confidenceLevel
                    }
                ],
                thesis: [
                    {
                        dateAdded: dateObject,
                        dateAddedReadable: readableDate,
                        thesis: thesis
                    }
                ]
            };
            return [...state, addedAsset];
            /*Original state code for action:
            return [...state, action.payload];
            */
        },
        updateAsset: (state, action) => {
            //const updatedThesis = action.payload.updatedThesis;
            //alert(action.payload.updatedThesis);
            const {payload: { assetIDParam, updatedThesis, updatedConfidenceLevel }} = action;
            //alert(updatedThesis);
            const dateObject = Date();
            const readableDate = convertDateToText(dateObject);
            const numdAssetIDParam = Number(assetIDParam);
            //const indexOfState = state.indexOf(asset => asset.assetId === assetIDParam);
            //alert(indexOfState);
            alert(numdAssetIDParam);
            const indexToUpdate = state.findIndex(asset => asset.assetId === numdAssetIDParam);
            const assetToUpdate = state.find(asset => asset.assetId === numdAssetIDParam);
            if (assetToUpdate) {
                const newStateArray = [...state];
                newStateArray[indexToUpdate].thesis.push({
                    dateAdded: dateObject,
                    dateAddedReadable: readableDate,
                    thesis: updatedThesis
                });
                newStateArray[indexToUpdate].confidenceLevel.push({
                    dateAdded: dateObject,
                    dateAddedReadable: readableDate,
                    level: updatedConfidenceLevel
                })
            } else {
                alert('Error: could not find requested asset.');
            };
        },
        sellAsset: (state, action) => {
            const {payload: { assetIDParam, updatedThesis, updatedConfidenceLevel, nextAction }} = action;
            const dateObject = Date();
            const readableDate = convertDateToText(dateObject);
            const numdAssetIDParam = Number(assetIDParam);
            //alert(numdAssetIDParam);
            const indexToUpdate = state.findIndex(asset => asset.assetId === numdAssetIDParam);
            const assetToUpdate = state.find(asset => asset.assetId === numdAssetIDParam);
            if (assetToUpdate) {
                const newStateArray = [...state];
                newStateArray[indexToUpdate].watchBuySell.push({
                    date: dateObject,
                    dateReadable: readableDate,
                    action: nextAction
                })
                newStateArray[indexToUpdate].thesis.push({
                    dateAdded: dateObject,
                    dateAddedReadable: readableDate,
                    thesis: updatedThesis
                });
                newStateArray[indexToUpdate].confidenceLevel.push({
                    dateAdded: dateObject,
                    dateAddedReadable: readableDate,
                    level: updatedConfidenceLevel
                })
            } else {
                alert('Error: could not find requested asset.');
            };

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTickerPriceOnAssetTableLoad.pending, (state, action) => {})
            .addCase(fetchTickerPriceOnAssetTableLoad.fulfilled, (state, action) => {
                //alert(action.payload);

            })
    }
})

export const selectAccountAssets = (state) => state.accountAssets;

export const { addAssetToAccount, updateAsset, sellAsset } = accountAssetsSlice.actions;

export default accountAssetsSlice.reducer;