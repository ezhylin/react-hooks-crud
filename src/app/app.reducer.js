import {combineReducers} from "redux";

import { coursesReducer as courses } from './courses';
import { authReducer as auth } from './auth';
import { loaderReducer as loader } from './shared';


export const appReducer = combineReducers({
  courses,
  auth,
  loader,
});
