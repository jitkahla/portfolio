import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Layout = () => <div className="background">
<header>
  <div className="logo">Jh</div>
  <div className="nav">
          <a href="#home">Domů</a>
          <a href="#about">O mně</a>
          <a href="#projects">Projekty</a>
          <a href="#contact">Kontakt</a>
        </div>
  </header>
  <main>
    <Home />
    <About />
    <Projects />
    <Contact />
  </main>
  </div>

const App = () => 
    <div className="App">
        <Layout />   
    </div>

export default App;



