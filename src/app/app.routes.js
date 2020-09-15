import React from "react";
import { Redirect } from 'react-router-dom';
import { v1 } from 'uuid';

import { coursesRoutes } from './courses'
import { authRoutes } from './auth';
import { NotFound } from './routes';

export const routes = [
  ...authRoutes,
  ...coursesRoutes,
  {
    path: '/',
    component: () => (<Redirect  to="/courses" />),
    exact: true,
    key: v1(),
  },
  {
    component: NotFound,
    key: v1(),
  }
];