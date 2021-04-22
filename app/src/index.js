import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Home from './containers/Home';
import cfg from './store';

const store = cfg.configStore();

ReactDOM.render(
  <main>
    <Provider store={ store }>
      <ConnectedRouter history = { cfg.history }>
        <Route exact path="/" component={ Home }></Route>
      </ConnectedRouter>
    </Provider>
  </main>,
  document.getElementById('root')
);