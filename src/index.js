import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import ChildProfile from './ChildProfile';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <ChildProfile />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
