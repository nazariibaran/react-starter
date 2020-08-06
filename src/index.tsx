import '@app/styles/global.scss';
import '@localization/yup';
import { App } from '@app';
import { Routes } from '@app/routes';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { localize } from '@localization/i18n';
import { createStore } from '@redux';

localize();

const history = createBrowserHistory();
const store = createStore(history);

const setup = () => {
  render(
    <App store={store} history={history}>
      <Routes />
    </App>,
    document.getElementById('app')
  );
};

setup();

// if (module.hot) {
//   module.hot.addDisposeHandler(() => {
//     console.log('dispose');
//     unmountComponentAtNode(document.getElementById('app'));
//   });
//   module.hot.accept();
// }
