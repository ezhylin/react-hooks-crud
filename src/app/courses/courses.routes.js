import { v1 } from 'uuid';
import { NewCourse, EditCourse, Dashboard} from "./routes";
import {useAuth} from "../auth/useAuth";

export const coursesRoutes = [
  {
    path: '/courses/new',
    component: NewCourse,
    guards: [useAuth],
    key: v1(),
  },
  {
    path: '/courses/:courseId',
    component: EditCourse,
    guards: [useAuth],
    key: v1(),
  },
  {
    path: '/courses',
    component: Dashboard,
    guards: [useAuth],
    key: v1(),
  },
]