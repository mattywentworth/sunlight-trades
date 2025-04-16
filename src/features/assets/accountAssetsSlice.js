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

export const fetchTickerPriceOnAssetTableLoad = createAsyncThunk('accountAssets/fetchTickerPriceOnAssetTableLoad',
    async (stockSymbol) => {
        const response = await client
            .timeSeries(stockSymbol);
        return response.values;//need to filter this down more
    }
);

/*const testFunc = async () => {
    try {
        const response = fetch('https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&apikey=d694183c91ba4dd49a49c85d10021f81');
        console.log(response);
    } catch {
        console.log('error');
    }
};*/

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
                    action: 'Buy'
                }
            ],
            stockOrOptions: 'stock',
            quantity: 10,
            costBasis: 201.73,
            initialValue: 2017.30,
            stopLossYesNo: 'No',
            stopLossPercentage: null,
            takeProfitYesNo: 'No',
            takeProfitPercentage: null,
            confidenceLevel: [
                {
                    dateAdded: 'updateThis',
                    dateAddedReadable: 'Apr 6, 2025',
                    level: 8
                }
            ],
            thesis: [
                {
                    dateAdded: 'updateThis',
                    dateAddedReadable: 'Apr 6, 2025',
                    thesis: "Even though Trump is unpredictable, I think AAPL will perform well during his presidency. They have a solid balance sheet, haven't risen as much as other tech stocks in the last year, and I believe will be on the cutting edge of quantum computing. If Apple doesn't perform well, I think it will be a result of the overall economy dragging it down rather than anything specific to Apple.",
                    action: 'Buy'
                }
            ],
            aiAnalysis: [
                {
                    dateAdded: 'updateThis',
                    dateAddedReadable: 'Apr 6, 2025',
                    aiAnalysis: "Your thesis reflects a strong fundamental basis for confidence in AAPL, particularly given its robust balance sheet and relative underperformance compared to other tech stocks—suggesting potential for upside. The macro acknowledgment of Trump’s unpredictability hints at an awareness of geopolitical and regulatory risks, though these are downplayed in favor of Apple’s resilience. The belief in Apple’s leadership in quantum computing suggests a forward-looking investment mindset, though that specific catalyst may be more speculative or long-term in nature. Your reasoning shows a rational separation between company-specific risk and broader economic risk, a hallmark of disciplined investing. Psychologically, the 8/10 confidence rating may reflect a bias toward Apple’s brand strength and track record, which can sometimes inflate investor optimism even in uncertain environments. Overall, your decision balances grounded fundamentals with a clear-eyed view of external uncertainties.",
                    action: 'Buy'
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
            const roundedInitialValue = Number(initialValue.toFixed(2));
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
                initialValue: roundedInitialValue,
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
                        thesis: thesis,
                        action: watchOrBuy
                    }
                ],
                aiAnalysis: [
                    {
                        dateAdded: dateObject,
                        dateAddedReadable: readableDate,
                        aiAnalysis: "This is an initial analysis of the initial thesis, which might be longer than the actual thesis, so it's possible that I should rethink how to style these sections, depending on what happens with the length.",
                        action: watchOrBuy
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
            const {payload: { assetIDParam, updatedThesis, updatedConfidenceLevel, aiAnalysis, updateAction }} = action;
            //alert(updatedThesis);
            const dateObject = Date();
            const readableDate = convertDateToText(dateObject);
            const numdAssetIDParam = Number(assetIDParam);
            //const indexOfState = state.indexOf(asset => asset.assetId === assetIDParam);
            //alert(indexOfState);
            //alert(numdAssetIDParam);
            const indexToUpdate = state.findIndex(asset => asset.assetId === numdAssetIDParam);
            const assetToUpdate = state.find(asset => asset.assetId === numdAssetIDParam);
            if (assetToUpdate) {
                const newStateArray = [...state];
                newStateArray[indexToUpdate].thesis.push({
                    dateAdded: dateObject,
                    dateAddedReadable: readableDate,
                    thesis: updatedThesis,
                    action: updateAction
                });
                newStateArray[indexToUpdate].confidenceLevel.push({
                    dateAdded: dateObject,
                    dateAddedReadable: readableDate,
                    level: updatedConfidenceLevel
                })
                newStateArray[indexToUpdate].aiAnalysis.push({
                    dateAdded: dateObject,
                    dateAddedReadable: readableDate,
                    aiAnalysis: aiAnalysis,
                    action: updateAction
                })
                /*newStateArray[indexToUpdate].watchBuySell.push({
                    date: dateObject,
                    dateReadable: readableDate,
                    action: 'Update'
                })*/
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
    extraReducers: (builder) => { //Given how heavy this is on API calls, this should only be called once per day on the weekend
        builder
            .addCase(fetchTickerPriceOnAssetTableLoad.pending, (state, action) => {
                alert('pending');
            })
            .addCase(fetchTickerPriceOnAssetTableLoad.fulfilled, (state, action) => {
                alert(action.payload[0].close);

            })
            .addCase(fetchTickerPriceOnAssetTableLoad.rejected, (state, action) => {
                alert('rejected');
            })
    }
})

export const selectAccountAssets = (state) => state.accountAssets;

export const { addAssetToAccount, updateAsset, sellAsset } = accountAssetsSlice.actions;

export default accountAssetsSlice.reducer;