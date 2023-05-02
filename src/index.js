import axios from 'axios'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import store from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.withCredentials = true;
if (localStorage.AirBnbToken) {
  const { token } = JSON.parse(localStorage.AirBnbToken);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
root.render(
  <Provider store = {store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>
);

