import { createElement } from 'react';
import dynamic from 'dva/dynamic';
import {routerConfig} from '../common/router';

let routerDataCache;

const modelNotExisted = (app, model) => (
  // eslint-disable-next-line
  !app._models.some(({ namespace }) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  })
);

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => {
  // () => require('module')
  // transformed by babel-plugin-dynamic-import-node-sync
  if (component.toString().indexOf('.then(') < 0) {
    models.forEach((model) => {
      if (modelNotExisted(app, model)) {
        // eslint-disable-next-line
        app.model(require(`../models/${model}`).default);
      }
    });
    return (props) => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return createElement(component().default, {
        ...props,
        routerData: routerDataCache,
      });
    };
  }
  // () => import('module')
  return dynamic({
    app,
    models: () => models.filter(
      model => modelNotExisted(app, model)).map(m => import(`../models/${m}.js`)
    ),

    // add routerData prop
    component: () => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return component().then((raw) => {
        const Component = raw.default || raw;
        return props => createElement(Component, {
          ...props,
          routerData: routerDataCache,
        });
      });
    },
  });
};

export const getRouterData = (app) => {
  return Object.keys(routerConfig).reduce((datas, key) => {
    let {models, router, props} = routerConfig[key];
    return datas[key] = {
      ...props,
      component: dynamicWrapper(app, models, router),
    }, datas;
  }, {});
};

export function getRoutes(path, routerData) {
  let routes = Object.keys(routerData).filter(routePath => routePath.indexOf(path) === 0 && routePath !== path);
  routes = routes.map(item => item.replace(path, ''));
  return routes.map((item) => {
    return {
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`,
    };
  });
};