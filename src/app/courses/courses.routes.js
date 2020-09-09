import { NewCourse, EditCourse, Dashboard} from "./routes";

export const coursesRoutes = [
  {
    path: '/courses/new',
    component: NewCourse,
    key: 0,
  },
  {
    path: '/courses/:courseId',
    component: EditCourse,
    key: 1,
  },
  {
    path: '/courses',
    component: Dashboard,
    key: 2,
  },
]