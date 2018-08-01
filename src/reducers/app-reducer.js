import { SET_LOADING, DO_OPERATION } from '../actions/action-types';

// set initial state
const initialState = {
  loading: false,
  result: null
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
          retObj.result = value1 + value2;
        }
        case 'subtract': {
          retObj.result = value1 - value2;
        }
        case 'multiply': {
          retObj.result = value1 * value2;
        }
        case 'divide': {
          retObj.result = value1 / value2;
        }
        default: retObj.result = null;
      }
      return retObj;
    }
    default:
     return state;
  }
}
