import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import Landing from './Landing/Landing';
import i18n from './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  </I18nextProvider>,
  document.getElementById('root'),
);
