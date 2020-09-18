import { coursesActionTypes } from './courses.action-types';

const initialState = {
  list: [],
}

export const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case coursesActionTypes.FETCH_COURSE_LIST_SUCCESS: {
      return {
        ...state,
        list: [...action.courses]
      }
    }
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
