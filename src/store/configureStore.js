// import { createStore, combineReducers } from "redux";
// // import submittedValueReducer from "./reducers/submittedValueReducer";
// import submittedValueReducer from "../reducers/submittedValueReducer";
// import commonReducer from "../reducers/commonReducer";

// const allReducers = combineReducers({
//   submittedValue: submittedValueReducer,
//   commonReducer: commonReducer,
// });
// export const store = createStore(
//   allReducers
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import reduxThunk from "redux-thunk";
// import logger from "redux-logger";
import rootReducer from "../reducers/index";

// export default function configureStore(initialState) {
//   const enhancer = compose(applyMiddleware(reduxThunk));
//   const store = createStore(rootReducer, initialState, enhancer);
//   return store;
// }

const enhancer = compose(applyMiddleware(reduxThunk));
export const store = createStore(rootReducer, {}, enhancer);
// export default store;
