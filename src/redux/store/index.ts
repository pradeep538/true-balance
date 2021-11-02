import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import tureBalanceReducer from "../reducers";

const reducers = {
  tureBalanceReducer: tureBalanceReducer
};

const combinedReducers = combineReducers(reducers);

const logger = createLogger({
  predicate: (getState, action) => {
    return true;
  }
});

const middleWare: [any] = [thunkMiddleware];

if (process && process.env && process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

export default createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(...middleWare))
);
