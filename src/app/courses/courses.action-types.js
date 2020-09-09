const actionPrefix = actionType => `[APP_STATE] ${actionType}`;

const SET_COURSES = actionPrefix`SET_COURSES`;
const DELETE_COURSE = actionPrefix`DELETE_COURSE`;
const CREATE_COURSE = actionPrefix`CREATE_COURSE`;
const UPDATE_COURSE = actionPrefix`UPDATE_COURSE`;

export const coursesActionTypes = {
  SET_COURSES,
  DELETE_COURSE,
  CREATE_COURSE,
  UPDATE_COURSE,
}