import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {quoteReducer} from "./quoteReducer";
let reducers = combineReducers({
    allQuotes: quoteReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));


export default store;
window.store = store;