import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './AuthContext/AuthContext';
import Userdata from  './keyclock/KeyclockConfig';
import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from "redux-axios-middleware";
import axios from 'axios';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import rootReducer from './generated/combinedReducers';


const _axios = axios.create({ baseURL: 'http://localhost:8000' });

_axios.interceptors.request.use((config) => {
  if (Userdata.isLoggedIn()) {
    const cb = () => {
      config.headers.Authorization = `Bearer ${Userdata.getToken()}`;
      return Promise.resolve(config);
    };
    return new Promise<void>((resolve) => {
      Userdata.updateToken(cb);
      resolve();
    }).then(() => config);
  }
  return Promise.resolve(config);
});




const _middleware = applyMiddleware(thunk, axiosMiddleware(_axios));
const store = createStore(rootReducer, _middleware);



function renderApp() {


  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
       <Provider store={store}>
      <AuthProvider>  {/* Wrap App with AuthProvider */}
      <App store= {store} />
      </AuthProvider>
      </Provider>
    </React.StrictMode>
  );
}

Userdata.initKeycloak(renderApp);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





