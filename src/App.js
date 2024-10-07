import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home, Contact, Academics} from "./index";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="student" element={<Academics />} />
      </Routes>
    </Router>
  );
}

export default App;
