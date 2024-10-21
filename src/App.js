import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home, Contact, Academics, Navbar, Musician} from "./index";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/academic" element={<Academics />} />
        <Route path="/musician" element={<Musician />} />
      </Routes>
    </Router>
  );
}

export default App;
