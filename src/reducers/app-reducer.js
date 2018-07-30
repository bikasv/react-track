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
      switch (action.payload.operation) {
        case 'add': {
          state.result = value1 + value2;
        }
        case 'subtract': {
          state.result = value1 - value2;
        }
        case 'multiply': {
          state.result = value1 * value2;
        }
        case 'divide': {
          state.result = value1 / value2;
        }
        default: return state;
      }
      return state;
    }
    default:
     return state;
  }
}
