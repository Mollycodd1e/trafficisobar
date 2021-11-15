import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import App from './components/app/app';
import reducer from './components/store/reducer.js';
import browserHistory from './browser-history';

const store = configureStore({reducer: reducer});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

