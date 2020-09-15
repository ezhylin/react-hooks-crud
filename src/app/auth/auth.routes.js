import { v1 } from 'uuid';

import { ResetPassword, SignIn, SingUp } from './routes';

export const authRoutes = [
  {
    path: '/sign-in',
    component: SignIn,
    key: v1(),
  },
  {
    path: '/sign-up',
    component: SingUp,
    key: v1(),
  },
  {
    path: '/reset-password',
    component: ResetPassword,
    key: v1(),
  },
];