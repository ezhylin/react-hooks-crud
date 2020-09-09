import combineReducers from 'react-combine-reducers';

import { coursesReducer } from './courses'

export const [reducer, initialState] = combineReducers({
  courses: coursesReducer,
});

