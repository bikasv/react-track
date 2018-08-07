import { GET_USERS } from '../actions/action-types';

// set initial state
const initialState = {
  name: '',
  email: '',
  website: ''
};

export default function actions(state = initialState, action = {}) {
  switch (action.type) {
    case GET_USERS: {
      const retObj = Object.assign({}, state);
      retObj.name = action.payload.name;
      retObj.email = action.payload.email;
      retObj.website = action.payload.website;
      return retObj;
    }

    default:
      return state;
  }
}
