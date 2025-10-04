import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Grades from './components/Grades';
import Projects from './components/Projects';
import Form from './components/Form';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Home />
      <Intro />
      <About />
      <Skills />
      <Grades />
      <Projects />
      <Form />
      <Cards />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer />
    </div>
    
  );
}

export default App;
