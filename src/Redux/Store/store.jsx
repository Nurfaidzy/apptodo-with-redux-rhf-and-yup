import { combineReducers, createStore } from "redux";
import ListReducer from "../Reducer/ListReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  lists: ListReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
