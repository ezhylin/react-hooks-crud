import React from 'react';
import { Provider } from "react-redux";

import { routes } from './app.routes';
import { Footer, Header, RouterOutlet } from "./components";
import { store } from "./store";
import {Loader} from "./shared";

const CONTENT_INJECTION = {
  Header,
  Footer,
  Loader,
}

export function App() {
  return (
    <Provider store={store}>
      <RouterOutlet routes={routes}>
        {CONTENT_INJECTION}
      </RouterOutlet>
    </Provider>
  );
}
