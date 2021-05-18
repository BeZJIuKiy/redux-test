import {combineReducers} from "redux";
import {manReducer} from "./manReducer";

export const rootReducer = combineReducers({
	man: manReducer,
})