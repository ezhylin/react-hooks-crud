import { all } from "redux-saga/effects";

import { coursesSagas } from './courses';

export function* rootSaga() {
  const allSagas = [ ...coursesSagas ].map(saga => saga());

  yield all(allSagas);
}