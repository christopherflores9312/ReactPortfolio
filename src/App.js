import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './css/App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router basename="/ReactPortfolio">
      <Header>
        <Navigation />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
    </ThemeProvider>
  );
}

export default App;
