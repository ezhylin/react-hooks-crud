import React from "react";
import { Redirect } from 'react-router-dom';

import { coursesRoutes } from './courses'
import { NotFound } from './routes';

export const routes = [
  ...coursesRoutes,
  {
    path: '/',
    component: () => (<Redirect  to="/courses" />),
    exact: true,
    key: 3,
  },
  {
    component: NotFound,
    key: 4,
  }
];