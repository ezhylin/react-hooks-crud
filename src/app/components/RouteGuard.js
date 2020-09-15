import {useAppState} from "../../store";
import {Route} from "react-router-dom";
import React from "react";

export const RouteGuard = ({key, guards = [], ...route}) => {
  const store = useAppState();
  const checkAccess = (guards) => {
    const defaultPermission = {hasAccess: true, fallback: undefined}
    const permission = guards.map((guard) => guard(store)).find(permission => !permission.hasAccess)

    return permission || defaultPermission;
  }
  const {hasAccess, fallback} = checkAccess(guards);

  if (hasAccess) {
    return (<Route key={key} {...route} />);
  }

  return fallback();
}