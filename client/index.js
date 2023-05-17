import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';
import Navbar from './components/Navbar';
import App from './App';
import './index.css';
import Routes from './Routes';

// make sure this react dom create refers to the same id of the div in the index.html file
ReactDOM.createRoot(document.getElementById('app')).render(
  <Provider store={store}>
    <div className="bg-gradient-to-t from-cyan-500 to-blue-500  min-h-screen min-w-screen">
      <Navbar />
      <Routes />
      {/* <App /> */}
    </div>
  </Provider>
);
