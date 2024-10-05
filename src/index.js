import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home  from './Components/Home/Home';
import Navbutton from './Components/Navbutton/Navbutton';
import "@fontsource/eb-garamond";

export {
  Home,
  Navbutton
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
