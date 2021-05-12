import axios from "axios";

export const SUBMIT_VALUE = "SUBMIT_VALUE";
export const SUBMIT_VALUES = "SUBMIT_VALUES";

// The function, submitValue, is an 'action creator'
// The return value is an 'action'
export function submitValue(input) {
  console.log(" New =>Input", input);
  return {
    type: SUBMIT_VALUES,
    payload: {
      submittedValue: input,
    },
  };
}

export function callApi() {
  debugger;
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if (response.status == 200) {
          dispatch({
            type: SUBMIT_VALUE,
            data: response.data,
          });
        }
      });
  };
}
