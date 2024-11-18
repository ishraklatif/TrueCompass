import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/NavbarComponent';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ITES from './pages/ites';
import BPO from './pages/bpo';
import OUTS from './pages/outs';
import PRM from './pages/prm';
import TECH from './pages/tech';
import TERMS from './pages/terms';
import './App.css';

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ites" element={<ITES />} /> {/* ITES Route */}
        <Route path="/services/bpo" element={<BPO />} /> {/* BPO Route */}
        <Route path="/services/outs" element={<OUTS />} /> {/* OUTS Route */}
        <Route path="/services/prm" element={<PRM />} /> {/* PRM Route */}
        <Route path="/services/tech" element={<TECH />} /> {/* TECH Route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TERMS />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
