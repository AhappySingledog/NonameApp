import '@babel/polyfill';
import 'url-polyfill';
import dva from 'dva';
import './core/netcore';
import createHistory from 'history/createHashHistory';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
app.use(createLoading());

// 3. Register global model
app.model(require('./models/layout').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store;  // eslint-disable-line