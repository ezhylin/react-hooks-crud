import React from 'react';
import { Provider } from "react-redux";

import { routes } from './app.routes';
import { Footer, Header, RouterOutlet } from "./components";
import { store } from "./store";

const CONTENT_INJECTION = {
  Header,
  Footer,
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
