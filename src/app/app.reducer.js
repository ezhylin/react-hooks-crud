import {combineReducers} from "redux";

import { coursesReducer as courses } from './courses';
import { authReducer as auth } from './auth';


export const appReducer = combineReducers({
  courses,
  auth,
});
