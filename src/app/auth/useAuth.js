import React from "react";
import {useSelector} from "react-redux";
import { Redirect } from "react-router-dom";
import {v1} from "uuid";

export const useAuth = () => {
  const user = useSelector(({ auth }) => auth.user);

  return {
    hasAccess: !!user,
    fallback: () => <Redirect to="/sign-in" key={v1()}/>
  }
}