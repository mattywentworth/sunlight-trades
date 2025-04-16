import OpenAI from 'openai';

const openAIApiKey = import.meta.env.VITE_OPEN_AI_API_KEY;
const client = new OpenAI( { apiKey: openAIApiKey, dangerouslyAllowBrowser: true});

const constructHoldPrompt = (ticker, holdType, mostRecentBuyDate, confidenceLevel, thesis, todaysDate) => {
    let action;
    if (holdType === 'Hold') {
        action = 'hold';
    } else if (holdType === 'Keep Watching') {
        action = 'keep watching'
    };

    const prompt = "Please analyze the investment thesis below, which begins after the words 'THESIS HERE:'. The Thesis relates to my decision to " + action + " stock in " + ticker + " on " + todaysDate + " after purchasing it on " + mostRecentBuyDate + ". On a scale from 1 to 10, 1 being the lowest confidence in this stock increasing in value, and 10 being the highest confidence in this stock increasing in value, I have a confidence level of " + confidenceLevel + " that this stock will increase in value. In your analysis, please do not summarize my thesis. Instead, simply provide a 5 to 7 sentence critique of my thesis, which is my justification for continuing to hold the stock. Please focus on three main areas. First, and most importantly, please consider how human psychology might be impacting my thought process, whether positively or negatively. Second, please consider the financial fundamentals of " + ticker + " stock right now and whether those fundamentals indicate the stock being a good or bad investment. Third, if you haven't exceeded the 5 to 7 sentence limit I asked for, please indicate how world events could impact the performance of " + ticker + " stock. THESIS HERE: " + thesis;
    return prompt;
}


export const callChatGPTForHoldPrompt = async (ticker, mostRecentBuyDate, confidenceLevel, thesis, todaysDate) => {
    const holdPrompt = constructHoldPrompt(ticker, mostRecentBuyDate, confidenceLevel, thesis, todaysDate);
    try {
        const response = await client.responses.create({
            model: "gpt-4o",
            input: holdPrompt
        });
        //alert(Object.keys(response));
        const data = response.output[0].content[0].text;
        return data;
    } catch (error) {
        return error;
    }
};


const constructBuyPrompt = (ticker, confidenceLevel, thesis, todaysDate) => {

    const prompt = "Please analyze the investment thesis below, which begins after the words 'THESIS HERE:'. The Thesis relates to my decision to buy stock in " + ticker + " on " + todaysDate + ". On a scale from 1 to 10, 1 being the lowest confidence in this stock increasing in value, and 10 being the highest confidence in this stock increasing in value, I have a confidence level of " + confidenceLevel + " that this stock will increase in value. In your analysis, please do not summarize my thesis. Instead, simply provide a 5 to 7 sentence critique of my thesis, which is my justification for continuing to hold the stock. Please focus on three main areas. First, and most importantly, please consider how human psychology might be impacting my thought process, whether positively or negatively. Second, please consider the financial fundamentals of " + ticker + " stock right now and whether those fundamentals indicate the stock being a good or bad investment. Third, if you haven't exceeded the 5 to 7 sentence limit I asked for, please indicate how world events could impact the performance of " + ticker + " stock. THESIS HERE: " + thesis;
    return prompt;
}

export const callChatGPTForBuyPrompt = async (ticker, confidenceLevel, thesis, todaysDate) => {
    const buyPrompt = constructBuyPrompt(ticker, confidenceLevel, thesis, todaysDate);
    try {
        const response = await client.responses.create({
            model: "gpt-4o",
            input: buyPrompt
        });
        //alert(Object.keys(response));
        const data = response.output[0].content[0].text;
        return data;
    } catch (error) {
        return error;
    }
};