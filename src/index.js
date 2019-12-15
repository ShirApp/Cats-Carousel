import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import React from 'react';

export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
