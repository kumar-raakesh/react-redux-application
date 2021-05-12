import { combineReducers } from "redux";
import commonReducer from "./commonReducer";
// import submittedValueReducer from "./submittedValueReducer";

const rootReducer = combineReducers({
  commonReducer,
  // submittedValueReducer,
});

// const rootReducer = (state, action) => {
//   if (action.type === "LOGOUT") {
//     const { routing } = state;
//     state = { routing };
//   }
//   return appReducer(state, action);
// };
export default rootReducer;
