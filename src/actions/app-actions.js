import { SET_LOADING, DO_OPERATION } from './action-types';

export const startLoading = () => ({
  type: SET_LOADING,
  payload: true,
});

export const stopLoading = () => ({
  type: SET_LOADING,
  payload: false,
});

export const doOperation = (value1, value2, operation, callback) => ({
  type: DO_OPERATION,
  payload: {
    value1,
    value2,
    operation,
    callback
  },
});

