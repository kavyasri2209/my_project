import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
import Header from "./components/Header";

function AllComponents() {
  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Grades />
      <Projects />
      <Form />
      <Cards />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">

        

       <Header/>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<AllComponents />} />
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
// ...existing code...