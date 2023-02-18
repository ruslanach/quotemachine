import {apiQuote} from "../api";

const ADD_CURRENT_QUOTE = 'ADD_CURRENT_QUOTE';
const SET_QUOTES = 'SET_QUOTES';
const SET_INITIALIZED = 'SET_INITIALIZED';
let initialState = {
    quote: '',
    quotes: [],
    initialized: false
};

export const quoteReducer = (state = initialState, action) => {

    switch (action.type) {


        case ADD_CURRENT_QUOTE:
            const currentQuoteNumber = Math.floor(Math.random() * state.quotes.length)
            return {...state, quote: state.quotes[currentQuoteNumber]}
        case SET_QUOTES:

//             let quotesCopy = [];
//             let i = -1;
// let lenthQuotes = action.quotes.length;
//             while (++i <lenthQuotes ) {
//                 quotesCopy[i] = action.quotes[i];
//             }
            let quotesCopy = {...state, quotes: [...action.quotes]};
            return {...state, quotes: [...action.quotes]}
        case SET_INITIALIZED:

            return {...state, initialized: true}
        default:
            return state;


    }
}
export const setQuote = () => ({type: ADD_CURRENT_QUOTE})
export const setQuotes = (quotes) => ({type: SET_QUOTES, quotes})
export const setInitialized = () => ({type: SET_INITIALIZED})
export const getQuotes = () => async (dispatch) => {
    let quotesData = await apiQuote.getQuote();
    dispatch(setQuotes(quotesData.quotes));
    dispatch(setQuote());
    dispatch(setInitialized());


}
export const setCurrentQuotes = () => (dispatch) => {
    dispatch(setQuote());
}


