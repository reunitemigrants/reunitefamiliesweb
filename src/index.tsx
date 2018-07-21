import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Landing from './Landing';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render((
  <BrowserRouter>
    <Landing />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
