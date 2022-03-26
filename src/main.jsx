import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// import bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import font-awesome
import '../node_modules/font-awesome/css/font-awesome.min.css';
// react icons
import '../node_modules/react-icons/fa';
import {BrowserRouter, Route, Routes} from '../node_modules/react-router-dom';
import {Provider} from '../node_modules/react-redux';
import {store} from './redux/store';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Provider store={store}>
      <Route path="*" element={<App />} />
      </Provider>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
