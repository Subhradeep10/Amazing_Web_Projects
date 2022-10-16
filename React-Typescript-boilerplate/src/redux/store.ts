import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/rootReducer";
import thunk from "redux-thunk";

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);


export const store = createStore(rootReducer, composeEnhancers(middleware));
