import { combineReducers } from "redux";
import { editReducer } from "./editReducer";
import { filterReducer } from "./filterReducer";
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
    filterReducer: filterReducer,
    editReducer: editReducer,
    loginReducer: loginReducer
});
