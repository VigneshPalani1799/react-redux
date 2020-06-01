import { createStore, combineReducers } from "redux";
import cakeReducer from "./cakeReducer";
import iceCreamReducer from "./iceCreamReducer";

const rootReducer = combineReducers({
    cakeReducer:cakeReducer,
    iceCreamReducer:iceCreamReducer
});

export const store = createStore(rootReducer);