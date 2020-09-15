import combineReducers from 'react-combine-reducers';

import { coursesReducer } from './courses';
import { authReducer } from './auth';

export const [reducer, initialState] = combineReducers({
  courses: coursesReducer,
  auth: authReducer,
});

