import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ExportProcess from './pages/ExportProcess';
import Slaughter from './pages/Slaughter';
import Certifications from './pages/Certifications';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
// Don't import CSS here as we've moved it to main.jsx

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/export-process" element={<ExportProcess />} />
          <Route path="/slaughter" element={<Slaughter />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;