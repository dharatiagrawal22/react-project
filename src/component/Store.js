import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Index";
import thunk from "redux-thunk";

export default createStore(rootReducer, applyMiddleware(thunk));
