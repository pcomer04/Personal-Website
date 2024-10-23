import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home  from './Components/Home/Home';
import Navbutton from './Components/Navbutton/Navbutton';
import Contact from './Components/Contact/Contact';
import Academics from './Components/Academics/Academics';
import Navbar from './Components/Navbar/Navbar';
import Musician from './Components/Musician/Musician';
import "@fontsource/eb-garamond";
// import 'bootstrap/dist/css/bootstrap.min.css';

export {
  Home,
  Navbutton,
  Contact,
  Navbar,
  Academics,
  Musician
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
