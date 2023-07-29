import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))