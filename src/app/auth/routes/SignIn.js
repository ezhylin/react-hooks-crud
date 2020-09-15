import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';

import {LoginForm} from "../components";
import {authActions} from "../state";

export const SignIn = () => {
  const dispatch = useDispatch();
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