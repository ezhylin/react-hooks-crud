import { createStore } from "redux";
import { appReducer } from "./app.reducer";

export const configureStore = () => {
  return createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export const store = configureStore();