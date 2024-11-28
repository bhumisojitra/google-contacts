import { combineReducers } from "redux";
import googleReducer from "./googleReducer";
import lodingReducer from "./lodingReducer";
import loginFormReducer from "./loginFormReducer";

const mainReducer = combineReducers({
    googleReducer,
    lodingReducer,
    loginFormReducer
});

export default mainReducer