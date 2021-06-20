import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { contractRoutes } from "./ContractRoutes";
import { aboutRoutes } from "./AboutRoutes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/about"
        render={({ match: { url } }) => (
          <Switch>
            {aboutRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/contract"
        render={({ match: { url } }) => (
          <Switch>
            {contractRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
};
