import { authActionTypes } from './auth.action-types';

const initialState = {
  loading: false,
  user: undefined,
  accessToken: undefined,
  error: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case authActionTypes.LOG_IN: {
      return {
        ...state,
        user: action.credentials,
      }
    }

    case authActionTypes.LOG_OUT: {
      return {
        ...state,
        user: undefined,
      }
    }

    default: {
      return state;
    }
  }
};

export const authReducer = [reducer, initialState];
