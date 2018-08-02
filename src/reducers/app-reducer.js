import { SET_LOADING, DO_OPERATION } from '../actions/action-types';

// set initial state
const initialState = {
  loading: false,
  result: null,
  history: []
};

export default function actions(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING: {
      state.loading = action.payload;
      return state;
     }
    case DO_OPERATION: {
      const {value1, value2} = action.payload;
      const retObj = Object.assign({}, state);

      switch (action.payload.operation) {
        case 'add': {
          const result = value1 + value2;
          retObj.result = result;
          retObj.history.push(result);
          return retObj;
        }
        case 'subtract': {
          const result = value1 - value2;
          retObj.result = result;
          retObj.history.push(result);
          return retObj;
        }
        case 'multiply': {
          const result = value1 * value2;
          retObj.result = result;
          retObj.history.push(result);
          return retObj;
        }
        case 'divide': {
          const result = value1 / value2;
          retObj.result = result;
          retObj.history.push(result);
          return retObj;
        }
        default: {
          return retObj;
        }
      }
    }
    default:
     return state;
  }
}
