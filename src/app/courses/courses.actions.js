import { coursesActionTypes } from './courses.action-types';

const createCourse = course => ({
  type: coursesActionTypes.CREATE_COURSE,
  course
})

const createCourseFail = error => ({
  type: coursesActionTypes.CREATE_COURSE_FAIL,
  error,
})

const createCourseSuccess = course => ({
  type: coursesActionTypes.CREATE_COURSE_SUCCESS,
  course,
})

const fetchCourseList = () => ({
  type: coursesActionTypes.FETCH_COURSE_LIST,
});

const fetchCourseListFail = error => ({
  type: coursesActionTypes.FETCH_COURSE_LIST_SUCCESS,
  error,
})

const fetchCourseListSuccess = courses => ({
  type: coursesActionTypes.FETCH_COURSE_LIST_SUCCESS,
  courses,
})

const updateCourse = (courseId, course) => ({
  type: coursesActionTypes.UPDATE_COURSE,
  courseId,
  course,
})

const updateCourseFail = error => ({
  type: coursesActionTypes.UPDATE_COURSE_FAIL,
  error,
})

const updateCourseSuccess = course => ({
  type: coursesActionTypes.UPDATE_COURSE_SUCCESS,
  course,
})

const deleteCourse = courseId => ({
  type: coursesActionTypes.DELETE_COURSE,
  courseId,
})

const deleteCourseFail = error => ({
  type: coursesActionTypes.DELETE_COURSE_FAIL,
  error,
})

const deleteCourseSuccess = courseId => ({
  type: coursesActionTypes.DELETE_COURSE_SUCCESS,
  courseId,
})

export const coursesActions = {
  createCourse,
  createCourseFail,
  createCourseSuccess,

  fetchCourseList,
  fetchCourseListFail,
  fetchCourseListSuccess,

  updateCourse,
  updateCourseFail,
  updateCourseSuccess,

  deleteCourse,
  deleteCourseFail,
  deleteCourseSuccess,
};
