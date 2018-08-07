import { GET_USERS } from './action-types';

export const getUsers = () => async (dispatch, state) => {
  if (state().user.name) {
    const user = state().user;
    const json = {
      name: user.name,
      email: user.email,
      website: user.website,
    };

    dispatch({
      type: GET_USERS,
      payload: json
    });
  } else {
    try {
      const usersFetch = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const json = await usersFetch.json();

      dispatch({
        type: GET_USERS,
        payload: json
      });
    } catch (err) {
      console.warn(err);
    }
  }
};
