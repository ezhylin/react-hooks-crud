import { call, takeLatest, put } from 'redux-saga/effects';

import { coursesActionTypes } from './courses.action-types';
import { coursesActions } from './courses.actions';
import { coursesApi } from "./courses.api";
import { loaderActionCreators } from "../shared";

export function* createCourse(action) {
  try {
    yield put(loaderActionCreators.show());
    const course = yield call([coursesApi, coursesApi.create], action.course);
    yield put(coursesActions.createCourseSuccess(course));
  } catch (error) {
    yield put(coursesActions.createCourseFail(error));
  } finally {
    yield put(loaderActionCreators.hide());
  }
}

export function* watchCreateCourse() {
  yield takeLatest(coursesActionTypes.CREATE_COURSE, createCourse);
}

export function* fetchCourseList(...args) {
  try {
    yield put(loaderActionCreators.show());
    const courses = yield call([coursesApi, coursesApi.getList]);
    yield put(coursesActions.fetchCourseListSuccess(courses));
  } catch (error) {
    yield put(coursesActions.fetchCourseListFail(error))
  } finally {
    yield put(loaderActionCreators.hide());
  }
}

export function* watchFetchCourseList() {
  yield takeLatest(coursesActionTypes.FETCH_COURSE_LIST, fetchCourseList)
}

export function* updateCourse(action) {
  try {
    yield put(loaderActionCreators.show());
    const course = yield call([coursesApi, coursesApi.update], action.courseId, action.course);
    yield put(coursesActions.updateCourseSuccess(course))
  } catch (error) {
    yield put(coursesActions.updateCourseFail(error));
  } finally {
    yield put(loaderActionCreators.hide());
  }
}

export function* watchUpdateCourse() {
  yield takeLatest(coursesActionTypes.UPDATE_COURSE, updateCourse);
}

export function* deleteCourse(action) {
  try {
    yield put(loaderActionCreators.show());
    yield call([coursesApi, coursesApi.delete], action.courseId);
    yield put(coursesActions.deleteCourseSuccess(action.courseId));
  } catch (error) {
    yield put(coursesActions.deleteCourseFail(error))
  } finally {
    yield put(loaderActionCreators.hide());
  }
}

export function* watchDeleteCourse() {
  yield takeLatest(coursesActionTypes.DELETE_COURSE, deleteCourse);
}

export const coursesSagas = [
  watchCreateCourse,
  watchFetchCourseList,
  watchUpdateCourse,
  watchDeleteCourse,
];