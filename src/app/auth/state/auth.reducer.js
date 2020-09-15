import { authActionTypes } from './auth.action-types';

const initialState = {
  loading: false,
  user: undefined,
  accessToken: undefined,
  error: undefined,
};

export const authReducer = (state = initialState, action) => {
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
