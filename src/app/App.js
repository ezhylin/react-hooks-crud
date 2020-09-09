import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Footer, Header } from "./components";
import { AppStateProvider } from '../store'

import { routes } from './app.routes';
import { reducer, initialState } from './app.reducer';

export function App() {
  return (
    <AppStateProvider reducer={reducer} initialState={initialState}>
      <Router>
        <div style={{ display: 'flex', flexFlow: 'column', minHeight: '100%'}}>
          <Header />
          <main style={{ flex: '1 0 auto' }}>
            <Switch>
              {routes.map(({ key, ...route }) => (
                <Route key={key} {...route} />
              ))}
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </AppStateProvider>
  );
}
