import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";

import {RouteGuard} from "./RouteGuard";

export const RouterOutlet = ({ routes, children }) => {
  const { Header, Footer, Loader } = children;

  return (
    <Router>
      <div style={{ display: 'flex', flexFlow: 'column', minHeight: '100%'}}>
        <Header />
        <main style={{ flex: '1 0 auto' }}>
          <Switch>
            {routes.map(RouteGuard)}
          </Switch>
        </main>
        <Footer />
        <Loader />
      </div>
    </Router>
  );
}