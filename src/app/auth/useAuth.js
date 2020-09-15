import React from "react";
import { Redirect } from "react-router-dom";
import {v1} from "uuid";

export const useAuth = ({ state }) => {
  const {user} = state.auth;

  return {
    hasAccess: !!user,
    fallback: () => <Redirect to="/sign-in" key={v1()}/>
  }
}