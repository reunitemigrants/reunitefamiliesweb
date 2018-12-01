import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import { Wrapper } from './shared/components/Wrapper';
import { Home } from './Home/components/Home';
import { Register } from './Home/components/Register';

import 'normalize.css/normalize.css';
import 'typeface-source-sans-pro';
import 'typeface-montserrat';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import './index.css';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <Wrapper>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/register" component={Register} />
      </Wrapper>
    </BrowserRouter>
  </I18nextProvider>,
  document.getElementById('root'),
);
