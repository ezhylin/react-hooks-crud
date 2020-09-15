import React from "react";
import {useHistory} from 'react-router-dom';

import {LoginForm} from "../components";
import {useAppState} from "../../../store";
import {authActions} from "../state/auth.actions";

export const SignIn = () => {
  const { dispatch } = useAppState();
  const { push } = useHistory();

  const handleLogin = (credentials) => {
    dispatch(authActions.login({
      ...credentials,
      id: credentials.email,
    }));
    push('/courses');
  };

  return (
    <LoginForm onSubmit={handleLogin}/>
  )
}