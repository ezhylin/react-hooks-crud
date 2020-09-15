import React from 'react';

import { Footer, Header } from "./components";
import { AppStateProvider } from '../store'

import { routes } from './app.routes';
import { reducer, initialState } from './app.reducer';
import {RouterOutlet} from "./components/RouterOutlet";

const CONTENT_INJECTION = {
  Header,
  Footer,
}

export function App() {
  return (
    <AppStateProvider reducer={reducer} initialState={initialState}>
      <RouterOutlet routes={routes}>{CONTENT_INJECTION}</RouterOutlet>
    </AppStateProvider>
  );
}
