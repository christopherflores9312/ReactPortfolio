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
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#92ccce',
    },
    text: {
      primary: '#31343d',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router >
      <Header>
        <Navigation />
      </Header>
      <Routes>
        <Route path="/ReactPortfolio" element={<Home />} />
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
