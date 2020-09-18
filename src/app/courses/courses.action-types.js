const actionPrefix = actionType => `Courses API: ${actionType}`;

const CREATE_COURSE = actionPrefix`CREATE_COURSE`;
const CREATE_COURSE_FAIL = actionPrefix`CREATE_COURSE_FAIL`;
const CREATE_COURSE_SUCCESS = actionPrefix`CREATE_COURSE_SUCCESS`;

const FETCH_COURSE_LIST = actionPrefix`FETCH_COURSE_LIST`;
const FETCH_COURSE_LIST_FAIL = actionPrefix`FETCH_COURSE_LIST_FAIL`;
const FETCH_COURSE_LIST_SUCCESS = actionPrefix`FETCH_COURSE_LIST_SUCCESS`;

const UPDATE_COURSE = actionPrefix`UPDATE_COURSE`;
const UPDATE_COURSE_FAIL = actionPrefix`UPDATE_COURSE_FAIL`;
const UPDATE_COURSE_SUCCESS = actionPrefix`UPDATE_COURSE_SUCCESS`;

const DELETE_COURSE = actionPrefix`DELETE_COURSE`;
const DELETE_COURSE_FAIL = actionPrefix`DELETE_COURSE_FAIL`;
const DELETE_COURSE_SUCCESS = actionPrefix`DELETE_COURSE_SUCCESS`;

export const coursesActionTypes = {
  CREATE_COURSE,
  CREATE_COURSE_FAIL,
  CREATE_COURSE_SUCCESS,

  FETCH_COURSE_LIST,
  FETCH_COURSE_LIST_FAIL,
  FETCH_COURSE_LIST_SUCCESS,

  UPDATE_COURSE,
  UPDATE_COURSE_FAIL,
  UPDATE_COURSE_SUCCESS,

  DELETE_COURSE,
  DELETE_COURSE_FAIL,
  DELETE_COURSE_SUCCESS,
}