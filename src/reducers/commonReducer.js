// import { SUBMIT_VALUE, SUBMIT_VALUES } from "../actions/submittedValueActions";
import { SUBMIT_VALUE, SUBMIT_VALUES } from "../actions/commonActions";
import assign from "lodash/assign";

const initialState = {
  data: {},
};

export default function submittedValueReducer(state = initialState, action) {
  console.log(" common Reducers", action);
  switch (action.type) {
    // case SUBMIT_VALUES:
    //   return action && action.payload && action.payload.submittedValue;

    case SUBMIT_VALUE:
      return assign({}, state, {
        data: action.data,
      });

    default:
      return state;
  }
}
