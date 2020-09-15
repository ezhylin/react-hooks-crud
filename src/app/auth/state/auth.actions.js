import { authActionTypes } from './auth.action-types';

export const login = (credentials) => ({
  type: authActionTypes.LOG_IN,
  credentials,
});

export const logout = () => ({
  type: authActionTypes.LOG_OUT,
});

export const authActions = {
  login,
  logout,
}