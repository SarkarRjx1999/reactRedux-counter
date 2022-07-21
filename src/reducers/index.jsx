import chngNum from "./counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNumber: chngNum
});

export default rootReducer;
