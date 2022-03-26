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
// routes
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
