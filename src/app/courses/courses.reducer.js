import { coursesActionTypes } from './courses.action-types';

export const initialState = {
  list: [],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case coursesActionTypes.CREATE_COURSE: {
      return {
        ...state,
        list: [...state.list, action.course]
      }
    }

    case coursesActionTypes.DELETE_COURSE: {
      return {
        ...state,
        list: state.list.filter(course => course.id !== action.courseId)
      }
    }

    case coursesActionTypes.UPDATE_COURSE: {
      return {
        ...state,
        list: state.list.map(course => (
          course.id === action.courseId
            ? ({ ...course, ...action.course })
            : course
        ))
      }
    }

    default: {
      return state;
    }
  }
}

export const coursesReducer = [reducer, initialState];