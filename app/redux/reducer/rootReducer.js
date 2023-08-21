import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import recipeReducer from "./recipeReducer";

const rootReducer = combineReducers({
  user: userReducer,
  recepe: recipeReducer,
});

export default rootReducer;