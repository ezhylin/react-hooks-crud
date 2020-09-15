import React from "react";
import {Route} from "react-router-dom";

export const RouteGuard = ({key, guards = [], ...route}) => {
  const checkAccess = (guards) => {
    const defaultPermission = {hasAccess: true, fallback: undefined}
    const permission = guards.map((guard) => guard()).find(permission => !permission.hasAccess)

    return permission || defaultPermission;
  }
  const {hasAccess, fallback} = checkAccess(guards);

  if (hasAccess) {
    return (<Route key={key} {...route} />);
  }

  return fallback();
}