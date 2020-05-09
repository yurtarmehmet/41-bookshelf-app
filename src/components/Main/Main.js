import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";

const Main = () => {
  return (
    <div>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default Main;
