import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Grades from './components/Grades';
import Projects from './components/Projects';
import Form from './components/Form';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid container">
            <a className="navbar-brand fw-bold" href="/">My Portfolio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                
                <li className="nav-item"><a className="nav-link" href="/intro">Intro</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link" href="/grades">Grades</a></li>
                <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="/form">Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="/cards">Cards</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/intro" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/form" element={<Form />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
