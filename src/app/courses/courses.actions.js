import { coursesActionTypes } from './courses.action-types';

const setCourses = courses => ({
  type: coursesActionTypes.SET_COURSES,
  courses,
})

const deleteCourse = courseId => ({
  type: coursesActionTypes.DELETE_COURSE,
  courseId,
})

const createCourse = course => ({
  type: coursesActionTypes.CREATE_COURSE,
  course
})

const updateCourse = (courseId, course) => ({
  type: coursesActionTypes.UPDATE_COURSE,
  courseId,
  course,
})

export const coursesActions = {
  setCourses,
  deleteCourse,
  createCourse,
  updateCourse,
};
