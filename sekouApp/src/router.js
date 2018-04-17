import React from "react";
import { routerRedux, Route, Switch } from "dva/router";
import dynamic from "dva/dynamic";
import { getRouterData } from './utils/router';

const { ConnectedRouter } = routerRedux;

dynamic.setDefaultLoadingComponent(() => {
  return <div />;
});

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const BasicLayout = routerData["/"].component;
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={BasicLayout} />
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
